/** What the visitor keeps in this browser: saved events and read marks. Nothing else is persisted. */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { legacyEventIds } from './legacyEventIds';

interface LibraryState {
  saved: string[];
  read: string[];
  toggleSaved: (eventId: string) => void;
  toggleRead: (eventId: string) => void;
}

const toggle = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

export const useLibrary = create<LibraryState>()(
  persist(
    (set) => ({
      saved: [],
      read: [],
      toggleSaved: (id) => set((s) => ({ saved: toggle(s.saved, id) })),
      toggleRead: (id) => set((s) => ({ read: toggle(s.read, id) })),
    }),
    {
      // Same key as v2, so existing bookmarks survive the upgrade.
      name: 'mcu-timeline-storage',
      version: 3,
      partialize: (s) => ({ saved: s.saved, read: s.read }),
      migrate: (persisted, version) => {
        if (version >= 3) return persisted as LibraryState;
        const old = (persisted ?? {}) as { bookmarkedEventIds?: string[]; readEventIds?: string[] };
        const upgrade = (ids: string[] = []) => ids.map((id) => legacyEventIds[id]).filter(Boolean);
        return { saved: upgrade(old.bookmarkedEventIds), read: upgrade(old.readEventIds) } as LibraryState;
      },
    },
  ),
);
