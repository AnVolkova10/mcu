import { universeList } from '@/domain/catalog';
import { alpha, readableOn } from '@/domain/colors';
import type { UniverseId } from '@/domain/schema';
import { cn } from '@/shared/lib/cn';

interface UniverseTogglesProps {
  selected: readonly string[];
  onToggle: (id: UniverseId) => void;
  className?: string;
}

/** One toggle per reality, each with its identity color and name (never color alone). */
export function UniverseToggles({ selected, onToggle, className }: UniverseTogglesProps) {
  return (
    <div className={cn('no-scrollbar flex items-center gap-1.5 overflow-x-auto', className)} role="group" aria-label="Realities">
      {universeList.map((u) => {
        const on = selected.includes(u.id);
        return (
          <button
            key={u.id}
            type="button"
            onClick={() => onToggle(u.id)}
            aria-pressed={on}
            title={`${u.name} · ${u.label}`}
            className={cn('inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition', !on && 'border-line text-ink-muted hover:text-ink')}
            style={on ? { color: readableOn(u.color), borderColor: alpha(u.color, 0.6), backgroundColor: alpha(u.color, 0.12) } : undefined}
          >
            <span className="size-2 rounded-full" style={{ backgroundColor: u.color }} />
            {u.label}
          </button>
        );
      })}
    </div>
  );
}
