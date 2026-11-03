// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-origins-wolverine', [
  {
    id: 'james-howlett-claws',
    date: { year: 1845 },
    title: "James Howlett's claws emerge as he kills Thomas Logan",
    text: [
      "In the Northwest Territories in 1845, the groundskeeper Thomas Logan shoots John Howlett. Bone claws come out of the hands of John's sick son, [James Howlett](logan-wolverine), and he kills Thomas, who tells him with his last breath that he is his real father. Rejected by his mother, James runs away with Thomas's other son, [Victor Creed](victor-creed), who promises they will stick together no matter what.",
    ],
    locations: ['howlett-estate-and-northwest-wilderness'],
    deaths: [{ name: 'John Howlett' }, { name: 'Thomas Logan' }],
  },
  {
    id: 'logan-victor-union-army',
    date: { year: 1861, end: 1865 },
    title: 'Logan and Victor Creed fight for the Union',
    text: [
      '[James Howlett](logan-wolverine) and [Victor Creed](victor-creed), who no longer age, fight for the Union in the American Civil War. Their healing lets them walk away from the wounds that kill the men around them.',
    ],
    locations: ['american-civil-war-battlefield'],
  },
  {
    id: 'logan-victor-western-front',
    date: { year: 1917, end: 1918, order: 20 },
    title: 'Logan and Victor Creed fight on the Western Front',
    text: [
      'In the First World War, [Logan](logan-wolverine) and [Victor Creed](victor-creed) charge across the trenches of the Western Front with the American infantry and survive the shelling.',
    ],
    locations: ['western-front-allied-trenches'],
  },
  {
    id: 'logan-victor-omaha-beach',
    date: { year: 1944, order: 20 },
    title: 'Logan and Victor Creed land in Normandy on D-Day',
    text: [
      'On D-Day, [Logan](logan-wolverine) and [Victor Creed](victor-creed) land on a Normandy beach with the American troops and charge through the German fire.',
    ],
    locations: ['normandy-invasion-beachhead'],
  },
  {
    id: 'stryker-recruits-team-x',
    date: { year: 1973, order: 20 },
    title: 'Stryker recruits Logan and Victor into Team X',
    text: [
      'In Vietnam, [Victor Creed](victor-creed) attacks a village woman and kills the officer who tries to stop him, and [Logan](logan-wolverine) fights at his side. Both are sentenced to death and survive the firing squad. In their cell, Major [William Stryker](william-stryker) offers them a way out: a team of mutants under his command, Team X.',
    ],
    locations: ['military-stockade-and-da-nang-outpost'],
  },
  {
    id: 'logan-team-x-lagos',
    date: { year: 1973, order: 30 },
    title: 'Logan walks away from Team X in Nigeria',
    branch: 'fox-original',
    text: [
      'Team X flies to Lagos: [Logan](logan-wolverine), [Victor Creed](victor-creed), [Agent Zero](agent-zero), [Wade Wilson](wade-wilson), [John Wraith](john-wraith), [Fred Dukes](fred-dukes) and Chris Bradley, under [William Stryker](william-stryker). They storm the office of a diamond trafficker to take a meteorite, from which Stryker will later make [Adamantium](object:adamantium). In the village where it fell, Stryker orders the villagers killed when they will not say where it came from, and Logan leaves the team for good.',
    ],
    locations: ['lagos-warlord-compound-and-adamantium-extraction-site', 'meteorite-village'],
  },
  {
    id: 'creed-stages-kayla-death',
    date: { year: 1979, order: 10 },
    title: "Victor Creed stages Kayla's death to bait Logan",
    branch: 'fox-original',
    text: [
      'Six years later, [Logan](logan-wolverine) works as a lumberjack in the Canadian Rockies and lives with the teacher [Kayla Silverfox](kayla-silverfox). [Victor Creed](victor-creed) kills Chris Bradley at a carnival in Springfield, Ohio, and [William Stryker](william-stryker) and [Agent Zero](agent-zero) come to warn Logan that someone is killing Team X. Logan finds Kayla covered in blood in the woods, goes after Victor and loses to him in a bar, where Victor breaks his bone claws.',
    ],
    locations: ['canadian-rockies-homestead', 'springfield-ohio-carnival'],
    deaths: [{ name: 'Chris Bradley' }],
  },
  {
    id: 'logan-adamantium-skeleton',
    date: { year: 1979, order: 20 },
    title: 'Logan gets an Adamantium skeleton and kills Agent Zero',
    branch: 'fox-original',
    text: [
      "To beat Victor, [Logan](logan-wolverine) accepts the offer of [William Stryker](william-stryker) and asks for new dog tags that say \"Wolverine\", after a story Kayla told him. In the Weapon X procedure at Alkali Lake, before General Munson and other officers, [Adamantium](object:adamantium) is bonded to his whole skeleton. When he hears Stryker order his memory erased, he breaks out and runs.",
      'An old couple, Travis and Heather Hudson, take him in at their farm. The next morning [Agent Zero](agent-zero) kills them, and Logan brings down his helicopter and kills him.',
    ],
    locations: ['alkali-lake-weapon-x-facility', 'hudson-farm'],
    deaths: ['agent-zero', { name: 'Travis Hudson' }, { name: 'Heather Hudson' }],
  },
  {
    id: 'logan-hunts-the-island',
    date: { year: 1979, order: 30 },
    title: "Logan searches for Stryker's island",
    branch: 'fox-original',
    text: [
      'In Las Vegas, [Logan](logan-wolverine) finds [John Wraith](john-wraith) and an overweight [Fred Dukes](fred-dukes) at a boxing gym. Dukes tells him that Victor still works for Stryker, hunting mutants for his experiments on "the Island", and that only Remy LeBeau ever escaped from it. Meanwhile [Victor Creed](victor-creed) takes the teenager [Scott Summers](cyclops-scott-summers) from his school.',
      'In New Orleans, Logan finds [Gambit](gambit-remy-lebeau), who takes him for an enemy, while Victor kills Wraith outside and takes his blood. Gambit agrees to fly Logan to the Island.',
    ],
    locations: ['las-vegas-underground-boxing-gym', 'french-quarter-underground-poker-club'],
    deaths: ['john-wraith'],
  },
  {
    id: 'weapon-xi-logan-amnesia',
    date: { year: 1979, order: 40 },
    title: 'Logan beheads Weapon XI and loses his memory',
    branch: 'fox-original',
    text: [
      'The Island is Three Mile Island. There [William Stryker](william-stryker) kills General Munson, who wants to shut his program down. [Logan](logan-wolverine) learns that [Kayla Silverfox](kayla-silverfox) is alive and that her death was staged: she watched him for Stryker to save her sister Emma, whose skin turns to diamond. Stryker also refuses [Victor Creed](victor-creed) the Adamantium he promised him.',
      'Logan frees the captive mutants. Kayla, wounded, sends them on with [Scott Summers](cyclops-scott-summers), who leads them out to [Charles Xavier](charles-xavier) and the offer of a home. Stryker sets Weapon XI on Logan: [Wade Wilson](wade-wilson), with the powers of the mutants he captured. Logan and Victor fight him together on top of a cooling tower and cut off his head, and the tower falls.',
      'Stryker shoots Logan in the head with [Adamantium](object:adamantium) bullets. Kayla, dying, touches Stryker and orders him to walk until his feet bleed. Logan wakes up with no memory and leaves on his own. Later, his shoes in shreds, Stryker is detained for questioning about the death of Munson.',
    ],
    locations: ['three-mile-island-nuclear-facility-and-weapon-xi-laboratory'],
    cast: ['gambit-remy-lebeau'],
    deaths: ['kayla-silverfox', { name: 'General Munson' }],
  },
]);
