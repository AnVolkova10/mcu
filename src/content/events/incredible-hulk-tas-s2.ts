// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('incredible-hulk-tas-s2', [
  {
    id: 'jennifer-walters-she-hulk',
    date: { year: 1997, order: 40 },
    title: 'Bruce Banner saves Jennifer Walters, creating She-Hulk',
    text: [
      "Following a fatal shooting by crime syndicate hitmen, Bruce Banner performs an emergency blood transfusion on his lawyer cousin [Jennifer Walters](jennifer-walters-she-hulk), saving her life and transforming her into the charismatic, emerald powerhouse [She-Hulk](jennifer-walters-she-hulk). Together on the open road, the gamma cousins clash with the savage Wendigo in Canada, infiltrate Latveria to thwart Doctor Doom's mind-control device, and navigate Bruce's volatile psychological fracturing that gives rise to the cunning, cynical persona of the **Gray Hulk** (Joe Fixit).",
    ],
    cast: ['hulk', 'victor-von-doom'],
    locations: ['castle-doom-sub-levels'],
  },
]);
