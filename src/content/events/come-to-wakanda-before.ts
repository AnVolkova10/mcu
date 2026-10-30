// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('come-to-wakanda-before', [
  {
    id: 'wakanda-tourist-film',
    date: { year: 1984, approx: true },
    title: 'Wakanda hides its Golden City behind a tourist film',
    text: [
      "During the mid-1980s, the ==Wakandan Ministry of Tourism== broadcasts a retro promotional tourist film across international television networks, portraying ==Wakanda== as an idyllic, simple third-world African nation of subsistence farmers, shepherds, and hand-woven textile artisans. This carefully curated public facade serves as a global deception to conceal Wakanda's subterranean Vibranium deposits, holographic border cloaks, and hyper-futuristic Golden City from international intelligence agencies.",
    ],
    locations: [
      'wakandan-borderlands-and-outer-pastoral-villages',
    ],
  },
]);
