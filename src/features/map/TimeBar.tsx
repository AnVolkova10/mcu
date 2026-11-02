import { useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { archive } from '@/content';
import { inView } from '@/domain/atlas';
import type { DateGroup } from '@/domain/archive';
import { periods } from '@/domain/dates';
import { cn } from '@/shared/lib/cn';

const STEP_MS = 1500;
const { groups } = archive;

interface TimeBarProps {
  group: DateGroup | null;
  universes: readonly string[];
  onChange: (group: DateGroup | null) => void;
}

/** Shared time control of the three map views. The scale is one slot per date, so busy years get room. */
export function TimeBar({ group, universes, onChange }: TimeBarProps) {
  const [playing, setPlaying] = useState(false);
  const index = group ? groups.indexOf(group) : -1;
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      const next = indexRef.current + 1;
      if (next >= groups.length) {
        setPlaying(false);
        return;
      }
      onChange(groups[next]);
    }, STEP_MS);
    return () => clearInterval(timer);
  }, [playing, onChange]);

  const counts = useMemo(
    () => groups.map((g) => g.events.filter((e) => inView(e, { group: null, universes })).length),
    [universes],
  );
  const peak = Math.max(...counts, 1);

  const togglePlay = () => {
    if (!playing && (index < 0 || index === groups.length - 1)) onChange(groups[0]);
    setPlaying((p) => !p);
  };

  const periodStarts = useMemo(
    () => periods.flatMap((p) => {
      const first = groups.findIndex((g) => g.period.id === p.id);
      return first >= 0 ? [{ ...p, first }] : [];
    }),
    [],
  );

  return (
    <div className="pointer-events-auto rounded-2xl border border-line bg-bg/80 p-3 shadow-2xl backdrop-blur-xl sm:px-4">
      <div className="flex items-end gap-3 sm:gap-4">
        <button
          type="button"
          onClick={togglePlay}
          className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-white transition hover:bg-accent-strong"
          aria-label={playing ? 'Pause journey through time' : 'Play through time'}
          title={playing ? 'Pause' : 'Travel through time'}
        >
          {playing ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current" />}
        </button>

        <button
          type="button"
          onClick={() => { setPlaying(false); onChange(null); }}
          className="min-w-[5.5rem] shrink-0 text-left sm:min-w-[7.5rem]"
          title="Show all of history"
        >
          <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">{group ? 'Date' : 'Showing'}</span>
          <span className="block truncate font-display text-3xl leading-none text-ink sm:text-4xl">{group ? group.label : 'All time'}</span>
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex h-7 items-end gap-px" aria-hidden>
            {counts.map((count, i) => (
              <span
                key={groups[i].key}
                className={cn('min-w-px flex-1 rounded-t-sm transition-colors', i === index ? 'bg-accent-strong' : count ? 'bg-line-strong' : 'bg-line/50')}
                style={{ height: `${Math.max(8, (count / peak) * 100)}%` }}
              />
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={groups.length - 1}
            value={Math.max(index, 0)}
            onChange={(e) => { setPlaying(false); onChange(groups[Number(e.target.value)]); }}
            aria-label="Date"
            aria-valuetext={group?.label ?? 'All time'}
            className="block h-3 w-full cursor-pointer accent-[var(--color-accent)]"
          />
          <div className="relative mt-0.5 hidden h-4 sm:block">
            {periodStarts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => { setPlaying(false); onChange(groups[p.first]); }}
                title={p.range}
                className="absolute truncate text-[10px] font-semibold text-ink-faint transition hover:text-ink"
                style={{ left: `${(p.first / (groups.length - 1)) * 100}%` }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
