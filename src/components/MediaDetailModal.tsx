import React from 'react';
import { useStore } from '@/store/useStore';
import { mediaData } from '@/data/mediaData';
import { timelineEras } from '@/data/timelineData';
import { 
  X, 
  Film, 
  Calendar, 
  Layers, 
  ArrowRight,
  Clock
} from 'lucide-react';

export const MediaDetailModal: React.FC = () => {
  const { selectedMediaId, setSelectedMediaId, setActiveScreen } = useStore();

  if (!selectedMediaId) return null;

  const media = mediaData[selectedMediaId];
  if (!media) return null;

  // Find all timeline events associated with this media
  const events: { eraTitle: string; eventId: string; paragraphs: string[]; isAlt: boolean }[] = [];

  timelineEras.forEach((era) => {
    era.events.forEach((evt) => {
      if (evt.mediaKey === media.id || evt.rawClasses.includes(media.id)) {
        events.push({
          eraTitle: era.cleanTitle,
          eventId: evt.id,
          paragraphs: evt.paragraphs,
          isAlt: evt.isAlternativeTimeline,
        });
      }
    });
  });

  const jumpToEvent = (eventId: string) => {
    setSelectedMediaId(null);
    setActiveScreen('timeline');
    setTimeout(() => {
      const el = document.getElementById(eventId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-[#e62429]', 'transition-all');
        setTimeout(() => el.classList.remove('ring-2', 'ring-[#e62429]'), 3000);
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity font-din">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0d0d0d] border border-[#27272a] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedMediaId(null)}
          className="absolute top-5 right-5 p-2 rounded bg-[#141414] text-zinc-400 hover:text-white border border-[#2e2e2e] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shrink-0 border border-white/20"
            style={{ backgroundColor: media.posterColor }}
          >
            <Film className="w-8 h-8" />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#e62429] text-white">
                {media.phase}
              </span>
              <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#161616] border border-[#2e2e2e] text-zinc-400">
                {media.type}
              </span>
            </div>
            <h2 className="text-2xl font-black text-white mt-1.5 font-title uppercase tracking-wide">{media.title}</h2>
            <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5 font-din">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>Año de Estreno: {media.releaseYear}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-zinc-300 mb-6 leading-relaxed bg-[#141414] p-4 rounded-xl border border-[#27272a]">
          {media.description}
        </p>

        {/* Timeline Events from this media */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2 font-title">
            <Clock className="w-4 h-4 text-[#e62429]" />
            <span>EVENTOS DE ESTA OBRA EN LA CRONOLOGÍA ({events.length})</span>
          </h3>

          <div className="space-y-3">
            {events.length === 0 ? (
              <p className="text-xs text-zinc-500 italic">No hay eventos directos registrados para este título.</p>
            ) : (
              events.map((evt, idx) => (
                <div
                  key={idx}
                  onClick={() => jumpToEvent(evt.eventId)}
                  className="p-4 rounded-xl bg-[#141414] border border-[#27272a] hover:border-[#e62429] hover:bg-[#181818] cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#e62429] font-title tracking-wider">
                      AÑO EN CRONOLOGÍA: {evt.eraTitle}
                    </span>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      Ir al punto en la cronología <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="text-xs text-zinc-300 space-y-1.5 mcu-html-content line-clamp-4">
                    {evt.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
