// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('one-shot-agent-carter', [
  {
    id: 'peggy-zodiac-raid',
    date: { year: 1947, order: 20 },
    title: "Peggy Carter's Zodiac raid earns her S.H.I.E.L.D. command",
    text: [
      'Relegated to data analysis by her sexist superior Agent Flynn at the New York SSR, [Peggy Carter](peggy-carter) intercepts an urgent classified lead regarding the dangerous terrorist organization **Zodiac**. Operating solo under the cover of night, Peggy infiltrates the Zodiac compound, neutralizes all armed guards with surgical precision, and retrieves the mystical Zodiac serum. The following morning, [Howard Stark](howard-stark) calls Flynn directly to announce that Peggy Carter has been selected to co-direct and lead the newly created sovereign intelligence agency: **S.H.I.E.L.D.** alongside Howard Stark and Colonel [Chester Phillips](chester-phillips) in Washington.',
    ],
    locations: ['zodiac-secret-warehouse', 'shield-headquarters-site'],
  },
]);
