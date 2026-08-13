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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 border border-red-900/40 p-6 sm:p-10 mb-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>MCU Sacred Timeline & Multiverse</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Cronología Definitiva del <span className="text-red-500">MCU</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Explora cada acontecimiento histórico del Universo Cinematográfico de Marvel en orden cronológico exacto: desde la creación de las Gemas del Infinito y el origen de Wakanda, hasta la Guerra del Infinito y las líneas temporales alternas.
          </p>
        </div>

        {/* Ambient Glow */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Filter Bar */}
      <FilterBar />

      {/* Results Header / Stats */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800/80 text-xs text-slate-400">
        <div>
          Mostrando <span className="font-bold text-white">{totalFilteredEvents}</span> eventos en <span className="font-bold text-white">{filteredEras.length}</span> épocas históricas
        </div>
      </div>

      {/* Timeline Stream */}
      {filteredEras.length === 0 ? (
        <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
          <FilterX className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No se encontraron eventos</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-5">
            No hay eventos en la cronología que coincidan con los filtros o la búsqueda seleccionada.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-lg shadow-red-600/30"
          >
            Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredEras.map((era) => (
            <section key={era.id} id={era.id} className="relative">
              
              {/* Era Header */}
              <div className="sticky top-20 z-20 py-2.5 mb-6 backdrop-blur-md bg-slate-950/90 border-y border-slate-800/80 -mx-4 px-4 sm:rounded-2xl sm:mx-0 sm:px-6 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50" />
                  <h2 className="text-lg sm:text-xl font-black text-white tracking-wide">
                    {era.title}
                  </h2>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  {era.events.length} {era.events.length === 1 ? 'evento' : 'eventos'}
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
        className="fixed bottom-6 right-6 p-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/40 border border-red-400/30 transition-transform hover:scale-110 z-30"
        title="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
};
