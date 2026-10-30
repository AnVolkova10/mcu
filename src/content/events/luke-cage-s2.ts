// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('luke-cage-s2', [
  {
    id: 'cage-sheriff-of-harlem',
    date: { year: 2017, order: 40 },
    title: 'Luke Cage declares himself the sheriff of Harlem',
    text: [
      'After clearing his name, [Luke Cage](luke-cage) has become a celebrity on the streets of Harlem with a reputation as bulletproof as his skin. But being so visible has only increased his need to protect the community and find the limits of who he can and can’t save. With the rise of a formidable new foe and **Shades**, **Mariah Dillard** is killed by her daughter in prison. Luke is forced to confront the fine line that separates a hero from a villain with the help on the way from **Claire Temple** (they finally broken up due to differences), **Misty Knight** with a robotic arm created by RAND [Danny Rand](iron-fist) and [Colleen](colleen-wing). Luke struggles with the best way to attack the problems facing his community, and in the end he resolves that the best path forward is to deputize himself as the veritable sheriff of Harlem, operating out of the same place both Mariah and the late Cottonmouth once called their home.',
    ],
    deaths: [
      { name: 'Mariah Dillard', presumed: false },
    ],
  },
]);
