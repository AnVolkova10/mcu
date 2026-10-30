// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agents-of-shield-s6', [
  {
    id: 'sarge-coulson-shadow',
    date: { year: 2018, order: 10 },
    title: "Mack's team confronts Sarge, a shadow with Coulson's face",
    segment: 'E1–E13',
    text: [
      "[Sarge](coulson): Has Coulson's face, it's a shadow created by the explotion of the three monoliths. , [Melinda May](may): dies at the end but Simmons put her in cryo to save her , [Daisy](skye): blonde, goes looking for Fitz in Zephyr One throug space- , **Leo Fitz**: tries to survive space. , **Jemma Simmons**: separated from Fitz to save the Chronicoms and the team. , **Mack**: New director of SHIELD , **Elena**: almost killed by a shrike , **Enoch**: tries to save the Chronicoms",
      '**Recovery Missions:**Three Monoliths from the dark dimension, Coulson from Sarge.',
      '**Enemies:** **Izel**: died , **Pachacutiq**: inside Sarge , **The Chronicoms**: wants to travel to the past to save their world',
      '**Secondary appearances:** **Deke**: he is like Mark Zuckenberg.',
    ],
    deaths: [
      { character: 'coulson', presumed: true },
      { name: 'Enoch', presumed: true },
      { name: 'Izel', presumed: false },
      { name: 'Pachacutiq', presumed: false },
      { name: 'Sarge', presumed: false },
    ],
  },
]);
