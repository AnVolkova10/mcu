// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('jessica-jones-s1', [
  {
    id: 'jessica-kills-reva',
    date: { year: 2014, order: 40 },
    title: 'Jessica Jones kills Reva and breaks free of Kilgrave',
    text: [
      '[Jessica Jones](jessica-jones) kills **Reva** and escapes the control of **Kilgrave** who got hit by a bus.',
    ],
    deaths: [
      { name: 'Reva', presumed: false },
    ],
  },
  {
    id: 'jessica-snaps-kilgrave',
    date: { year: 2015, order: 20 },
    title: "Jessica Jones snaps Kilgrave's neck",
    text: [
      "[Jessica Jones](jessica-jones), an alcoholic private investigator gifted **(experiment) with superhuman strength**. Waking up after a car accident as the sole surviving member of her family and being adopted by the Walkers. **Jeri Hogarth** shark-lawyer, who is having an affair with her assistant **Pam** behind the back of her wife **Dr. Wendy Ross-Hogarth**. [Luke Cage](luke-cage), a bar owner gifted (experiment) with **unbreakable skin**. **Kilgrave**, gifted (experiment) with **mind control abilities** who once controlled Jones, leaving her with PTSD. Kilgrave's abilities are a virus that he releases, and that a vaccine could be created from Jones's blood as Jones appears to have become immune to Kilgrave's influence. Thompson has been using the fetal remains that Hogarth kept, and believes that a full dose of his extracted drug could now make Kilgrave powerful enough to control Jones (it didn't). **Trish Walker** foster-sister, kid star and has her own radio show. **Will Simpson** police sergeant ex-special operations skills and contacts, including access to a hermetically sealed room in which Kilgrave could be kept once the effects of the anesthetic wear off. **Malcolm** is her neighbor. **Dr. Kozlov** from a secret organization *IGH*, a company that also paid for Jones's medical bills after her childhood car accident, and potentially played a part in her gaining abilities. He gives Simpson some **pills, and his injuries heal miraculously. that enhance combat performance and numb pain.** **Claire Temple** a nurse who has previous experience treating gifted individuals—agrees to look after Cage.",
      "Jones snaps **Kilgrave**'s neck. Jones is arrested for the murder, but Hogarth secures her release, leaving her to get calls from people around the city who have heard of her heroics and seek her assistance.",
    ],
    deaths: [
      { name: 'Dr. Wendy Ross-Hogarth', presumed: false },
      { name: 'Kilgrave', presumed: false },
    ],
  },
]);
