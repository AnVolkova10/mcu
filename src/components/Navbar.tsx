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

export const Navbar: React.FC = () => {
  const { 
    activeScreen, 
    setActiveScreen, 
    setIsSearchOpen, 
    bookmarkedEventIds,
    readEventIds
  } = useStore();

  const navItems: { id: ActiveScreen; label: string; icon: React.ReactNode }[] = [
    { id: 'timeline', label: 'Línea de Tiempo', icon: <Clock className="w-4 h-4" /> },
    { id: 'media', label: 'Películas & Series', icon: <Film className="w-4 h-4" /> },
    { id: 'characters', label: 'Personajes', icon: <Users className="w-4 h-4" /> },
    { id: 'stones', label: 'Gemas del Infinito', icon: <Sparkles className="w-4 h-4" /> },
    { 
      id: 'bookmarks', 
      label: 'Guardados', 
      icon: (
        <div className="relative">
          <Bookmark className="w-4 h-4" />
          {bookmarkedEventIds.length > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {bookmarkedEventIds.length}
            </span>
          )}
        </div>
      ) 
    },
    { id: 'stats', label: 'Base S.H.I.E.L.D.', icon: <BarChart2 className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveScreen('timeline')}
          >
            <div className="bg-red-600 group-hover:bg-red-500 transition-colors text-white font-black tracking-tighter px-2.5 py-0.5 rounded text-lg uppercase shadow-lg shadow-red-600/30 flex items-center gap-1.5">
              <span>MARVEL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wider text-sm flex items-center gap-1">
                MCU ARCHIVES <span className="text-[10px] px-1.5 py-0.2 bg-red-950 text-red-400 border border-red-800/60 rounded uppercase font-semibold">Timeline</span>
              </span>
              <span className="text-slate-400 text-[11px] font-medium">Cronología Oficial & Universo Marvel</span>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-all shadow-inner group"
              title="Buscar (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400 transition-colors" />
              <span className="hidden sm:inline">Buscar...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Read Events Progress Indicator */}
            <div 
              onClick={() => setActiveScreen('stats')}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 cursor-pointer hover:border-slate-700 transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>{readEventIds.length} leídos</span>
            </div>
          </div>

        </div>

        {/* Mobile Navigation Scroll */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1.5 border-t border-slate-800/60 no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs whitespace-nowrap font-medium shrink-0 transition-all ${
                  isActive
                    ? 'bg-red-600 text-white font-bold'
                    : 'text-slate-300 bg-slate-900/60 hover:bg-slate-800'
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
