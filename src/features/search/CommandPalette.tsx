import { useEffect, useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { Clapperboard, Clock, Gem, MapPin, Search, UserRound } from 'lucide-react';
import { archive } from '@/content';
import { searchArchive, type SearchHit } from '@/domain/search';
import { currentRoute, eventHref, navigate, openPanel } from '@/app/router';

const groups: { kind: SearchHit['kind']; label: string; icon: React.ReactNode }[] = [
  { kind: 'character', label: 'Characters', icon: <UserRound className="size-4" /> },
  { kind: 'event', label: 'Events', icon: <Clock className="size-4" /> },
  { kind: 'production', label: 'Movies & series', icon: <Clapperboard className="size-4" /> },
  { kind: 'stone', label: 'Infinity Stones', icon: <Gem className="size-4" /> },
  { kind: 'location', label: 'Places', icon: <MapPin className="size-4" /> },
];

/** ⌘K / Ctrl+K search across the whole archive. */
export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState('');
  const hits = useMemo(() => searchArchive(archive, query), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onOpenChange]);

  const select = (hit: SearchHit) => {
    onOpenChange(false);
    setQuery('');
    if (hit.kind === 'event') navigate(eventHref(hit.id));
    else openPanel(currentRoute(), { kind: hit.kind, id: hit.id });
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fade-in" />
        <Dialog.Content aria-describedby={undefined} className="fixed left-1/2 top-[12vh] z-50 w-[min(42rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl animate-rise-in">
          <Dialog.Title className="sr-only">Search the archive</Dialog.Title>
          <Command shouldFilter={false} loop>
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="size-5 text-accent" />
              <Command.Input value={query} onValueChange={setQuery} placeholder="Search characters, events, movies, places…" className="h-14 flex-1 bg-transparent text-base text-ink placeholder:text-ink-faint focus:outline-none" />
              <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-ink-faint">ESC</kbd>
            </div>
            <Command.List className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim().length < 2 ? (
                <p className="px-3 py-8 text-center text-sm text-ink-faint">Try “Tesseract”, “Storm”, “Wakanda” or “1945”.</p>
              ) : (
                <Command.Empty className="px-3 py-8 text-center text-sm text-ink-faint">Nothing found in this universe.</Command.Empty>
              )}
              {groups.map((g) => {
                const items = hits.filter((h) => h.kind === g.kind);
                if (!items.length) return null;
                return (
                  <Command.Group key={g.kind} heading={g.label} className="mb-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-ink-faint">
                    {items.map((hit) => (
                      <Command.Item
                        key={`${hit.kind}:${hit.id}`}
                        value={`${hit.kind}:${hit.id}`}
                        onSelect={() => select(hit)}
                        className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink-muted data-[selected=true]:bg-surface-3 data-[selected=true]:text-ink"
                      >
                        <span className="text-ink-faint" style={'color' in hit ? { color: hit.color } : undefined}>{g.icon}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-semibold text-ink">{hit.title}</span>
                          <span className="block truncate text-xs text-ink-faint">{hit.subtitle}</span>
                        </span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                );
              })}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
