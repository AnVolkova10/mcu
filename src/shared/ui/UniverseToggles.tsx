import { universeList } from '@/domain/catalog';
import type { UniverseId } from '@/domain/schema';
import { cn } from '@/shared/lib/cn';
import { FilterButton } from '@/shared/ui/FilterButton';

interface UniverseTogglesProps {
  selected: readonly string[];
  onToggle: (id: UniverseId) => void;
  className?: string;
}

/** One toggle per reality, each with its identity color and name (never color alone). */
export function UniverseToggles({ selected, onToggle, className }: UniverseTogglesProps) {
  return (
    <div className={cn('no-scrollbar flex items-center gap-1.5 overflow-x-auto', className)} role="group" aria-label="Realities">
      {universeList.map((u) => (
        <FilterButton key={u.id} active={selected.includes(u.id)} color={u.color} title={`${u.name} · ${u.label}`} onClick={() => onToggle(u.id)}>
          {u.label}
        </FilterButton>
      ))}
    </div>
  );
}
