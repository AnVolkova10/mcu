/** The version of each character the visitor picked last, kept in this browser. */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface VersionsState {
  /** Character id → universe id. */
  chosen: Record<string, string>;
  choose: (character: string, universe: string) => void;
}

export const useVersions = create<VersionsState>()(
  persist(
    (set) => ({
      chosen: {},
      choose: (character, universe) => set((s) => ({ chosen: { ...s.chosen, [character]: universe } })),
    }),
    { name: 'mcu-character-versions', partialize: (s) => ({ chosen: s.chosen }) },
  ),
);

/** The version to show: the one the filters ask for, then the one picked last, then the first available. */
export const pickVersion = (available: readonly string[], filtered: readonly string[], chosen?: string): string | undefined =>
  available.find((u) => filtered.includes(u)) ?? (chosen && available.includes(chosen) ? chosen : available[0]);
