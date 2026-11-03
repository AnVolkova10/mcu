// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-dark-phoenix', [
  {
    id: 'jean-grey-car-crash',
    date: { year: 1975 },
    title: "Jean Grey's powers cause a fatal car crash",
    text: [
      'On a car trip, eight-year-old [Jean Grey](jean-grey) loses control of her powers and causes a crash that kills her mother. [Charles Xavier](charles-xavier) takes her to his school, promises to teach her to control her gift and blocks the memory of the crash in her mind. He also keeps from her that her father survived and gave her up.',
    ],
    locations: ['upstate-rural-highway-and-county-hospital'],
    deaths: [{ name: 'Elaine Grey' }],
  },
  {
    id: 'jean-absorbs-cosmic-entity',
    date: { year: 1992, order: 20 },
    title: 'Jean absorbs a cosmic force during the Endeavour rescue',
    text: [
      'The President asks [Charles Xavier](charles-xavier) for help when a wave of energy like a solar flare damages the shuttle *Endeavour*. The X-Men fly out under [Raven Darkhölme](raven-darkholme): [Hank McCoy](hank-mccoy), [Scott Summers](cyclops-scott-summers), [Ororo Munroe](storm-ororo-munroe), [Kurt Wagner](nightcrawler-kurt-wagner), [Peter Maximoff](quicksilver-peter-maximoff) and [Jean Grey](jean-grey). They save the crew, but the energy strikes Jean and she absorbs it.',
      'Back at the mansion the X-Men are celebrated, and Jean finds her powers harder to control. Raven, angry that Charles risks their lives for applause, tells him that the women are always saving the men and he might want to call them X-Women.',
    ],
    locations: ['low-earth-orbit-and-exosphere-space', 'xaviers-school-for-gifted-youngsters'],
  },
  {
    id: 'mystique-death-red-hook',
    date: { year: 1992, order: 30 },
    title: "Jean's telekinetic blast kills Mystique in Red Hook",
    text: [
      "The energy breaks the blocks Charles put in Jean's mind. She learns that her father, John Grey, is alive and goes to her childhood home in Red Hook, where he admits he gave her up after the crash. The X-Men arrive, and in the fight [Peter Maximoff](quicksilver-peter-maximoff) is hurt. [Charles Xavier](charles-xavier) freezes everyone so [Raven](raven-darkholme) can talk to [Jean](jean-grey), but Jean, out of control, throws her onto broken wood and kills her :'(.",
      "Jean flees to Genosha, the island refuge of [Erik Lehnsherr](erik-lehnsherr), and asks him for help, but when army helicopters come for her she attacks them and Erik sends her away. [Vuk](vuk-dbari), the leader of the shape-shifting D'Bari, who has just killed Jean's father, finds her and tells her that the force inside her destroyed the D'Bari world.",
    ],
    cast: ['hank-mccoy', 'cyclops-scott-summers', 'storm-ororo-munroe', 'nightcrawler-kurt-wagner'],
    locations: ['childhood-home-of-jean-grey', 'genosha-island-mutant-sanctuary'],
    deaths: ['raven-darkholme', { name: 'John Grey' }],
  },
  {
    id: 'jean-destroys-vuk',
    date: { year: 1992, order: 40 },
    title: 'Jean destroys Vuk and becomes a phoenix of fire',
    text: [
      "Blaming Charles for Raven's death, [Hank McCoy](hank-mccoy) joins [Erik Lehnsherr](erik-lehnsherr) and two of his mutants, Selene Gallio and Ariki, to kill Jean in New York. [Kurt Wagner](nightcrawler-kurt-wagner) brings the X-Men to stop them, and the two sides fight in the street outside the building where [Vuk](vuk-dbari) keeps [Jean Grey](jean-grey). Charles reaches Jean by showing her his memories; she is about to give the force to Vuk until [Scott Summers](cyclops-scott-summers) stops her, and soldiers take every mutant away while Vuk escapes.",
      'On the prison train the D\'Bari attack. The X-Men, Hank and Erik fight them together, and Selene and Ariki die. Jean wakes, saves them from the wreck, destroys the D\'Bari and carries Vuk into space, where she kills her and turns into a phoenix of fire.',
      'The mansion becomes the Jean Grey School for Gifted Youngsters, with Hank in charge. In a café in Paris, [Charles Xavier](charles-xavier) is joined by Erik, who asks him to play chess, while a phoenix of fire crosses the sky.',
    ],
    cast: ['storm-ororo-munroe'],
    locations: ['manhattan-brownstone-district', 'mcu-armored-prisoner-train-route', 'low-earth-orbit-and-exosphere-space', 'xaviers-school-for-gifted-youngsters', 'cafe-de-la-paix'],
    deaths: ['vuk-dbari', { name: 'Selene Gallio' }, { name: 'Ariki' }],
  },
]);
