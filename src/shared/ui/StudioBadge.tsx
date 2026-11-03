import { alpha } from '@/domain/colors';
import type { Studio } from '@/domain/catalog';
import { cn } from '@/shared/lib/cn';

interface StudioBadgeProps {
  studio: Studio;
  /** Tighter, for narrow places such as a poster. */
  compact?: boolean;
}

/** The studio a production comes from, in its color, as on Aaron Perris's list. */
export function StudioBadge({ studio, compact = false }: StudioBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-full py-0.5 font-bold uppercase',
        compact ? 'px-1.5 text-[10px] tracking-normal' : 'px-2 text-[11px] tracking-wider',
      )}
      style={{ color: studio.color, backgroundColor: alpha(studio.color, 0.12), boxShadow: `inset 0 0 0 1px ${alpha(studio.color, 0.35)}` }}
    >
      {studio.label}
    </span>
  );
}
