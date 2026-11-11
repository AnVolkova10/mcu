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
  adamantium: {
    name: 'Adamantium',
    kind: 'material',
    description: 'Nearly unbreakable metal that William Stryker makes from a meteorite Team X finds in Nigeria. He bonds it to the skeleton of Logan, arms Weapon XI with it and uses it in the bullets that take Logan\'s memory. In the animated series, Wolverine\'s skeleton is laced with it too, and Canada\'s Department H wants to learn how, or cut it out of him.',
  },
  'captain-america-shield': {
    name: "Captain America's Shield",
    kind: 'weapon',
    description: 'Round Vibranium shield that Howard Stark gives Steve Rogers in London in 1943. It goes down with him in the Valkyrie and is found in the ice in 2011.',
  },
  cerebro: {
    name: 'Cerebro',
    kind: 'technology',
    description: "Machine built by Hank McCoy that amplifies Charles Xavier's telepathy to locate mutants. The first one, at Division X, is destroyed in Sebastian Shaw's attack. In the animated series, Xavier uses it to show Bishop's memories of 2055, and Jean Grey wears one of its helmets to break into the Juggernaut's mind. With Xavier gone, Jean uses it to find a tear in the astral plane, to search for him and to calm Rogue's mind, and a portable projector shows Graydon Creed a hologram of his father. Later it picks up the signal of a Shi'ar prison ship buried under Manhattan.",
  },
  'furys-pager': {
    name: "Fury's Pager",
    kind: 'technology',
    description: 'Two-way pager that Nick Fury carries in 1995. Carol Danvers takes it at Pegasus, then upgrades it to reach her across galaxies and gives it back for emergencies only. In 2018 the Avengers find it after the Snap, and Carol answers.',
  },
  'magneto-helmet': {
    name: "Magneto's Helmet",
    kind: 'technology',
    description: 'Helmet made by the Soviets for Sebastian Shaw that blocks telepathy. Erik Lehnsherr takes it from him in Cuba and keeps it.',
  },
  'mkraan-crystal': {
    name: "M'Kraan Crystal",
    kind: 'relic',
    description: "Shi'ar crystal with a whole galaxy inside. Lilandra steals it to keep it from her brother D'Ken, the Starjammers take it from her ship, D'Ken breaches it, and the Phoenix carries it into the heart of the Sun, where no one can reach it again.",
  },
  'quantum-scanner': {
    name: 'Quantum Scanner',
    kind: 'technology',
    description: 'Device of a future Wakanda that looks across history and other realities. The last Black Panther uses it to find the moment that could save her world.',
  },
  sentinels: {
    name: 'Sentinels',
    kind: 'technology',
    description: "Robots designed by Bolivar Trask to hunt mutants. In the Fox films, Magneto laces the first ones with steel and turns them on the White House in 1973; in the future of 2023, built from Mystique's DNA, they adapt to any mutant power. In the animated series, Trask builds them for Henry Gyrich, Master Mold makes them on its own, and by 2055 they rule over mutants and humans.",
  },
  ship: {
    name: 'Ship',
    kind: 'technology',
    description: 'Living starship of beings from the stars, buried in the Egyptian desert as a lost temple. In the animated series, around 3000 BC, it gives En Sabah Nur the power that makes him Apocalypse. In 3960 it bonds with the young Nathan Summers and sends the X-Men home, and in 1998 Rogue wakes it again to save Gambit.',
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
