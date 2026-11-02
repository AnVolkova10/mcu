import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { Globe2, Orbit, Sparkles } from 'lucide-react';
import { archive } from '@/content';
import { earthPlaces, inView, nodeEvents } from '@/domain/atlas';
import type { DateGroup } from '@/domain/archive';
import { getCosmosNode, getLocation } from '@/domain/catalog';
import type { UniverseId } from '@/domain/schema';
import { href } from '@/app/router';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { UniverseToggles } from '@/shared/ui/UniverseToggles';
import { cn } from '@/shared/lib/cn';
import { PlaceCard, TraceCard } from './SideCards';
import { TimeBar } from './TimeBar';
import { useMapState, type MapView } from './useMapState';

const EarthView = lazy(() => import('./earth/EarthView').then((m) => ({ default: m.EarthView })));
const CosmosView = lazy(() => import('./cosmos/CosmosView').then((m) => ({ default: m.CosmosView })));
const MultiverseView = lazy(() => import('./multiverse/MultiverseView').then((m) => ({ default: m.MultiverseView })));

const VIEWS: { id: MapView; label: string; icon: React.ReactNode }[] = [
  { id: 'earth', label: 'Earth', icon: <Globe2 className="size-4" /> },
  { id: 'cosmos', label: 'Cosmos', icon: <Orbit className="size-4" /> },
  { id: 'multiverse', label: 'Multiverse', icon: <Sparkles className="size-4" /> },
];

const STOP_MS = 2800;

export function MapPage() {
  const { view, group, universes, filters, place, node, trace, update } = useMapState();
  const [stopIndex, setStopIndex] = useState(0);
  const [playingTrace, setPlayingTrace] = useState(false);

  const places = useMemo(() => earthPlaces(archive, filters), [filters]);
  const selectedPlace = place ? getLocation(place) : undefined;
  const selectedNode = node ? getCosmosNode(node) : undefined;

  const setGroup = useCallback((g: DateGroup | null) => update({ at: g?.label }), [update]);
  const selectPlace = useCallback((id: string | null) => update({ place: id ?? undefined }), [update]);
  const selectNode = useCallback((id: string | null) => update({ node: id ?? undefined }), [update]);
  const toggleUniverse = (id: UniverseId) => {
    const next = universes.includes(id) ? universes.filter((u) => u !== id) : [...universes, id];
    update({ u: next.length ? next.join(',') : undefined });
  };

  // A new journey starts from its first stop.
  useEffect(() => {
    setStopIndex(0);
    setPlayingTrace(false);
  }, [trace?.ref]);

  useEffect(() => {
    if (!playingTrace || !trace) return;
    const timer = setInterval(() => {
      setStopIndex((i) => {
        if (i >= trace.stops.length - 1) {
          setPlayingTrace(false);
          return i;
        }
        return i + 1;
      });
    }, STOP_MS);
    return () => clearInterval(timer);
  }, [playingTrace, trace]);

  const eventsHere = (id: string) => (archive.byLocation.get(id) ?? []).filter((e) => inView(e, filters));

  const card = trace ? (
    <TraceCard
      trace={trace}
      stopIndex={stopIndex}
      playing={playingTrace}
      onStop={(i) => { setPlayingTrace(false); setStopIndex(i); }}
      onTogglePlay={() => {
        if (stopIndex >= trace.stops.length - 1) setStopIndex(0);
        setPlayingTrace((p) => !p);
      }}
      onClose={() => update({ trace: undefined })}
    />
  ) : view === 'earth' && selectedPlace ? (
    <PlaceCard
      kicker="Place on Earth"
      title={selectedPlace.name}
      subtitle={[selectedPlace.place, selectedPlace.country].filter(Boolean).join(', ')}
      description={selectedPlace.approximate ? 'The story only names this area, so the exact spot is unknown.' : undefined}
      events={eventsHere(selectedPlace.id)}
      onClose={() => selectPlace(null)}
    />
  ) : view === 'cosmos' && selectedNode ? (
    <PlaceCard
      kicker={selectedNode.zone.replace('-', ' ')}
      title={selectedNode.name}
      description={selectedNode.description}
      color={selectedNode.color}
      events={nodeEvents(archive, selectedNode.id).filter((e) => inView(e, filters))}
      onClose={() => selectNode(null)}
    />
  ) : null;

  return (
    <div className="relative h-[calc(100dvh-105px)] overflow-hidden bg-[#030407] sm:h-[calc(100dvh-105px-var(--spacing-footer))] lg:h-[calc(100dvh-65px-var(--spacing-footer))]">
      <ErrorBoundary key={view}>
        <Suspense fallback={<div className="grid h-full place-items-center text-sm text-ink-faint">Loading the map…</div>}>
          {view === 'earth' && <EarthView places={places} selected={place} onSelect={selectPlace} trace={trace} stopIndex={stopIndex} />}
          {view === 'cosmos' && <CosmosView filters={filters} selected={node} onSelect={selectNode} trace={trace} stopIndex={stopIndex} />}
          {view === 'multiverse' && <MultiverseView group={group} universes={universes} onPickDate={setGroup} />}
        </Suspense>
      </ErrorBoundary>

      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-start gap-2 p-3">
        <nav aria-label="Map views" className="pointer-events-auto flex rounded-2xl border border-line bg-bg/80 p-1 backdrop-blur-xl">
          {VIEWS.map((v) => (
            <a
              key={v.id}
              href={href('map', { at: group?.label, u: universes.length ? universes.join(',') : undefined, trace: trace?.ref }, [v.id])}
              aria-current={view === v.id ? 'page' : undefined}
              className={cn('inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition', view === v.id ? 'bg-ink text-bg' : 'text-ink-muted hover:text-ink')}
            >
              {v.icon}
              <span className="hidden sm:inline">{v.label}</span>
            </a>
          ))}
        </nav>
        {!trace && (
          <div className="pointer-events-auto min-w-0 max-w-full rounded-2xl border border-line bg-bg/80 p-1 backdrop-blur-xl">
            <UniverseToggles selected={universes} onToggle={toggleUniverse} />
          </div>
        )}
      </div>

      {card && (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 top-[4.6rem] z-10 flex flex-col justify-end sm:left-auto sm:top-16 sm:w-full sm:max-w-sm sm:justify-start [&>*]:max-h-[46%] sm:[&>*]:max-h-[calc(100%-6.5rem)]">
          {card}
        </div>
      )}

      {!trace && (
        <div className={cn('pointer-events-none absolute inset-x-3 bottom-3', card && 'max-sm:hidden')}>
          <TimeBar group={group} universes={universes} onChange={setGroup} />
        </div>
      )}
    </div>
  );
}
