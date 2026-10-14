import React, { Suspense } from 'react';
import { useStore } from '@/store/useStore';
import { Navbar } from '@/components/Navbar';
import { CharacterDrawer } from '@/components/CharacterDrawer';
import { StoneDrawer } from '@/components/StoneDrawer';
import { MediaDetailModal } from '@/components/MediaDetailModal';
import { SearchModal } from '@/components/SearchModal';
import { useHashRouter } from '@/hooks/useHashRouter';
import marvelLogo from '@/assets/marvel-logo.svg';

// Code-split screens to optimize initial bundle and isolate Leaflet
const TimelineScreen = React.lazy(() => import('@/screens/TimelineScreen').then((m) => ({ default: m.TimelineScreen })));
const MediaScreen = React.lazy(() => import('@/screens/MediaScreen').then((m) => ({ default: m.MediaScreen })));
const CharactersScreen = React.lazy(() => import('@/screens/CharactersScreen').then((m) => ({ default: m.CharactersScreen })));
const StonesScreen = React.lazy(() => import('@/screens/StonesScreen').then((m) => ({ default: m.StonesScreen })));
const MapScreen = React.lazy(() => import('@/screens/MapScreen').then((m) => ({ default: m.MapScreen })));
const BookmarksScreen = React.lazy(() => import('@/screens/BookmarksScreen').then((m) => ({ default: m.BookmarksScreen })));
const StatsScreen = React.lazy(() => import('@/screens/StatsScreen').then((m) => ({ default: m.StatsScreen })));

const ScreenLoadingFallback: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 py-20 font-din">
    <div className="relative">
      <div className="w-10 h-10 border-2 border-[#e62429]/20 border-t-[#e62429] rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#e62429] rounded-full animate-ping" />
      </div>
    </div>
    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest animate-pulse">
      Loading Multiverse Archive...
    </span>
  </div>
);

export const App: React.FC = () => {
  useHashRouter();
  const { activeScreen, setActiveScreen } = useStore();

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'timeline':
        return <TimelineScreen />;
      case 'media':
        return <MediaScreen />;
      case 'characters':
        return <CharactersScreen />;
      case 'stones':
        return <StonesScreen />;
      case 'map':
        return <MapScreen />;
      case 'bookmarks':
        return <BookmarksScreen />;
      case 'stats':
        return <StatsScreen />;
      default:
        return <TimelineScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-100 flex flex-col font-sans selection:bg-[#e62429] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col ${activeScreen === 'stones' ? 'lg:h-[calc(100dvh-5.5rem)] pb-11 overflow-y-auto lg:overflow-hidden' : 'pb-20'}`}>
        <Suspense fallback={<ScreenLoadingFallback />}>
          {renderActiveScreen()}
        </Suspense>
      </main>

      {/* Global Modals & Drawers */}
      <CharacterDrawer />
      <StoneDrawer />
      <MediaDetailModal />
      <SearchModal />

      {/* Slim Always-Present Tactical Footer (2/3 smaller, fixed bottom) */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#1f1f1f] bg-[#000000]/95 backdrop-blur-md py-2 px-4 text-xs text-zinc-400 font-din shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 shrink-0">
            <img src={marvelLogo} alt="MARVEL" className="h-4.5 w-auto object-contain" />
            <span className="text-zinc-300 font-bold font-title tracking-wider text-[11px] hidden sm:inline">
              MCU ARCHIVE
            </span>
          </div>

          <p className="text-[11px] text-zinc-400 text-center truncate px-2">
            Compilation by{' '}
            <a
              href="https://aaronperris.com/mcu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 font-medium hover:text-[#e62429] underline decoration-zinc-700 hover:decoration-[#e62429] transition-all"
            >
              Aaron Perris
            </a>{' '}
            · Expanded & engineered by{' '}
            <span className="text-zinc-200 font-semibold">Ángela Curzi</span> (2026)
          </p>

          <div className="flex items-center gap-3 text-zinc-400 text-[11px] font-title tracking-wider shrink-0">
            <a 
              href="#/timeline"
              onClick={(e) => {
                if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                window.location.hash = '#/timeline';
                setActiveScreen('timeline');
              }}
              className="hover:text-[#e62429] transition-colors uppercase cursor-pointer"
              title="Master Timeline (Middle-click to open in new tab)"
            >
              TIMELINE
            </a>
            <a 
              href="#/stones"
              onClick={(e) => {
                if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                window.location.hash = '#/stones';
                setActiveScreen('stones');
              }}
              className="hover:text-amber-400 transition-colors uppercase cursor-pointer"
              title="Infinity Stones (Middle-click to open in new tab)"
            >
              STONES
            </a>
            <a 
              href="#/stats"
              onClick={(e) => {
                if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                window.location.hash = '#/stats';
                setActiveScreen('stats');
              }}
              className="hover:text-[#e62429] transition-colors uppercase cursor-pointer"
              title="S.H.I.E.L.D. Stats (Middle-click to open in new tab)"
            >
              S.H.I.E.L.D.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
