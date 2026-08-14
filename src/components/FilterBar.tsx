import React, { useMemo } from 'react';
import { useStore } from '@/store/useStore';
import { TimelineCategory } from '@/types';
import { 
  Search, 
  X, 
  RotateCcw, 
  GitFork, 
  Skull, 
  Sparkles,
  Layers,
  Filter,
  Globe2
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
    setSelectedGroupFilter,
    setSelectedOriginFilter,
    setSelectedMediaFilter,
    setSelectedStoneFilter,
    setSelectedPhaseFilter,
    setSelectedUniverseFilter,
    toggleOnlyAlternative,
    toggleOnlyDeaths,
    resetFilters,
  } = useStore();

  const categories: { id: TimelineCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'FULL TIMELINE' },
    { id: 'ancient', label: 'ANCIENT ERA' },
    { id: 'early-century', label: '1930 - 1960' },
    { id: 'golden-age', label: '1970 - 2009' },
    { id: 'avengers-era', label: 'AVENGERS ERA' },
    { id: 'infinity-war', label: 'INFINITY WAR' },
    { id: 'future', label: 'MULTIVERSE' },
  ];

  const phases = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Marvel Television', 'One-Shot'];

  // Extract all unique groups
  const allGroups = useMemo(() => {
    const groupSet = new Set<string>();
    allCharacters.forEach((c) => {
      if (c.groups) {
        c.groups.forEach((g) => groupSet.add(g));
      }
    });
    return Array.from(groupSet).sort();
  }, []);

  // Preset location filters
  const origins = [
    { id: 'Wakanda', label: '🌍 Wakanda' },
    { id: 'Earth', label: '🌐 Earth' },
    { id: 'Asgard', label: '⚡ Asgard' },
    { id: 'K\'un-Lun', label: '🐉 K\'un-Lun' },
    { id: 'Cosmic', label: '🪐 Cosmic / Space' },
    { id: 'Titan', label: '🌑 Titan' },
  ];

  const universes = [
    { id: 'sacred-616', label: '🛡️ Earth-616 (Sacred Timeline)' },
    { id: 'branches', label: '⏳ Earth-616 Branches (All)' },
    { id: 'time-heists', label: '⌛ Endgame Time Heists (1970, 2012, 2014)' },
    { id: '2091', label: '🌑 Earth-TRN676 (2091 Shattered Earth)' },
  ];

  const hasActiveFilters = Boolean(
    filters.searchQuery ||
    filters.selectedCategory !== 'all' ||
    filters.selectedCharacter ||
    filters.selectedGroup ||
    filters.selectedOrigin ||
    filters.selectedMedia ||
    filters.selectedStone ||
    filters.selectedPhase ||
    filters.selectedUniverse ||
    filters.onlyAlternative ||
    filters.onlyDeaths
  );

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 sm:p-5 shadow-2xl mb-8 font-din">
      {/* Top Search & Toggles Row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-4">
        
        {/* Search Box */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search characters, events, Hatut Zeraze, S.H.I.E.L.D., Wakanda, K'un-Lun, Thanos..."
            className="w-full bg-[#0a0a0a] border border-[#2f2f2f] rounded-lg pl-10 pr-9 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e62429] focus:ring-1 focus:ring-[#e62429] transition-all font-din"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Toggles */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <button
            onClick={toggleOnlyAlternative}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase border transition-all cursor-pointer whitespace-nowrap ${
              filters.onlyAlternative
                ? 'bg-[#e62429] text-white border-[#e62429] shadow-md shadow-[#e62429]/30'
                : 'bg-[#0a0a0a] text-zinc-400 border-[#2f2f2f] hover:text-white hover:border-zinc-500'
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>ALTERNATE TIMELINES</span>
          </button>

          <button
            onClick={toggleOnlyDeaths}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase border transition-all cursor-pointer whitespace-nowrap ${
              filters.onlyDeaths
                ? 'bg-[#e62429] text-white border-[#e62429] shadow-md shadow-[#e62429]/30'
                : 'bg-[#0a0a0a] text-zinc-400 border-[#2f2f2f] hover:text-white hover:border-zinc-500'
            }`}
          >
            <Skull className="w-3.5 h-3.5" />
            <span>CASUALTIES / DEATHS</span>
          </button>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase bg-[#222222] hover:bg-[#2e2e2e] text-zinc-300 hover:text-white transition-colors ml-auto sm:ml-0 border border-[#333333] cursor-pointer whitespace-nowrap"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#e62429]" />
              <span>RESET</span>
            </button>
          )}
        </div>
      </div>

      {/* Categories Row (Single Clean Row on Desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
        {categories.map((cat) => {
          const isSelected = filters.selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-2 rounded text-xs font-bold tracking-wider font-title uppercase transition-all cursor-pointer text-center truncate ${
                isSelected
                  ? 'bg-[#e62429] text-white shadow-md shadow-[#e62429]/30'
                  : 'bg-[#0a0a0a] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500 hover:bg-[#181818]'
              }`}
              title={cat.label}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Advanced Selectors (Character, Group, Origin, Media, Phase, Stones, Universe/Earth) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 pt-3 border-t border-[#222222]">
        
        {/* Character Selector */}
        <select
          value={filters.selectedCharacter || ''}
          onChange={(e) => setSelectedCharacterFilter(e.target.value || null)}
          className="bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#e62429] font-din cursor-pointer hover:border-zinc-500 transition-colors truncate"
        >
          <option value="">👤 All Characters</option>
          {allCharacters.map((c) => (
            <option key={c.id} value={c.id}>
              {c.alias || c.name}
            </option>
          ))}
        </select>

        {/* Group / Faction Selector */}
        <select
          value={filters.selectedGroup || ''}
          onChange={(e) => setSelectedGroupFilter(e.target.value || null)}
          className="bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#e62429] font-din cursor-pointer hover:border-zinc-500 transition-colors truncate"
        >
          <option value="">🛡️ All Factions & Groups</option>
          {allGroups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        {/* Origin / Location Selector */}
        <select
          value={filters.selectedOrigin || ''}
          onChange={(e) => setSelectedOriginFilter(e.target.value || null)}
          className="bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#e62429] font-din cursor-pointer hover:border-zinc-500 transition-colors truncate"
        >
          <option value="">🌍 Origin / Realm</option>
          {origins.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>

        {/* Media Selector */}
        <select
          value={filters.selectedMedia || ''}
          onChange={(e) => setSelectedMediaFilter(e.target.value || null)}
          className="bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#e62429] font-din cursor-pointer hover:border-zinc-500 transition-colors truncate"
        >
          <option value="">🎬 Movies & Series</option>
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
          className="bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#e62429] font-din cursor-pointer hover:border-zinc-500 transition-colors truncate"
        >
          <option value="">🪐 All MCU Phases</option>
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
          className="bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#e62429] font-din cursor-pointer hover:border-zinc-500 transition-colors truncate"
        >
          <option value="">💎 Infinity Stones</option>
          {infinityStonesData.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} ({s.vessel})
            </option>
          ))}
        </select>

        {/* Universe / Earth Designation Selector */}
        <select
          value={filters.selectedUniverse || ''}
          onChange={(e) => setSelectedUniverseFilter(e.target.value || null)}
          className="bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#e62429] font-din cursor-pointer hover:border-zinc-500 transition-colors truncate"
        >
          <option value="">🌐 Earth / Reality</option>
          {universes.map((u) => (
            <option key={u.id} value={u.id}>
              {u.label}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};
