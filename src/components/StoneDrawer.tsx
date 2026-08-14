import React from 'react';
import { useStore } from '@/store/useStore';
import { infinityStonesData } from '@/data/infinityStonesData';
import { 
  X, 
  Sparkles, 
  MapPin, 
  UserCheck, 
  ShieldCheck, 
  Zap,
  Clock
} from 'lucide-react';

export const StoneDrawer: React.FC = () => {
  const { selectedStoneId, setSelectedStoneId } = useStore();

  if (!selectedStoneId) return null;

  const stone = infinityStonesData.find((s) => s.id === selectedStoneId);
  if (!stone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0d0d0d] border rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto font-din"
        style={{ borderColor: `${stone.colorHex}66` }}
      >
        {/* Glowing Ambient Top */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-20 rounded-full pointer-events-none"
          style={{ backgroundColor: stone.colorHex }}
        />

        {/* Close Button */}
        <button
          onClick={() => setSelectedStoneId(null)}
          className="absolute top-5 right-5 p-2 rounded bg-[#141414] text-zinc-400 hover:text-white border border-[#2e2e2e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Stone Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl shrink-0 border border-white/20 animate-glow"
            style={{ 
              backgroundColor: stone.colorHex,
              color: stone.colorHex
            }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <div>
            <span 
              className="text-xs font-bold font-title tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{
                backgroundColor: `${stone.colorHex}1a`,
                borderColor: `${stone.colorHex}55`,
                color: stone.colorHex
              }}
            >
              INFINITY STONE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 font-title uppercase tracking-wide">{stone.name}</h2>
            <p className="text-sm font-semibold text-zinc-400 mt-0.5">
              Vessel / Container: <span className="text-white font-bold">{stone.vessel}</span>
            </p>
          </div>
        </div>

        {/* Power & Description */}
        <div className="p-4 rounded-xl bg-[#141414] border border-[#27272a] mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-title">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>COSMIC POWER & ABILITIES</span>
          </div>
          <p className="text-xs text-zinc-200 leading-relaxed">{stone.powerDescription}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-lg bg-[#141414] border border-[#27272a]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1 font-title">First MCU Appearance:</span>
            <p className="text-xs font-bold text-zinc-200">{stone.firstAppearance}</p>
          </div>
          <div className="p-3.5 rounded-lg bg-[#141414] border border-[#27272a]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1 font-title">Current Canon Status:</span>
            <p className="text-xs font-bold text-zinc-200">{stone.currentStatus}</p>
          </div>
        </div>

        {/* Chronological Journey */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4 flex items-center gap-2 font-title">
            <Clock className="w-4 h-4 text-[#e62429]" />
            <span>HISTORICAL JOURNEY & BEARERS THROUGH TIME</span>
          </h3>

          <div className="relative pl-6 border-l border-[#27272a] space-y-4">
            {stone.journey.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Node Bullet */}
                <div
                  className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#0d0d0d]"
                  style={{ backgroundColor: stone.colorHex }}
                />
                
                <div className="p-3.5 rounded-lg bg-[#141414] border border-[#27272a]">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <span 
                      className="text-xs font-bold font-title tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${stone.colorHex}22`, color: stone.colorHex }}
                    >
                      {step.era}
                    </span>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {step.location}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                    <UserCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Bearer: {step.holder}</span>
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.eventSummary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
