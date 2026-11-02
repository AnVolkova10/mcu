import { useCallback, useMemo } from 'react';
import { Box } from 'lucide-react';
import { archive } from '@/content';
import { normalize } from '@/domain/archive';
import { getProduction, objectKindList, objectList, type ArchiveObject, type Production } from '@/domain/catalog';
import { href, navigate, useRoute, withQuery } from '@/app/router';
import { PanelLink } from '@/features/archive/PanelLink';
import { useFitRows } from '@/shared/lib/useFitRows';
import { FilterButton } from '@/shared/ui/FilterButton';
import { PageHeader } from '@/shared/ui/PageHeader';
import { SearchBox } from '@/shared/ui/SearchBox';
import { SearchSelect, type SelectItem } from '@/shared/ui/SearchSelect';

const ROW_HEIGHT = 58;
/** The colored line and the name of a column, above its first object. */
const HEADING_HEIGHT = 40;

interface Entry {
  object: ArchiveObject;
  dates: string;
  events: number;
  first: number;
  productions: Production[];
  search: string;
}

const entries: Entry[] = objectList.map((object) => {
  const events = archive.byObject.get(object.id) ?? [];
  const productions = [...new Set(events.flatMap((e) => [e.production, ...e.alsoIn]))];
  return {
    object,
    dates: [...new Set([events[0]?.dateLabel, events.at(-1)?.dateLabel])].filter(Boolean).join(' – '),
    events: events.length,
    first: events[0]?.sortKey ?? Infinity,
    productions,
    search: normalize(`${object.name} ${object.kindLabel} ${object.description} ${productions.map((p) => p.title).join(' ')}`),
  };
});

const productionItems: SelectItem[] = [...new Set(entries.flatMap((e) => e.productions))]
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((p) => ({ id: p.id, label: p.title, hint: p.released, color: p.color }));

const SORTS = [
  { id: 'story', label: 'Story order' },
  { id: 'name', label: 'A–Z' },
  { id: 'events', label: 'Most events' },
];

const byName = (a: Entry, b: Entry) => a.object.name.localeCompare(b.object.name);
const comparators: Record<string, (a: Entry, b: Entry) => number> = {
  story: (a, b) => a.first - b.first || byName(a, b),
  name: byName,
  events: (a, b) => b.events - a.events || byName(a, b),
};

export function ObjectsPage() {
  const route = useRoute();
  const index = useFitRows<HTMLDivElement>(ROW_HEIGHT, 0, Infinity, HEADING_HEIGHT);
  const q = route.query.get('q') ?? '';
  const production = getProduction(route.query.get('production'))?.id;
  const sort = route.query.get('sort') ?? 'story';

  const update = useCallback(
    (changes: Record<string, string | undefined>) => navigate(withQuery(route, changes), { replace: true }),
    [route],
  );
  const onSearch = useCallback((value: string) => update({ q: value || undefined }), [update]);

  const visible = useMemo(() => {
    const term = normalize(q.trim());
    return entries
      .filter((e) => (!term || e.search.includes(term)) && (!production || e.productions.some((p) => p.id === production)))
      .sort(comparators[sort] ?? comparators.story);
  }, [q, production, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <PageHeader kicker="Things that changed history" title="Objects">
        What changes the story or passes from hand to hand.
      </PageHeader>

      <div className="sticky top-[104px] z-30 -mx-4 mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-line/70 bg-bg/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-16">
        <SearchBox value={q} onChange={onSearch} placeholder="Search by name, kind or story…" label="Search objects" className="basis-full lg:basis-0" />
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
          {SORTS.map((s) => (
            <FilterButton key={s.id} active={sort === s.id} onClick={() => update({ sort: s.id === 'story' ? undefined : s.id })}>{s.label}</FilterButton>
          ))}
        </div>
        <div className="w-full sm:w-64">
          <SearchSelect label="Movie or series" hideLabel placeholder="Any movie or series" items={productionItems} value={production} onChange={(id) => update({ production: id })} />
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">{visible.length} {visible.length === 1 ? 'object' : 'objects'}</p>

      <div ref={index} className="mt-3">
        {visible.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-line p-12 text-center">
            <Box className="mx-auto size-10 text-ink-faint" />
            <p className="mt-4 text-ink-muted">No objects match these filters.</p>
            <a href={href('objects')} className="mt-4 inline-block text-sm font-semibold text-accent-strong hover:underline">Clear filters</a>
          </div>
        ) : (
          <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {objectKindList.map((kind) => {
              const list = visible.filter((e) => e.object.kind === kind.id);
              const exists = entries.some((e) => e.object.kind === kind.id);
              return (
                <section key={kind.id} className={list.length ? 'min-w-0' : 'min-w-0 max-lg:hidden'} style={{ borderTop: `2px solid ${kind.color}` }}>
                  <h2 className="mb-1 mt-2.5 flex h-6 items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                    {kind.label} <span className="text-ink-faint">{list.length}</span>
                  </h2>
                  {list.length === 0 && <p className="py-1.5 text-xs text-ink-faint">{exists ? 'No matches' : 'Nothing yet'}</p>}
                  <ul>
                    {list.map(({ object, dates, events }) => (
                      <li key={object.id} className="lg:h-[var(--row)]">
                        <PanelLink panel={{ kind: 'object', id: object.id }} className="group block py-1.5" title={object.name}>
                          <span className="block truncate text-sm font-bold leading-7 text-ink">
                            <span className="underline decoration-2 underline-offset-[5px] group-hover:decoration-[3px]" style={{ textDecorationColor: object.color }}>{object.name}</span>
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-ink-faint transition group-hover:text-ink-muted">
                            {[dates, `${events} ${events === 1 ? 'event' : 'events'}`].filter(Boolean).join(' · ')}
                          </span>
                        </PanelLink>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
