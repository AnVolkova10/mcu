import { useId, useMemo, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { normalize } from '@/domain/archive';
import { cn } from '@/shared/lib/cn';

export interface SelectItem {
  id: string;
  label: string;
  hint?: string;
  color?: string;
}

interface SearchSelectProps {
  label: string;
  placeholder: string;
  items: readonly SelectItem[];
  value?: string;
  onChange: (id: string | undefined) => void;
}

/** Dropdown with a filter box, for long lists (characters, factions, productions). */
export function SearchSelect({ label, placeholder, items, value, onChange }: SearchSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const listId = useId();
  const selected = items.find((i) => i.id === value);
  const visible = useMemo(() => {
    const q = normalize(query.trim());
    const list = q ? items.filter((i) => normalize(`${i.label} ${i.hint ?? ''}`).includes(q)) : items;
    return list.slice(0, 60);
  }, [items, query]);

  const pick = (id: string | undefined) => {
    onChange(id);
    setOpen(false);
    setQuery('');
  };

  return (
    <div className="relative">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">{label}</span>
      <div className="flex items-center rounded-xl border border-line bg-surface-2 focus-within:border-line-strong">
        {selected?.color && <span className="ml-3 size-2.5 shrink-0 rounded-full" style={{ backgroundColor: selected.color }} />}
        <input
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          value={open ? query : (selected?.label ?? '')}
          placeholder={placeholder}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && visible[0]) pick(visible[0].id);
            if (e.key === 'Escape') setOpen(false);
          }}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
        />
        {value ? (
          <button type="button" onClick={() => pick(undefined)} className="p-2.5 text-ink-faint hover:text-ink" aria-label={`Clear ${label}`}>
            <X className="size-4" />
          </button>
        ) : (
          <ChevronDown className="mr-3 size-4 text-ink-faint" />
        )}
      </div>
      {open && (
        <ul id={listId} role="listbox" className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto rounded-xl border border-line-strong bg-surface-2 p-1 shadow-2xl animate-fade-in">
          {visible.length === 0 && <li className="px-3 py-2 text-sm text-ink-faint">No matches</li>}
          {visible.map((item) => (
            <li key={item.id} role="option" aria-selected={item.id === value}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(item.id)}
                className={cn('flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm hover:bg-surface-3', item.id === value ? 'text-ink' : 'text-ink-muted')}
              >
                {item.color && <span className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />}
                <span className="truncate">{item.label}</span>
                {item.hint && <span className="ml-auto shrink-0 text-xs text-ink-faint">{item.hint}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
