// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('eyes-of-wakanda-s1', [
  {
    id: 'noni-hunts-the-lion',
    date: { year: -1260 },
    segment: 'E1',
    title: "Noni brings down the Lion's pirate kingdom",
    text: [
      'Expelled from the Dora Milaje, [Noni](noni) is summoned by [Akeya](akeya) to stop [Nkati](the-lion), a Royal Guard captain who deserted with stolen ==Vibranium artifacts== and rules a pirate fleet as the Lion. Six weeks later she lets herself be captured in his raid on Crete to reach his kingdom at sea, where she frees the captives and defeats him. Nkati blows up his throne rather than surrender, and Noni survives, losing an eye. Back in Wakanda she turns down her old rank and joins the War Dogs.',
    ],
    locations: ['war-dogs-headquarters', 'knossos-palace-and-mediterranean-outpost', 'lions-kingdom'],
    deaths: ['the-lion'],
  },
  {
    id: 'memnon-vibranium-spear',
    date: { year: -1200, order: 10 },
    segment: 'E2',
    title: "B'Kai recovers Helen's pendant as Troy falls",
    text: [
      "After nine years undercover as Memnon among the Greeks, War Dog [B'Kai](memnon) enters Troy inside the Trojan Horse, the plan of [Odysseus](odysseus), to recover a ==Vibranium pendant== worn by [Helen](helen). He takes it and lets her flee with [Paris](paris), but [Achilles](achilles), his closest friend, sees it as betrayal and attacks him. B'Kai kills him and slips away as the Greeks sack the city.",
    ],
    locations: [{ id: 'trojan-battlefield-and-aegean-shore', note: 'Royal Palace of Troy' }],
    deaths: ['achilles', { name: 'Ferro' }, { name: 'Nicos' }],
  },
  {
    id: 'bkai-returns-to-wakanda',
    date: { year: -1200, order: 15 },
    segment: 'E2',
    title: "B'Kai comes home a stranger",
    text: [
      "Six months later [B'Kai](memnon) is back in Wakanda, where he feels more alone than he did abroad. He confides in [Noni](noni), now director of the War Dogs, and she agrees to send him back into the field.",
    ],
    locations: ['war-dogs-headquarters'],
  },
  {
    id: 'jorani-iron-fist-relic',
    date: { year: 1400 },
    segment: 'E3',
    title: "Basha steals a dragon's head and the Iron Fist follows him",
    text: [
      "War Dog [Basha](basha) is sent to a snowbound village in K'un-Lun to recover Vibranium hidden in a sacred statue of Shou-Lao. After weeks living among the villagers and with [Jorani](jorani), he steals the statue's head and flies home, unaware she has stowed away. Revealed as the Iron Fist, she breaks into War Dogs headquarters, pulls the ==Vibranium tongue== from the head and keeps only what belongs to her people. Basha and [Ebo](ebo) pass it all off to [Rakim](rakim) as a drill and take her home.",
    ],
    locations: ['kun-lun-gate', 'kun-lun-heavenly-gate', 'war-dogs-headquarters'],
  },
  {
    id: 'kuda-tafari-adwa',
    date: { year: 1896 },
    segment: 'E4',
    title: 'Kuda and Tafari return the Vibranium ax to Adwa',
    text: [
      "During the Battle of Adwa, [Kuda](kuda) and [Prince Tafari](prince-tafari) recover a ==Vibranium ax== from a merchant's house. On the way home they are ambushed by a Black Panther from 500 years in the future, [the last queen of Wakanda](last-black-panther), who shows them its fall and says the ax must stay so a forgotten son of Wakanda can find it one day. Convinced when she knows the queen's secret pregnancy, they take it back under fire. Tafari answers for the decision before the council, while [Uatu](uatu-the-watcher) watches.",
    ],
    locations: ['adwa-mountain-pass', 'wakandan-borderlands-and-outer-pastoral-villages', 'birnin-zana-citadel'],
  },
  {
    id: 'killmonger-finds-the-ax',
    date: { year: 2016, order: 65 },
    segment: 'E4',
    title: 'Killmonger finds the ax at the Museum of Great Britain',
    text: [
      'One hundred and twenty years after Adwa, [Erik Killmonger](erik-killmonger) stands before the ax at the Museum of Great Britain, the first step of the campaign that will open Wakanda to the world.',
    ],
    locations: ['museum-of-great-britain'],
    alsoIn: ['black-panther'],
  },
  {
    id: 'last-black-panther-travels-back',
    date: { year: 2396, approx: true },
    segment: 'E4',
    title: 'The last Black Panther holds the way back as Wakanda falls',
    branch: 'last-panther-future',
    text: [
      'Five centuries ahead, an isolated Wakanda is the last nation standing against **the Horde**, which has already conquered the rest of Earth. Its queen, the [last Black Panther](last-black-panther), spends years searching history with the ==Quantum Scanner== for the moment that could change it, and finds the ax of 1896. When the Horde tracks the machine down she stays to defend it beside the last Dora Milaje, until she is forced back through the portal.',
    ],
    locations: [{ id: 'birnin-zana-citadel', note: 'Quantum Scanner' }],
    deaths: [{ character: 'last-black-panther', presumed: true }],
  },
]);
