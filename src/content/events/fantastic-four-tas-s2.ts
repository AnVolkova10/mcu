// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('fantastic-four-tas-s2', [
  {
    id: 'inhumans-of-attilan',
    date: { year: 1995, order: 90 },
    title: 'The Fantastic Four uncover the Inhumans of Attilan',
    text: [
      "While tracking the amnesiac Medusa in the Mediterranean, the Fantastic Four uncover the secluded mountain domain of the **Inhumans**: a genetically modified offshoot of humanity hidden in the Himalayas' Great Refuge (Attilan). The team meets the Inhuman Royal Family: silent monarch [Black Bolt](black-bolt), [Medusa](medusa), martial philosopher [Karnak](karnak), hooved powerhouse [Gorgon](gorgon), elemental princess [Crystal](crystal) (with whom Johnny Storm falls in love), and giant teleporting hound [Lockjaw](lockjaw). When Black Bolt's treacherous brother Maximus the Mad attempts to annihilate humanity with an Atmo-Gun, Black Bolt unleashes his quasi-sonic whisper, shattering the weapon though sealing Attilan beneath a negative energy barrier.",
    ],
    cast: ['reed-richards', 'sue-storm', 'johnny-storm', 'ben-grimm'],
    locations: [
      { id: 'attilan', note: 'The Great Refuge' },
    ],
  },
  {
    id: 'daredevil-black-panther-alliance',
    date: { year: 1995, order: 100 },
    title: 'Daredevil and Black Panther ally with the Fantastic Four',
    text: [
      "When Doctor Doom takes over the Baxter Building through corrupt legal seizures, blind attorney [Matt Murdock (Daredevil)](daredevil) arrives to defend the team's civil rights, donning his red horns to help the Fantastic Four retake their skyscraper floor-by-floor. Expanding their cosmic frontier, Reed Richards navigates the deep galaxy to confront [Ego the Living Planet](ego), saving Thor and the universe from planetary collision. Shortly after, the team travels to the secluded African kingdom of Wakanda, joining forces with [King T'Challa (Black Panther)](black-panther) to defend the sacred Great Mound of Vibranium against Ulysses Klaw.",
    ],
    cast: ['reed-richards', 'sue-storm', 'ben-grimm', 'johnny-storm', 'victor-von-doom'],
    locations: ['the-great-mound-and-birnin-zana', 'ego-the-living-planet-orbit'],
  },
  {
    id: 'penance-stare-galactus',
    date: { year: 1995, order: 110 },
    title: "Ghost Rider's Penance Stare drives off Galactus",
    text: [
      "Luring the noble [Silver Surfer](silver-surfer) into an electromagnetic dampening chamber beneath Castle Doom, monarch [Doctor Doom](victor-von-doom) siphons the alien herald's Power Cosmic into a biomechanical harness. Wielding godlike omnipotence and a silvery energy glider, Doom descends upon Manhattan, neutralizing the Fantastic Four's defenses and attempting to reshape the world. Recognizing Doom's hubris, Reed Richards rigs a global acoustic reflector array that forces Doom beyond the planet's atmospheric thermal barrier, where the cosmic siphon overloads and returns the Power Cosmic to the Surfer.",
      "Shortly thereafter, cosmic horror strikes when a famished [Galactus](galactus) returns to Earth's orbit. As human defenses fail, brimstone vigilante [Ghost Rider](ghost-rider-danny-ketch) materializes, unleashing his devastating Penance Stare into the eyes of Galactus. Overwhelmed by the collective agony of every innocent soul consumed across billions of lightyears, the titan collapses in excruciating agony and retreats into the cosmos, while fiery volunteer Frankie Raye is transformed into the cosmic herald Nova to safeguard Earth.",
    ],
    cast: ['reed-richards', 'sue-storm'],
    locations: [
      'castle-doom-and-manhattan-upper-atmosphere',
    ],
  },
]);
