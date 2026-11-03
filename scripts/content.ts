/**
 * Content toolbox. Read-only: it never writes files.
 *   npm run validate                 check every rule (also runs before each build)
 *   npm run content -- year 1994     list the events of a year with their `order`
 *   npm run content -- find "storm"  look up ids of characters, objects, places, productions and factions
 *   npm run content -- status        audited vs legacy productions
 *   npm run content -- unused        characters, objects and places nothing points to
 */
import { normalize } from '../src/domain/archive';
import { characterList, characters, factionList, locationList, objectList, productionList, productions, stoneList, getCosmosNode, getLocation } from '../src/domain/catalog';
import { toPlainText } from '../src/domain/markup';
import { loadArchive } from './load-archive';

/** Newer dates are always printed from their year, so the same age never gets two names. */
const LAST_LABELLED_YEAR = -8000;

// ── validate ──────────────────────────────────────────────────────────────────
async function validate() {
  const { archive, files } = await loadArchive();
  const errors: string[] = [...archive.problems];
  const hints: string[] = [];
  const err = (msg: string) => errors.push(msg);

  for (const { name, file } of files) {
    if (name !== file.production) err(`events/${name}.ts declares production "${file.production}"; the file must be named ${file.production}.ts`);
    const slugs = new Set<string>();
    for (const e of file.events) {
      const id = `${file.production}.${e.id}`;
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id)) err(`${id}: id must be kebab-case (a-z, 0-9, hyphens)`);
      if (slugs.has(e.id)) err(`${id}: id repeated in the same file`);
      slugs.add(e.id);
      if (!Number.isFinite(e.date.year)) err(`${id}: date.year must be a number`);
      if (e.date.end !== undefined && e.date.end < e.date.year) err(`${id}: date.end is before date.year`);
      if (!e.title.trim()) err(`${id}: missing title`);
      if (!e.text.length) err(`${id}: text needs at least one paragraph`);
      e.text.forEach((p, i) => {
        const plain = toPlainText(p);
        if (/\]\(|\*\*|==/.test(plain)) err(`${id}: paragraph ${i + 1} has broken markup near "${plain.match(/.{0,20}(\]\(|\*\*|==).{0,20}/)?.[0]}"`);
      });
    }
  }

  const characterNames = new Map<string, string>();
  for (const c of characterList) {
    for (const n of [c.name, c.alias]) if (n) characterNames.set(normalize(n), c.id);
  }

  for (const event of archive.events) {
    if (event.status !== 'audited') continue;
    const id = event.id;
    if (!event.locations.length) err(`${id}: audited events need at least one location`);
    if (event.date.label && event.date.year > LAST_LABELLED_YEAR) err(`${id}: "${event.date.label}" is a free-text date; use the year with approx, labels are only for dates over 10,000 years old`);
    if (event.title.length > 70) err(`${id}: title longer than 70 characters`);
    if (/\.$/.test(event.title)) err(`${id}: title must not end with a period`);
    for (const d of event.deaths) {
      const match = !d.character && characterNames.get(normalize(d.name));
      if (match) err(`${id}: death "${d.name}" has a dossier, use the character id "${match}"`);
    }
    for (const p of event.text) {
      for (const m of p.matchAll(/\*\*([^*]+)\*\*/g)) {
        const match = characterNames.get(normalize(m[1]));
        if (match) hints.push(`${id}: "**${m[1]}**" could be a link: [${m[1]}](${match})`);
      }
    }
  }

  for (const loc of locationList) {
    if (loc.kind === 'earth') {
      const c = loc.coords;
      if (!c) err(`location ${loc.id}: earth places need coords [lat, lng]`);
      else if (Math.abs(c[0]) > 90 || Math.abs(c[1]) > 180) err(`location ${loc.id}: coords out of range`);
    } else if (!loc.node || !getCosmosNode(loc.node)) err(`location ${loc.id}: off-world places need a valid cosmos "node"`);
  }

  for (const c of characterList) {
    if (!/^#[0-9a-f]{6}$/i.test(c.color)) err(`character ${c.id}: color must be #rrggbb`);
  }

  for (const stone of stoneList) {
    let last = -Infinity;
    for (const stop of stone.journey) {
      if (!getLocation(stop.location)) err(`stone ${stone.id}: unknown location "${stop.location}"`);
      if (stop.event && !archive.eventById.has(stop.event)) err(`stone ${stone.id}: unknown event "${stop.event}"`);
      if (stop.date.year < last) err(`stone ${stone.id}: journey is not in chronological order at ${stop.date.year}`);
      last = stop.date.year;
    }
  }

  const pointOf = (coords: readonly [number, number]) => coords.join();
  const atPoint = new Map<string, string[]>();
  for (const loc of locationList) if (loc.coords) atPoint.set(pointOf(loc.coords), [...(atPoint.get(pointOf(loc.coords)) ?? []), loc.id]);
  for (const event of archive.events) {
    if (!event.production.verified) continue;
    if (event.production.kind === 'season' && !event.segment) err(`${event.id}: verified productions say which episode or part each event covers ("segment")`);
    if (event.text.some((p) => /==[^=]+==/.test(p))) err(`${event.id}: verified productions link objects as [Label](object:id) instead of ==marks==`);
    for (const o of event.objects) {
      if (o.kind !== 'material' && !event.objectPlaces.has(o.id)) err(`${event.id}: say where "${o.id}" is in this event, with objects: [{ id, at: [...] }]`);
    }
    for (const { location } of event.locations) {
      const others = location.coords ? atPoint.get(pointOf(location.coords))!.filter((id) => id !== location.id) : [];
      if (others.length) err(`${event.id}: place "${location.id}" shares its exact point with ${others.join(', ')}; give each place its own`);
    }
  }
  const shared = [...atPoint.values()].filter((ids) => ids.length > 1);
  if (shared.length) hints.push(`${shared.length} map points are shared by ${shared.flat().length} places; they get fixed as each production is audited`);

  const audited = productionList.filter((p) => p.status === 'audited');
  const verified = productionList.filter((p) => p.verified);
  console.log(`Content: ${archive.events.length} events · ${productionList.length} productions (${audited.length} audited, ${verified.length} verified) · ${characterList.length} characters · ${locationList.length} places`);
  if (hints.length) console.log(`Hints (${hints.length}, not errors):\n  ` + hints.slice(0, 15).join('\n  ') + (hints.length > 15 ? `\n  …and ${hints.length - 15} more` : ''));
  if (errors.length) {
    console.error(`\n✖ ${errors.length} error(s):\n  ` + errors.slice(0, 60).join('\n  ') + (errors.length > 60 ? `\n  …and ${errors.length - 60} more` : ''));
    process.exit(1);
  }
  console.log('✔ Content is valid');
}

// ── year ──────────────────────────────────────────────────────────────────────
async function year(arg: string) {
  const y = Number(arg);
  const { archive } = await loadArchive();
  const list = archive.events.filter((e) => e.date.year === y || (e.date.end !== undefined && e.date.year <= y && e.date.end >= y));
  if (!list.length) return console.log(`No events in ${y}.`);
  for (const e of list) console.log(`${String(e.date.order ?? '-').padStart(4)}  ${e.dateLabel.padEnd(14)} ${e.id}  — ${e.title}`);
}

// ── find ──────────────────────────────────────────────────────────────────────
function find(term: string) {
  const q = normalize(term);
  const show = (label: string, rows: string[]) => rows.length && console.log(`${label}:\n  ${rows.slice(0, 12).join('\n  ')}`);
  show('Characters', characterList.filter((c) => normalize(`${c.id} ${c.name} ${c.alias ?? ''}`).includes(q)).map((c) => `${c.id}  (${c.name}${c.alias ? ' / ' + c.alias : ''})`));
  show('Objects', objectList.filter((o) => normalize(`${o.id} ${o.name}`).includes(q)).map((o) => `${o.id}  (${o.name}, ${o.kindLabel})`));
  show('Places', locationList.filter((l) => normalize(`${l.id} ${l.name} ${l.place ?? ''} ${l.country ?? ''}`).includes(q)).map((l) => `${l.id}  (${[l.name, l.place, l.country].filter(Boolean).join(', ')})`));
  show('Productions', productionList.filter((p) => normalize(`${p.id} ${p.title}`).includes(q)).map((p) => `${p.id}  (${p.title}, ${p.status})`));
  show('Factions', factionList.filter((f) => normalize(`${f.id} ${f.name}`).includes(q)).map((f) => `${f.id}  (${f.name})`));
}

// ── status ────────────────────────────────────────────────────────────────────
async function status() {
  const { archive } = await loadArchive();
  for (const s of ['audited', 'legacy'] as const) {
    const list = productionList.filter((p) => p.status === s);
    console.log(`\n${s.toUpperCase()} (${list.length})`);
    list.forEach((p) => console.log(`  ${p.id.padEnd(40)} ${String(archive.byProduction.get(p.id)?.length ?? 0).padStart(3)} events${p.verified ? '  verified' : ''}`));
  }
}

// ── unused ────────────────────────────────────────────────────────────────────
async function unused() {
  const { archive } = await loadArchive();
  const onJourneys = new Set<string>(stoneList.flatMap((stone) => stone.journey.map((stop) => stop.location)));
  const show = (label: string, ids: string[]) => console.log(`${label} (${ids.length}):\n  ${ids.join('\n  ') || 'none'}`);
  show('Characters in no event', characterList.filter((c) => !archive.byCharacter.has(c.id)).map((c) => c.id));
  show('Objects in no event', objectList.filter((o) => !archive.byObject.has(o.id)).map((o) => o.id));
  show('Places in no event or stone journey', locationList.filter((l) => !archive.byLocation.has(l.id) && !onJourneys.has(l.id)).map((l) => l.id));
}

const [command = 'validate', ...args] = process.argv.slice(2);
const commands: Record<string, () => unknown> = {
  validate,
  year: () => year(args[0]),
  find: () => find(args.join(' ')),
  status,
  unused,
};
if (!commands[command]) {
  console.error(`Unknown command "${command}". Use: validate | year <year> | find <text> | status | unused`);
  process.exit(1);
}
void (characters && productions);
await commands[command]();
