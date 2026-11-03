// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-apocalypse', [
  {
    id: 'en-sabah-nur-entombed',
    date: { year: -3600, order: 20 },
    title: 'Rebels collapse the pyramid and entomb En Sabah Nur',
    text: [
      'In ancient Egypt, the old [En Sabah Nur](en-sabah-nur-apocalypse) moves into the body of a younger mutant who can heal himself, inside a pyramid that runs on sunlight. Followers who have turned against him bring the pyramid down during the ritual. His Four Horsemen die defending him, and he is left alive but asleep under the ruins.',
    ],
    locations: ['old-cairo-bazaars-and-underground-tomb'],
  },
  {
    id: 'en-sabah-nur-horsemen',
    date: { year: 1983, order: 20 },
    title: 'En Sabah Nur awakens and gathers his Four Horsemen',
    text: [
      'In Cairo, CIA agent [Moira MacTaggert](moira-mactaggert) watches a cult wake [En Sabah Nur](en-sabah-nur-apocalypse) in the ruins of his pyramid. He saves the young thief [Ororo Munroe](storm-ororo-munroe) from the men she robbed, learns from her television what the world has become, and makes her stronger as the first of his new Horsemen.',
      'In East Berlin, [Mystique](raven-darkholme) pulls [Kurt Wagner](nightcrawler-kurt-wagner) out of a cage fight against [Angel](archangel-warren-worthington), and the mutant broker Caliban tells her about Erik. En Sabah Nur takes Caliban\'s assistant, [Psylocke](psylocke-betsy-braddock), and gives the wounded Angel wings of metal.',
      'In Pruszków, Poland, [Erik Lehnsherr](erik-lehnsherr) lives under another name with his wife Magda and his daughter Nina, until he saves a coworker with his powers. When the police come for him, Nina\'s power over animals startles an officer, whose arrow kills her and Magda. Erik kills the officers; at the steel mill, En Sabah Nur buries his coworkers in the floor and takes him to Auschwitz, where Erik tears the camp down and joins him.',
    ],
    locations: ['old-cairo-bazaars-and-underground-tomb', 'underground-mutant-fight-club', 'forest-cottage-and-steel-foundry', 'auschwitz-birkenau-concentration-camp'],
    deaths: [{ name: 'Magda' }, { name: 'Nina Lehnsherr' }],
  },
  {
    id: 'apocalypse-abducts-xavier',
    date: { year: 1983, order: 30 },
    title: 'Apocalypse abducts Xavier as the mansion explodes',
    text: [
      '[Alex Summers](alex-summers) brings his brother [Scott](cyclops-scott-summers), whose eyes have just blasted his school bathroom, to [Charles Xavier](charles-xavier) and [Hank McCoy](hank-mccoy), and Scott meets [Jean Grey](jean-grey). [Mystique](raven-darkholme) arrives with [Kurt Wagner](nightcrawler-kurt-wagner) and the news about Erik. When Charles uses [Cerebro](object:cerebro) to reach him, [En Sabah Nur](en-sabah-nur-apocalypse) takes over the machine and, through Charles, makes the world\'s powers fire their nuclear missiles into space.',
      'En Sabah Nur and his Horsemen take Charles from the mansion. Alex fires at them and sets off an explosion that destroys the house; [Peter Maximoff](quicksilver-peter-maximoff), who has come looking for Erik, his father, gets everyone out except Alex. Then Colonel [William Stryker](william-stryker) takes Hank, Mystique, Peter and [Moira MacTaggert](moira-mactaggert) away.',
    ],
    locations: ['xaviers-school-for-gifted-youngsters'],
    cast: ['erik-lehnsherr', 'storm-ororo-munroe', 'psylocke-betsy-braddock', 'archangel-warren-worthington', 'jubilee-jubilation-lee'],
    deaths: ['alex-summers'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }],
  },
  {
    id: 'jean-unleashes-weapon-x',
    date: { year: 1983, order: 40 },
    title: 'Jean Grey unleashes Weapon X at Alkali Lake',
    text: [
      '[Jean Grey](jean-grey), [Scott Summers](cyclops-scott-summers) and [Kurt Wagner](nightcrawler-kurt-wagner) follow Stryker to his base at Alkali Lake. Jean frees Weapon X: [Logan](logan-wolverine), his skeleton already bonded with [Adamantium](object:adamantium) and his mind under Stryker\'s control, who kills the soldiers. Jean gives him back part of his memories before he runs off into the snow. They free [Hank McCoy](hank-mccoy), [Mystique](raven-darkholme), [Peter Maximoff](quicksilver-peter-maximoff) and [Moira MacTaggert](moira-mactaggert), take flight suits from the base and fly to Cairo.',
    ],
    locations: ['alkali-lake-weapon-x-facility'],
    cast: ['william-stryker'],
  },
  {
    id: 'phoenix-incinerates-apocalypse',
    date: { year: 1983, order: 50 },
    title: 'Jean Grey destroys En Sabah Nur in Cairo',
    text: [
      "In Cairo, [En Sabah Nur](en-sabah-nur-apocalypse) prepares to move into the body of [Charles Xavier](charles-xavier) to reach every mind on Earth, while [Erik Lehnsherr](erik-lehnsherr) bends the planet's magnetic field and wrecks cities around the world. The young X-Men arrive. [Kurt Wagner](nightcrawler-kurt-wagner) pulls Charles out, though Charles loses his hair, and [Angel](archangel-warren-worthington) dies when the plane he attacks crashes, while [Psylocke](psylocke-betsy-braddock) escapes.",
      "[Mystique](raven-darkholme) and [Peter Maximoff](quicksilver-peter-maximoff) bring Erik back, and [Ororo Munroe](storm-ororo-munroe) turns on her master. While Charles fights En Sabah Nur inside his mind, he asks [Jean Grey](jean-grey) to let go of all her power, and she burns En Sabah Nur to nothing.",
      'Charles gives [Moira MacTaggert](moira-mactaggert) her memories back. Erik and Jean rebuild the school, and Erik leaves again without Peter telling him that he is his son. [Hank McCoy](hank-mccoy) and Mystique train the new X-Men, [Scott Summers](cyclops-scott-summers), Jean, Ororo, Kurt and Peter, against confiscated [Sentinels](object:sentinels).',
    ],
    locations: ['apocalypses-grand-pyramid-and-metropolitan-cairo-ruins', 'xaviers-school-for-gifted-youngsters'],
    deaths: ['en-sabah-nur-apocalypse', 'archangel-warren-worthington'],
    objects: [{ id: 'sentinels', at: ['xaviers-school-for-gifted-youngsters'] }],
  },
  {
    id: 'essex-corp-wolverine-blood',
    date: { year: 1983, order: 60 },
    title: "Essex Corp takes the blood of Weapon X from Alkali Lake",
    text: [
      'At the abandoned base at Alkali Lake, a team in suits gathers the research of Stryker and a vial of the blood of Weapon X, and packs them into a briefcase of the Essex Corporation.',
    ],
    locations: ['alkali-lake-weapon-x-facility'],
  },
]);
