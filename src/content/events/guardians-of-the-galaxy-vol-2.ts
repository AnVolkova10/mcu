// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('guardians-of-the-galaxy-vol-2', [
  {
    id: 'ego-fathers-peter-quill',
    date: { year: 1980 },
    title: 'Ego fathers Peter Quill, a human-Celestial hybrid',
    text: [
      '[Peter Quill](star-lord) is born: an hybrid form of a human and a Celestial. He was one of the billons childs from his father, **Ego**.',
    ],
  },
  {
    id: 'quill-team-destroys-ego',
    date: { year: 2014, order: 90 },
    title: "Quill's team destroys Ego, his Celestial father",
    text: [
      "[Peter Quill](star-lord), [Gamora](gamora), [Drax](drax), [Rocket](rocket), and [Baby Groot](groot) are renowned as ==the Guardians of the Galaxy==. **Ayesha**, leader of *the Sovereign race*, has the Guardians protect valuable batteries in exchange for Gamora's estranged sister **Nebula**. After Rocket steals the batteries for himself, the Sovereign attacks the Guardians' ship with a fleet of drones. A **mysterious figure destroys the drones**, whom reveals to be Quill's father, **Ego**, and invites them to his home planet. Rocket and Groot remain behind to repair the ship and guard Nebula.",
      'Ayesha hires **Yondu Udonta**, who have been exiled from *the Ravager* community for child trafficking, to recapture the Guardians. They capture Rocket, but when Yondu hesitates to turn over Quill, whom he raised, his assistant **Kraglin Obfonteri** questions his objectivity, and his lieutenant **Taserface** leads a mutiny with help from Nebula. Nebula leaves to find and kill Gamora, whom she blames for the torture inflicted on her by their father, Thanos. While imprisoned, Rocket and **Yondu** bond. Groot and Kraglin, free Rocket and Yondu, and they destroy the ship and its crew as they escape, but **Taserface** warns the Sovereign before dying.',
      `Ego, a **god-like Celestial that manipulated the matter around** its consciousness to form this "home" planet, explains that he projected a humanoid guise to travel the universe and discover a purpose. Ego hired Yondu to collect the young Quill after **Meredith's** death, but the boy was never delivered, and Ego has been searching for him ever since. He teaches Quill **to manipulate the Celestial power.** Nebula arrives at Ego's planet and tries to kill Gamora, but the pair reach an uneasy alliance when they discover a **cavern filled with skeletal remains.** Ego reveals to Quill that in his travels, he planted seedlings on thousands of worlds that can terraform into new extensions of himself, but only the power of two Celestials can activate them. To that end, he impregnated countless women and hired Yondu to collect the children, but killed them all when they failed to access the Celestial power. Under Ego's influence, Quill helps him activate the seedlings, which **begin to consume every world**, but Quill fights back when Ego reveals that **he gave Meredith the tumor that killed her**. [Mantis](mantis), Ego's naïve empath servant, grows close to Drax and warns him of Ego's plan. The reunited Guardians find Ego's brain at the planet's core as they come under attack from the Sovereign's drones. Rocket makes a bomb using the stolen batteries, which Groot plants on the brain. Quill fights Ego with his newfound Celestial powers to distract him. **The bomb explodes**, killing **Ego** and disintegrating the planet. Quill **loses his Celestial powers** soon after Ego's death. **Yondu** sacrifices himself to save Quill and dies in the vacuum of space.`,
      "Quill then realizes that Yondu kept him to spare him from the fate of Ego's other progeny. Having reconciled with Gamora, [Nebula](nebula) still chooses to leave and resume her quest to kill Thanos by herself. The Guardians hold a funeral for Yondu, which Kraglin and dozens of Ravager ships attend, acknowledging Yondu's sacrifice and accepting him as a Ravager again. During the funeral, Gamora admits that she feels things for Peter too.",
      "**Kraglin** takes up Yondu's **telekinetic arrow and control-fin**. [Groot](groot) has grown into a teenager. **Ayesha** creates a new artificial being with whom she plans to destroy the Guardians, naming him **Adam**.",
    ],
    deaths: [
      { name: 'Taserface', presumed: false },
      { name: 'Ego', presumed: false },
      { name: 'Yondu', presumed: false },
      'ego',
    ],
  },
]);
