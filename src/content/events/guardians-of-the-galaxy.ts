// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('guardians-of-the-galaxy', [
  {
    id: 'ravagers-abduct-peter-quill',
    date: { year: 1988 },
    title: "Yondu's Ravagers abduct young Peter Quill from Earth",
    text: [
      "Following his mother's death, **Meredith** a young [Peter Quill](star-lord) is abducted from Earth by a group of alien thieves and smugglers called *the Ravagers* led by **Yondu Udonta**.",
    ],
    deaths: [
      { name: 'Meredith', presumed: false },
    ],
  },
  {
    id: 'quill-vaporizes-ronan',
    date: { year: 2014, order: 80 },
    title: 'Quill and allies vaporize Ronan with the Power Stone',
    text: [
      'On the abandoned planet Morag, [Peter Quill](star-lord) steals a ==mysterious orb==, but is attacked by **Korath**, of the fanatical Kree renegade, **Ronan the Accuser**. Although Quill escapes with the orb, **Yondu** (his boss) discovers his theft and issues a bounty for his capture, while Ronan sends the assassin [Gamora](gamora) after the orb.',
      "When Quill attempts to sell the orb on Xandar, capital of the Nova Empire, Gamora ambushes him and steals it. A fight ensues, drawing in a pair of bounty hunters: the genetically and cybernetically modified raccoon [Rocket](rocket), and the tree-like humanoid [Groot](groot). Nova Corps officers capture the four, detaining them in the Kyln prison. An inmate there, [Drax the Destroyer](drax), attempts to kill Gamora due to her association with the powerful intergalactic warlord, **Thanos**, and Ronan, who killed his family. Quill convinces Drax that Gamora can bring Ronan to him, though Gamora reveals that she has betrayed Ronan, unwilling to let him use the orb's power. Learning that Gamora intends to sell the orb to **the Collector Taneleer Tivan**, Quill, Rocket, Groot, and Drax work with her to escape the Kyln in Quill's ship, **the Milano.**",
      "Tivan opens the orb, revealing [the Power Stone](stone:power), an item of **immeasurable power that destroys all but the most powerful beings who wield it.** Tivan's slave Carina grabs the Stone, triggering an explosion that engulfs Tivan's archive. Ronan arrives and easily defeats Drax, while the others flee by ship, pursued by Ronan's followers and Gamora's adoptive sister **Nebula**. Nebula destroys Gamora's ship, leaving her floating in space, and Ronan's fighters capture the orb.",
      "Yondu arrives and retrieves the pair. Quill negotiates a truce, promising the orb to Yondu. On Ronan's flagship, the Dark Aster, Ronan ==embeds the Stone in his warhammer, taking its power for himself.== He contacts Thanos, threatening to kill him after first destroying Xandar; hateful of her adoptive father, Nebula allies with Ronan. The Ravagers and Quill's group join with the Nova Corps to confront the Dark Aster at Xandar, with Quill's group breaching the Dark Aster with the Milano. Ronan uses his empowered warhammer to destroy the Nova Corps fleet. Drax kills **Korath** and Gamora defeats Nebula, who escapes, Rocket crashes a Ravager ship through the Dark Aster. Damaged, crash-lands on Xandar, with [Groot](groot) sacrificing himself to shield the group. Ronan emerges from the wreck and Drax and Rocket to destroy ==Ronan's warhammer==. Quill grabs the freed [Power Stone](stone:power), and with Gamora, Drax, and Rocket sharing its burden, uses it to vaporize **Ronan**.",
      "In the aftermath, Quill tricks Yondu and gives the real [Stone](stone:power) to the *Nova Corps*. As the Ravagers leave Xandar, Yondu remarks that it turned out well that ==they did not deliver Quill to his father per their contract==. Quill's group, now known as **the Guardians of the Galaxy**, has their criminal records expunged, and Quill learns that ==he is only half-human==, his father being part of an ancient, unknown species. Quill finally opens the last present he received from his mother, a cassette tape filled with her favorite songs. [Groot](groot) grows into a baby version of him.",
      '**Tivan, the Collector** sits in his destroyed archive with two of his living exhibits: **a canine cosmonaut and an anthropomorphic duck.**',
    ],
    deaths: [
      { name: 'Korath', presumed: false },
      { character: 'groot', presumed: true },
      { name: 'Ronan', presumed: false },
      'korath',
    ],
    stones: ['power'],
  },
]);
