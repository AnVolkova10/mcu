// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import type { BranchInput, UniverseInput } from '@/domain/schema';

export const universes = {
  'earth-616': {
    name: 'Earth-616',
    label: 'Sacred Timeline',
    short: '616',
    color: '#c98500',
    description: 'The main reality of the Marvel Cinematic Universe, from the dawn of the Infinity Stones to the present day.',
  },
  'earth-10005': {
    name: 'Earth-10005',
    label: 'Fox X-Men',
    short: '10005',
    color: '#3987e5',
    description: 'The reality of the 20th Century Fox X-Men films, rewritten in 1973 by the events of Days of Future Past.',
  },
  'earth-92131': {
    name: 'Earth-92131',
    label: 'Animated 90s',
    short: '92131',
    color: '#d55181',
    description: "The shared reality of the 1990s Marvel animated series and its continuation, X-Men '97.",
  },
  'earth-90214': {
    name: 'Earth-90214',
    label: 'Noir',
    short: '90214',
    color: '#c7c7cf',
    description: 'A darker, Depression-era reality where Spider-Noir prowls 1930s New York.',
  },
} as const satisfies Record<string, UniverseInput>;

export type UniverseId = keyof typeof universes;

/** Realities that split from a universe at a given year. */
export const branches = {
  'chronicom-war': {
    universe: 'earth-616',
    name: 'Chronicom time war',
    divergence: 1931,
    description: 'Agents of S.H.I.E.L.D. chase the Chronicoms through the 20th century, splitting off a branched reality.',
  },
  'shattered-earth-2091': {
    universe: 'earth-616',
    name: 'Shattered Earth',
    divergence: 2018,
    description: 'The possible future where Earth is broken apart and the survivors live under Kree rule in the Lighthouse.',
  },
  'last-panther-future': {
    universe: 'earth-616',
    name: "The Last Panther's future",
    divergence: 1896,
    description: 'A future in which an isolated Wakanda falls to the Horde, until its last Black Panther travels back to 1896.',
  },
  'fox-original': {
    universe: 'earth-10005',
    name: 'Original timeline',
    divergence: 1973,
    description: 'The timeline erased by Days of Future Past: Weapon X, Three Mile Island and the Sentinel apocalypse of 2023.',
  },
} as const satisfies Record<string, BranchInput>;

export type BranchId = keyof typeof branches;
