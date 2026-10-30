// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s2', [
  {
    id: 'spider-man-xmen-landon',
    date: { year: 1995, order: 30 },
    title: 'Spider-Man joins forces with the X-Men against Landon',
    text: [
      "Kingpin unifies New York's greatest rogues into the **Insidious Six** (Doc Ock, Mysterio, Shocker, Chameleon, Rhino, Scorpion), who capture Spider-Man while his powers begin mysteriously fluctuating. Seeking an answer to his cellular breakdown, [Spider-Man](spider-man) travels to Westchester County to seek the genetic expertise of [Professor Charles Xavier](charles-xavier). Met with hostility by [Wolverine](logan-wolverine), Spider-Man eventually teams up with [Beast](hank-mccoy) and the X-Men. When mutant-hating scientist Dr. Herbert Landon attempts to exterminate all mutants with a mutagenic weapon, Beast and Spider-Man dismantle his facility, though Landon mutates into an enormous biological behemoth before being subdued.",
    ],
    cast: ['wilson-fisk-kingpin'],
    locations: ['xavier-school-for-gifted-youngsters'],
  },
  {
    id: 'man-spider-mutation',
    date: { year: 1995, order: 40 },
    title: 'Peter Parker mutates into the Man-Spider',
    text: [
      "Peter Parker's cellular degradation worsens, mutating him into a six-armed arachnid monstrosity known as the **Man-Spider**. Simultaneously, biology student [Michael Morbius](michael-morbius) steals the Neogenic Recombinator to cure his rare blood disease, accidentally transforming into a living vampire that preys on Manhattan's plasma. Armed vigilante Frank Castle, [The Punisher](the-punisher), hunts the rampaging Man-Spider with battle vans and explosives, while daywalking dhampir [Blade the Vampire Hunter](blade-eric-brooks) arrives in New York with silver swords to eliminate Morbius. Dr. Mariah Crawford formulates an enzyme cure, restoring Peter Parker while Morbius flees into the night.",
    ],
    cast: ['spider-man', 'the-punisher'],
    locations: ['manhattan-rooftops-and-esu-bio-labs'],
  },
  {
    id: 'tablet-of-time-war',
    date: { year: 1995, order: 50 },
    title: 'Silvermane and Kingpin battle for the Tablet of Time',
    text: [
      "Archaeologists unearth the mystical **Tablet of Time** in prehistoric Mayan ruins, said to bestow youth and biological reversal. Dying Maggia crime boss Silvermane and Kingpin wage an all-out turf war across New York to seize the artifact. Aged criminal Adrian Toomes (The Vulture) constructs youth-draining wing gauntlets, siphoning Peter Parker's youthful vigor. When Silvermane activates the tablet, the arcane energies regress him uncontrollably into infancy. Spider-Man reclaims his vitality and defeats the Vulture, delivering the Tablet to the authorities.",
    ],
    cast: ['spider-man', 'wilson-fisk-kingpin'],
    locations: [
      'maggia-penthouse-and-new-york-harbor-docks',
    ],
  },
]);
