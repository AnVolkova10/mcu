/** Data for the three map views: which places are active for a date and reality, and traced journeys. */
import type { Archive, ArchiveEvent, DateGroup } from './archive';
import { getCharacter, getLocation, getObject, getStone, locationList, type CosmosNode, type Location, type Universe } from './catalog';
import { formatDate } from './dates';

export interface MapFilters {
  /** Only this date; null shows all of history. */
  group: DateGroup | null;
  universes: readonly string[];
}

export const inView = (event: ArchiveEvent, { group, universes }: MapFilters) =>
  (!group || event.dateLabel === group.label) && (!universes.length || universes.includes(event.universe.id));

export interface Place {
  location: Location;
  events: ArchiveEvent[];
  /** Reality with most events here: it colors the pin. */
  universe: Universe;
}

function dominantUniverse(events: ArchiveEvent[]): Universe {
  const counts = new Map<Universe, number>();
  events.forEach((e) => counts.set(e.universe, (counts.get(e.universe) ?? 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

export function earthPlaces(archive: Archive, filters: MapFilters): Place[] {
  const places: Place[] = [];
  for (const location of locationList) {
    if (location.kind !== 'earth' || !location.coords) continue;
    const events = (archive.byLocation.get(location.id) ?? []).filter((e) => inView(e, filters));
    if (events.length) places.push({ location, events, universe: dominantUniverse(events) });
  }
  return places;
}

/** Events on every location attached to one Cosmos node, in timeline order. */
export function nodeEvents(archive: Archive, node: CosmosNode['id']): ArchiveEvent[] {
  const seen = new Set<ArchiveEvent>();
  locationList.filter((l) => l.node === node).forEach((l) => archive.byLocation.get(l.id)?.forEach((e) => seen.add(e)));
  return [...seen].sort((a, b) => a.date.year - b.date.year || a.sortKey - b.sortKey);
}

/** The map marks milestones, not everything that exists: a reality only shows the worlds where something happened in it. */
export const hasMilestone = (archive: Archive, node: CosmosNode['id'], universes: readonly string[]) =>
  !universes.length || nodeEvents(archive, node).some((e) => universes.includes(e.universe.id));

// ── Journeys ──────────────────────────────────────────────────────────────────

export interface TraceStop {
  key: string;
  date: string;
  title: string;
  detail?: string;
  location: Location;
  eventId?: string;
}

export interface Trace {
  ref: string;
  kind: 'stone' | 'character' | 'object';
  name: string;
  color: string;
  stops: TraceStop[];
}

function stoneTrace(id: string): Trace | null {
  const stone = getStone(id);
  if (!stone) return null;
  const stops = stone.journey.flatMap((stop, i): TraceStop[] => {
    const location = getLocation(stop.location);
    return location ? [{ key: String(i), date: formatDate(stop.date), title: stop.holder, detail: stop.note, location, eventId: stop.event }] : [];
  });
  return { ref: `stone:${id}`, kind: 'stone', name: stone.name, color: stone.color, stops };
}

const eventStops = (event: ArchiveEvent, places: readonly Location[]) =>
  places.map((location, i): TraceStop => ({
    key: `${event.id}:${i}`,
    date: event.dateLabel,
    title: event.title,
    detail: event.production.shortTitle,
    location,
    eventId: event.id,
  }));

function characterTrace(archive: Archive, id: string): Trace | null {
  const character = getCharacter(id);
  if (!character) return null;
  const stops = (archive.byCharacter.get(id) ?? []).flatMap((event) => eventStops(event, event.locations.map((l) => l.location)));
  return { ref: `character:${id}`, kind: 'character', name: character.label, color: character.color, stops };
}

function objectTrace(archive: Archive, id: string): Trace | null {
  const object = getObject(id);
  if (!object) return null;
  // A material is everywhere at once, so it has no journey.
  const events = object.kind === 'material' ? [] : archive.byObject.get(id) ?? [];
  const stops = events.flatMap((event) => eventStops(event, event.objectPlaces.get(id) ?? event.locations.map((l) => l.location)));
  return { ref: `object:${id}`, kind: 'object', name: object.name, color: object.color, stops };
}

/** `ref` looks like "stone:space", "character:thor" or "object:vibranium-ax". */
export function buildTrace(archive: Archive, ref: string | null): Trace | null {
  if (!ref) return null;
  const [kind, id] = ref.split(':');
  if (kind === 'stone') return stoneTrace(id);
  if (kind === 'character') return characterTrace(archive, id);
  if (kind === 'object') return objectTrace(archive, id);
  return null;
}
