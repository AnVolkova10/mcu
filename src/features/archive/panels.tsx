import type { ReactNode } from 'react';
import { ArrowRight, Globe2, MapPin } from 'lucide-react';
import { archive } from '@/content';
import { closePanel, href, readPanel, useRoute, type Panel } from '@/app/router';
import {
  getCharacter, getCosmosNode, getFaction, getLocation, getProduction, getStone, getUniverse, series,
  type Character, type Location, type Production, type Stone,
} from '@/domain/catalog';
import { alpha, readableOn } from '@/domain/colors';
import { formatDate } from '@/domain/dates';
import { Sheet } from '@/shared/ui/Sheet';
import { Avatar } from '@/shared/ui/Avatar';
import { Chip } from '@/shared/ui/Chip';
import { EventList } from './EventList';
import { PanelLink } from './PanelLink';

/** Renders the side panel named in the URL (`?open=kind:id`). */
export function PanelHost() {
  const route = useRoute();
  const panel = readPanel(route);
  const content = panel && resolve(panel);
  return (
    <Sheet open={Boolean(content)} onClose={() => closePanel(route)} title={content?.title ?? ''} color={content?.color}>
      {content?.body}
    </Sheet>
  );
}

function resolve(panel: Panel): { title: string; color?: string; body: ReactNode } | null {
  switch (panel.kind) {
    case 'character': {
      const c = getCharacter(panel.id);
      return c ? { title: c.label, color: c.color, body: <CharacterPanel character={c} /> } : null;
    }
    case 'production': {
      const p = getProduction(panel.id);
      return p ? { title: p.title, color: p.color, body: <ProductionPanel production={p} /> } : null;
    }
    case 'stone': {
      const s = getStone(panel.id);
      return s ? { title: s.name, color: s.color, body: <StonePanel stone={s} /> } : null;
    }
    case 'location': {
      const l = getLocation(panel.id);
      return l ? { title: l.name, body: <LocationPanel location={l} /> } : null;
    }
  }
}

// ── Building blocks ───────────────────────────────────────────────────────────

function PanelHeader({ kicker, title, subtitle, color, visual }: { kicker: string; title: string; subtitle?: string; color?: string; visual?: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b border-line px-6 pb-6 pt-12">
      {color && <div aria-hidden className="absolute -right-16 -top-20 size-64 rounded-full blur-3xl" style={{ backgroundColor: alpha(color, 0.25) }} />}
      <div className="relative flex items-end gap-4">
        {visual}
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: color ? readableOn(color) : undefined }}>{kicker}</p>
          <h2 className="font-display text-5xl leading-[0.9]">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="px-6 py-5">
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-faint">{title}</h3>
      {children}
    </section>
  );
}

function Facts({ items }: { items: [string, ReactNode][] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-3 px-6 py-5 text-sm">
      {items.map(([k, v]) => (
        <div key={k}>
          <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">{k}</dt>
          <dd className="mt-0.5 text-ink">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function TimelineButton({ to, label }: { to: string; label: string }) {
  return (
    <div className="px-6">
      <a href={to} className="flex items-center justify-between rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm font-semibold text-ink transition hover:border-line-strong">
        {label}
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}

// ── Panels ────────────────────────────────────────────────────────────────────

function CharacterPanel({ character: c }: { character: Character }) {
  const events = archive.byCharacter.get(c.id) ?? [];
  const perUniverse = [...new Set(events.map((e) => e.universe.id))].map((id) => ({ universe: getUniverse(id)!, count: events.filter((e) => e.universe.id === id).length }));
  return (
    <>
      <PanelHeader kicker={c.role} title={c.label} subtitle={c.alias ? c.name : c.origin} color={c.color} visual={<Avatar label={c.label} color={c.color} size="lg" />} />
      <Facts items={[
        ['Status', c.status.replace('-', ' ')],
        ['Appearances', `${events.length} ${events.length === 1 ? 'event' : 'events'}`],
        ...(c.origin && c.alias ? [['Origin', c.origin] as [string, ReactNode]] : []),
      ]} />
      <Section title="Dossier">
        <p className="text-[15px] leading-7 text-ink-muted">{c.bio}</p>
        {c.variants && Object.entries(c.variants).map(([u, note]) => (
          <p key={u} className="mt-3 rounded-xl border border-line bg-surface-2 p-3 text-sm leading-6 text-ink-muted">
            <span className="mr-2 font-bold" style={{ color: getUniverse(u)?.color }}>{getUniverse(u)?.name}</span>
            {note}
          </p>
        ))}
      </Section>
      {perUniverse.length > 0 && (
        <Section title="Realities">
          <div className="flex flex-wrap gap-1.5">
            {perUniverse.map(({ universe, count }) => (
              <Chip key={universe.id} color={universe.color} href={href('timeline', { character: c.id, u: universe.id })}>{universe.name} · {count}</Chip>
            ))}
          </div>
        </Section>
      )}
      {c.factions.length > 0 && (
        <Section title="Factions">
          <div className="flex flex-wrap gap-1.5">
            {c.factions.map((f) => <Chip key={f} href={href('timeline', { faction: f })}>{getFaction(f)?.name ?? f}</Chip>)}
          </div>
        </Section>
      )}
      <TimelineButton to={href('timeline', { character: c.id })} label={`Show ${c.label} in the timeline`} />
      <Section title="Chronological journey">
        <EventList events={events} />
      </Section>
    </>
  );
}

function ProductionPanel({ production: p }: { production: Production }) {
  const events = archive.byProduction.get(p.id) ?? [];
  const universe = getUniverse(p.universe)!;
  return (
    <>
      <PanelHeader kicker={p.kind === 'season' ? 'TV season' : p.kind} title={p.title} subtitle={p.description} color={p.color} />
      <Facts items={[
        ['Released', p.released],
        ['Network', p.network],
        ['Reality', <span key="u" style={{ color: universe.color }}>{universe.name} · {universe.label}</span>],
        ['Status', p.status === 'audited' ? 'Audited' : 'v1 · not audited yet'],
        ...(p.phase ? [['MCU phase', p.phase] as [string, ReactNode]] : []),
        ...(p.series ? [['Series', series[p.series].title] as [string, ReactNode]] : []),
      ]} />
      <TimelineButton to={href('timeline', { production: p.id })} label="Show only this production in the timeline" />
      <Section title={`Timeline events (${events.length})`}>
        <EventList events={events} hideProduction />
      </Section>
    </>
  );
}

function StonePanel({ stone: s }: { stone: Stone }) {
  const events = archive.byStone.get(s.id) ?? [];
  return (
    <>
      <PanelHeader
        kicker="Infinity Stone"
        title={s.name}
        subtitle={s.vessel}
        color={s.color}
        visual={<span className="size-14 shrink-0 rotate-45 rounded-xl" style={{ background: `linear-gradient(135deg, ${readableOn(s.color)}, ${s.color})`, boxShadow: `0 0 40px ${alpha(s.color, 0.6)}` }} />}
      />
      <Section title="Power">
        <p className="text-[15px] leading-7 text-ink-muted">{s.power}</p>
      </Section>
      <Facts items={[['First appearance', s.firstAppearance], ['Status', s.status]]} />
      <Section title="Journey">
        <ol className="relative space-y-4 border-l pl-5" style={{ borderColor: alpha(s.color, 0.4) }}>
          {s.journey.map((stop, i) => {
            const place = getLocation(stop.location);
            return (
              <li key={i} className="relative">
                <span aria-hidden className="absolute -left-[26px] top-1 size-3 rotate-45 rounded-[3px]" style={{ backgroundColor: s.color }} />
                <p className="text-xs font-bold" style={{ color: readableOn(s.color) }}>{formatDate(stop.date)}</p>
                <p className="text-sm font-semibold text-ink">{stop.holder}{stop.vessel && <span className="font-normal text-ink-faint"> · {stop.vessel}</span>}</p>
                <p className="text-sm leading-6 text-ink-muted">{stop.note}</p>
                <div className="mt-1 flex flex-wrap gap-3 text-xs">
                  {place && (
                    <PanelLink panel={{ kind: 'location', id: place.id }} className="inline-flex items-center gap-1 text-ink-faint hover:text-ink">
                      <MapPin className="size-3.5" /> {place.name}
                    </PanelLink>
                  )}
                  {stop.event && <a href={href('timeline', { event: stop.event })} className="font-semibold text-ink-faint hover:text-ink">See event →</a>}
                </div>
              </li>
            );
          })}
        </ol>
      </Section>
      <TimelineButton to={href('timeline', { stone: s.id })} label={`Show every event with the ${s.name}`} />
      <Section title={`Timeline events (${events.length})`}>
        <EventList events={events} />
      </Section>
    </>
  );
}

function LocationPanel({ location: l }: { location: Location }) {
  const events = archive.byLocation.get(l.id) ?? [];
  const node = getCosmosNode(l.node);
  return (
    <>
      <PanelHeader kicker={l.kind === 'earth' ? 'Place on Earth' : node ? node.name : 'Off-world'} title={l.name} subtitle={[l.place, l.country].filter(Boolean).join(', ')} color={node?.color} />
      <Facts items={[
        ['Where', l.kind === 'earth' ? 'Earth' : l.kind === 'orbit' ? 'Earth orbit' : l.kind === 'dimension' ? 'Another dimension' : 'Deep space'],
        ['Coordinates', l.coords ? `${l.coords[0].toFixed(2)}°, ${l.coords[1].toFixed(2)}°` : '—'],
      ]} />
      <div className="px-6">
        <a href={href('map')} className="flex items-center justify-between rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm font-semibold text-ink-muted">
          <span className="inline-flex items-center gap-2"><Globe2 className="size-4" /> {l.kind === 'earth' ? 'Open on the globe' : 'Open in the Cosmos map'}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-ink-faint">Block 3</span>
        </a>
      </div>
      <Section title={`Events here (${events.length})`}>
        <EventList events={events} />
      </Section>
    </>
  );
}
