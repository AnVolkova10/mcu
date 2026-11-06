// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s1', [
  {
    id: 'jubilee-saved-morph-lost',
    date: { year: 1992, order: 50 },
    segment: 'E1–E2',
    title: 'The X-Men take in Jubilee and lose Morph and Beast to the Sentinels',
    text: [
      'Hunted by a [Sentinel](object:sentinels), [Jubilee](jubilee-jubilation-lee) is taken in by the X-Men at the mansion of [Charles Xavier](charles-xavier). When [Henry Gyrich](henry-gyrich) seizes her, the X-Men raid the Mutant Control Agency, where [Morph](morph-kevin-sydney) falls, seemingly killed, and [Beast](hank-mccoy) is captured; then they destroy the Sentinels that [Bolivar Trask](bolivar-trask) builds in Detroit and free Jubilee, who moves into the mansion.',
    ],
    cast: ['storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'cyclops-scott-summers', 'logan-wolverine', 'jean-grey', 'senator-robert-kelly'],
    locations: ['jubilee-foster-home', 'galleria-shopping-mall', 'xaviers-school-for-gifted-youngsters', 'mutant-control-agency-mainframe-vaults', 'the-white-house-lawn-and-rfk-stadium', 'detroit-sentinel-factory'],
    objects: [{ id: 'sentinels', at: ['jubilee-foster-home', 'galleria-shopping-mall', 'xaviers-school-for-gifted-youngsters', 'mutant-control-agency-mainframe-vaults', 'detroit-sentinel-factory'] }],
  },
  {
    id: 'magneto-cape-citadel-missiles',
    date: { year: 1992, order: 60 },
    segment: 'E3–E5, E8',
    title: 'Magneto, Sabretooth, the Morlocks and the Juggernaut test the X-Men',
    text: [
      '[Magneto](erik-lehnsherr) fires the missiles of the Drake Missile Base at the base itself until [Storm](storm-ororo-munroe) drops them into the sea, and [Sabretooth](victor-creed), taken in at the mansion, turns out to be his spy until [Jubilee](jubilee-jubilation-lee) blasts him out through a wall. Senator [Robert Kelly](senator-robert-kelly) announces that he is running for president and promises to send every mutant to a camp.',
      "Under Manhattan, Storm wins a duel without powers against [Callisto](callisto), leader of the Morlocks, to free [Cyclops](cyclops-scott-summers) and [Jean Grey](jean-grey). Xavier's brother, [Cain Marko](juggernaut-cain-marko), the Juggernaut, wrecks the mansion looking for him, until the X-Men and [Colossus](colossus-piotr-rasputin) pull off his helmet and Jean wipes them from his memory.",
    ],
    cast: ['hank-mccoy', 'logan-wolverine', 'charles-xavier', 'rogue-anna-marie', 'henry-gyrich', 'gambit-remy-lebeau'],
    locations: ['washington-detention-center', 'xaviers-school-for-gifted-youngsters', 'washington-federal-courthouse', 'cape-citadel-military-missile-installation', 'richmond-chemical-refining-plant', 'morlock-subterranean-tunnels-and-nyc-sewers', 'midtown-manhattan-construction-site', 'first-national-bank', 'manhattan-city-jail'],
    objects: [{ id: 'cerebro', at: [] }],
  },
  {
    id: 'genosha-slave-uprising',
    date: { year: 1992, order: 80 },
    segment: 'E6–E7',
    title: "Storm, Gambit and Jubilee break free of Genosha's slave camp",
    text: [
      '[Gambit](gambit-remy-lebeau), [Storm](storm-ororo-munroe) and [Jubilee](jubilee-jubilation-lee) visit Genosha, an island that welcomes mutants, and are enslaved, with collars that block their powers, to build a dam for the Sentinel factory of [Bolivar Trask](bolivar-trask), where [Master Mold](master-mold) makes [Sentinels](object:sentinels) on its own. With a key from the mercenary [Cable](cable-nathan-summers) the slaves break free, Storm brings down the dam, and its flood sweeps away the factory and Master Mold.',
      'Meanwhile, in the Canadian Arctic, [Wolverine](logan-wolverine) saves an Inuit camp from [Sabretooth](victor-creed). Back home, the X-Men find the mansion destroyed.',
    ],
    cast: ['henry-gyrich', 'charles-xavier', 'cyclops-scott-summers', 'jean-grey', 'rogue-anna-marie', 'fred-dukes'],
    locations: ['xaviers-school-for-gifted-youngsters', 'tuktoyaktuk-arctic-outpost', 'genosha-beach-inn', 'the-great-hydroelectric-dam-and-slave-complex'],
    objects: [{ id: 'sentinels', at: ['genosha-beach-inn', 'the-great-hydroelectric-dam-and-slave-complex'] }],
  },
  {
    id: 'horsemen-assault-peace-summit',
    date: { year: 1992, order: 100 },
    segment: 'E9–E10',
    title: 'Apocalypse turns mutants seeking a cure into his Horsemen',
    text: [
      "[Apocalypse](en-sabah-nur-apocalypse) uses a false cure for mutants on Muir Island, run by [Mystique](raven-darkholme) in disguise, to find slaves, and turns [Warren Worthington](archangel-warren-worthington) and three other mutants who came for it into his Horsemen, who attack the World Peace Conference in Paris. [Rogue](rogue-anna-marie) turns the cure down and destroys Mystique's machine, and at Apocalypse's base under Stonehenge she absorbs Warren's dark side, he turns on the other Horsemen, and Apocalypse escapes into space.",
    ],
    cast: ['cable-nathan-summers', 'avalanche', 'pyro', 'jean-grey', 'charles-xavier', 'moira-mactaggert', 'gambit-remy-lebeau', 'cyclops-scott-summers', 'storm-ororo-munroe', 'logan-wolverine', 'jubilee-jubilation-lee'],
    locations: ['worthington-chalet', 'muir-island-mutant-research-facility', 'xaviers-school-for-gifted-youngsters', 'world-peace-summit-at-arc-de-triomphe', 'stonehenge'],
  },
  {
    id: 'bishop-foils-kelly-assassination',
    date: { year: 1992, order: 110 },
    segment: 'E11–E12',
    title: 'Bishop arrives from 2055 to stop an assassination in Washington',
    text: [
      '[Bishop](bishop-lucas-bishop) arrives from 2055 to stop an assassination by an X-Man that, his rebels believe, led to the rule of the [Sentinels](object:sentinels), and takes [Gambit](gambit-remy-lebeau) for the killer. At the Capitol, [Mystique](raven-darkholme), posing as Gambit, tries to shoot Senator [Robert Kelly](senator-robert-kelly); the real Gambit stops her, Bishop is pulled back to 2055, and Mystique tells [Rogue](rogue-anna-marie) that she is her foster mother. Then [Magneto](erik-lehnsherr) takes the senator.',
    ],
    cast: ['hank-mccoy', 'charles-xavier', 'logan-wolverine', 'avalanche', 'pyro', 'fred-dukes', 'cyclops-scott-summers', 'storm-ororo-munroe', 'jean-grey', 'jubilee-jubilation-lee'],
    locations: ['washington-detention-center', 'xaviers-school-for-gifted-youngsters', 'united-states-capitol-building'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }, { id: 'sentinels', at: [] }],
  },
  {
    id: 'master-mold-obliterated',
    date: { year: 1992, order: 120 },
    segment: 'E13',
    title: 'Master Mold turns on humans and the X-Men destroy it',
    text: [
      '[Master Mold](master-mold) stops obeying [Bolivar Trask](bolivar-trask): since mutants are human, the [Sentinels](object:sentinels) must rule humans too, starting by replacing the brains of world leaders with computers. The X-Men rescue [Robert Kelly](senator-robert-kelly), and [Charles Xavier](charles-xavier) flies the Blackbird, packed with explosives and shielded by [Magneto](erik-lehnsherr), into Master Mold.',
      'Kelly changes his campaign and [Beast](hank-mccoy) walks free, and [Scott Summers](cyclops-scott-summers) and [Jean Grey](jean-grey) decide to marry while [Mister Sinister](mister-sinister-nathaniel-essex) watches them.',
    ],
    cast: ['gambit-remy-lebeau', 'henry-gyrich', 'logan-wolverine', 'storm-ororo-munroe', 'rogue-anna-marie', 'jubilee-jubilation-lee'],
    locations: ['sunken-freighter', 'xaviers-school-for-gifted-youngsters', 'master-mold-subterranean-sentinel-foundry', 'lincoln-memorial', 'washington-detention-center'],
    objects: [{ id: 'sentinels', at: ['sunken-freighter', 'master-mold-subterranean-sentinel-foundry'] }],
  },
  {
    id: 'forge-launches-bishop',
    date: { year: 2055, order: 10 },
    segment: 'E11–E12',
    title: 'Forge sends Bishop back from 2055, and the future does not change',
    branch: 'bishop-future',
    text: [
      'In a 2055 ruled by the [Sentinels](object:sentinels), [Bishop](bishop-lucas-bishop) hunts rebel mutants until the Sentinels mark him for death too, and an old [Wolverine](logan-wolverine) passes the graves of the X-Men: Jubilee (died 2010), Storm (2021), Cyclops (2032) and Rogue (2033). [Forge](forge) sends Bishop back to the 1990s to stop the assassination the rebels believe started it all.',
      'When Bishop returns, his future is as grim as he left it, and Forge decides they can try again: "The one thing we have plenty of, is time."',
    ],
    locations: ['mutant-termination-center', 'sentinel-mutant-internment-camp-and-subway-bunker'],
    objects: [{ id: 'sentinels', at: ['mutant-termination-center', 'sentinel-mutant-internment-camp-and-subway-bunker'] }],
  },
]);
