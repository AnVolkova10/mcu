import type { Archive } from './archive';
import { normalize } from './archive';
import { characterList, locationList, productionList, stoneList } from './catalog';

export type SearchHit =
  | { kind: 'event'; id: string; title: string; subtitle: string }
  | { kind: 'character'; id: string; title: string; subtitle: string; color: string }
  | { kind: 'production'; id: string; title: string; subtitle: string; color: string }
  | { kind: 'stone'; id: string; title: string; subtitle: string; color: string }
  | { kind: 'location'; id: string; title: string; subtitle: string };

/** 3 = starts with the query, 2 = a word starts with it, 1 = contains it. */
const score = (haystack: string, q: string) => {
  const h = normalize(haystack);
  if (h.startsWith(q)) return 3;
  if (h.includes(' ' + q)) return 2;
  return h.includes(q) ? 1 : 0;
};

const best = <T,>(items: T[], text: (t: T) => string, q: string, limit: number) =>
  items
    .map((item) => ({ item, s: score(text(item), q) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((x) => x.item);

export function searchArchive(archive: Archive, rawQuery: string): SearchHit[] {
  const q = normalize(rawQuery.trim());
  if (q.length < 2) return [];
  return [
    ...best(characterList, (c) => `${c.label} ${c.name}`, q, 6).map((c): SearchHit => ({
      kind: 'character', id: c.id, title: c.label, subtitle: c.alias ? c.name : c.role, color: c.color,
    })),
    ...best(productionList, (p) => p.title, q, 5).map((p): SearchHit => ({
      kind: 'production', id: p.id, title: p.title, subtitle: p.released, color: p.color,
    })),
    ...best(stoneList, (s) => `${s.name} ${s.vessel}`, q, 3).map((s): SearchHit => ({
      kind: 'stone', id: s.id, title: s.name, subtitle: s.vessel, color: s.color,
    })),
    ...best(locationList, (l) => `${l.name} ${l.place ?? ''} ${l.country ?? ''}`, q, 5).map((l): SearchHit => ({
      kind: 'location', id: l.id, title: l.name, subtitle: [l.place, l.country].filter(Boolean).join(', '),
    })),
    ...archive.events
      .map((e) => ({ e, s: score(e.title, q) * 2 || (e.searchText.includes(q) ? 1 : 0) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map(({ e }): SearchHit => ({ kind: 'event', id: e.id, title: e.title, subtitle: `${e.dateLabel} · ${e.production.shortTitle}` })),
  ];
}
