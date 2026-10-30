import { alpha } from '@/domain/colors';
import type { Branch, Universe } from '@/domain/catalog';

interface UniverseBadgeProps {
  universe: Universe;
  branch?: Branch;
}

/** "616 · Sacred Timeline" pill in the universe color; branches add their name. */
export function UniverseBadge({ universe, branch }: UniverseBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider"
      style={{ color: universe.color, backgroundColor: alpha(universe.color, 0.12), boxShadow: `inset 0 0 0 1px ${alpha(universe.color, 0.35)}` }}
      title={`${universe.name} · ${universe.label}${branch ? ` · ${branch.name}` : ''}`}
    >
      <span className="size-1.5 rounded-full" style={{ backgroundColor: universe.color }} />
      {universe.short}
      {branch && <span className="font-medium normal-case tracking-normal opacity-80">· {branch.name}</span>}
    </span>
  );
}
