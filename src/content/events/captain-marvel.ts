// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('captain-marvel', [
  {
    id: 'carol-absorbs-space-stone',
    date: { year: 1989, order: 10 },
    title: 'Yon-Rogg kills Mar-Vell, and Carol absorbs the power of her engine',
    text: [
      "At Project Pegasus, Air Force pilots [Carol Danvers](carol-danvers) and [Maria Rambeau](maria-rambeau) test the light-speed engine of Dr. Wendy Lawson, in truth the Kree scientist [Mar-Vell](mar-vell-wendy-lawson), whose engine runs on the energy of the [Tesseract](stone:space). On the morning of the test Lawson, agitated, tries to fly it herself, and Carol pilots her toward her laboratory until a Kree fighter shoots them down by a lake.",
      "Dying, Lawson reveals her real name, and [Yon-Rogg](yon-rogg) kills her and demands the core; Carol shoots the engine with Mar-Vell's pistol and absorbs its power, and when [Minn-Erva](minn-erva) asks to kill her, Yon-Rogg takes her instead. She reaches Hala near death and without memory, Yon-Rogg gives her his blood, and her broken dog tag leaves her only the name \"Vers\".",
    ],
    locations: ['project-pegasus', 'project-pegasus-mojave-crash-range', 'hala-imperial-city'],
    deaths: ['mar-vell-wendy-lawson'],
    stones: ['space'],
  },
  {
    id: 'vers-captured-on-torfa',
    date: { year: 1995, order: 10 },
    title: 'The Skrulls capture Vers on Torfa and search her memories',
    text: [
      'On Hala, [Vers](carol-danvers), a warrior of the Kree Starforce haunted by dreams she cannot place, spars with her commander, [Yon-Rogg](yon-rogg), and the [Supreme Intelligence](supreme-intelligence) appears to her in the shape of a woman she cannot remember. Sent with [Minn-Erva](minn-erva), [Korath](korath) and the rest of Starforce to rescue a spy on the border planet Torfa, she falls into an ambush of the Skrull general [Talos](talos).',
      'On the Skrull ship, Talos searches her memories for a light-speed engine and finds Pegasus, Dr. Wendy Lawson and the planet the Kree call C-53. Vers breaks free and escapes in a pod that falls to Earth.',
    ],
    locations: ['hala-imperial-city', 'torfa-border-world-outpost', 'low-earth-orbit-and-exosphere-space'],
  },
  {
    id: 'vers-meets-nick-fury',
    date: { year: 1995, order: 12 },
    title: 'Vers lands on Earth, joins Nick Fury and learns she is Carol Danvers',
    text: [
      'Vers falls through the roof of a Blockbuster in Los Angeles, and S.H.I.E.L.D. agents [Nick Fury](fury) and [Phil Coulson](coulson) come to question her. She chases a shape-shifting Skrull onto a train, where [Stan Lee](stan-lee-creator) is rehearsing his lines, and Fury learns that the Coulson beside him is a Skrull, who dies when their car crashes; [Talos](talos) takes the shape of Fury\'s boss, Keller.',
      'At Pancho\'s Bar, where her photo hangs, Fury and Vers test each other, and at Pegasus they meet the cat [Goose](goose) and find that Lawson died in a crash in 1989. When Talos arrives as Keller, Fury\'s "Havana" trick exposes him, Coulson lets them go, and the two fly off in a jet with Goose; Vers takes [Fury\'s pager](object:furys-pager).',
      'In Louisiana, [Maria Rambeau](maria-rambeau) and her daughter [Monica](monica-rambeau) tell her that she is Carol Danvers, believed dead for six years. Talos comes unarmed to say that the Skrulls are refugees and that Mar-Vell was helping them, and the coordinates in the plane\'s black box show that her laboratory is in orbit.',
    ],
    cast: ['yon-rogg', 'minn-erva', 'korath', 'ronan'],
    locations: ['blockbuster-video-crash-site-and-metro-transit', 'los-angeles-train', 'panchos-bar', 'project-pegasus', 'rambeau-residence-and-louisiana-bayou'],
    objects: [{ id: 'furys-pager', at: ['project-pegasus'] }],
    deaths: [{ name: 'Skrull disguised as Coulson' }],
  },
  {
    id: 'carol-danvers-full-power',
    date: { year: 1995, order: 14 },
    title: 'Carol unlocks her full power and saves the Skrull refugees',
    text: [
      "[Yon-Rogg](yon-rogg) kills Norex, a Skrull disguised as Carol, and calls in the Accusers. [Carol](carol-danvers), Maria, [Fury](fury), [Talos](talos) and [Goose](goose) fly to Mar-Vell's cloaked laboratory in orbit, where Talos finds his wife and daughter among the Skrull refugees, and where the [Tesseract](stone:space) has been hidden for six years.",
      "Starforce captures them, and in Carol's mind the [Supreme Intelligence](supreme-intelligence), still in Lawson's shape, tells her she is only human; Carol tears out her Kree implant and unlocks her full power. Goose swallows the Tesseract, [Maria](maria-rambeau) shoots down [Minn-Erva](minn-erva) over the Mojave Desert, and Carol destroys the warheads of [Ronan](ronan), who retreats, then beats Yon-Rogg and sends him back to Hala with a message.",
      "Back on Earth, Goose scratches out Fury's left eye. Carol upgrades [Fury's pager](object:furys-pager) to reach her across galaxies, gives it back for emergencies only, asks Fury to keep the Tesseract hidden on Earth and leaves with the Skrulls to find them a new home.",
    ],
    cast: ['korath', 'monica-rambeau'],
    locations: ['mar-vells-cloaked-orbital-laboratory', 'mojave-desert', 'low-earth-orbit-and-exosphere-space', 'rambeau-residence-and-louisiana-bayou'],
    objects: [{ id: 'furys-pager', at: ['rambeau-residence-and-louisiana-bayou'] }],
    deaths: [{ name: 'Norex' }, 'minn-erva'],
    stones: ['space'],
  },
  {
    id: 'fury-drafts-avengers-initiative',
    date: { year: 1995, order: 16 },
    title: 'Nick Fury drafts the Avengers Initiative',
    text: [
      'Back at work with an eyepatch, [Nick Fury](fury) lets the story stand that the Kree burned out his eye, and tells [Coulson](coulson) that what they need is more heroes like Carol. He names the plan after her Air Force call sign, "Avenger": the Avengers Initiative. Later [Goose](goose) coughs up the [Tesseract](stone:space) onto his desk.',
    ],
    locations: ['shield-headquarters'],
    stones: ['space'],
  },
  {
    id: 'danvers-arrives-fury-pager',
    date: { year: 2018, order: 40 },
    title: "Carol Danvers answers Fury's pager at the Avengers Compound",
    text: [
      "After the Snap, [Steve Rogers](steve-rogers), [Natasha Romanoff](black-widow), [Bruce Banner](hulk) and [James Rhodes](war-machine) study [Fury's pager](object:furys-pager) at the Avengers Compound. Then [Carol Danvers](carol-danvers) appears behind them: \"Where's Fury?\"",
    ],
    locations: ['avengers-compound'],
    objects: [{ id: 'furys-pager', at: ['avengers-compound'] }],
  },
]);
