import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ActiveScreen, TimelineCategory, TimelineFilterState } from '@/types';

interface AppState {
  // Navigation
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;

  // Selected Entities for Modals / Drawers
  selectedCharacterId: string | null;
  setSelectedCharacterId: (id: string | null) => void;

  selectedMediaId: string | null;
  setSelectedMediaId: (id: string | null) => void;

  selectedStoneId: 'space' | 'reality' | 'power' | 'mind' | 'time' | 'soul' | null;
  setSelectedStoneId: (id: 'space' | 'reality' | 'power' | 'mind' | 'time' | 'soul' | null) => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Filters
  filters: TimelineFilterState;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: TimelineCategory | 'all') => void;
  setSelectedCharacterFilter: (charId: string | null) => void;
  setSelectedGroupFilter: (group: string | null) => void;
  setSelectedOriginFilter: (origin: string | null) => void;
  setSelectedMediaFilter: (mediaId: string | null) => void;
  setSelectedStoneFilter: (stoneId: string | null) => void;
  setSelectedPhaseFilter: (phase: string | null) => void;
  toggleOnlyAlternative: () => void;
  toggleOnlyDeaths: () => void;
  resetFilters: () => void;

  // Bookmarks & Read Tracker
  bookmarkedEventIds: string[];
  toggleBookmark: (eventId: string) => void;
  isBookmarked: (eventId: string) => boolean;

  readEventIds: string[];
  toggleReadEvent: (eventId: string) => void;
  isRead: (eventId: string) => boolean;
}

const initialFilters: TimelineFilterState = {
  searchQuery: '',
  selectedCharacter: null,
  selectedGroup: null,
  selectedOrigin: null,
  selectedMedia: null,
  selectedStone: null,
  selectedPhase: null,
  selectedCategory: 'all',
  onlyAlternative: false,
  onlyCanon: false,
  onlyDeaths: false,
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      activeScreen: 'timeline',
      setActiveScreen: (activeScreen) => set({ activeScreen }),

      selectedCharacterId: null,
      setSelectedCharacterId: (selectedCharacterId) => set({ selectedCharacterId }),

      selectedMediaId: null,
      setSelectedMediaId: (selectedMediaId) => set({ selectedMediaId }),

      selectedStoneId: null,
      setSelectedStoneId: (selectedStoneId) => set({ selectedStoneId }),

      isSearchOpen: false,
      setIsSearchOpen: (isSearchOpen) => set({ isSearchOpen }),

      filters: initialFilters,

      setSearchQuery: (query) =>
        set((state) => ({
          filters: { ...state.filters, searchQuery: query },
        })),

      setSelectedCategory: (category) =>
        set((state) => ({
          filters: { ...state.filters, selectedCategory: category },
        })),

      setSelectedCharacterFilter: (charId) =>
        set((state) => ({
          filters: { ...state.filters, selectedCharacter: charId },
        })),

      setSelectedGroupFilter: (group) =>
        set((state) => ({
          filters: { ...state.filters, selectedGroup: group },
        })),

      setSelectedOriginFilter: (origin) =>
        set((state) => ({
          filters: { ...state.filters, selectedOrigin: origin },
        })),

      setSelectedMediaFilter: (mediaId) =>
        set((state) => ({
          filters: { ...state.filters, selectedMedia: mediaId },
        })),

      setSelectedStoneFilter: (stoneId) =>
        set((state) => ({
          filters: { ...state.filters, selectedStone: stoneId },
        })),

      setSelectedPhaseFilter: (phase) =>
        set((state) => ({
          filters: { ...state.filters, selectedPhase: phase },
        })),

      toggleOnlyAlternative: () =>
        set((state) => ({
          filters: {
            ...state.filters,
            onlyAlternative: !state.filters.onlyAlternative,
          },
        })),

      toggleOnlyDeaths: () =>
        set((state) => ({
          filters: {
            ...state.filters,
            onlyDeaths: !state.filters.onlyDeaths,
          },
        })),

      resetFilters: () =>
        set(() => ({
          filters: initialFilters,
        })),

      bookmarkedEventIds: [],
      toggleBookmark: (eventId) => {
        const { bookmarkedEventIds } = get();
        if (bookmarkedEventIds.includes(eventId)) {
          set({
            bookmarkedEventIds: bookmarkedEventIds.filter((id) => id !== eventId),
          });
        } else {
          set({
            bookmarkedEventIds: [...bookmarkedEventIds, eventId],
          });
        }
      },
      isBookmarked: (eventId) => get().bookmarkedEventIds.includes(eventId),

      readEventIds: [],
      toggleReadEvent: (eventId) => {
        const { readEventIds } = get();
        if (readEventIds.includes(eventId)) {
          set({
            readEventIds: readEventIds.filter((id) => id !== eventId),
          });
        } else {
          set({
            readEventIds: [...readEventIds, eventId],
          });
        }
      },
      isRead: (eventId) => get().readEventIds.includes(eventId),
    }),
    {
      name: 'mcu-timeline-storage',
      partialize: (state) => ({
        bookmarkedEventIds: state.bookmarkedEventIds,
        readEventIds: state.readEventIds,
      }),
    }
  )
);
