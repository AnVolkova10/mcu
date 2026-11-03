// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('stark-expo-1974', [
  {
    id: 'howard-encodes-element',
    date: { year: 1974 },
    title: 'Howard Stark films the Stark Expo intro and a message for Tony',
    text: [
      '[Howard Stark](howard-stark) presents the 1974 Stark Expo in a promotional film: everything is achievable through technology, better living, robust health and, for the first time in human history, the possibility of world peace.',
      "On the original tape, later kept by S.H.I.E.L.D. in a box of his things, the filming stops when a young [Tony Stark](tony-stark) walks onto the set and Howard calls Maria to take him away. Then Howard records a message for his son beside the model of the Expo, where he has hidden the structure of a new element: it is the key to the future, he is limited by the technology of his time, and one day Tony will figure it out and change the world. \"What is and always will be my greatest creation… is you.\"",
    ],
    locations: ['stark-world-exposition-of-tomorrow', 'stark-industries-headquarters'],
    alsoIn: ['iron-man-2'],
  },
]);
