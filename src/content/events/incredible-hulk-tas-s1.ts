// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('incredible-hulk-tas-s1', [
  {
    id: 'hulk-smashes-leader-fortress',
    date: { year: 1996, order: 140 },
    segment: 'E1–E2',
    title: 'The Leader tries to drain the Hulk, and Ross forms the Hulkbusters',
    text: [
      "When Major [Glenn Talbot](glenn-talbot) blows up the power tap of the secret desert lab of [Bruce Banner](hulk), his experiment overloads and he becomes the Hulk, who smashes Gamma Base until [Betty Ross](betty-ross) calms him; her father, General [Thaddeus Ross](thaddeus-ross), locks him up. [Rick Jones](rick-jones) quits his job at a garage to help his friend. Allowed to work on a cure under guard, Bruce is attacked by the [Abomination](emil-blonsky-abomination), sent by [the Leader](the-leader-samuel-sterns), who has promised the [Gargoyle](gargoyle) a cure for his looks in exchange for his service.",
      "The Hulk escapes Ross's Omega Laser into the desert, where the Outcasts, creatures mutated by the same gamma blast, shelter him with Betty and Rick, and the Pentagon gives Ross his Hulkbusters. The Abomination carries Bruce off to the Leader, whose siphon starts draining the Hulk's power; Betty, Rick and the Outcasts break in, the Hulk beats the Abomination, the Gargoyle runs off with the Leader's data, and the lab explodes with the Leader inside.",
    ],
    locations: ['banner-desert-lab', 'gamma-base-and-desert-badlands', 'leader-desert-lab', 'outcasts-cave'],
  },
  {
    id: 'zzzax-hoover-dam',
    date: { year: 1996, order: 150 },
    segment: 'E3',
    title: 'The Hulk stops Zzzax, a creature of electricity, at Hoover Dam',
    text: [
      "[Thaddeus Ross](thaddeus-ross) presents his Hulkbusters: [Glenn Talbot](glenn-talbot), the pilot Samuel LaRoquette, [Doc Samson](doc-samson) and Agent [Gabriel Jones](gabe-jones) of S.H.I.E.L.D., sent by Nick Fury as an adviser. In Nevada, [Mitch McCutcheon](zzzax) smuggles [Bruce Banner](hulk) into the nuclear research facility Bruce designed, and their experiment turns Mitch into Zzzax, a creature of electricity who drains the plant toward a meltdown. The Hulk stops the countdown and drags Zzzax into the water below Hoover Dam, where Mitch turns human again and the Hulk pulls him out: \"Hulk. Friend.\"",
    ],
    cast: ['betty-ross', 'rick-jones'],
    locations: ['gamma-base-and-desert-badlands', 'nevada-nuclear-research-facility', 'hoover-dam'],
  },
  {
    id: 'hulk-iron-man-thing',
    date: { year: 1996, order: 160 },
    segment: 'E4',
    title: 'Iron Man helps an amnesiac Bruce Banner, and the Hulkbusters attack',
    text: [
      "In Los Angeles, [Bruce Banner](hulk) leaves a message for [Tony Stark](tony-stark) before a falling overpass takes his memory, and the Hulk fights Iron Man until [Rick Jones](rick-jones) calms him. At Stark Enterprises, Tony, [War Machine](war-machine) and [H.O.M.E.R.](homer-ai) try to purge Bruce's gamma in stasis sleep, but the Hulkbusters cut the power and the Hulk wakes. He crushes Iron Man's big Hulkbuster armor, Rick and War Machine fight the Hulkbusters' robots, and Rick helps the Hulk break out of a containment unit and get away.",
    ],
    cast: ['betty-ross', 'doc-samson', 'thaddeus-ross', 'glenn-talbot', 'gabe-jones'],
    locations: ['stark-enterprises-and-force-works-compound', 'gamma-base-and-desert-badlands'],
  },
  {
    id: 'ghost-rider-chicago',
    date: { year: 1996, order: 170 },
    segment: 'E5',
    title: 'Ghost Rider takes the Hulk for a threat in Chicago',
    text: [
      "In Chicago, the Hulk tries to save a sister from a fire, but [Ghost Rider](ghost-rider-danny-ketch), taking him for the threat, attacks him and carries her out himself. Major [Glenn Talbot](glenn-talbot) hits the Hulk with a tranquilizer ray that would kill [Bruce Banner](hulk) if he turned back, and Ghost Rider turns on Talbot, until [Rick Jones](rick-jones), [Betty Ross](betty-ross) and [Doc Samson](doc-samson) make the Hulk angry enough to burn the drug off. Meanwhile [the Leader](the-leader-samuel-sterns) takes over Banner's old desert lab, and one of his spy bugs takes a hair from the Hulk to grow a new breed of warriors.",
    ],
    cast: ['thaddeus-ross', 'gargoyle'],
    locations: ['chicago', 'banner-desert-lab'],
  },
  {
    id: 'sasquatch-canada',
    date: { year: 1996, order: 180 },
    segment: 'E6',
    title: 'Walter Langkowski becomes Sasquatch for good in the Canadian wilds',
    text: [
      "[Bruce Banner](hulk) goes to the Canadian wilderness to find his college friend [Walter Langkowski](walter-langkowski-sasquatch), a gamma researcher, and the Hulk befriends a boy, Taylor, while the villagers take him for the Sasquatch. Walter has been changing into a beast for weeks; his cure, gamma rays filtered through ancient blue ice, fails when Taylor walks in, and Walter becomes Sasquatch for good. The Hulk saves Taylor from the icy water, Sasquatch drifts away on an iceberg, and the villagers keep S.H.I.E.L.D. out.",
    ],
    cast: ['thaddeus-ross', 'betty-ross', 'gabe-jones'],
    locations: ['langkowski-lab', 'gamma-base-and-desert-badlands'],
  },
  {
    id: 'doom-she-hulk-washington',
    date: { year: 1996, order: 190 },
    segment: 'E7–E8',
    title: 'Doctor Doom holds Washington, and Jennifer Walters becomes She-Hulk',
    text: [
      "In Washington, [Bruce Banner](hulk) turns to his cousin [Jennifer Walters](jennifer-walters-she-hulk), a lawyer, until the robots of [Doctor Doom](victor-von-doom), who wants the Hulk as his weapon, wound her and carry her off. Doom seals the city under a dome and declares Washington his prisoner of war, and Bruce saves the dying Jennifer with his blood. She becomes She-Hulk, breaks Doom's control over the Hulk, and Doom escapes.",
      "The next day in New York, Bruce and She-Hulk look for [Reed Richards](reed-richards), who leaves for Tahiti and leaves [the Thing](ben-grimm) behind. At the Central Park Zoo, the Leader's [Ogress](ogress) knocks out the Thing and fights She-Hulk, and the Hulk and the Thing save [Rick Jones](rick-jones) from the crocodile pit. Gamma Warriors take Bruce from Four Freedoms Plaza to the Statue of Liberty, where the Hulk, the Thing and She-Hulk beat them, and She-Hulk stays in New York.",
    ],
    cast: ['sue-storm', 'johnny-storm', 'thaddeus-ross', 'glenn-talbot', 'the-leader-samuel-sterns', 'gargoyle'],
    locations: ['jennifer-walters-apartment', 'doom-washington-estate', 'united-states-capitol-building', 'central-park-zoo', 'four-freedoms-plaza', 'statue-of-liberty'],
  },
  {
    id: 'thor-detroit-gamma-plague',
    date: { year: 1996, order: 200 },
    segment: 'E9',
    title: 'Thor and the Hulk stop a gamma plague under Detroit',
    text: [
      "[Thaddeus Ross](thaddeus-ross) cages the Hulk at Mount Rushmore, and in Detroit, where a gamma virus is spreading, Dr. Donald Blake strikes his staff and becomes [Thor](thor), who frees the Hulk and fights him until the Hulk throws his hammer away. In the salt mines under the city the [Abomination](emil-blonsky-abomination), free of the Leader's control, takes [Bruce Banner](hulk) to the [Gargoyle](gargoyle), whose gamma waste started the plague; Bruce makes a serum, and the Gargoyle gives him the last dose to save the infected [Betty Ross](betty-ross). Thor and the Hulk hold back the river that floods the mine.",
    ],
    cast: ['gabe-jones', 'doc-samson'],
    locations: ['gamma-base-and-desert-badlands', 'mount-rushmore', 'detroit-salt-mines'],
  },
  {
    id: 'wendigo-redwoods',
    date: { year: 1996, order: 210 },
    segment: 'E10',
    title: 'The Hulk humbles the Wendigo in a redwood forest',
    text: [
      "[Betty Ross](betty-ross) flies alone to Northern California, where a creature is stealing livestock, and Jefferson Whitedeer tells her the legend of Lone Eagle, a warrior whom a medicine man turned into the [Wendigo](wendigo) and whom only defeat can free. [Thaddeus Ross](thaddeus-ross) and [Gabriel Jones](gabe-jones) chain Bruce to Ross with gamma shackles; the [Hulk](hulk) saves Ross, and the two find common ground in their love for Betty. The Hulk beats the Wendigo, and Lone Eagle's humbled spirit is set free.",
    ],
    cast: ['doc-samson', 'glenn-talbot'],
    locations: ['redwood-national-forest'],
    deaths: ['wendigo'],
  },
  {
    id: 'hulk-banner-separated',
    date: { year: 1996, order: 220 },
    segment: 'E11–E13',
    title: 'The Nutrient Bath splits Banner from the Hulk, and a grey Hulk is born',
    text: [
      "After months of work, [Betty Ross](betty-ross) and [Doc Samson](doc-samson) finish the Nutrient Bath, and with [Rick Jones](rick-jones) and the Outcasts they bring the Hulk into Gamma Base, where the bath splits [Bruce Banner](hulk) from the Hulk. [Gabriel Jones](gabe-jones) takes the mindless Hulk away for S.H.I.E.L.D. to dispose of, under a deal between Nick Fury and the Pentagon that Ross never knew of, but the Hulk wakes and breaks loose.",
      "[Ogress](ogress) and her Gamma Warriors capture the Hulk, and the [Gargoyle](gargoyle) moves the mind of [the Leader](the-leader-samuel-sterns) into the Hulk's body; the Leader-Hulk attacks Gamma Base for Bruce, but the Hulk's instincts take over, and Betty calms him before he blows up the gamma reactor. Back in his own body the Leader escapes, and Bruce takes a prototype exo-armor to face the Hulk himself.",
      "Bruce and the Hulk are dying apart, and Betty decides to marry Bruce that same day, but her father, [Thaddeus Ross](thaddeus-ross), stops the wedding at gunpoint, and [Glenn Talbot](glenn-talbot) refuses to follow him. When Samson starts to merge them again, Ross sabotages the machine and throws Rick into the vat: Rick runs off as a Hulk-like creature, and Bruce turns into a different, grey Hulk.",
    ],
    locations: ['gamma-base-and-desert-badlands', 'banner-desert-lab', 'outcasts-cave'],
  },
]);
