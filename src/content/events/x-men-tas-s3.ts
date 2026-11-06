// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s3', [
  {
    id: 'wolverine-deathstrike-spirit-drinker',
    date: { year: 1994, order: 50 },
    segment: 'E1–E2, E8–E13, E19',
    title: 'The X-Men face Lady Deathstrike, Killgrave, Mojo and Sauron',
    text: [
      "[Lady Deathstrike](lady-deathstrike-yuriko-oyama) frees the Spirit Drinker from an alien prison ship dug up by the Morlocks, and the X-Men destroy it with the third rail of a subway line, returning the souls it had absorbed. [Cyclops](cyclops-scott-summers) goes back to the orphanage of his childhood in Omaha and saves its mutant children from [Zebediah Killgrave](zebediah-killgrave), who can control minds, and the rage of [Archangel](archangel-warren-worthington) wrecks the X-Men's trap for [Apocalypse](en-sabah-nur-apocalypse), who escapes into deep space.",
      "[Longshot](longshot) flees to Earth, and [Mojo](mojo) comes after him to hunt the X-Men for his ratings. [Iceman](iceman-bobby-drake), one of the first X-Men, finds Lorna Dane, with whom he once lived, as [Polaris](polaris-lorna-dane) of X-Factor, the government's mutant team led by [Forge](forge), and she chooses to stay. [Sauron](sauron-karl-lykos) carries [Storm](storm-ororo-munroe) off to the Savage Land, where her tempest wakes the sun god [Garokk](garokk-petrified-man), and Cody, the first love of [Rogue](rogue-anna-marie), chooses to leave Earth with the insect-like Colony.",
    ],
    cast: ['charles-xavier', 'logan-wolverine', 'jubilee-jubilation-lee', 'hank-mccoy', 'gambit-remy-lebeau', 'jean-grey', 'callisto', 'rusty-collins-firefist', 'alex-summers', 'ka-zar-kevin-plunder'],
    locations: ['morlock-subterranean-tunnels-and-nyc-sewers', 'xaviers-school-for-gifted-youngsters', 'state-home-for-foundlings-and-killgrave-estate', 'nebraska-state-capitol', 'statue-of-liberty', 'kirby-glen', 'magnetos-citadel', 'american-museum-of-natural-history', 'central-park', 'the-savage-land', 'colony-crash-site'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }],
    deaths: [{ name: 'Spirit Drinker' }],
  },
  {
    id: 'phoenix-rises-jamaica-bay',
    date: { year: 1994, order: 60 },
    segment: 'E3–E7',
    title: "Jean becomes the Phoenix and carries the M'Kraan Crystal into the Sun",
    text: [
      "Shielding a shuttle from radiation on its way back from space, [Jean Grey](jean-grey) is entered by a fiery bird and rises from New York Harbor: \"I am Phoenix!\" [Charles Xavier](charles-xavier) steps down and goes to Muir Island, where [Lilandra](lilandra-neramani), a Shi'ar princess fleeing her brother, reaches him, and the Phoenix saves her from [Gladiator](gladiator-kallark) of the Shi'ar Imperial Guard.",
      "The Phoenix carries the X-Men into space, where Jean reads in the mind of the space pirate [Corsair](corsair-christopher-summers) that he is the father of [Cyclops](cyclops-scott-summers), and keeps it to herself. Lilandra's brother, the emperor [D'Ken](d-ken-neramani), breaches the [M'Kraan Crystal](object:mkraan-crystal), which begins to swallow everything, even the light of the Sun, until the Phoenix stops him and carries the crystal into the heart of the Sun, where it will be safe.",
    ],
    cast: ['logan-wolverine', 'hank-mccoy', 'gambit-remy-lebeau', 'storm-ororo-munroe', 'jubilee-jubilation-lee', 'erik-the-red', 'moira-mactaggert', 'sean-cassidy', 'juggernaut-cain-marko', 'black-tom-cassidy', 'rogue-anna-marie', 'captain-britain', 'emma-frost', 'sebastian-shaw', 'mastermind-jason-wyngarde', 'doctor-strange', 'spider-man'],
    locations: ['xaviers-school-for-gifted-youngsters', 'cape-canaveral', 'starcore-space-shuttle', 'jamaica-bay', 'star-memorial-hospital-and-golden-gate-overlook', 'times-square', 'brooklyn-bridge', 'muir-island-mutant-research-facility', 'cassidy-keep', 'london-skywatch', 'hellfire-club-inner-circle-mansion', 'sanctum-sanctorum', 'lilandra-starcruiser', 'starjammer', 'dken-imperial-cruiser', 'mkraan-crystal-nexus-world', 'mount-fuji', 'acropolis-of-athens', 'storms-village', 'the-sun'],
    objects: [{ id: 'mkraan-crystal', at: ['lilandra-starcruiser', 'starjammer', 'dken-imperial-cruiser', 'the-sun'] }],
  },
  {
    id: 'dark-phoenix-sacrifice',
    date: { year: 1994, order: 130 },
    segment: 'E14–E17',
    title: 'Jean becomes the Dark Phoenix, dies on the Moon and comes back to life',
    text: [
      "The Inner Circle of the Circle Club wants the power of the Phoenix: [Mastermind](mastermind-jason-wyngarde) plants a false life in the mind of [Jean Grey](jean-grey) and crowns her its Black Queen, until the Phoenix breaks free of him and becomes the Dark Phoenix, which destroys the D'Bari star system.",
      "On the Moon, [Lilandra](lilandra-neramani), now Majestrix of the Shi'ar, sentences the Dark Phoenix to death, and the X-Men fight a duel for Jean's life against the Imperial Guard. When the Phoenix takes over again, Jean runs into the beam of Lilandra's ship and dies; the remorseful Phoenix brings her back with a little of each X-Man's life force and leaves her.",
    ],
    cast: ['cyclops-scott-summers', 'sebastian-shaw', 'storm-ororo-munroe', 'charles-xavier', 'emma-frost', 'doctor-strange', 'thor', 'uatu-the-watcher', 'gladiator-kallark', 'logan-wolverine', 'gambit-remy-lebeau', 'hank-mccoy', 'rogue-anna-marie', 'moira-mactaggert', 'sean-cassidy'],
    locations: ['muir-island-mutant-research-facility', 'club-m', 'xaviers-school-for-gifted-youngsters', 'hellfire-club-inner-circle-mansion', 'childhood-home-of-jean-grey', 'sanctum-sanctorum', 'dbari-star-system', 'lilandra-starcruiser', 'blue-area-of-the-moon'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }],
  },
  {
    id: 'corsair-finds-his-son',
    date: { year: 1994, order: 140 },
    segment: 'E18',
    title: "Corsair, hunted by a Shi'ar officer, finds his son Scott",
    text: [
      "The Starjammers crash by the mansion, and [Cyclops](cyclops-scott-summers) learns that their captain, [Corsair](corsair-christopher-summers), is his father. A Shi'ar commander accuses Corsair of kidnapping a young girl who in fact saw a high-ranking Shi'ar officer commit a murder; Scott and the Starjammers drive the commander off, and father and son make peace.",
    ],
    cast: ['storm-ororo-munroe'],
    locations: ['xaviers-school-for-gifted-youngsters', 'central-american-jungle'],
  },
]);
