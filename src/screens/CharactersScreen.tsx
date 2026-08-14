import React, { useState, useMemo } from 'react';
import { useStore } from '@/store/useStore';
import { allCharacters } from '@/data/charactersData';
import { timelineEras } from '@/data/timelineData';
import { 
  Users, 
  Search, 
  Shield, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Skull,
  MapPin,
  Globe2,
  Layers,
  Filter
} from 'lucide-react';

export const CharactersScreen: React.FC = () => {
  const { setSelectedCharacterId } = useStore();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  // Count appearances across the timeline
  const appearanceCounts: Record<string, number> = {};
  timelineEras.forEach((era) => {
    era.events.forEach((evt) => {
      evt.characters.forEach((cId) => {
        appearanceCounts[cId] = (appearanceCounts[cId] || 0) + 1;
      });
    });
  });

  // Extract all unique groups
  const allGroups = useMemo(() => {
    const groupSet = new Set<string>();
    allCharacters.forEach((c) => {
      if (c.groups) {
        c.groups.forEach((g) => groupSet.add(g));
      }
    });
    return ['all', ...Array.from(groupSet).sort()];
  }, []);

  // Preset location filters
  const locationFilters = [
    { id: 'all', label: 'TODAS LAS UBICACIONES' },
    { id: 'Wakanda', label: '🌍 WAKANDA' },
    { id: 'Earth', label: '🌐 TIERRA' },
    { id: 'Asgard', label: '⚡ ASGARD' },
    { id: 'K\'un-Lun', label: '🐉 K\'UN-LUN' },
    { id: 'Cosmic', label: '🪐 CÓSMICO / ESPACIO' },
  ];

  const roles = ['all', 'hero', 'villain', 'anti-hero', 'cosmic', 'secondary'];

  const filteredCharacters = allCharacters.filter((c) => {
    const q = search.toLowerCase().trim();
    if (q) {
      const matchName = c.name.toLowerCase().includes(q);
      const matchAlias = c.alias?.toLowerCase().includes(q);
      const matchAffiliation = c.affiliation.toLowerCase().includes(q);
      const matchLocation = c.originLocation?.toLowerCase().includes(q);
      const matchGroups = c.groups?.some((g) => g.toLowerCase().includes(q));
      if (!matchName && !matchAlias && !matchAffiliation && !matchLocation && !matchGroups) {
        return false;
      }
    }

    if (roleFilter !== 'all' && c.role !== roleFilter) return false;
    if (selectedGroup !== 'all' && (!c.groups || !c.groups.includes(selectedGroup))) return false;
    if (selectedLocation !== 'all') {
      if (!c.originLocation || !c.originLocation.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wider flex items-center gap-3 font-title uppercase">
          <Users className="w-8 h-8 text-[#e62429]" />
          <span>EXPEDIENTES Y AGRUPACIONES DEL MCU</span>
        </h1>
        <p className="text-sm text-zinc-400 mt-1 font-din">
          Base de datos de héroes, villanos y facciones organizados por sus agrupaciones (Avengers, Hatut Zeraze, S.H.I.E.L.D., K'un-Lun) y planetas o reinos de origen.
        </p>
      </div>

      {/* Filter Control Center */}
      <div className="bg-[#141414] p-5 rounded-xl border border-[#27272a] shadow-xl mb-8 space-y-4">
        
        {/* Top Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por personaje, agrupación (Hatut Zeraze, Avengers, K'un-Lun) o planeta/ciudad (Wakanda, Asgard)..."
            className="w-full bg-[#0a0a0a] border border-[#2f2f2f] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e62429] font-din"
          />
        </div>

        {/* Group Filter Chips */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-title">
            <Layers className="w-3.5 h-3.5 text-[#e62429]" />
            <span>FILTRAR POR AGRUPACIÓN / FACCIÓN:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {allGroups.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGroup(g)}
                className={`px-3 py-1 rounded text-xs font-bold font-title tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  selectedGroup === g
                    ? 'bg-[#e62429] text-white shadow-md'
                    : 'bg-[#000000] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500 hover:bg-[#181818]'
                }`}
              >
                {g === 'all' ? 'TODAS LAS AGRUPACIONES' : g}
              </button>
            ))}
          </div>
        </div>

        {/* Location & Role Filter Selectors */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#222222]">
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider font-title mr-2">
            <Globe2 className="w-3.5 h-3.5 text-sky-400" />
            <span>ORIGEN / REINO:</span>
          </div>
          {locationFilters.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocation(loc.id)}
              className={`px-3 py-1 rounded text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer ${
                selectedLocation === loc.id
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-[#000000] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500'
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>

      </div>

      {/* Character Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCharacters.map((c) => {
          const count = appearanceCounts[c.id] || 0;
          return (
            <div
              key={c.id}
              onClick={() => setSelectedCharacterId(c.id)}
              className="group relative rounded-xl bg-[#141414] border border-[#27272a] hover:border-[#e62429] hover:bg-[#181818] transition-all p-5 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div>
                {/* Character Avatar & Role Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-base font-black shadow-md shrink-0 border border-white/20 font-title"
                    style={{ backgroundColor: c.color }}
                  >
                    {(c.alias || c.name).slice(0, 2).toUpperCase()}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#000000] border border-[#2f2f2f] text-zinc-400">
                      {c.role}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#e62429] transition-colors truncate mt-1 font-title uppercase tracking-wide">
                      {c.name}
                    </h3>
                  </div>
                </div>

                {/* Origin Location */}
                {c.originLocation && (
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2 font-din">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{c.originLocation}</span>
                  </div>
                )}

                {/* Groups / Factions Badges */}
                {c.groups && c.groups.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {c.groups.map((grp) => (
                      <span
                        key={grp}
                        className="text-[10px] font-bold font-title tracking-wider px-2 py-0.5 rounded bg-[#000000] border border-[#2e2e2e] text-zinc-300 group-hover:border-zinc-500"
                      >
                        {grp}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bio Snippet */}
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-2 font-din">
                  {c.bio}
                </p>
              </div>

              {/* Footer Appearances Count */}
              <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-xs font-din">
                <span className="text-zinc-500 text-[11px] uppercase font-semibold">EXPEDIENTE</span>
                <span className="font-bold text-[#e62429] flex items-center gap-1 text-xs">
                  <Clock className="w-3 h-3" />
                  {count} {count === 1 ? 'aparición' : 'apariciones'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
