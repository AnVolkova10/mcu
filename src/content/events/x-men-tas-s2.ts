// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s2', [
  {
    id: 'sinister-captures-scott-jean',
    date: { year: 1993, order: 50 },
    segment: 'E1–E2',
    title: 'Morph turns on the X-Men and Sinister abducts Scott and Jean',
    text: [
      '[Scott Summers](cyclops-scott-summers) and [Jean Grey](jean-grey) marry at the mansion, but the reverend is [Morph](morph-kevin-sydney), alive and pushed by [Mister Sinister](mister-sinister-nathaniel-essex) to destroy the X-Men; in Washington, [Robert Kelly](senator-robert-kelly) is sworn in as president and pardons [Beast](hank-mccoy). Posing as one X-Man after another, Morph tears the team apart, while Sinister captures Scott and Jean on their honeymoon to draw their DNA.',
      'The X-Men break in and drive Sinister off, and Morph flees after telling Scott and Jean that their marriage does not count. In Antarctica, an avalanche buries [Charles Xavier](charles-xavier) and [Magneto](erik-lehnsherr).',
    ],
    cast: ['logan-wolverine', 'graydon-creed', 'gambit-remy-lebeau', 'rogue-anna-marie', 'jubilee-jubilation-lee', 'storm-ororo-munroe'],
    locations: ['xaviers-school-for-gifted-youngsters', 'united-states-capitol-building', 'friends-of-humanity-hall', 'mister-sinisters-subterranean-genetic-lab', 'the-savage-land'],
  },
  {
    id: 'storm-purges-shadow-king',
    date: { year: 1993, order: 60 },
    segment: 'E3–E6, E10–E11',
    title: 'The X-Men face the Shadow King, Omega Red, Alpha Flight and Mojo',
    text: [
      '[Storm](storm-ororo-munroe) and her godson Mjnari trap the [Shadow King](shadow-king-amahl-farouk) back in the astral plane, by her village at the foot of Kilimanjaro, and in the Upper Amazon [Wolverine](logan-wolverine) finds [Morph](morph-kevin-sydney), who beats him and is left to heal on his own. In Russia, [Colossus](colossus-piotr-rasputin), Darkstar and the X-Men freeze [Omega Red](omega-red-arkady-rossovich) in a block of ice, and in Canada Alpha Flight captures Wolverine for Department H, which wants to cut out his [adamantium](object:adamantium) skeleton, until his old teammates set him free.',
      'In New Orleans, [Gambit](gambit-remy-lebeau) exposes the fake tithe that his former fiancée, [Bella Donna](bella-donna-boudreaux), passed to the Thieves Guild, and the [X-Ternal](x-ternal), a mystic woman the guilds pay every ten years, takes her powers. [Beast](hank-mccoy) and Wolverine rescue Carly, a patient who loves Hank, from the Friends of Humanity, whose leader, [Graydon Creed](graydon-creed), turns out to be the son of Sabretooth, and [Mojo](mojo) snatches six X-Men for televised death matches until [Longshot](longshot) sends them home.',
    ],
    cast: ['jean-grey', 'rogue-anna-marie', 'jubilee-jubilation-lee', 'james-hudson-guardian', 'nightcrawler-kurt-wagner', 'archangel-warren-worthington', 'psylocke-betsy-braddock', 'pietro', 'scarlet-witch', 'cyclops-scott-summers'],
    locations: ['xaviers-school-for-gifted-youngsters', 'storms-village', 'mount-kilimanjaro-and-serengeti-foothills', 'upper-amazon', 'red-square-and-kremlin-military-district', 'siberian-cryogenic-bunker-and-icbm-silo', 'department-h-subterranean-defense-complex', 'boudreaux-mansion', 'french-quarter-and-bayou-lafourche-caverns', 'new-orleans-bayou', 'manhattan-eye-infirmary-and-queens-foh-compound', 'friends-of-humanity-hall', 'galleria-shopping-mall', 'central-broadcast-arena-and-studio-city'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters', 'friends-of-humanity-hall'] }],
  },
  {
    id: 'bishop-destroys-plague-too-soon',
    date: { year: 1993, order: 95 },
    segment: 'E7',
    title: 'Bishop destroys the plague too soon and Apocalypse kills the X-Men',
    branch: 'first-1993',
    text: [
      'In the first version of 1993, [Bishop](bishop-lucas-bishop) arrives from 2055 to stop the plague and tricks [Apocalypse](en-sabah-nur-apocalypse), the scientist behind the virus of [Graydon Creed](graydon-creed), into blowing up his laboratory and the virus, but Apocalypse grows to a giant and kills the X-Men, Bishop and Creed. With the virus destroyed before it could make antibodies, mankind has no defense against the plagues to come, and the change reaches the year 3999 as a time storm.',
    ],
    cast: ['hank-mccoy', 'fury', 'war-machine', 'cyclops-scott-summers', 'jean-grey', 'logan-wolverine', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'jubilee-jubilation-lee'],
    locations: ['xaviers-school-for-gifted-youngsters', 'united-states-capitol-building', 'friends-of-humanity-laboratory'],
    deaths: ['cyclops-scott-summers', 'jean-grey', 'logan-wolverine', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'jubilee-jubilation-lee', 'hank-mccoy', 'bishop-lucas-bishop', 'graydon-creed'],
  },
  {
    id: 'bishop-cable-plague',
    date: { year: 1993, order: 100 },
    segment: 'E7–E8',
    title: "Cable lets Wolverine catch Apocalypse's plague to make the antibodies",
    text: [
      '[Graydon Creed](graydon-creed) has a scientist make a plague to blame on mutants, not knowing that the scientist is [Apocalypse](en-sabah-nur-apocalypse). [Bishop](bishop-lucas-bishop) arrives from 2055 to destroy it, and [Cable](cable-nathan-summers), from 3999, comes to stop him: if the virus is destroyed before it makes antibodies, his world disappears.',
      "At Creed's laboratory in Virginia, Apocalypse throws [Wolverine](logan-wolverine) into the virus and Cable keeps Bishop away, so that Wolverine's healing makes the antibodies mutants will need, and Apocalypse leaves promising revenge.",
    ],
    cast: ['jubilee-jubilation-lee', 'storm-ororo-munroe', 'hank-mccoy', 'jean-grey', 'cyclops-scott-summers', 'rogue-anna-marie', 'gambit-remy-lebeau'],
    locations: ['galleria-shopping-mall', 'xaviers-school-for-gifted-youngsters', 'united-states-capitol-building', 'friends-of-humanity-laboratory'],
  },
  {
    id: 'rogue-carol-danvers-peace',
    date: { year: 1993, order: 120 },
    segment: 'E9',
    title: "Carol Danvers's mind rises inside Rogue, and Rogue rejects Mystique",
    text: [
      'Without Xavier, the memories [Rogue](rogue-anna-marie) absorbed break through, and [Mystique](raven-darkholme) leads her to the hospital bed of [Carol Danvers](carol-danvers), Ms. Marvel, in a coma since Rogue absorbed her powers and mind for good fighting for Mystique. Carol takes over Rogue until [Jean Grey](jean-grey), through [Cerebro](object:cerebro), helps her lock Carol away again, and Rogue tells Mystique that she is not her daughter anymore.',
    ],
    cast: ['mister-sinister-nathaniel-essex', 'avalanche', 'pyro', 'fred-dukes', 'storm-ororo-munroe', 'cyclops-scott-summers', 'logan-wolverine', 'gambit-remy-lebeau'],
    locations: ['xaviers-school-for-gifted-youngsters', 'statue-of-liberty', 'star-memorial-hospital-and-golden-gate-overlook'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }],
  },
  {
    id: 'morph-turns-on-sinister',
    date: { year: 1993, order: 150 },
    segment: 'E3–E13',
    title: 'Xavier and Magneto cross the Savage Land and the X-Men defeat Sinister',
    text: [
      'The avalanche drops [Charles Xavier](charles-xavier) and [Magneto](erik-lehnsherr) into the Savage Land, a hidden prehistoric jungle in Antarctica where they have no powers, and they find that [Mister Sinister](mister-sinister-nathaniel-essex), master of [Sauron](sauron-karl-lykos) and the Savage Land Mutates, can take the powers of mutants. Sinister has [Morph](morph-kevin-sydney) lure [Jean Grey](jean-grey) into a trap and Xavier call the X-Men into another.',
      "[Wolverine](logan-wolverine) and [Ka-Zar](ka-zar-kevin-plunder) free the prisoners, Xavier smashes the machine that dampens their powers, losing the use of his legs again, and frees Morph from Sinister's control, and the X-Men and Magneto blast Sinister to pieces. Magneto leaves, saying that nothing has changed between them.",
    ],
    cast: ['cyclops-scott-summers', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'hank-mccoy', 'jubilee-jubilation-lee'],
    locations: ['the-savage-land', 'magnetos-citadel', 'branston-theatre', 'xaviers-school-for-gifted-youngsters'],
  },
  {
    id: 'bishop-prevents-mutant-plague',
    date: { year: 2055, order: 20 },
    segment: 'E7–E8',
    title: 'Bishop finds 2055 ravaged by a plague, then a 2055 without it',
    branch: 'bishop-future',
    text: [
      'Back from the 1990s, [Bishop](bishop-lucas-bishop) finds 2055 ravaged by a plague that kills mutants and humans alike, and a [Forge](forge) who has never heard of the X-Men, so he goes back to 1993 to stop it. When he returns, New York is still a wasteland, but Forge has no memory of any plague.',
    ],
    locations: ['sentinel-mutant-internment-camp-and-subway-bunker'],
  },
  {
    id: 'cable-undoes-bishop-intervention',
    date: { year: 3999, order: 10 },
    segment: 'E7–E8',
    title: "Cable races back to undo Bishop's change, and his son Tyler is saved",
    text: [
      "In 3999, ruled by [Apocalypse](en-sabah-nur-apocalypse), a time storm erases fighters on both sides of [Cable](cable-nathan-summers)'s war: Bishop has destroyed the plague of 1993 before it could make the antibodies mutants will need. Cable watches his son Tyler vanish and goes back to stop him, and when he returns his world is saved and Tyler greets him.",
    ],
    locations: ['clan-chosen-high-citadel-and-temporal-hangar'],
  },
]);
