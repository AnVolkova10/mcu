import { lazy, Suspense, useEffect, useState } from 'react';
import { TimelinePage } from '@/features/timeline/TimelinePage';
import { PanelHost } from '@/features/archive/panels';
import { CommandPalette } from '@/features/search/CommandPalette';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { Footer } from './Footer';
import { Header } from './Header';
import { consumeForwardPageChange, useRoute, type PageId } from './router';

const ProductionsPage = lazy(() => import('@/features/productions/ProductionsPage').then((m) => ({ default: m.ProductionsPage })));
const CharactersPage = lazy(() => import('@/features/characters/CharactersPage').then((m) => ({ default: m.CharactersPage })));
const StonesPage = lazy(() => import('@/features/stones/StonesPage').then((m) => ({ default: m.StonesPage })));
const ObjectsPage = lazy(() => import('@/features/objects/ObjectsPage').then((m) => ({ default: m.ObjectsPage })));
const SavedPage = lazy(() => import('@/features/library/SavedPage').then((m) => ({ default: m.SavedPage })));
const ArchivePage = lazy(() => import('@/features/archive/ArchivePage').then((m) => ({ default: m.ArchivePage })));
const MapPage = lazy(() => import('@/features/map/MapPage').then((m) => ({ default: m.MapPage })));

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
    case 'objects':
      return <ObjectsPage />;
    case 'archive':
      return <ArchivePage />;
    case 'map':
      return <MapPage />;
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
      <main className={page === 'map' ? 'flex-1' : 'flex-1 pb-24'}>
        <ErrorBoundary key={page}>
          <Suspense fallback={<div className="py-32 text-center text-sm text-ink-faint">Loading…</div>}>
            <Page page={page} />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer page={page} />
      <PanelHost />
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
