// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('the-punisher-s1', [
  {
    id: 'castle-micro-cia-conspiracy',
    date: { year: 2017, order: 20 },
    title: 'Frank Castle and Micro bring down a CIA conspiracy',
    text: [
      '[Frank Castle](the-punisher) continuing his hunt for the men who killed his family, after discovering that the man he previously dealt with – his former commander, **Colonel Schoonover** – was part of a much wider conspiracy inside the CIA. Drawn back into a vigilante life, he finds himself tracking down **“Agent Orange”** and his former brother-in-arms, **Billy Russo**, who are both wrapped up in it. Along the way, Frank partners with **“Micro”**, another victim of the conspiracy who faked his own death to focus on bringing it down. As Frank and Micro partner up, they are tailed by government agents, including the obsessive but brilliant **Dinah Madani**, who is clean – though her bosses may not be. (They where smuggling heroine from soldiers corpses in Afghanistan).',
      'Frank eventually takes down **Agent Orange** and his subordinates with the help of **Karen Page**, Madani and Micro, culminating in a final battle which sees Russo and Frank face off in the funfair location where Frank’s family was originally killed. After beating Russo and smashing his face into a mirror, Frank delivers him to Madani whose investigations have put her on Frank’s side.',
      'With the conspiracy beaten, Micro is free to return to his family, and **both he and Frank are pardoned by the authorities.** Assuming, of course, that Frank stays out of trouble.',
    ],
    deaths: [
      { name: 'Colonel Schoonover', presumed: false },
      { name: 'Agent Orange', presumed: false },
    ],
  },
]);
