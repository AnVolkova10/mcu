import { useCallback, useMemo } from 'react';
import { archive } from '@/content';
import { buildTrace, type MapFilters } from '@/domain/atlas';
import { href, navigate, useRoute } from '@/app/router';

export type MapView = 'earth' | 'cosmos' | 'multiverse';

const VIEWS: readonly MapView[] = ['earth', 'cosmos', 'multiverse'];

/**
 * Everything the map shows lives in the URL, so any view can be linked to:
 *   #/map/earth?at=1945&u=earth-616&place=sanctum-sanctorum
 *   #/map/cosmos?node=hala
 *   #/map/earth?trace=stone:space
 */
export function useMapState() {
  const route = useRoute();
  const { query } = route;

  const view: MapView = VIEWS.includes(route.rest[0] as MapView) ? (route.rest[0] as MapView) : 'earth';
  const at = query.get('at');
  const place = query.get('place');
  const node = query.get('node');
  const traceRef = query.get('trace');

  const universes = useMemo(() => query.get('u')?.split(',').filter(Boolean) ?? [], [query]);
  const group = useMemo(() => archive.groups.find((g) => g.label === at) ?? null, [at]);
  const filters = useMemo<MapFilters>(() => ({ group, universes }), [group, universes]);
  const trace = useMemo(() => buildTrace(archive, traceRef), [traceRef]);

  const update = useCallback(
    (changes: Record<string, string | undefined>, options?: { view?: MapView; push?: boolean }) => {
      const current = Object.fromEntries(new URLSearchParams(window.location.hash.split('?')[1] ?? '').entries());
      const nextView = options?.view ?? (window.location.hash.split('?')[0].split('/')[2] as MapView | undefined) ?? 'earth';
      navigate(href('map', { ...current, ...changes }, [nextView]), { replace: !options?.push });
    },
    [],
  );

  return { view, group, universes, filters, place, node, trace, update };
}
