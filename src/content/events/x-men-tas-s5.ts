// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s5', [
  {
    id: 'essex-experiments-on-mutants',
    date: { year: 1858, approx: true, order: 10 },
    segment: 'E9',
    title: 'Nathaniel Essex experiments on mutants and on himself',
    text: [
      "In London, Dr. [James Xavier](james-xavier) and his friend [Nathaniel Essex](mister-sinister-nathaniel-essex) argue over Darwin's theory of evolution. Essex believes that mutants are its next step and collects them to show to scientists like Charles Darwin, who scoff at him; he heals his wife, Rebecca, with forbidden methods of his own, and keeps captive mutants in his basement.",
      'When James finds them, the two fight and the mutants escape; one of them, Thomas Flannery, sets a building on fire by accident, and James turns the mob away from Flannery and onto Essex. Essex, already changed by his experiments on himself, frightens Rebecca and flees alone.',
    ],
    locations: ['essex-manor-laboratory-and-east-end-london-slums'],
  },
  {
    id: 'nathaniel-essex-sinister',
    date: { year: 1888, order: 10 },
    segment: 'E9',
    title: 'Jack the Ripper kills for Mister Sinister in Whitechapel',
    text: [
      'Scotland Yard puts [James Xavier](james-xavier) on the trail of [Jack the Ripper](jack-the-ripper), and James, who has chased Essex for thirty years, believes that he is the killer the police will not suspect. A mutated body proves him right: Jack is a creature of Essex, now [Mister Sinister](mister-sinister-nathaniel-essex), made to bring him the organs of mutants for his experiments.',
      'James and the police storm the lair of Sinister, but he has already left for America, leaving behind a book that ends up on the nightstand of Charles Xavier.',
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
      "Sent into occupied France, [Logan](logan-wolverine) meets his contacts, [Justine Cocteau](justine-cocteau) and Samuel Sawyer, and [Captain America](steve-rogers) joins him to rescue the kidnapped scientist [Andre Cocteau](andre-cocteau) from the [Red Skull](red-skull). They climb a cliff into a Nazi facility and find Andre among the giant robots he has helped build, but he refuses to leave, and the Skull locks them in a dungeon.",
      'Logan frees himself and Captain America. As the Howling Commandos, among them [Nick Fury](fury) and [Dum Dum Dugan](dum-dum-dugan), blow up the facility, the Skull escapes in a jet with Andre, and Logan and Cap believe that Andre betrayed them.',
    ],
    locations: ['nazi-gestapo-fortress-and-subterranean-lab'],
  },
  {
    id: 'beast-phalanx-alliance',
    date: { year: 1996, order: 70 },
    segment: 'E1–E2',
    title: 'The Phalanx take the mansion, and an unlikely alliance stops them',
    text: [
      "A creature posing as Sabretooth lets itself be caught and brought to the mansion, and from inside it the Phalanx, a race of techno-organic aliens, take over the X-Men's computers and trap the X-Men in their cells. [Beast](hank-mccoy) escapes with the help of [Warlock](warlock-technarch), a techno-organic alien who has turned against them, and learns that they cannot yet absorb mutants, though the President is already one of them. At a diner the Phalanx strike again and take [Quicksilver](pietro), and [Mister Sinister](mister-sinister-nathaniel-essex), whose own laboratory they wrecked, saves Beast, Warlock and [Forge](forge); from his plane they see the Phalanx's Spire rising on the Empire State Building.",
      "On Muir Island, with [Moira MacTaggert](moira-mactaggert), [Banshee](sean-cassidy) and [Amelia Voght](amelia-voght), now a medic there, they make a virus against the Phalanx before the island is overrun and Moira and Banshee are taken. Amelia leads them to the citadel of [Magneto](erik-lehnsherr), who has lived apart since Asteroid M fell and joins them when he learns that his son Quicksilver is a prisoner. They test the virus on a sample taken from a Phalanx tower in St. John's, Newfoundland, and at the Spire, where [Cameron Hodge](cameron-hodge), the man the Phalanx made their guide on Earth, holds [Wolverine](logan-wolverine), Warlock lets himself be caught to release it at the core.",
      'The Phalanx fall, and everyone they had taken, from [Charles Xavier](charles-xavier), [Cyclops](cyclops-scott-summers), [Jean Grey](jean-grey) and [Polaris](polaris-lorna-dane) to Hodge himself, returns to normal. Warlock gets back his life-mate and asks Forge and Beast to help him free his homeworld.',
    ],
    cast: ['jubilee-jubilation-lee', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau'],
    locations: ['xaviers-school-for-gifted-youngsters', 'sids-grill', 'phalanx-assimilation-spire-and-muir-island', 'muir-island-mutant-research-facility', 'magnetos-citadel', 'st-johns-newfoundland'],
  },
  {
    id: 'storm-arkon-polemachus',
    date: { year: 1996, order: 80 },
    segment: 'E3–E4',
    title: 'Storm agrees to marry Arkon of Polemachus, until she finds his slaves',
    text: [
      "Strange storms strike Washington, D.C., and when [Storm](storm-ororo-munroe) cannot stop them, [Arkon](arkon) saves her and admits that he caused them to get her attention: his own world, Polemachus, is torn by storms that threaten the barriers keeping out deadly cosmic radiation. Storm goes with him and leaves a clue for the X-Men, who follow her through a portal and fight his robot guards, while she saves the planet and agrees to marry him.",
      'As the wedding nears, [Jubilee](jubilee-jubilation-lee) sees how badly the palace workers are treated, and [Wolverine](logan-wolverine), [Beast](hank-mccoy) and [Cyclops](cyclops-scott-summers) find that Arkon is raiding the nearby planet Belgania for slaves. At the wedding dinner the X-Men and the rebels expose him; Storm turns on him and cuts the power to the control rings of the slaves before the X-Men go home.',
    ],
    cast: ['charles-xavier'],
    locations: ['washington-monument', 'xaviers-school-for-gifted-youngsters', 'polemachus'],
  },
  {
    id: 'apocalypse-takes-cortez-body',
    date: { year: 1996, order: 90 },
    segment: 'E5',
    title: "Apocalypse returns from the astral plane in Fabian Cortez's body",
    text: [
      "Trapped in the astral plane, [Apocalypse](en-sabah-nur-apocalypse) needs a body to come back, and from his temple in the Andes [Fabian Cortez](fabian-cortez) and the Hounds hunt a host for him. [Beast](hank-mccoy) and [Jubilee](jubilee-jubilation-lee), on an archaeological trip, find the temple and are captured; Cortez pushes Beast's mutation into a savage form, and Apocalypse accepts Jubilee as his host.",
      "[Caliban](caliban), one of the Hounds, offers himself in her place, Beast comes back to himself and brings the cave down, and Jubilee blasts Cortez before the three escape. Apocalypse comes out of a portal and takes Cortez's body, turning it into his own form and casting Cortez out of it.",
    ],
    locations: ['apocalypse-andes-temple'],
    deaths: ['fabian-cortez'],
  },
  {
    id: 'jubilee-cave-in-fairytale',
    date: { year: 1996, order: 100 },
    segment: 'E6',
    title: 'A cave-in traps Jubilee and a school group under the mansion',
    text: [
      'While [Charles Xavier](charles-xavier), [Wolverine](logan-wolverine) and [Gambit](gambit-remy-lebeau) travel to Washington to see the President, [Jubilee](jubilee-jubilation-lee) leads a group of schoolchildren through the caves under the mansion, and a cave-in traps them as the water rises. She sends an SOS and keeps the children calm with a fairy tale in which the X-Men are a prince, a princess and their knights against Magnus and his metal men, until the X-Men arrive and get them out.',
    ],
    cast: ['cyclops-scott-summers', 'jean-grey'],
    locations: ['xaviers-school-for-gifted-youngsters'],
  },
  {
    id: 'justine-cocteau-grave-paris',
    date: { year: 1996, order: 110 },
    segment: 'E7',
    title: "At Cocteau's grave, Justine tells Logan he was an Allied spy",
    text: [
      'Decades later, [Wolverine](logan-wolverine) visits the grave of [Andre Cocteau](andre-cocteau) in Paris, still angry at him, and three old officers who fought in the war think they recognize him. [Justine Cocteau](justine-cocteau) arrives and tells him that Andre\'s betrayal was a plan to win the trust of the Red Skull, so that he could work inside Germany as a secret agent for the Allies; Logan scratches "Hero" on the grave.',
    ],
    locations: ['pere-lachaise-cemetery'],
  },
  {
    id: 'rogue-shields-cannonball',
    date: { year: 1996, order: 120 },
    segment: 'E8',
    title: 'Rogue shields Sam Guthrie from an Army plan to control his powers',
    text: [
      "In Kentucky, [Sam Guthrie](sam-guthrie-cannonball) uses his mutant power to save himself, his father and another miner from a cave-in, and an Army agent named Girkland wants him. [Charles Xavier](charles-xavier) sends [Rogue](rogue-anna-marie), who is from the South too; she visits the Guthrie farm and invites Sam to the school, but he wants to stay home and keep working in the mines.",
      "Girkland turns the town against Sam, and [Gambit](gambit-remy-lebeau), sent to spy on the Army, is caught and learns that they have a chip to control mutant powers, meant for Sam; Xavier and [Beast](hank-mccoy) save him. When Girkland's mob and soldiers come for Sam, the X-Men and Sam drive them away.",
    ],
    locations: ['guthrie-farm'],
  },
  {
    id: 'xavier-departs-earth',
    date: { year: 1996, order: 130 },
    segment: 'E10',
    title: "Gyrich's disruptor fells Xavier, and Lilandra takes him to the Shi'ar",
    text: [
      'In Washington, after weeks fighting a bill to contain mutants, [Charles Xavier](charles-xavier) is shot by [Henry Gyrich](henry-gyrich) with an energy disruptor that sends his powers out of control, and he falls into a coma. [Moira MacTaggert](moira-mactaggert) says that he is beyond the help of medicine, mutants rise up around the world, and on Genosha [Magneto](erik-lehnsherr) prepares a war; [Morph](morph-kevin-sydney), posing as Xavier on television, cannot calm them.',
      "[Cyclops](cyclops-scott-summers), [Jean Grey](jean-grey) and [Wolverine](logan-wolverine) fly to Hammer Bay; Magneto destroys their Blackbird, Jean saves them, and they reach him during his speech. Learning that Xavier is dying, Magneto stops the war and boosts Xavier's own call so that it reaches [Lilandra](lilandra-neramani).",
      "At the mansion Xavier says goodbye to each of the X-Men and seems to die, but Lilandra arrives: Shi'ar science can keep him alive, only in their care. The X-Men and Magneto see him off as he leaves Earth with her.",
    ],
    cast: ['storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'hank-mccoy', 'jubilee-jubilation-lee'],
    locations: ['united-states-capitol-building', 'xavier-mansion-and-genosha-capital', 'xaviers-school-for-gifted-youngsters'],
  },
]);
