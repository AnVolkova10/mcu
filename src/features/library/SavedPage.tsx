import { useMemo } from 'react';
import { Bookmark } from 'lucide-react';
import { archive } from '@/content';
import { href } from '@/app/router';
import { EventCard } from '@/features/timeline/EventCard';
import { useLibrary } from './store';

export function SavedPage() {
  const saved = useLibrary((s) => s.saved);
  const events = useMemo(() => {
    const ids = new Set(saved);
    return archive.events.filter((e) => ids.has(e.id));
  }, [saved]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-strong">Your collection</p>
      <h1 className="font-display text-6xl leading-none">Saved events</h1>
      <p className="mt-2 text-ink-muted">Kept in this browser, in chronological order.</p>

      {events.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-line p-12 text-center">
          <Bookmark className="mx-auto size-10 text-ink-faint" />
          <p className="mt-4 text-ink-muted">Use the bookmark on any event to keep it here.</p>
          <a href={href('timeline')} className="mt-6 inline-block rounded-full bg-accent px-5 py-2 text-sm font-bold text-white hover:bg-accent-strong">
            Explore the timeline
          </a>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {events.map((e) => <EventCard key={e.id} event={e} showDate />)}
        </div>
      )}
    </div>
  );
}
