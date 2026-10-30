import { useCallback, useMemo } from 'react';
import { href, navigate, useRoute } from '@/app/router';
import { filtersFromQuery, filtersToQuery, type TimelineFilters } from '@/domain/filters';

/** Timeline filters live in the URL, so every filtered view can be shared or bookmarked. */
export function useTimelineFilters() {
  const route = useRoute();
  const filters = useMemo(() => filtersFromQuery(route.query), [route.query]);

  const setFilters = useCallback(
    (patch: Partial<TimelineFilters>) => {
      const next = { ...filtersFromQuery(new URLSearchParams(window.location.hash.split('?')[1] ?? '')), ...patch };
      navigate(href('timeline', filtersToQuery(next)), { replace: true });
    },
    [],
  );

  const clearFilters = useCallback(() => navigate(href('timeline'), { replace: true }), []);

  return { filters, setFilters, clearFilters };
}
