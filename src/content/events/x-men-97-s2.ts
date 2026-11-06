// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-97-s2', [
  {
    id: 'en-sabah-nur-becomes-apocalypse',
    date: { year: -3000, order: 20 },
    segment: 'E3–E4',
    title: 'En Sabah Nur becomes Apocalypse, and Magneto dies trying to stop him',
    text: [
      "Months after they were lost in ancient Egypt, [Magneto](erik-lehnsherr) mentors the young [En Sabah Nur](en-sabah-nur-apocalypse), who leads the Sandstormers against the pharaoh [Rama-Tut](kang), hoping to make him \"the first X-Man\", while [Charles Xavier](charles-xavier) distrusts him. Rama-Tut's general, [Logos](general-logos), turns out to be Nur's first slave master, and Nur spares him on Magneto's word; but when he finds the X-Men using Rama-Tut's machines to get home, he kills Logos, back to his own creed: survival of the fittest. [Bishop](bishop-lucas-bishop) arrives from the 1990s just as Rama-Tut strikes their camp, where Baal and the other Sandstormers die and Magneto shields the X-Men.",
      "Following a star to a lost temple of beings from the stars, Nur finds the living starship [Ship](object:ship), reads his future on its walls and takes its power: \"I am the rocks of the Eternal Shore.\" Rama-Tut, who tells Xavier that he has many names, \"Nathaniel, Victor, Kang\", leaves in his time machine for another age, telling his aide, the woman later known as the [X-Ternal](x-ternal), that only an external force can challenge Apocalypse. Magneto forces the time bands, mended with parts of Ship, on the others and stays behind, and as Ship erases Rama-Tut's city, Apocalypse kills him in front of Xavier, who calls him a monster: \"But I will always be.\" Bishop takes the X-Men home: \"We never stop him.\"",
    ],
    cast: ['rogue-anna-marie', 'nightcrawler-kurt-wagner', 'hank-mccoy'],
    locations: ['nile-valley-and-giza-dunes', 'rama-tut-capital', 'ships-temple'],
    objects: [{ id: 'ship', at: ['ships-temple'] }],
    deaths: ['erik-lehnsherr', 'general-logos', { name: 'Baal' }],
  },
  {
    id: 'forge-finds-xmen-3960',
    date: { year: 3960, order: 20 },
    segment: 'E1–E2',
    title: 'Forge finds the lost X-Men in 3960, and Nathan sends them home',
    text: [
      '[Forge](forge) reaches the 40th century and finds [Storm](storm-ororo-munroe), [Wolverine](logan-wolverine), [Morph](morph-kevin-sydney), [Cyclops](cyclops-scott-summers) and [Jean Grey](jean-grey), who have spent months with Clan Askani. [Mother Askani](mother-askani-rachel-summers), who comes from another, darker timeline, tells them that she pulled them out of 1997 to save them from their fated deaths: one team to the future, to train the young [Nathan](young-nathan-summers), destined to kill [Apocalypse](en-sabah-nur-apocalypse), and another to the past, to stop En Sabah Nur from ever becoming him.',
      "Apocalypse's Horsemen take Scott, Jean and Nathan to make the boy his new vessel, but Storm powers the living starship [Ship](object:ship) with a solar storm, the X-Men free the slaves of his citadel, and Apocalypse flees to the 1990s. Ship bonds with Nathan, setting him on the path to becoming Cable, and Nathan sends the X-Men back to their own time.",
    ],
    locations: ['clan-askani-sanctuary-citadel', 'apocalypse-pyramid-cairo'],
    objects: [{ id: 'ship', at: ['clan-askani-sanctuary-citadel', 'apocalypse-pyramid-cairo'] }],
  },
  {
    id: 'cable-founds-x-force',
    date: { year: 1998, order: 20, approx: true },
    segment: 'E1–E3',
    title: 'Forge and Bishop go after the X-Men, and Cable founds X-Force',
    text: [
      "Months after the X-Men vanished, [Forge](forge) and [Bishop](bishop-lucas-bishop) set out to bring them back from ancient Egypt and the 40th century. With the school in ruins, the government's X-Factor, run by [Val Cooper](valerie-cooper) with [Havok](alex-summers) and [Polaris](polaris-lorna-dane), hunts runaway young mutants, and [Cable](cable-nathan-summers), back in the 1990s where the reign of Apocalypse begins, recruits [Jubilee](jubilee-jubilation-lee) and [Roberto da Costa](sunspot-roberto-da-costa) into X-Force with [Psylocke](psylocke-betsy-braddock) and [Archangel](archangel-warren-worthington).",
      "In Rio de Janeiro, Archangel kills War, one of Apocalypse's Horsemen, on Cable's orders, to Jubilee's horror. A lead from [Emma Frost](emma-frost) takes X-Force into an X-Factor trap in Switzerland, where Jubilee is caught; Polaris, once an X-Man, lets her go, Jubilee frees the young mutants X-Factor holds, and Cooper brands X-Force fugitives. Then Forge brings Cyclops, Jean, Storm, Wolverine and Morph home to the ruined school.",
    ],
    cast: ['trish-tilby', 'cyclops-scott-summers', 'jean-grey', 'storm-ororo-munroe', 'logan-wolverine', 'morph-kevin-sydney'],
    locations: ['eagle-plaza-ranch-and-sacred-caverns', 'xaviers-school-for-gifted-youngsters', 'rio-de-janeiro', 'gstaad'],
    deaths: [{ name: 'War' }],
  },
  {
    id: 'team-x-weapon-x-lab',
    date: { year: 1998, order: 30, approx: true },
    segment: 'E4–E5',
    title: "Wolverine's old Team X raids a Weapon X lab, and he regains his claws",
    text: [
      "Back from 3960, [Wolverine](logan-wolverine) meets [Captain America](steve-rogers) again after about fifty years, and [Black Widow](black-widow) hands him a Weapon X file. With [Morph](morph-kevin-sydney) he gathers [Sabretooth](victor-creed), [Lady Deathstrike](lady-deathstrike-yuriko-oyama), [Maverick](agent-zero) and Kane, his old Team X, to kill [Dr. Cornelius](dr-cornelius) at a new Weapon X lab in the Arctic; Kane dies when mutated birds bring their helicopter down, and they find everyone in the lab dead.",
      "Cornelius has turned into one of the Brood, the aliens he used to wipe his subjects' memories. Infected, Logan kills Maverick and frees [Omega Red](omega-red-arkady-rossovich), until the others put him in the lab's chamber, which purges the Brood and gives him back his [adamantium](object:adamantium) skeleton, the real reason he came; he beats Omega Red, and they escape as the lab explodes.",
    ],
    locations: ['weapon-x-arctic-lab'],
    objects: [{ id: 'adamantium', at: ['weapon-x-arctic-lab'] }],
    deaths: [{ name: 'Kane' }, 'agent-zero', 'dr-cornelius'],
  },
  {
    id: 'xavier-founds-x-corp',
    date: { year: 1998, order: 40, approx: true },
    segment: 'E6',
    title: 'Xavier founds X-Corp on Genosha after Danger turns on the school',
    text: [
      "Mourning Magneto, [Charles Xavier](charles-xavier) reopens the school with [Storm](storm-ororo-munroe) as its headmistress, although President Kelly has outlawed the X-Men, and [Val Cooper](valerie-cooper) dismisses [Polaris](polaris-lorna-dane) from X-Factor after she seizes a Purifier ship carrying [vibranium](object:vibranium). The Danger Room, where Xavier relives Magneto's death, turns on the students and taunts Polaris, and her blast gives it a body: as [Danger](danger) it follows Xavier to the ruins of Genosha, until Polaris, Magneto's daughter, overloads it with the help of Xavier's memories of her father.",
      'Xavier founds X-Corp on Genosha to rebuild his X-Men overseas, and in Athens [Apocalypse](en-sabah-nur-apocalypse) brings [Gambit](gambit-remy-lebeau) back from the grave as one of his Horsemen.',
    ],
    cast: ['cyclops-scott-summers', 'jean-grey', 'hank-mccoy', 'bishop-lucas-bishop', 'forge', 'morph-kevin-sydney', 'alex-summers'],
    locations: ['xaviers-school-for-gifted-youngsters', 'genosha-capital-and-council-plaza', 'acropolis-of-athens'],
  },
  {
    id: 'exodus-tries-graydon-creed',
    date: { year: 1998, order: 50, approx: true },
    segment: 'E7',
    title: 'Exodus puts Graydon Creed on trial in the Savage Land',
    text: [
      '[Graydon Creed](graydon-creed) announces that he is running for president against Kelly, and the Acolytes of the late Magneto, led by [Exodus](exodus), carry him off to their fortress in the Savage Land. [Nightcrawler](nightcrawler-kurt-wagner), [Rogue](rogue-anna-marie), [Beast](hank-mccoy), [Bishop](bishop-lucas-bishop) and [Polaris](polaris-lorna-dane) go after him and find [Colossus](colossus-piotr-rasputin) among the Acolytes since his sister Illyana died on Genosha.',
      'At the trial, with Colossus presiding, Kurt defends Creed, his half-brother through their mother, Mystique, and beats Exodus in a sword duel; Creed shoots Exodus and turns his gun on Kurt, who leaves him in the snow for X-Factor to find, and Colossus moves to the school. In Athens, X-Force finds the corpse of [Apocalypse](en-sabah-nur-apocalypse) and one of Gambit\'s cards.',
    ],
    cast: ['charles-xavier', 'valerie-cooper', 'cable-nathan-summers', 'psylocke-betsy-braddock', 'archangel-warren-worthington'],
    locations: ['the-savage-land', 'magnetos-citadel', 'xaviers-school-for-gifted-youngsters', 'acropolis-of-athens'],
    deaths: [{ character: 'exodus', presumed: true }],
  },
  {
    id: 'rogue-frees-gambit',
    date: { year: 1998, order: 60, approx: true },
    segment: 'E8–E9',
    title: 'Rogue frees Gambit from Apocalypse, and Creed wins the presidency',
    text: [
      "[Gambit](gambit-remy-lebeau), who has killed Apocalypse's body, goes home to New Orleans, enthralls the guilds and [Nightcrawler](nightcrawler-kurt-wagner) and carries off [Rogue](rogue-anna-marie). He tells her that the [X-Ternal](x-ternal), a priestess of ancient Egypt, courted Apocalypse and then betrayed him, and at a wedding ceremony he kills her to give her power to Rogue; inside his mind, [Charles Xavier](charles-xavier) finds [Apocalypse](en-sabah-nur-apocalypse) in control: \"I always survive!\"",
      "While X-Factor and X-Force storm X-Corp to get at Gambit, [Cable](cable-nathan-summers), raised to believe that killing Apocalypse is his destiny, shoots him, and Apocalypse takes over his body and every mutant there. Rogue, who has gone into the shrine of the living starship [Ship](object:ship) and traded her life for the power to stop him, frees them all and seals Apocalypse's mind in a crystal that she gives to Cable; she lives because Nightcrawler offered his own life in her place. President Kelly concedes the election to [Graydon Creed](graydon-creed), and [Mystique](raven-darkholme) shoots [Val Cooper](valerie-cooper) and takes her place.",
    ],
    cast: ['bella-donna-boudreaux', 'psylocke-betsy-braddock', 'archangel-warren-worthington', 'jubilee-jubilation-lee', 'sunspot-roberto-da-costa', 'cyclops-scott-summers', 'jean-grey', 'hank-mccoy', 'logan-wolverine', 'bishop-lucas-bishop', 'polaris-lorna-dane', 'alex-summers', 'trish-tilby'],
    locations: ['genosha-capital-and-council-plaza', 'new-orleans-bayou', 'ships-temple'],
    objects: [{ id: 'ship', at: ['ships-temple'] }],
    deaths: ['x-ternal', 'valerie-cooper'],
  },
]);
