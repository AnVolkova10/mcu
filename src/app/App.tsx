import { lazy, Suspense, useEffect, useState } from 'react';
import { TimelinePage } from '@/features/timeline/TimelinePage';
import { PanelHost } from '@/features/archive/panels';
import { CommandPalette } from '@/features/search/CommandPalette';
import { Header } from './Header';
import { ComingSoon } from './ComingSoon';
import { useRoute, type PageId } from './router';

const SavedPage = lazy(() => import('@/features/library/SavedPage').then((m) => ({ default: m.SavedPage })));

function Page({ page }: { page: PageId }) {
  switch (page) {
    case 'timeline':
      return <TimelinePage />;
    case 'saved':
      return <SavedPage />;
    case 'productions':
      return <ComingSoon title="Movies & Series" block={2} description="A poster wall of every production, grouped by reality, with audit status and timeline coverage." />;
    case 'characters':
      return <ComingSoon title="Characters" block={2} description="Searchable dossiers with factions, realities and each character's journey through time." />;
    case 'stones':
      return <ComingSoon title="Infinity Stones" block={2} description="The six stones and their single, unified journey. Their panels already work from any event." />;
    case 'archive':
      return <ComingSoon title="Archive" block={2} description="Reading progress, audit coverage and the numbers behind the chronology." />;
    case 'map':
      return <ComingSoon title="The Map" block={3} description="Three linked views: a 3D globe of Earth, a navigable Cosmos of realms and dimensions, and the Multiverse of realities and branches." />;
  }
}

export function App() {
  const { page } = useRoute();
  const [searchOpen, setSearchOpen] = useState(false);

  // A new page starts at the top; returning with the back button keeps the browser's restored position.
  useEffect(() => {
    if (window.history.state?.overlay) return;
    const onPush = () => window.scrollTo({ top: 0 });
    window.addEventListener('archive:navigate', onPush);
    return () => window.removeEventListener('archive:navigate', onPush);
  }, []);

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
        {' '}· Expanded and maintained by Ángela Curzi · A fan project, not affiliated with Marvel or Disney.
      </footer>
      <PanelHost />
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
