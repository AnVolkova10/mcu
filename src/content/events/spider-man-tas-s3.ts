// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s3', [
  {
    id: 'doctor-strange-mordo-dormammu',
    date: { year: 1996, order: 10 },
    segment: 'E1–E3, E5–E9, E12',
    title: 'Spider-Man meets Doctor Strange, Madame Web and Daredevil',
    text: [
      'With [Doctor Strange](doctor-strange), [Spider-Man](spider-man) keeps [Baron Mordo](baron-mordo), whose cult had caught [Mary Jane Watson](mary-jane-watson), from freeing [Dormammu](dormammu) from the Dark Dimension. [Madame Web](madame-web) tells him he is about to start training for an ultimate battle, and the faith of a young fan, [Taina](taina), brings him back when [Doctor Octopus](doctor-octopus) brainwashes him into a partner.',
      'Spider-Man and [Rocket Racer](rocket-racer) stop the [Big Wheel](big-wheel); [Daredevil](daredevil) helps clear Peter of treason when [Richard Fisk](richard-fisk) frames him, and tells Spider-Man that Wilson Fisk is [the Kingpin](wilson-fisk-kingpin); and [Alistair Smythe](alistair-smythe), turned into a cyborg for the Kingpin, learns that his father, [Spencer Smythe](spencer-smythe), is alive in cryogenic suspension.',
      '[Tombstone](tombstone-noir) tries to drag the son of [Robbie Robertson](robbie-robertson-noir) into crime, and [Jonathan Ohnn](the-spot), sucked into his own portal, comes back as the Spot, whose portals swallow parts of New York until he closes the last one from inside limbo.',
    ],
    cast: ['wong', 'may-parker', 'harry-osborn', 'j-jonah-jameson', 'anastasia-hardy', 'felicia-hardy', 'hobgoblin', 'chameleon', 'terri-lee', 'herbert-landon', 'norman-osborn', 'alisa-silvermane', 'tony-stark', 'curt-connors-lizard'],
    locations: ['sanctum-sanctorum', 'center-for-reunification', 'the-dark-dimension', 'hardy-foundation-research-center', 'daily-bugle-headquarters', 'chrysler-building', 'new-york-supreme-court-and-fisk-tower', 'matt-murdock-apartment', 'aunt-mays-house', 'fisk-tronics-building', 'oscorp-industries', 'spaulding-chemical-plant', 'coney-island', 'statue-of-liberty', 'interdimensional-limbo'],
  },
  {
    id: 'norman-osborn-green-goblin',
    date: { year: 1996, order: 20 },
    segment: 'E4',
    title: 'A gas explosion turns Norman Osborn into the Green Goblin',
    text: [
      "Pressed by [the Kingpin](wilson-fisk-kingpin) to make a chemical weapon, [Norman Osborn](norman-osborn) is caught in an explosion at Oscorp and given up for dead; two weeks later a goblin starts kidnapping the members of Oscorp's board. In his underwater fortress [Spider-Man](spider-man) unmasks him: Norman, made strong by the gas, now the Green Goblin.",
    ],
    cast: ['j-jonah-jameson', 'anastasia-hardy', 'harry-osborn', 'mary-jane-watson', 'felicia-hardy', 'terri-lee'],
    locations: ['oscorp-industries'],
  },
  {
    id: 'eddie-brock-seals-carnage',
    date: { year: 1996, order: 45 },
    segment: 'E10–E11',
    title: 'Venom returns, and Carnage drains New York for Dormammu',
    text: [
      "[Baron Mordo](baron-mordo) brings the Venom symbiote back from space for [Dormammu](dormammu) and returns it to [Eddie Brock](eddie-brock-venom), and its offspring bonds with [Cletus Kasady](cletus-kasady-carnage), who becomes Carnage and drains the life force of many New Yorkers to free Dormammu. Venom joins [Spider-Man](spider-man) and [Iron Man](tony-stark), the life force returns to its owners, and Venom drags Carnage through the portal into Dormammu's realm before it closes.",
    ],
    cast: ['terri-lee', 'ashley-kafka', 'war-machine', 'madame-web', 'curt-connors-lizard', 'j-jonah-jameson', 'mary-jane-watson', 'may-parker', 'robbie-robertson-noir'],
    locations: ['central-park', 'ravencroft', 'stark-enterprise-nyc-labs-and-george-washington-bridge', 'aunt-mays-house', 'daily-bugle-headquarters', 'empire-state-university-and-daily-bugle', 'the-dark-dimension'],
  },
  {
    id: 'mary-jane-time-dilator',
    date: { year: 1996, order: 55 },
    segment: 'E13–E14',
    title: 'The Goblin unmasks Spider-Man, and Mary Jane falls into limbo',
    text: [
      "The Green Goblin, the second self of [Norman Osborn](norman-osborn), learns that Spider-Man is [Peter Parker](spider-man), while [Jason Phillips](hobgoblin) is exposed as the Hobgoblin and arrested. On the George Washington Bridge the Goblin's falling portal machine drops [Mary Jane Watson](mary-jane-watson) into limbo, a last portal swallows Norman, and [Madame Web](madame-web) refuses to bring them back: \"The woman I love is gone. Gone. Forever.\"",
    ],
    cast: ['wilson-fisk-kingpin', 'felicia-hardy', 'harry-osborn', 'herbert-landon', 'j-jonah-jameson', 'flash-thompson', 'may-parker'],
    locations: ['chrysler-building', 'oscorp-industries', 'osborn-mansion', 'george-washington-bridge-and-manhattan-skyline', 'aunt-mays-house', 'interdimensional-limbo'],
  },
]);
