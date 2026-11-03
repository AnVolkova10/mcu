// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agent-carter-s1', [
  {
    id: 'red-room-dottie-underwood',
    date: { year: 1937 },
    segment: 'E5',
    title: 'The Red Room forges Dottie Underwood into an assassin',
    text: [
      "In Belarus in 1937, young girls at the **Red Room Academy** are handcuffed to their beds, taught English from American films such as *Snow White* and trained to fight. [Dottie Underwood](dottie-underwood) shares her bread with a girl called Anya, and when the two are made to spar she snaps her neck on the headmistress's signal.",
    ],
    locations: ['red-room-academy-training-facility'],
    deaths: [{ name: 'Anya' }],
  },
  {
    id: 'peggy-helps-howard-stark',
    date: { year: 1946, order: 20 },
    segment: 'E1–E4',
    title: 'Peggy Carter secretly helps a fugitive Howard Stark',
    text: [
      "Accused of selling weapons to America's enemies, [Howard Stark](howard-stark) flees and asks [Peggy Carter](peggy-carter) to clear his name, with his butler [Edwin Jarvis](edwin-jarvis) at her side and behind the backs of [Roger Dooley](roger-dooley), [Jack Thompson](jack-thompson) and [Daniel Sousa](daniel-sousa) at the SSR. Her roommate Colleen is murdered, a Roxxon refinery is destroyed by one of Howard's stolen bombs, and the trail leads to a group called **Leviathan**. Its men Leet Brannis and Sasha Demidov die on a road in New Jersey, and an unknown killer shoots Agent Krzeminski. Among Howard's inventions Peggy finds a vial of Steve Rogers' blood and hides it, while [Dottie Underwood](dottie-underwood), her new neighbor at the Griffith Hotel, turns out to be a killer.",
    ],
    locations: ['ssr-new-york-field-headquarters', 'roxxon-refinery', 'cedar-grove-new-jersey', 'griffith-hotel'],
    cast: ['angie-martinelli'],
    deaths: [{ name: "Colleen O'Brien" }, { name: 'Leet Brannis' }, { name: 'Sasha Demidov' }, { name: 'Ray Krzeminski' }],
  },
  {
    id: 'peggy-raids-the-red-room',
    date: { year: 1946, order: 30 },
    segment: 'E5–E6',
    title: 'Peggy leads the Commandos into the Red Room and is exposed',
    text: [
      "[Peggy Carter](peggy-carter) decodes a Leviathan message and goes to Belarus with [Jack Thompson](jack-thompson) and the Howling Commandos of [Dum Dum Dugan](dum-dum-dugan). At the Red Room Academy a young girl kills Junior Juniper, and they escape with an imprisoned psychiatrist, Dr. Ivchenko, who is really [Johann Fennhoff](johann-fennhoff). Back in New York, [Daniel Sousa](daniel-sousa) works out that Peggy is the woman interfering with the case, Fennhoff hypnotizes Agent Yauch to his death, and [Dottie Underwood](dottie-underwood) knocks her out just before the SSR arrests her.",
    ],
    locations: ['red-room-academy-training-facility', 'ssr-new-york-field-headquarters'],
    deaths: [{ name: 'Junior Juniper' }, { name: 'Yauch' }],
  },
  {
    id: 'peggy-foils-leviathan',
    date: { year: 1946, order: 40 },
    segment: 'E7–E8',
    title: 'Peggy Carter clears Howard Stark and foils Leviathan',
    text: [
      "[Peggy Carter](peggy-carter) wins over the SSR, but [Johann Fennhoff](johann-fennhoff) hypnotizes [Roger Dooley](roger-dooley), who dies leaping from a window in a bomb vest to save his agents, and tries Midnight Oil, a gas made by [Howard Stark](howard-stark), on a cinema audience with [Dottie Underwood](dottie-underwood) (*Dottie I love you*). Fennhoff wants revenge for the Soviet soldiers the gas destroyed at Finow, and hypnotizes Howard into flying it over Times Square. [Daniel Sousa](daniel-sousa) catches him, Peggy beats Dottie, who gets away, and talks Howard down over the radio.",
      "Fennhoff ends up in a cell next to [Arnim Zola](arnim-zola), and Peggy pours the last of Steve Rogers' blood into the East River from the Brooklyn Bridge.",
    ],
    locations: ['ssr-new-york-field-headquarters', 'howard-stark-hangar', 'times-square', 'brooklyn-bridge'],
    cast: ['edwin-jarvis', 'jack-thompson'],
    deaths: ['roger-dooley'],
  },
]);
