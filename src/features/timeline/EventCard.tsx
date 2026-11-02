import { memo, useMemo, useState } from 'react';
import { Bookmark, Check, Link2, MapPin, Skull } from 'lucide-react';
import type { ArchiveEvent } from '@/domain/archive';
import { alpha, readableOn } from '@/domain/colors';
import { eventHref } from '@/app/router';
import { useLibrary } from '@/features/library/store';
import { Markup } from '@/features/archive/Markup';
import { PanelLink } from '@/features/archive/PanelLink';
import { ObjectIcon } from '@/features/objects/ObjectIcon';
import { UniverseBadge } from '@/shared/ui/UniverseBadge';
import { cn } from '@/shared/lib/cn';

const VISIBLE_CHARACTERS = 6;

interface EventCardProps {
  event: ArchiveEvent;
  /** Shows the date inside the card, for lists that are not grouped by date. */
  showDate?: boolean;
}

export const EventCard = memo(function EventCard({ event, showDate }: EventCardProps) {
  const [showAllCast, setShowAllCast] = useState(false);
  const saved = useLibrary((s) => s.saved.includes(event.id));
  const read = useLibrary((s) => s.read.includes(event.id));
  const toggleSaved = useLibrary((s) => s.toggleSaved);
  const toggleRead = useLibrary((s) => s.toggleRead);
  const [copied, setCopied] = useState(false);

  const deaths = useMemo(
    () => new Map(event.deaths.flatMap((d) => (d.character ? [[d.character.id, { presumed: d.presumed }] as const] : []))),
    [event.deaths],
  );
  const cast = showAllCast ? event.characters : event.characters.slice(0, VISIBLE_CHARACTERS);
  const legacy = event.status === 'legacy';
  const freeDeaths = event.deaths.filter((d) => !d.character);

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}${eventHref(event.id)}`;
    await navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article
      id={event.id}
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-surface/70 p-5 pl-6 transition-colors sm:p-6 sm:pl-7',
        legacy ? 'border-dashed border-line' : 'border-line hover:border-line-strong',
        read && 'opacity-75 hover:opacity-100',
      )}
    >
      <span aria-hidden className="absolute inset-y-5 left-0 w-1 rounded-r-full" style={{ backgroundColor: event.universe.color, opacity: legacy ? 0.45 : 1 }} />

      <header className="flex flex-wrap items-center gap-2 pr-1">
        <PanelLink
          panel={{ kind: 'production', id: event.production.id }}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-surface-2 py-1 pl-1.5 pr-3 text-xs font-semibold text-ink transition hover:border-line-strong"
          title={`${event.production.title} (${event.production.released})`}
        >
          <span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: event.production.color, boxShadow: `0 0 0 2px ${alpha(event.production.color, 0.25)}` }} />
          <span className="truncate">{event.production.shortTitle}</span>
          {event.segment && <span className="font-normal text-ink-faint">{event.segment}</span>}
        </PanelLink>
        <UniverseBadge universe={event.universe} branch={event.branch} />
        {showDate && <span className="text-xs font-semibold text-ink-muted">{event.dateLabel}</span>}
        {legacy && (
          <span className="rounded-full border border-dashed border-legacy/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-legacy" title="Inherited from v1, not audited yet">
            v1 · unaudited
          </span>
        )}
        <div className="ml-auto flex items-center gap-1">
          <IconToggle active={read} onClick={() => toggleRead(event.id)} label={read ? 'Mark as unread' : 'Mark as read'}>
            <Check className="size-4" />
          </IconToggle>
          <IconToggle active={saved} onClick={() => toggleSaved(event.id)} label={saved ? 'Remove from saved' : 'Save event'}>
            <Bookmark className={cn('size-4', saved && 'fill-current')} />
          </IconToggle>
          <IconToggle active={copied} onClick={copyLink} label={copied ? 'Link copied' : 'Copy link to this event'}>
            <Link2 className="size-4" />
          </IconToggle>
        </div>
      </header>

      <h3 className="mt-3 text-lg font-bold leading-snug text-ink sm:text-xl">{event.title}</h3>

      <div className="mt-2.5 space-y-3 text-[15px] leading-7 text-ink-muted">
        {event.text.map((p, i) => (
          <p key={i}>
            <Markup text={p} deaths={deaths} />
          </p>
        ))}
      </div>

      {(event.characters.length > 0 || event.locations.length > 0 || event.stones.length > 0 || event.objects.length > 0 || event.deaths.length > 0) && (
        <footer className="mt-5 flex flex-col gap-3 border-t border-line pt-4">
          {event.characters.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {cast.map((c) => (
                <PanelLink
                  key={c.id}
                  panel={{ kind: 'character', id: c.id }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 py-1 pl-1.5 pr-2.5 text-xs font-medium text-ink-muted transition hover:border-line-strong hover:text-ink"
                  title={c.name}
                >
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className={cn(deaths.has(c.id) && 'line-through decoration-accent')}>{c.label}</span>
                </PanelLink>
              ))}
              {event.characters.length > VISIBLE_CHARACTERS && (
                <button type="button" onClick={() => setShowAllCast((v) => !v)} className="rounded-full px-2 py-1 text-xs font-semibold text-ink-faint hover:text-ink">
                  {showAllCast ? 'Less' : `+${event.characters.length - VISIBLE_CHARACTERS} more`}
                </button>
              )}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-1.5">
            {event.locations.map(({ location, note }) => (
              <PanelLink
                key={location.id}
                panel={{ kind: 'location', id: location.id }}
                className="inline-flex max-w-full items-center gap-1.5 rounded-full px-2 py-1 text-xs text-ink-muted transition hover:bg-surface-2 hover:text-ink"
                title={note ? `${location.name} · ${note}` : location.name}
              >
                <MapPin className="size-3.5 shrink-0 text-ink-faint" />
                <span className="truncate">{[location.name, location.place ?? location.country].filter(Boolean).join(', ')}</span>
              </PanelLink>
            ))}
            {event.stones.map((s) => (
              <PanelLink
                key={s.id}
                panel={{ kind: 'stone', id: s.id }}
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold transition hover:brightness-125"
                style={{ color: readableOn(s.color), backgroundColor: alpha(s.color, 0.12) }}
              >
                <span className="size-2 rotate-45 rounded-[2px]" style={{ backgroundColor: s.color }} />
                {s.name}
              </PanelLink>
            ))}
            {freeDeaths.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs text-ink-faint">
                <Skull className="size-3.5 text-accent" />
                {freeDeaths.map((d) => d.name + (d.presumed ? ' (presumed)' : '')).join(', ')}
              </span>
            )}
          </div>
          {event.objects.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {event.objects.map((o) => (
                <PanelLink
                  key={o.id}
                  panel={{ kind: 'object', id: o.id }}
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold transition hover:brightness-125"
                  style={{ color: readableOn(o.color), backgroundColor: alpha(o.color, 0.12) }}
                >
                  <ObjectIcon kind={o.kind} className="size-3.5" />
                  {o.name}
                </PanelLink>
              ))}
            </div>
          )}
        </footer>
      )}
    </article>
  );
});

function IconToggle({ active, onClick, label, children }: { active: boolean; onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={cn(
        'rounded-full p-2 transition',
        active ? 'bg-ink text-bg' : 'text-ink-faint hover:bg-surface-2 hover:text-ink',
      )}
    >
      {children}
    </button>
  );
}
