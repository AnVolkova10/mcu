import React, { useState } from 'react';
import { useStore } from '@/store/useStore';
import { allMedia } from '@/data/mediaData';
import { timelineEras } from '@/data/timelineData';
import { 
  Film, 
  Calendar, 
  Layers, 
  Clock, 
  Filter, 
  Tv, 
  Clapperboard, 
  Sparkles 
} from 'lucide-react';

export const MediaScreen: React.FC = () => {
  const { setSelectedMediaId } = useStore();
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Count events for each media
  const eventCounts: Record<string, number> = {};
  timelineEras.forEach((era) => {
    era.events.forEach((evt) => {
      eventCounts[evt.mediaKey] = (eventCounts[evt.mediaKey] || 0) + 1;
      evt.rawClasses.forEach((cls) => {
        if (cls !== evt.mediaKey && cls !== 'alternative') {
          eventCounts[cls] = (eventCounts[cls] || 0) + 1;
        }
      });
    });
  });

  const phases = ['all', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Marvel Television', 'One-Shot'];

  const filteredMedia = allMedia.filter((m) => {
    if (selectedPhase !== 'all' && m.phase !== selectedPhase) return false;
    if (selectedType !== 'all' && m.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <Film className="w-8 h-8 text-red-500" />
          <span>Películas, Series & Cortometrajes</span>
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Catálogo completo de producciones de Marvel Studios y Marvel Television que componen la cronología.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-red-400" />
          <span>Filtrar por Fase:</span>
        </span>
        {phases.map((p) => (
          <button
            key={p}
            onClick={() => setSelectedPhase(p)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedPhase === p
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
            }`}
          >
            {p === 'all' ? 'Todas las Fases' : p}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMedia.map((m) => {
          const totalEvents = eventCounts[m.id] || 0;
          return (
            <div
              key={m.id}
              onClick={() => setSelectedMediaId(m.id)}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all p-5 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-950/80 border border-red-800 text-red-300">
                    {m.phase}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {m.releaseYear}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                  {m.title}
                </h3>
              </div>

              {/* Bottom Meta */}
              <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 uppercase font-medium text-[10px]">
                  {m.type}
                </span>
                <span className="font-semibold text-red-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {totalEvents} {totalEvents === 1 ? 'evento' : 'eventos'} en cronología
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
