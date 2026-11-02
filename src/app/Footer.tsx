import tmdbLogo from '@/assets/tmdb-logo.svg';
import { cn } from '@/shared/lib/cn';
import type { PageId } from './router';

/** One line, always in view. The full credits and the TMDB notice live on the Archive page. */
export function Footer({ page }: { page: PageId }) {
  return (
    <footer id="site-footer" className={cn('fixed inset-x-0 bottom-0 z-30 h-footer border-t border-line bg-bg/90 text-[11px] text-ink-faint backdrop-blur-xl', page === 'map' && 'max-sm:hidden')}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <p className="min-w-0 truncate">
          <span className="max-sm:hidden">Original timeline by </span>
          <a href="https://aaronperris.com/mcu/" target="_blank" rel="noopener noreferrer" className="text-ink-muted underline decoration-line-strong underline-offset-2 hover:text-ink">Aaron Perris</a>
          <span className="sm:hidden"> · </span>
          <span className="max-sm:hidden"> · Expanded and maintained by </span>
          <span className="text-ink-muted">Ángela Curzi</span>
          <span className="max-lg:hidden"> · A fan project, not affiliated with Marvel or Disney</span>
        </p>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" aria-label="Posters and photos from TMDB" className="flex shrink-0 items-center gap-2 transition hover:text-ink">
          <span className="max-md:hidden">Posters and photos from</span>
          <img src={tmdbLogo} alt="" className="h-2 w-auto" />
        </a>
      </div>
    </footer>
  );
}
