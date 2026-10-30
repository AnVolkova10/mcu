// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('fantastic-four-tas-s1', [
  {
    id: 'doom-ancient-greece',
    date: { year: -1200, approx: true, order: 20 },
    title: "Doctor Doom sends Reed Richards' team to Ancient Greece",
    text: [
      'Taking the Baxter Building hostage with automated forcefields, armored tyrant [Doctor Doom](victor-von-doom) coerces the Fantastic Four into stepping onto his newly calibrated Time Platform. Displaced over three millennia into the past to Mycenaean Ancient Greece (c. 1200 B.C.E.), [Reed Richards](reed-richards), [Sue Storm](sue-storm), [Johnny Storm](johnny-storm), and [Ben Grimm](ben-grimm) must retrieve the mythical enchanted chest of the Sirens before their temporal anchor dissolves.',
      "Disguised as legendary Hellenic warriors, the team navigates the treacherous Aegean waters, battles mythical sea serpents and Greek hoplites, and secures the ancient talisman containing mystical jewels. Returning through the temporal displacement vortex to the present day, Reed outsmarts Doom by swapping the treasure with an inert replica, causing Doom's temporal containment rig to implode.",
    ],
    locations: [
      'mycenaean-citadel-and-aegean-coastal-ruins',
    ],
  },
  {
    id: 'cosmic-rays-mutation',
    date: { year: 1994, order: 130 },
    title: 'Cosmic rays mutate Reed, Sue, Johnny and Ben',
    text: [
      "Scientific visionary [Dr. Reed Richards](reed-richards), his fiancee [Susan Storm](sue-storm), her brother [Johnny Storm](johnny-storm), and ace military test pilot [Ben Grimm](ben-grimm) launch an unauthorized private rocket into deep space. Breaching the Van Allen radiation belt, an unexpected storm of cosmic rays penetrates their spacecraft hull, mutating their human genetics. Crash-landing in the Adirondacks, they discover their extraordinary transformations: Reed stretches with fluid plasticity as [Mister Fantastic](reed-richards), Sue turns transparent and casts force fields as the [Invisible Woman](sue-storm), Johnny erupts in plasma flight as the [Human Torch](johnny-storm), and Ben's flesh hardens into an orange rocky titan as [The Thing](ben-grimm). Setting up headquarters at Manhattan's Baxter Building, they defend the city from a television studio hostage crisis orchestrated by the [Puppet Master](puppet-master).",
    ],
    locations: ['baxter-building-and-upper-manhattan', 'cosmic-radiation-orbital-belt'],
  },
  {
    id: 'namor-kidnaps-susan-storm',
    date: { year: 1994, order: 140 },
    title: 'Namor kidnaps Susan Storm to be his undersea queen',
    text: [
      'Surface naval torpedo tests inadvertently violate the sovereign waters of the hidden undersea empire of Atlantis. In retaliation, [Prince Namor the Sub-Mariner](namor-the-sub-mariner) surfaces along the Manhattan docks with an aquatic invasion force, kidnapping [Susan Storm](sue-storm) to be his undersea queen. [Reed Richards](reed-richards), [Johnny Storm](johnny-storm), and [The Thing](ben-grimm) plunge into the Atlantic oceanic trenches in the Bathyscaphe, waging an amphibious war before convincing Namor that humanity had no malicious intent, forging an uneasy diplomatic truce between surface dwellers and Atlantis.',
    ],
    locations: [
      'atlantis-sovereign-throne-and-abyssal-trenches',
    ],
  },
  {
    id: 'surfer-rebels-against-galactus',
    date: { year: 1994, order: 150 },
    title: 'The Silver Surfer rebels and drives Galactus from Earth',
    text: [
      "The Skrull Empire launches an extraterrestrial infiltration against Earth, dispatching their genetically augmented warrior [Super-Skrull (Kl'rt)](super-skrull), who possesses the replicated powers of all four Fantastic Four members. Soon after the team repels the invasion, the cosmic herald [Silver Surfer](silver-surfer) materializes across the Manhattan skyways, announcing the imminent arrival of [Galactus the Devourer of Worlds](galactus) to consume Earth's biosphere. Breaking his solemn vow of non-interference, [Uatu the Watcher](uatu-the-watcher) guides Reed Richards to retrieve the Ultimate Nullifier from Galactus's worldship. Touched by humanity's beauty through Alicia Masters, the Silver Surfer turns against his master, driving Galactus away from Earth forever.",
    ],
    cast: ['reed-richards', 'sue-storm', 'johnny-storm', 'ben-grimm'],
    locations: [
      'manhattan-stratosphere-and-taa-ii-worldship',
      { id: 'blue-area-of-the-moon', note: "Watcher's Citadel" },
    ],
  },
  {
    id: 'castle-doom-raid',
    date: { year: 1994, order: 160 },
    title: "Reed's team raids Castle Doom and liberates Sue",
    text: [
      "Latverian monarch [Doctor Victor Von Doom](victor-von-doom) infiltrates the Baxter Building, taking [Susan Storm](sue-storm) captive and holding her hostage at Castle Doom. Doom coerces [Reed](reed-richards), [The Thing](ben-grimm), and [Human Torch](johnny-storm) to enter his experimental **Time Platform** and travel back to ancient Greece circa 500 B.C.E. to recover an enchanted chest containing mystical artifacts. Surviving an ancient siege between Greeks and Persians, the team returns to the 20th century, storms Castle Doom in Latveria, overpowers Doom's Doombot legion, and liberates Sue from the iron dictator's clutches.",
    ],
    locations: [
      'castle-doom-and-haasenstadt-citadel',
      { id: 'ancient-aegean-battlegrounds', note: 'Time Platform' },
    ],
  },
  {
    id: 'negative-zone-annihilus',
    date: { year: 1994, order: 170 },
    title: 'Reed breaches the Negative Zone and faces Annihilus',
    text: [
      'Massive sinkholes consume entire blocks of Manhattan as [Mole Man](mole-man) and his subterranean Moloid horde attack the surface world. After plunging into Subterranea to contain the subterranean beasts, Reed Richards breaches the dimensional fabric by opening the portal to the antimatter realm known as the **Negative Zone**. There, the team battles the voracious insectoid warlord [Annihilus](annihilus), sealing the portal before an antimatter breach can annihilate Earth.',
    ],
    cast: ['reed-richards', 'sue-storm', 'ben-grimm', 'johnny-storm'],
    locations: [
      'subterranean-cavern-kingdom',
      { id: 'the-negative-zone', note: 'Antimatter Dimension' },
    ],
  },
]);
