import { useState } from 'react';
import { archive } from '@/content';
import type { DateGroup } from '@/domain/archive';
import { href } from '@/app/router';
import { cn } from '@/shared/lib/cn';
import { PlaceCard } from '../SideCards';
import { HEIGHT, periodMarks, strands, WIDTH, xOf, type Bead, type Strand } from './strands';

interface MultiverseViewProps {
  group: DateGroup | null;
  universes: readonly string[];
  onPickDate: (group: DateGroup | null) => void;
}

interface Picked {
  strand: Strand;
  bead: Bead;
}

const beadRadius = (count: number) => 3 + Math.sqrt(count) * 1.5;

/** The Sacred Timeline and everything that splits from it, with time flowing left to right. */
export function MultiverseView({ group, universes, onPickDate }: MultiverseViewProps) {
  const [hovered, setHovered] = useState<Picked | null>(null);
  const [picked, setPicked] = useState<Picked | null>(null);
  const playhead = group ? xOf(archive.groups.indexOf(group)) : null;
  const dimmed = (s: Strand) => universes.length > 0 && !universes.includes(s.universe.id);

  return (
    <div className="absolute inset-0 overflow-x-auto overflow-y-hidden bg-[radial-gradient(ellipse_at_40%_45%,#10131f_0%,#030407_75%)]">
      <div className="relative mx-auto h-full min-w-[68rem]">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMidYMid meet" className="absolute inset-x-0 bottom-28 top-16 h-[calc(100%-11rem)] w-full" role="img" aria-label="Realities and branches of the multiverse across time">
          <defs>
            <filter id="strand-glow" x="-5%" y="-40%" width="110%" height="180%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <filter id="bead-glow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          {periodMarks.map((mark) => (
            <g key={mark.id}>
              <line x1={mark.x} x2={mark.x} y1={34} y2={HEIGHT - 14} stroke="#ffffff" strokeOpacity={0.06} />
              <text x={mark.x + 6} y={26} fill="#6c6c78" fontSize={13} fontWeight={700} letterSpacing={1.4}>{mark.label.toUpperCase()}</text>
            </g>
          ))}

          {strands.map((strand) => {
            const main = !strand.branch;
            const strong = strand.universe.id === 'earth-616' && main;
            const color = strand.universe.color;
            return (
              <g key={strand.id} className="transition-opacity duration-300" opacity={dimmed(strand) ? 0.12 : 1}>
                <path d={strand.path} fill="none" stroke={color} strokeWidth={strong ? 15 : 10} strokeOpacity={0.4} filter="url(#strand-glow)" />
                <path d={strand.path} fill="none" stroke={color} strokeWidth={strong ? 3.4 : main ? 2.4 : 1.8} strokeLinecap="round" pathLength={1} className="[animation:strand-draw_1.8s_ease-out_both] [stroke-dasharray:1]" />
                <path d={strand.path} fill="none" stroke="#ffffff" strokeOpacity={0.75} strokeWidth={1.3} strokeLinecap="round" strokeDasharray="2 58" className="[animation:strand-flow_7s_linear_infinite]" />
                {main ? (
                  <a href={href('timeline', { u: strand.universe.id })}>
                    <text x={18} y={strand.beads[0].y - 12} fill="#ececf0" fontSize={15} fontWeight={700}>{strand.universe.name}</text>
                    <text x={18} y={strand.beads[0].y + 6} fill={color} fontSize={13} fontWeight={600}>{strand.universe.label}</text>
                  </a>
                ) : (
                  <text x={Math.min(strand.end.x, WIDTH - 12)} y={strand.end.y - 12} textAnchor="end" fill={color} fontSize={12} fontWeight={600}>{strand.label}</text>
                )}
              </g>
            );
          })}

          {playhead !== null && (
            <g>
              <line x1={playhead} x2={playhead} y1={34} y2={HEIGHT - 14} stroke="var(--color-accent-strong)" strokeWidth={1.5} />
              <circle cx={playhead} cy={34} r={4} fill="var(--color-accent-strong)" />
            </g>
          )}

          {strands.map((strand) => (
            <g key={strand.id} opacity={dimmed(strand) ? 0.12 : 1}>
              {strand.beads.map((bead) => {
                const active = group ? bead.group === group : true;
                const r = beadRadius(bead.events.length);
                return (
                  <g
                    key={bead.group.key}
                    className="cursor-pointer"
                    opacity={active ? 1 : 0.28}
                    onMouseEnter={() => setHovered({ strand, bead })}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => { setPicked({ strand, bead }); onPickDate(bead.group); }}
                  >
                    <circle cx={bead.x} cy={bead.y} r={r + 3.5} fill={strand.universe.color} opacity={0.65} filter="url(#bead-glow)" />
                    <circle cx={bead.x} cy={bead.y} r={r} fill={strand.universe.color} stroke="#ffffff" strokeWidth={0.8} />
                    <circle cx={bead.x} cy={bead.y} r={14} fill="transparent" />
                  </g>
                );
              })}
            </g>
          ))}
        </svg>

        {hovered && (
          <div
            className="pointer-events-none absolute z-10 w-72 -translate-x-1/2 rounded-xl border border-line-strong bg-surface/95 p-3 shadow-2xl backdrop-blur"
            style={{ left: `${(hovered.bead.x / WIDTH) * 100}%`, top: '4.6rem' }}
          >
            <p className="text-xs font-bold text-ink">{hovered.bead.group.label} · {hovered.strand.branch?.name ?? hovered.strand.universe.name}</p>
            <ul className="mt-1 space-y-0.5 text-xs text-ink-muted">
              {hovered.bead.events.slice(0, 4).map((e) => <li key={e.id} className="truncate">{e.title}</li>)}
              {hovered.bead.events.length > 4 && <li className="text-ink-faint">+{hovered.bead.events.length - 4} more</li>}
            </ul>
          </div>
        )}
      </div>

      {picked && (
        <div className={cn('pointer-events-none fixed bottom-28 right-3 top-[8.8rem] z-20 flex w-[calc(100%-1.5rem)] max-w-sm flex-col lg:top-[6.2rem]')}>
          <PlaceCard
            kicker={picked.strand.branch ? `Branch of ${picked.strand.universe.name}` : picked.strand.universe.name}
            title={picked.bead.group.label}
            subtitle={picked.strand.branch?.name ?? picked.strand.universe.label}
            description={picked.strand.branch?.description}
            color={picked.strand.universe.color}
            events={picked.bead.events}
            onClose={() => setPicked(null)}
          />
        </div>
      )}
    </div>
  );
}
