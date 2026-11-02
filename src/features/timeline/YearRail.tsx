import { useEffect, useMemo, useRef, useState } from 'react';
import type { DateGroup } from '@/domain/archive';
import { periods } from '@/domain/dates';
import { cn } from '@/shared/lib/cn';
import { sectionId } from './DateSection';

interface YearRailProps {
  groups: { group: DateGroup; count: number }[];
  /** Lists the dates of every period, so a filtered timeline shows its whole result at a glance. */
  showAll: boolean;
}

/** Desktop navigator: periods, and the dates of the period being read. */
export function YearRail({ groups, showAll }: YearRailProps) {
  const rail = useRef<HTMLElement>(null);
  const [activeKey, setActiveKey] = useState<string | null>(groups[0]?.group.key ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveKey((visible[0].target as HTMLElement).dataset.group ?? null);
      },
      { rootMargin: '-180px 0px -55% 0px' },
    );
    groups.forEach(({ group }) => {
      const el = document.getElementById(sectionId(group.key));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [groups]);

  // A long list scrolls on its own: the date being read stays in view. Only the rail moves, never the page.
  useEffect(() => {
    const box = rail.current?.getBoundingClientRect();
    const date = rail.current?.querySelector('[aria-current]')?.getBoundingClientRect();
    if (!rail.current || !box || !date) return;
    if (date.top < box.top) rail.current.scrollTop -= box.top - date.top;
    else if (date.bottom > box.bottom) rail.current.scrollTop += date.bottom - box.bottom;
  }, [activeKey, showAll]);

  const activePeriod = groups.find((g) => g.group.key === activeKey)?.group.period.id;
  const byPeriod = useMemo(
    () => periods.map((p) => ({ period: p, items: groups.filter((g) => g.group.period.id === p.id) })).filter((p) => p.items.length),
    [groups],
  );

  const jump = (key: string) => document.getElementById(sectionId(key))?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <nav ref={rail} aria-label="Jump to a date" className="sticky top-44 hidden max-h-[calc(100dvh-12rem-var(--spacing-footer))] overflow-y-auto pr-2 xl:block">
      <ol className="space-y-1 border-l border-line">
        {byPeriod.map(({ period, items }) => {
          const current = period.id === activePeriod;
          return (
            <li key={period.id}>
              <button
                type="button"
                onClick={() => jump(items[0].group.key)}
                title={period.range}
                className={cn('-ml-px block border-l-2 py-1 pl-3 text-left text-xs font-bold uppercase tracking-[0.14em] transition', current ? 'border-accent text-ink' : 'border-transparent text-ink-faint hover:text-ink')}
              >
                {period.label}
              </button>
              {(current || showAll) && (
                <ol className="mb-2 ml-3 mt-1 space-y-0.5">
                  {items.map(({ group, count }) => (
                    <li key={group.key}>
                      <button
                        type="button"
                        onClick={() => jump(group.key)}
                        aria-current={group.key === activeKey ? 'true' : undefined}
                        className={cn('flex w-full items-baseline justify-between gap-2 rounded px-2 py-0.5 text-left text-xs transition', group.key === activeKey ? 'bg-surface-2 text-ink' : 'text-ink-faint hover:text-ink')}
                      >
                        <span className="truncate">{group.label}</span>
                        <span className="text-[10px] tabular-nums opacity-70">{count}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
