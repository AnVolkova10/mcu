import React from 'react';
import { useStore } from '@/store/useStore';
import { TimelineCategory } from '@/types';
import { 
  Search, 
  X, 
  RotateCcw, 
  GitFork, 
  Skull, 
  Sparkles,
  Layers
} from 'lucide-react';
import { allMedia } from '@/data/mediaData';
import { allCharacters } from '@/data/charactersData';
import { infinityStonesData } from '@/data/infinityStonesData';

export const FilterBar: React.FC = () => {
  const {
    filters,
    setSearchQuery,
    setSelectedCategory,
    setSelectedCharacterFilter,
    setSelectedMediaFilter,
    setSelectedStoneFilter,
    setSelectedPhaseFilter,
    toggleOnlyAlternative,
    toggleOnlyDeaths,
    resetFilters,
  } = useStore();

  const categories: { id: TimelineCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Toda la Cronología' },
    { id: 'ancient', label: 'Ancestral / Orígenes' },
    { id: 'early-century', label: '1930 - 1960' },
    { id: 'golden-age', label: '1970 - 2009' },
    { id: 'avengers-era', label: '2010 - 2017 (Avengers)' },
    { id: 'infinity-war', label: '2018 - 2020 (Thanos)' },
    { id: 'future', label: 'Multiverso / Futuro' },
  ];

  const phases = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Marvel Television', 'One-Shot'];

  const hasActiveFilters = Boolean(
    filters.searchQuery ||
    filters.selectedCategory !== 'all' ||
    filters.selectedCharacter ||
    filters.selectedMedia ||
    filters.selectedStone ||
    filters.selectedPhase ||
    filters.onlyAlternative ||
    filters.onlyDeaths
  );

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-md mb-8">
      {/* Top Search & Toggles Row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-4">
        
        {/* Search Box */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por personaje, evento, Hydra, S.H.I.E.L.D., Thanos..."
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-10 pr-9 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Toggles */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <button
            onClick={toggleOnlyAlternative}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
              filters.onlyAlternative
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-500/20'
                : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>Líneas Alternas</span>
          </button>

          <button
            onClick={toggleOnlyDeaths}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
              filters.onlyDeaths
                ? 'bg-red-500/20 text-red-300 border-red-500/50 shadow-sm shadow-red-500/20'
                : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <Skull className="w-3.5 h-3.5" />
            <span>Muertes</span>
          </button>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-auto sm:ml-0"
              title="Limpiar filtros"
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-400" />
              <span>Limpiar</span>
            </button>
          )}
        </div>
      </div>

      {/* Categories Row */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = filters.selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap font-medium transition-all ${
                isSelected
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/30'
                  : 'bg-slate-950/50 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Advanced Selectors (Character, Media, Phase, Stones) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/70">
        
        {/* Character Selector */}
        <select
          value={filters.selectedCharacter || ''}
          onChange={(e) => setSelectedCharacterFilter(e.target.value || null)}
          className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-red-500"
        >
          <option value="">👤 Todos los Personajes</option>
          {allCharacters.map((c) => (
            <option key={c.id} value={c.id}>
              {c.alias || c.name}
            </option>
          ))}
        </select>

        {/* Media Selector */}
        <select
          value={filters.selectedMedia || ''}
          onChange={(e) => setSelectedMediaFilter(e.target.value || null)}
          className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-red-500"
        >
          <option value="">🎬 Todas las Películas / Series</option>
          {allMedia.map((m) => (
            <option key={m.id} value={m.id}>
              {m.title} ({m.releaseYear})
            </option>
          ))}
        </select>

        {/* Phase Selector */}
        <select
          value={filters.selectedPhase || ''}
          onChange={(e) => setSelectedPhaseFilter(e.target.value || null)}
          className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-red-500"
        >
          <option value="">🪐 Todas las Fases</option>
          {phases.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        {/* Stone Selector */}
        <select
          value={filters.selectedStone || ''}
          onChange={(e) => setSelectedStoneFilter(e.target.value || null)}
          className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-red-500"
        >
          <option value="">💎 Todas las Gemas</option>
          {infinityStonesData.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} ({s.vessel})
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};
