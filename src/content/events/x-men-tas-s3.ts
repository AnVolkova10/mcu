// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s3', [
  {
    id: 'wolverine-deathstrike-spirit-drinker',
    date: { year: 1994, order: 50 },
    title: 'Wolverine and Deathstrike unite against the Spirit Drinker',
    text: [
      "Seeking vengeance for her father Lord Dark Wind's stolen Adamantium secrets, [Lady Deathstrike (Yuriko Oyama)](lady-deathstrike-yuriko-oyama) and the cybernetic Reavers raid the subterranean Morlock tunnels beneath Manhattan. Unearthing a long-buried alien spaceship, Deathstrike lures [Wolverine](logan-wolverine) into the catacombs and uses his unbreakable claws to unseal the craft's bulkhead. The breach inadvertently unleashes the **Spirit Drinker**, a parasitic extraterrestrial entity that immediately drains the life-essences of the Reavers, Morlock leader [Callisto](callisto), and [Jubilee](jubilee-jubilation-lee). Facing total extinction in the shadows of New York, Wolverine and Deathstrike forge a desperate truce; Logan exposes his own soul as bait, allowing the X-Men to reverse the alien containment matrix, purge the entity, and restore all drained lifeforces before Deathstrike flees into the night.",
    ],
    cast: [
      'gambit-remy-lebeau',
      'cyclops-scott-summers',
      'storm-ororo-munroe',
      'charles-xavier',
      'hank-mccoy',
    ],
    locations: [
      'morlock-tunnels-and-subterranean-manhattan',
    ],
  },
  {
    id: 'phoenix-rises-jamaica-bay',
    date: { year: 1994, order: 60 },
    title: 'Jean Grey rises from Jamaica Bay as the Phoenix',
    text: [
      "When an intense cosmic radiation flare cripples Dr. Peter Corbeau's Starcore space shuttle in orbit, [Jean Grey](jean-grey) telepathically pilots the damaged vessel through deadly solar flares. As the shuttle crash-lands into *Jamaica Bay, New York*, Jean bursts from the burning waters enveloped in a fiery avian raptor—reborn with godlike psionic power as the [Phoenix](jean-grey). Meanwhile, [Professor Charles Xavier](charles-xavier) suffers debilitating psychic telepathic seizures warning of an imperial civil war across the stars, driven by visions of [Princess Lilandra Neramani](lilandra-neramani) of the Shi'ar Empire fleeing through a subspace Stargate to Earth. Pursued to ancestral *Cassidy Keep* in County Mayo, Ireland, the X-Men join forces with former Interpol agent [Sean Cassidy (Banshee)](sean-cassidy) to fend off mercenary [Black Tom Cassidy](black-tom-cassidy) and the unstoppable [Juggernaut (Cain Marko)](juggernaut-cain-marko), successfully securing Lilandra and uncovering Emperor D'Ken's treasonous plot against the universe.",
    ],
    cast: ['cyclops-scott-summers', 'logan-wolverine', 'storm-ororo-munroe', 'hank-mccoy'],
    locations: [
      { id: 'starcore-space-shuttle', note: 'Solar Flare Orbit' },
      { id: 'jamaica-bay', note: 'Phoenix Ascension' },
      'cassidy-keep',
    ],
  },
  {
    id: 'phoenix-repairs-mkraan-crystal',
    date: { year: 1994, order: 70 },
    title: "Phoenix repairs the M'Kraan Crystal and stops D'Ken",
    text: [
      "Traveling through the celestial Stargate into Shi'ar galactic space, the X-Men ally with [Corsair (Christopher Summers)](corsair-christopher-summers) and his rebel *Starjammers*. On the forbidden world housing the **M'Kraan Crystal**—the ancient nexus of all realities—the deranged [Emperor D'Ken](d-ken-neramani) breaches the cosmic lattice to usurp divine omnipotence, triggering universal gravitational shockwaves that threaten to collapse the cosmos into a singularity.",
      'As catastrophic reality-warping tremors ripple across Earth, defenders of humanity react across the globe: in Greenwich Village, [Doctor Strange](doctor-strange) senses the apocalyptic dimensional rupture through the Eye of Agamotto within his Sanctum Sanctorum; in London, [Captain Britain (Brian Braddock)](captain-britain) stands vigilant beside the Thames watching the night sky blaze with crimson energy auroras; and across the avenues of Manhattan, [Spider-Man](spider-man) fires web-lines to shield fleeing civilians from falling skyscraper debris caused by seismic shockwaves.',
      "In deep space, Imperial Praetor [Gladiator](gladiator-kallark) and the Shi'ar Guard clash with the X-Men until D'Ken's cosmic madness is exposed. Channeling the collective life-energy and psionic spirit of the universe, [Phoenix](jean-grey) enters the fractured heart of the M'Kraan Crystal, repairing the cosmic nexus and neutralizing D'Ken. Bidding an emotional farewell to [Scott Summers](cyclops-scott-summers), Jean ascends to the cosmos as an eternal guardian, leaving behind a restored galaxy and crowning [Lilandra](lilandra-neramani) as Majestrix.",
    ],
    cast: ['charles-xavier', 'logan-wolverine', 'storm-ororo-munroe', 'rogue-anna-marie'],
    locations: [
      'mkraan-crystal-nexus-world',
      { id: 'sanctum-sanctorum', note: "M'Kraan Mystic Alert" },
      { id: 'london-skywatch', note: "M'Kraan Energy Aurora" },
      { id: 'manhattan-avenues', note: 'Seismic Web Rescue' },
    ],
  },
  {
    id: 'cyclops-killgrave-orphans',
    date: { year: 1994, order: 80 },
    title: "Grieving Cyclops breaks Killgrave's hold on mutant orphans",
    segment: 'S5 E4 · story order S3',
    text: [
      "\\[Narrative Placement: Set immediately following Jean Grey's cosmic sacrifice in The Phoenix Saga. Delayed by two years due to animation re-draws and originally broadcast out of order in Season 5.\\]",
      "Overwhelmed by paralyzing grief following Jean Grey's ascension, a shattered [Scott Summers (Cyclops)](cyclops-scott-summers) resigns from the X-Men and returns to the State Home for Foundlings in Omaha, Nebraska, seeking solace in his childhood roots. There, Scott discovers that wealthy political candidate [Zebediah Killgrave (Purple Man)](zebediah-killgrave) is adopting gifted mutant orphans—including pyrokinetic youth [Rusty Collins](rusty-collins-firefist), Sally Blevins (Skids), Boom-Boom, and Wiz Kid—using hypnotic pheromones to brainwash them into a private metahuman strike team to seize the governor's mansion. Rallying Rusty's courage, Cyclops infiltrates Killgrave's estate, disrupts the psychic thrall, and rescues the children. Overcoming his sorrow, Scott embraces Xavier's dream with renewed purpose and returns home to Westchester.",
    ],
    cast: ['charles-xavier'],
    locations: [
      'state-home-for-foundlings-and-killgrave-estate',
    ],
  },
  {
    id: 'dark-phoenix-sacrifice',
    date: { year: 1994, order: 90 },
    title: 'Jean becomes the Dark Phoenix and sacrifices herself',
    text: [
      "Mental illusions orchestrated by psionic manipulator Jason Wyngarde (Mastermind) and the Hellfire Club ([Sebastian Shaw](sebastian-shaw) and [Emma Frost](emma-frost)) warp Jean Grey's perception, transforming her into the decadent Black Queen. Breaking free from Wyngarde's psychic shackles in fury, the cosmic entity within Jean erupts into an uncontrollable apocalyptic form: [The Dark Phoenix](jean-grey). Overpowering the entire X-Men roster, Dark Phoenix blasts through the stratosphere into deep space, consuming the incandescent core of the D'Bari star system and threatening to annihilate galactic reality—a cataclysmic extinction wave sensed on Earth by [Doctor Strange](doctor-strange) within his Sanctum Sanctorum.",
      "Interstellar alarms summon Shi'ar Empress [Lilandra](lilandra-neramani), who decrees Jean's summary execution to preserve cosmic life. Demanding the right of honor, [Professor X](charles-xavier) challenges Lilandra to the ancient Shi'ar duel of honor—a trial by combat hosted within the breathable ruins of the Kree Empire's Blue Area of the Moon. The X-Men battle desperately against [Gladiator](gladiator-kallark) and the Shi'ar Imperial Guard. As the blazing cosmic raptor overwhelms Jean's humanity once more, [Cyclops](cyclops-scott-summers) and Wolverine watch in heartbreak as Jean regains lucid control for one final second, manually triggering an ancient Kree particle beam cannon to disintegrate her physical body, willingly sacrificing herself to extinguish the Dark Phoenix and save the universe.",
    ],
    cast: ['logan-wolverine'],
    locations: [
      { id: 'blue-area-of-the-moon', note: 'Kree Ancient Ruins' },
      { id: 'sanctum-sanctorum', note: 'Cosmic Extinction Awareness' },
      'hellfire-club-inner-circle-mansion',
    ],
    deaths: [
      {
        character: 'jean-grey',
        presumed: true,
        note: 'Physical Vessel Dissolved; Spirit Preserved by the Phoenix',
      },
    ],
  },
  {
    id: 'storm-seals-garokk',
    date: { year: 1994, order: 120 },
    title: "Storm's blizzard seals Garokk back into dormancy",
    text: [
      "Tormented by his unquenchable hunger for life-energy, mutant pterosaur bio-vampire [Sauron (Dr. Karl Lykos)](sauron-karl-lykos) resurfaces in Manhattan and ambushes [Ororo Munroe (Storm)](storm-ororo-munroe). Hypnotizing Storm, Sauron abducts her back to the prehistoric *Savage Land* in Antarctica, where sorceress Zaladane manipulates Storm's deepest emotional fears to unlock an unbridled elemental tempest. This atmospheric cataclysm awakens [Garokk the Petrified Man](garokk-petrified-man), an ancient immortal sun-god who merges with the volcanic mantle of the Savage Land, triggering catastrophic heatwaves across the globe. Joined by [Ka-Zar](ka-zar-kevin-plunder) and Zabu, [Wolverine](logan-wolverine), [Rogue](rogue-anna-marie), and [Beast](hank-mccoy) journey south; Storm breaks Sauron's psychic shackles, summons a localized sub-zero blizzard that quenches the magma core, and seals Garokk back into volcanic dormancy.",
    ],
    cast: ['jubilee-jubilation-lee'],
    locations: [
      { id: 'the-savage-land', note: 'Sun God Caldera' },
    ],
  },
]);
