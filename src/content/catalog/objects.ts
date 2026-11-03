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
  'helen-of-troy-pendant': {
    name: "Helen of Troy's Pendant",
    kind: 'relic',
    description: "Wakandan Vibranium jewel. Nkati keeps it beside his throne until it sinks with his ship in 1260 BC. Sixty years later it hangs from Helen's neck in Troy, and B'Kai brings it back to the War Dogs' vault.",
  },
  'lion-armor': {
    name: 'Lion Armor',
    kind: 'weapon',
    description: "Wakandan armor that Nkati takes with him when he deserts. Noni strips it from him piece by piece, and its remains end up in the War Dogs' vault.",
  },
  'lions-poleax': {
    name: "Lion's Poleax",
    kind: 'weapon',
    description: "Nkati's weapon as the Lion. Noni brings it back to Wakanda after defeating him, and it goes into the War Dogs' vault.",
  },
  'quantum-scanner': {
    name: 'Quantum Scanner',
    kind: 'technology',
    description: 'Device of a future Wakanda that looks across history and other realities. The last Black Panther uses it to find the moment that could save her world.',
  },
  'shou-lao-statue': {
    name: 'Shou-Lao Statue',
    kind: 'relic',
    description: "Sacred statue of the dragon Shou-Lao in the Dragon Shrine of K'un-Lun. Basha breaks off its head to steal the Vibranium inside, and Jorani takes the head back.",
  },
  'spider-suit': {
    name: 'Spider Suit',
    kind: 'weapon',
    description: "Masked black suit that Ben Reilly wears as The Spider. He walls it up in his apartment when Ruby dies in 1928, takes it back five years later, and Robbie Robertson wears it once to pass for him.",
  },
  'thetis-necklace': {
    name: "Thetis' Necklace",
    kind: 'relic',
    description: "Necklace that Achilles receives from his mother Thetis as a boy, for luck. He gives it to B'Kai, the friend who later kills him, and B'Kai takes it home to Wakanda.",
  },
  'tongue-of-shou-lao': {
    name: 'Tongue of Shou-Lao',
    kind: 'relic',
    description: "Piece of Vibranium set as the tongue of the Shou-Lao Statue. Jorani breaks it off with her Chi and leaves it with the War Dogs, keeping the head for K'un-Lun.",
  },
  'trojan-horse': {
    name: 'Trojan Horse',
    kind: 'weapon',
    description: 'Wooden horse devised by Odysseus, with the Myrmidons hidden inside, that ends the siege of Troy.',
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
