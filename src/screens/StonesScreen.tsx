import React from 'react';
import { useStore } from '@/store/useStore';
import { infinityStonesData } from '@/data/infinityStonesData';
import { 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export const StonesScreen: React.FC = () => {
  const { setSelectedStoneId } = useStore();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex-1 flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="mb-3 lg:mb-4 text-center max-w-3xl mx-auto shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e62429] text-white text-xs font-bold font-title tracking-widest uppercase mb-1.5 shadow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RELICS OF COSMIC CREATION</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-wider mb-1 font-title uppercase">
          THE 6 INFINITY STONES
        </h1>
        <p className="text-xs sm:text-sm text-zinc-300 leading-snug max-w-2xl mx-auto font-din">
          Before creation itself, there were six singularities. Then the universe exploded into existence, and the remnants of these systems were forged into concentrated ingots: the Infinity Stones.
        </p>
      </div>

      {/* Infinity Stones Grid - Expands to fill available vertical space */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-5 mb-1">
        {infinityStonesData.map((stone) => (
          <div
            key={stone.id}
            onClick={() => setSelectedStoneId(stone.id)}
            className="group relative rounded-2xl bg-[#141414] border p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:border-white/40 cursor-pointer overflow-hidden h-full"
            style={{
              borderColor: `${stone.colorHex}44`,
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
              style={{ backgroundColor: stone.colorHex }}
            />

            <div className="flex-1 flex flex-col justify-start">
              {/* Stone Orb Icon */}
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <div
                  className="w-11 h-11 lg:w-13 lg:h-13 rounded-xl flex items-center justify-center text-white shadow-xl border border-white/20 animate-glow"
                  style={{
                    backgroundColor: stone.colorHex,
                    color: stone.colorHex,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>

                <span
                  className="text-xs font-bold font-title tracking-widest uppercase px-3 py-1 rounded-full border"
                  style={{
                    backgroundColor: `${stone.colorHex}1a`,
                    borderColor: `${stone.colorHex}55`,
                    color: stone.colorHex,
                  }}
                >
                  {stone.color}
                </span>
              </div>

              {/* Title & Vessel */}
              <h3 className="text-lg lg:text-xl font-black text-white group-hover:text-white transition-colors mb-1 font-title uppercase tracking-wide">
                {stone.name}
              </h3>
              <p className="text-xs sm:text-[13px] font-semibold text-zinc-400 mb-2 font-din">
                Vessel / Container: <span className="text-white font-bold">{stone.vessel}</span>
              </p>

              {/* Power Summary */}
              <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-din line-clamp-3">
                {stone.powerDescription}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-xs font-din mt-2 shrink-0">
              <span className="text-zinc-500 font-semibold uppercase text-[11px]">
                {stone.journey.length} timeline milestones
              </span>
              <span
                className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform font-title tracking-wider uppercase text-xs"
                style={{ color: stone.colorHex }}
              >
                <span>VIEW JOURNEY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
