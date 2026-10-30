// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agents-of-shield-s2', [
  {
    id: 'reinhardt-obelisk-capture',
    date: { year: 1945, order: 20 },
    title: 'SSR agents capture Reinhardt and seize the Obelisk',
    text: [
      "[Peggy Carter](peggy-carter), [Dum Dum Dugan](dum-dum-dugan), and Jim Morita lead an SSR tactical strike team to raid the final European HYDRA research fortress in Austria. They successfully capture high-ranking Nazi scientist **Werner Reinhardt (Dr. Whitehall)**, seizing his experimental equipment and confiscating the world's first classified 0-8-4 extraterrestrial artifact: **The Obelisk (The Diviner)**, sealing it inside SSR containment vaults.",
    ],
    locations: ['hydra-final-european-research-base'],
  },
  {
    id: 'skye-ultrasonic-powers',
    date: { year: 2015, order: 30 },
    title: 'Skye gains ultrasonic powers in Krell City',
    segment: 'E1–E19',
    text: [
      "[Phil Coulson](coulson): Director of SHIELDS, was suffering unknown episodes 'till they found the Krell's City, Theta Protocol with [Maria Hill](maria-hill): to repair **The Helicarrier 64** , [Melinda May](may): Skye' S.O. doubts Phil a little , **Grant Ward**: escape SHIELD prison, helps SHIELD w/ final rescue then also escapes , [Skye](skye): highly trained, enhanced in the Krell's city, ultrasonic powers , **Leo Fitz**: his mind is deteriorated, still useful , **Jemma Simmons**: was working undercover for HYDRA, now w/SHIELD , **Antoin Triplett**: died in krell temple trying to save Skye , **Mack**: mechanic engineer working undercover for the other SHIELD , **Hunter**: australian ex-mercenary, now works for SHIELD , **Bobbi Morse**: spy, saves Jemma, undercover for the other SHIELD , **Bill & Sam Koenig** unknown origin agents, maybe robots, a lot of brothers , **Mike Peterson**: helping Coulson all along.",
      '**Recovery Missions:** **Creel**, **Krell map to temple**, the first 084: **The Obelisk (One of the Diviner)**).',
      "**Enemies:** **Dr. Whitehall** (from 1945 *HYDRA*) , **Raina** (enhanced with clairvoyant powers after her transformation), **Cal** (Skye's father, anger issues), **List** and **Strucker** scientists from *HYDRA* whom are experimenting with enhanced people like ==-The Twins-==.",
      "**Secondary appearances:** **Kara** (Agent 33, complied w/faustus method, now free with SHIELDS), **Donnie Hill** (ice power), **Gordon** (one of the enhanced people, teletransportation), **Jiaying** (Skye's mother, leader of the enhanced), **Lady Sif** (looking for a Krell), **Andrew** (enhanced human, electric abilities),",
      "**Places:** . *T.A.H.I.T.I.* (place to revive Avengers with Krell's blood), *Krell City* (a place to make enhanced humans to fight Krell's war: Terrigenesis), *The Rat* (SHIELD's prison),",
    ],
    deaths: [
      { name: 'Antoin Triplett', presumed: false },
      { name: 'Dr. Whitehall', presumed: false },
      { name: 'Donnie Hill', presumed: false },
      { name: 'T.A.H.I.T.I.', presumed: false },
      { name: 'Krell City', presumed: false },
      { name: 'The Obelisk', presumed: false, note: 'One of the Diviner' },
    ],
  },
  {
    id: 'cal-kills-jiaying',
    date: { year: 2015, order: 50 },
    title: 'Cal kills Jiaying to save Skye',
    segment: 'E20–E22',
    text: [
      '[Phil Coulson](coulson): loses his hand saving Fitz and Mack , [Melinda May](may): goes on vacation , [Skye](skye): has to lead the inhumans , **Leo Fitz**: getting better , **Jemma Simmons**: was sucked into the **item 47.** , **Mack**: quit SHIELD. , **Hunter**: still in love with Bobbi , **Bobbi Morse**: almost died saving Hunter , **Bill & Sam Koenig** , **Mike Peterson**: went into hiding again.',
      '**Missions: Protect item 47**',
      '**Enemies:** **Raina** (dies showing Skye the true enemy: her mother) , **Grant Ward**: (wants to kill them all) , **Jiaying** (killed by Cal to save Skye) **She throws the Terrigen to the sea** , **List** killed in Age of Ultron , **Kara** (killed by Ward by error).',
      '**Secondary appearances:** , **Gonzales** (lider of the other SHIELD, killed by Jiaying) , **Cal** (corrupted by Jiaying, memory erased, now a happy vet) , **Gordon** killed by Fitz. , **Andrew** (allies with Skye and SHIELD)',
      '**Places:** *Afterlife* (home of the inhumans)',
    ],
    deaths: [
      { name: 'Raina', presumed: false },
      { name: 'Jiaying', presumed: false },
      { name: 'List', presumed: false },
      { name: 'Kara', presumed: false },
      { name: 'Gonzales', presumed: false },
      { name: 'Gordon', presumed: false },
    ],
  },
]);
