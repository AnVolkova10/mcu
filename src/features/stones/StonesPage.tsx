import { archive } from '@/content';
import { stoneList } from '@/domain/catalog';
import { alpha, readableOn } from '@/domain/colors';
import { PanelLink } from '@/features/archive/PanelLink';
import { PageHeader } from '@/shared/ui/PageHeader';
import { StonesTimeline } from './StonesTimeline';

export function StonesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <PageHeader kicker="The Infinity Saga" title="The Six Stones">
        Before creation there were six singularities. When the universe exploded into existence, their remnants were
        forged into concentrated ingots.
      </PageHeader>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stoneList.map((stone) => {
          const events = archive.byStone.get(stone.id)?.length ?? 0;
          return (
            <li key={stone.id}>
              <PanelLink
                panel={{ kind: 'stone', id: stone.id }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-line-strong"
              >
                <span aria-hidden className="absolute -right-14 -top-14 size-56 rounded-full blur-3xl transition-opacity group-hover:opacity-100" style={{ backgroundColor: alpha(stone.color, 0.28), opacity: 0.7 }} />
                <span
                  aria-hidden
                  className="relative size-12 rotate-45 rounded-xl transition duration-300 group-hover:rotate-[60deg]"
                  style={{ background: `linear-gradient(135deg, ${readableOn(stone.color)}, ${stone.color})`, boxShadow: `0 0 34px ${alpha(stone.color, 0.65)}` }}
                />
                <h2 className="relative mt-6 font-display text-4xl leading-none text-ink">{stone.name}</h2>
                <p className="relative mt-1 text-sm font-semibold" style={{ color: readableOn(stone.color) }}>{stone.vessel}</p>
                <p className="relative mt-3 line-clamp-3 flex-1 text-sm leading-6 text-ink-muted">{stone.power}</p>
                <p className="relative mt-4 text-xs text-ink-faint">
                  {stone.journey.length} stops · {events} {events === 1 ? 'event' : 'events'}
                </p>
              </PanelLink>
            </li>
          );
        })}
      </ul>

      <div className="mt-8">
        <StonesTimeline />
      </div>
    </div>
  );
}
