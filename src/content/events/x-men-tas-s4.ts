// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s4', [
  {
    id: 'lazarus-chamber-destroyed',
    date: { year: -1200, approx: true, order: 30 },
    segment: 'E20–E21',
    title: "The X-Men destroy Apocalypse's Lazarus Chamber in ancient Egypt",
    text: [
      "With Cable's time machine, the X-Men strike at the Lazarus Chamber of [Apocalypse](en-sabah-nur-apocalypse) in ancient Egypt, where he must return every hundred years to stay immortal. Apocalypse takes [Charles Xavier](charles-xavier) away to the Axis of Time, and [Cable](cable-nathan-summers) destroys the chamber, but Apocalypse tells him that the Axis of Time now sustains him.",
    ],
    cast: ['cyclops-scott-summers', 'gambit-remy-lebeau', 'archangel-warren-worthington', 'hank-mccoy', 'logan-wolverine'],
    locations: ['apocalypse-pyramid-cairo'],
  },
  {
    id: 'fitzroy-kills-young-xavier',
    date: { year: 1959, order: 10 },
    segment: 'E9',
    title: "Fitzroy's bomb kills young Charles Xavier",
    branch: 'xavier-dies-1959',
    text: [
      'At Bard College, [Trevor Fitzroy](trevor-fitzroy), sent from the future, plants a bomb in the laboratory of the young [Charles Xavier](charles-xavier). [Bishop](bishop-lucas-bishop), [Shard](shard-bishop) and the [Wolverine](logan-wolverine) and [Storm](storm-ororo-munroe) of the changed present find him, but in a fight at a coffee shop he runs off, and he dies when the bomb goes off as he opens the laboratory door.',
    ],
    locations: ['oxford-university-campus-and-country-road', 'rip-van-winkle-coffee-house'],
    deaths: ['charles-xavier'],
  },
  {
    id: 'young-xavier-fitzroy',
    date: { year: 1959, order: 20 },
    segment: 'E10',
    title: "Bishop and two time-lost X-Men save young Xavier from Fitzroy's bomb",
    text: [
      '[Bishop](bishop-lucas-bishop) and the [Wolverine](logan-wolverine) and [Storm](storm-ororo-munroe) of the erased present return to Bard College a few minutes before the blast and save the young [Charles Xavier](charles-xavier): won over by a message from his future self, [Trevor Fitzroy](trevor-fitzroy) lets them go, and Wolverine throws the detonator out of the window. Wolverine and Storm kiss and take off their bracelets, wiping themselves from existence.',
    ],
    locations: ['rip-van-winkle-coffee-house', 'oxford-university-campus-and-country-road'],
  },
  {
    id: 'weapon-x-implants-memories',
    date: { year: 1973, order: 70 },
    segment: 'E16',
    title: "Weapon X's Professor records the false memories he gives his subjects",
    text: [
      'In videotapes from 1973, the Professor of the Weapon X program explains how, at its facility in Alberta, he rewrites the memories of [Logan](logan-wolverine), [Sabretooth](victor-creed), [Maverick](agent-zero) and [Silver Fox](kayla-silverfox) so that they can be sent against a target and remember nothing of it, and how he means to bond adamantium to their bones.',
    ],
    locations: ['weapon-x-facility-alberta'],
  },
  {
    id: 'juggernaut-loses-crimson-gem',
    date: { year: 1995, order: 120 },
    segment: 'E1–E2, E5, E7–E8, E11–E12, E15, E17',
    title: 'The Juggernaut, Omega Red, Proteus and the Silver Samurai strike',
    text: [
      "A stranger takes the power of the [Juggernaut](juggernaut-cain-marko) with the Crimson Gem of Cyttorak, and once he gets it back, Cain throws the gem into space. [Omega Red](omega-red-arkady-rossovich) aims the missiles of a sunken submarine at the world's cities until [Rogue](rogue-anna-marie) stops them, and the [Shadow King](shadow-king-amahl-farouk) takes over the body of [Charles Xavier](charles-xavier) until [Jean Grey](jean-grey) helps seal him back in the astral plane.",
      "[Cyclops](cyclops-scott-summers) frees a desert town from [Solarr](solarr)'s gang; in a Bavarian monastery [Wolverine](logan-wolverine), Rogue and [Gambit](gambit-remy-lebeau) meet [Nightcrawler](nightcrawler-kurt-wagner), a mutant who looks like a demon and has given his life to God; and Xavier calms [Proteus](proteus-kevin-mactaggert), the reality-warping son of [Moira MacTaggert](moira-mactaggert), who has escaped Muir Island to find his father. In Japan Wolverine beats the [Silver Samurai](silver-samurai), and at Christmas his blood saves Leech, a dying young Morlock.",
    ],
    cast: ['hank-mccoy', 'eugene-turbot-weiderspan', 'storm-ororo-munroe', 'jubilee-jubilation-lee', 'taylor-prescott', 'darrell-tanaka', 'toad-mortimer-toynbee', 'mary-jane-watson', 'doctor-strange', 'sean-cassidy', 'joseph-mactaggert', 'morph-kevin-sydney', 'callisto'],
    locations: ['xaviers-school-for-gifted-youngsters', 'caucasus-mountains', 'sunken-soviet-submarine', 'astral-plane', 'skull-mesa', 'neuherzl-monastery', 'notre-dame-de-paris', 'muir-island-mutant-research-facility', 'holyrood-abbey', 'union-hall-edinburgh', 'okus-temple', 'rockefeller-center', 'morlock-subterranean-tunnels-and-nyc-sewers'],
  },
  {
    id: 'cortez-betrays-magneto',
    date: { year: 1995, order: 140 },
    segment: 'E3–E4',
    title: 'Cortez betrays Magneto on Asteroid M, and Magneto destroys it',
    text: [
      "[Magneto](erik-lehnsherr) offers every mutant who wants to live apart from humans a home on Asteroid M, where [Charles Xavier](charles-xavier) meets his former love, [Amelia Voght](amelia-voght). [Fabian Cortez](fabian-cortez) shoots Magneto into space and blames the X-Men, but Magneto flies back on the magnetic field of the Earth, stops the asteroid's missiles and destroys Asteroid M, and [Apocalypse](en-sabah-nur-apocalypse) saves Cortez at the last moment.",
    ],
    cast: ['hank-mccoy', 'gambit-remy-lebeau', 'rogue-anna-marie', 'logan-wolverine', 'deathbird', 'forge', 'alex-summers', 'polaris-lorna-dane', 'pietro'],
    locations: ['united-nations-headquarters', 'the-great-hydroelectric-dam-and-slave-complex', 'asteroid-m', 'xaviers-school-for-gifted-youngsters', 'kirby-glen'],
    objects: [{ id: 'sentinels', at: ['the-great-hydroelectric-dam-and-slave-complex'] }],
  },
  {
    id: 'morph-rejoins-master-mold-falls',
    date: { year: 1995, order: 160 },
    segment: 'E6',
    title: "Morph rejoins the X-Men and helps stop Master Mold's last plan",
    text: [
      '[Morph](morph-kevin-sydney) rejoins the X-Men after his therapy, as [Master Mold](master-mold), reduced to a head, orders [Charles Xavier](charles-xavier), [Henry Gyrich](henry-gyrich) and [Bolivar Trask](bolivar-trask) captured to build itself a new body. Morph finds its base and turns the fight; a falling stalactite destroys Master Mold, Trask blows up the base with himself inside, and Morph, not ready yet, leaves on his own.',
    ],
    cast: ['moira-mactaggert', 'cyclops-scott-summers', 'storm-ororo-munroe', 'logan-wolverine', 'hank-mccoy', 'jean-grey'],
    locations: ['muir-island-mutant-research-facility', 'xaviers-school-for-gifted-youngsters', 'jungle-hideout', 'master-mold-subterranean-sentinel-foundry'],
    objects: [{ id: 'sentinels', at: ['master-mold-subterranean-sentinel-foundry'] }],
    deaths: ['master-mold', { character: 'bolivar-trask', presumed: true }],
  },
  {
    id: 'bishop-shard-timeline-repair',
    date: { year: 1995, order: 190 },
    segment: 'E9',
    title: 'Bishop and Shard find a present without the X-Men',
    branch: 'xavier-dies-1959',
    text: [
      'Without Xavier there are no X-Men: in the ruins of New York, mutant rebels led by [Magneto](erik-lehnsherr) fight a war against super-humans such as [Captain America](steve-rogers) and [Black Widow](black-widow), and a [Wolverine](logan-wolverine) and a [Storm](storm-ororo-munroe) are married. [Bishop](bishop-lucas-bishop) and [Shard](shard-bishop) land there looking for the X-Men and recruit Wolverine and Storm to go with them to 1959.',
    ],
    cast: ['hank-mccoy', 'jean-grey', 'nightcrawler-kurt-wagner', 'mastermind-jason-wyngarde', 'blink-clarice-ferguson', 'victor-creed', 'archangel-warren-worthington', 'colossus-piotr-rasputin', 'gambit-remy-lebeau', 'rogue-anna-marie', 'morph-kevin-sydney', 'fred-dukes', 'callisto', 'pyro', 'sean-cassidy'],
    locations: ['xaviers-school-for-gifted-youngsters'],
  },
  {
    id: 'magneto-discovers-children',
    date: { year: 1995, order: 210 },
    segment: 'E13–E14',
    title: 'Quicksilver, the Scarlet Witch and Nightcrawler find their parents',
    text: [
      "[Quicksilver](pietro) and the [Scarlet Witch](scarlet-witch) learn from their dying father, Django Maximoff, that he adopted them, and on Mount Wundagore the [High Evolutionary](high-evolutionary) reveals that they are the children of [Magneto](erik-lehnsherr) and his late wife, Magda. Magneto frees them from the High Evolutionary's prison and tries to reach them.",
      'On Halloween, [Graydon Creed](graydon-creed) sets out to kill the mutants of his own family, and at a dam held by the Friends of Humanity [Mystique](raven-darkholme) tells [Nightcrawler](nightcrawler-kurt-wagner) that he is one of the two children she bore before she adopted Rogue. Creed shoots her and she falls from the dam, but she walks away into the woods, and the Friends of Humanity hand Creed to [Sabretooth](victor-creed).',
    ],
    cast: ['bova', 'charles-xavier', 'logan-wolverine', 'hank-mccoy', 'rogue-anna-marie', 'jubilee-jubilation-lee'],
    locations: ['kirby-glen', 'xaviers-school-for-gifted-youngsters', 'mount-wundagore-genetic-citadel-and-bovas-cottage', 'friends-of-humanity-compound-and-bavarian-waterfall-ridge'],
    deaths: [{ name: 'Django Maximoff' }],
  },
  {
    id: 'weapon-x-ruins-memories-lies',
    date: { year: 1995, order: 240 },
    segment: 'E16',
    title: 'At the ruins of Weapon X, Wolverine learns his memories were lies',
    text: [
      "Tormented by dreams, [Wolverine](logan-wolverine) follows a photo to the abandoned Weapon X facility in Alberta, where [Sabretooth](victor-creed), [Silver Fox](kayla-silverfox) and [Maverick](agent-zero), whom he believed dead, are waiting. In its stage sets and the Professor's videotapes the four learn that their memories were planted, and they escape as the facility explodes; Silver Fox tells Logan that their love belonged to a different lifetime.",
    ],
    cast: ['cyclops-scott-summers', 'jean-grey', 'hank-mccoy', 'charles-xavier'],
    locations: ['xaviers-school-for-gifted-youngsters', 'weapon-x-facility-alberta'],
  },
  {
    id: 'scott-jean-wedding',
    date: { year: 1995, order: 260 },
    segment: 'E18–E21',
    title: 'Scott and Jean wed, and the X-Men stop Apocalypse at the Axis of Time',
    text: [
      '[Cyclops](cyclops-scott-summers) and [Jean Grey](jean-grey) marry at last, but the Nasty Boys of [Mister Sinister](mister-sinister-nathaniel-essex) kidnap Jean for [Apocalypse](en-sabah-nur-apocalypse), who, with the help of [Deathbird](deathbird), is collecting psychics. [Cable](cable-nathan-summers) and [Shard](shard-bishop) come from the future to help the X-Men, and Apocalypse takes [Charles Xavier](charles-xavier) to the Axis of Time.',
      "There, with the captured psychics, Apocalypse means to destroy all time and remake the universe with himself as its ruler. As whole eras blink out of existence, [Bishop](bishop-lucas-bishop) shoots open the psychics' tubes, [Magneto](erik-lehnsherr) and [Mystique](raven-darkholme) turn on Apocalypse, and the freed psychics send him to the astral plane; history comes back, and Bender, the caretaker of the Axis, reveals that he is Immortus.",
    ],
    cast: ['jubilee-jubilation-lee', 'logan-wolverine', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'hank-mccoy', 'morph-kevin-sydney', 'lilandra-neramani', 'psylocke-betsy-braddock', 'archangel-warren-worthington', 'victor-creed', 'emma-frost', 'shadow-king-amahl-farouk', 'mastermind-jason-wyngarde', 'gladiator-kallark'],
    locations: ['xaviers-school-for-gifted-youngsters', 'shiar-imperial-crown-world-chandilar', 'castle-worthington', 'the-axis-of-time', 'astral-plane'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }],
  },
  {
    id: 'forge-sends-bishop-and-shard',
    date: { year: 2055, order: 30 },
    segment: 'E9–E10, E18',
    title: 'Forge sends Bishop and Shard to 1959, and later Shard to find Bishop',
    branch: 'bishop-future',
    text: [
      '[Forge](forge) detects that [Trevor Fitzroy](trevor-fitzroy), on the orders of Master Mold, has gone back to 1959 to kill the young Charles Xavier, and sends [Bishop](bishop-lucas-bishop) and his sister [Shard](shard-bishop) after him with bracelets that keep them in existence while history changes. Later, when the leap of Apocalypse to the Axis of Time throws Bishop out of his own time, Forge sends Shard back to the 1990s to look for him.',
    ],
    locations: ['sentinel-mutant-internment-camp-and-subway-bunker', 'the-axis-of-time'],
  },
  {
    id: 'master-mold-future-forge-portal',
    date: { year: 2055, order: 35 },
    segment: 'E10',
    title: "In Master Mold's 2055, a Forge who never met them fixes the portal",
    branch: 'xavier-dies-1959',
    text: [
      'After failing in 1959, [Bishop](bishop-lucas-bishop), [Shard](shard-bishop) and the married [Wolverine](logan-wolverine) and [Storm](storm-ororo-munroe) jump to a 2055 ruled by [Master Mold](master-mold), where a [Forge](forge) who has never met them repairs his portal, and the [Trevor Fitzroy](trevor-fitzroy) of this future gives Bishop a message for his younger self before Nimrod blasts him. Shard, hurt protecting Forge, urges the others on, and they leap back to 1959 as Nimrod moves in on her and Forge.',
    ],
    locations: ['sentinel-mutant-internment-camp-and-subway-bunker'],
    deaths: [{ character: 'shard-bishop', presumed: true }, { character: 'forge', presumed: true }],
  },
  {
    id: 'cable-raids-apocalypse-3999',
    date: { year: 3999, order: 30 },
    segment: 'E18–E20',
    title: 'Cable loses his time computer to Apocalypse and steals a time ship',
    text: [
      'In Cairo, [Apocalypse](en-sabah-nur-apocalypse) traps [Cable](cable-nathan-summers) and the Clan Chosen and takes his time computer to reach the Axis of Time. Cable steals a time machine to go back and fight him, and Apocalypse diverts the trip so that Cable lands in the present.',
    ],
    locations: ['apocalypse-pyramid-cairo'],
  },
]);
