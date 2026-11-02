/**
 * Gives each character the photo of the actor who plays them, taken from the TMDB credits of their live-action
 * productions, and stores it in src/content/catalog/photos.ts. Uses the token in .env.local (TMDB_READ_TOKEN).
 *
 *   npm run photos:sync             only characters without a photo
 *   npm run photos:sync -- --force  match every character again
 *
 * A wrong face? Write the right actor in ACTORS and run it again.
 * Characters who only exist in animation have no photo: they keep their initials.
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { photos } from '../src/content/catalog/photos';
import { normalize } from '../src/domain/archive';
import { characterList, series, type Character, type Production } from '../src/domain/catalog';
import type { CharacterPhoto } from '../src/domain/schema';
import { loadArchive } from './load-archive';
import { ROOT, tmdb, TV_SPECIALS } from './tmdb';

const FORCE = process.argv.includes('--force');

/** Who plays a character when the credits use another name or the match picks someone else. This always wins. */
const ACTORS: Record<string, string> = {
  'archangel-warren-worthington': 'Ben Hardy',
  'johann-fennhoff': 'Ralph Brown',
  odin: 'Anthony Hopkins',
  ronan: 'Lee Pace',
  'ruby-williams-noir': 'Amanda Schull',
};

/** Digital or animal roles: the person credited is not who appears on screen, so they keep their initials. */
const NO_FACE = new Set<string>(['goose', 'groot', 'rocket', 'thanos']);

interface CastMember {
  name: string;
  profile_path: string | null;
  order: number;
  character?: string;
  roles?: { character: string }[];
}

interface Credit {
  actor: string;
  role: string;
  photo: string | null;
  billing: number;
}

interface Candidate extends Credit {
  score: number;
  /** Productions where this actor matched. */
  hits: number;
}

async function fetchCast(p: Production): Promise<Credit[]> {
  const show = p.series && series[p.series].tmdbId;
  const path = show ? `/tv/${show}/season/${p.season}/aggregate_credits`
    : !p.tmdbId ? undefined
    : TV_SPECIALS.has(p.id) ? `/tv/${p.tmdbId}/aggregate_credits`
    : `/movie/${p.tmdbId}/credits`;
  if (!path) return [];
  const { cast } = await tmdb<{ cast: CastMember[] }>(path).catch(() => ({ cast: [] as CastMember[] }));
  return cast.flatMap((m) => (m.roles?.map((r) => r.character) ?? [m.character ?? '']).map((role) => ({ actor: m.name, role, photo: m.profile_path, billing: m.order })));
}

const casts = new Map<string, Promise<Credit[]>>();
const castOf = (p: Production) => {
  if (!casts.has(p.id)) casts.set(p.id, fetchCast(p));
  return casts.get(p.id)!;
};

const words = (s: string) => ` ${normalize(s).replace(/[^a-z0-9]+/g, ' ').trim()} `;

const TITLES = new Set(['dr', 'doctor', 'the', 'agent', 'captain', 'professor', 'mr', 'mrs', 'king', 'queen', 'general', 'sir', 'lady', 'lord', 'colonel', 'major', 'senator']);

/** A voice has no face, and a younger version is another actor's take on the same person. */
const NOT_THE_FACE = / (voice|young|younger|child|teen|teenage|kid|boy|girl|little|baby|archive) /;

/** 3: the credit names the character. 2: it has every word of the name. 1: only the surname. 0: someone else. */
function score(c: Character, role: string): number {
  const credit = words(role);
  if (NOT_THE_FACE.test(credit)) return 0;
  if (credit.includes(words(c.name)) || (c.alias && credit.includes(words(c.alias)))) return 3;
  const name = words(c.name).trim().split(' ').filter((w) => !TITLES.has(w) && w.length > 2);
  if (name.length > 1 && name.every((w) => credit.includes(` ${w} `))) return 2;
  const last = name[name.length - 1];
  return last && last.length > 3 && credit.includes(` ${last} `) ? 1 : 0;
}

async function findPerson(name: string): Promise<Pick<Credit, 'actor' | 'photo'> | undefined> {
  const { results } = await tmdb<{ results: { name: string; profile_path: string | null }[] }>('/search/person', { query: name });
  const hit = results.find((r) => r.name === name) ?? results[0];
  return hit && { actor: hit.name, photo: hit.profile_path };
}

const { archive } = await loadArchive();
const isLive = (p: Production) => !p.animated && !(p.series && series[p.series].animated);

const out: Record<string, CharacterPhoto | undefined> = { ...photos };
const several: string[] = [];
const faceless: string[] = [];

for (const c of characterList) {
  const wanted = ACTORS[c.id];
  if (NO_FACE.has(c.id)) {
    delete out[c.id];
    continue;
  }
  if (out[c.id] && !FORCE && (!wanted || wanted === out[c.id]?.actor)) continue;

  const productions = [...new Set((archive.byCharacter.get(c.id) ?? []).flatMap((e) => [e.production, ...e.alsoIn]))].filter(isLive);
  if (!productions.length) continue;

  const candidates = new Map<string, Candidate>();
  for (const p of productions) {
    const seen = new Set<string>();
    for (const credit of await castOf(p)) {
      const points = score(c, credit.role);
      if (!points || !credit.photo) continue;
      const known = candidates.get(credit.actor);
      candidates.set(credit.actor, {
        ...credit,
        score: Math.max(points, known?.score ?? 0),
        billing: Math.min(credit.billing, known?.billing ?? Infinity),
        hits: (known?.hits ?? 0) + (seen.has(credit.actor) ? 0 : 1),
      });
      seen.add(credit.actor);
    }
  }
  const ranked = [...candidates.values()].sort((a, b) => b.score - a.score || b.hits - a.hits || a.billing - b.billing);
  const best = wanted ? (candidates.get(wanted) ?? (await findPerson(wanted))) : ranked[0];

  if (best?.photo) out[c.id] = { actor: best.actor, path: best.photo };
  else delete out[c.id];
  if (!best?.photo) faceless.push(`${c.id}${wanted ? ` (no photo of ${wanted})` : ''}`);
  else if (!wanted && ranked.length > 1) several.push(`${c.id}: ${best.actor}, over ${ranked.slice(1, 4).map((r) => r.actor).join(', ')}`);
}

const text = (s: string) => (s.includes("'") ? `"${s}"` : `'${s}'`);
const rows = Object.entries(out)
  .flatMap(([id, photo]) => (photo ? [`  '${id}': { actor: ${text(photo.actor)}, path: '${photo.path}' },`] : []))
  .sort();

writeFileSync(join(ROOT, 'src/content/catalog/photos.ts'), `// Generated by \`npm run photos:sync\`. To change a face, edit ACTORS in scripts/photos.ts and run it again.
import type { CharacterId, CharacterPhoto } from '@/domain/schema';

export const photos: Partial<Record<CharacterId, CharacterPhoto>> = {
${rows.join('\n')}
};
`);

console.log(`Photos: ${rows.length} of ${characterList.length} characters.`);
if (several.length) console.log(`\nMore than one actor. If the face is wrong, set it in ACTORS (${several.length}):\n  ${several.join('\n  ')}`);
if (faceless.length) console.log(`\nLive-action characters without a photo (${faceless.length}):\n  ${faceless.join('\n  ')}`);
