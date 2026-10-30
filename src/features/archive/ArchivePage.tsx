import type { ReactNode } from 'react';
import { archive } from '@/content';
import { characterList, locationList, productionList, universeList } from '@/domain/catalog';
import { periods } from '@/domain/dates';
import { href } from '@/app/router';
import { useLibrary } from '@/features/library/store';
import { PageHeader } from '@/shared/ui/PageHeader';
import { PanelLink } from './PanelLink';

const totalEvents = archive.events.length;
const auditedEvents = archive.events.filter((e) => e.status === 'audited').length;
const auditedProductions = productionList.filter((p) => p.status === 'audited').length;

const byUniverse = universeList
  .map((universe) => ({ universe, count: archive.events.filter((e) => e.universe.id === universe.id).length }))
  .sort((a, b) => b.count - a.count);

const byPeriod = periods.map((period) => ({ period, count: archive.events.filter((e) => e.period.id === period.id).length }));

const topCharacters = characterList
  .map((character) => ({ character, count: archive.byCharacter.get(character.id)?.length ?? 0 }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

export function ArchivePage() {
  const read = useLibrary((s) => s.read.length);
  const saved = useLibrary((s) => s.saved.length);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <PageHeader kicker="Behind the chronology" title="The Archive">
        Your reading progress, how much of the chronology has been audited and where it all happens.
      </PageHeader>

      <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatTile label="Events" value={totalEvents} />
        <StatTile label="Movies & series" value={productionList.length} />
        <StatTile label="Characters" value={characterList.length} />
        <StatTile label="Places" value={locationList.length} />
        <StatTile label="Realities" value={universeList.length} />
      </dl>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card title="Your progress">
          <Meter label="Events read" value={read} max={totalEvents} />
          <p className="mt-4 text-sm text-ink-muted">
            <a href={href('saved')} className="font-semibold text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent">
              {saved} saved {saved === 1 ? 'event' : 'events'}
            </a>{' '}
            in this browser.
          </p>
        </Card>
        <Card title="Audit coverage">
          <Meter label="Movies & series audited" value={auditedProductions} max={productionList.length} />
          <div className="mt-4">
            <Meter label="Events audited" value={auditedEvents} max={totalEvents} />
          </div>
        </Card>

        <Card title="Events by reality">
          <ol className="space-y-3">
            {byUniverse.map(({ universe, count }) => (
              <li key={universe.id}>
                <a href={href('timeline', { u: universe.id })} className="group block">
                  <span className="text-sm font-medium text-ink-muted group-hover:text-ink">{universe.name} · {universe.label}</span>
                  <Bar value={count} max={byUniverse[0].count} color={universe.color} />
                </a>
              </li>
            ))}
          </ol>
        </Card>

        <Card title="Events by period">
          <ol className="flex h-52 items-end gap-1 border-b border-line">
            {byPeriod.map(({ period, count }) => (
              <li key={period.id} className="h-full flex-1">
                <a
                  href={href('timeline', { period: period.id })}
                  className="group flex h-full flex-col items-center justify-end gap-1 rounded-t-lg transition hover:bg-surface-2"
                  title={`${period.label}: ${count} events`}
                >
                  <span className="text-xs font-semibold tabular-nums text-ink-muted">{count}</span>
                  <span
                    className="w-6 rounded-t bg-accent transition group-hover:bg-accent-strong"
                    style={{ height: `${(count / Math.max(...byPeriod.map((p) => p.count))) * 80}%` }}
                  />
                </a>
              </li>
            ))}
          </ol>
          <ol aria-hidden className="mt-1.5 flex gap-1">
            {byPeriod.map(({ period }) => (
              <li key={period.id} className="flex-1 text-center text-[11px] leading-tight text-ink-faint">{period.label}</li>
            ))}
          </ol>
        </Card>

        <div className="lg:col-span-2">
          <Card title="Most present characters">
            <ol className="grid gap-x-10 gap-y-3 md:grid-cols-2">
              {topCharacters.map(({ character, count }) => (
                <li key={character.id}>
                  <PanelLink panel={{ kind: 'character', id: character.id }} className="group block">
                    <span className="flex items-center gap-2 text-sm font-medium text-ink-muted group-hover:text-ink">
                      <span className="size-2 rounded-full" style={{ backgroundColor: character.color }} />
                      {character.label}
                    </span>
                    <Bar value={count} max={topCharacters[0].count} color="var(--color-line-strong)" />
                  </PanelLink>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>

      <section className="mt-4 rounded-3xl border border-line bg-surface p-5 text-sm leading-7 text-ink-muted sm:p-7">
        <h2 className="text-xl font-bold text-ink">Credits</h2>
        <p className="mt-2">
          Original timeline compiled by{' '}
          <a href="https://aaronperris.com/mcu/" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent">Aaron Perris</a>.
          Expanded, audited and maintained by Ángela Curzi.
        </p>
        <p>
          Posters come from{' '}
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent">The Movie Database</a>.
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
        <p>A fan project, not affiliated with Marvel or Disney.</p>
      </section>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="h-full rounded-3xl border border-line bg-surface p-5 sm:p-7">
      <h2 className="mb-5 text-xl font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function StatTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <dt className="text-sm text-ink-muted">{label}</dt>
      <dd className="mt-1 text-3xl font-bold text-ink">{value.toLocaleString('en-US')}</dd>
    </div>
  );
}

/** A ratio against its limit: the value is always printed, the bar only supports it. */
function Meter({ label, value, max }: { label: string; value: number; max: number }) {
  const percent = max ? Math.round((value / max) * 100) : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="text-ink-muted">{label}</span>
        <span className="font-semibold text-ink">{value} of {max} · {percent}%</span>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded bg-accent/20" role="meter" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="h-full rounded bg-accent transition-[width] duration-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

/** Thin horizontal bar from a shared baseline, with the value at its tip. */
function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  return (
    <span className="mt-1 flex items-center gap-2">
      <span className="h-2.5 rounded-r" style={{ width: `calc((100% - 2.5rem) * ${value / max})`, backgroundColor: color }} />
      <span className="text-xs font-semibold tabular-nums text-ink-muted">{value}</span>
    </span>
  );
}
