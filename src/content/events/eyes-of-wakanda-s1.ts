// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('eyes-of-wakanda-s1', [
  {
    id: 'noni-hunts-the-lion',
    date: { year: -1260 },
    title: 'Noni hunts The Lion across the Mediterranean',
    text: [
      'In Crete, disgraced former Dora Milaje warrior turned ==Hatut Zeraze== agent [Noni](noni) embarks on a clandestine hunt across the Mediterranean to track down [The Lion](the-lion), a rogue War Dog warlord who stole sacred Vibranium weapons and forged an unauthorized empire threatening to expose the secrets of ==Wakanda== to the ancient world.',
    ],
    locations: ['knossos-palace-and-mediterranean-outpost', 'birnin-zana-citadel'],
    deaths: ['the-lion'],
  },
  {
    id: 'memnon-vibranium-spear',
    date: { year: -1200, approx: true, order: 10 },
    title: 'Memnon seeks a Vibranium spear during the Trojan War',
    text: [
      'After spending nine agonizing years undercover as a frontline Myrmidon warrior alongside the legendary warrior Achilles during the Trojan War, ==Hatut Zeraze== operative [Memnon](memnon) executes his secret oath to reclaim a stolen Vibranium spear before mortal kings weaponize divine Wakandan metallurgy.',
    ],
    locations: ['trojan-battlefield-and-aegean-shore'],
  },
  {
    id: 'jorani-iron-fist-relic',
    date: { year: 1400, approx: true },
    title: 'Hatut Zeraze and Iron Fist Jorani secure a relic',
    text: [
      "In medieval China, a covert ==Hatut Zeraze== recovery mission for lost Vibranium artifacts crosses paths with [Jorani](jorani), a formidable female warrior and the reigning [Iron Fist](iron-fist) from the mystical capital of K'un-Lun. Uniting Wakandan Vibranium science and mystical dragon Chi, they secure the ancient relic from opportunistic warlords.",
    ],
    locations: ['shaanxi-mountain-valley', 'kun-lun-heavenly-gate'],
  },
  {
    id: 'kuda-tafari-adwa',
    date: { year: 1896 },
    title: 'Kuda mentors Prince Tafari at the Battle of Adwa',
    text: [
      'During the First Italo-Ethiopian War and the historic Battle of Adwa, veteran War Dog [Kuda](kuda) mentors the young [Prince Tafari](prince-tafari) on a dangerous rite-of-passage mission into the active battlefield to retrieve a sacred Vibranium battle axe from Ethiopian warriors resisting colonial invasion.',
    ],
    locations: ['adwa-mountain-pass', 'royal-palace'],
  },
  {
    id: 'last-black-panther-travels-back',
    date: { year: 2400, approx: true },
    title: 'The Last Black Panther travels back to save Wakanda',
    branch: 'last-panther-future',
    text: [
      'Five hundred years into a catastrophic future, ==Wakanda== is completely obliterated by the apocalyptic alien conquerors known as **the Horde** due to centuries of rigid isolationism and refusal to build global alliances. Armed with temporal displacement technology, the [Last Black Panther](last-black-panther) (the future Queen of Wakanda) travels back in time to 1896 to intercept [Kuda](kuda) and [Prince Tafari](prince-tafari), convincing them to leave the Vibranium axe in Africa so future kings will recognize the vital need for global unity and avert the dark future.',
    ],
    locations: [
      'ruins-of-the-great-mound',
      { id: 'earth-orbital-exosphere', note: 'S.A.B.E.R. Station' },
    ],
  },
]);
