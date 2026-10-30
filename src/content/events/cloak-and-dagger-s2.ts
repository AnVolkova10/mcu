// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('cloak-and-dagger-s2', [
  {
    id: 'tyrone-tandy-defeat-andre',
    date: { year: 2016, order: 20 },
    title: 'Mayhem helps Tyrone and Tandy defeat Andre',
    text: [
      "[Tyrone](cloak) has this new ability that can open a portal to a dimension and wants to help the town like a hero. [Tandy](dagger) has this new power where she can make a big light sphere and make it explode. **Detective O'Reilly** divides in two; the evil angry twin **Mayhem** is born she wants the kind of justice The Punisher wants. She also knew **Ben Urich** from New York. Tyrone also reads an articule about Luke, written by Karen Page.",
      'Tandy, Tyrone and Mayhem defeated a villan named **Andre** a musician who went underwater when the Rig exploded all those years ago gaining super powers; absorbing hopes, making his victims numb and in pain to become a god. . When Tyrone names is cleared and his brother murderer is dead, he and Tandy leave the city, hand in hand looking for a lead about some missing girls.',
    ],
    deaths: [
      { name: 'Ben Urich', presumed: false },
      { name: 'Andre', presumed: false },
    ],
  },
]);
