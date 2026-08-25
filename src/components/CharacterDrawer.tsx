import React from 'react';
import { useStore } from '@/store/useStore';
import { charactersData } from '@/data/charactersData';
import { timelineEras } from '@/data/timelineData';
import { 
  X, 
  Shield, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  ExternalLink, 
  MapPin, 
  Layers, 
  Globe2,
  Route
} from 'lucide-react';

export const CharacterDrawer: React.FC = () => {
  const { 
    selectedCharacterId, 
    setSelectedCharacterId, 
    setActiveScreen,
    setSelectedMapCharacterId 
  } = useStore();

  if (!selectedCharacterId) return null;

  const character = charactersData[selectedCharacterId];
  if (!character) return null;

  // Find all timeline events where this character appears
  const appearances: {
    eventId: string;
    eraTitle: string;
    mediaTitle: string;
    snippet: string;
  }[] = [];

  timelineEras.forEach((era) => {
    era.events.forEach((evt) => {
      if (evt.characters.includes(character.id) || evt.rawHtml.includes(`class="${character.cssClass}`)) {
        appearances.push({
          eventId: evt.id,
          eraTitle: era.cleanTitle,
          mediaTitle: evt.mediaTitle,
          snippet: evt.paragraphs[0]?.replace(/<[^>]*>?/gm, '').slice(0, 140) + '...' || '',
        });
      }
    });
  });

  const scrollToEvent = (eventId: string) => {
    setSelectedCharacterId(null);
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

  const handleTraceOnMap = () => {
    const charId = character.id;
    setSelectedCharacterId(null);
    setSelectedMapCharacterId(charId);
    setActiveScreen('map');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg h-full bg-[#0d0d0d] border-l border-[#262626] shadow-2xl p-6 overflow-y-auto flex flex-col font-din">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedCharacterId(null)}
          className="absolute top-4 right-4 p-2 rounded bg-[#141414] text-zinc-400 hover:text-white border border-[#2e2e2e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Character Header */}
        <div className="flex items-start gap-4 mb-5 pt-2">
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-xl font-black shadow-lg shrink-0 border border-white/20 font-title"
            style={{ backgroundColor: character.color }}
          >
            {(character.alias || character.name).slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#161616] border border-[#2f2f2f] text-zinc-400">
                {character.role}
              </span>
              <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-400">
                {character.status}
              </span>
            </div>
            <h2 className="text-2xl font-black text-white mt-1 font-title uppercase tracking-wide">{character.name}</h2>
            <p className="text-xs font-bold uppercase tracking-wider font-title" style={{ color: character.color }}>
              {character.alias || character.name}
            </p>
          </div>
        </div>

        {/* Action Button: Trace Character on Map */}
        <button
          onClick={handleTraceOnMap}
          className="w-full mb-5 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white font-bold font-title uppercase text-xs tracking-wider shadow-xl transition-all cursor-pointer hover:brightness-110 active:scale-[0.99] border border-white/20"
          style={{
            backgroundColor: character.color,
            boxShadow: `0 0 16px ${character.color}55`
          }}
        >
          <Route className="w-4 h-4 text-white animate-pulse" />
          <span>TRACE {(character.alias || character.name).toUpperCase()} ON GLOBAL MAP</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-[#141414] border border-[#27272a]">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Globe2 className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold uppercase text-[10px] tracking-wider font-title">Realm / Origin</span>
            </div>
            <p className="text-xs font-semibold text-zinc-200 truncate">{character.originLocation || 'Unknown'}</p>
          </div>

          <div className="p-3 rounded-lg bg-[#141414] border border-[#27272a]">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold uppercase text-[10px] tracking-wider font-title">Appearances</span>
            </div>
            <p className="text-xs font-semibold text-zinc-200">{appearances.length} timeline events</p>
          </div>
        </div>

        {/* Groups / Factions Section */}
        {character.groups && character.groups.length > 0 && (
          <div className="p-3.5 rounded-lg bg-[#141414] border border-[#27272a] mb-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-title">
              <Layers className="w-3.5 h-3.5 text-[#e62429]" />
              <span>FACTIONS & GROUPS</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {character.groups.map((grp) => (
                <span
                  key={grp}
                  className="px-2.5 py-1 rounded text-xs font-bold font-title tracking-wider uppercase bg-[#000000] border border-[#2e2e2e] text-zinc-200"
                >
                  {grp}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bio */}
        <div className="p-4 rounded-lg bg-[#141414] border border-[#27272a] mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#e62429] mb-1.5 font-title">
            S.H.I.E.L.D. DOSSIER
          </h3>
          <p className="text-xs text-zinc-300 leading-relaxed">{character.bio}</p>
        </div>

        {/* Timeline Path / Appearances */}
        <div className="flex-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5 font-title">
            <Sparkles className="w-3.5 h-3.5 text-[#e62429]" />
            <span>CHARACTER CHRONOLOGICAL JOURNEY</span>
          </h3>

          <div className="space-y-2.5">
            {appearances.length === 0 ? (
              <p className="text-xs text-zinc-500 italic">No direct chronological appearances recorded.</p>
            ) : (
              appearances.map((app, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToEvent(app.eventId)}
                  className="p-3 rounded-lg bg-[#141414] border border-[#27272a] hover:border-[#e62429] hover:bg-[#181818] cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#e62429] font-title tracking-wider">ERA: {app.eraTitle}</span>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      View in timeline <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white mb-1 font-title tracking-wide uppercase">{app.mediaTitle}</p>
                  <p className="text-[11px] text-zinc-400 line-clamp-2">{app.snippet}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
