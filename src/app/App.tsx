import React from 'react';
import { useStore } from '@/store/useStore';
import { Navbar } from '@/components/Navbar';
import { TimelineScreen } from '@/screens/TimelineScreen';
import { MediaScreen } from '@/screens/MediaScreen';
import { CharactersScreen } from '@/screens/CharactersScreen';
import { StonesScreen } from '@/screens/StonesScreen';
import { BookmarksScreen } from '@/screens/BookmarksScreen';
import { StatsScreen } from '@/screens/StatsScreen';
import { CharacterDrawer } from '@/components/CharacterDrawer';
import { StoneDrawer } from '@/components/StoneDrawer';
import { MediaDetailModal } from '@/components/MediaDetailModal';
import { SearchModal } from '@/components/SearchModal';
import { Shield, Sparkles, Heart } from 'lucide-react';

export const App: React.FC = () => {
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
      case 'bookmarks':
        return <BookmarksScreen />;
      case 'stats':
        return <StatsScreen />;
      default:
        return <TimelineScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {renderActiveScreen()}
      </main>

      {/* Global Modals & Drawers */}
      <CharacterDrawer />
      <StoneDrawer />
      <MediaDetailModal />
      <SearchModal />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white font-black px-2 py-0.5 rounded text-[10px] tracking-tight uppercase">
              MARVEL
            </span>
            <span className="text-slate-400 font-semibold">MCU Timeline & Archive Database</span>
          </div>

          <p className="text-slate-500 text-[11px]">
            Diseñado para amantes y exploradores del Universo Cinematográfico de Marvel.
          </p>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <button 
              onClick={() => setActiveScreen('timeline')}
              className="hover:text-red-400 transition-colors"
            >
              Cronología
            </button>
            <button 
              onClick={() => setActiveScreen('stones')}
              className="hover:text-amber-400 transition-colors"
            >
              Gemas
            </button>
            <button 
              onClick={() => setActiveScreen('stats')}
              className="hover:text-blue-400 transition-colors"
            >
              S.H.I.E.L.D.
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
