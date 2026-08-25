import React from 'react';
import { useStore } from '@/store/useStore';
import { ActiveScreen } from '@/types';
import { 
  Clock, 
  Film, 
  Users, 
  Sparkles, 
  Bookmark, 
  BarChart2, 
  Search,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import marvelLogo from '@/assets/marvel-logo.svg';

export const Navbar: React.FC = () => {
  const { 
    activeScreen, 
    setActiveScreen, 
    setIsSearchOpen, 
    bookmarkedEventIds,
    readEventIds
  } = useStore();

  const navItems: { id: ActiveScreen; label: string; icon: React.ReactNode }[] = [
    { id: 'timeline', label: 'TIMELINE', icon: <Clock className="w-3.5 h-3.5" /> },
    { id: 'media', label: 'MOVIES & SERIES', icon: <Film className="w-3.5 h-3.5" /> },
    { id: 'characters', label: 'CHARACTERS', icon: <Users className="w-3.5 h-3.5" /> },
    { id: 'stones', label: 'INFINITY STONES', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'map', label: 'MAP', icon: <Globe2 className="w-3.5 h-3.5" /> },
    { 
      id: 'bookmarks', 
      label: 'SAVED', 
      icon: (
        <div className="relative">
          <Bookmark className="w-3.5 h-3.5" />
          {bookmarkedEventIds.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#e62429] text-white text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center shadow">
              {bookmarkedEventIds.length}
            </span>
          )}
        </div>
      ) 
    },
    { id: 'stats', label: 'S.H.I.E.L.D.', icon: <BarChart2 className="w-3.5 h-3.5" /> }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#222222] shadow-2xl">
      
      {/* Upper Main Header (Marvel.com Style) */}
      <div className="border-b border-[#1c1c1c] py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Brand Badge */}
          <div 
            onClick={() => setActiveScreen('timeline')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e62429] shadow-sm shadow-[#e62429]" />
              <span className="text-white text-xs sm:text-sm font-black tracking-widest font-din uppercase group-hover:text-zinc-200 transition-colors">
                MCU ARCHIVE
              </span>
            </div>
            <span className="hidden md:inline text-[10px] uppercase tracking-widest text-zinc-500 font-bold border-l border-zinc-800 pl-3">
              Sacred Timeline
            </span>
          </div>

          {/* Center Official Marvel Logo */}
          <div 
            onClick={() => setActiveScreen('timeline')}
            className="cursor-pointer transition-transform duration-200 hover:scale-105 select-none"
          >
            <img 
              src={marvelLogo} 
              alt="MARVEL" 
              className="h-9 sm:h-11 w-auto object-contain block shadow-lg shadow-black/50" 
            />
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#161616] hover:bg-[#202020] text-zinc-300 hover:text-white border border-[#2e2e2e] hover:border-[#e62429] text-xs font-bold transition-all group font-din shadow-inner cursor-pointer"
              title="Search Archive (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#e62429] transition-colors" />
              <span className="hidden sm:inline uppercase text-[11px] tracking-wider font-bold">SEARCH</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] bg-[#0a0a0a] border border-[#333333] rounded text-zinc-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Read Progress Badge */}
            <button 
              onClick={() => setActiveScreen('stats')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#161616] hover:bg-[#202020] border border-[#2e2e2e] hover:border-[#e62429] text-[11px] text-zinc-300 transition-colors font-bold font-din cursor-pointer"
              title="View S.H.I.E.L.D. archive reading progress"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#e62429]" />
              <span className="hidden sm:inline">{readEventIds.length}</span>
              <span className="hidden md:inline uppercase text-[10px] text-zinc-400">READ</span>
            </button>
          </div>

        </div>
      </div>

      {/* Lower Navigation Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <nav className="flex items-center justify-start md:justify-center gap-2 sm:gap-4 md:gap-8 overflow-x-auto py-1 no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`relative flex items-center gap-2 px-3 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-150 whitespace-nowrap font-din select-none shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-white border-b-2 border-[#e62429] font-black'
                    : 'text-zinc-400 hover:text-white hover:border-b-2 hover:border-zinc-500'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

    </header>
  );
};
