// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agents-of-shield-s1', [
  {
    id: 'baby-skye-hunan-massacre',
    date: { year: 1989, order: 30 },
    title: 'Baby Skye survives the Hunan village massacre',
    text: [
      "In the Hunan Province of China, an object of unknown origin (084), who appears to be baby [Skye](skye), was found in a village which was destroyed: every man, woman, and child torn apart by monsters(**Cal**) trying to find that baby. Dr. Whitehall killed Skye's mother **Jiaying**",
    ],
    deaths: [
      { name: 'Jiaying', presumed: true },
    ],
  },
  {
    id: 'hydra-project-deathlok',
    date: { year: 1990 },
    title: "HYDRA's Project Deathlok begins with Garret",
    text: [
      'Proyect Deathlok by *HYDRA* start with **Garret** as the first subject.',
    ],
  },
  {
    id: 'hydra-frees-grant-ward',
    date: { year: 1999, order: 20 },
    title: 'A HYDRA mole frees teen Grant Ward from prison',
    text: [
      "Teen **Grant Ward** is taken out of prison by *HYDRA*'s **Agent Grant** undercover inside *S.H.I.E.L.D.* to work with him.",
    ],
  },
  {
    id: 'coulson-forms-team',
    date: { year: 2012, order: 40 },
    title: 'Officially dead, Coulson forms a team aboard the Bus',
    segment: 'E1–E7',
    text: [
      '[Maria Hill](maria-hill): S.H.I.E.L.D. deputy director, [Phil Coulson](coulson): high-ranking member, [Melinda May](may): the cavalry, **Grant Ward**: an experienced solo-working agent, [Skye](skye): member of the hacktivist group the *Rising Tide*, **Leo Fitz**: rocket scientist, **Jemma Simmons**: bio-scientist, **Mike Peterson**: a father.',
      'Coulson, who is officially dead, creates an amateur team of agents. They have a **modified Boeing C-17 Globemaster III nicknamed the Bus.**',
      '**Recovery Missions:** Chitauri Neural Link, Tesseract-powerlike laser, Gravitonium, Chitauri Virus, Overkill device.',
      '**Enemies:** Centipide Organization: Dr. Erskine druglike supersoldiers.',
      "**Secondary appearances:** [Nick Fury](fury), **Jasper Sitwell**(high-ranking S.H.I.E.L.D. agent), **Victoria Hand**(S.H.I.E.L.D. base's director).",
      "**Places:** *Slingshot* (a ruse: destroys objects launching them into the sun inside a rocket), *Sandbox* (handling and study of hazardous materials.), *The Hub* (one of three S.H.I.E.L.D.'s headquarters, provider of back-end support).",
    ],
  },
  {
    id: 'coulson-resurrection-origin',
    date: { year: 2014, order: 50 },
    title: 'Coulson uncovers the alien origin of his resurrection',
    segment: 'E8–E16',
    text: [
      '[Phil Coulson](coulson): knows the origin of his resurrection (fluid of a blue alien corpse), [Melinda May](may): possible taking orders from an enemy, **Grant Ward**: in love with Skye [Skye](skye): newest member of S.H.I.E.L.D., **Leo Fitz**, **Jemma Simmons**, **Deathlok**: controlled by The Clairvoyant.',
      "**Recovery Missions:** Asgardian Berserker's Staff, **GH325 (fluids of blue alien corpse)**.",
      '**Enemies:** **Victoria Hand**, **The Clairvoyant**(an infiltrated member of S.H.I.E.L.D. with full access), **Lorelei** (asgardian sorcerer), **Raina** (scientist).',
      '**Secondary appearances:** **Elliot Randolph** (asgardian, the warrior who stayed), **Garret** (veteran agent), **Antoin Triplett** (agent, academy companion of Ward), **Sif**.',
      "**Places:** *The Fridge* (detainment and storage facility), *The S.H.I.E.L.D.'s Academy* (in the old building of *SSR*), *The Triskelion* (one of the three official headquarters).",
    ],
    deaths: [
      { name: 'GH325', presumed: false, note: 'fluids of blue alien corpse' },
    ],
  },
  {
    id: 'coulson-rebuilds-shield',
    date: { year: 2014, order: 70 },
    title: 'Coulson rebuilds S.H.I.E.L.D. as its new director',
    segment: 'E17–E22',
    text: [
      "[Phil Coulson](coulson): the new Director of S.H.I.E.L.D. , [Melinda May](may): Phil's right hand , [Skye](skye): is an alien , **Leo Fitz**, damaged brain **Jemma Simmons** the best scientist, I love you, , **Deathlok**: a free soul, doesn't wants to be with his son.",
      "**Recovery Missions:** *S.H.I.E.L.D.'s*(starting from scratch), The Bus.",
      "**Enemies:** **Garret**, **Raina**(flees to other unknown alien boss which is **Skye's dad**), **Grant Ward**: prisoner.",
      '**Secondary appearances:** **Victoria Hand**, **Antoin Triplett**. [Nick Fury](fury) (saves FitzSimmons and helps Phil), [Maria Hill](maria-hill) (working now with Pepper in Stark Industries), **Eric Koenig**(agents lvl 5 who looksalike, robots?), **Billy Koenig**.',
      '**Places:** *The Playground* (newest S.H.I.E.L.D. base).',
    ],
    deaths: [
      { name: 'Garret', presumed: false },
      { name: 'Victoria Hand', presumed: false },
      { name: 'Eric Koenig', presumed: false },
    ],
  },
]);
