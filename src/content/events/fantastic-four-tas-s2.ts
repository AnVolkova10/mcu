// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('fantastic-four-tas-s2', [
  {
    id: 'klaw-kills-tchaka',
    date: { year: 1985, order: 10, approx: true },
    segment: 'E7',
    title: "Ulysses Klaw kills T'Chaka for Wakanda's vibranium",
    text: [
      "The scientist [Ulysses Klaw](ulysses-klaw), Master of Sound, comes to Wakanda and demands its sacred mound of [vibranium](object:vibranium) to power his sound transformer, and when the chieftain [T'Chaka](tchaka) refuses, he is shot dead. The young [T'Challa](black-panther) turns Klaw's weapon on him and wounds his hand, and Klaw flees, swearing to come back.",
    ],
    locations: ['tchalla-village', 'the-great-mound-and-birnin-zana'],
    objects: [{ id: 'vibranium', at: ['the-great-mound-and-birnin-zana'] }],
    deaths: ['tchaka'],
  },
  {
    id: 'daredevil-black-panther-alliance',
    date: { year: 1995, order: 30 },
    segment: 'E1, E5, E9',
    title: 'The four lose their home to Doom and face Psycho-Man and the Hulk',
    text: [
      "A nuclear bomb of [Doctor Doom](victor-von-doom) takes away the four's powers, and with [Daredevil](daredevil) watching over them they fight off Doom when he takes over the Baxter Building and leaves its reactor to blow up; [Sue Storm](sue-storm) contains the blast, and the team needs a new home.",
      '[Psycho-Man](psycho-man) turns Sue into Malice to steal back an element Reed took from the Microverse, and in Central Park the [Hulk](hulk) beats [the Thing](ben-grimm) until [Alicia Masters](alicia-masters) stops the fight, while Doom learns that the Hulk has a human self.',
    ],
    cast: ['reed-richards', 'johnny-storm', 'rick-jones'],
    locations: ['island-tr-5', 'baxter-building-and-upper-manhattan', 'four-freedoms-plaza', 'microverse', 'central-park', 'latverian-embassy'],
  },
  {
    id: 'inhumans-of-attilan',
    date: { year: 1995, order: 40 },
    segment: 'E2–E4',
    title: 'The Frightful Four strike, and the Fantastic Four meet the Inhumans',
    text: [
      'The Frightful Four of [the Wizard](the-wizard) turn [the Thing](ben-grimm) against Reed until [Alicia Masters](alicia-masters) reaches him, and one of them, the amnesiac [Medusa](medusa), turns out to be an Inhuman whose memory [Maximus](maximus) erased. Through her the Fantastic Four meet the Inhumans of Attilan and help [Black Bolt](black-bolt), who must never speak, take back his throne from his brother Maximus, who seals Attilan under a negative barrier with [Crystal](crystal) inside.',
    ],
    cast: ['trapster-peter-petruski', 'hydro-man', 'reed-richards', 'johnny-storm', 'sue-storm', 'gorgon', 'lockjaw', 'karnak', 'the-seeker', 'triton'],
    locations: ['four-freedoms-plaza', { id: 'attilan', note: 'The Great Refuge' }],
  },
  {
    id: 'ego-galactus-vow',
    date: { year: 1995, order: 60 },
    segment: 'E6, E8',
    title: 'Galactus destroys Ego, and Frankie Raye becomes his herald, Nova',
    text: [
      '[Ego](ego), the living planet, comes at Earth to draw out [Galactus](galactus), who once exiled it. [Reed Richards](reed-richards) and [Thor](thor) reach Galactus, and to win his help Reed frees him from his vow to spare Earth; his blast, powered by Mjolnir, destroys Ego.',
      "Later [Terrax](terrax), the herald who poisoned Galactus, lifts Manhattan into the sky, and Galactus turns him into a worm but must feed on Earth. [Frankie Raye](frankie-raye), a fan of [Johnny Storm](johnny-storm) who bursts into flame after kissing him, offers to be Galactus's herald if he spares the planet, and leaves with him as Nova while he renews his pledge.",
    ],
    cast: ['tony-stark', 'sue-storm', 'ben-grimm', 'ghost-rider-danny-ketch'],
    locations: ['four-freedoms-plaza', 'ego-the-living-planet-orbit', 'manhattan-stratosphere-and-taa-ii-worldship'],
    deaths: ['ego'],
  },
  {
    id: 'black-panther-hunts-ff',
    date: { year: 1995, order: 70 },
    segment: 'E7',
    title: 'The Black Panther tests the Fantastic Four before Klaw returns',
    text: [
      "[T'Challa](black-panther), Wakanda's hereditary chieftain, hunts the Fantastic Four in his jungle of steel and wire to test himself before [Ulysses Klaw](ulysses-klaw), who killed his father, comes back. Klaw returns as living sound, Reed knocks him onto the sacred mound, whose [vibranium](object:vibranium) absorbs him until he disappears, and T'Challa decides to go on as the Black Panther.",
    ],
    cast: ['sue-storm', 'reed-richards', 'johnny-storm', 'ben-grimm'],
    locations: ['four-freedoms-plaza', 'tchalla-village', 'the-great-mound-and-birnin-zana'],
    objects: [{ id: 'vibranium', at: ['tchalla-village', 'the-great-mound-and-birnin-zana'] }],
  },
  {
    id: 'franklin-storm-super-skrull',
    date: { year: 1995, order: 100 },
    segment: 'E10–E11',
    title: 'Franklin Storm dies saving his children from a Skrull trap',
    text: [
      'After a Skrull attack, [Sue Storm](sue-storm) needs brain surgery that only her father, [Franklin Storm](franklin-storm), a fugitive for years, can do, and he is arrested after the operation. The warlord [Morrat](morrat) sends the [Super-Skrull](super-skrull) in his place, and the real Franklin, rigged with a bomb, gives his life to shield his children; on the Skrull world the four turn the Emperor against Morrat.',
      "[Lockjaw](lockjaw) slips out of Attilan's barrier, and [Johnny Storm](johnny-storm) protects the [Impossible Man](impossible-man) from the Super-Skrull, but cannot get into the Great Refuge.",
    ],
    cast: ['reed-richards', 'ben-grimm'],
    locations: ['four-freedoms-plaza', 'skrull-emperor-palace', 'attilan'],
    deaths: ['franklin-storm'],
  },
  {
    id: 'attilan-freed-crystal',
    date: { year: 1995, order: 105 },
    segment: 'E12',
    title: 'Black Bolt frees the Inhumans, and Crystal joins the Fantastic Four',
    text: [
      'Under the barrier of [Maximus](maximus), with the air running out, [Black Bolt](black-bolt) speaks: his voice breaks the barrier and destroys Attilan. On Tivu Island, where the Fantastic Four fight [Kree Sentry 459](kree-sentry-459), a robot guarding an ancient Kree space port, [Crystal](crystal) and [Lockjaw](lockjaw) help them, and Crystal moves into the Four Freedoms Plaza.',
    ],
    cast: ['reed-richards', 'sue-storm', 'johnny-storm', 'ben-grimm', 'medusa', 'gorgon', 'karnak', 'triton'],
    locations: ['tivu-island', 'attilan', 'four-freedoms-plaza'],
  },
  {
    id: 'doom-power-cosmic',
    date: { year: 1995, order: 110 },
    segment: 'E13',
    title: "Doom steals the Silver Surfer's power and threatens the world",
    text: [
      "[Doctor Doom](victor-von-doom) drains the Power Cosmic from the [Silver Surfer](silver-surfer) and gives the world's leaders a week to surrender. Reed lures him into the sky, where he hits the barrier Galactus left to keep the Surfer on Earth, and the power returns to the Surfer; whether Doom survives, Reed cannot say.",
    ],
    cast: ['ben-grimm', 'crystal', 'johnny-storm', 'tony-stark', 'reed-richards', 'sue-storm'],
    locations: ['latverian-royal-forest', 'four-freedoms-plaza', 'richards-lake-cabin', 'castle-doom-and-haasenstadt-citadel'],
  },
]);
