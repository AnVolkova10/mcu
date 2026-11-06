// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s1', [
  {
    id: 'spider-man-rogues-gallery',
    date: { year: 1994, order: 360 },
    segment: 'E1–E7, E11–E13',
    title: "Spider-Man's first villains strike, and Peter meets Mary Jane",
    text: [
      '[Spider-Man](spider-man) cures [Curt Connors](curt-connors-lizard), turned into the Lizard by his own Neogenic Recombinator, and beats the [Scorpion](scorpion-mac-gargan), a private eye whom [J. Jonah Jameson](j-jonah-jameson) had mutated to catch him. The Spider-Slayer of [Spencer Smythe](spencer-smythe), paid for by [Norman Osborn](norman-osborn) to keep Oscorp from [the Kingpin](wilson-fisk-kingpin), ends with Spencer gone in a blast at Oscorp, and his son [Alistair Smythe](alistair-smythe) starts building Slayers for the Kingpin.',
      '[Doctor Octopus](doctor-octopus) kidnaps [Felicia Hardy](felicia-hardy) and Jameson for ransom, [Mysterio](mysterio-quentin-beck) frames Spider-Man for a museum robbery, [Kraven](kraven-the-hunter) hunts Dr. [Mariah Crawford](mariah-crawford), and the [Chameleon](chameleon) tries to stop a peace treaty at the United Nations, until Spider-Man exposes him to S.H.I.E.L.D.',
      'The [Hobgoblin](hobgoblin), hired by Osborn to kill the Kingpin, kidnaps [Harry Osborn](harry-osborn) and tries to become the new Kingpin of Crime, until Spider-Man frees Harry. And the blind date that [Aunt May](may-parker) sets up for Peter turns out to be [Mary Jane Watson](mary-jane-watson): "Face it, Tiger... you just hit the jackpot!"',
    ],
    cast: ['eddie-brock-venom', 'robbie-robertson-noir', 'farley-stillwell', 'flash-thompson', 'anastasia-hardy', 'terri-lee', 'fury'],
    locations: ['forest-hills-sewers', 'daily-bugle-headquarters', 'aunt-mays-house', 'empire-state-university-and-daily-bugle', 'connors-home', 'oscorp-industries', 'chrysler-building', 'jameson-penthouse', 'manhattan-bridge-and-our-lady-of-saints-church-bell-tower', 'hardy-estate', 'abandoned-rocket-plant', 'metropolitan-museum', 'brooklyn-bridge', 'wonder-studios', 'central-park-zoo', 'harry-osborn-apartment', 'helicarrier-over-new-york-harbor', 'united-nations-headquarters'],
  },
  {
    id: 'alien-symbiote-venom',
    date: { year: 1994, order: 430 },
    segment: 'E8–E10',
    title: 'The alien suit bonds with Peter, then turns Eddie Brock into Venom',
    text: [
      'An alien ooze comes back from space with the astronaut [John Jameson](john-jameson) and bonds with [Peter Parker](spider-man) as a black suit that makes him stronger and angrier; [Curt Connors](curt-connors-lizard) finds that it is a living symbiote that in time replaces its host. The sound of a church bell tears it off Peter, and it slides down to [Eddie Brock](eddie-brock-venom), who becomes Venom and knows that Spider-Man is Peter Parker.',
      'Venom hangs Spider-Man unmasked from a building and charms [Mary Jane Watson](mary-jane-watson) and [Aunt May](may-parker) as Eddie, until the noise of a shuttle launch strips the symbiote off him and Spider-Man sends it into space on the John Jameson Probe.',
    ],
    cast: ['rhino', 'wilson-fisk-kingpin', 'j-jonah-jameson', 'shocker', 'alistair-smythe', 'robbie-robertson-noir', 'felicia-hardy', 'flash-thompson'],
    locations: ['prometheum-x-asteroid', 'george-washington-bridge-and-manhattan-skyline', 'daily-bugle-headquarters', 'chrysler-building', 'aunt-mays-house', 'empire-state-university-and-daily-bugle', 'old-church', 'launch-site'],
  },
]);
