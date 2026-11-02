/**
 * Who plays each character in each universe, actors and animation voices, from the TMDB credits of their productions.
 * Writes src/content/catalog/cast.ts. Uses the token in .env.local (TMDB_READ_TOKEN).
 *
 *   npm run cast:sync
 *
 * A credit only counts if it names the character outright, so relatives, doubles and disguises stay out.
 * Someone missing or wrong? Fix it in CREDITED_AS or NOT_THEM and run it again.
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { normalize } from '../src/domain/archive';
import { characterList, series, type Character, type Production } from '../src/domain/catalog';
import type { CharacterCredit, ProductionId, UniverseId } from '../src/domain/schema';
import { loadArchive } from './load-archive';
import { ROOT, tmdb, TV_SPECIALS } from './tmdb';

/** Other names a character is credited under. */
const CREDITED_AS: Record<string, readonly string[]> = {
  'archangel-warren-worthington': ['Angel'],
  'fred-dukes': ['Fred Dukes'],
  'johann-fennhoff': ['Dr. Ivchenko'],
  'last-black-panther': ['The Intruder'],
  'lilandra-neramani': ['Lilandra', 'Empress Lilandra'],
  medusa: ['Madam Medusa'],
  odin: ['Odin'],
  'robbie-robertson-noir': ['Joe Robertson'],
  ronan: ['Ronan'],
  'ruby-williams-noir': ['Ruby'],
  'silvermane-noir': ['Finn Byrne'],
  'war-machine': ['Rhodey'],
  'william-stryker': ['Stryker', 'Bill Stryker'],
};

/** Credits that name the character but are not them: child versions, doubles, other people under the same title. */
const NOT_THEM: Record<string, readonly string[]> = {
  'charles-xavier': ['Laurence Belcher'],
  'en-sabah-nur-apocalypse': ['Brendan Pedder'],
  'monica-rambeau': ['Azari Akbar'],
  'peggy-carter': ['Carole Ruggier'],
  wasp: ['Hayley Lovitt'],
};

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

const TITLE = /^(the|dr|doctor|prof|professor|col|colonel|lt|lieutenant|sgt|sergeant|gen|general|capt|captain|major|agent|director|senator|mr|mrs|ms|miss|sir|lord|lady|king|queen|prince|princess) /;
const NICKNAME = /\s['"‘“][^'"’”]+['"’”]\s/;

const plain = (s: string) => normalize(s).replace(/\(.*?\)/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();

/** "Lt. Col. James 'Rhodey' Rhodes" also reads "james rhodes". */
function forms(name: string): string[] {
  const found = new Set<string>();
  for (const base of [name, name.replace(NICKNAME, ' ')]) {
    let form = plain(base);
    found.add(form);
    while (TITLE.test(form)) {
      form = form.replace(TITLE, '');
      found.add(form);
    }
  }
  return [...found].filter(Boolean);
}

const namesOf = (c: Character) => new Set([c.name, c.alias, ...(CREDITED_AS[c.id] ?? [])].filter((n): n is string => Boolean(n)).flatMap(forms));

/** "Bruce Banner / The Hulk" names him twice; "Gamora's Mother", "Tony Stark Usher" and "Young Thor" name someone else. */
const names = (role: string, wanted: ReadonlySet<string>) => role.split(/[/&]/).some((part) => !/['’]s?\s/.test(part.replace(NICKNAME, ' ')) && forms(part).some((f) => wanted.has(f)));

const { archive } = await loadArchive();
const isAnimated = (p: Production) => Boolean(p.animated || (p.series && series[p.series].animated));

interface Role {
  actor: string;
  universe: UniverseId;
  voice: boolean;
  photo: string | null;
  billing: number;
  productions: Set<ProductionId>;
}

const out = new Map<string, CharacterCredit[]>();
const silent: string[] = [];

for (const c of characterList) {
  const appearances = new Map<string, { production: Production; universe: UniverseId }>();
  for (const e of archive.byCharacter.get(c.id) ?? []) {
    for (const production of [e.production, ...e.alsoIn]) appearances.set(`${production.id}|${e.universe.id}`, { production, universe: e.universe.id });
  }

  const wanted = namesOf(c);
  const roles = new Map<string, Role>();
  for (const { production, universe } of appearances.values()) {
    for (const credit of await castOf(production)) {
      if (!names(credit.role, wanted) || NOT_THEM[c.id]?.includes(credit.actor)) continue;
      const voice = isAnimated(production) || /\(voice\)/i.test(credit.role);
      if (voice && /uncredited/i.test(credit.role)) continue;
      const key = `${credit.actor}|${universe}`;
      const role = roles.get(key) ?? { actor: credit.actor, universe, voice, photo: credit.photo, billing: credit.billing, productions: new Set() };
      role.productions.add(production.id);
      role.voice &&= voice;
      role.billing = Math.min(role.billing, credit.billing);
      roles.set(key, role);
    }
  }

  const ranked = [...roles.values()].sort((a, b) => Number(a.voice) - Number(b.voice) || b.productions.size - a.productions.size || a.billing - b.billing);
  if (ranked.length) out.set(c.id, ranked.map(({ actor, universe, voice, photo, productions }) => ({ actor, universe, productions: [...productions], ...(voice ? { voice } : {}), ...(photo ? { photo } : {}) })));
  else if (appearances.size) silent.push(c.id);
}

const text = (s: string) => (s.includes("'") ? `"${s}"` : `'${s}'`);
const row = ({ actor, universe, productions, voice, photo }: CharacterCredit) =>
  `    { actor: ${text(actor)}, universe: '${universe}', productions: [${productions.map((p) => `'${p}'`).join(', ')}]${voice ? ', voice: true' : ''}${photo ? `, photo: '${photo}'` : ''} },`;
const entries = [...out.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, list]) => `  '${id}': [\n${list.map(row).join('\n')}\n  ],`);

writeFileSync(join(ROOT, 'src/content/catalog/cast.ts'), `// Generated by \`npm run cast:sync\`. To fix a credit, edit CREDITED_AS or NOT_THEM in scripts/cast.ts and run it again.
import type { CharacterCredit, CharacterId } from '@/domain/schema';

export const cast: Partial<Record<CharacterId, readonly CharacterCredit[]>> = {
${entries.join('\n')}
};
`);

const several = [...out.entries()].flatMap(([id, list]) => {
  const onScreen = list.filter((x) => !x.voice);
  const inOneUniverse = [...new Set(onScreen.map((x) => x.universe))].map((universe) => onScreen.filter((x) => x.universe === universe));
  return inOneUniverse.filter((same) => same.length > 1).map((same) => `${id}: ${same.map((x) => `${x.actor} (${x.productions.length})`).join(', ')}`);
});
console.log(`Credits: ${out.size} of ${characterList.length} characters.`);
if (several.length) console.log(`\nSeveral on-screen actors in one universe. If one is not them, add it to NOT_THEM (${several.length}):\n  ${several.join('\n  ')}`);
if (silent.length) console.log(`\nNo credit found. If they are credited under another name, add it to CREDITED_AS (${silent.length}):\n  ${silent.join(', ')}`);
