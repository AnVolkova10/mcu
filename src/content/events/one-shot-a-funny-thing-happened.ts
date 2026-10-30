// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('one-shot-a-funny-thing-happened', [
  {
    id: 'coulson-gas-station-robbery',
    date: { year: 2010, order: 30 },
    title: 'Phil Coulson foils a Roxxon gas station robbery',
    text: [
      '[Agent Phil Coulson](coulson) stops at a Roxxon Gas Station to fill up his car and two armed robbers enter the shop, he takes them both down. [Phil Coulson](coulson) reports the discovery of a ==large hammer== at the bottom of a crater in a desert in New Mexico.',
    ],
  },
]);
