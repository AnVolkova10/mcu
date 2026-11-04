// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s5', [
  {
    id: 'captain-america-vortex',
    date: { year: 1945, order: 30 },
    title: 'Captain America tackles Red Skull into the vortex',
    text: [
      "In the climactic final days of World War II in 1945, Nazi commander [Red Skull](red-skull) completes construction of a catastrophic Doomsday Device—a dimensional matter-transmitter capable of unleashing uncontainable destructive vortexes across the globe. To avert global annihilation, [Captain America (Steve Rogers)](steve-rogers) and his Allied strike team of enhanced champions, the Six Forgotten Warriors (including [The Whizzer (Robert Frank)](whizzer-robert-frank), Miss America, The Destroyer, The Thunderer, The Thin Man, and courier Omar Mosley), spearhead a daring frontal assault against Red Skull's heavily fortified subterranean bunker in Eastern Europe.",
      "As Red Skull powers up the central reactor and the unstable dimensional vortex begins tearing through reality, Captain America realizes conventional weapons cannot deactivate the overloaded conduit in time. In a defining act of selfless heroism, Rogers physically tackles Red Skull, plunging both of them directly into the heart of the vortex. The surviving Five Champions immediately engage the security fail-safe protocol, separating the device's six activation keys and sealing the portal shut—saving civilization while leaving Captain America and the Red Skull suspended in trans-dimensional limbo for over fifty years until their return in 1997.",
    ],
    locations: [
      'red-skulls-doomsday-device-subterranean-bunker',
    ],
    deaths: [
      { character: 'steve-rogers', presumed: true, note: 'Trapped in Dimensional Vortex' },
      { character: 'red-skull', presumed: true, note: 'Trapped in Dimensional Vortex' },
    ],
  },
  {
    id: 'peter-mary-jane-wedding',
    date: { year: 1997, order: 20 },
    title: 'Peter Parker weds Mary Jane Watson',
    text: [
      'In Manhattan, [Peter Parker](spider-man) and [Mary Jane Watson](mary-jane-watson) are wed in a joyous ceremony, shortly before discovering clues regarding a Cold War super-weapon. Spider-Man unravels a secret WWII operation: five American champions known as the Six Forgotten Warriors (Whizzer, Miss America, Thin Man, Destroyer, Black Marvel) who guarded a Doomsday vortex device. In Chernobyl and Moscow, Kingpin and Russian agents unseal the vortex, releasing [Captain America](steve-rogers) and Nazi overlord Red Skull from fifty years of dimensional limbo. Captain America and Spider-Man destroy the Doomsday machine, with Steve Rogers bravely tackling Red Skull back into the vortex to safeguard humanity.',
    ],
    cast: ['wilson-fisk-kingpin', 'red-skull'],
    locations: [
      'manhattan-chapel-and-chernobyl-nuclear-complex',
    ],
  },
  {
    id: 'mary-jane-clone-revealed',
    date: { year: 1997, order: 30 },
    title: 'Peter learns his wife Mary Jane is a clone',
    text: [
      "Shortly after Peter Parker and Mary Jane's Manhattan nuptials, hydrokinetic rogue Hydro-Man (Morris Bench) resurfaces, fixated with reclaiming Mary Jane. In a shocking escalation, Mary Jane manifests identical hydro-molecular powers, generating water blasts in self-defense. Tracking Hydro-Man to an offshore aquatic bio-dome, [Spider-Man](spider-man) confronts geneticist Dr. Miles Warren (The Jackal), who confesses a horrifying scientific truth: both Morris Bench and this Mary Jane are unstable cellular clones grown from synthetic water-based clone matrices.",
      "As their cellular structures rapidly break down from clone degeneration, Hydro-Man evaporates completely into vapor, while Mary Jane professes her eternal love for Peter in tears before her physical body melts away into water. Shattered by the revelation that the woman he married was a tragic clone, Peter Parker learns from Madame Web that the real Mary Jane Watson is still alive, suspended somewhere within the uncharted depths of the multiverse—igniting Peter's resolve for the impending Secret Wars and Spider Wars.",
    ],
    cast: ['mary-jane-watson'],
    locations: [
      'dr-miles-warrens-offshore-aquatic-bio-dome',
    ],
    deaths: [
      { name: 'Hydro-Man Clone', presumed: false, note: 'Cellular Clone Degeneration' },
      { name: 'Mary Jane Watson Clone', presumed: false, note: 'Cellular Degeneration' },
    ],
  },
  {
    id: 'spider-man-battleworld',
    date: { year: 1998, order: 10 },
    title: 'Spider-Man leads heroes against Doom on Battleworld',
    text: [
      "Cosmic entity [The Beyonder](the-beyonder) and clairvoyant seer [Madame Web](madame-web) abduct [Spider-Man](spider-man) to an artificial proving ground known as **Battleworld** to test whether Good or Evil is supreme in the multiverse. Appointed as supreme battlefield commander, Spider-Man summons his ultimate coalition of champions: [Mister Fantastic](reed-richards), [Human Torch](johnny-storm), [The Thing](ben-grimm), [Iron Man](tony-stark), and [Storm](storm-ororo-munroe). They wage tactical war against Doctor Doom, Red Skull, Doctor Octopus, Alistair Smythe, and the Lizard. Reed Richards and Spider-Man dismantle Doom's psychic siphon, liberating Battleworld and proving the indomitable power of human empathy.",
    ],
    cast: ['victor-von-doom', 'doctor-octopus'],
    locations: ['battleworld-proving-ground'],
  },
  {
    id: 'spider-men-spider-carnage',
    date: { year: 1998, order: 20 },
    title: 'Alternate Spider-Men unite against Spider-Carnage',
    text: [
      "In the multiversal finale, Madame Web mobilizes Spider-Man to lead an alliance of alternate Spider-Men (Scarlet Spider, Armored Spider, Six-Armed Spider, Octo-Spider, Actor Spider) against **Spider-Carnage**—a nihilistic alternate Peter Parker bonded to the Carnage symbiote intending to annihilate the entire multiverse with a Matter Disintegrator bomb. Peter appeals to Spider-Carnage's lingering humanity by introducing him to an alternate reality's living Uncle Ben, causing Spider-Carnage to sacrifice himself to destroy the bomb. In gratitude, Madame Web transports Peter to **Earth-Real (Earth-1218)**, where Peter meets his comic-book creator [Stan Lee](stan-lee-creator) atop a Manhattan skyscraper, thanking him for his life and heroism, before departing through the dimensional portal with Madame Web to finally reunite with his beloved Mary Jane Watson.",
    ],
    cast: ['spider-man', 'madame-web'],
    locations: ['earth-real-skyscraper-rooftop'],
  },
]);
