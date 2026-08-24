import React from 'react';
import { useStore } from '@/store/useStore';
import { mediaData } from '@/data/mediaData';
import { timelineEras } from '@/data/timelineData';
import { 
  X, 
  Film, 
  Tv, 
  Clapperboard, 
  Sparkles, 
  Calendar, 
  Layers, 
  ArrowRight,
  Clock,
  Palette
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

  const renderModalIcon = () => {
    if (media.type === 'series') {
      return <Tv className="w-8 h-8 text-sky-400" />;
    }
    if (media.type === 'oneshot' || media.type === 'special') {
      return <Sparkles className="w-8 h-8 text-amber-400" />;
    }
    return <Clapperboard className="w-8 h-8 text-white" />;
  };

  const getFormatLabel = () => {
    if (media.type === 'series') return 'TV SERIES';
    if (media.type === 'oneshot') return 'SHORT FILM';
    if (media.type === 'special') return 'SPECIAL';
    return 'MOVIE';
  };

  const renderStudioBadge = () => {
    if (!media.studio) return null;
    const studioStyles: Record<string, string> = {
      'Marvel Studios': 'bg-red-950/90 border-red-600/70 text-red-300',
      'Disney+': 'bg-indigo-950/90 border-indigo-500/70 text-indigo-300',
      'ABC': 'bg-emerald-950/90 border-emerald-600/70 text-emerald-300',
      'Netflix': 'bg-orange-950/90 border-orange-600/70 text-orange-300',
      'Prime Video': 'bg-sky-950/90 border-sky-500/70 text-sky-300',
      'Freeform': 'bg-purple-950/90 border-purple-600/70 text-purple-300',
      'One Shot': 'bg-teal-950/90 border-teal-600/70 text-teal-300',
      'Fox': 'bg-amber-950/90 border-amber-600/70 text-amber-300',
      'Sony': 'bg-blue-950/90 border-blue-600/70 text-blue-300',
      'Other': 'bg-zinc-900 border-zinc-700 text-zinc-400',
    };
    const style = studioStyles[media.studio] || 'bg-zinc-900 border-zinc-700 text-zinc-400';
    return (
      <span className={`text-[10px] font-black font-title tracking-wider uppercase px-2.5 py-0.5 rounded border ${style} select-none shadow-sm`}>
        {media.studio}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity font-din">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0d0d0d] border border-[#27272a] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedMediaId(null)}
          className="absolute top-5 right-5 p-2 rounded bg-[#141414] text-zinc-400 hover:text-white border border-[#2e2e2e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shrink-0 border border-white/20"
            style={{ backgroundColor: media.posterColor }}
          >
            {renderModalIcon()}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#e62429] text-white">
                {media.phase}
              </span>
              {renderStudioBadge()}
              <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#161616] border border-[#2e2e2e] text-zinc-300">
                {getFormatLabel()}
              </span>
              {media.isAnimated && (
                <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2.5 py-0.5 rounded bg-purple-950 border border-purple-600 text-purple-300 flex items-center gap-1">
                  <Palette className="w-2.5 h-2.5" />
                  ANIMATION
                </span>
              )}
            </div>
            <h2 className="text-2xl font-black text-white mt-1.5 font-title uppercase tracking-wide">{media.title}</h2>
            <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5 font-din">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>Release Year: {media.releaseYear}</span>
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
            <span>TIMELINE EVENTS FROM THIS TITLE ({events.length})</span>
          </h3>

          <div className="space-y-3">
            {events.length === 0 ? (
              <p className="text-xs text-zinc-500 italic">No direct chronological events registered for this title.</p>
            ) : (
              events.map((evt, idx) => (
                <div
                  key={idx}
                  onClick={() => jumpToEvent(evt.eventId)}
                  className="p-4 rounded-xl bg-[#141414] border border-[#27272a] hover:border-[#e62429] hover:bg-[#181818] cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#e62429] font-title tracking-wider">
                      TIMELINE ERA: {evt.eraTitle}
                    </span>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      Jump to timeline event <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
