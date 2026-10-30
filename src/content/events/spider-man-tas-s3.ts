// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s3', [
  {
    id: 'norman-osborn-green-goblin',
    date: { year: 1996, order: 10 },
    title: 'Norman Osborn emerges as the Green Goblin',
    text: [
      "When Mary Jane Watson is hypnotized by an arcane cult led by Baron Mordo seeking to liberate dark entity Dormammu, [Spider-Man](spider-man) joins forces with Master of the Mystic Arts [Doctor Stephen Strange](doctor-strange) and Wong at the Sanctum Sanctorum, banishing Dormammu back into the Dark Dimension. Meanwhile, Norman Osborn's chemical inhalation in Oscorp's lab fractures his mind, awakening the malevolent persona of the [Green Goblin](norman-osborn). Flying on his glider with an arsenal of pumpkin bombs, Osborn terrorizes Oscorp shareholders before targeting Spider-Man's personal life.",
    ],
    cast: ['norman-osborn'],
    locations: ['sanctum-sanctorum-and-oscorp-labs'],
  },
  {
    id: 'murdock-defends-peter-parker',
    date: { year: 1996, order: 20 },
    title: 'Matt Murdock defends a framed Peter Parker in court',
    text: [
      "Framed for high treason and industrial espionage by Richard Fisk, Peter Parker is arrested and placed on federal trial in Manhattan. Blind defense attorney [Matt Murdock](daredevil) takes Peter's case, sensing his innocence through his heightened auditory heartbeat radar. By night, Murdock dons his horned mask as [Daredevil](daredevil), teaming up with Spider-Man to raid Fisk's heavily fortified high-tech warehouse. Together, the Man Without Fear and the Wall-Crawler expose Wilson Fisk, the [Kingpin](wilson-fisk-kingpin), clearing Peter's name in court.",
    ],
    cast: ['spider-man', 'wilson-fisk-kingpin'],
    locations: ['new-york-supreme-court-and-fisk-tower'],
  },
  {
    id: 'eddie-brock-seals-carnage',
    date: { year: 1996, order: 30 },
    title: 'Eddie Brock seals himself away with Carnage',
    text: [
      "Baron Mordo and Dormammu orchestrate the return of the Venom symbiote, which reproduces an unstable crimson offspring that bonds with psychotic felon [Cletus Kasady](cletus-kasady-carnage), spawning [Carnage](cletus-kasady-carnage). In response, [Iron Man](tony-stark) in his Modular Armor and [War Machine](war-machine) arrive in Manhattan to assist Spider-Man. Eddie Brock, horrified by Carnage's bloodlust, turns against Kasady. Iron Man, War Machine, and Spider-Man deploy high-energy sonic disruptors, while Brock tackles Carnage into an extradimensional portal, sacrificing himself to seal the symbiotes away. Shortly after, the Green Goblin discovers Spider-Man's identity, causing Mary Jane Watson to plummet into a dimensional abyss during a battle on the George Washington Bridge.",
    ],
    cast: ['spider-man', 'eddie-brock-venom', 'norman-osborn'],
    locations: [
      'stark-enterprise-nyc-labs-and-george-washington-bridge',
    ],
  },
  {
    id: 'mary-jane-time-dilator',
    date: { year: 1996, order: 60 },
    title: 'Mary Jane vanishes into the Time Dilator vortex',
    text: [
      "Armed with knowledge of Spider-Man's secret identity, an unhinged [Norman Osborn (Green Goblin)](norman-osborn) terrorizes Peter Parker's loved ones, abducting [Mary Jane Watson](mary-jane-watson) to the summit of the George Washington Bridge. Brandishing the experimental Stark/Neogenic Time Dilator portal device, the Goblin engages [Spider-Man](spider-man) in a desperate aerial duel above the East River.",
      "During the crossfire, the Time Dilator triggers an uncontrollable interdimensional singularity. Mary Jane loses her footing and plunges over the bridge suspension cables into the swirling vortex, vanishing into trans-dimensional limbo before Peter's webbing can reach her. Enraged and brokenhearted, Spider-Man damages the Goblin's glider engine, causing Osborn to be suctioned through the unstable rift himself before the singularity collapses. Haunted by the catastrophic loss of his soulmate, Peter vows to scour all dimensions of reality to bring Mary Jane back.",
    ],
    locations: [
      'george-washington-bridge-and-manhattan-skyline',
    ],
    deaths: [
      {
        character: 'mary-jane-watson',
        presumed: true,
        note: 'Lost in Interdimensional Vortex',
      },
      {
        character: 'norman-osborn',
        presumed: true,
        note: 'Banished to Dimensional Limbo',
      },
    ],
  },
]);
