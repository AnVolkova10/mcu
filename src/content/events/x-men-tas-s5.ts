// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s5', [
  {
    id: 'essex-experiments-on-mutants',
    date: { year: 1858, approx: true, order: 10 },
    segment: 'E9',
    title: 'Nathaniel Essex experiments on mutants and on himself',
    text: [
      'In London, [Nathaniel Essex](mister-sinister-nathaniel-essex) believes that mutants are the next step of evolution, keeps captive mutants in his basement and experiments on himself. When his friend Dr. [James Xavier](james-xavier) finds them, the mutants escape, James turns a mob onto Essex, and Essex, already changed, flees alone.',
    ],
    locations: ['essex-manor-laboratory-and-east-end-london-slums'],
  },
  {
    id: 'nathaniel-essex-sinister',
    date: { year: 1888, order: 10 },
    segment: 'E9',
    title: 'Jack the Ripper kills for Mister Sinister in Whitechapel',
    text: [
      'Thirty years later, [James Xavier](james-xavier) finds that [Jack the Ripper](jack-the-ripper) is a creature of Essex, now [Mister Sinister](mister-sinister-nathaniel-essex), made to bring him the organs of mutants. Sinister escapes to America, leaving behind a book that ends up on the nightstand of Charles Xavier.',
    ],
    locations: ['whitechapel', 'essex-manor-laboratory-and-east-end-london-slums'],
    deaths: [{ name: "Jack the Ripper's victims" }],
  },
  {
    id: 'captain-america-logan-france',
    date: { year: 1944, order: 30 },
    segment: 'E7',
    title: 'Logan and Captain America try to rescue Cocteau from the Red Skull',
    text: [
      'In occupied France, [Logan](logan-wolverine) and [Captain America](steve-rogers) try to rescue the scientist [Andre Cocteau](andre-cocteau) from the [Red Skull](red-skull), but Andre refuses to leave the giant robots he has helped build. As the Howling Commandos blow up the facility, the Skull escapes with Andre, and Logan and Cap believe that Andre betrayed them.',
    ],
    cast: ['justine-cocteau', 'fury', 'dum-dum-dugan'],
    locations: ['nazi-gestapo-fortress-and-subterranean-lab'],
  },
  {
    id: 'beast-phalanx-alliance',
    date: { year: 1996, order: 70 },
    segment: 'E1–E2',
    title: 'The Phalanx take the mansion, and an unlikely alliance stops them',
    text: [
      'The Phalanx, a race of techno-organic aliens, take over the mansion and trap the X-Men; the President is already one of them. [Beast](hank-mccoy), the alien [Warlock](warlock-technarch), [Forge](forge), [Mister Sinister](mister-sinister-nathaniel-essex), [Amelia Voght](amelia-voght) and [Magneto](erik-lehnsherr), who joins when he learns that his son [Quicksilver](pietro) is their prisoner, make a virus against them, and Warlock lets himself be caught to release it at the core of their Spire on the Empire State Building.',
      'The Phalanx fall, and everyone they had taken, from [Charles Xavier](charles-xavier) and the X-Men to their guide on Earth, [Cameron Hodge](cameron-hodge), returns to normal.',
    ],
    cast: ['moira-mactaggert', 'sean-cassidy', 'logan-wolverine', 'cyclops-scott-summers', 'jean-grey', 'polaris-lorna-dane', 'jubilee-jubilation-lee', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau'],
    locations: ['xaviers-school-for-gifted-youngsters', 'sids-grill', 'phalanx-assimilation-spire-and-muir-island', 'muir-island-mutant-research-facility', 'magnetos-citadel', 'st-johns-newfoundland'],
  },
  {
    id: 'storm-arkon-polemachus',
    date: { year: 1996, order: 80 },
    segment: 'E3–E4, E6–E8',
    title: 'Storm defies Arkon, and Logan learns the truth about Andre Cocteau',
    text: [
      '[Storm](storm-ororo-munroe) agrees to marry [Arkon](arkon) to save his storm-torn world, Polemachus, until the X-Men find that he raids a nearby planet for slaves, and she frees them. [Jubilee](jubilee-jubilation-lee) keeps a school group calm with a fairy tale when a cave-in traps them under the mansion, and [Rogue](rogue-anna-marie) and the X-Men shield [Sam Guthrie](sam-guthrie-cannonball) from an Army plan to control his powers with a chip.',
      "At the grave of [Andre Cocteau](andre-cocteau) in Paris, [Justine Cocteau](justine-cocteau) tells [Wolverine](logan-wolverine) that Andre's betrayal in the war was a plan to spy on the Red Skull for the Allies, and Logan scratches \"Hero\" on the grave.",
    ],
    cast: ['hank-mccoy', 'cyclops-scott-summers', 'charles-xavier', 'gambit-remy-lebeau', 'jean-grey'],
    locations: ['washington-monument', 'xaviers-school-for-gifted-youngsters', 'polemachus', 'pere-lachaise-cemetery', 'guthrie-farm'],
  },
  {
    id: 'apocalypse-takes-cortez-body',
    date: { year: 1996, order: 90 },
    segment: 'E5',
    title: "Apocalypse returns from the astral plane in Fabian Cortez's body",
    text: [
      "From his temple in the Andes, [Fabian Cortez](fabian-cortez) hunts a body for [Apocalypse](en-sabah-nur-apocalypse), trapped in the astral plane, and captures [Beast](hank-mccoy) and [Jubilee](jubilee-jubilation-lee); [Caliban](caliban) offers himself in Jubilee's place, and the three escape. Apocalypse comes out of a portal and takes Cortez's own body, turning it into his form and casting Cortez out of it.",
    ],
    locations: ['apocalypse-andes-temple'],
    deaths: ['fabian-cortez'],
  },
  {
    id: 'xavier-departs-earth',
    date: { year: 1996, order: 130 },
    segment: 'E10',
    title: "Gyrich's disruptor fells Xavier, and Lilandra takes him to the Shi'ar",
    text: [
      "[Henry Gyrich](henry-gyrich) shoots [Charles Xavier](charles-xavier) with an energy disruptor that sends his powers out of control, and mutants rise up around the world; on Genosha, [Magneto](erik-lehnsherr) prepares a war, but when he learns that Xavier is dying he stops it and boosts Xavier's call so that it reaches [Lilandra](lilandra-neramani). Xavier says goodbye to each of the X-Men and seems to die, but Shi'ar science can keep him alive, only in their care, and he leaves Earth with Lilandra.",
    ],
    cast: ['moira-mactaggert', 'morph-kevin-sydney', 'cyclops-scott-summers', 'jean-grey', 'logan-wolverine', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'hank-mccoy', 'jubilee-jubilation-lee'],
    locations: ['united-states-capitol-building', 'xavier-mansion-and-genosha-capital', 'xaviers-school-for-gifted-youngsters'],
  },
]);
