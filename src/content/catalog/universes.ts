// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import type { BranchInput, UniverseInput } from '@/domain/schema';

export const universes = {
  'earth-616': {
    name: 'Earth-616',
    label: 'Sacred Timeline',
    short: '616',
    color: '#f5a524',
    description: 'The main reality of the Marvel Cinematic Universe, from the dawn of the Infinity Stones to the present day.',
  },
  'earth-10005': {
    name: 'Earth-10005',
    label: 'Fox X-Men',
    short: '10005',
    color: '#38bdf8',
    description: 'The reality of the 20th Century Fox X-Men films, rewritten in 1973 by the events of Days of Future Past.',
  },
  'earth-92131': {
    name: 'Earth-92131',
    label: 'Animated 90s',
    short: '92131',
    color: '#e879f9',
    description: "The shared reality of the 1990s Marvel animated series and its continuation, X-Men '97.",
  },
  'earth-62533': {
    name: 'Earth-62533',
    label: 'Noir',
    short: '62533',
    color: '#c7c7cf',
    description: 'A darker, Depression-era reality where The Spider prowls 1930s New York.',
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
    erased: true,
    description: 'The timeline erased by Days of Future Past: Weapon X, Three Mile Island and the Sentinel apocalypse of 2023.',
  },
  'bishop-future': {
    universe: 'earth-92131',
    name: "Bishop's future",
    divergence: 1992,
    description: 'The 2055 that Bishop comes from: a killing in Washington in the 1990s is blamed on mutants, and the Sentinels round them up and then turn on humans too. Once Kelly survives, a plague sweeps it instead, until Bishop and Cable stop the virus in 1993. Later Forge sends Bishop and his sister Shard after Trevor Fitzroy, and then Shard alone after Bishop when he is lost in time.',
  },
  'first-1993': {
    universe: 'earth-92131',
    name: 'The first 1993',
    divergence: 1993,
    erased: true,
    description: "The 1993 in which Bishop destroys Apocalypse's plague before Wolverine's healing can make the antibodies, and Apocalypse kills the X-Men. Cable erases it by going back to the moment Bishop arrives.",
  },
  'xavier-dies-1959': {
    universe: 'earth-92131',
    name: 'A world without Xavier',
    divergence: 1959,
    erased: true,
    description: "The timeline in which Trevor Fitzroy's bomb kills the young Charles Xavier in 1959: there are no X-Men, Magneto's rebels fight a war in the ruins of New York, and Master Mold rules 2055. Bishop and the married Wolverine and Storm of this world erase it by going back and saving Xavier.",
  },
} as const satisfies Record<string, BranchInput>;

export type BranchId = keyof typeof branches;
