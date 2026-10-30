import { memo } from 'react';
import type { ArchiveEvent, DateGroup } from '@/domain/archive';
import { cn } from '@/shared/lib/cn';
import { EventCard } from './EventCard';

export const sectionId = (key: string) => 'date-' + key.toLowerCase().replace(/[^a-z0-9]+/g, '-');

interface DateSectionProps {
  group: DateGroup;
  events: ArchiveEvent[];
}

/** One date of the timeline: a big year that stays in view while its events scroll by. */
export const DateSection = memo(function DateSection({ group, events }: DateSectionProps) {
  const size = group.label.length <= 4 ? 'text-6xl md:text-7xl' : group.label.length <= 11 ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl';
  return (
    <section id={sectionId(group.key)} data-group={group.key} className="lazy-section grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-10">
      <div className="lg:sticky lg:top-44 lg:self-start">
        <h2 className={cn('font-display leading-[0.85] tracking-wide text-ink', size)}>{group.label}</h2>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-faint">
          {events.length} {events.length === 1 ? 'event' : 'events'}
        </p>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
});
