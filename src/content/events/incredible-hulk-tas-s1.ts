// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('incredible-hulk-tas-s1', [
  {
    id: 'hulk-smashes-leader-fortress',
    date: { year: 1996, order: 140 },
    segment: 'E1–E2',
    title: 'The Leader tries to drain the Hulk, and Ross forms the Hulkbusters',
    text: [
      "An overloaded experiment turns [Bruce Banner](hulk) into the Hulk, who smashes Gamma Base until [Betty Ross](betty-ross) calms him, and the Pentagon gives her father, General [Thaddeus Ross](thaddeus-ross), the Hulkbusters to hunt him. [The Leader](the-leader-samuel-sterns) has the [Abomination](emil-blonsky-abomination) carry Bruce off and starts draining the Hulk's power, but Betty, [Rick Jones](rick-jones) and the Outcasts break in, and the lab explodes with the Leader inside.",
    ],
    cast: ['glenn-talbot', 'gargoyle'],
    locations: ['banner-desert-lab', 'gamma-base-and-desert-badlands', 'leader-desert-lab', 'outcasts-cave'],
  },
  {
    id: 'zzzax-hoover-dam',
    date: { year: 1996, order: 150 },
    segment: 'E3–E6, E9–E10',
    title: 'On the run, the Hulk crosses paths with Iron Man, Ghost Rider and Thor',
    text: [
      'On the run from the Hulkbusters, the Hulk keeps meeting heroes and monsters. At Hoover Dam he stops [Zzzax](zzzax), a man turned into a creature of electricity; in Los Angeles he fights [Iron Man](tony-stark), and in Chicago [Ghost Rider](ghost-rider-danny-ketch) takes him for a threat.',
      'In the Canadian wilds his college friend [Walter Langkowski](walter-langkowski-sasquatch) becomes Sasquatch for good; under Detroit, [Thor](thor) and the Hulk stop a gamma plague; and in a redwood forest the Hulk beats the [Wendigo](wendigo), setting free Lone Eagle, the warrior who had been turned into it.',
    ],
    cast: ['thaddeus-ross', 'glenn-talbot', 'doc-samson', 'gabe-jones', 'hulk', 'betty-ross', 'rick-jones', 'war-machine', 'homer-ai', 'the-leader-samuel-sterns', 'gargoyle', 'emil-blonsky-abomination'],
    locations: ['gamma-base-and-desert-badlands', 'nevada-nuclear-research-facility', 'hoover-dam', 'stark-enterprises-and-force-works-compound', 'chicago', 'banner-desert-lab', 'langkowski-lab', 'mount-rushmore', 'detroit-salt-mines', 'redwood-national-forest'],
    deaths: ['wendigo'],
  },
  {
    id: 'doom-she-hulk-washington',
    date: { year: 1996, order: 190 },
    segment: 'E7–E8',
    title: 'Doctor Doom holds Washington, and Jennifer Walters becomes She-Hulk',
    text: [
      "[Doctor Doom](victor-von-doom), who wants the Hulk as his weapon, seals Washington under a dome, and his robots wound [Bruce Banner](hulk)'s cousin, the lawyer [Jennifer Walters](jennifer-walters-she-hulk). Bruce saves her with his blood: she becomes She-Hulk, breaks Doom's control over the Hulk and, after beating the Leader's Gamma Warriors with the Hulk and [the Thing](ben-grimm), stays in New York.",
    ],
    cast: ['reed-richards', 'ogress', 'rick-jones', 'sue-storm', 'johnny-storm', 'thaddeus-ross', 'glenn-talbot', 'the-leader-samuel-sterns', 'gargoyle'],
    locations: ['jennifer-walters-apartment', 'doom-washington-estate', 'united-states-capitol-building', 'central-park-zoo', 'four-freedoms-plaza', 'statue-of-liberty'],
  },
  {
    id: 'hulk-banner-separated',
    date: { year: 1996, order: 220 },
    segment: 'E11–E13',
    title: 'The Nutrient Bath splits Banner from the Hulk, and a grey Hulk is born',
    text: [
      "The Nutrient Bath of [Betty Ross](betty-ross) and [Doc Samson](doc-samson) splits [Bruce Banner](hulk) from the Hulk, and for a while [the Leader](the-leader-samuel-sterns) takes over the Hulk's body. Apart, Bruce and the Hulk start dying; [Thaddeus Ross](thaddeus-ross) stops Betty's wedding to Bruce at gunpoint and sabotages the merge, and Bruce turns into a different, grey Hulk while [Rick Jones](rick-jones) runs off as a Hulk-like creature.",
    ],
    cast: ['gabe-jones', 'ogress', 'gargoyle', 'glenn-talbot'],
    locations: ['gamma-base-and-desert-badlands', 'banner-desert-lab', 'outcasts-cave'],
  },
]);
