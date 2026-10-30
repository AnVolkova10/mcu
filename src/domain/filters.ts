import type { ArchiveEvent } from './archive';
import { normalize } from './archive';
import { characters } from './catalog';
import type { CharacterId, FactionId, ProductionId, StoneId, UniverseId } from './schema';

export interface TimelineFilters {
  q: string;
  universes: UniverseId[];
  character?: CharacterId;
  faction?: FactionId;
  production?: ProductionId;
  stone?: StoneId;
  period?: string;
  deathsOnly: boolean;
  auditedOnly: boolean;
}

export const emptyFilters: TimelineFilters = { q: '', universes: [], deathsOnly: false, auditedOnly: false };

export const isFiltering = (f: TimelineFilters) =>
  Boolean(f.q.trim() || f.universes.length || f.character || f.faction || f.production || f.stone || f.period || f.deathsOnly || f.auditedOnly);

/** Pure predicate: every filter compares ids, never free text inside markup. */
export function matchesFilters(event: ArchiveEvent, f: TimelineFilters): boolean {
  if (f.universes.length && !f.universes.includes(event.universe.id)) return false;
  if (f.character && !event.characters.some((c) => c.id === f.character)) return false;
  if (f.faction) {
    const faction = f.faction;
    if (!event.characters.some((c) => (characters[c.id].factions as readonly string[]).includes(faction))) return false;
  }
  if (f.production && event.production.id !== f.production && !event.alsoIn.some((p) => p.id === f.production)) return false;
  if (f.stone && !event.stones.some((s) => s.id === f.stone)) return false;
  if (f.period && event.period.id !== f.period) return false;
  if (f.deathsOnly && !event.deaths.length) return false;
  if (f.auditedOnly && event.status !== 'audited') return false;
  const q = normalize(f.q.trim());
  if (q && !q.split(/\s+/).every((word) => event.searchText.includes(word))) return false;
  return true;
}

// ── URL <-> filters ───────────────────────────────────────────────────────────

export function filtersFromQuery(query: URLSearchParams): TimelineFilters {
  return {
    q: query.get('q') ?? '',
    universes: (query.get('u')?.split(',').filter(Boolean) ?? []) as UniverseId[],
    character: (query.get('character') as CharacterId | null) ?? undefined,
    faction: (query.get('faction') as FactionId | null) ?? undefined,
    production: (query.get('production') as ProductionId | null) ?? undefined,
    stone: (query.get('stone') as StoneId | null) ?? undefined,
    period: query.get('period') ?? undefined,
    deathsOnly: query.get('deaths') === '1',
    auditedOnly: query.get('audited') === '1',
  };
}

export function filtersToQuery(f: TimelineFilters): Record<string, string | undefined> {
  return {
    q: f.q.trim() || undefined,
    u: f.universes.length ? f.universes.join(',') : undefined,
    character: f.character,
    faction: f.faction,
    production: f.production,
    stone: f.stone,
    period: f.period,
    deaths: f.deathsOnly ? '1' : undefined,
    audited: f.auditedOnly ? '1' : undefined,
  };
}
