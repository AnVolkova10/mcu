import { ChevronLeft, ChevronRight, Globe2, Orbit, Pause, Play, X } from 'lucide-react';
import type { ReactNode } from 'react';
import type { ArchiveEvent } from '@/domain/archive';
import type { Trace } from '@/domain/atlas';
import { alpha, readableOn } from '@/domain/colors';
import { getCosmosNode } from '@/domain/catalog';
import { eventHref } from '@/app/router';
import { EventList } from '@/features/archive/EventList';
import { cn } from '@/shared/lib/cn';

interface CardShellProps {
  kicker: string;
  title: string;
  subtitle?: string;
  color?: string;
  onClose: () => void;
  children: ReactNode;
}

function CardShell({ kicker, title, subtitle, color, onClose, children }: CardShellProps) {
  return (
    <aside className="pointer-events-auto flex max-h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg/85 shadow-2xl backdrop-blur-xl animate-panel-in">
      <header className="relative border-b border-line p-4 pr-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: color ? readableOn(color) : undefined }}>{kicker}</p>
        <h2 className="mt-0.5 font-display text-3xl leading-none text-ink">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
        <button type="button" onClick={onClose} className="absolute right-3 top-3 rounded-full border border-line p-1.5 text-ink-muted transition hover:border-line-strong hover:text-ink" aria-label="Close">
          <X className="size-4" />
        </button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4">{children}</div>
    </aside>
  );
}

interface PlaceCardProps {
  kicker: string;
  title: string;
  subtitle?: string;
  color?: string;
  description?: string;
  events: readonly ArchiveEvent[];
  action?: ReactNode;
  onClose: () => void;
}

/** A place on the globe or a world of the Cosmos, with the events that happen there. */
export function PlaceCard({ kicker, title, subtitle, color, description, events, action, onClose }: PlaceCardProps) {
  return (
    <CardShell kicker={kicker} title={title} subtitle={subtitle} color={color} onClose={onClose}>
      {description && <p className="mb-4 text-sm leading-6 text-ink-muted">{description}</p>}
      {action}
      <EventList events={events} />
    </CardShell>
  );
}

const JOURNEY: Record<Trace['kind'], string> = { stone: 'Infinity Stone journey', character: 'Character journey', object: 'Object journey' };

interface TraceCardProps {
  trace: Trace;
  stopIndex: number;
  playing: boolean;
  onStop: (index: number) => void;
  onTogglePlay: () => void;
  onClose: () => void;
}

/** The ordered stops of a journey. Off-world stops say so, since the globe cannot show them. */
export function TraceCard({ trace, stopIndex, playing, onStop, onTogglePlay, onClose }: TraceCardProps) {
  const last = trace.stops.length - 1;
  const current = trace.stops[stopIndex];
  return (
    <CardShell
      kicker={JOURNEY[trace.kind]}
      title={trace.name}
      subtitle={`Stop ${stopIndex + 1} of ${trace.stops.length}`}
      color={trace.color}
      onClose={onClose}
    >
      <div className="mb-3 flex items-center gap-2">
        <button type="button" onClick={onTogglePlay} className="grid size-10 place-items-center rounded-full text-white transition hover:brightness-110" style={{ backgroundColor: trace.color }} aria-label={playing ? 'Pause journey' : 'Play journey'}>
          {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}
        </button>
        <button type="button" onClick={() => onStop(Math.max(0, stopIndex - 1))} disabled={stopIndex === 0} className="grid size-10 place-items-center rounded-full border border-line text-ink-muted transition hover:text-ink disabled:opacity-40" aria-label="Previous stop">
          <ChevronLeft className="size-5" />
        </button>
        <button type="button" onClick={() => onStop(Math.min(last, stopIndex + 1))} disabled={stopIndex === last} className="grid size-10 place-items-center rounded-full border border-line text-ink-muted transition hover:text-ink disabled:opacity-40" aria-label="Next stop">
          <ChevronRight className="size-5" />
        </button>
      </div>
      {current && (
        <div className="mb-3 rounded-xl border p-3" style={{ borderColor: alpha(trace.color, 0.5), backgroundColor: alpha(trace.color, 0.08) }}>
          <p className="text-xs font-bold" style={{ color: readableOn(trace.color) }}>{current.date} · {current.location.name}</p>
          <p className="mt-0.5 text-sm font-semibold text-ink">{current.title}</p>
          {current.detail && <p className="mt-1 text-sm leading-6 text-ink-muted">{current.detail}</p>}
          {current.eventId && <a href={eventHref(current.eventId)} className="mt-1 inline-block text-xs font-semibold text-ink-faint hover:text-ink">See event in the timeline →</a>}
        </div>
      )}
      <ol className="space-y-0.5">
        {trace.stops.map((stop, i) => {
          const offWorld = stop.location.kind !== 'earth';
          return (
            <li key={stop.key}>
              <button
                type="button"
                onClick={() => onStop(i)}
                aria-current={i === stopIndex ? 'step' : undefined}
                className={cn('flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition', i === stopIndex ? 'bg-surface-3 text-ink' : 'text-ink-muted hover:bg-surface-2')}
              >
                <span className="w-14 shrink-0 font-semibold text-ink-faint">{stop.date}</span>
                <span className="min-w-0 flex-1 truncate">{stop.location.name}</span>
                {offWorld ? <Orbit className="size-3.5 shrink-0 text-ink-faint" aria-label={getCosmosNode(stop.location.node)?.name ?? 'Off-world'} /> : <Globe2 className="size-3.5 shrink-0 text-ink-faint" aria-label="On Earth" />}
              </button>
            </li>
          );
        })}
      </ol>
    </CardShell>
  );
}
