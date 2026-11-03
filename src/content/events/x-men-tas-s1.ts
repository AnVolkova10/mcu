// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s1', [
  {
    id: 'jubilee-saved-morph-lost',
    date: { year: 1992, order: 50 },
    segment: 'E1–E2',
    title: 'The X-Men take in Jubilee and lose Morph and Beast to the Sentinels',
    text: [
      "[Jubilee](jubilee-jubilation-lee) hears her foster parents agree to hand her over to the Mutant Control Agency and runs away to the Salem Center mall, where a [Sentinel](object:sentinels) comes for her. [Storm](storm-ororo-munroe), [Rogue](rogue-anna-marie) and [Gambit](gambit-remy-lebeau) hold it off, [Cyclops](cyclops-scott-summers) blows its head off, and Jubilee wakes up in the mansion of [Charles Xavier](charles-xavier). The Sentinel's head shows that the Agency is leaking the files of registered mutants, and when Jubilee goes back home, [Henry Gyrich](henry-gyrich) takes her away with two Sentinels.",
      "The X-Men raid the Agency's headquarters in Washington and destroy the files, but Sentinels catch them on the way out: [Morph](morph-kevin-sydney) falls, seemingly killed, and [Beast](hank-mccoy) is captured when Cyclops orders the retreat. **The President** condemns the raid and orders Gyrich to shut his program down. Cyclops blasts the arm off a Sentinel at Jubilee's home and follows it to an abandoned factory in Detroit, where the X-Men destroy the Sentinels that [Bolivar Trask](bolivar-trask) builds for Gyrich and free Jubilee, though both men escape. Jubilee says goodbye to her foster parents and moves into the mansion.",
    ],
    cast: ['logan-wolverine', 'jean-grey', 'senator-robert-kelly'],
    locations: ['jubilee-foster-home', 'galleria-shopping-mall', 'xaviers-school-for-gifted-youngsters', 'mutant-control-agency-mainframe-vaults', 'the-white-house-lawn-and-rfk-stadium', 'detroit-sentinel-factory'],
    objects: [{ id: 'sentinels', at: ['jubilee-foster-home', 'galleria-shopping-mall', 'xaviers-school-for-gifted-youngsters', 'mutant-control-agency-mainframe-vaults', 'detroit-sentinel-factory'] }],
  },
  {
    id: 'magneto-cape-citadel-missiles',
    date: { year: 1992, order: 60 },
    segment: 'E3–E4',
    title: 'Magneto returns and Sabretooth betrays the X-Men',
    text: [
      '[Magneto](erik-lehnsherr) breaks into the detention center to free [Beast](hank-mccoy), who refuses to leave and waits for his day in court. At the hearing his bail is denied, and when [Sabretooth](victor-creed) storms the courthouse and is shot down, [Cyclops](cyclops-scott-summers) saves him and brings him to the mansion, to the fury of [Wolverine](logan-wolverine). Magneto then takes over the Drake Missile Base and launches its missiles at the base itself, and [Storm](storm-ororo-munroe) short-circuits them and drops them into the sea.',
      'While [Charles Xavier](charles-xavier) treats Sabretooth, Wolverine leaves the mansion. Magneto sets the Metro Chemical plant on fire to draw Xavier out, beats Cyclops, Storm and [Rogue](rogue-anna-marie), and flees when Xavier turns his own painful memories against him. Senator [Robert Kelly](senator-robert-kelly) announces that he is running for president and promises to send every mutant to a camp. Sabretooth admits that Magneto sent him and attacks [Jubilee](jubilee-jubilation-lee), until Wolverine comes back and Jubilee blasts Sabretooth out through a wall.',
    ],
    cast: ['jean-grey', 'henry-gyrich'],
    locations: ['washington-detention-center', 'xaviers-school-for-gifted-youngsters', 'washington-federal-courthouse', 'cape-citadel-military-missile-installation', 'richmond-chemical-refining-plant'],
  },
  {
    id: 'storm-duels-callisto',
    date: { year: 1992, order: 70 },
    segment: 'E5',
    title: 'Storm duels Callisto to free Cyclops from the Morlocks',
    text: [
      "After a night at *The Phantom of the Opera*, [Scott Summers](cyclops-scott-summers) and [Jean Grey](jean-grey) defend a young mutant, Leech, from a mob and are taken by the Morlocks, mutants who live in the tunnels under Manhattan. Leech cancels Scott's powers and [Callisto](callisto), their leader, wants him as her mate, while Annalee makes Jean believe she is her daughter. [Storm](storm-ororo-munroe), [Wolverine](logan-wolverine), [Rogue](rogue-anna-marie) and [Gambit](gambit-remy-lebeau) go down after them, and the Morlock Plague gives Gambit a fever.",
      'To end the fight, Storm challenges Callisto to a duel without powers and wins it despite her claustrophobia. She offers the Morlocks a home at the mansion; they choose to stay underground, and Storm leaves Callisto ruling in her name. Back at the mansion, Scott and Jean find that Wolverine, in love with Jean, has left.',
    ],
    cast: ['charles-xavier'],
    locations: ['xaviers-school-for-gifted-youngsters', 'morlock-subterranean-tunnels-and-nyc-sewers'],
  },
  {
    id: 'genosha-slave-uprising',
    date: { year: 1992, order: 80 },
    segment: 'E6–E7',
    title: "Storm, Gambit and Jubilee break free of Genosha's slave camp",
    text: [
      'In the Canadian Arctic, [Sabretooth](victor-creed) throws [Wolverine](logan-wolverine) into the icy sea, and an Inuit fishing camp on Baffin Island takes him in. The jealous young Kiyoek helps Sabretooth, who burns the camp and ties its people to a bridge of ice; Wolverine and Kiyoek save them, and Sabretooth falls into a chasm. Meanwhile [Gambit](gambit-remy-lebeau), [Storm](storm-ororo-munroe) and [Jubilee](jubilee-jubilation-lee) visit Genosha, an island that welcomes mutants, until they are gassed in their hotel and a [Sentinel](object:sentinels) captures them.',
      "With collars that block their powers, they are forced to build a dam for the Sentinel factory of [Bolivar Trask](bolivar-trask) and [Henry Gyrich](henry-gyrich), where [Master Mold](master-mold) makes Sentinels on its own. Gambit pretends to betray his friends, escapes, and gets a key to the collars from [Cable](cable-nathan-summers), a mercenary who has turned against the island's ruler, the Leader. The slaves break free and Storm brings down the dam, whose flood sweeps away the factory, Master Mold, the Leader, his adviser Cameron Hodge and Cable. The X-Men who came looking for them fly home and find the mansion destroyed.",
    ],
    cast: ['charles-xavier', 'cyclops-scott-summers', 'jean-grey', 'rogue-anna-marie', 'fred-dukes'],
    locations: ['xaviers-school-for-gifted-youngsters', 'tuktoyaktuk-arctic-outpost', 'genosha-beach-inn', 'the-great-hydroelectric-dam-and-slave-complex'],
    objects: [{ id: 'sentinels', at: ['genosha-beach-inn', 'the-great-hydroelectric-dam-and-slave-complex'] }],
  },
  {
    id: 'xmen-topple-juggernaut',
    date: { year: 1992, order: 90 },
    segment: 'E8',
    title: 'The X-Men and Colossus stop the Juggernaut in Manhattan',
    text: [
      'In the ruins of the mansion the X-Men find a message from Xavier, who had left before it was destroyed. [Jubilee](jubilee-jubilation-lee) and [Wolverine](logan-wolverine) suspect [Colossus](colossus-piotr-rasputin), a Russian mutant working at a Manhattan construction site, but his scent is not the one at the ruins. The police arrest him after a robbery at the First National Bank, and when [Storm](storm-ororo-munroe) and [Rogue](rogue-anna-marie) break into the jail to question him, they also find [Beast](hank-mccoy), still waiting for his trial.',
      "The real robber is Xavier's brother [Cain Marko](juggernaut-cain-marko), the Juggernaut, who wrecked the mansion looking for him and robs banks to draw him out. With Colossus's help the X-Men pull off the helmet that shields his mind, and [Jean Grey](jean-grey), wearing a [Cerebro](object:cerebro) helmet, wipes the X-Men from his memory. Colossus helps rebuild the mansion but turns down a place on the team to look for his sister.",
    ],
    cast: ['cyclops-scott-summers'],
    locations: ['xaviers-school-for-gifted-youngsters', 'midtown-manhattan-construction-site', 'first-national-bank', 'manhattan-city-jail'],
    objects: [{ id: 'cerebro', at: [] }],
  },
  {
    id: 'horsemen-assault-peace-summit',
    date: { year: 1992, order: 100 },
    segment: 'E9–E10',
    title: 'Apocalypse turns mutants seeking a cure into his Horsemen',
    text: [
      '[Cable](cable-nathan-summers) attacks [Warren Worthington](archangel-warren-worthington) at his chalet in the Bavarian Alps, hunting Dr. Gottfried Adler, the maker of the Genoshan collars, who now offers mutants a cure on Muir Island. [Rogue](rogue-anna-marie) goes there to lose her powers, but Adler is [Mystique](raven-darkholme) in disguise: [Apocalypse](en-sabah-nur-apocalypse) killed the real doctor and uses the cure to find slaves. When [Avalanche](avalanche) and [Pyro](pyro) kidnap "Adler" for ransom and Cable threatens to kill him, Mystique gives herself away, and Rogue, after saving [Jean Grey](jean-grey) from a fall, turns the cure down. Warren arrives to take it.',
      "Apocalypse turns Warren into Death, and three other mutants who came for the cure into Famine, Pestilence and War, and his Horsemen attack the World Peace Conference in Paris. [Charles Xavier](charles-xavier) recognizes them from Muir Island and sends Rogue back there, where she unmasks Mystique and destroys her machine. The X-Men follow the Horsemen to Apocalypse's base under Stonehenge: Rogue absorbs Warren's dark side, he turns on the other Horsemen, and Apocalypse escapes into space in a ship.",
    ],
    cast: ['moira-mactaggert', 'gambit-remy-lebeau', 'cyclops-scott-summers', 'storm-ororo-munroe', 'logan-wolverine', 'jubilee-jubilation-lee'],
    locations: ['worthington-chalet', 'muir-island-mutant-research-facility', 'xaviers-school-for-gifted-youngsters', 'world-peace-summit-at-arc-de-triomphe', 'stonehenge'],
  },
  {
    id: 'bishop-foils-kelly-assassination',
    date: { year: 1992, order: 110 },
    segment: 'E11–E12',
    title: 'Bishop arrives from 2055 to stop an assassination in Washington',
    text: [
      '[Bishop](bishop-lucas-bishop) arrives from 2055 remembering only that an X-Man is about to commit an assassination. While [Rogue](rogue-anna-marie) and [Gambit](gambit-remy-lebeau) visit [Beast](hank-mccoy) in detention, he crashes a stolen bus into the mansion and fights the X-Men, until [Charles Xavier](charles-xavier) uses [Cerebro](object:cerebro) to show everyone his memories of a future ruled by Sentinels. Nimrod, a [Sentinel](object:sentinels) of his time, has followed him; the X-Men bring it down and Bishop shoots off the device that sends it back to 2055. When Gambit walks in, Bishop recognizes him as the assassin and opens fire.',
      "The target is in Washington, so the X-Men fly to the Capitol, where Xavier is to speak before Senator [Robert Kelly](senator-robert-kelly), and Gambit escapes from [Wolverine](logan-wolverine) and Bishop in a jet to follow them. While [Avalanche](avalanche), [Pyro](pyro) and the [Blob](fred-dukes) attack the hearing, [Mystique](raven-darkholme), posing as Kelly's aide and then as Gambit, tries to shoot Kelly, but the real Gambit stops her. Bishop is about to kill both Gambits when Rogue tears off his device and he vanishes back to 2055. Mystique tells Rogue that she is her foster mother and that Apocalypse wanted Kelly dead, Rogue lets her go, and Xavier finds Kelly's office wrecked and his own watch magnetized: [Magneto](erik-lehnsherr) has taken the senator.",
    ],
    cast: ['cyclops-scott-summers', 'storm-ororo-munroe', 'jean-grey', 'jubilee-jubilation-lee'],
    locations: ['washington-detention-center', 'xaviers-school-for-gifted-youngsters', 'united-states-capitol-building'],
    objects: [
      { id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] },
      { id: 'sentinels', at: [] },
    ],
  },
  {
    id: 'master-mold-obliterated',
    date: { year: 1992, order: 120 },
    segment: 'E13',
    title: 'Master Mold turns on humans and the X-Men destroy it',
    text: [
      '[Magneto](erik-lehnsherr) takes [Robert Kelly](senator-robert-kelly) to a sunken freighter in the Atlantic to kill him and start a war, but [Sentinels](object:sentinels) beat him and carry the senator off, and the X-Men take the wounded Magneto to the mansion. In a base hidden in an abandoned coal mine, [Bolivar Trask](bolivar-trask) shows Kelly [Master Mold](master-mold), which stops obeying him: since mutants are human, the Sentinels must rule humans too, starting by replacing the brains of world leaders with computers. In the memories of [Gambit](gambit-remy-lebeau), [Charles Xavier](charles-xavier) finds [Henry Gyrich](henry-gyrich), and the X-Men catch him at the Lincoln Memorial and learn where the base is.',
      "With Trask's help, [Cyclops](cyclops-scott-summers) and [Jean Grey](jean-grey) get Kelly out, and Xavier flies the Blackbird, packed with explosives and shielded by Magneto, into Master Mold. Kelly changes his campaign, and with his push [Beast](hank-mccoy) is pardoned and walks free. On a picnic Scott and Jean decide to get married, while [Mister Sinister](mister-sinister-nathaniel-essex) watches them.",
    ],
    cast: ['logan-wolverine', 'storm-ororo-munroe', 'rogue-anna-marie', 'jubilee-jubilation-lee'],
    locations: ['sunken-freighter', 'xaviers-school-for-gifted-youngsters', 'master-mold-subterranean-sentinel-foundry', 'lincoln-memorial', 'washington-detention-center'],
    objects: [{ id: 'sentinels', at: ['sunken-freighter', 'master-mold-subterranean-sentinel-foundry'] }],
  },
  {
    id: 'forge-launches-bishop',
    date: { year: 2055, order: 10 },
    segment: 'E11',
    title: 'Forge sends Bishop back from the Sentinel-ruled 2055',
    branch: 'bishop-future',
    text: [
      'In the ruins of New York, [Bishop](bishop-lucas-bishop) hunts rebel mutants for the [Sentinels](object:sentinels) and captures an old [Wolverine](logan-wolverine) and two young rebels. At the termination center the Sentinels tell him he has met his quota and will be killed too, and on the way in Logan passes the graves of the X-Men: Jubilee (died 2010), Storm (2021), Cyclops (2032) and Rogue (2033). They break free, and the two young rebels hold off the super-Sentinel Nimrod.',
      'At the rebel hideout, [Forge](forge) has built a time portal so that Logan can go back to the 1990s and stop the assassination that, the rebels believe, started it all. Bishop argues that Logan could never kill an X-Man and goes in his place, with a wristband that will pull him back if it is torn off, as the Sentinels and Nimrod storm the hideout.',
    ],
    locations: ['mutant-termination-center', 'sentinel-mutant-internment-camp-and-subway-bunker'],
    objects: [{ id: 'sentinels', at: ['mutant-termination-center', 'sentinel-mutant-internment-camp-and-subway-bunker'] }],
  },
  {
    id: 'bishop-returns-unchanged-future',
    date: { year: 2055, order: 15 },
    segment: 'E12',
    title: 'Bishop returns to a 2055 that has not changed',
    branch: 'bishop-future',
    text: [
      'Torn from the past, [Bishop](bishop-lucas-bishop) lands outside the hideout of [Forge](forge) and finds his future as grim as he left it, although the assassination never happened. Forge decides that something else must have gone wrong afterwards and that they can try again: "The one thing we have plenty of, is time."',
    ],
    locations: ['sentinel-mutant-internment-camp-and-subway-bunker'],
  },
]);
