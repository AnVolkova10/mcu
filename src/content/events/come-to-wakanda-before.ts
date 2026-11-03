// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('come-to-wakanda-before', [
  {
    id: 'wakanda-tourist-film',
    date: { year: 1988 },
    title: 'A tourism ad shows Wakanda as the world believes it to be',
    text: [
      'A Wakandan tourism ad from 1988 invites visitors to the country the rest of the world believes in: a small, poor and rural nation, which hides the advanced kingdom Wakanda really is.',
    ],
    locations: ['wakandan-borderlands-and-outer-pastoral-villages'],
  },
]);
