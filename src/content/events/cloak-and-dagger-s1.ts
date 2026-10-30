// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('cloak-and-dagger-s1', [
  {
    id: 'roxxon-platform-explosion',
    date: { year: 2009 },
    title: "Roxxon's platform explosion empowers Tandy and Tyrone",
    text: [
      `*Roxxon*'s **Gulf platform explodes** killing [Tandy](dagger) 's dad **Nathan Bowen** and provoking the killing of [Tyrone](cloak) 's brother **Billy Jonhson** by the police of New Orleans. Tyrone and Tandy got powers from the energy force of the explosion when they went underwater. The people working in the platform suffered from "The Terrors" (they went batshitcrazy).`,
    ],
    deaths: [
      { name: 'Nathan Bowen', presumed: false },
      { name: 'Billy Jonhson', presumed: false },
    ],
  },
  {
    id: 'tyrone-tandy-roxxon',
    date: { year: 2016, order: 10 },
    title: 'Tyrone and Tandy take on Roxxon in New Orleans',
    text: [
      "Set in the magical New Orleans, [Tyrone](cloak) is Cloak which his power is the dark: the ability to teleport and see the fears of the people he touches and [Tandy](dagger) is Dagger her power is the light: the ability to create light daggers and see or/and steal the hopes of the people she touches. **Detective O'Reilly** cames from New York and helps the kids but in the final battle she gets infected by the Terrors.",
      'There is a Voodoo neworlean profecy that one of the divine pairing must die in order to save the city from the Drilling company of *Roxxon*. Tyrone wants to clean his brothers death and bring justice to the corrupt police and Tandy wants to know what happenned with her dad, the explosion and destroy Roxxon. They have to control their powers in order to succeed and live. Tandy wins against Roxxon but Tyrone becomes a fugitive of the law.',
    ],
  },
]);
