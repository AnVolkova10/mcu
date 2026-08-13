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
        el.classList.add('ring-2', 'ring-red-500', 'transition-all');
        setTimeout(() => el.classList.remove('ring-2', 'ring-red-500'), 3000);
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedMediaId(null)}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shrink-0 border border-white/20"
            style={{ backgroundColor: media.posterColor }}
          >
            <Film className="w-8 h-8" />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded bg-red-950/80 border border-red-800 text-red-300">
                {media.phase}
              </span>
              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                {media.type}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1.5">{media.title}</h2>
            <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Año de Estreno: {media.releaseYear}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 mb-6 leading-relaxed bg-slate-900/50 p-4 rounded-2xl border border-slate-800/80">
          {media.description}
        </p>

        {/* Timeline Events from this media */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-red-400" />
            <span>Eventos de esta obra en la cronología ({events.length})</span>
          </h3>

          <div className="space-y-3">
            {events.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No hay eventos directos registrados para este título.</p>
            ) : (
              events.map((evt, idx) => (
                <div
                  key={idx}
                  onClick={() => jumpToEvent(evt.eventId)}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black text-red-400">
                      Año en Cronología: {evt.eraTitle}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      Ir al punto en la cronología <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1.5 mcu-html-content line-clamp-4">
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
