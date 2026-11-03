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
  'captain-america-shield': {
    name: "Captain America's Shield",
    kind: 'weapon',
    description: 'Round Vibranium shield that Howard Stark gives Steve Rogers in London in 1943. It goes down with him in the Valkyrie and is found in the ice in 2011.',
  },
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
  'super-soldier-serum': {
    name: 'Super Soldier Serum',
    kind: 'material',
    description: 'Formula created by Dr. Abraham Erskine. An imperfect version turns Johann Schmidt into the Red Skull, the finished one makes Steve Rogers a super-soldier, and the last vial is lost the day Erskine is killed.',
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
  'zero-matter': {
    name: 'Zero Matter',
    kind: 'material',
    description: 'Extra-dimensional black substance found by Isodyne Energy. It freezes and consumes what it touches, leaves Jason Wilkes intangible and gives Whitney Frost her powers, until a rift sends it back in 1947.',
  },
} as const satisfies Record<string, ObjectInput>;

export type ObjectId = keyof typeof objects;
