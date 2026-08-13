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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Reliquias de la Creación Cósmica</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
          Las 6 Gemas del Infinito
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Antes de la creación misma, existían seis singularidades. Luego el universo explotó y los restos de estos sistemas fueron concentrados en lingotes concentrados: las Gemas del Infinito.
        </p>
      </div>

      {/* Infinity Stones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {infinityStonesData.map((stone) => (
          <div
            key={stone.id}
            onClick={() => setSelectedStoneId(stone.id)}
            className="group relative rounded-3xl bg-slate-900/80 border p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer backdrop-blur-md overflow-hidden"
            style={{
              borderColor: `${stone.colorHex}44`,
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: stone.colorHex }}
            />

            <div>
              {/* Stone Orb Icon */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl border border-white/20 animate-glow"
                  style={{
                    backgroundColor: stone.colorHex,
                    color: stone.colorHex,
                  }}
                >
                  <Sparkles className="w-7 h-7 text-white" />
                </div>

                <span
                  className="text-xs font-black px-2.5 py-1 rounded-full border"
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
              <h3 className="text-xl font-black text-white group-hover:text-white transition-colors mb-1">
                {stone.name}
              </h3>
              <p className="text-xs font-semibold text-slate-400 mb-3">
                Contenedor: <span className="text-slate-200">{stone.vessel}</span>
              </p>

              {/* Power Summary */}
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                {stone.powerDescription}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">
                {stone.journey.length} hitos temporales
              </span>
              <span
                className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                style={{ color: stone.colorHex }}
              >
                <span>Ver historial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
