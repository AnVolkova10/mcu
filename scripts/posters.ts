/**
 * Fills TMDB ids and poster paths into the catalogs. Uses the token in .env.local (TMDB_READ_TOKEN);
 * the deployed app only stores image paths and never needs the token.
 *
 *   npm run posters:sync            only productions without a poster
 *   npm run posters:sync -- --force refresh every poster
 *
 * To fix a wrong match, set `tmdbId` by hand on the movie (productions.ts) or the series (series.ts) and run again.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { productions } from '../src/content/catalog/productions';
import { series } from '../src/content/catalog/series';
import type { ProductionInput, SeriesInput } from '../src/domain/schema';
import { ROOT, tmdb, TV_SPECIALS } from './tmdb';

const FORCE = process.argv.includes('--force');

// Productions that exist only inside other films (in-universe videos, promos): they keep the designed fallback.
const NOT_ON_TMDB = new Set(['stark-expo-1974', 'peggy-carter-1953-interview', 'come-to-wakanda-before']);

// Searches that need a different query than the catalog title.
const QUERY: Record<string, { query: string; year?: number }> = {
  'agents-of-shield-slingshot': { query: 'Agents of S.H.I.E.L.D.: Slingshot', year: 2016 },
  'x-men-tas': { query: 'X-Men: The Animated Series', year: 1992 },
  'spider-man-tas': { query: 'Spider-Man: The Animated Series', year: 1994 },
  'fantastic-four-tas': { query: 'Fantastic Four: The Animated Series', year: 1994 },
  'iron-man-tas': { query: 'Iron Man', year: 1994 },
  'incredible-hulk-tas': { query: 'The Incredible Hulk', year: 1996 },
};

interface MovieHit { id: number; title: string; release_date?: string; poster_path?: string | null }
interface TvHit { id: number; name: string; first_air_date?: string; poster_path?: string | null; genre_ids?: number[] }

const norm = (s: string) => s.toLowerCase().replace(/^marvel'?s\s+/, '').replace(/[^a-z0-9]+/g, ' ').trim();
const yearOf = (date?: string) => (date ? Number(date.slice(0, 4)) : NaN);
const firstYear = (released: string) => Number(released.slice(0, 4));

async function findMovie(title: string, year: number): Promise<MovieHit | undefined> {
  const { results } = await tmdb<{ results: MovieHit[] }>('/search/movie', { query: title, year });
  const near = results.filter((r) => Math.abs(yearOf(r.release_date) - year) <= 1);
  return near.find((r) => norm(r.title) === norm(title)) ?? near[0];
}

async function findShow(title: string, year: number, animated: boolean): Promise<TvHit | undefined> {
  const { results } = await tmdb<{ results: TvHit[] }>('/search/tv', { query: title, first_air_date_year: year });
  const fits = results.filter((r) => Math.abs(yearOf(r.first_air_date) - year) <= 1 && (!animated || r.genre_ids?.includes(16)));
  return fits.find((r) => norm(r.name) === norm(title)) ?? fits[0];
}

// ── Resolve ─────────────────────────────────────────────────────────────────

const prodOut: Record<string, ProductionInput> = JSON.parse(JSON.stringify(productions));
const seriesOut: Record<string, SeriesInput> = JSON.parse(JSON.stringify(series));
const missing: string[] = [];
let updated = 0;

for (const [id, s] of Object.entries(seriesOut)) {
  if (s.tmdbId && !FORCE) continue;
  const q = QUERY[id] ?? { query: s.title, year: firstYear(Object.values(prodOut).find((p) => p.series === id)?.released ?? '0') };
  const hit = await findShow(q.query, q.year!, Boolean(s.animated));
  if (hit) s.tmdbId = hit.id;
  else missing.push(`series ${id} ("${q.query}", ${q.year})`);
}

for (const [id, p] of Object.entries(prodOut)) {
  if (NOT_ON_TMDB.has(id) || (p.poster && !FORCE)) continue;
  let poster: string | null | undefined;
  if (p.kind === 'season' && p.series) {
    const showId = seriesOut[p.series].tmdbId;
    if (showId) {
      const season = await tmdb<{ poster_path?: string | null }>(`/tv/${showId}/season/${p.season}`).catch(() => undefined);
      poster = season?.poster_path ?? (await tmdb<{ poster_path?: string | null }>(`/tv/${showId}`)).poster_path;
    }
  } else if (TV_SPECIALS.has(id)) {
    const hit = await findShow(QUERY[id].query, QUERY[id].year!, false);
    if (hit) { p.tmdbId = hit.id; poster = hit.poster_path; }
  } else {
    if (p.tmdbId) poster = (await tmdb<{ poster_path?: string | null }>(`/movie/${p.tmdbId}`)).poster_path;
    else {
      const hit = await findMovie(QUERY[id]?.query ?? p.title, QUERY[id]?.year ?? firstYear(p.released));
      if (hit) { p.tmdbId = hit.id; poster = hit.poster_path; }
    }
  }
  if (poster) { p.poster = poster; updated++; }
  else missing.push(`production ${id} ("${p.title}", ${p.released})`);
}

// ── Write back (same layout as the hand-edited files) ───────────────────────

const isIdent = (k: string) => /^[A-Za-z_$][\w$]*$/.test(k);
const quote = (s: string) => (!s.includes("'") ? `'${s}'` : !s.includes('"') ? `"${s}"` : `\`${s}\``);
const value = (v: unknown): string => (typeof v === 'string' ? quote(v.replace(/\\/g, '\\\\')) : typeof v === 'object' ? JSON.stringify(v) : String(v));
const entry = (id: string, obj: object, inline: boolean) => {
  const fields = Object.entries(obj).filter(([, v]) => v !== undefined).map(([k, v]) => `${k}: ${value(v)}`);
  const key = isIdent(id) ? id : `'${id}'`;
  return inline ? `  ${key}: { ${fields.join(', ')} },` : `  ${key}: {\n${fields.map((f) => `    ${f},`).join('\n')}\n  },`;
};
function rewrite(file: string, exportName: string, data: Record<string, object>, inline: boolean) {
  const source = readFileSync(file, 'utf8');
  const start = source.indexOf(`export const ${exportName} = {`);
  const end = source.indexOf('} as const satisfies', start);
  const body = Object.entries(data).map(([id, obj]) => entry(id, obj, inline)).join('\n');
  writeFileSync(file, `${source.slice(0, start)}export const ${exportName} = {\n${body}\n${source.slice(end)}`);
}

rewrite(join(ROOT, 'src/content/catalog/series.ts'), 'series', seriesOut, true);
rewrite(join(ROOT, 'src/content/catalog/productions.ts'), 'productions', prodOut, false);

console.log(`Posters updated: ${updated}. Skipped on purpose: ${NOT_ON_TMDB.size} in-universe specials.`);
if (missing.length) console.log(`Not found (${missing.length}) — set tmdbId by hand and run again:\n  ` + missing.join('\n  '));
