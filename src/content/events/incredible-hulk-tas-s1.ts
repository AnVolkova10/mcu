// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('incredible-hulk-tas-s1', [
  {
    id: 'hulk-smashes-leader-fortress',
    date: { year: 1996, order: 40 },
    title: "Hulk smashes the Leader's mountain fortress",
    text: [
      "Fleeing the military manhunt commanded by General 'Thunderbolt' Ross and Major Glenn Talbot, fugitive nuclear physicist [Dr. Bruce Banner](hulk) wanders the American Southwest searching for a biological cure to suppress his gamma monster: **The Incredible Hulk**. Banner is ambushed in desert badlands by gamma-irradiated mastermind [The Leader](the-leader-samuel-sterns) and gargantuan brute [The Abomination](emil-blonsky-abomination). When Betty Ross and Rick Jones are endangered, Banner's pulse skyrockets, unleashing the Jade Giant to shatter the Leader's fortified mountain fortress and defend those he loves.",
    ],
    locations: ['gamma-base-and-desert-badlands'],
  },
  {
    id: 'hulk-iron-man-thing',
    date: { year: 1996, order: 50 },
    title: 'Hulk teams up with Iron Man and the Thing',
    text: [
      "Seeking a heavy-water radiation dampener in Utah, Bruce Banner reaches out to fellow scientist [Tony Stark](tony-stark). When the Leader's agent The Ghost hijacks Stark Enterprises' systems, [Iron Man](tony-stark) and [War Machine](war-machine) deploy alongside the Hulk to demolish the cybernetic saboteur. Weeks later, Banner travels to the Baxter Building in Manhattan seeking Reed Richards, only to find [The Thing](ben-grimm) holding down the fortress. When Leader's robotic gamma androids breach the perimeter, Hulk and Thing join forces in an earth-shattering brawl through New York's sub-levels, forging a mutual respect between the two titans.",
    ],
    cast: ['hulk'],
    locations: [
      'stark-enterprises-salt-lake-testing-facility',
      'baxter-building-lower-labs',
    ],
  },
]);
