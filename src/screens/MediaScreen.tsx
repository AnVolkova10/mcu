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

  const phases = ['all', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Marvel Television', 'One-Shot'];

  const filteredMedia = allMedia.filter((m) => {
    if (selectedPhase !== 'all' && m.phase !== selectedPhase) return false;
    if (selectedType !== 'all' && m.type !== selectedType) return false;
    return true;
  });

  const renderMediaIcon = (type: string) => {
    if (type === 'series') {
      return <Tv className="w-5 h-5 text-sky-400" />;
    }
    if (type === 'oneshot' || type === 'special') {
      return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
    return <Clapperboard className="w-5 h-5 text-[#e62429]" />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wider flex items-center gap-3 font-title uppercase">
          <Clapperboard className="w-8 h-8 text-[#e62429]" />
          <span>PELÍCULAS, SERIES & CORTOMETRAJES</span>
        </h1>
        <p className="text-sm text-zinc-400 mt-1 font-din">
          Catálogo completo de producciones de Marvel Studios y Marvel Television que componen la cronología oficial.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#141414] p-3.5 rounded-xl border border-[#27272a]">
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mr-2 flex items-center gap-1.5 font-title">
          <Filter className="w-3.5 h-3.5 text-[#e62429]" />
          <span>FILTRAR POR FASE:</span>
        </span>
        {phases.map((p) => (
          <button
            key={p}
            onClick={() => setSelectedPhase(p)}
            className={`px-3 py-1.5 rounded text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer ${
              selectedPhase === p
                ? 'bg-[#e62429] text-white shadow-md'
                : 'bg-[#000000] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500 hover:bg-[#181818]'
            }`}
          >
            {p === 'all' ? 'TODAS LAS FASES' : p}
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
              className="group relative rounded-xl bg-[#141414] border border-[#27272a] hover:border-[#e62429] hover:bg-[#181818] transition-all p-5 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    {renderMediaIcon(m.type)}
                    <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#000000] border border-[#2f2f2f] text-zinc-300">
                      {m.type === 'series' ? 'SERIE TV' : m.type === 'oneshot' ? 'CORTOMETRAJE' : 'PELÍCULA'}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1 font-din">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {m.releaseYear}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#e62429] transition-colors mb-2 font-title uppercase tracking-wide">
                  {m.title}
                </h3>

                {/* Phase */}
                <p className="text-xs font-bold text-[#e62429] mb-3 font-title tracking-wider uppercase">
                  {m.phase}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4 font-din">
                  {m.description}
                </p>
              </div>

              {/* Footer Events Count */}
              <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-xs font-din">
                <span className="text-zinc-500 text-[11px] uppercase font-semibold">PRESENCIA CRONOLÓGICA</span>
                <span className="font-bold text-[#e62429] flex items-center gap-1 text-xs">
                  <Clock className="w-3 h-3" />
                  {totalEvents} {totalEvents === 1 ? 'evento' : 'eventos'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
