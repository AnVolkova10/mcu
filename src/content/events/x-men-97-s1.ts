// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-97-s1', [
  {
    id: 'young-en-sabah-nur-rescue',
    date: { year: -3000, approx: true },
    title: 'Young En Sabah Nur rescues the time-lost mutants',
    text: [
      'Following the catastrophic dimensional displacement of Asteroid M from 1997, [Professor Charles Xavier](charles-xavier), [Erik Lehnsherr (Magneto)](erik-lehnsherr), [Rogue](rogue-anna-marie), [Beast](hank-mccoy), and [Nightcrawler](nightcrawler-kurt-wagner) awaken amidst the arid desert sands of Ancient Egypt circa 3000 B.C.E. Ambushed by hostile pharaonic legions, the time-lost mutants are unexpectedly rescued by a young, mortal desert nomad named [En Sabah Nur](en-sabah-nur-apocalypse)—the primordial warrior destined millennia later to become the immortal conqueror Apocalypse.',
    ],
    locations: ['nile-valley-and-giza-dunes'],
  },
  {
    id: 'magneto-un-trial',
    date: { year: 1997, order: 60 },
    title: 'Magneto faces UN trial as Storm loses her powers',
    text: [
      "Months after the departure of [Charles Xavier](charles-xavier), [Cyclops](cyclops-scott-summers) leads the X-Men to rescue young mutant [Roberto da Costa (Sunspot)](sunspot-roberto-da-costa) and destroy reactivated [Master Mold](master-mold) sentinels in the Sahara. Inheriting the institute under Xavier's last will, [Magneto](erik-lehnsherr) surrenders peacefully to stand trial before the United Nations in Manhattan under UN liaison [Dr. Valerie Cooper](valerie-cooper). Anti-mutant extremists assault the tribunal with a radiation-neutralizing cannon; [Storm](storm-ororo-munroe) intercepts the blast to shield Magneto, tragically losing her elemental godhood. Magneto disarms the tribunal but spares his captors in an impassioned plea for human-mutant coexistence. In the mansion infirmary, [Madelyne](madelyne-pryor-goblin-queen) gives birth to infant [Nathan Summers](young-nathan-summers), moments before a battered, identical woman collapses at the gate: the genuine [Jean Grey](jean-grey).",
    ],
    cast: ['logan-wolverine'],
    locations: [
      'united-nations-headquarters',
      'xaviers-school-for-gifted-youngsters',
      'sahara-sentinel-sub-facility',
    ],
  },
  {
    id: 'madelyne-goblin-queen',
    date: { year: 1997, order: 70 },
    title: 'Madelyne transforms into the Goblin Queen',
    text: [
      'Discovering she is a cellular clone manufactured by [Mister Sinister](mister-sinister-nathaniel-essex), [Madelyne](madelyne-pryor-goblin-queen) succumbs to demonic grief and transforms into the psionic sorceress [Goblin Queen](madelyne-pryor-goblin-queen), plunging the Xavier Mansion into a surreal Limbo inferno. [Sinister](mister-sinister-nathaniel-essex) inoculates infant [Nathan](young-nathan-summers) with a lethal techno-organic pathogen to harvest the ultimate genetic catalyst. Reached by the compassionate telepathic embrace of the true [Jean Grey](jean-grey), [Madelyne](madelyne-pryor-goblin-queen) reclaims her agency, banishes Sinister, and rescues her child. With the techno-organic virus incurable by 20th-century medicine, [Lucas Bishop](bishop-lucas-bishop) volunteers to escort infant [Nathan Summers](young-nathan-summers) through a temporal rift to the 40th Century where advanced healing technology can arrest the spread. Madelyne adopts her independent identity and departs for Genosha.',
    ],
    cast: ['cyclops-scott-summers', 'logan-wolverine'],
    locations: ['xaviers-school-for-gifted-youngsters', 'mister-sinisters-secret-genetic-lab'],
  },
  {
    id: 'storm-reclaims-powers',
    date: { year: 1997, order: 80 },
    title: 'Storm defeats the Adversary and reclaims her powers',
    text: [
      "On her 18th birthday, [Jubilee](jubilee-jubilation-lee) and [Roberto da Costa](sunspot-roberto-da-costa) are sucked through a 16-bit console into the digital television dimension of [Mojo](mojo), fighting through broadcast simulations of past battles before destroying Mojo's transmitter and escaping to Earth. Meanwhile at Eagle Plaza in Dallas, Texas, [Storm](storm-ororo-munroe) and mutant inventor [Forge](forge) are besieged by the ancient shadow demon The Adversary; overcoming her claustrophobic trauma and reconciling with nature, Storm defeats the demon and fully restores her cosmic elemental powers. Across the galaxy on Chandilar, [Charles Xavier](charles-xavier) undergoes spiritual rehabilitation alongside [Empress Lilandra](lilandra-neramani), but upon receiving a cosmic psionic vision of impending agony on Earth, abdicates the Shi'ar imperial crown to return home.",
    ],
    locations: [
      'eagle-plaza-ranch-and-sacred-caverns',
      'mojoverse-digital-dimension',
      'shiar-imperial-crown-world-chandilar',
    ],
  },
  {
    id: 'gambit-sacrifice-genosha',
    date: { year: 1997, order: 90 },
    title: 'Gambit sacrifices himself as a Tri-Sentinel ravages Genosha',
    text: [
      `During Genosha's formal gala celebrating UN statehood recognition under chancellor [Magneto](erik-lehnsherr), [Cable](cable-nathan-summers) abruptly manifests through the timestream, frantically warning his biological mother [Madelyne Pryor](madelyne-pryor-goblin-queen) of imminent annihilation before being snapped back through time. Moments later, a catastrophic three-headed Tri-Sentinel breaches the atmosphere, unleashing plasma holocaust fire across the island nation and slaughtering millions of mutants, claiming the lives of [Madelyne Pryor](madelyne-pryor-goblin-queen), [Banshee (Sean Cassidy)](sean-cassidy), [Callisto](callisto), and [Sebastian Shaw](sebastian-shaw). Magneto falls shielding morlock children. Impaled through the chest by the mechanoid's spear, [Gambit](gambit-remy-lebeau) channels the full kinetic potential of his dying body into the colossus, detonating in an apocalyptic blast that obliterates the monster: "The name is Gambit, mon ami... Remember it."`,
    ],
    cast: ['rogue-anna-marie', 'nightcrawler-kurt-wagner'],
    locations: ['genosha-capital-and-council-plaza'],
    deaths: [
      'gambit-remy-lebeau',
      'madelyne-pryor-goblin-queen',
      'sean-cassidy',
      'callisto',
      'sebastian-shaw',
    ],
  },
  {
    id: 'magneto-global-emp',
    date: { year: 1997, order: 100 },
    title: "Magneto's global EMP disables Bastion's Prime Sentinels",
    text: [
      "Cybernetic mastermind [Bastion](bastion-sebastion-gilberti) triggers Operation: Zero Tolerance, converting sleeper humans into Prime Sentinels and destroying the Xavier Mansion. Liberated by [Val Cooper](valerie-cooper), [Magneto](erik-lehnsherr) reaches the North Magnetic Pole and unleashes a planetary Electromagnetic Pulse (EMP) that disables every Prime Sentinel while plunging Earth into total technological blackout, witnessed across New York by [Spider-Man](spider-man) and the Avengers. As [Xavier](charles-xavier) returns to rally the team, [Rogue](rogue-anna-marie) and [Sunspot](sunspot-roberto-da-costa) defect to Magneto's rebuilt Asteroid M. The X-Men assault Bastion's Galapagos citadel—where Jean strips Sinister of his stolen mutant genetics—and board Asteroid M. Following Wolverine stabbing Magneto, the Master of Magnetism violently flays every ounce of adamantium from Logan's skeleton. When US nuclear missiles destabilize Asteroid M into terminal atmospheric descent, Magneto and Xavier combine their powers to divert the meteor into space, where a catastrophic temporal overcharge causes Asteroid M to implode and vanish from spacetime. On Earth, [Lucas Bishop](bishop-lucas-bishop) warns [Forge](forge) that the X-Men are lost in time, while in Genosha, [Apocalypse](en-sabah-nur-apocalypse) retrieves Gambit's charred playing card.",
    ],
    cast: [
      'cable-nathan-summers',
      'logan-wolverine',
      'cyclops-scott-summers',
      'jean-grey',
      'mister-sinister-nathaniel-essex',
    ],
    locations: [
      'north-magnetic-pole-ground-zero',
      'asteroid-m-orbital-citadel',
      'galapagos-ozt-bastion-citadel',
      'genosha-memorial-ruins',
      'eagle-plaza-tactical-workshop',
    ],
    deaths: ['bastion-sebastion-gilberti'],
  },
  {
    id: 'cyclops-jean-mother-askani',
    date: { year: 3960 },
    title: 'Cyclops and Jean meet Mother Askani and young Nathan',
    text: [
      "Flung nearly two millennia into the desolate future of 3960 C.E. by Asteroid M's temporal collapse, [Scott Summers (Cyclops)](cyclops-scott-summers) and [Jean Grey](jean-grey) materialize in a scorched wasteland dominated by the tyrannical reign of [Apocalypse](en-sabah-nur-apocalypse). They are intercepted by cloaked rebel guerillas led by [Mother Askani](mother-askani-rachel-summers) (Rachel Summers) and introduced to a young boy being trained to defeat Apocalypse: the child [Nathan Summers](young-nathan-summers), the very son Scott and Madelyne were forced to send to the future to cure his techno-organic infection.",
    ],
    locations: ['clan-askani-sanctuary-citadel'],
  },
]);
