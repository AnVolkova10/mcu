/**
 * Finds an image of each character in each universe on that universe's fan wiki, through the public MediaWiki API,
 * and stores its address in src/content/catalog/portraits.ts. The images stay on Fandom: the app links to them.
 *
 *   npm run portraits:sync             only what is missing
 *   npm run portraits:sync -- --force  look everything up again
 *
 * Wrong person? Name the right page in PAGES. Right person, bad framing? Name a better file in FILES.
 * Read "Si la página se hace pública" in docs/ROADMAP.md before relying on this in public.
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { portraits } from '../src/content/catalog/portraits';
import { characterList, type Character } from '../src/domain/catalog';
import type { CharacterPortraits } from '../src/domain/schema';
import { askWiki, WIKIS } from './fandom';
import { loadArchive } from './load-archive';

const ROOT = join(import.meta.dirname, '..');
const FORCE = process.argv.includes('--force');
const BATCH = 45;

/** Characters with no events yet, so nothing says which wiki to ask. */
const HOME: Record<string, string> = {
  azazel: 'earth-10005',
};

/**
 * The page of a character whose name does not find it, or finds whoever holds that title now, per universe.
 * When several actors play a character in one universe, the image is of the latest one: on the Fox wiki, the "/Revised Timeline" pages.
 */
const PAGES: Record<string, Record<string, string>> = {
  achilles: { 'earth-616': 'Achilles' },
  'agent-zero': { 'earth-92131': 'Maverick' },
  akeya: { 'earth-616': 'Akeya' },
  basha: { 'earth-616': 'Basha (War Dog)' },
  'black-panther': { 'earth-616': "T'Challa" },
  'black-tom-cassidy': { 'earth-92131': 'Black Tom Cassidy' },
  'black-widow': { 'earth-616': 'Natasha Romanoff', 'earth-92131': 'Black Widow (Age of Apocalypse)' },
  'crusher-creel': { 'earth-92131': 'Absorbing Man' },
  'cyclops-scott-summers': { 'earth-10005': 'Cyclops/Revised Timeline' },
  'd-ken-neramani': { 'earth-92131': "D'Ken" },
  ebo: { 'earth-616': 'Ebo' },
  'erik-killmonger': { 'earth-616': 'Erik Killmonger' },
  'graydon-creed': { 'earth-92131': 'Graydon Creed, Jr.' },
  helen: { 'earth-616': 'Helen of Troy' },
  hulk: { 'earth-92131': 'Hulk' },
  'jean-grey': { 'earth-10005': 'Jean Grey/Revised Timeline', 'earth-92131': 'Jean Grey' },
  jorani: { 'earth-616': 'Jorani' },
  'kayla-silverfox': { 'earth-92131': 'Silver Fox' },
  'mary-jane-clone': { 'earth-92131': 'Mary Jane Watson (Clone)' },
  'kraven-the-hunter': { 'earth-92131': 'Kraven the Hunter' },
  'last-black-panther': { 'earth-616': 'Black Panther (Future)' },
  'lilandra-neramani': { 'earth-92131': 'Lilandra' },
  'maria-rambeau': { 'earth-616': 'Maria Rambeau' },
  'miss-allure': { 'earth-92131': 'Miss Allure' },
  odysseus: { 'earth-616': 'Odysseus' },
  paris: { 'earth-616': 'Paris of Troy' },
  rakim: { 'earth-616': 'Rakim (War Dogs)' },
  'ruby-williams-noir': { 'earth-62533': 'Ruby J. Williams' },
  'steve-rogers': { 'earth-616': 'Steve Rogers' },
  'the-punisher': { 'earth-616': 'Punisher' },
};

/** A file, plus the square to keep when its figure is small: left, top and side as fractions of its width and height. */
type FilePick = string | readonly [file: string, left: number, top: number, side: number];

/** The Days of Future Past posters share a layout: a small figure in front of an X. */
const poster = (name: string): FilePick => [`XMDOFP ${name} Character Poster.jpg`, 0.3, 0.17, 0.4];

/** A better file than the page's lead image, per universe. */
const FILES: Record<string, Record<string, FilePick>> = {
  'alistair-smythe': { 'earth-92131': ['Smythehuman.jpg', 0.38, 0, 0.5] },
  'ana-jarvis': { 'earth-616': ['Agent Carter Season 2 Promo 10.jpg', 0.32, 0.01, 0.34] },
  'angie-martinelli': { 'earth-616': ['Angie Martinelli.jpg', 0.45, 0, 0.34] },
  'bishop-lucas-bishop': { 'earth-10005': poster('Bishop') },
  'blink-clarice-ferguson': { 'earth-10005': poster('Blink') },
  'calvin-chadwick': { 'earth-616': ['Calvin Chadwick.jpg', 0.2, 0.03, 0.42] },
  'carol-danvers': { 'earth-92131': 'Ms Marvel.jpg' },
  'colossus-piotr-rasputin': { 'earth-10005': 'Colossus.jpg' },
  coulson: { 'earth-616': ['Phil Coulson Infobox.jpg', 0.2, 0.02, 0.6] },
  'daniel-sousa': { 'earth-616': ['Daniel Sousa.jpg', 0.25, 0.04, 0.5] },
  falcon: { 'earth-616': 'Falcon-DontThankMe.jpg' },
  'high-evolutionary': { 'earth-92131': 'High Evolutionary XM.jpg' },
  'fred-dukes': { 'earth-10005': ['469px-Frederick Dukes (Earth-10005)-1-.jpg', 0.14, 0, 0.45] },
  'iceman-bobby-drake': { 'earth-10005': ['740full-iceman-(shawn-ashmore).jpg', 0.3, 0.05, 0.4] },
  'iron-fist': { 'earth-616': 'DRand-AskingForFruitRollUps.png' },
  'jack-thompson': { 'earth-616': ['Jack Thompson.jpg', 0.27, 0, 0.4] },
  'johann-fennhoff': { 'earth-616': 'Fennhoff-Controls-Dooley-Snafu.jpg' },
  'john-flynn': { 'earth-616': ['Flynn.jpg', 0.24, 0, 0.55] },
  'joseph-manfredi': { 'earth-616': ['Joseph Manfredi.jpg', 0.12, 0, 0.8] },
  'kitty-pryde': { 'earth-10005': poster('Kitty Pryde') },
  'logan-wolverine': { 'earth-10005': 'Logan at Alkali Lake (X2 - 2003).png' },
  'psylocke-betsy-braddock': { 'earth-10005': 'Psylocke-XMen-Apocalypse.png' },
  'roger-dooley': { 'earth-616': ['Roger Dooley.jpg', 0.2, 0, 0.45] },
  shuri: { 'earth-616': "BP-Shuri (In Contact With T'Challa).jpg" },
  'silver-surfer': { 'earth-92131': ['Surferff.jpg', 0.12, 0, 0.5] },
  skye: { 'earth-616': ['Quake.jpg', 0.3, 0.05, 0.4] },
  'storm-ororo-munroe': { 'earth-10005': ['Storm XMOW.png', 0.26, 0.02, 0.45] },
  'sunspot-roberto-da-costa': { 'earth-10005': ['XMDOFP Sunspot Character Poster.jpg', 0.3, 0.27, 0.4] },
  'warpath-james-proudstar': { 'earth-10005': poster('Warpath') },
  'william-stryker': { 'earth-10005': ['Major William Stryker (Days of Future Past).jpg', 0.33, 0.15, 0.3] },
  'young-nathan-summers': { 'earth-92131': "Nathan Summers (Earth-92131) from X-Men '97 Season 1 5 001.webp" },
};

interface ApiPage {
  title: string;
  missing?: string;
  thumbnail?: { source: string };
  imageinfo?: { url: string; thumburl?: string; width: number; height: number }[];
}

interface ApiAnswer {
  query?: {
    normalized?: { from: string; to: string }[];
    redirects?: { from: string; to: string }[];
    pages?: Record<string, ApiPage>;
  };
}

const ask = (wiki: string, params: Record<string, string>) => askWiki<ApiAnswer>(wiki, { action: 'query', ...params });

/** Lead image of each title, following redirects. */
async function leadImages(wiki: string, titles: readonly string[]) {
  const images = new Map<string, string>();
  for (let i = 0; i < titles.length; i += BATCH) {
    const batch = titles.slice(i, i + BATCH);
    const { query } = await ask(wiki, { titles: batch.join('|'), prop: 'pageimages', pithumbsize: '300', pilimit: String(BATCH) });
    const hops = new Map([...(query?.normalized ?? []), ...(query?.redirects ?? [])].map((hop) => [hop.from, hop.to]));
    const pages = new Map(Object.values(query?.pages ?? {}).map((page) => [page.title, page]));
    for (const title of batch) {
      let end = title;
      for (let hop = 0; hop < 4 && hops.has(end); hop++) end = hops.get(end)!;
      const source = pages.get(end)?.thumbnail?.source;
      if (source) images.set(title, source);
    }
  }
  return images;
}

async function fileImage(wiki: string, pick: FilePick) {
  const [file, left, top, side] = typeof pick === 'string' ? [pick] : pick;
  const { query } = await ask(wiki, { titles: `File:${file}`, prop: 'imageinfo', iiprop: 'url|size', iiurlwidth: '300' });
  const info = Object.values(query?.pages ?? {})[0]?.imageinfo?.[0];
  if (!info || side === undefined) return info?.thumburl;
  // Fandom's image server does the cropping, so the app still only links to the file.
  const [address, version] = info.url.split('/revision/latest');
  const size = Math.round(info.width * side);
  return `${address}/revision/latest/window-crop/width/300/x-offset/${Math.round(info.width * left!)}/y-offset/${Math.round(info.height * top!)}/window-width/${size}/window-height/${size}${version}`;
}

const bare = (name: string) => name.replace(/\s*\(.*?\)/g, '').replace(/\s['"‘“][^'"’”]+['"’”]/g, '').replace(/^(The|Dr\.|Doctor|Professor|Colonel|Senator)\s+/, '').trim();
const titlesOf = (c: Character, universe: string) => [...new Set([PAGES[c.id]?.[universe], c.alias, c.name, c.alias && bare(c.alias), bare(c.name)].filter((t): t is string => Boolean(t)))];

const { archive } = await loadArchive();
const universesOf = (c: Character) => [...new Set([...(archive.byCharacter.get(c.id) ?? []).map((e) => e.universe.id as string), ...(HOME[c.id] ? [HOME[c.id]] : [])])];

// A character removed from the catalog takes its images with it.
const known = new Set<string>(characterList.map((c) => c.id));
const out = JSON.parse(JSON.stringify(Object.fromEntries(Object.entries(portraits).filter(([id]) => known.has(id))))) as Record<string, Record<string, string>>;
const missing: string[] = [];

for (const [universe, wiki] of Object.entries(WIKIS)) {
  const pending = characterList.filter((c) => universesOf(c).includes(universe) && (FORCE || !out[c.id]?.[universe] || PAGES[c.id]?.[universe]));
  const images = await leadImages(wiki, [...new Set(pending.flatMap((c) => titlesOf(c, universe)))]);
  for (const c of pending) {
    const image = titlesOf(c, universe).map((title) => images.get(title)).find(Boolean);
    if (image) (out[c.id] ??= {})[universe] = image;
    else if (!FILES[c.id]?.[universe]) missing.push(`${c.id} (${universe})`);
  }
}

for (const [id, files] of Object.entries(FILES)) {
  for (const [universe, pick] of Object.entries(files)) {
    const image = await fileImage(WIKIS[universe], pick);
    if (image) (out[id] ??= {})[universe] = image;
    else missing.push(`${id} (${universe}): file not found, ${pick}`);
  }
}

const row = ([id, images]: [string, CharacterPortraits]) => `  '${id}': {\n${Object.entries(images).map(([universe, image]) => `    '${universe}': '${image}',`).join('\n')}\n  },`;
const entries = Object.entries(out).sort(([a], [b]) => a.localeCompare(b)).map(row);

writeFileSync(join(ROOT, 'src/content/catalog/portraits.ts'), `// Generated by \`npm run portraits:sync\`. To change an image, edit PAGES or FILES in scripts/portraits.ts and run it again.
import type { CharacterId, CharacterPortraits } from '@/domain/schema';

export const portraits: Partial<Record<CharacterId, CharacterPortraits>> = {
${entries.join('\n')}
};
`);

const count = Object.values(out).reduce((sum, images) => sum + Object.keys(images).length, 0);
console.log(`Portraits: ${count} images for ${entries.length} of ${characterList.length} characters.`);
if (missing.length) console.log(`\nNot found. Name the page in PAGES (${missing.length}):\n  ${missing.join('\n  ')}`);
