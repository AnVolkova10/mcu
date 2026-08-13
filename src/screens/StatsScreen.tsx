import React from 'react';
import { useStore } from '@/store/useStore';
import { timelineEras } from '@/data/timelineData';
import { allCharacters } from '@/data/charactersData';
import { allMedia } from '@/data/mediaData';
import { infinityStonesData } from '@/data/infinityStonesData';
import { 
  BarChart2, 
  ShieldCheck, 
  CheckCircle2, 
  Film, 
  Users, 
  Sparkles, 
  Clock, 
  GitFork, 
  Skull,
  Bookmark
} from 'lucide-react';

export const StatsScreen: React.FC = () => {
  const { readEventIds, bookmarkedEventIds, setActiveScreen } = useStore();

  const totalEvents = timelineEras.reduce((sum, e) => sum + e.events.length, 0);
  const totalEras = timelineEras.length;
  const totalCharacters = allCharacters.length;
  const totalMedia = allMedia.length;

  let alternativeCount = 0;
  let deathsCount = 0;
  timelineEras.forEach((e) => {
    e.events.forEach((evt) => {
      if (evt.isAlternativeTimeline) alternativeCount++;
      if (evt.deaths.length > 0) deathsCount++;
    });
  });

  const progressPercent = Math.min(100, Math.round((readEventIds.length / totalEvents) * 100)) || 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Nivel de Seguridad: Alpha-Omega</span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <BarChart2 className="w-8 h-8 text-amber-500" />
          <span>Terminal S.H.I.E.L.D. & Estadísticas del MCU</span>
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Métricas consolidadas, progreso de lectura y desglose de eventos de la Sagrada Línea Temporal.
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Progreso de Lectura de la Cronología</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Has revisado {readEventIds.length} de {totalEvents} acontecimientos registrados.
            </p>
          </div>
          <span className="text-3xl font-black text-emerald-400">{progressPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-500 shadow-lg shadow-emerald-500/50"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <Clock className="w-5 h-5 text-red-500 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block">{totalEras}</span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Épocas / Años</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <Film className="w-5 h-5 text-blue-500 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block">{totalEvents}</span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Eventos Totales</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <Users className="w-5 h-5 text-purple-500 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block">{totalCharacters}</span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Personajes</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <Sparkles className="w-5 h-5 text-amber-500 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block">6</span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Gemas del Infinito</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <GitFork className="w-5 h-5 text-amber-400 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block">{alternativeCount}</span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Líneas Alternas</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <Bookmark className="w-5 h-5 text-red-400 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block">{bookmarkedEventIds.length}</span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Guardados</span>
        </div>

      </div>

      {/* Quick Action Navigation */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setActiveScreen('timeline')}
          className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-lg shadow-red-600/30"
        >
          Explorar Cronología Completa
        </button>
        <button
          onClick={() => setActiveScreen('stones')}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-800 transition-all"
        >
          Bóveda de Gemas del Infinito
        </button>
      </div>

    </div>
  );
};
