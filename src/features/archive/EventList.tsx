import type { ArchiveEvent } from '@/domain/archive';
import { eventHref } from '@/app/router';

interface EventListProps {
  events: readonly ArchiveEvent[];
  /** Hide the production when every event belongs to the same one. */
  hideProduction?: boolean;
}

/** Compact chronological list of events; each row jumps to the event in the timeline. */
export function EventList({ events, hideProduction }: EventListProps) {
  if (!events.length) return <p className="text-sm text-ink-faint">No events recorded yet.</p>;
  return (
    <ol className="relative space-y-1 border-l border-line pl-4">
      {events.map((e) => (
        <li key={e.id} className="relative">
          <span aria-hidden className="absolute -left-[21px] top-3.5 size-2.5 rounded-full border-2 border-bg" style={{ backgroundColor: e.universe.color }} />
          <a href={eventHref(e.id)} className="block rounded-xl px-3 py-2 transition hover:bg-surface-2">
            <span className="text-xs font-bold text-ink-faint">{e.dateLabel}</span>
            <span className="block text-sm font-semibold leading-snug text-ink">{e.title}</span>
            {!hideProduction && <span className="block text-xs text-ink-faint">{e.production.shortTitle}</span>}
          </a>
        </li>
      ))}
    </ol>
  );
}
