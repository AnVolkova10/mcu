// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import type { SeriesInput } from '@/domain/schema';

export const series = {
  'agents-of-shield': { title: 'Agents of S.H.I.E.L.D.', shortTitle: 'Agents of S.H.I.E.L.D.', network: 'ABC', tmdbId: 1403 },
  inhumans: { title: 'Inhumans', shortTitle: 'Inhumans', network: 'ABC', tmdbId: 68716 },
  'agent-carter': { title: 'Agent Carter', shortTitle: 'Agent Carter', network: 'ABC', tmdbId: 61550 },
  daredevil: { title: 'Daredevil', shortTitle: 'Daredevil', network: 'Netflix', tmdbId: 61889 },
  'jessica-jones': { title: 'Jessica Jones', shortTitle: 'Jessica Jones', network: 'Netflix', tmdbId: 38472 },
  'luke-cage': { title: 'Luke Cage', shortTitle: 'Luke Cage', network: 'Netflix', tmdbId: 62126 },
  'iron-fist': { title: 'Iron Fist', shortTitle: 'Iron Fist', network: 'Netflix', tmdbId: 62127 },
  'the-defenders': { title: 'The Defenders', shortTitle: 'The Defenders', network: 'Netflix', tmdbId: 62285 },
  'the-punisher': { title: 'The Punisher', shortTitle: 'The Punisher', network: 'Netflix', tmdbId: 67178 },
  'cloak-and-dagger': { title: 'Cloak & Dagger', shortTitle: 'Cloak & Dagger', network: 'Freeform', tmdbId: 66190 },
  'eyes-of-wakanda': { title: 'Eyes of Wakanda', shortTitle: 'Eyes of Wakanda', network: 'Disney+', animated: true, tmdbId: 241388 },
  'spider-noir': { title: 'Spider-Noir', shortTitle: 'Spider-Noir', network: 'Prime Video', tmdbId: 220102 },
  'x-men-tas': { title: 'X-Men: The Animated Series', shortTitle: 'X-Men: TAS', network: 'Fox Kids', animated: true, tmdbId: 4574 },
  'spider-man-tas': { title: 'Spider-Man: The Animated Series', shortTitle: 'Spider-Man: TAS', network: 'Fox Kids', animated: true, tmdbId: 888 },
  'fantastic-four-tas': { title: 'Fantastic Four: The Animated Series', shortTitle: 'Fantastic Four: TAS', network: 'Syndication', animated: true, tmdbId: 2901 },
  'iron-man-tas': { title: 'Iron Man: The Animated Series', shortTitle: 'Iron Man: TAS', network: 'Syndication', animated: true, tmdbId: 3097 },
  'incredible-hulk-tas': { title: 'The Incredible Hulk: The Animated Series', shortTitle: 'Hulk: TAS', network: 'UPN', animated: true, tmdbId: 6332 },
  'x-men-97': { title: "X-Men '97", shortTitle: "X-Men '97", network: 'Disney+', animated: true, tmdbId: 138502 },
} as const satisfies Record<string, SeriesInput>;

export type SeriesId = keyof typeof series;
