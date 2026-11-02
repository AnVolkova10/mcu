import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUp, FilterX } from 'lucide-react';
import { archive } from '@/content';
import { matchesFilters } from '@/domain/filters';
import { productionList, universeList } from '@/domain/catalog';
import { href, navigate, useRoute } from '@/app/router';
import { foldLine, isWideScreen, useFitOnResize } from '@/shared/lib/useFitRows';
import { DateSection } from './DateSection';
import { FilterBar } from './FilterBar';
import { YearRail } from './YearRail';
import { useTimelineFilters } from './useTimelineFilters';

const auditedCount = productionList.filter((p) => p.status === 'audited').length;

/** More events than any screen fits above the fold. */
const FIRST_EVENTS = 12;

/** Space between events: leaving it under the last whole event puts the next one right behind the footer. */
const EVENT_GAP = 16;

/** Grows the opening just enough for the first screen to end on a whole event. */
const fitHero = () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.style.minHeight = '';
  if (!isWideScreen()) return;
  const fold = foldLine() - EVENT_GAP;
  const events = [...document.querySelectorAll('main article')].slice(0, FIRST_EVENTS);
  const lastWhole = events.map((e) => e.getBoundingClientRect().bottom + window.scrollY).filter((bottom) => bottom <= fold).pop();
  if (lastWhole) hero.style.minHeight = `${hero.offsetHeight + fold - lastWhole}px`;
};

export function TimelinePage() {
  const route = useRoute();
  const { filters, setFilters, clearFilters } = useTimelineFilters();

  const sections = useMemo(
    () =>
      archive.groups
        .map((group) => ({ group, events: group.events.filter((e) => matchesFilters(e, filters)) }))
        .filter((s) => s.events.length > 0),
    [filters],
  );
  const total = sections.reduce((n, s) => n + s.events.length, 0);
  const railGroups = useMemo(() => sections.map((s) => ({ group: s.group, count: s.events.length })), [sections]);

  useFocusEvent(route.query.get('event'), sections.some((s) => s.events.some((e) => e.id === route.query.get('event'))));
  useFitOnResize(fitHero);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Hero />
      <FilterBar filters={filters} onChange={setFilters} onClear={clearFilters} resultCount={total} />

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-10 xl:grid-cols-[minmax(0,1fr)_12rem]">
        <div className="space-y-14">
          {sections.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-line p-12 text-center">
              <FilterX className="mx-auto size-10 text-ink-faint" />
              <p className="mt-4 font-display text-4xl">Nothing in this corner of the multiverse</p>
              <p className="mt-2 text-sm text-ink-muted">No events match these filters.</p>
              <button type="button" onClick={clearFilters} className="mt-6 rounded-full bg-accent px-5 py-2 text-sm font-bold text-white hover:bg-accent-strong">
                Clear filters
              </button>
            </div>
          ) : (
            sections.map(({ group, events }) => <DateSection key={group.key} group={group} events={events} />)
          )}
        </div>
        <YearRail groups={railGroups} />
      </div>

      <BackToStart />
    </div>
  );
}

const AWAY_FROM_START = 600;

/** Only once the reader has left the top: up there it would just cover the filters. */
function BackToStart() {
  const [away, setAway] = useState(() => window.scrollY > AWAY_FROM_START);

  useEffect(() => {
    const onScroll = () => setAway(window.scrollY > AWAY_FROM_START);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!away) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[calc(var(--spacing-footer)+1rem)] right-6 z-30 rounded-full border border-line bg-surface/90 p-3 text-ink-muted shadow-2xl backdrop-blur transition hover:border-line-strong hover:text-ink"
      aria-label="Back to the beginning of time"
      title="Back to the beginning of time"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative mt-4 flex items-center overflow-hidden rounded-3xl border border-line bg-surface px-6 py-8 sm:px-10">
      <div aria-hidden className="halftone absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
      <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <p className="font-display text-xl tracking-[0.3em] text-accent-strong">Marvel multiverse</p>
          <h1 className="mt-2 font-display text-6xl leading-[0.85] sm:text-8xl">The Chronology</h1>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            Every event in the year it happens inside the story — not when it was released. From the birth of the
            Infinity Stones to the 40th century, across {universeList.length} realities.
          </p>
        </div>
        <div className="shrink-0 lg:max-w-md">
          <dl className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
            <Stat value={archive.events.length} label="events" />
            <Stat value={productionList.length} label="movies & series" />
            <Stat value={auditedCount} label="audited" />
          </dl>
          <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
            {universeList.map((u) => (
              <a key={u.id} href={href('timeline', { u: u.id })} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink-muted transition hover:border-line-strong hover:text-ink">
                <span className="size-2 rounded-full" style={{ backgroundColor: u.color }} />
                {u.name} · {u.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="text-3xl font-bold leading-none">
        {value} <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">{label}</span>
      </dd>
    </div>
  );
}

/** `?event=id`: scroll to that event, clearing filters first if they hide it. */
function useFocusEvent(eventId: string | null, isVisible: boolean) {
  const handled = useRef<string | null>(null);
  useEffect(() => {
    if (!eventId || handled.current === eventId) return;
    if (!archive.eventById.has(eventId)) return;
    if (!isVisible) {
      navigate(href('timeline', { event: eventId }), { replace: true });
      return;
    }
    handled.current = eventId;
    const focus = () => {
      const el = document.getElementById(eventId);
      if (!el) return;
      el.scrollIntoView({ block: 'center' });
      el.classList.add('ring-2', 'ring-accent');
      setTimeout(() => el.classList.remove('ring-2', 'ring-accent'), 2200);
    };
    requestAnimationFrame(focus);
  }, [eventId, isVisible]);
  // Allow focusing the same event again after the URL changes.
  useEffect(() => {
    if (!eventId) handled.current = null;
  }, [eventId]);
}

