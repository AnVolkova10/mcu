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
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Bookmark className="w-8 h-8 text-red-500 fill-red-500" />
            <span>Eventos Guardados ({bookmarkedEvents.length})</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Tu lista de momentos destacados e hitos clave del MCU guardados para consulta rápida.
          </p>
        </div>

        <button
          onClick={() => setActiveScreen('timeline')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Cronología</span>
        </button>
      </div>

      {/* Bookmarked Events List */}
      {bookmarkedEvents.length === 0 ? (
        <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
          <BookmarkX className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No tienes eventos guardados</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-5">
            Haz clic en el ícono de marcador en cualquier tarjeta de la cronología para guardar eventos aquí.
          </p>
          <button
            onClick={() => setActiveScreen('timeline')}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-lg shadow-red-600/30"
          >
            Explorar Cronología
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {bookmarkedEvents.map(({ event, eraTitle }) => (
            <div key={event.id} className="relative">
              <div className="text-xs font-black text-red-400 mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Año en Cronología: {eraTitle}</span>
              </div>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
