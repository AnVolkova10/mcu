// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agents-of-shield-s7', [
  {
    id: 'time-travelers-chronicoms',
    date: { year: 1931 },
    title: 'Time travelers race to save SHIELD from the Chronicoms',
    segment: 'E1–E2',
    branch: 'chronicom-war',
    text: [
      "[Phil Coulson](coulson): An advanced LMD created by Fitz-Simmons with Chronicom technology , [Melinda May](may): the team travels to the past to prevent the Chronicoms from erasing SHIELD , [Daisy](skye): press the button that decides the awakening of Phil , **Leo Fitz**: goes in hiding to protect the team and help them beat the Chronicoms , **Jemma Simmons**: has a plan but her memories are erased to protect Fitz and the team , **Mack**: director of SHIELD , **Elena**: can't use her powers anymore , **Enoch**: now part of the team **Deke**: now part of the team",
      '**Recovery Missions:**Prevent the Chronicoms from disrupting the timeline',
      '**Enemies:** **The Chronicoms** **Malick** grandfather *HYDRA*',
    ],
  },
  {
    id: 'daniel-sousa-joins-team',
    date: { year: 1955 },
    title: 'Daniel Sousa escapes death and joins the team',
    branch: 'chronicom-war',
    text: [
      'The Agents of SHIELD team save **Daniel Sousa** from dying and bring him to the team. They also prevent and catastrophic event from happening with Helius. They save Sousa from HYDRA who knew that him knew about them',
    ],
  },
  {
    id: 'project-insight-derailed',
    date: { year: 1973, order: 10 },
    title: 'The team derails an early Project Insight',
    branch: 'chronicom-war',
    text: [
      'The Agents of SHIELD discovers that project Insight is happening sooner than expected, they prevent it, **Wilfred Mallick** is still alive but Deke kill him',
    ],
    deaths: [
      { name: 'Wilfred Mallick', presumed: false },
    ],
  },
  {
    id: 'deke-shield-director',
    date: { year: 1983, order: 10 },
    title: "Deke stays behind as SHIELD's new director",
    branch: 'chronicom-war',
    text: [
      'The Agents of SHILED are in problem but they get to a solution and Deke stays behind to help the rearreging of SHIELD as the new Director in this alternative world',
    ],
  },
  {
    id: 'coulson-team-new-lives',
    date: { year: 2018, order: 20 },
    title: "Coulson's team moves on to new lives",
    segment: 'E11–E13',
    text: [
      "[Phil Coulson](coulson): has new beautiful car travels the world , [Melinda May](may): teacher at Coulson's Academy , [Daisy](skye): traveling around the universe with her sister and Sousa , **Leo Fitz**: has a child with Jemma , **Jemma Simmons**: has a family with Fitz and Aila , **Mack**: director of the new SHIELD , **Elena**: agent of the new SHIELD , **Enoch**: died again for the team",
    ],
    deaths: [
      { name: 'Enoch', presumed: false },
    ],
  },
]);
