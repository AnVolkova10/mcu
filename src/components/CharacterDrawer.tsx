import React from 'react';
import { useStore } from '@/store/useStore';
import { charactersData } from '@/data/charactersData';
import { timelineEras } from '@/data/timelineData';
import { 
  X, 
  User, 
  Shield, 
  HeartPulse, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const CharacterDrawer: React.FC = () => {
  const { selectedCharacterId, setSelectedCharacterId, setActiveScreen } = useStore();

  if (!selectedCharacterId) return null;

  const character = charactersData[selectedCharacterId];
  if (!character) return null;

  // Find all events mentioning this character
  const appearances: { eraTitle: string; eventId: string; mediaTitle: string; snippet: string }[] = [];

  timelineEras.forEach((era) => {
    era.events.forEach((evt) => {
      if (evt.characters.includes(character.id) || evt.rawHtml.toLowerCase().includes(character.id)) {
        appearances.push({
          eraTitle: era.cleanTitle,
          eventId: evt.id,
          mediaTitle: evt.mediaTitle,
          snippet: evt.paragraphs[0] ? evt.paragraphs[0].replace(/<[^>]+>/g, '').slice(0, 140) + '...' : '',
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg h-full bg-[#0d0d0d] border-l border-[#262626] shadow-2xl p-6 overflow-y-auto flex flex-col font-din">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedCharacterId(null)}
          className="absolute top-4 right-4 p-2 rounded bg-[#141414] text-zinc-400 hover:text-white border border-[#2e2e2e] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Character Header */}
        <div className="flex items-start gap-4 mb-6 pt-2">
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

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-[#141414] border border-[#27272a]">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Shield className="w-3.5 h-3.5 text-[#e62429]" />
              <span className="font-semibold uppercase text-[10px] tracking-wider font-title">Afiliación</span>
            </div>
            <p className="text-xs font-semibold text-zinc-200">{character.affiliation}</p>
          </div>

          <div className="p-3 rounded-lg bg-[#141414] border border-[#27272a]">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold uppercase text-[10px] tracking-wider font-title">Apariciones</span>
            </div>
            <p className="text-xs font-semibold text-zinc-200">{appearances.length} eventos registrados</p>
          </div>
        </div>

        {/* Bio */}
        <div className="p-4 rounded-lg bg-[#141414] border border-[#27272a] mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#e62429] mb-1.5 font-title">
            EXPEDIENTE S.H.I.E.L.D.
          </h3>
          <p className="text-xs text-zinc-300 leading-relaxed">{character.bio}</p>
        </div>

        {/* Timeline Path / Appearances */}
        <div className="flex-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5 font-title">
            <Sparkles className="w-3.5 h-3.5 text-[#e62429]" />
            <span>RUTA CRONOLÓGICA DEL PERSONAJE</span>
          </h3>

          <div className="space-y-2.5">
            {appearances.length === 0 ? (
              <p className="text-xs text-zinc-500 italic">No hay apariciones registradas directamente.</p>
            ) : (
              appearances.map((app, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToEvent(app.eventId)}
                  className="p-3 rounded-lg bg-[#141414] border border-[#27272a] hover:border-[#e62429] hover:bg-[#181818] cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#e62429] font-title tracking-wider">AÑO: {app.eraTitle}</span>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      Ver en cronología <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
