import { Search } from 'lucide-react';
import marvelLogo from '@/assets/marvel-logo.svg';
import { archive } from '@/content';
import { useLibrary } from '@/features/library/store';
import { cn } from '@/shared/lib/cn';
import { href, type PageId } from './router';

const nav: { page: PageId; label: string }[] = [
  { page: 'timeline', label: 'Timeline' },
  { page: 'productions', label: 'Movies & Series' },
  { page: 'characters', label: 'Characters' },
  { page: 'stones', label: 'Stones' },
  { page: 'objects', label: 'Objects' },
  { page: 'map', label: 'Map' },
  { page: 'saved', label: 'Saved' },
  { page: 'archive', label: 'Archive' },
];

export function Header({ page, onSearch }: { page: PageId; onSearch: () => void }) {
  const savedCount = useLibrary((s) => s.saved.length);
  const readCount = useLibrary((s) => s.read.length);
  const progress = Math.round((readCount / archive.events.length) * 100);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 sm:px-6">
        <a href={href('timeline')} className="flex shrink-0 items-center gap-3" aria-label="MCU Archive home">
          <img src={marvelLogo} alt="" className="h-7 w-auto" />
          <span className="font-display text-2xl tracking-[0.18em] text-ink">Archive</span>
        </a>
        <nav aria-label="Main" className="no-scrollbar hidden flex-1 items-center overflow-x-auto lg:flex xl:gap-1">
          {nav.map((item) => (
            <NavLink key={item.page} item={item} active={page === item.page} badge={item.page === 'saved' ? savedCount : 0} />
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={onSearch}
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-sm text-ink-muted transition hover:border-line-strong hover:text-ink"
          >
            <Search className="size-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden rounded border border-line px-1.5 text-[10px] text-ink-faint xl:inline">Ctrl K</kbd>
          </button>
          <a
            href={href('archive')}
            className="hidden items-center gap-2 rounded-full border border-line px-3 py-2 text-xs font-semibold text-ink-muted transition hover:border-line-strong hover:text-ink sm:flex"
            title={`${readCount} of ${archive.events.length} events read`}
          >
            <span className="relative size-4 rounded-full" style={{ background: `conic-gradient(var(--color-accent) ${progress * 3.6}deg, var(--color-line-strong) 0)` }}>
              <span className="absolute inset-[3px] rounded-full bg-bg" />
            </span>
            {progress}%
          </a>
        </div>
      </div>
      <nav aria-label="Main" className="no-scrollbar flex gap-1 overflow-x-auto px-3 pb-2 lg:hidden">
        {nav.map((item) => (
          <NavLink key={item.page} item={item} active={page === item.page} badge={item.page === 'saved' ? savedCount : 0} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ item, active, badge }: { item: { page: PageId; label: string }; active: boolean; badge: number }) {
  return (
    <a
      href={href(item.page)}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'relative shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold transition lg:px-2 xl:px-3',
        active ? 'bg-ink text-bg' : 'text-ink-muted hover:bg-surface-2 hover:text-ink',
      )}
    >
      {item.label}
      {badge > 0 && <span className="ml-1.5 rounded-full bg-accent px-1.5 text-[10px] font-bold text-white">{badge}</span>}
    </a>
  );
}
