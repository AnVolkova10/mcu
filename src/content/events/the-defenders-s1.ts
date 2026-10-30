// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('the-defenders-s1', [
  {
    id: 'kun-lun-elders-hand',
    date: { year: 17, label: '2,000 years ago' },
    title: "Five exiled K'un-Lun elders become the Hand",
    text: [
      "The elders of [K'un-Lun](iron-fist) came together to study the healing powers of dragon qi, but five among them wished to use this power to live forever and were cast out. They became *the five fingers of the Hand*.",
    ],
    locations: ['subterranean-dragon-bone-burial-chamber'],
  },
  {
    id: 'murdock-jones-cage-rand-unite',
    date: { year: 2016, order: 110 },
    title: 'Murdock, Jones, Cage and Rand unite against the Hand',
    text: [
      "[Danny Rand](iron-fist) and [Colleen Wing](colleen-wing) are told that the war they are fighting is actually taking place in New York City. There, [Matt Murdock](daredevil) has given up his life as the vigilante and is working as a pro bono lawyer. [Luke Cage](luke-cage), his name cleared by Murdock's ex-partner **Foggy Nelson**, returns from prison to the streets of Harlem where police detective **Misty Knight** informs him of local kids who have been getting involved with a mysterious business. After learning that she has little time to live, **Alexandra** informs her colleagues to speed up their plans, and subsequently watches with a resurrected [Elektra](elektra) as a **large earthquake tears through New York**, felt by [Jessica Jones](jessica-jones) as she discovers explosives while searching for a missing husband.",
      "Under Alexandra's tutelage, the [Black Sky](elektra) was prepared to fight as a weapon against *the Hand*'s enemies. Now, Jones dismisses Murdock's help, but he becomes interested in her case and begins investigating it himself. Cage tells his girlfriend **Claire Temple** about his fight with Rand. Inspired by some of Cage's comments, Rand decides to take a different approach and uses his corporate influence to find the Hand's new front, *Midland Circle*. Jones and Cage also learn of a connection to Midland Circle in. They arrive to help Rand fight the Hand, soon followed by Murdock. They are attacked by the Black Sky, but Rand drives her off. **Stick** escapes from the Hand and finds the group, having already known Murdock and known of Rand.",
      'The Hand includes Alexandra (who has gone by many names through the centuries), **Madame Gao, Sowande** (who has been recruiting the Harlem kids), **Murakami**, and **Bakuto**. Now the Hand have defeated all that oppose them, except for Stick and the Iron Fist. Stick decapitates **Sowande** when he attempts to escape capture. Realizing that the Hand wants the Iron Fist as a key to unlock something, the group decides to hide Rand away. Natchios begins to regain memories of her previous life. Murdock and Jones learn that there is something beneath Midland Circle, **a hole** which Murdock had come across previously. **Stick** attempting to murder Rand to keep the Hand from using him gets killed by Elektra. **Alexandra** gloats to the other leaders about this victory, but is murdered herself by Natchios, who claims leadership of the Hand. Natchios tricks Rand into opening the door, causing a blast that knocks out power throughout the city. Rand awakens beneath **the skeleton of a dragon.** Gao explains to Rand **that the substance that the Hand uses for resurrection comes from the bones of dragons**, just as his Iron Fist abilities came from a dragon. Wing decapitates **Bakuto** while Misty loses her right arm.',
      'The timer for the explosives sets off accidentally. Jones, Murdock, and Cage arrive in the cavern to help Rand, and they fight the members of the Hand together. When Murdock realizes that the explosives are about to go off, he gets the others to leave immediately. He remains to plead with [Elektra](elektra), and the two are together—along with **Gao and Murakami** —as the building implodes around them. These events are all covered up by authorities. Rand, Jones, and Cage look to move on and protect the city. **Karen** and Foggy mourns Matt but he later wakes up in a room with a nun at his side.',
    ],
    deaths: [
      { name: 'Sowande', presumed: false },
      { name: 'Stick', presumed: false },
      { name: 'Alexandra', presumed: false },
      { name: 'Bakuto', presumed: false },
      'elektra',
      { name: 'Gao and Murakami', presumed: true },
    ],
  },
]);
