/** Builds the in-memory archive: resolved events, date groups and reverse indexes. Pure, no React. */
import type { EventFile } from './define';
import type { AuditStatus, DeathRef, EventDateInput, EventInput } from './schema';
import {
  getBranch, getCharacter, getLocation, getObject, getProduction, getStone, getUniverse,
  type ArchiveObject, type Branch, type Character, type Location, type Production, type Stone, type Universe,
} from './catalog';
import { extractLinks, toPlainText } from './markup';
import { formatDate, periodOf, sortKey, type Period } from './dates';

export interface Death {
  character?: Character;
  name: string;
  presumed: boolean;
  note?: string;
}

export interface ArchiveEvent {
  id: string;
  slug: string;
  production: Production;
  alsoIn: Production[];
  date: EventDateInput;
  dateLabel: string;
  sortKey: number;
  period: Period;
  universe: Universe;
  branch?: Branch;
  title: string;
  text: readonly string[];
  segment?: string;
  characters: Character[];
  locations: { location: Location; note?: string }[];
  deaths: Death[];
  stones: Stone[];
  objects: ArchiveObject[];
  /** Where an object is in this event, when the event says so. */
  objectPlaces: Map<string, Location[]>;
  status: AuditStatus;
  searchText: string;
}

export interface DateGroup {
  key: string;
  label: string;
  year: number;
  period: Period;
  events: ArchiveEvent[];
}

export interface Archive {
  events: ArchiveEvent[];
  groups: DateGroup[];
  eventById: Map<string, ArchiveEvent>;
  byCharacter: Map<string, ArchiveEvent[]>;
  byProduction: Map<string, ArchiveEvent[]>;
  byLocation: Map<string, ArchiveEvent[]>;
  byStone: Map<string, ArchiveEvent[]>;
  byObject: Map<string, ArchiveEvent[]>;
  /** Broken references found while building. The validator turns them into errors; the app just skips them. */
  problems: string[];
}

export const normalize = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const push = <K, V>(map: Map<K, V[]>, key: K, value: V) => {
  const list = map.get(key);
  if (list) list.push(value);
  else map.set(key, [value]);
};

function resolveDeath(ref: DeathRef): Death | undefined {
  if (typeof ref === 'string') {
    const character = getCharacter(ref);
    return character && { character, name: character.label, presumed: false };
  }
  if ('character' in ref) {
    const character = getCharacter(ref.character);
    return character && { character, name: character.label, presumed: Boolean(ref.presumed), note: ref.note };
  }
  return { name: ref.name, presumed: Boolean(ref.presumed), note: ref.note };
}

function resolveEvent(file: EventFile, input: EventInput, problems: string[]): ArchiveEvent | undefined {
  const id = `${file.production}.${input.id}`;
  const production = getProduction(file.production);
  if (!production) {
    problems.push(`${id}: unknown production "${file.production}"`);
    return undefined;
  }
  const universe = getUniverse(input.universe ?? production.universe)!;
  const problem = (msg: string) => problems.push(`${id}: ${msg}`);

  const characters = new Map<string, Character>();
  const stones = new Map<string, Stone>();
  const objects = new Map<string, ArchiveObject>();
  for (const link of input.text.flatMap(extractLinks)) {
    if (link.kind === 'stone') {
      const stone = getStone(link.id);
      if (stone) stones.set(stone.id, stone);
      else problem(`unknown stone link "${link.id}"`);
    } else if (link.kind === 'object') {
      const object = getObject(link.id);
      if (object) objects.set(object.id, object);
      else problem(`unknown object link "${link.id}"`);
    } else {
      const character = getCharacter(link.id);
      if (character) characters.set(character.id, character);
      else problem(`unknown character link "${link.id}"`);
    }
  }
  for (const castId of input.cast ?? []) {
    const character = getCharacter(castId);
    if (character) characters.set(character.id, character);
    else problem(`unknown cast id "${castId}"`);
  }
  for (const stoneId of input.stones ?? []) {
    const stone = getStone(stoneId);
    if (stone) stones.set(stone.id, stone);
    else problem(`unknown stone "${stoneId}"`);
  }

  const locations = (input.locations ?? []).flatMap((ref) => {
    const [locId, note] = typeof ref === 'string' ? [ref, undefined] : [ref.id, ref.note];
    const location = getLocation(locId);
    if (!location) problem(`unknown location "${locId}"`);
    return location ? [{ location, note }] : [];
  });

  const objectPlaces = new Map<string, Location[]>();
  for (const ref of input.objects ?? []) {
    const [objectId, at] = typeof ref === 'string' ? [ref, undefined] : [ref.id, ref.at];
    const object = getObject(objectId);
    if (!object) {
      problem(`unknown object "${objectId}"`);
      continue;
    }
    objects.set(object.id, object);
    if (!at) continue;
    objectPlaces.set(object.id, at.flatMap((placeId) => {
      const place = locations.find((l) => l.location.id === placeId);
      if (!place) problem(`object "${objectId}" is at "${placeId}", which is not a place of this event`);
      return place ? [place.location] : [];
    }));
  }

  const deaths = (input.deaths ?? []).flatMap((ref) => {
    const death = resolveDeath(ref);
    if (!death) problem(`unknown death reference ${JSON.stringify(ref)}`);
    return death ? [death] : [];
  });

  const alsoIn = (input.alsoIn ?? []).flatMap((pid) => {
    const p = getProduction(pid);
    if (!p) problem(`unknown alsoIn production "${pid}"`);
    return p ? [p] : [];
  });

  const branch = input.branch ? getBranch(input.branch) : undefined;
  if (input.branch && !branch) problem(`unknown branch "${input.branch}"`);

  const plain = input.text.map(toPlainText).join(' ');
  const characterList = [...characters.values()];
  const objectList = [...objects.values()];
  const searchText = normalize(
    [input.title, plain, production.title, ...characterList.flatMap((c) => [c.name, c.alias ?? '']), ...objectList.map((o) => o.name), ...locations.map((l) => `${l.location.name} ${l.location.place ?? ''} ${l.location.country ?? ''}`)].join(' '),
  );

  return {
    id,
    slug: input.id,
    production,
    alsoIn,
    date: input.date,
    dateLabel: formatDate(input.date),
    sortKey: sortKey(input.date),
    period: periodOf(input.date.year),
    universe,
    branch,
    title: input.title,
    text: input.text,
    segment: input.segment,
    characters: characterList,
    locations,
    deaths,
    stones: [...stones.values()],
    objects: objectList,
    objectPlaces,
    status: production.status,
    searchText,
  };
}

export function buildArchive(files: readonly EventFile[]): Archive {
  const problems: string[] = [];
  const resolved = files
    .flatMap((file) => file.events.map((input) => resolveEvent(file, input, problems)))
    .filter((e): e is ArchiveEvent => Boolean(e));

  // Same year but a different printed date ("1925" vs "c. 1925") stays in its own group,
  // placed where its earliest event goes, so `order` also sorts the groups of a year.
  const groupKey = (e: ArchiveEvent) => `${e.dateLabel}|${e.date.year}`;
  const groupStart = new Map<string, number>();
  for (const e of resolved) groupStart.set(groupKey(e), Math.min(groupStart.get(groupKey(e)) ?? Infinity, e.sortKey));

  const events = resolved.sort((a, b) =>
    a.date.year - b.date.year ||
    groupStart.get(groupKey(a))! - groupStart.get(groupKey(b))! ||
    a.dateLabel.localeCompare(b.dateLabel) ||
    a.sortKey - b.sortKey ||
    a.production.released.localeCompare(b.production.released));

  const eventById = new Map<string, ArchiveEvent>();
  const byCharacter = new Map<string, ArchiveEvent[]>();
  const byProduction = new Map<string, ArchiveEvent[]>();
  const byLocation = new Map<string, ArchiveEvent[]>();
  const byStone = new Map<string, ArchiveEvent[]>();
  const byObject = new Map<string, ArchiveEvent[]>();
  const groups: DateGroup[] = [];

  for (const event of events) {
    if (eventById.has(event.id)) problems.push(`${event.id}: duplicated event id`);
    eventById.set(event.id, event);
    event.characters.forEach((c) => push(byCharacter, c.id, event));
    [event.production, ...event.alsoIn].forEach((p) => push(byProduction, p.id, event));
    event.locations.forEach((l) => push(byLocation, l.location.id, event));
    event.stones.forEach((s) => push(byStone, s.id, event));
    event.objects.forEach((o) => push(byObject, o.id, event));

    const key = `${event.dateLabel}|${event.date.year}`;
    const last = groups[groups.length - 1];
    if (last && last.key === key) last.events.push(event);
    else groups.push({ key, label: event.dateLabel, year: event.date.year, period: event.period, events: [event] });
  }

  return { events, groups, eventById, byCharacter, byProduction, byLocation, byStone, byObject, problems };
}
