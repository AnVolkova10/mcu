import { useState, type ReactNode } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { archive } from '@/content';
import { closePanel, href, readPanel, useRoute, type Panel } from '@/app/router';
import {
  getCharacter, getCosmosNode, getFaction, getLocation, getObject, getProduction, getStone, getUniverse, series,
  type ArchiveObject, type Character, type Location, type Production, type Stone,
} from '@/domain/catalog';
import { buildTrace } from '@/domain/atlas';
import { alpha, readableOn } from '@/domain/colors';
import { formatDate } from '@/domain/dates';
import type { CharacterCredit } from '@/domain/schema';
import { cn } from '@/shared/lib/cn';
import { tmdbImage } from '@/shared/lib/tmdb';
import { Sheet } from '@/shared/ui/Sheet';
import { portraitSources } from '@/features/characters/portraits';
import { pickVersion, useVersions } from '@/features/characters/versions';
import { Poster } from '@/features/productions/Poster';
import { StoneGem } from '@/features/stones/StoneGem';
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
      return c ? { title: c.label, color: c.color, body: <CharacterPanel key={c.id} character={c} /> } : null;
    }
    case 'production': {
      const p = getProduction(panel.id);
      return p ? { title: p.title, color: p.color, body: <ProductionPanel production={p} /> } : null;
    }
    case 'stone': {
      const s = getStone(panel.id);
      return s ? { title: s.name, color: s.color, body: <StonePanel stone={s} /> } : null;
    }
    case 'object': {
      const o = getObject(panel.id);
      return o ? { title: o.name, color: o.color, body: <ObjectPanel object={o} /> } : null;
    }
    case 'location': {
      const l = getLocation(panel.id);
      return l ? { title: l.name, body: <LocationPanel location={l} /> } : null;
    }
  }
}

// ── Building blocks ───────────────────────────────────────────────────────────

function PanelHeader({ kicker, title, subtitle, color, visual, plain }: { kicker: string; title: string; subtitle?: string; color?: string; visual?: ReactNode; plain?: boolean }) {
  return (
    <div className="relative overflow-hidden border-b border-line px-6 pb-6 pt-12">
      {color && !plain && <div aria-hidden className="absolute -right-16 -top-20 size-64 rounded-full blur-3xl" style={{ backgroundColor: alpha(color, 0.25) }} />}
      <div className="relative flex items-end gap-4">
        {visual}
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: color ? readableOn(color) : undefined }}>{kicker}</p>
          <h2 className={`font-display leading-[0.9] ${title.length > 24 ? 'text-4xl' : 'text-5xl'}`}>{title}</h2>
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

const plural = (count: number, noun: string) => `${count} ${noun}${count === 1 ? '' : 's'}`;

function PlayedBy({ credit, color }: { credit: CharacterCredit; color: string }) {
  const titles = credit.productions.flatMap((id) => getProduction(id)?.shortTitle ?? []).join(', ');
  return (
    <li className="flex min-w-0 items-center gap-3" title={titles}>
      <Avatar label={credit.actor} color={color} sources={credit.photo ? [tmdbImage('w185', credit.photo)] : []} />
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-ink">{credit.actor}</span>
        <span className="block truncate text-xs text-ink-faint">{credit.voice ? 'Voice · ' : ''}{plural(credit.productions.length, 'production')}</span>
      </span>
    </li>
  );
}

function CharacterPanel({ character: c }: { character: Character }) {
  const { query } = useRoute();
  const events = archive.byCharacter.get(c.id) ?? [];
  const perUniverse = [...new Set(events.map((e) => e.universe.id))]
    .map((id) => ({ universe: getUniverse(id)!, count: events.filter((e) => e.universe.id === id).length }))
    .sort((a, b) => b.count - a.count);
  const filtered = query.get('u')?.split(',') ?? [];
  const chosen = useVersions((s) => s.chosen[c.id]);
  const choose = useVersions((s) => s.choose);
  const [version, setVersion] = useState(() => pickVersion(perUniverse.map((p) => p.universe.id), filtered, chosen));
  const credits = c.credits.filter((credit) => credit.universe === version);
  return (
    <>
      <PanelHeader kicker={c.role} title={c.label} subtitle={c.alias ? c.name : c.origin} color={c.color} visual={<Avatar key={version} label={c.label} color={c.color} sources={portraitSources(c, version)} size="xl" />} />
      {perUniverse.length > 1 && (
        <Section title="Versions">
          <div className="flex flex-wrap gap-5">
            {perUniverse.map(({ universe, count }) => (
              <button
                key={universe.id}
                type="button"
                onClick={() => { setVersion(universe.id); choose(c.id, universe.id); }}
                aria-pressed={version === universe.id}
                className={cn('flex w-24 flex-col items-center gap-2 text-center transition', version === universe.id ? 'opacity-100' : 'opacity-60 hover:opacity-100')}
              >
                <Avatar label={c.label} color={c.color} sources={portraitSources(c, universe.id)} size="lg" />
                <span className="text-xs font-semibold leading-tight text-ink">{universe.label}<span className="block font-normal text-ink-faint">{plural(count, 'event')}</span></span>
              </button>
            ))}
          </div>
        </Section>
      )}
      <Facts items={[
        ['Status', c.status.replace('-', ' ')],
        ['Appearances', plural(events.length, 'event')],
        ...(c.origin && c.alias ? [['Origin', c.origin] as [string, ReactNode]] : []),
      ]} />
      {credits.length > 0 && (
        <Section title="Played by">
          <ul className="grid gap-3 sm:grid-cols-2">
            {credits.map((credit) => <PlayedBy key={credit.actor} credit={credit} color={c.color} />)}
          </ul>
        </Section>
      )}
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
      {events.some((e) => e.locations.length) && (
        <div className="mt-2"><TimelineButton to={href('map', { trace: `character:${c.id}` }, ['earth'])} label="Trace this journey on the map" /></div>
      )}
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
      <PanelHeader
        kicker={p.kind === 'season' ? 'TV season' : p.kind}
        title={p.title}
        color={p.color}
        visual={<div className="w-28 shrink-0 sm:w-32"><Poster production={p} size="w500" className="shadow-xl shadow-black/50 ring-1 ring-line" /></div>}
      />
      {p.description && (
        <Section title="About">
          <p className="text-[15px] leading-7 text-ink-muted">{p.description}</p>
        </Section>
      )}
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
        visual={<StoneGem stone={s} className="mx-2 mb-2" />}
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
      <TimelineButton to={href('map', { trace: `stone:${s.id}` }, ['earth'])} label="Trace this journey on the map" />
      <div className="mt-2"><TimelineButton to={href('timeline', { stone: s.id })} label={`Show every event with the ${s.name}`} /></div>
      <Section title={`Timeline events (${events.length})`}>
        <EventList events={events} />
      </Section>
    </>
  );
}

function ObjectPanel({ object: o }: { object: ArchiveObject }) {
  const events = archive.byObject.get(o.id) ?? [];
  const productions = new Set(events.flatMap((e) => [e.production.id, ...e.alsoIn.map((p) => p.id)]));
  const stops = buildTrace(archive, `object:${o.id}`)?.stops.length ?? 0;
  return (
    <>
      <PanelHeader kicker={o.kindLabel} title={o.name} color={o.color} plain />
      <Section title="Dossier">
        <p className="text-[15px] leading-7 text-ink-muted">{o.description}</p>
      </Section>
      <Facts items={[
        ['Appearances', plural(events.length, 'event')],
        ['Productions', productions.size],
      ]} />
      <TimelineButton to={href('timeline', { object: o.id })} label={`Show ${o.name} in the timeline`} />
      {stops > 1 && (
        <div className="mt-2"><TimelineButton to={href('map', { trace: `object:${o.id}` }, ['earth'])} label="Trace this journey on the map" /></div>
      )}
      <Section title="Chronological journey">
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
        ['Coordinates', l.approximate ? 'Area only, exact spot unknown' : l.coords ? `${l.coords[0].toFixed(2)}°, ${l.coords[1].toFixed(2)}°` : '—'],
      ]} />
      <TimelineButton
        to={l.kind === 'earth' ? href('map', { place: l.id }, ['earth']) : href('map', { node: l.node }, ['cosmos'])}
        label={l.kind === 'earth' ? 'Open on the globe' : 'Open in the Cosmos'}
      />
      <Section title={`Events here (${events.length})`}>
        <EventList events={events} />
      </Section>
    </>
  );
}
