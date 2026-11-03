// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('captain-america-the-first-avenger', [
  {
    id: 'schmidt-steals-tesseract',
    date: { year: 1942, order: 10 },
    title: 'Johann Schmidt steals the Tesseract in Tønsberg',
    text: [
      "In March 1942 [Johann Schmidt](red-skull) and his Hydra soldiers raid the church of Tønsberg, in occupied Norway, and find the [Tesseract](stone:space) hidden behind a carving of Yggdrasil. He has the keeper and the villagers killed, and takes the cube to Hydra's headquarters for [Arnim Zola](arnim-zola) to study.",
    ],
    locations: ['ancient-norse-crypt', 'kraussberg-hydra-central-fortress'],
    deaths: [{ name: 'Church Keeper' }],
    stones: ['space'],
  },
  {
    id: 'steve-alley-bully',
    date: { year: 1943, order: 10 },
    title: 'Steve Rogers stands up to an alley bully',
    text: [
      "[Steve Rogers](steve-rogers), from Brooklyn, is rejected by the Army yet again for his small frame and poor health. At the movies he tells a loud patron to show some respect, takes a beating in the alley behind the theater and keeps getting up, until [Bucky Barnes](bucky-barnes), in uniform and about to ship out, drives the bully off.",
    ],
    locations: ['brooklyn-cinema-alleyway'],
  },
  {
    id: 'erskine-selects-steve',
    date: { year: 1943, order: 20 },
    title: 'Abraham Erskine selects Steve Rogers for Project Rebirth',
    text: [
      "On his last night home, [Bucky Barnes](bucky-barnes) takes [Steve Rogers](steve-rogers) to the Stark Expo, where [Howard Stark](howard-stark) shows off a flying car that drops back to the stage. Steve slips away to try enlisting again, and [Dr. Abraham Erskine](abraham-erskine) overhears him telling Bucky why he wants to serve. Asked if he wants to kill Nazis, Steve answers that he doesn't like bullies, and Erskine accepts him for Project Rebirth.",
    ],
    locations: ['stark-world-exposition-of-tomorrow'],
  },
  {
    id: 'steve-becomes-super-soldier',
    date: { year: 1943, order: 30 },
    title: 'Steve Rogers becomes a super-soldier and Erskine is murdered',
    text: [
      "At Camp Lehigh, [Colonel Phillips](chester-phillips) doubts [Steve Rogers](steve-rogers) until he throws himself on a dummy grenade to protect the other recruits. In a lab hidden behind a Brooklyn antique shop, [Dr. Abraham Erskine](abraham-erskine) injects him with the [Super Soldier Serum](object:super-soldier-serum) and [Howard Stark](howard-stark) floods him with Vita-Rays, while [Peggy Carter](peggy-carter) looks on. [Heinz Kruger](heinz-kruger), a Hydra assassin among the witnesses, kills Erskine and flees with the last vial, which breaks in the chase. Steve drags him out of his submarine at Pier 13, and Kruger takes a cyanide pill.",
    ],
    locations: ['camp-lehigh-military-training-base', 'ssr-secret-laboratory-and-vita-ray-chamber', 'pier-13'],
    deaths: ['abraham-erskine', 'heinz-kruger'],
  },
  {
    id: 'captain-america-on-tour',
    date: { year: 1943, order: 40 },
    title: 'Steve tours as Captain America while Schmidt breaks with Hitler',
    text: [
      "With Erskine dead and the formula lost, Colonel Phillips leaves [Steve Rogers](steve-rogers) behind, and Senator **Brandt** sends him across the country in costume as Captain America to sell war bonds. At Hydra's headquarters, [Arnim Zola](arnim-zola) harnesses the [Tesseract](stone:space), and [Johann Schmidt](red-skull) turns its weapons on three SS officers sent to inspect him, breaking with the Reich.",
    ],
    locations: ['radio-city-music-hall', 'kraussberg-hydra-central-fortress'],
    deaths: [{ name: 'Hutter' }, { name: 'Roeder' }, { name: 'Schneider' }],
    stones: ['space'],
  },
  {
    id: 'steve-frees-the-107th',
    date: { year: 1943, order: 50 },
    title: 'Steve crosses enemy lines to free the 107th',
    text: [
      "On tour in Italy in November 1943, [Steve Rogers](steve-rogers) learns that Hydra has destroyed the unit of [Bucky Barnes](bucky-barnes) at Azzano. [Peggy Carter](peggy-carter) and [Howard Stark](howard-stark) fly him behind enemy lines to the Hydra factory at Krausberg, in Austria, where he frees the prisoners and finds Bucky on [Arnim Zola](arnim-zola)'s table. [Johann Schmidt](red-skull) sets the plant to blow, pulls off his mask to show the face of the Red Skull and escapes, and Steve marches the men back to camp.",
    ],
    locations: ['azzano', 'hydra-107th-prison-facility'],
    cast: ['chester-phillips', 'dum-dum-dugan', 'gabe-jones', 'jim-morita', 'james-montgomery-falsworth', 'jacques-dernier'],
  },
  {
    id: 'howling-commandos-dismantle-hydra',
    date: { year: 1943, end: 1945, order: 60 },
    title: 'The Howling Commandos dismantle HYDRA across Europe',
    text: [
      "[Steve Rogers](steve-rogers) recruits [Bucky Barnes](bucky-barnes), [Dum Dum Dugan](dum-dum-dugan), [Gabe Jones](gabe-jones), [Jim Morita](jim-morita), [James Montgomery Falsworth](james-montgomery-falsworth) and [Jacques Dernier](jacques-dernier) at a London pub, and [Howard Stark](howard-stark) gives him a [shield](object:captain-america-shield) of [Vibranium](object:vibranium). From the SSR's headquarters, with the map of bases Steve memorized at Krausberg, the Howling Commandos spend more than a year destroying Hydra's facilities across Europe, while he and [Peggy Carter](peggy-carter) fall in love.",
    ],
    locations: ['whip-and-fiddle', 'london-ssr-underground-strategic-bunker', 'hydra-base-france', 'hydra-base-poland'],
    objects: [{ id: 'captain-america-shield', at: ['london-ssr-underground-strategic-bunker', 'hydra-base-france', 'hydra-base-poland'] }],
    cast: ['chester-phillips'],
  },
  {
    id: 'bucky-falls-from-the-train',
    date: { year: 1945, order: 5 },
    title: 'Zola is captured and Bucky falls from the train',
    text: [
      "In February 1945 the Commandos board a Hydra train in the Alps to seize [Arnim Zola](arnim-zola). [Bucky Barnes](bucky-barnes) falls to his apparent death fighting beside [Steve Rogers](steve-rogers), and [Gabe Jones](gabe-jones) captures Zola, whose interrogation in London points to Hydra's last base. Steve mourns in the ruins of the pub, and [Peggy Carter](peggy-carter) pushes him to finish the fight.",
    ],
    locations: ['hydra-mountain-train-railway', 'london-ssr-underground-strategic-bunker', 'whip-and-fiddle'],
    objects: [{ id: 'captain-america-shield', at: ['hydra-mountain-train-railway'] }],
    cast: ['chester-phillips'],
    deaths: [{ character: 'bucky-barnes', presumed: true }],
  },
  {
    id: 'valkyrie-arctic-plunge',
    date: { year: 1945, order: 10 },
    title: 'Steve Rogers plunges the Valkyrie into the Arctic ice',
    text: [
      "In March 1945 [Steve Rogers](steve-rogers) rides into Hydra's headquarters in the Alps and [Colonel Phillips](chester-phillips) storms the base behind him. [Johann Schmidt](red-skull) takes off in the *Valkyrie*, a bomber carrying weapons for New York and other American cities, with Steve aboard.",
      "In their fight the [Tesseract](stone:space) comes loose, and when Schmidt grabs it a portal pulls him into space, while the cube burns through the hull and falls into the ocean. Unable to land without setting off the bombs, Steve says goodbye to [Peggy Carter](peggy-carter) over the radio, promising her a dance, and crashes in the Arctic. [Howard Stark](howard-stark) recovers the Tesseract from the ocean floor, but never finds Steve.",
    ],
    locations: ['kraussberg-hydra-central-fortress', 'valkyrie-crash-site-and-cryogenic-trench'],
    objects: [{ id: 'captain-america-shield', at: ['kraussberg-hydra-central-fortress', 'valkyrie-crash-site-and-cryogenic-trench'] }],
    cast: ['jim-morita'],
    deaths: [
      { character: 'red-skull', presumed: true },
      { character: 'steve-rogers', presumed: true, note: 'Presumed Lost' },
    ],
    stones: ['space'],
  },
  {
    id: 'steve-rogers-wakes-up',
    date: { year: 2011 },
    title: 'Steve Rogers wakes up nearly seventy years later',
    text: [
      "A team in the Arctic finds the *Valkyrie* buried in the ice, with the [shield](object:captain-america-shield) inside and [Steve Rogers](steve-rogers) frozen but alive. He wakes in a fake 1940s hospital room, recognizes the ballgame on the radio as one he saw in person in 1941, and breaks out into Times Square. [Nick Fury](fury) tells him he has been asleep for almost 70 years, and Steve answers that he had a date.",
    ],
    locations: ['valkyrie-crash-site-and-cryogenic-trench', 'shield-times-square-bunker'],
    objects: [{ id: 'captain-america-shield', at: ['valkyrie-crash-site-and-cryogenic-trench'] }],
  },
]);
