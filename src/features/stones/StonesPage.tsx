import { archive } from '@/content';
import { stoneList } from '@/domain/catalog';
import { alpha, readableOn } from '@/domain/colors';
import { PanelLink } from '@/features/archive/PanelLink';
import { useFitRows } from '@/shared/lib/useFitRows';
import { PageHeader } from '@/shared/ui/PageHeader';
import { StoneGem } from './StoneGem';
import { StonesTimeline } from './StonesTimeline';

const MIN_CARD = 216;
const CARD_GAP = 16;
const ROWS = 2;

export function StonesPage() {
  const grid = useFitRows<HTMLUListElement>(MIN_CARD, CARD_GAP, ROWS);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <PageHeader kicker="The Infinity Saga" title="The Six Stones">
        Before creation there were six singularities. When the universe exploded into existence, their remnants were
        forged into concentrated ingots.
      </PageHeader>

      <ul ref={grid} className="mt-5 grid gap-4 sm:grid-cols-2 lg:auto-rows-[var(--row)] lg:grid-cols-3">
        {stoneList.map((stone) => {
          const events = archive.byStone.get(stone.id)?.length ?? 0;
          return (
            <li key={stone.id}>
              <PanelLink
                panel={{ kind: 'stone', id: stone.id }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-line-strong"
              >
                <span aria-hidden className="absolute -right-14 -top-14 size-56 rounded-full blur-3xl transition-opacity group-hover:opacity-100" style={{ backgroundColor: alpha(stone.color, 0.28), opacity: 0.7 }} />
                {/* Side by side on short windows, stacked when there is height to spare. */}
                <div className="relative flex items-center gap-8 tall:block">
                  <StoneGem stone={stone} className="m-2" />
                  <div className="tall:mt-6">
                    <h2 className="font-display text-4xl leading-none text-ink">{stone.name}</h2>
                    <p className="mt-1 text-sm font-semibold" style={{ color: readableOn(stone.color) }}>{stone.vessel}</p>
                  </div>
                </div>
                <p className="relative mt-3 line-clamp-3 text-sm leading-6 text-ink-muted">{stone.power}</p>
                <p className="relative mt-auto pt-3 text-xs text-ink-faint">
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
