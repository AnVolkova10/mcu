// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('one-shot-the-consultant', [
  {
    id: 'blonsky-release-blocked',
    date: { year: 2010, order: 60 },
    title: "Coulson and Sitwell send Stark to block Blonsky's release",
    text: [
      '[Phil Coulson](coulson) informs **Jasper Sitwell** that the *World Security Council* wishes Emil Blonsky released from prison to join ==the Avengers Initiative==. They order *S.H.I.E.L.D.* to send an agent to ask General Thaddeus Ross to release Blonsky into their custody. The two agents decide to send [Tony Stark](tony-stark) to sabotage the meeting, so Ross will refuse to release Blonsky. Later they succeed, [Tony Stark](tony-stark) approaches Ross at a local bar and informs him that a ==team is being put together==.',
    ],
  },
]);
