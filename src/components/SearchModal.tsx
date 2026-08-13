import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { timelineEras } from '@/data/timelineData';
import { allCharacters } from '@/data/charactersData';
import { allMedia } from '@/data/mediaData';
import { infinityStonesData } from '@/data/infinityStonesData';
import { 
  Search, 
  X, 
  Clock, 
  Users, 
  Film, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    setSelectedCharacterId, 
    setSelectedStoneId, 
    setSelectedMediaId,
    setActiveScreen
  } = useStore();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search Characters
  const matchedCharacters = cleanQuery
    ? allCharacters.filter(
        (c) =>
          c.name.toLowerCase().includes(cleanQuery) ||
          c.alias?.toLowerCase().includes(cleanQuery) ||
          c.affiliation.toLowerCase().includes(cleanQuery)
      ).slice(0, 5)
    : [];

  // Search Media
  const matchedMedia = cleanQuery
    ? allMedia.filter(
        (m) =>
          m.title.toLowerCase().includes(cleanQuery) ||
          m.phase.toLowerCase().includes(cleanQuery) ||
          m.releaseYear.includes(cleanQuery)
      ).slice(0, 5)
    : [];

  // Search Stones
  const matchedStones = cleanQuery
    ? infinityStonesData.filter(
        (s) =>
          s.name.toLowerCase().includes(cleanQuery) ||
          s.vessel.toLowerCase().includes(cleanQuery)
      )
    : [];

  // Search Events
  const matchedEvents: { id: string; eraTitle: string; mediaTitle: string; snippet: string }[] = [];
  if (cleanQuery) {
    for (const era of timelineEras) {
      for (const evt of era.events) {
        const fullText = evt.paragraphs.join(' ').toLowerCase();
        if (
          fullText.includes(cleanQuery) ||
          evt.mediaTitle.toLowerCase().includes(cleanQuery) ||
          era.cleanTitle.toLowerCase().includes(cleanQuery)
        ) {
          matchedEvents.push({
            id: evt.id,
            eraTitle: era.cleanTitle,
            mediaTitle: evt.mediaTitle,
            snippet: evt.paragraphs[0] ? evt.paragraphs[0].replace(/<[^>]+>/g, '').slice(0, 120) + '...' : '',
          });
          if (matchedEvents.length >= 8) break;
        }
      }
      if (matchedEvents.length >= 8) break;
    }
  }

  const handleSelectEvent = (eventId: string) => {
    setIsSearchOpen(false);
    setActiveScreen('timeline');
    setTimeout(() => {
      const el = document.getElementById(eventId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-red-500');
        setTimeout(() => el.classList.remove('ring-2', 'ring-red-500'), 3000);
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en todo el MCU (ej. Tesseract, Steve Rogers, Thanos, 1945)..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-5">
          {!cleanQuery && (
            <div className="py-12 text-center text-slate-500 text-xs">
              Escribe algo para buscar en la base de datos de Marvel Cinematic Universe...
            </div>
          )}

          {/* Characters Section */}
          {matchedCharacters.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>Personajes</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedCharacters.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSelectedCharacterId(c.id);
                    }}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer flex items-center gap-3 group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: c.color }}
                    >
                      {(c.alias || c.name).slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                        {c.name}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{c.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Section */}
          {matchedMedia.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-red-400" />
                <span>Películas & Series</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedMedia.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSelectedMediaId(m.id);
                    }}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer flex items-center gap-3 group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: m.posterColor }}
                    >
                      <Film className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                        {m.title}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{m.phase} ({m.releaseYear})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stones Section */}
          {matchedStones.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Gemas del Infinito</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedStones.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSelectedStoneId(s.id);
                    }}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer flex items-center gap-3 group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: s.colorHex }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                        {s.name}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{s.vessel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Section */}
          {matchedEvents.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Eventos de la Cronología</span>
              </h4>
              <div className="space-y-2">
                {matchedEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => handleSelectEvent(evt.id)}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-red-400">Año: {evt.eraTitle}</span>
                      <span className="text-[10px] text-slate-500 font-semibold">{evt.mediaTitle}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 line-clamp-2">{evt.snippet}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cleanQuery &&
            matchedCharacters.length === 0 &&
            matchedMedia.length === 0 &&
            matchedStones.length === 0 &&
            matchedEvents.length === 0 && (
              <div className="py-12 text-center text-slate-500 text-xs">
                No se encontraron resultados para &quot;{query}&quot;.
              </div>
            )}
        </div>

      </div>
    </div>
  );
};
