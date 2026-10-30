// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('jessica-jones-s3', [
  {
    id: 'trish-murders-salinger',
    date: { year: 2017, order: 80 },
    title: 'Trish murders Salinger and ends up in the Raft',
    text: [
      'When [Jessica](jessica-jones) crosses paths with a highly intelligent psychopath, **Salinger**, she and **Trish** must repair their fractured relationship and team up to take him down. **Malcolm** continues to work for **Jeri Hogarth**. Jones goes to a bar, where she meets the charming **Erik Gelden**, who has powers: headache when he is near an evil person. Sallinger stab Jessica in the abdomen with a knife before fleeing.',
      "Tensions run high between Jessica and Trish as Trish hones her catlike skills and scours the city for a chance to be a hero. Teaming up with Trish to take out Sallinger, they race to find Sallinger's latest captive, Erik. Jessica and Trish go on a road trip to dig into Sallinger's past. Jeri demands that Malcolm identify the masked woman. Trish finds her mother, **Dorothy** murdered by Salinger, then races to Salinger's apartment to kill him with Jones rushing to stop her. Jessica's forced to choose between protecting Trish and destroying Sallinger. Erik watches in horror as **Trish** attacks and murders two people. Trish is still overcome with anger and murders **Salinger** while he is being transported to prison. Hogarth, Costa, and Jones find his beaten and mutilated body in an elevator.",
      `As Jones solemnly returns to her apartment, she is greeted by [Luke Cage](luke-cage), who tells her that the hardest thing he did was send his brother, Willis Stryker, to *the Raft*. Knowing what she has to do, Jones decides to track Trish down. As Trish is being processed, it dawns on her that she is the "bad guy". Jones gives Malcolm the keys to Alias Investigations and sees Trish being taken to the Raft. Jones tries to leave for Mexico, but after hearing Kilgrave's voice tell her to leave everyone behind, she has a change of heart and decides to stay in New York.`,
    ],
    deaths: [
      { name: 'Dorothy', presumed: false },
      { name: 'Salinger', presumed: false },
    ],
  },
]);
