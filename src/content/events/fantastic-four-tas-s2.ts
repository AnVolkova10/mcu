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
    segment: 'E1',
    title: 'Daredevil helps the powerless Fantastic Four against Doctor Doom',
    text: [
      "The Fantastic Four free [Sue Storm](sue-storm), held as bait on Island TR-5, but a nuclear bomb of [Doctor Doom](victor-von-doom)'s destroys the island and takes away their powers, and [Ben Grimm](ben-grimm), human again, goes out with [Alicia Masters](alicia-masters). [Reed Richards](reed-richards) gives them suits that hide how weak they are, and Alicia's friend Matt Murdock sends [Daredevil](daredevil) to watch over them when Doom takes over the Baxter Building and turns their own arsenal on them. With a copy of Doom's neuro-stimulator Ben becomes the Thing again and nearly crushes Doom's hand; Doom leaves the building's reactor to blow up most of Manhattan, Sue contains the blast, and the team needs a new home.",
    ],
    cast: ['johnny-storm'],
    locations: ['island-tr-5', 'baxter-building-and-upper-manhattan'],
  },
  {
    id: 'inhumans-of-attilan',
    date: { year: 1995, order: 40 },
    segment: 'E2–E4',
    title: 'The Frightful Four strike, and the Fantastic Four meet the Inhumans',
    text: [
      "While the team builds its new home, the Four Freedoms Plaza, [the Wizard](the-wizard) and his Frightful Four, [the Trapster](trapster-peter-petruski), [Hydro-Man](hydro-man) and the amnesiac [Medusa](medusa), catch [the Thing](ben-grimm) and turn him against [Reed Richards](reed-richards) with an id machine. In a warehouse trap Ben fights Reed while the others take on [Johnny](johnny-storm) and [Sue](sue-storm), until [Alicia Masters](alicia-masters) reaches Ben and the Frightful Four flee; Johnny lets Medusa go.",
      "A week later Medusa takes Johnny hostage to escape [Gorgon](gorgon), who has tracked her from Attilan: [Maximus](maximus) erased her memory and sent her to the human world. Under a deserted part of New York Johnny meets her sister [Crystal](crystal), [Lockjaw](lockjaw) and [Karnak](karnak), and when the team comes for him, [Black Bolt](black-bolt) floors the Thing with one blow.",
      "Black Bolt, who must never speak, has lost his throne to his brother Maximus; [the Seeker](the-seeker) takes the royal family and [Triton](triton) home and tells the team how the Kree made the Inhumans, and Reed tracks his ship to Attilan, the Great Refuge. There the Fantastic Four help Black Bolt overthrow Maximus, whose atmo-gun fails to poison humanity, but Maximus seals Attilan under a negative barrier with Crystal inside.",
    ],
    locations: ['four-freedoms-plaza', { id: 'attilan', note: 'The Great Refuge' }],
  },
  {
    id: 'psycho-man-microverse',
    date: { year: 1995, order: 50 },
    segment: 'E5',
    title: 'Psycho-Man turns Sue into Malice to take back Element F',
    text: [
      "[Reed Richards](reed-richards) brings back a new element from an unknown dimension, which stirs up the team's emotions, and its owner, [Psycho-Man](psycho-man), takes over [Sue](sue-storm) as Malice, Mistress of Hate, to steal it back. Reed spots Malice with a heat-image tracer, and the team shrinks into the Microverse, where Element F fuels the weapons with which Psycho-Man rules his city by fear. Reed goads Malice until the psychic blast frees Sue, and they escape with a minute to spare, leaving Psycho-Man consumed with self-hatred.",
    ],
    cast: ['ben-grimm', 'johnny-storm', 'alicia-masters'],
    locations: ['four-freedoms-plaza', 'microverse'],
  },
  {
    id: 'ego-galactus-vow',
    date: { year: 1995, order: 60 },
    segment: 'E6',
    title: "The Fantastic Four and Thor stop Ego with Galactus's help",
    text: [
      "On the day the Four Freedoms Plaza is finished, earthquakes and storms hit the world; [Iron Man](tony-stark) and the Avengers help with the rescues, and [Thor](thor)'s hammer, Mjolnir, crashes into Reed's lab to summon the team. They find Thor beaten in space and land on [Ego](ego), the living planet, which [Galactus](galactus) once exiled with thrusters and which now comes at Earth to draw him out. Reed and Thor reach Galactus, whose herald is now [Terrax](terrax), and to get his help Reed frees him from his vow to spare Earth; Ben carries a bomb to Ego's brain, and Galactus's blast, powered by Mjolnir, destroys the living planet.",
    ],
    cast: ['reed-richards', 'sue-storm', 'johnny-storm', 'ben-grimm'],
    locations: ['four-freedoms-plaza', 'ego-the-living-planet-orbit', 'manhattan-stratosphere-and-taa-ii-worldship'],
    deaths: ['ego'],
  },
  {
    id: 'black-panther-hunts-ff',
    date: { year: 1995, order: 70 },
    segment: 'E7',
    title: 'The Black Panther tests the Fantastic Four before Klaw returns',
    text: [
      "A magnetic craft tows the Fantasticar to Wakanda, where [T'Challa](black-panther), its hereditary chieftain, hunts the Fantastic Four one by one in a jungle of steel and wire to test himself before [Ulysses Klaw](ulysses-klaw) comes back. At a feast he tells them how Klaw killed his father ten years before and how selling small amounts of [vibranium](object:vibranium) paid for his schooling, and he gives [Sue](sue-storm) armbands of it. Klaw returns as living sound, and Reed knocks him onto the sacred mound, whose vibranium absorbs him until he disappears; T'Challa decides to go on as the Black Panther.",
    ],
    cast: ['reed-richards', 'johnny-storm', 'ben-grimm'],
    locations: ['four-freedoms-plaza', 'tchalla-village', 'the-great-mound-and-birnin-zana'],
    objects: [{ id: 'vibranium', at: ['tchalla-village', 'the-great-mound-and-birnin-zana'] }],
  },
  {
    id: 'penance-stare-galactus',
    date: { year: 1995, order: 80 },
    segment: 'E8',
    title: 'Frankie Raye becomes Nova, herald of Galactus, to save Earth',
    text: [
      "After kissing [Johnny Storm](johnny-storm), his fan [Frankie Raye](frankie-raye) bursts into flame: as a child she absorbed the chemicals her stepfather used for an android Human Torch. [Terrax](terrax), who poisoned [Galactus](galactus) with the dying planet Antos and fled to Earth, lifts Manhattan into the sky to make the Fantastic Four end Galactus for him, and [Sue](sue-storm) holds the island in a force bubble. Aboard his ship Galactus takes back Terrax's power and turns him into a worm, then must feed on Earth; [Thor](thor)'s hammer keeps him alive, [Ghost Rider](ghost-rider-danny-ketch) makes him feel the torment of the souls he has devoured, and Frankie offers to be his herald if he spares Earth. As Nova she leaves with Galactus, who renews his pledge to spare the planet.",
    ],
    cast: ['reed-richards', 'ben-grimm'],
    locations: ['four-freedoms-plaza', 'manhattan-stratosphere-and-taa-ii-worldship'],
  },
  {
    id: 'hulk-nightmare-in-green',
    date: { year: 1995, order: 90 },
    segment: 'E9',
    title: 'The Hulk fights the Thing, and Doom learns who the Hulk is',
    text: [
      "Reed calls in a scientist from out of state, [Bruce Banner](hulk), to help him cure Ben, and in Central Park the Hulk beats [the Thing](ben-grimm) until [Alicia Masters](alicia-masters) stops the fight. [Doctor Doom](victor-von-doom), tracking the Hulk's gamma rays, learns that he has a human self, takes Banner to his Latverian Embassy and turns the Hulk against the team, telling him that [Rick Jones](rick-jones) has betrayed him. Alicia calms the Hulk and Rick tells him the truth, the Hulk turns on Doom, Reed restarts Ben's stopped heart, and Banner and Rick slip away.",
    ],
    cast: ['reed-richards', 'sue-storm', 'johnny-storm'],
    locations: ['central-park', 'four-freedoms-plaza', 'latverian-embassy'],
  },
  {
    id: 'franklin-storm-super-skrull',
    date: { year: 1995, order: 100 },
    segment: 'E10–E11',
    title: 'Franklin Storm dies saving his children from a Skrull trap',
    text: [
      "After a Skrull attack led by the warlord [Morrat](morrat), [Sue](sue-storm) needs brain surgery, and the only surgeon who can do it is her father, [Franklin Storm](franklin-storm), wanted for years for a killing in a fight with a loan shark; he is arrested after the operation. Morrat has freed the [Super-Skrull](super-skrull), who takes Franklin's place as the Invincible Man, and the real Franklin, rigged with a bomb, gives his life to shield his children. Brought to the Skrull world, the four turn the Emperor against Morrat, who tries to shoot him to win Princess Anelle and the throne.",
      "[Lockjaw](lockjaw) escapes Attilan's barrier and finds [Johnny](johnny-storm), who agrees to protect the [Impossible Man](impossible-man), on the run from the Super-Skrull, if he gets Lockjaw to take him to the Great Refuge. They see Attilan from outside the barrier and beat the Super-Skrull, and Lockjaw goes home without Johnny.",
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
      "On vacation on Tivu Island, in the South Pacific, the Fantastic Four save two scientists from [Kree Sentry 459](kree-sentry-459), a robot left to guard an ancient Kree space port. In Attilan, with the air running out under the barrier of [Maximus](maximus), [Black Bolt](black-bolt) sends his people to the shelters and speaks: his voice breaks the barrier and destroys the city. [Crystal](crystal) and [Lockjaw](lockjaw) help the team when the Sentry returns and the island's volcano erupts, and Crystal moves into the Four Freedoms Plaza as Black Bolt tells her that Inhumans and humans cannot live apart forever.",
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
      "In Latveria a woman leads the [Silver Surfer](silver-surfer) to [Doctor Doom](victor-von-doom), who drains his Power Cosmic, freezes [the Thing](ben-grimm) at the Four Freedoms Plaza until [Crystal](crystal) revives him, attacks Reed and Sue at their lake cabin, and gives the world's leaders a week to surrender. [Johnny](johnny-storm) flies alone to Latveria and falls when Doom turns his body to crystal. Reed lures Doom into the sky with a flying wing built by [Tony Stark](tony-stark)'s company, where he hits the barrier Galactus left to keep the Surfer on Earth and the power returns to the Surfer; whether Doom survives, Reed cannot say.",
    ],
    cast: ['reed-richards', 'sue-storm'],
    locations: ['latverian-royal-forest', 'four-freedoms-plaza', 'richards-lake-cabin', 'castle-doom-and-haasenstadt-citadel'],
  },
]);
