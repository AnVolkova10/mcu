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
        el.classList.add('ring-2', 'ring-red-500', 'transition-all');
        setTimeout(() => el.classList.remove('ring-2', 'ring-red-500'), 3000);
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg h-full bg-slate-950 border-l border-slate-800 shadow-2xl p-6 overflow-y-auto flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedCharacterId(null)}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Character Header */}
        <div className="flex items-start gap-4 mb-6 pt-2">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg shrink-0 border border-white/20"
            style={{ backgroundColor: character.color }}
          >
            {(character.alias || character.name).slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                {character.role}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                {character.status}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mt-1">{character.name}</h2>
            <p className="text-sm font-semibold" style={{ color: character.color }}>
              {character.alias || character.name}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Shield className="w-3.5 h-3.5 text-red-400" />
              <span>Afiliación</span>
            </div>
            <p className="text-xs font-semibold text-slate-200">{character.affiliation}</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Apariciones</span>
            </div>
            <p className="text-xs font-semibold text-slate-200">{appearances.length} eventos en línea de tiempo</p>
          </div>
        </div>

        {/* Bio */}
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Expediente S.H.I.E.L.D.
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">{character.bio}</p>
        </div>

        {/* Timeline Path / Appearances */}
        <div className="flex-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Ruta Cronológica del Personaje</span>
          </h3>

          <div className="space-y-2.5">
            {appearances.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No hay apariciones registradas directamente.</p>
            ) : (
              appearances.map((app, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToEvent(app.eventId)}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-red-400">Año: {app.eraTitle}</span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      Ver en cronología <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 mb-1">{app.mediaTitle}</p>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{app.snippet}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
