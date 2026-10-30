// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('black-panther', [
  {
    id: 'warrior-founds-wakanda',
    date: { year: -998000, label: '1,000,000 years ago' },
    title: 'The first Black Panther unites the tribes of Wakanda',
    text: [
      'Five African tribes war over a ==meteorite containing the metal vibranium==. One warrior ingests a **"heart-shaped herb"** affected by the metal and gains **superhuman abilities, becoming the first "Black Panther"**. He unites all but the Jabari Tribe to form the nation of *Wakanda*.',
    ],
    locations: ['vibranium-meteorite-crash-site'],
  },
  {
    id: 'tchaka-kills-njobu',
    date: { year: 1992, order: 10 },
    title: "T'Chaka kills his brother N'Jobu in Oakland",
    text: [
      "*The Wakandans* use the vibranium to develop advanced technology and isolate themselves from the world by posing as a Third World country. Wakanda's King **T'Chaka** visits his brother **N'Jobu**, who is working undercover in Oakland, California. T'Chaka accuses N'Jobu of assisting black-market arms dealer **Ulysses Klaue** with stealing vibranium from Wakanda. N'Jobu's partner reveals he is **Zuri**, another undercover Wakandan, and confirms T'Chaka's suspicions. As T'Chaka arrested N'Jobu, the latter attacked Zuri and forced T'Chaka to kill him. T'Chaka ordered Zuri to lie that N'Jobu had disappeared and left behind N'Jobu's American son to maintain the lie.",
    ],
    deaths: [
      { name: "N'Jobu", presumed: false },
    ],
  },
  {
    id: 'tchalla-reclaims-throne',
    date: { year: 2016, order: 70 },
    title: "T'Challa reclaims Wakanda's throne from Killmonger",
    text: [
      "[T'Challa](black-panther) returns to *Wakanda* to assume the throne. At the ceremony is [Okoye](okoye), the leader of the Dora Milaje regiment, hiss ex-lover [Nakia](nakia), his mother **Ramonda** and younger sister [Shuri](shuri), the *Jabari Tribe's* leader **M'Baku** challenges T'Challa for the crown in ritual combat. T'Challa defeats M'Baku and persuades him to yield rather than die.",
      "When **Klaue** and his accomplice **Erik Stevens** steal a Wakandan artifact from a London museum, T'Challa, Okoye, and Nakia travel to Busan, South Korea, where Klaue plans to sell the artifact to CIA agent **Everett K. Ross**. Klaue tells Ross that Wakanda's international image is a front for a technologically advanced civilization. Erik attacks and extracts Klaue as Ross is gravely injured protecting Nakia. Rather than pursue Klaue, T'Challa takes Ross to Wakanda, where their technology can save him.",
      `While Shuri heals Ross, T'Challa confronts Zuri about N'Jobu. Zuri explains that N'Jobu planned to share Wakanda's technology with people of African descent around the world to help them conquer their oppressors. The boy they left grew up to be Stevens, a black ops U.S. Navy SEAL who adopted the name "Killmonger". Meanwhile, Killmonger kills **Klaue** and takes his body to Wakanda. He is brought before the tribal elders, revealing his identity to be **N'Jadaka** and claim to the throne. Killmonger challenges T'Challa to ritual combat, where he kills Zuri, defeats [T'Challa](black-panther), and hurls him over a waterfall to his presumed death. Killmonger **ingests the heart-shaped herb and orders the rest incinerated, but Nakia extracts one first.** Killmonger, supported by W'Kabi and his army, prepares to distribute shipments of Wakandan weapons to operatives around the world.`,
      "Nakia, Shuri, Ramonda, and Ross flee to the Jabari Tribe for aid. They find a comatose [T'Challa](black-panther), rescued by the Jabari in repayment for sparing M'Baku's life. Healed by Nakia's herb, T'Challa returns to fight Killmonger, who dons his own nanotech suit, similar to T'Challa's. W'Kabi and his army fight Shuri, Nakia, and the Dora Milaje, while Ross remotely pilots a jet and shoots down planes carrying the vibranium weapons. M'Baku and the Jabari arrive to reinforce T'Challa. Confronted by Okoye, W'Kabi and his army stand down. Fighting in Wakanda's vibranium mine, T'Challa disrupts Killmonger's suit and stabs him. **Killmonger** refuses to be healed, choosing to die a free man rather than be incarcerated.",
      "T'Challa **establishes an outreach center at the building where N'Jobu died**, to be run by Nakia and Shuri. **T'Challa appears before the United Nations to reveal Wakanda's true nature to the world.** Shuri helps [Bucky Barnes](bucky-barnes) with his recovery.",
    ],
    deaths: [
      { name: 'Klaue', presumed: false },
      { character: 'black-panther', presumed: true },
      { name: 'Killmonger', presumed: false },
    ],
  },
]);
