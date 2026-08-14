import React from 'react';
import { useStore } from '@/store/useStore';
import { timelineEras } from '@/data/timelineData';
import { EventCard } from '@/components/EventCard';
import { Bookmark, Clock, ArrowLeft, BookmarkX } from 'lucide-react';
import { TimelineEvent } from '@/types';

export const BookmarksScreen: React.FC = () => {
  const { bookmarkedEventIds, setActiveScreen } = useStore();

  // Find all bookmarked events
  const bookmarkedEvents: { event: TimelineEvent; eraTitle: string }[] = [];

  timelineEras.forEach((era) => {
    era.events.forEach((evt) => {
      if (bookmarkedEventIds.includes(evt.id)) {
        bookmarkedEvents.push({
          event: evt,
          eraTitle: era.cleanTitle,
        });
      }
    });
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wider flex items-center gap-3 font-title uppercase">
            <Bookmark className="w-8 h-8 text-[#e62429] fill-[#e62429]" />
            <span>EVENTOS GUARDADOS ({bookmarkedEvents.length})</span>
          </h1>
          <p className="text-sm text-zinc-400 mt-1 font-din">
            Tu lista de momentos destacados e hitos clave del MCU guardados para consulta rápida.
          </p>
        </div>

        <button
          onClick={() => setActiveScreen('timeline')}
          className="flex items-center gap-2 px-4 py-2 rounded bg-[#141414] hover:bg-[#e62429] text-white text-xs font-bold font-title tracking-wider uppercase border border-[#2e2e2e] hover:border-[#e62429] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VOLVER A LA CRONOLOGÍA</span>
        </button>
      </div>

      {/* Bookmarked Events List */}
      {bookmarkedEvents.length === 0 ? (
        <div className="text-center py-20 bg-[#141414] border border-[#27272a] rounded-xl p-8">
          <BookmarkX className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-1 font-title uppercase">No tienes eventos guardados</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-5 font-din">
            Haz clic en el ícono de marcador en cualquier tarjeta de la cronología para guardar eventos aquí.
          </p>
          <button
            onClick={() => setActiveScreen('timeline')}
            className="px-4 py-2 rounded bg-[#e62429] hover:bg-[#c5191e] text-white text-xs font-bold font-title tracking-wider uppercase transition-all shadow-lg"
          >
            EXPLORAR CRONOLOGÍA
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {bookmarkedEvents.map(({ event, eraTitle }) => (
            <div key={event.id} className="relative">
              <div className="text-xs font-bold text-[#e62429] mb-2 flex items-center gap-1.5 font-title tracking-wider uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>AÑO EN CRONOLOGÍA: {eraTitle}</span>
              </div>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
