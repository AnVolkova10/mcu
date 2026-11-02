/**
 * Gathers what the audit of a production needs (docs/AUDIT_GUIDE.md) into .research/<production>/, which git ignores:
 *   archive.md   what the archive says today: events, characters and places, with the map points they share
 *   tmdb.md      episodes, dates, synopsis and credits
 *   wiki/        the story in the universe's wiki and in the Marvel Database, as wikitext, with transcripts if they exist
 *
 *   npm run research -- spider-noir-s1
 *   npm run research -- spider-noir-s1 "Ben Reilly" "Silvermane"     also read these pages
 *
 * Read-only for the content. Uses the token in .env.local (TMDB_READ_TOKEN). Run it once per production, by hand:
 * it goes slowly on purpose and it is not meant for automated tasks (see "Si la página se hace pública" in docs/ROADMAP.md).
 */
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { locationList, productionList, series, type Production } from '../src/domain/catalog';
import { toPlainText } from '../src/domain/markup';
import { askWiki, MARVEL_DATABASE, WIKIS } from './fandom';
import { loadArchive } from './load-archive';
import { ROOT, tmdb, TV_SPECIALS } from './tmdb';

interface Person {
  name: string;
  character?: string;
}
interface Credits {
  cast?: Person[];
  guest_stars?: Person[];
}
interface Episode {
  episode_number: number;
  name: string;
  air_date: string;
  runtime: number | null;
  overview: string;
}
interface Season {
  name: string;
  air_date: string;
  overview: string;
  episodes: Episode[];
}
interface Movie {
  title: string;
  release_date: string;
  runtime: number | null;
  overview: string;
}
interface Parsed {
  parse?: { title: string; wikitext: { '*': string } };
}

const [id, ...extraPages] = process.argv.slice(2);
const production = productionList.find((p) => p.id === id);
if (!production) {
  console.error('Usage: npm run research -- <production id> ["Wiki page" ...]. The ids are in: npm run content -- status');
  process.exit(1);
}

const OUT = join(ROOT, '.research', production.id);
const credited = ({ cast = [], guest_stars = [] }: Credits) => [...cast, ...guest_stars].map((p) => `${p.character || '?'} (${p.name})`).join(' | ');

async function archiveReport(p: Production) {
  const { archive } = await loadArchive();
  const atPoint = new Map<string, string[]>();
  for (const l of locationList) if (l.coords) atPoint.set(l.coords.join(), [...(atPoint.get(l.coords.join()) ?? []), l.id]);

  const lines = [`# ${p.title}`, `${p.status}${p.verified ? ', verified' : ''} · ${p.universe} · ${p.phase ?? 'no phase'} · released ${p.released}`, '', p.description ?? ''];
  for (const event of archive.byProduction.get(p.id) ?? []) {
    lines.push('', `## ${event.dateLabel} · ${event.id}${event.segment ? ` · ${event.segment}` : ''}`, event.title, '', ...event.text.map(toPlainText), '');
    lines.push(`Characters: ${event.characters.map((c) => `${c.label} (${c.id})`).join(', ') || 'none'}`);
    for (const { location, note } of event.locations) {
      const others = location.coords ? atPoint.get(location.coords.join())!.filter((other) => other !== location.id) : [];
      lines.push(`Place: ${location.name} (${location.id})${note ? `, ${note}` : ''}${location.coords ? ` at ${location.coords.join(', ')}` : ''}${others.length ? `, same point as ${others.join(', ')}` : ''}`);
    }
    if (event.deaths.length) lines.push(`Deaths: ${event.deaths.map((d) => d.name + (d.presumed ? ' (presumed)' : '')).join(', ')}`);
  }
  return lines;
}

/** What TMDB knows, and the titles the wikis use for the same story. */
async function tmdbReport(p: Production) {
  const show = p.series ? series[p.series].tmdbId : TV_SPECIALS.has(p.id) ? p.tmdbId : undefined;
  if (show) {
    const number = p.season ?? 1;
    const season = await tmdb<Season>(`/tv/${show}/season/${number}`);
    const lines = [`# ${season.name} · ${season.air_date}`, season.overview];
    for (const episode of season.episodes) {
      const credits = await tmdb<Credits>(`/tv/${show}/season/${number}/episode/${episode.episode_number}/credits`);
      lines.push('', `## E${episode.episode_number} · ${episode.name} · ${episode.air_date} · ${episode.runtime ?? '?'}m`, episode.overview, `Credits: ${credited(credits)}`);
    }
    const name = p.series ? series[p.series].title : p.title;
    return { lines, stories: season.episodes.map((e) => e.name), databasePages: season.episodes.map((e) => `${name} Season ${number} ${e.episode_number}`) };
  }
  if (p.tmdbId) {
    const movie = await tmdb<Movie>(`/movie/${p.tmdbId}`);
    const credits = await tmdb<Credits>(`/movie/${p.tmdbId}/credits`);
    return { lines: [`# ${movie.title} · ${movie.release_date} · ${movie.runtime ?? '?'}m`, movie.overview, '', `Credits: ${credited(credits)}`], stories: [movie.title], databasePages: [`${movie.title} (film)`] };
  }
  return { lines: [`# ${p.title}`, 'No TMDB id in the catalog.'], stories: [p.title], databasePages: [p.title] };
}

async function readPage(wiki: string, folder: string, page: string) {
  const { parse } = await askWiki<Parsed>(wiki, { action: 'parse', page, prop: 'wikitext' });
  if (!parse) return false;
  mkdirSync(join(OUT, folder), { recursive: true });
  writeFileSync(join(OUT, folder, `${page.replace(/[^\w'-]+/g, '_')}.txt`), `# ${parse.title}\n\n${parse.wikitext['*']}`);
  return true;
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

writeFileSync(join(OUT, 'archive.md'), (await archiveReport(production)).join('\n'));
const { lines, stories, databasePages } = await tmdbReport(production);
writeFileSync(join(OUT, 'tmdb.md'), lines.join('\n'));

const universeWiki: string | undefined = WIKIS[production.universe];
const sources = [
  ...(universeWiki ? [{ wiki: universeWiki, folder: 'wiki/universe', pages: [...stories, ...stories.map((s) => `${s}/Transcript`), ...extraPages] }] : []),
  { wiki: MARVEL_DATABASE, folder: 'wiki/marvel-database', pages: [...databasePages, ...extraPages] },
];

const missing: string[] = [];
for (const { wiki, folder, pages } of sources) {
  for (const page of pages) if (!(await readPage(wiki, folder, page))) missing.push(`${folder}: ${page}`);
}

const read = sources.reduce((sum, s) => sum + s.pages.length, 0) - missing.length;
console.log(`Research for ${production.id} in .research/${production.id}/: ${read} wiki pages.`);
if (missing.length) console.log(`\nNot on the wikis (${missing.length}). A missing transcript is normal; name other pages if the story is missing:\n  ${missing.join('\n  ')}`);
