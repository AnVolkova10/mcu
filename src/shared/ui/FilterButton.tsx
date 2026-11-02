import type { ReactNode } from 'react';
import { alpha, readableOn } from '@/domain/colors';
import { cn } from '@/shared/lib/cn';

interface FilterButtonProps {
  children: ReactNode;
  onClick: () => void;
  /** Leave it out when the button opens something instead of switching a filter. */
  active?: boolean;
  /** Identity color: a dot before the label, and the tint while active. */
  color?: string;
  title?: string;
}

/** Control of a filter bar, the same on every page. For a label, use `Chip`. */
export function FilterButton({ children, onClick, active, color, title }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={active}
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition',
        !active && 'border-line text-ink-muted hover:border-line-strong hover:text-ink',
        active && !color && 'border-ink/60 bg-ink/12 text-ink',
      )}
      style={active && color ? { color: readableOn(color), borderColor: alpha(color, 0.6), backgroundColor: alpha(color, 0.12) } : undefined}
    >
      {color && <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />}
      {children}
    </button>
  );
}
