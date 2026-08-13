import React, { useState } from 'react';
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
  Skull 
} from 'lucide-react';

export const CharactersScreen: React.FC = () => {
  const { setSelectedCharacterId } = useStore();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  // Count appearances
  const appearanceCounts: Record<string, number> = {};
  timelineEras.forEach((era) => {
    era.events.forEach((evt) => {
      evt.characters.forEach((cId) => {
        appearanceCounts[cId] = (appearanceCounts[cId] || 0) + 1;
      });
    });
  });

  const roles = ['all', 'hero', 'villain', 'anti-hero', 'cosmic', 'secondary'];

  const filteredCharacters = allCharacters.filter((c) => {
    const q = search.toLowerCase().trim();
    if (q) {
      const matchName = c.name.toLowerCase().includes(q);
      const matchAlias = c.alias?.toLowerCase().includes(q);
      const matchAffiliation = c.affiliation.toLowerCase().includes(q);
      if (!matchName && !matchAlias && !matchAffiliation) return false;
    }
    if (roleFilter !== 'all' && c.role !== roleFilter) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-500" />
          <span>Archivo de Personajes del MCU</span>
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Base de datos de héroes, villanos, agentes y seres cósmicos del Universo Cinematográfico de Marvel.
        </p>
      </div>

      {/* Search & Role Filter */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-8 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar héroe, villano o afiliación (ej. Avengers, Stark, HYDRA)..."
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                roleFilter === r
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              {r === 'all' ? 'Todos los Roles' : r}
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
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all p-5 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div>
                {/* Character Avatar & Role Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-base font-black shadow-md shrink-0 border border-white/20"
                    style={{ backgroundColor: c.color }}
                  >
                    {(c.alias || c.name).slice(0, 2).toUpperCase()}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      {c.role}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors truncate mt-1">
                      {c.name}
                    </h3>
                  </div>
                </div>

                {/* Affiliation & Status */}
                <div className="text-xs text-slate-400 space-y-1 mb-2">
                  <p className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{c.affiliation}</span>
                  </p>
                </div>
              </div>

              {/* Footer Appearances Count */}
              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">Expediente</span>
                <span className="font-semibold text-blue-400 flex items-center gap-1 text-xs">
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
