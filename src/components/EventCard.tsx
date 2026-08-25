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
  ExternalLink,
  MapPin 
} from 'lucide-react';
import { charactersData, allCharacters } from '@/data/charactersData';
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
    setActiveScreen,
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
    const el = target.closest('strong, span, em, a');
    if (!el) return;

    // Check Infinity Stones
    if (el.classList.contains('tesseract')) {
      setSelectedStoneId('space');
      return;
    }
    if (el.classList.contains('aether')) {
      setSelectedStoneId('reality');
      return;
    }
    if (el.classList.contains('power-stone')) {
      setSelectedStoneId('power');
      return;
    }
    if (el.classList.contains('mind-stone')) {
      setSelectedStoneId('mind');
      return;
    }
    if (el.classList.contains('eye-of-agamotto')) {
      setSelectedStoneId('time');
      return;
    }
    if (el.classList.contains('soul-stone')) {
      setSelectedStoneId('soul');
      return;
    }

    // Check Characters by matching character ID or CSS class name
    for (const className of Array.from(el.classList)) {
      if (charactersData[className]) {
        setSelectedCharacterId(className);
        return;
      }
      const charByCss = allCharacters.find((c) => c.cssClass === className);
      if (charByCss) {
        setSelectedCharacterId(charByCss.id);
        return;
      }
    }
  };

  const renderStudioBadge = () => {
    if (!media?.studio) return null;
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
      <span className={`text-[10px] font-black font-title tracking-wider uppercase px-2 py-0.5 rounded border ${style} select-none shadow-sm`}>
        {media.studio}
      </span>
    );
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

          {/* Network / Studio / Platform Badge */}
          {renderStudioBadge()}

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
      {((event.locations && event.locations.length > 0) || event.characters.length > 0 || event.stones.length > 0 || event.deaths.length > 0) && (
        <div className="pt-3 border-t border-[#222222] flex flex-wrap gap-2 items-center">
          
          {/* Location Pills */}
          {event.locations && event.locations.map((loc, lIdx) => (
            <button
              key={`loc-${lIdx}`}
              onClick={() => setActiveScreen('map')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-[#0a192f]/80 hover:bg-[#0f284c] border border-sky-800/60 hover:border-sky-500 text-sky-300 hover:text-white transition-all font-din cursor-pointer shadow-sm group/loc"
              title={`View ${loc.name} on Global Tactical Map`}
            >
              <MapPin className="w-3 h-3 text-sky-400 group-hover/loc:scale-110 transition-transform" />
              <span>{loc.cityOrRegion ? `${loc.cityOrRegion}, ${loc.countryOrRealm}` : `${loc.name}, ${loc.countryOrRealm}`}</span>
              {loc.planet && loc.planet !== 'Earth' && (
                <span className="text-[10px] text-sky-400/80 font-normal">({loc.planet})</span>
              )}
            </button>
          ))}

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
