import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/shared/lib/cn';

interface SearchBoxProps {
  value: string;
  /** Called after a short pause in typing. */
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  className?: string;
}

/** Text filter that keeps typing smooth and only commits the value after a short pause. */
export function SearchBox({ value, onChange, placeholder, label, className }: SearchBoxProps) {
  const [draft, setDraft] = useState(value);

  useEffect(() => setDraft(value), [value]);
  useEffect(() => {
    if (draft === value) return;
    const t = setTimeout(() => onChange(draft), 220);
    return () => clearTimeout(t);
  }, [draft, value, onChange]);

  return (
    <label className={cn('flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-line bg-surface-2 px-3 focus-within:border-line-strong', className)}>
      <Search className="size-4 shrink-0 text-ink-faint" />
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
      />
      {draft && (
        <button type="button" onClick={() => setDraft('')} className="text-ink-faint hover:text-ink" aria-label="Clear search">
          <X className="size-4" />
        </button>
      )}
    </label>
  );
}
