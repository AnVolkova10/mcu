// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s1', [
  {
    id: 'jubilee-saved-morph-lost',
    date: { year: 1992, order: 50 },
    title: 'The X-Men save Jubilee but lose Morph to Sentinels',
    text: [
      "In suburban Beverly Hills, orphaned mutant runaway [Jubilation Lee (Jubilee)](jubilee-jubilation-lee) discovers her pyrotechnic plasma powers and is hunted inside a shopping mall by massive anti-mutant **Sentinels** deployed by Henry Peter Gyrich and [Bolivar Trask](bolivar-trask). Rescued by [Cyclops](cyclops-scott-summers), [Storm](storm-ororo-munroe), and [Rogue](rogue-anna-marie), Jubilee is brought to safety at **Xavier's School for Gifted Youngsters** in Westchester County, New York.",
      "Learning that the federal Mutant Control Agency is compiling illegal registration databases to round up mutants, [Professor Charles Xavier](charles-xavier) dispatches the X-Men on a midnight raid to purge the agency's mainframe. The mission turns tragic when a surprise Sentinel counterattack breaches the vaults: jovial shapeshifter [Morph](morph-kevin-sydney) is gunned down and apparently slain in the crossfire, while [Hank McCoy (Beast)](hank-mccoy) is trapped under falling debris and taken into federal custody to stand trial.",
    ],
    cast: ['logan-wolverine', 'gambit-remy-lebeau', 'jean-grey'],
    locations: [
      'galleria-shopping-mall',
      'xaviers-school-for-gifted-youngsters',
      'mutant-control-agency-mainframe-vaults',
    ],
    deaths: [
      { character: 'morph-kevin-sydney', presumed: true, note: 'Presumed KIA' },
    ],
  },
  {
    id: 'magneto-cape-citadel-missiles',
    date: { year: 1992, order: 60 },
    title: "Magneto hijacks Cape Citadel's nuclear missiles",
    text: [
      "While Beast chooses to stand trial legally to champion mutant civil rights, [Magneto (Erik Lehnsherr)](erik-lehnsherr) violently assaults the federal penitentiary to liberate him by force. Respecting the rule of law, Hank refuses to escape. Seeking immediate retribution against humanity, Magneto seizes control of the US military nuclear missile installation at Cape Citadel, Florida, launching nuclear ICBMs to ignite a global war. The X-Men intercept the missiles mid-air, fusing their control electronics with Storm's lightning and Cyclops' optic blasts.",
      "Seeking to neutralize Charles Xavier, Magneto takes refuge in a chemical plant in Richmond, Virginia, baiting Xavier into an exhausting telepathic duel through Cerebro. Concurrently, a wounded [Sabretooth](victor-creed) is harbored in the X-Mansion medical bay under Xavier's pacifist rehabilitation doctrine; Sabretooth breaks free and attempts to murder Jubilee before being incapacitated by Wolverine.",
    ],
    cast: [
      'charles-xavier',
      'hank-mccoy',
      'cyclops-scott-summers',
      'storm-ororo-munroe',
      'logan-wolverine',
      'jubilee-jubilation-lee',
    ],
    locations: [
      'cape-citadel-military-missile-installation',
      'richmond-chemical-refining-plant',
    ],
  },
  {
    id: 'storm-duels-callisto',
    date: { year: 1992, order: 70 },
    title: 'Storm duels Callisto and wins leadership of the Morlocks',
    text: [
      "While on a romantic evening in Manhattan, [Scott Summers](cyclops-scott-summers) and [Jean Grey](jean-grey) are ambushed and dragged into the underground sewer labyrinths by the **Morlocks**—a subterranean society of physically deformed and outcast mutants. The Morlock leader, [Callisto](callisto), intends to keep Scott as her consort while using Jean's genetic gifts to bolster their community.",
      'Infiltrating the darkened tunnels, [Storm](storm-ororo-munroe), [Wolverine](logan-wolverine), and [Rogue](rogue-anna-marie) track down their captured teammates. To settle the dispute without slaughter, Storm exercises ancient Morlock law and challenges [Callisto](callisto) to a mortal combat duel with daggers. Overcoming her severe claustrophobia, Storm disarms and defeats [Callisto](callisto), earning the ceremonial title of Leader of the Morlocks and securing safe passage for her team.',
    ],
    cast: ['gambit-remy-lebeau'],
    locations: [
      'morlock-subterranean-tunnels-and-nyc-sewers',
    ],
  },
  {
    id: 'genosha-slave-uprising',
    date: { year: 1992, order: 80 },
    title: 'Gambit and Cable lead a slave uprising on Genosha',
    text: [
      'While Wolverine journeys to an Arctic Inuit settlement in northern Canada to find spiritual solitude away from Sabretooth, [Gambit](gambit-remy-lebeau), [Storm](storm-ororo-munroe), and [Jubilee](jubilee-jubilation-lee) travel on holiday to the tropical island nation of **Genosha**, marketed globally as a peaceful haven for mutants.',
      "Upon arrival, they are ambushed by the Genoshan Magistrates, locked into power-inhibiting shock collars, and forced into grueling slave labor alongside hundreds of captive mutants constructing a massive hydroelectric dam for [Trask](bolivar-trask) and the sentient Sentinel processor [Master Mold](master-mold). Using his sleight-of-hand thieving skills, Gambit picks his shock collar's lock and stages a full-scale slave uprising alongside the cybernetic time-traveling mercenary [Cable](cable-nathan-summers), blowing up the dam's power grid and liberating the mutant population.",
    ],
    cast: ['logan-wolverine'],
    locations: [
      'the-great-hydroelectric-dam-and-slave-complex',
      'tuktoyaktuk-arctic-outpost',
    ],
  },
  {
    id: 'xmen-topple-juggernaut',
    date: { year: 1993, order: 10 },
    title: "The X-Men topple Juggernaut and clear Colossus's name",
    text: [
      "Returning to Westchester from Genosha, the X-Men find the Xavier Institute reduced to rubble. Tracking the destruction into Manhattan, Wolverine encounters [Piotr Rasputin (Colossus)](colossus-piotr-rasputin), an innocent Russian immigrant falsely accused of bank robbery. Realizing Colossus was framed, the team uncovers the real culprit: [Cain Marko (Juggernaut)](juggernaut-cain-marko), Xavier's unstoppable mystical stepbrother powered by the Crimson Gem of Cyttorak.",
      "In a ferocious street battle across Midtown Manhattan, the X-Men coordinate their assault: Rogue and Wolverine pry the psionic-shielded dome helmet from Juggernaut's head, allowing Jean Grey and Professor Xavier to unleash a combined psychic blast that pacifies Cain Marko's brain and brings him down.",
    ],
    cast: ['logan-wolverine', 'cyclops-scott-summers', 'rogue-anna-marie', 'jean-grey', 'charles-xavier'],
    locations: [
      'xaviers-school-for-gifted-youngsters-ruins',
      'midtown-manhattan-construction-site',
    ],
  },
  {
    id: 'horsemen-assault-peace-summit',
    date: { year: 1993, order: 20 },
    title: "Apocalypse's Horsemen assault the World Peace Summit",
    text: [
      'Longing for a normal human touch, [Rogue](rogue-anna-marie) travels to the Scottish mutant research sanctuary on Muir Island, where geneticist Dr. Gottfried Adler advertises a permanent "cure" for mutation. In reality, Adler is [Mystique](raven-darkholme) in disguise, secretly serving the ancient mutant conqueror [Apocalypse (En Sabah Nur)](en-sabah-nur-apocalypse).',
      "Apocalypse subjects Warren Worthington III to biomechanical corruption, transforming the billionaire into [Archangel (The Horseman of Death)](archangel-warren-worthington) alongside Famine, Pestilence, and War. The Four Horsemen assault the World Peace Summit in Paris, France. During the battle, Rogue absorbs Archangel's traumatic grief, freeing Warren from Apocalypse's psychic grip and enabling him to turn against his former master.",
    ],
    cast: ['cable-nathan-summers', 'charles-xavier', 'cyclops-scott-summers'],
    locations: ['muir-island-mutant-research-facility', 'world-peace-summit-at-arc-de-triomphe'],
  },
  {
    id: 'bishop-foils-kelly-assassination',
    date: { year: 1993, order: 30 },
    title: "Bishop and the X-Men foil Senator Kelly's assassination",
    text: [
      'Temporal warrior [Lucas Bishop](bishop-lucas-bishop) arrives in 1993 from a ruined year 2055 to prevent a pivotal historical assassination: an X-Man assassin slaying anti-mutant politician [Senator Robert Kelly](senator-robert-kelly) during a Senate hearing in Washington D.C., an atrocity that ushered in martial law and global Sentinel enslavement.',
      "While Bishop initially suspects Gambit of being the traitor, the real assassin is revealed to be [Mystique](raven-darkholme) and the Brotherhood of Evil Mutants impersonating Gambit. Pursued through time by the advanced Sentinel **Nimrod**, the X-Men dismantle Nimrod's temporal core at the Capitol and foil Mystique's sniper shot, preserving Kelly's life and averting the immediate apocalyptic timeline.",
    ],
    cast: [
      'gambit-remy-lebeau',
      'logan-wolverine',
      'cyclops-scott-summers',
      'storm-ororo-munroe',
      'charles-xavier',
    ],
    locations: ['united-states-capitol-building'],
  },
  {
    id: 'master-mold-obliterated',
    date: { year: 1993, order: 40 },
    title: 'Trask and the X-Men obliterate Master Mold',
    text: [
      'Sentient supercomputer [Master Mold](master-mold) reaches the logical conclusion of its programming: to permanently protect humanity from mutants, it must abduct world leaders—starting with presidential candidate [Senator Robert Kelly](senator-robert-kelly)—and replace them with brainwashed cybernetic clones. Horrified by what his invention has become, [Bolivar Trask](bolivar-trask) joins forces with the X-Men and [Magneto](erik-lehnsherr) to assault the underground Sentinel manufacturing foundry in the Appalachian Mountains.',
      "Piloting the explosive X-Jet into Master Mold's central processor core, Trask and Cyclops trigger a massive chain-reaction explosion that obliterates Master Mold. Legally exonerated by the courts, [Hank McCoy (Beast)](hank-mccoy) is freed from prison, while a humbled Senator Kelly officially drops his anti-mutant legislative agenda. In the aftermath, Cyclops proposes marriage to Jean Grey, unaware that Mister Sinister is monitoring them from the shadows.",
    ],
    cast: ['cyclops-scott-summers', 'jean-grey', 'logan-wolverine', 'storm-ororo-munroe'],
    locations: [
      'master-mold-subterranean-sentinel-foundry',
      'white-house-and-senate-hearing-chambers',
    ],
    deaths: [
      { character: 'master-mold', presumed: false, note: 'Obliterated' },
      { name: 'Bolivar Trask', presumed: false },
    ],
  },
  {
    id: 'forge-launches-bishop',
    date: { year: 2055, order: 10 },
    title: "Forge launches Bishop back to avert Kelly's assassination",
    text: [
      'In a dystopian, ruined New York City in the year 2055, colossal robotic **Sentinels** enforce ruthless global martial law, having exterminated most mutants and herded surviving humans into internment camps with power-inhibiting collars.',
      'Guerrilla resistance fighter [Lucas Bishop](bishop-lucas-bishop) and an aged, battle-hardened [Logan](logan-wolverine) join cybernetic engineer [Forge](forge) at a clandestine subway rebel sanctuary. As hunting Sentinels breach the bunker with thermal lasers, [Forge](forge) activates an experimental temporal displacement wrist-pad, sending Bishop hurtling sixty-two years back in time to 1993 to stop the assassination of Senator Kelly and overwrite the dark timeline.',
    ],
    locations: [
      'sentinel-mutant-internment-camp-and-subway-bunker',
    ],
  },
]);
