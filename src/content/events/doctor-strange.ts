// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('doctor-strange', [
  {
    id: 'kaecilius-steals-pages',
    date: { year: 2014, order: 10 },
    title: 'Kaecilius steals mystical pages from Kamar-Taj',
    text: [
      'In Kathmandu, the sorcerer **Kaecilius** and his zealots, enter the secret compound *Kamar-Taj* and steal a few pages from an ancient, mystical text belonging to **the Ancient One**, a long-lived sorcerer who has taught every student at Kamar-Taj, including Kaecilius, in the mystic arts. The Ancient One pursues the traitors, but Kaecilius and his followers escape.',
    ],
  },
  {
    id: 'strange-dormammu-time-loop',
    date: { year: 2017, order: 100 },
    title: 'Stephen Strange traps Dormammu in a time loop',
    text: [
      'In New York City, [Dr. Stephen Strange](doctor-strange), a wealthy, acclaimed, and arrogant neurosurgeon, severely injures his hands in a car crash, leaving him permanently unable to operate. Fellow surgeon **Christine Palmer** tries to help him move on, but Strange vainly pursues experimental surgeries to heal his hands. Strange learns about Jonathan Pangborn, a paraplegic who mysteriously regained use of his legs. Pangborn directs Strange to *Kamar-Taj*, where he is taken in by **Mordo**, a sorcerer under **The Ancient One**. The Ancient One demonstrates her power to Strange, revealing the ==Astral plane== and other dimensions such as the ==Mirror Dimension==. She reluctantly agrees to train Strange, whose arrogance and ambition remind her of **Kaecilius**.',
      "Strange studies under the Ancient One and Mordo, and from ancient books in the library that is now guarded by **Master Wong**. Strange learns that **Earth is protected from threats from other dimensions by a shield generated from three buildings called *Sanctums, in New York City, London, and Hong Kong*, which are all directly accessible from Kamar-Taj**. The sorcerers' task is to protect the Sanctums. Strange progresses quickly, and secretly reads the text from which Kaecilius stole pages, learning to bend time with the mystical [Eye of Agamotto](stone:time). Mordo and Wong warn Strange against breaking the laws of nature, drawing a comparison to Kaecilius' desire for eternal life.",
      "Kaecilius uses the stolen pages to contact **Dormammu** of the ==Dark Dimension==, **where time is non-existent**. Kaecilius destroys the London Sanctum to weaken Earth's protection. The zealots then attack the New York Sanctum, killing its guardian, but Strange holds them off with the help of the **Cloak of Levitation**, only to be critically injured during a skirmish. He teleports himself back to the hospital where Palmer saves him. Upon returning to the Sanctum, Strange reveals to Mordo that the Ancient One has been drawing power from the Dark Dimension to sustain her long life, and Mordo becomes disillusioned with the Ancient One. After a fight in the Mirror Dimension of New York, Kaecilius mortally wounds **the Ancient One** and escapes to Hong Kong. Before dying, she tells Strange that he too will have to bend the rules to complement Mordo's steadfast nature in order to defeat Kaecilius. Strange and Mordo arrive in Hong Kong to find **Wong** dead, the Sanctum destroyed, and the Dark Dimension engulfing Earth. Strange uses [the Eye](stone:time) to reverse time and save **Wong**, then enters the Dark Dimension and creates a time loop around himself and Dormammu. After repeatedly killing Strange to no avail, **Dormammu finally gives in to Strange's demand that he permanently leave Earth alone and take Kaecilius and his zealots with him** in return for Strange breaking the loop.",
      "Disillusioned by Strange and the Ancient One defying nature's laws, Mordo renounces his sorcerer career and departs. Strange returns [the Eye](stone:time) to Kamar-Taj and takes up residence in the New York Sanctum to continue his studies with Wong who says that the Eye is an infinity stone.",
      'Strange decides to help [Thor](thor), who has brought his brother [Loki](loki) to Earth to search for their father, Odin. **Mordo** confronts Pangborn and steals the mystical energy he uses to walk, telling him that Earth has "too many sorcerers".',
    ],
    deaths: [
      { name: 'the Ancient One', presumed: false },
      { name: 'Wong', presumed: true },
    ],
    stones: ['time'],
  },
]);
