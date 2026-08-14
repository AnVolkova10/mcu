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
  ShieldAlert
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
    { id: 'timeline', label: 'CRONOLOGÍA', icon: <Clock className="w-4 h-4" /> },
    { id: 'media', label: 'PELÍCULAS & SERIES', icon: <Film className="w-4 h-4" /> },
    { id: 'characters', label: 'PERSONAJES', icon: <Users className="w-4 h-4" /> },
    { id: 'stones', label: 'GEMAS DEL INFINITO', icon: <Sparkles className="w-4 h-4" /> },
    { 
      id: 'bookmarks', 
      label: 'GUARDADOS', 
      icon: (
        <div className="relative">
          <Bookmark className="w-4 h-4" />
          {bookmarkedEventIds.length > 0 && (
            <span className="absolute -top-1.5 -right-2.5 bg-[#e62429] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
              {bookmarkedEventIds.length}
            </span>
          )}
        </div>
      ) 
    },
    { id: 'stats', label: 'S.H.I.E.L.D.', icon: <BarChart2 className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000000] border-b border-[#222222] shadow-2xl">
      {/* Top Marvel Mini Header Strip */}
      <div className="bg-[#111111] border-b border-[#1f1f1f] py-1 px-4 text-center">
        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#e62429] animate-pulse" />
          UNIVERSO CINEMATOGRÁFICO DE MARVEL • CRONOLOGÍA OFICIAL
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Official Marvel Logo & Brand Title */}
          <div 
            className="flex items-center gap-3 cursor-pointer group select-none py-2"
            onClick={() => setActiveScreen('timeline')}
          >
            <div className="relative overflow-hidden rounded-sm transition-transform duration-200 group-hover:scale-105 shadow-md">
              <img 
                src={marvelLogo} 
                alt="MARVEL" 
                className="h-8 w-auto object-contain" 
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-black tracking-wider text-sm font-title leading-tight">
                MCU TIMELINE ARCHIVE
              </span>
              <span className="text-zinc-400 text-[10px] uppercase tracking-widest font-semibold">
                Sagrada Línea Temporal
              </span>
            </div>
          </div>

          {/* Center Navigation Tabs (Marvel.com style) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-5 text-xs font-bold tracking-wider uppercase transition-all duration-200 font-title ${
                    isActive
                      ? 'text-white border-b-2 border-[#e62429] bg-gradient-to-t from-[#e62429]/15 to-transparent'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2.5">
            {/* Global Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#161616] hover:bg-[#222222] text-zinc-300 hover:text-white border border-[#2f2f2f] hover:border-[#e62429] text-xs font-bold transition-all group"
              title="Buscar (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#e62429] transition-colors" />
              <span className="hidden sm:inline font-title tracking-wider uppercase text-[11px]">BUSCAR</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-[#0d0d0d] border border-[#333333] rounded text-zinc-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Read Events Progress Indicator */}
            <div 
              onClick={() => setActiveScreen('stats')}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#161616] border border-[#2a2a2a] text-[11px] text-zinc-300 cursor-pointer hover:border-[#e62429] transition-colors font-semibold"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#e62429]" />
              <span>{readEventIds.length} LEÍDOS</span>
            </div>
          </div>

        </div>

        {/* Mobile Navigation Scroll */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1.5 border-t border-[#1f1f1f] no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs whitespace-nowrap font-bold tracking-wider font-title uppercase shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#e62429] text-white shadow-md'
                    : 'text-zinc-400 bg-[#161616] hover:bg-[#222222] hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
