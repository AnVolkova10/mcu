// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import type { SeriesInput } from '@/domain/schema';

export const series = {
  'agents-of-shield': {
    title: 'Agents of S.H.I.E.L.D.',
    shortTitle: 'Agents of S.H.I.E.L.D.',
    network: 'ABC',
  },
  inhumans: { title: 'Inhumans', shortTitle: 'Inhumans', network: 'ABC' },
  'agent-carter': { title: 'Agent Carter', shortTitle: 'Agent Carter', network: 'ABC' },
  daredevil: { title: 'Daredevil', shortTitle: 'Daredevil', network: 'Netflix' },
  'jessica-jones': { title: 'Jessica Jones', shortTitle: 'Jessica Jones', network: 'Netflix' },
  'luke-cage': { title: 'Luke Cage', shortTitle: 'Luke Cage', network: 'Netflix' },
  'iron-fist': { title: 'Iron Fist', shortTitle: 'Iron Fist', network: 'Netflix' },
  'the-defenders': { title: 'The Defenders', shortTitle: 'The Defenders', network: 'Netflix' },
  'the-punisher': { title: 'The Punisher', shortTitle: 'The Punisher', network: 'Netflix' },
  'cloak-and-dagger': { title: 'Cloak & Dagger', shortTitle: 'Cloak & Dagger', network: 'Freeform' },
  'eyes-of-wakanda': {
    title: 'Eyes of Wakanda',
    shortTitle: 'Eyes of Wakanda',
    network: 'Disney+',
    animated: true,
  },
  'spider-noir': { title: 'Spider-Noir', shortTitle: 'Spider-Noir', network: 'Prime Video' },
  'x-men-tas': {
    title: 'X-Men: The Animated Series',
    shortTitle: 'X-Men: TAS',
    network: 'Fox Kids',
    animated: true,
  },
  'spider-man-tas': {
    title: 'Spider-Man: The Animated Series',
    shortTitle: 'Spider-Man: TAS',
    network: 'Fox Kids',
    animated: true,
  },
  'fantastic-four-tas': {
    title: 'Fantastic Four: The Animated Series',
    shortTitle: 'Fantastic Four: TAS',
    network: 'Syndication',
    animated: true,
  },
  'iron-man-tas': {
    title: 'Iron Man: The Animated Series',
    shortTitle: 'Iron Man: TAS',
    network: 'Syndication',
    animated: true,
  },
  'incredible-hulk-tas': {
    title: 'The Incredible Hulk: The Animated Series',
    shortTitle: 'Hulk: TAS',
    network: 'UPN',
    animated: true,
  },
  'x-men-97': { title: "X-Men '97", shortTitle: "X-Men '97", network: 'Disney+', animated: true },
} as const satisfies Record<string, SeriesInput>;

export type SeriesId = keyof typeof series;
