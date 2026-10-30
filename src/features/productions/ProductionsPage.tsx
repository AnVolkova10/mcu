import { useCallback, useMemo } from 'react';
import { Film } from 'lucide-react';
import { archive } from '@/content';
import { normalize, type ArchiveEvent } from '@/domain/archive';
import { getUniverse, productionList, type Production } from '@/domain/catalog';
import type { UniverseId } from '@/domain/schema';
import { navigate, useRoute, withQuery } from '@/app/router';
import { PanelLink } from '@/features/archive/PanelLink';
import { Chip } from '@/shared/ui/Chip';
import { PageHeader } from '@/shared/ui/PageHeader';
import { SearchBox } from '@/shared/ui/SearchBox';
import { UniverseToggles } from '@/shared/ui/UniverseToggles';
import { Poster } from './Poster';

const auditedTotal = productionList.filter((p) => p.status === 'audited').length;

const KINDS = [
  { id: 'movie', label: 'Movies' },
  { id: 'season', label: 'Series' },
  { id: 'other', label: 'Specials & shorts' },
] as const;

const STATUSES = [
  { id: 'audited', label: 'Audited' },
  { id: 'legacy', label: 'v1 · unaudited' },
] as const;

const SORTS = [
  { id: 'story', label: 'Story order' },
  { id: 'release', label: 'Release date' },
  { id: 'title', label: 'A–Z' },
  { id: 'events', label: 'Most events' },
] as const;

interface Row {
  production: Production;
  events: readonly ArchiveEvent[];
}

const rows: Row[] = productionList.map((production) => ({ production, events: archive.byProduction.get(production.id) ?? [] }));

const comparators: Record<string, (a: Row, b: Row) => number> = {
  story: (a, b) => (a.events[0]?.sortKey ?? Infinity) - (b.events[0]?.sortKey ?? Infinity),
  release: (a, b) => a.production.released.localeCompare(b.production.released),
  title: (a, b) => a.production.title.localeCompare(b.production.title),
  events: (a, b) => b.events.length - a.events.length,
};

export function ProductionsPage() {
  const route = useRoute();
  const q = route.query.get('q') ?? '';
  const universes = useMemo(() => route.query.get('u')?.split(',').filter(Boolean) ?? [], [route.query]);
  const kind = route.query.get('kind');
  const status = route.query.get('status');
  const sort = route.query.get('sort') ?? 'story';

  const update = useCallback(
    (changes: Record<string, string | undefined>) => navigate(withQuery(route, changes), { replace: true }),
    [route],
  );
  const onSearch = useCallback((value: string) => update({ q: value || undefined }), [update]);
  const toggleUniverse = (id: UniverseId) => {
    const next = universes.includes(id) ? universes.filter((u) => u !== id) : [...universes, id];
    update({ u: next.length ? next.join(',') : undefined });
  };

  const visible = useMemo(() => {
    const term = normalize(q.trim());
    return rows
      .filter(({ production: p }) => {
        if (term && !normalize(p.title).includes(term)) return false;
        if (universes.length && !universes.includes(p.universe)) return false;
        if (status && p.status !== status) return false;
        if (kind === 'other') return p.kind === 'special' || p.kind === 'short';
        return !kind || p.kind === kind;
      })
      .sort(comparators[sort] ?? comparators.story);
  }, [q, universes, kind, status, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <PageHeader kicker="The catalog" title="Movies & Series">
        {productionList.length} productions, {auditedTotal} of them audited so far.
      </PageHeader>

      <div className="sticky top-[104px] z-30 -mx-4 mt-6 space-y-2 border-b border-line/70 bg-bg/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-16">
        <div className="flex flex-wrap items-center gap-2">
          <SearchBox value={q} onChange={onSearch} placeholder="Search by title…" label="Search productions" />
          <UniverseToggles selected={universes} onToggle={toggleUniverse} className="order-last w-full lg:order-none lg:w-auto" />
        </div>
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
          {KINDS.map((k) => (
            <Chip key={k.id} active={kind === k.id} onClick={() => update({ kind: kind === k.id ? undefined : k.id })}>{k.label}</Chip>
          ))}
          <span aria-hidden className="mx-1 h-4 w-px shrink-0 bg-line" />
          {STATUSES.map((s) => (
            <Chip key={s.id} active={status === s.id} onClick={() => update({ status: status === s.id ? undefined : s.id })}>{s.label}</Chip>
          ))}
          <span aria-hidden className="mx-1 h-4 w-px shrink-0 bg-line" />
          {SORTS.map((s) => (
            <Chip key={s.id} active={sort === s.id} onClick={() => update({ sort: s.id === 'story' ? undefined : s.id })}>{s.label}</Chip>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-line p-12 text-center">
          <Film className="mx-auto size-10 text-ink-faint" />
          <p className="mt-4 text-ink-muted">No productions match these filters.</p>
        </div>
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {visible.map((row) => <ProductionCard key={row.production.id} row={row} />)}
        </ul>
      )}
    </div>
  );
}

function ProductionCard({ row: { production: p, events } }: { row: Row }) {
  const universe = getUniverse(p.universe)!;
  const first = events[0];
  return (
    <li>
      <PanelLink panel={{ kind: 'production', id: p.id }} className="group block" title={p.title}>
        <div className="relative transition duration-200 group-hover:-translate-y-1">
          <Poster production={p} className="shadow-lg shadow-black/40 ring-1 ring-line transition group-hover:ring-line-strong" />
          {p.status === 'legacy' && (
            <span className="absolute left-2 top-2 rounded-full bg-bg/85 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-muted backdrop-blur">v1</span>
          )}
        </div>
        <p className="mt-2.5 truncate text-sm font-bold text-ink">{p.shortTitle}</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-faint">
          <span className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: universe.color }} title={universe.name} />
          <span className="truncate">
            {p.released} · {events.length} {events.length === 1 ? 'event' : 'events'}
          </span>
        </p>
        {first && <p className="truncate text-xs text-ink-faint">Starts in {first.dateLabel}</p>}
      </PanelLink>
    </li>
  );
}
