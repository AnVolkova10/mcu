// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('inhumans-s1', [
  {
    id: 'inhuman-refugees-attilan',
    date: { year: -2984, label: '5,000 years ago', order: 20 },
    title: 'Inhuman refugees establish Attilan on the Moon',
    text: [
      'Fleeing persecution, a group of Inhumans founded a secret settlement on the Moon, which later became known as the city of Attilan.',
    ],
    locations: ['kree-early-human-genetic-laboratory'],
  },
  {
    id: 'black-bolt-maximus-moon',
    date: { year: 2016, order: 100 },
    title: 'Black Bolt abandons Maximus on the Moon',
    text: [
      "Attilan is ruled by *the Inhuman Royal Family*, at the top of which are King **Black Bolt** and Queen **Medusa**. Other members of the Royal Family include Black Bolt's brother **Maximus**, who actually lost all opportunity of displaying superpowers after his Terrigenesis, Medusa's sister **Crystal**, and Black Bolt's cousins **Karnak, Triton and Gorgon.**",
      "Maximus intends to overthrow his brother and tries to rally the population of Attilan by promising that he will lead them to Earth. The members of the Royal Family attempt to reunite, but face challenges of their own in the island of Hawaii. When Maximus forces is being defeated, the Inhuman Royal Family declare themselves ready to return to Attilan and confront him. However, Maximus reveals that he has enacted a failsafe which could lead to Attilan's destruction. Fearing such a fate, Black Bolt instructs Medusa and Crystal to arrange for the evacuation of the city to Earth.",
      "Black Bolt confronts his brother one last time, and is shocked when Maximus reveals that he has a share of responsibility in their parents' death. Black Bolt abandons **Maximus** on the Moon. The Royal Family then prepare to lead the population of Attilan on a new settlement on Earth, where the Inhumans originated.",
    ],
    deaths: [
      { name: 'Maximus', presumed: true },
    ],
  },
]);
