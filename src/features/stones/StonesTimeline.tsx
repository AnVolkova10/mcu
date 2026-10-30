import { useState } from 'react';
import { currentRoute, openPanel } from '@/app/router';
import { formatDate } from '@/domain/dates';
import { getLocation, stoneList, type Stone } from '@/domain/catalog';
import type { StoneStopInput } from '@/domain/schema';

/** Time axis in stretches: the journeys crowd into a few decades, so older ages are compressed. */
const BREAKS: readonly (readonly [year: number, percent: number])[] = [
  [-1_000_000_000, 1], [-10_000, 8], [965, 17], [1942, 33], [1945, 38], [1989, 53], [1995, 60], [2012, 76], [2018, 91],
];

const TICKS = [
  { year: -1_000_000_000, label: 'Eons' },
  { year: -10_000, label: 'Ancient' },
  { year: 965, label: '965' },
  { year: 1945, label: '1945' },
  { year: 1989, label: '1989' },
  { year: 2012, label: '2012' },
  { year: 2018, label: '2018' },
];

function position(year: number): number {
  for (let i = 1; i < BREAKS.length; i++) {
    const [y0, p0] = BREAKS[i - 1];
    const [y1, p1] = BREAKS[i];
    if (year <= y1) return p0 + ((year - y0) / (y1 - y0)) * (p1 - p0);
  }
  return BREAKS[BREAKS.length - 1][1];
}

/** Stops of the same stone in the same year are nudged apart so each one stays reachable. */
function layout(stone: Stone) {
  const MIN_GAP = 2.6;
  let last = -Infinity;
  return stone.journey.map((stop) => {
    const x = Math.max(position(stop.date.year), last + MIN_GAP);
    last = x;
    return { stop, x };
  });
}

interface Active {
  stone: Stone;
  stop: StoneStopInput;
}

const Readout = ({ active }: { active: Active | null }) => (
  <div aria-live="polite" className="min-h-[3.5rem] text-sm">
    {active ? (
      <>
        <p className="font-bold text-ink">
          {formatDate(active.stop.date)} · {active.stop.holder}
          <span className="ml-2 font-normal text-ink-faint">{active.stone.name} · {getLocation(active.stop.location)?.name}</span>
        </p>
        <p className="text-ink-muted">{active.stop.note}</p>
      </>
    ) : (
      <p className="text-ink-faint">Point at any mark to see who held the stone and where. Open a stone for its full journey.</p>
    )}
  </div>
);

/** One row per stone, so identity comes from the row and its label, not from color alone. */
export function StonesTimeline() {
  const [active, setActive] = useState<Active | null>(null);

  return (
    <figure className="rounded-3xl border border-line bg-surface p-5 sm:p-7">
      <figcaption>
        <h2 className="text-xl font-bold text-ink">Six stones through time</h2>
        <p className="mt-1 text-sm text-ink-faint">Each mark is a change of hands or hiding place. Time before 1900 is compressed.</p>
      </figcaption>

      <div className="mt-4"><Readout active={active} /></div>

      <div className="no-scrollbar mt-2 overflow-x-auto">
        <div className="relative min-w-[44rem]" onMouseLeave={() => setActive(null)}>
          {/* Recessive vertical gridlines, shared by all rows. */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-24 right-0">
            {TICKS.map((t) => (
              <span key={t.year} className="absolute inset-y-0 w-px bg-line/60" style={{ left: `${position(t.year)}%` }} />
            ))}
          </div>

          <ol>
            {stoneList.map((stone) => {
              const marks = layout(stone);
              const first = marks[0].x;
              const last = marks[marks.length - 1].x;
              return (
                <li key={stone.id} className="flex h-11 items-center">
                  <span className="flex w-24 shrink-0 items-center gap-2 text-sm font-semibold text-ink-muted">
                    <span className="size-2.5 rotate-45 rounded-[2px]" style={{ backgroundColor: stone.color }} />
                    {stone.name.replace(' Stone', '')}
                  </span>
                  <div className="relative h-full flex-1">
                    <span className="absolute top-1/2 h-0.5 -translate-y-1/2 rounded-full" style={{ left: `${first}%`, width: `${last - first}%`, backgroundColor: stone.color, opacity: 0.55 }} />
                    {marks.map(({ stop, x }, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => openPanel(currentRoute(), { kind: 'stone', id: stone.id })}
                        onMouseEnter={() => setActive({ stone, stop })}
                        onFocus={() => setActive({ stone, stop })}
                        onBlur={() => setActive(null)}
                        aria-label={`${stone.name}, ${formatDate(stop.date)}: ${stop.holder}. ${stop.note}`}
                        className="group absolute top-1/2 grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
                        style={{ left: `${x}%` }}
                      >
                        <span
                          className="size-2.5 rotate-45 rounded-[2px] transition group-hover:scale-150 group-focus-visible:scale-150"
                          style={{ backgroundColor: stone.color, boxShadow: '0 0 0 2px var(--color-surface)' }}
                        />
                      </button>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>

          <div aria-hidden className="relative ml-24 h-6 border-t border-line">
            {TICKS.map((t) => (
              <span key={t.year} className="absolute top-1.5 -translate-x-1/2 text-[11px] tabular-nums text-ink-faint" style={{ left: `${position(t.year)}%` }}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
