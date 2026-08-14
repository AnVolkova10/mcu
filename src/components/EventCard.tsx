import React from 'react';
import { TimelineEvent } from '@/types';
import { useStore } from '@/store/useStore';
import { 
  Bookmark, 
  CheckCircle2, 
  Circle, 
  GitFork, 
  Tv, 
  Clapperboard, 
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

  const renderMediaIcon = () => {
    if (media?.type === 'series') {
      return <Tv className="w-3.5 h-3.5 text-sky-400 group-hover/media:text-white transition-colors" />;
    }
    if (media?.type === 'oneshot' || media?.type === 'special') {
      return <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover/media:text-white transition-colors" />;
    }
    return <Clapperboard className="w-3.5 h-3.5 text-[#e62429] group-hover/media:text-white transition-colors" />;
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const span = target.closest('span');
    if (!span) return;

    // Check Infinity Stones
    if (span.classList.contains('tesseract')) {
      setSelectedStoneId('space');
      return;
    }
    if (span.classList.contains('aether')) {
      setSelectedStoneId('reality');
      return;
    }
    if (span.classList.contains('power-stone')) {
      setSelectedStoneId('power');
      return;
    }
    if (span.classList.contains('mind-stone')) {
      setSelectedStoneId('mind');
      return;
    }
    if (span.classList.contains('eye-of-agamotto')) {
      setSelectedStoneId('time');
      return;
    }
    if (span.classList.contains('soul-stone')) {
      setSelectedStoneId('soul');
      return;
    }

    // Check Characters by matching CSS class names
    for (const className of Array.from(span.classList)) {
      if (charactersData[className]) {
        setSelectedCharacterId(className);
        return;
      }
    }
  };

  return (
    <article
      id={event.id}
      className={`group relative rounded-xl p-5 sm:p-6 transition-all duration-200 border ${
        event.isAlternativeTimeline
          ? 'bg-[#181818] border-amber-600/40 hover:border-amber-500 shadow-xl'
          : 'bg-[#141414] border-[#262626] hover:border-zinc-500 hover:bg-[#181818] shadow-xl'
      }`}
    >
      {/* Top Media & Tags Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#242424]">
        
        {/* Media Tag / Title with differentiated icon */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedMediaId(event.mediaKey)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#000000] hover:bg-[#e62429] text-white border border-[#333333] hover:border-[#e62429] transition-all group/media font-title tracking-wider text-xs cursor-pointer shadow-sm"
            title={`View details for ${event.mediaTitle}`}
          >
            {renderMediaIcon()}
            <span>{event.mediaTitle.toUpperCase()}</span>
            {media?.releaseYear && (
              <span className="text-zinc-400 group-hover/media:text-zinc-200 text-[11px] font-normal font-din">({media.releaseYear})</span>
            )}
          </button>

          {/* Phase Badge */}
          {event.mediaPhase && (
            <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#000000] border border-[#2a2a2a] text-zinc-400 select-none">
              {event.mediaPhase}
            </span>
          )}

          {/* Earth / Universe Designation Badge */}
          {event.isAlternativeTimeline ? (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="flex items-center gap-1 text-[10px] font-bold font-title tracking-wider px-2 py-0.5 rounded bg-amber-950/90 border border-amber-600 text-amber-300 select-none shadow-sm">
                <GitFork className="w-3 h-3" />
                <span>{event.earthDesignation || 'EARTH-616 BRANCH'}</span>
              </span>
            </div>
          ) : (
            <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#262626] text-zinc-400 select-none">
              EARTH-616
            </span>
          )}
        </div>

        {/* Read / Bookmark Action Controls */}
        <div className="flex items-center gap-1.5 ml-auto">
          {/* Read / Watched Toggle */}
          <button
            onClick={() => toggleReadEvent(event.id)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold font-title tracking-wider uppercase border transition-all cursor-pointer ${
              read
                ? 'bg-emerald-950 text-emerald-300 border-emerald-600 hover:bg-emerald-900'
                : 'bg-[#000000] text-zinc-400 border-[#2a2a2a] hover:text-white hover:border-zinc-500'
            }`}
            title={read ? 'Mark as unread' : 'Mark as read / watched'}
          >
            {read ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline text-[11px]">READ</span>
              </>
            ) : (
              <>
                <Circle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">UNREAD</span>
              </>
            )}
          </button>

          {/* Bookmark Toggle */}
          <button
            onClick={() => toggleBookmark(event.id)}
            className={`p-1.5 rounded border transition-all cursor-pointer ${
              bookmarked
                ? 'bg-[#e62429] text-white border-[#e62429] shadow-md hover:bg-[#c5191e]'
                : 'bg-[#000000] text-zinc-400 border-[#2a2a2a] hover:text-white hover:border-zinc-500'
            }`}
            title={bookmarked ? 'Remove bookmark' : 'Bookmark event'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-white' : ''}`} />
          </button>
        </div>
      </div>

      {/* Paragraphs with Interactive Clicks on Spans */}
      <div 
        onClick={handleContentClick}
        className="space-y-3.5 text-zinc-200 text-sm leading-relaxed mb-4 font-din mcu-html-content"
      >
        {event.paragraphs.map((p, idx) => (
          <p
            key={idx}
            dangerouslySetInnerHTML={{ __html: p }}
            className="text-justify selection:bg-[#e62429] selection:text-white"
          />
        ))}
      </div>

      {/* Footer Tags & Entity Links */}
      {(event.characters.length > 0 || event.stones.length > 0 || event.deaths.length > 0) && (
        <div className="pt-3 border-t border-[#222222] flex flex-wrap gap-2 items-center">
          
          {/* Infinity Stones Tag Pills */}
          {event.stones.map((sId) => {
            const stone = infinityStonesData.find((s) => s.id === sId);
            if (!stone) return null;
            return (
              <button
                key={sId}
                onClick={() => setSelectedStoneId(stone.id)}
                className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold font-title tracking-wider border transition-all hover:scale-105 cursor-pointer shadow-sm"
                style={{
                  backgroundColor: `${stone.colorHex}22`,
                  borderColor: `${stone.colorHex}77`,
                  color: stone.colorHex,
                }}
                title={`View journey for ${stone.name} (${stone.vessel})`}
              >
                <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{stone.vessel.toUpperCase()}</span>
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
                className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-[#000000] border border-[#2e2e2e] hover:border-[#e62429] hover:bg-[#1a1a1a] text-zinc-300 hover:text-white transition-all font-din cursor-pointer shadow-sm"
                title={`Open dossier for ${char.name}`}
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
            <div className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-[#330c0e] border border-[#e62429]/60 text-red-300 font-din select-none">
              <Skull className="w-3.5 h-3.5 text-[#e62429]" />
              <span>Casualties: {event.deaths.join(', ')}</span>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
