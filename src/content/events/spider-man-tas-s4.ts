// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s4', [
  {
    id: 'robbie-framed',
    date: { year: 1996, order: 131 },
    segment: 'E1, E4, E6–E7, E11',
    title: 'Robbie is framed, Kraven returns, and Blade hunts his vampire mother',
    text: [
      'Still grieving for Mary Jane, [Spider-Man](spider-man) and a sleuthing [J. Jonah Jameson](j-jonah-jameson) clear [Robbie Robertson](robbie-robertson-noir), framed by [the Kingpin](wilson-fisk-kingpin) at the request of his son, [Richard Fisk](richard-fisk). [Kraven](kraven-the-hunter) returns for [Mariah Crawford](mariah-crawford), turned feral by a virus and by his serum, and leaves with her, the two now kindred spirits.',
      '[Michael Morbius](michael-morbius) wakes from hibernation and feeds again, and [Blade](blade-eric-brooks) chases the vampire [Miriam](miriam), who he has learned is his mother, to New York and back to Europe. The Kingpin gives [Hobie Brown](prowler-hobie-brown) a stealth suit to become the Prowler, but Hobie teams up with Spider-Man to break free of him and gives up crime.',
    ],
    cast: ['tombstone-noir', 'herbert-landon', 'may-parker', 'harry-osborn', 'felicia-hardy', 'flash-thompson', 'curt-connors-lizard', 'anastasia-hardy', 'shocker', 'terri-lee', 'mary-jane-clone'],
    locations: ['daily-bugle-headquarters', 'new-york-supreme-court-and-fisk-tower', 'chrysler-building', 'rookers-island', 'aunt-mays-house', 'hardy-foundation-research-center', 'central-park-zoo', 'connors-home', 'harry-osborn-apartment', 'jamaica-bay-cave', 'empire-state-university-and-daily-bugle', 'miriam-castle'],
  },
  {
    id: 'black-cat-spider-man',
    date: { year: 1996, order: 132 },
    segment: 'E2–E3, E5',
    title: "Felicia Hardy becomes the Black Cat, and Spider-Man's partner",
    text: [
      '[The Kingpin](wilson-fisk-kingpin) kidnaps [John Hardesky](john-hardesky), the father of [Felicia Hardy](felicia-hardy), who as a boy memorized the formula that created Captain America, and uses the recreated serum to turn Felicia into the Black Cat. She helps [Spider-Man](spider-man) and her father escape, and Hardesky erases the formula.',
      'After a fight in which the baby [Silvermane](silvermane-noir) swaps ages with the [Vulture](adrian-toomes) and ends up old, Spider-Man asks the Black Cat to be his partner.',
    ],
    cast: ['doctor-octopus', 'anastasia-hardy', 'fury', 'chameleon', 'herbert-landon', 'j-jonah-jameson', 'alistair-smythe', 'alisa-silvermane', 'scorpion-mac-gargan', 'spencer-smythe', 'curt-connors-lizard', 'harry-osborn'],
    locations: ['hardy-estate', 'daily-bugle-headquarters', 'chrysler-building', 'phalanx-assimilation-spire-and-muir-island', 'helicarrier-over-new-york-harbor', 'jameson-penthouse', 'empire-state-university-and-daily-bugle', 'toomes-aerodynamics'],
  },
  {
    id: 'harry-green-goblin',
    date: { year: 1996, order: 136 },
    segment: 'E8–E10',
    title: 'Harry becomes the Goblin, Mary Jane returns, and Peter proposes',
    text: [
      "Led by his father's voice from limbo, [Harry Osborn](harry-osborn) becomes the second Green Goblin to avenge him on [Spider-Man](spider-man), until he collapses and is taken to Ravencroft. Then [Mary Jane](mary-jane-clone) mysteriously reappears, and after [Mysterio](mysterio-quentin-beck) haunts her new film, Peter takes off his mask for her.",
      'Peter asks her to marry him, and [Curt Connors](curt-connors-lizard) turns into the Lizard King of the sewers, until Mary Jane, Margaret Connors and Debra Whitman turn him and his lizards back with a genetic bomb.',
    ],
    cast: ['norman-osborn', 'the-punisher', 'may-parker', 'miranda-wilson', 'j-jonah-jameson', 'robbie-robertson-noir', 'flash-thompson'],
    locations: ['harry-osborn-apartment', 'osborn-mansion', 'oscorp-industries', 'interdimensional-limbo', 'wonder-studios', 'rookers-island', 'connors-home', 'forest-hills-sewers'],
  },
]);
