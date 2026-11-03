// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import type { ObjectInput, ObjectKindInput } from '@/domain/schema';

/** What an object is. Its color is the color of the object's underline in the text. */
export const objectKinds = {
  weapon: { label: 'Weapon', color: '#fb7185' },
  relic: { label: 'Relic', color: '#e8b94a' },
  technology: { label: 'Technology', color: '#22d3ee' },
  material: { label: 'Material', color: '#a78bfa' },
  record: { label: 'Record', color: '#86efac' },
} as const satisfies Record<string, ObjectKindInput>;

export type ObjectKindId = keyof typeof objectKinds;

/** Named objects that change the plot or pass from hand to hand. Sorted by id. */
export const objects = {
  'quantum-scanner': {
    name: 'Quantum Scanner',
    kind: 'technology',
    description: 'Device of a future Wakanda that looks across history and other realities. The last Black Panther uses it to find the moment that could save her world.',
  },
  'spider-suit': {
    name: 'Spider Suit',
    kind: 'weapon',
    description: "Masked black suit that Ben Reilly wears as The Spider. He walls it up in his apartment when Ruby dies in 1928, takes it back five years later, and Robbie Robertson wears it once to pass for him.",
  },
  vibranium: {
    name: 'Vibranium',
    kind: 'material',
    description: 'Nearly indestructible metal that reached Earth in meteorites millions of years ago. Wakanda is built on it, and the War Dogs travel the world to bring back what leaves the country.',
  },
  'vibranium-ax': {
    name: 'Vibranium Ax',
    kind: 'weapon',
    description: 'Ancient Wakandan mining tool. Left in Adwa on purpose in 1896, it passes through Benin and British soldiers to the Museum of Great Britain, where Killmonger finds it in 2016.',
  },
} as const satisfies Record<string, ObjectInput>;

export type ObjectId = keyof typeof objects;
