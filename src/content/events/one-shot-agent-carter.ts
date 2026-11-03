// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('one-shot-agent-carter', [
  {
    id: 'peggy-zodiac-raid',
    date: { year: 1946, order: 10 },
    title: "Peggy Carter's Zodiac raid earns her S.H.I.E.L.D. command",
    text: [
      "A year after losing Steve Rogers, [Peggy Carter](peggy-carter) is stuck with paperwork at the SSR in New York under [John Flynn](john-flynn), who keeps her out of the search for a formula called **Zodiac**. When the hotline rings one night with its location, she goes alone, takes down the guards and brings the vial back. Flynn is reprimanding her when [Howard Stark](howard-stark) calls to say she will run S.H.I.E.L.D. with him.",
    ],
    locations: ['ssr-new-york-field-headquarters', 'zodiac-secret-warehouse', 'stark-country-estate'],
    cast: ['dum-dum-dugan'],
  },
]);
