// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('incredible-hulk-tas-s2', [
  {
    id: 'jennifer-walters-she-hulk',
    date: { year: 1996, order: 230 },
    segment: 'E1',
    title: 'She-Hulk clears Bruce in court, and the Leader drains Rick Jones',
    text: [
      'The night the Nutrient Bath fails, [Thaddeus Ross](thaddeus-ross) falls into a coma under rocks he brought down himself, and [Bruce Banner](hulk) is arrested for it. [Jennifer Walters](jennifer-walters-she-hulk) defends him in court, [the Leader](the-leader-samuel-sterns) drains the gamma power of [Rick Jones](rick-jones) to restore his genius, and [Betty Ross](betty-ross) proves that her father caused his own fall.',
    ],
    cast: ['gargoyle'],
    locations: ['gamma-base-and-desert-badlands'],
  },
  {
    id: 'she-hulk-reunion',
    date: { year: 1996, order: 240 },
    segment: 'E2–E7',
    title: 'She-Hulk and the Hulk face Doom, the Leader and the Dark Hulk',
    text: [
      'At her ten-year high school reunion, [She-Hulk](jennifer-walters-she-hulk), her power fading, turns down the love of the [Gargoyle](gargoyle) and wins it back to hold up the falling hall. [Doctor Strange](doctor-strange) leads her into the mind of [Bruce Banner](hulk) to beat the Dark Hulk, an alien from a barren dimension that has taken his body, and in Chicago the crime boss [Allure](miss-allure) hypnotizes Bruce until his own device takes her power away.',
      "In Miami, She-Hulk, [Betty Ross](betty-ross) and three models stop [the Leader](the-leader-samuel-sterns) from holding a charity fashion show for ransom. In Los Angeles a deposed [Doctor Doom](victor-von-doom) turns Bruce's asteroid beam into a tractor beam to force the United League of Countries out of Latveria, and in Anavrin, a hidden valley beyond a Tibetan village where time moves slowly, the Hulk beats [Lord Scimitar](lord-scimitar).",
    ],
    cast: ['emil-blonsky-abomination', 'ogress', 'crusher-creel'],
    locations: ['jennifer-walters-hometown', 'sanctum-sanctorum', 'chicago', 'chateau-de-shae', 'hollywood', 'low-earth-orbit-and-exosphere-space', 'caraclah-village', 'anavrin'],
  },
  {
    id: 'hybrid-sea-base',
    date: { year: 1996, order: 300 },
    segment: 'E8',
    title: "Hybrid seizes S.H.I.E.L.D.'s Sea Base, and General Ross wakes up",
    text: [
      "A parasite wakes [Thaddeus Ross](thaddeus-ross) from his coma and makes [Betty Ross](betty-ross) take it to S.H.I.E.L.D.'s Sea Base. It is [Diana](hybrid-diana), a double agent caught by S.H.I.E.L.D.'s deep-sea organisms, who seizes the Grey Hulk's body and the base; the Hulk throws her out, he and [She-Hulk](jennifer-walters-she-hulk) sink the base before its gamma core blows, and Ross wants to get to know his future son-in-law.",
    ],
    cast: ['gabe-jones', 'hulk'],
    locations: ['sea-base'],
  },
]);
