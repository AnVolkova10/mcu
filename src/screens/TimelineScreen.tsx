import React, { useMemo } from 'react';
import { useStore } from '@/store/useStore';
import { timelineEras } from '@/data/timelineData';
import { FilterBar } from '@/components/FilterBar';
import { EventCard } from '@/components/EventCard';
import { 
  Sparkles, 
  Layers, 
  Calendar, 
  ArrowUp,
  Shield,
  Search,
  FilterX
} from 'lucide-react';

export const TimelineScreen: React.FC = () => {
  const { filters, resetFilters } = useStore();

  // Filter events based on active filter state
  const filteredEras = useMemo(() => {
    const query = filters.searchQuery.toLowerCase().trim();

    return timelineEras
      .map((era) => {
        // Check category filter
        if (filters.selectedCategory !== 'all' && era.category !== filters.selectedCategory) {
          return null;
        }

        // Filter events in this era
        const validEvents = era.events.filter((evt) => {
          // Text Search
          if (query) {
            const matchesText = evt.paragraphs.some((p) => p.toLowerCase().includes(query));
            const matchesMedia = evt.mediaTitle.toLowerCase().includes(query);
            const matchesEra = era.cleanTitle.toLowerCase().includes(query);
            if (!matchesText && !matchesMedia && !matchesEra) return false;
          }

          // Character Filter
          if (filters.selectedCharacter) {
            const hasChar = evt.characters.includes(filters.selectedCharacter) ||
                            evt.rawHtml.toLowerCase().includes(filters.selectedCharacter);
            if (!hasChar) return false;
          }

          // Media Filter
          if (filters.selectedMedia) {
            const hasMedia = evt.mediaKey === filters.selectedMedia || evt.rawClasses.includes(filters.selectedMedia);
            if (!hasMedia) return false;
          }

          // Stone Filter
          if (filters.selectedStone) {
            if (!evt.stones.includes(filters.selectedStone)) return false;
          }

          // Phase Filter
          if (filters.selectedPhase) {
            if (evt.mediaPhase !== filters.selectedPhase) return false;
          }

          // Only Alternative Timelines
          if (filters.onlyAlternative && !evt.isAlternativeTimeline) {
            return false;
          }

          // Only Events with Deaths
          if (filters.onlyDeaths && evt.deaths.length === 0) {
            return false;
          }

          return true;
        });

        if (validEvents.length === 0) return null;

        return {
          ...era,
          events: validEvents,
        };
      })
      .filter((era): era is NonNullable<typeof era> => era !== null);
  }, [filters]);

  const totalFilteredEvents = filteredEras.reduce((sum, e) => sum + e.events.length, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hero Banner with Marvel Red & Black Contrast */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1b0607] via-[#111111] to-[#080808] border-2 border-[#331113] p-6 sm:p-10 mb-8 shadow-2xl">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#e62429] text-white text-xs font-bold tracking-widest uppercase mb-4 shadow font-din">
            <Shield className="w-3.5 h-3.5" />
            <span>SAGRADA LÍNEA TEMPORAL DEL MCU</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wide leading-tight mb-4 uppercase font-title">
            CRONOLOGÍA DEFINITIVA DEL <span className="text-[#e62429]">MCU</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl font-din">
            Explora cada acontecimiento histórico del Universo Cinematográfico de Marvel en orden cronológico exacto: desde la creación de las Gemas del Infinito y el origen de Wakanda, hasta la Guerra del Infinito y las líneas temporales alternas.
          </p>
        </div>

        {/* Ambient Red Comic Glow */}
        <div className="absolute right-0 top-0 -mr-20 -mt-20 w-96 h-96 bg-[#e62429]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Filter Bar */}
      <FilterBar />

      {/* Results Header / Stats */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#222222] text-xs text-zinc-400 font-din">
        <div>
          Mostrando <span className="font-bold text-white font-title text-sm">{totalFilteredEvents}</span> eventos en <span className="font-bold text-white font-title text-sm">{filteredEras.length}</span> épocas históricas
        </div>
      </div>

      {/* Timeline Stream */}
      {filteredEras.length === 0 ? (
        <div className="text-center py-20 bg-[#141414] border border-[#27272a] rounded-xl p-8 font-din">
          <FilterX className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-1 font-title uppercase">No se encontraron eventos</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-5">
            No hay eventos en la cronología que coincidan con los filtros o la búsqueda seleccionada.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded bg-[#e62429] hover:bg-[#c5191e] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg font-din cursor-pointer"
          >
            RESTABLECER TODOS LOS FILTROS
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredEras.map((era) => (
            <section key={era.id} id={era.id} className="relative">
              
              {/* Era Header */}
              <div className="sticky top-24 z-20 py-3 mb-6 backdrop-blur-md bg-[#000000]/95 border-y-2 border-[#e62429] -mx-4 px-4 sm:rounded-lg sm:mx-0 sm:px-6 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#e62429] rotate-45" />
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase font-title">
                    {era.title}
                  </h2>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded bg-[#161616] border border-[#333333] text-zinc-300 font-din">
                  {era.events.length} {era.events.length === 1 ? 'EVENTO' : 'EVENTOS'}
                </span>
              </div>

              {/* Event Cards Grid / List */}
              <div className="grid grid-cols-1 gap-5">
                {era.events.map((evt) => (
                  <EventCard key={evt.id} event={evt} />
                ))}
              </div>

            </section>
          ))}
        </div>
      )}

      {/* Floating Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-lg bg-[#e62429] hover:bg-[#c5191e] text-white shadow-2xl border border-red-400/40 transition-transform hover:scale-110 z-30 cursor-pointer"
        title="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
};
