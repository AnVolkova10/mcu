import React from 'react';
import { useStore } from '@/store/useStore';
import { Navbar } from '@/components/Navbar';
import { TimelineScreen } from '@/screens/TimelineScreen';
import { MediaScreen } from '@/screens/MediaScreen';
import { CharactersScreen } from '@/screens/CharactersScreen';
import { StonesScreen } from '@/screens/StonesScreen';
import { BookmarksScreen } from '@/screens/BookmarksScreen';
import { StatsScreen } from '@/screens/StatsScreen';
import { MapScreen } from '@/screens/MapScreen';
import { CharacterDrawer } from '@/components/CharacterDrawer';
import { StoneDrawer } from '@/components/StoneDrawer';
import { MediaDetailModal } from '@/components/MediaDetailModal';
import { SearchModal } from '@/components/SearchModal';
import marvelLogo from '@/assets/marvel-logo.svg';

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
      <main className="flex-1 pb-16">
        {renderActiveScreen()}
      </main>

      {/* Global Modals & Drawers */}
      <CharacterDrawer />
      <StoneDrawer />
      <MediaDetailModal />
      <SearchModal />

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] bg-[#000000] py-8 px-4 text-xs text-zinc-500 font-din">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={marvelLogo} alt="MARVEL" className="h-6 w-auto object-contain" />
              <span className="text-zinc-300 font-bold font-title tracking-wider">MCU TIMELINE ARCHIVE</span>
            </div>

            <p className="text-zinc-400 text-[11px] text-center sm:text-left">
              Official interactive timeline and cinematic multiverse database.
            </p>

            <div className="flex items-center gap-4 text-zinc-400 text-xs font-title tracking-wider">
              <button 
                onClick={() => setActiveScreen('timeline')}
                className="hover:text-[#e62429] transition-colors uppercase cursor-pointer"
              >
                TIMELINE
              </button>
              <button 
                onClick={() => setActiveScreen('stones')}
                className="hover:text-amber-400 transition-colors uppercase cursor-pointer"
              >
                STONES
              </button>
              <button 
                onClick={() => setActiveScreen('stats')}
                className="hover:text-[#e62429] transition-colors uppercase cursor-pointer"
              >
                S.H.I.E.L.D.
              </button>
            </div>
          </div>

          {/* Subtle Credits & Signature */}
          <div className="pt-4 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-din gap-2">
            <p className="text-center sm:text-left">
              Based on the original timeline compilation by{' '}
              <a
                href="https://aaronperris.com/mcu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 font-medium hover:text-[#e62429] underline decoration-zinc-700 hover:decoration-[#e62429] transition-all underline-offset-2"
              >
                Aaron Perris
              </a>{' '}
              · Expanded, mapped & engineered by{' '}
              <span className="text-zinc-200 font-semibold">Ángela Curzi</span> (2026)
            </p>
            <span className="text-zinc-600 text-[10px] tracking-wider uppercase font-title">
              MCU & Multiverse Archive © 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
