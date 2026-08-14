import React from 'react';
import { useStore } from '@/store/useStore';
import { infinityStonesData } from '@/data/infinityStonesData';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export const StonesScreen: React.FC = () => {
  const { setSelectedStoneId } = useStore();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e62429] text-white text-xs font-bold font-title tracking-widest uppercase mb-4 shadow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RELIQUIAS DE LA CREACIÓN CÓSMICA</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-wider mb-3 font-title uppercase">
          LAS 6 GEMAS DEL INFINITO
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-din">
          Antes de la creación misma, existían seis singularidades. Luego el universo explotó y los restos de estos sistemas fueron concentrados en lingotes concentrados: las Gemas del Infinito.
        </p>
      </div>

      {/* Infinity Stones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {infinityStonesData.map((stone) => (
          <div
            key={stone.id}
            onClick={() => setSelectedStoneId(stone.id)}
            className="group relative rounded-xl bg-[#141414] border p-6 flex flex-col justify-between shadow-2xl transition-all duration-200 hover:-translate-y-1 cursor-pointer overflow-hidden"
            style={{
              borderColor: `${stone.colorHex}44`,
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
              style={{ backgroundColor: stone.colorHex }}
            />

            <div>
              {/* Stone Orb Icon */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-xl border border-white/20 animate-glow"
                  style={{
                    backgroundColor: stone.colorHex,
                    color: stone.colorHex,
                  }}
                >
                  <Sparkles className="w-7 h-7 text-white" />
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
              <h3 className="text-xl font-black text-white group-hover:text-white transition-colors mb-1 font-title uppercase tracking-wide">
                {stone.name}
              </h3>
              <p className="text-xs font-semibold text-zinc-400 mb-3 font-din">
                Contenedor: <span className="text-white font-bold">{stone.vessel}</span>
              </p>

              {/* Power Summary */}
              <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-4 font-din">
                {stone.powerDescription}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#242424] flex items-center justify-between text-xs font-din">
              <span className="text-zinc-500 font-semibold uppercase text-[11px]">
                {stone.journey.length} hitos temporales
              </span>
              <span
                className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform font-title tracking-wider uppercase text-xs"
                style={{ color: stone.colorHex }}
              >
                <span>VER HISTORIAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
