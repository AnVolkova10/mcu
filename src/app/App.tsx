import { lazy, Suspense, useEffect, useState } from 'react';
import { TimelinePage } from '@/features/timeline/TimelinePage';
import { PanelHost } from '@/features/archive/panels';
import { CommandPalette } from '@/features/search/CommandPalette';
import { Header } from './Header';
import { ComingSoon } from './ComingSoon';
import { consumeForwardPageChange, useRoute, type PageId } from './router';

const ProductionsPage = lazy(() => import('@/features/productions/ProductionsPage').then((m) => ({ default: m.ProductionsPage })));
const CharactersPage = lazy(() => import('@/features/characters/CharactersPage').then((m) => ({ default: m.CharactersPage })));
const StonesPage = lazy(() => import('@/features/stones/StonesPage').then((m) => ({ default: m.StonesPage })));
const SavedPage = lazy(() => import('@/features/library/SavedPage').then((m) => ({ default: m.SavedPage })));
const ArchivePage = lazy(() => import('@/features/archive/ArchivePage').then((m) => ({ default: m.ArchivePage })));

function Page({ page }: { page: PageId }) {
  switch (page) {
    case 'timeline':
      return <TimelinePage />;
    case 'saved':
      return <SavedPage />;
    case 'productions':
      return <ProductionsPage />;
    case 'characters':
      return <CharactersPage />;
    case 'stones':
      return <StonesPage />;
    case 'archive':
      return <ArchivePage />;
    case 'map':
      return <ComingSoon title="The Map" block={3} description="Three linked views: a 3D globe of Earth, a navigable Cosmos of realms and dimensions, and the Multiverse of realities and branches." />;
  }
}

export function App() {
  const { page } = useRoute();
  const [searchOpen, setSearchOpen] = useState(false);

  // A new page starts at the top; back and forward keep the position the browser restores.
  useEffect(() => {
    if (consumeForwardPageChange()) window.scrollTo({ top: 0 });
  }, [page]);

  useEffect(() => {
    document.title = page === 'timeline' ? 'MCU Archive · The Marvel multiverse chronology' : `${page[0].toUpperCase()}${page.slice(1)} · MCU Archive`;
  }, [page]);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header page={page} onSearch={() => setSearchOpen(true)} />
      <main className="flex-1 pb-24">
        <Suspense fallback={<div className="py-32 text-center text-sm text-ink-faint">Loading…</div>}>
          <Page page={page} />
        </Suspense>
      </main>
      <footer className="border-t border-line px-6 py-8 text-center text-xs leading-6 text-ink-faint">
        Original timeline compiled by{' '}
        <a href="https://aaronperris.com/mcu/" target="_blank" rel="noopener noreferrer" className="text-ink-muted underline decoration-line-strong hover:text-ink">Aaron Perris</a>
        {' '}· Expanded and maintained by Ángela Curzi · Posters from TMDB · A fan project, not affiliated with Marvel or Disney.
      </footer>
      <PanelHost />
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
