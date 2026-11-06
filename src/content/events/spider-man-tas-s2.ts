// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s2', [
  {
    id: 'insidious-six-formed',
    date: { year: 1995, order: 121 },
    segment: 'E1–E2',
    title: "The Kingpin forms the Insidious Six as Spider-Man's powers fail",
    text: [
      "The [Chameleon](chameleon) breaks five of Spider-Man's enemies out of prison, and with him they become the Insidious Six of [the Kingpin](wilson-fisk-kingpin), who uses them against the crime lord [Silvermane](silvermane-noir). [Spider-Man](spider-man)'s powers fail in the fight because, as [Curt Connors](curt-connors-lizard) finds, his DNA is still changing from the spider bite; he gets them back and saves Silvermane from the Kingpin, and the Six break up.",
    ],
    cast: ['doctor-octopus', 'mysterio-quentin-beck', 'scorpion-mac-gargan', 'shocker', 'rhino', 'michael-morbius', 'felicia-hardy', 'may-parker', 'hammerhead', 'alistair-smythe', 'mary-jane-watson'],
    locations: ['empire-state-university-and-daily-bugle', 'aunt-mays-house', 'chrysler-building'],
  },
  {
    id: 'hydro-man-evaporates',
    date: { year: 1995, order: 122 },
    segment: 'E3–E5, E9–E12',
    title: 'Spider-Man meets the X-Men and Blade, and Silvermane turns into a baby',
    text: [
      '[Hydro-Man](hydro-man), who once dated [Mary Jane Watson](mary-jane-watson), carries her off and evaporates on a rooftop far from any water. Afraid of turning into a monster, [Spider-Man](spider-man) seeks the help of [Charles Xavier](charles-xavier), who cannot cure him, and teams up with [Wolverine](logan-wolverine) to save [Beast](hank-mccoy) from [Herbert Landon](herbert-landon), who wants to test on him a serum that destroys mutants.',
      'The vampire hunter [Blade](blade-eric-brooks) comes for [Morbius](michael-morbius), who takes a Recombinator blast to shield [Felicia Hardy](felicia-hardy), which makes his change permanent, and goes into hibernation. [Silvermane](silvermane-noir) and [the Kingpin](wilson-fisk-kingpin) fight over the Tablet of Time, which makes Silvermane younger until he is a baby, and [Hammerhead](hammerhead) passes it on to [Adrian Toomes](adrian-toomes).',
    ],
    cast: ['jean-grey', 'hobgoblin', 'genevieve', 'cyclops-scott-summers', 'storm-ororo-munroe', 'rogue-anna-marie', 'gambit-remy-lebeau', 'jubilee-jubilation-lee', 'alistair-smythe', 'terri-lee', 'may-parker', 'harry-osborn', 'curt-connors-lizard', 'j-jonah-jameson', 'robbie-robertson-noir', 'tombstone-noir', 'vanessa-fisk', 'alisa-silvermane'],
    locations: ['coney-island', 'xaviers-school-for-gifted-youngsters', 'brand-corporation', 'chrysler-building', 'empire-state-university-and-daily-bugle', 'aunt-mays-house', 'daily-bugle-headquarters', 'jamaica-bay', 'connors-home', 'phalanx-assimilation-spire-and-muir-island'],
  },
  {
    id: 'man-spider-mutation',
    date: { year: 1995, order: 124 },
    segment: 'E6–E8',
    title: 'Morbius becomes a vampire, and Peter turns into the Man-Spider',
    text: [
      "[Michael Morbius](michael-morbius) takes the serum and blood sample from Peter's locker, thinking they are his entry for a contest, and, bitten by a bat at a Neogenic Recombinator, becomes a living vampire who drains people of plasma. Peter takes the serum himself, grows four extra arms and, hunted by [the Punisher](the-punisher), turns into the Man-Spider, a giant spider-like creature, until [Kraven](kraven-the-hunter) and the Punisher bring him down and the antidote of [Mariah Crawford](mariah-crawford) turns him back.",
    ],
    cast: ['spider-man', 'felicia-hardy', 'may-parker', 'mary-jane-watson', 'j-jonah-jameson', 'flash-thompson', 'robbie-robertson-noir', 'terri-lee', 'harry-osborn'],
    locations: ['hardy-foundation-research-center', 'empire-state-university-and-daily-bugle', 'aunt-mays-house', 'world-trade-center'],
  },
  {
    id: 'vulture-steals-peters-youth',
    date: { year: 1995, order: 127 },
    segment: 'E13–E14',
    title: "The Vulture drains Peter's youth, and Connors gives it back",
    text: [
      "With the Tablet's technology, the elderly inventor [Adrian Toomes](adrian-toomes) becomes the Vulture and drains the youth of others, [Spider-Man](spider-man)'s included, and with it Peter's mutation, which turns the Vulture into the Man-Spider. [Curt Connors](curt-connors-lizard) gives Peter back his youth and powers while the Vulture keeps the mutation, and [Farley Stillwell](farley-stillwell) blows up the building to destroy all neogenic research: Peter is cured.",
    ],
    cast: ['norman-osborn', 'scorpion-mac-gargan', 'flash-thompson', 'harry-osborn', 'may-parker', 'mary-jane-watson', 'j-jonah-jameson', 'robbie-robertson-noir'],
    locations: ['oscorp-industries', 'toomes-aerodynamics', 'aunt-mays-house'],
  },
]);
