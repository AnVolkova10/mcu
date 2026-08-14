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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e62429] text-white text-xs font-bold font-title tracking-widest uppercase mb-3 shadow">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>SECURITY CLEARANCE: ALPHA-OMEGA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wider flex items-center gap-3 font-title uppercase">
          <BarChart2 className="w-8 h-8 text-[#e62429]" />
          <span>S.H.I.E.L.D. ARCHIVE & TIMELINE METRICS</span>
        </h1>
        <p className="text-sm text-zinc-400 mt-1 font-din">
          Consolidated intelligence, reading progress, and event distribution across the Sacred Timeline.
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-[#141414] border border-[#27272a] rounded-xl p-6 sm:p-8 mb-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2 font-title uppercase tracking-wide">
              <CheckCircle2 className="w-5 h-5 text-[#e62429]" />
              <span>Timeline Archive Reading Progress</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5 font-din">
              You have read {readEventIds.length} of {totalEvents} recorded chronological events.
            </p>
          </div>
          <span className="text-3xl font-black text-[#e62429] font-title">{progressPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-[#0a0a0a] rounded-full overflow-hidden border border-[#2a2a2a] p-0.5">
          <div
            className="h-full bg-gradient-to-r from-[#e62429] to-red-500 rounded-full transition-all duration-500 shadow-md"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        
        <div className="p-4 rounded-xl bg-[#141414] border border-[#27272a] text-center">
          <Clock className="w-5 h-5 text-[#e62429] mx-auto mb-2" />
          <span className="text-2xl font-black text-white block font-title">{totalEras}</span>
          <span className="text-[11px] font-bold text-zinc-400 uppercase font-title tracking-wider">Historical Eras</span>
        </div>

        <div className="p-4 rounded-xl bg-[#141414] border border-[#27272a] text-center">
          <Film className="w-5 h-5 text-[#e62429] mx-auto mb-2" />
          <span className="text-2xl font-black text-white block font-title">{totalEvents}</span>
          <span className="text-[11px] font-bold text-zinc-400 uppercase font-title tracking-wider">Total Events</span>
        </div>

        <div className="p-4 rounded-xl bg-[#141414] border border-[#27272a] text-center">
          <Users className="w-5 h-5 text-[#e62429] mx-auto mb-2" />
          <span className="text-2xl font-black text-white block font-title">{totalCharacters}</span>
          <span className="text-[11px] font-bold text-zinc-400 uppercase font-title tracking-wider">Characters</span>
        </div>

        <div className="p-4 rounded-xl bg-[#141414] border border-[#27272a] text-center">
          <Sparkles className="w-5 h-5 text-amber-500 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block font-title">6</span>
          <span className="text-[11px] font-bold text-zinc-400 uppercase font-title tracking-wider">Infinity Stones</span>
        </div>

        <div className="p-4 rounded-xl bg-[#141414] border border-[#27272a] text-center">
          <GitFork className="w-5 h-5 text-amber-400 mx-auto mb-2" />
          <span className="text-2xl font-black text-white block font-title">{alternativeCount}</span>
          <span className="text-[11px] font-bold text-zinc-400 uppercase font-title tracking-wider">Branches / Alts</span>
        </div>

        <div className="p-4 rounded-xl bg-[#141414] border border-[#27272a] text-center">
          <Bookmark className="w-5 h-5 text-[#e62429] mx-auto mb-2" />
          <span className="text-2xl font-black text-white block font-title">{bookmarkedEventIds.length}</span>
          <span className="text-[11px] font-bold text-zinc-400 uppercase font-title tracking-wider">Saved Events</span>
        </div>

      </div>

      {/* Quick Action Navigation */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setActiveScreen('timeline')}
          className="px-5 py-2.5 rounded bg-[#e62429] hover:bg-[#c5191e] text-white text-xs font-bold font-title tracking-wider uppercase transition-all shadow-lg cursor-pointer"
        >
          EXPLORE COMPLETE TIMELINE
        </button>
        <button
          onClick={() => setActiveScreen('stones')}
          className="px-5 py-2.5 rounded bg-[#141414] hover:bg-[#222222] text-zinc-200 text-xs font-bold font-title tracking-wider uppercase border border-[#2e2e2e] transition-all cursor-pointer"
        >
          INFINITY STONES VAULT
        </button>
      </div>

    </div>
  );
};
