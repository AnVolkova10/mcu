// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-fist-s1', [
  {
    id: 'danny-rand-kun-lun',
    date: { year: 1991, order: 20 },
    title: "Monks raise crash survivor Danny Rand in K'un-Lun",
    text: [
      "When [Danny Rand](iron-fist) was a child, he and his parents were in a plane crash near the Himalayan mountains. As the lone survivor, he was rescued by Buddhist monks and raised in *K'un-Lun*, a mystical city in a realm different than Earth.",
    ],
  },
  {
    id: 'danny-rand-regains-company',
    date: { year: 2016, order: 40 },
    title: 'Danny Rand regains his company and fights the Hand',
    text: [
      "For over 15 years, [Danny Rand](iron-fist) trained to become a warrior monk and, after passing a deadly test, was chosen to become the next in a long line of Iron Fists. The Iron Fist is the sworn protector of K'un-Lun and the destroyer of *The Hand*.",
      "Danny leaves K'un-Lun in search for revenge and returns to New York to claim his rightful place at his family's company, *Rand Enterprises*. Since he was presumed dead for all those years, he is met with nothing but hostility. His former childhood friends, **Joy and Ward Meachum** — fear that he wants to take over their company; Ward tries to have Danny killed, while Joy orchestrates his committal to a mental hospital. He seeks help from [Colleen Wing](colleen-wing), a young martial arts instructor and **Claire Temple** (Colleen student). Danny uses **the power of the Iron Fist (a glowing all-powerful hand and unmatched fighting skills)** to escape the hospital and flee to Colleen's dojo. With the help of **Jeri Hogarth** he is able to prove his identity and reclaim his rightful position within the company.",
      "Meanwhile, the Meachum patriarch, **Harold** , is busy pulling strings behind the scenes at the company. Danny and Colleen had developed a relationship and fallen in love, so he is distraught when he learns of her deceit: she was affiliated with *The Hand* (having been covertly indoctrinated) but decides to follow Danny, they manage to escape The Hand camp with the help of **Davos**, his best friend from K'un-Lun, he's extremely jealous that Danny was granted the power; he's also upset that Danny abandoned K'un-Lun and left it unprotected. In a final battle, **Harold** is killed and Ward finds the evidence they need to clear Danny and Colleen of the DEA's allegations. Harold is cremated, Ward takes over Rand Enterprises, and Danny and Colleen venture to K'un-Lun to learn more about the Iron Fist. However, when they arrive, they find that the city has vanished without a trace. As for Joy and Davos, they have teamed up and are in France concocting a plan to take down Danny — a plan that an escaped **Madame Gao** is eavesdropping on and will undoubtedly use for her own evil gain.",
    ],
    deaths: [
      { name: 'Harold', presumed: false },
    ],
  },
]);
