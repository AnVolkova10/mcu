import React from 'react';
import { TimelineEvent } from '@/types';
import { useStore } from '@/store/useStore';
import { 
  Bookmark, 
  CheckCircle2, 
  Circle, 
  GitFork, 
  Film, 
  Sparkles, 
  Skull, 
  Tag, 
  ExternalLink 
} from 'lucide-react';
import { charactersData } from '@/data/charactersData';
import { infinityStonesData } from '@/data/infinityStonesData';
import { mediaData } from '@/data/mediaData';

interface EventCardProps {
  event: TimelineEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const {
    isBookmarked,
    toggleBookmark,
    isRead,
    toggleReadEvent,
    setSelectedCharacterId,
    setSelectedStoneId,
    setSelectedMediaId,
  } = useStore();

  const bookmarked = isBookmarked(event.id);
  const read = isRead(event.id);
  const media = mediaData[event.mediaKey];

  return (
    <article
      id={event.id}
      className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
        event.isAlternativeTimeline
          ? 'bg-slate-900/70 border-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-amber-950/20'
          : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700/90 hover:bg-slate-900/90 shadow-lg shadow-black/40'
      } backdrop-blur-md`}
    >
      {/* Top Media & Tags Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
        
        {/* Media Tag / Title */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedMediaId(event.mediaKey)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-colors group/media"
          >
            <Film className="w-3.5 h-3.5 text-red-400 group-hover/media:scale-110 transition-transform" />
            <span>{event.mediaTitle}</span>
            {media?.releaseYear && (
              <span className="text-slate-400 text-[11px] font-normal">({media.releaseYear})</span>
            )}
          </button>

          {/* Phase Badge */}
          {event.mediaPhase && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
              {event.mediaPhase}
            </span>
          )}

          {/* Alternative Timeline Badge */}
          {event.isAlternativeTimeline && (
            <span className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300">
              <GitFork className="w-3 h-3" />
              <span>Línea Temporal Alternativa</span>
            </span>
          )}
        </div>

        {/* Read / Bookmark Action Controls */}
        <div className="flex items-center gap-1.5 ml-auto">
          {/* Read / Watched Toggle */}
          <button
            onClick={() => toggleReadEvent(event.id)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
              read
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-950/40 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
            title={read ? 'Marcar como no leído' : 'Marcar como leído / visto'}
          >
            {read ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline text-[11px]">Leído</span>
              </>
            ) : (
              <>
                <Circle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Por leer</span>
              </>
            )}
          </button>

          {/* Bookmark Toggle */}
          <button
            onClick={() => toggleBookmark(event.id)}
            className={`p-1.5 rounded-lg border transition-all ${
              bookmarked
                ? 'bg-red-500/20 text-red-400 border-red-500/50'
                : 'bg-slate-950/40 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
            title={bookmarked ? 'Quitar de guardados' : 'Guardar evento'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-red-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Paragraphs with Marvel Rich Highlighting */}
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed mb-4 mcu-html-content">
        {event.paragraphs.map((p, idx) => (
          <p
            key={idx}
            dangerouslySetInnerHTML={{ __html: p }}
            className="text-justify selection:bg-red-900 selection:text-white"
          />
        ))}
      </div>

      {/* Footer Tags & Entity Links */}
      {(event.characters.length > 0 || event.stones.length > 0 || event.deaths.length > 0) && (
        <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-2 items-center">
          
          {/* Infinity Stones Tag Pills */}
          {event.stones.map((sId) => {
            const stone = infinityStonesData.find((s) => s.id === sId);
            if (!stone) return null;
            return (
              <button
                key={sId}
                onClick={() => setSelectedStoneId(stone.id)}
                className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border transition-transform hover:scale-105"
                style={{
                  backgroundColor: `${stone.colorHex}22`,
                  borderColor: `${stone.colorHex}66`,
                  color: stone.colorHex,
                }}
              >
                <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{stone.vessel}</span>
              </button>
            );
          })}

          {/* Character Tag Pills */}
          {event.characters.map((cId) => {
            const char = charactersData[cId];
            if (!char) return null;
            return (
              <button
                key={cId}
                onClick={() => setSelectedCharacterId(char.id)}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all hover:bg-slate-800"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: char.color }}
                />
                <span>{char.alias || char.name}</span>
              </button>
            );
          })}

          {/* Fallen / Deaths Highlight */}
          {event.deaths.length > 0 && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-red-950/60 border border-red-800/60 text-red-400">
              <Skull className="w-3 h-3" />
              <span>Bajas: {event.deaths.join(', ')}</span>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
