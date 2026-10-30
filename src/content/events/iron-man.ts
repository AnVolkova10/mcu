// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-man', [
  {
    id: 'stark-becomes-iron-man',
    date: { year: 2008 },
    title: 'Tony Stark escapes captivity and becomes Iron Man',
    text: [
      `[Tony Stark](tony-stark), who has inherited the defense contractor *Stark Industries* from his father Howard Stark, is in war-torn Afghanistan with his friend and military liaison, Lieutenant Colonel [James Rhodes](war-machine), to demonstrate the new "Jericho" missile. After the demonstration, the convoy is ambushed and Stark is critically wounded by a missile used by the attackers: one of his company's own. He is captured by a terrorist group called the *Ten Rings*. **Yinsen**, a fellow captive doctor, implants an **electromagnet** into Stark's chest to keep the shrapnel shards that wounded him from reaching his heart and killing him. Stark and Yinsen secretly build a small, powerful electric generator called an **arc reactor** to power Stark's electromagnet and a **prototype suit of powered armor** to aid in their escape. **Yinsen** sacrifices himself to divert them while the suit powers up. The armored Stark battles his way out.`,
      `After being rescued by Rhodes, Stark returns home (**Jarvis** is his robotic assitant) and announces that his company will **cease manufacturing weapons**. **Obadiah Stane**, his father's old partner and the company's manager, advises Stark that this may ruin Stark Industries and his father's legacy. In his home workshop, Stark builds in secret a **sleeker, more powerful version of his improvised armor suit** as well as a **more powerful arc reactor**. Personal assistant **Pepper Potts** places the original reactor inside a small glass showcase. **Happy** is his "bodyguard". At a charity event held by Stark Industries, reporter **Christine Everhart** informs Stark that his company's weapons were **double-selling** to the Ten Rings. Potts meets with Agent [Phil Coulson](coulson) of *S.H.I.E.L.D.*, to inform him of Stane's activities.`,
      'Stane ambushes Stark at his home and steals the arc reactor from his chest and also exterminates the *Ten Rings*. The last fight carries Stark and Stane to the top of the Stark Industries building, and Stark instructs Potts to overload the **large arc reactor** powering the building killing him. The next day, at a press conference, Stark defies suggestions from S.H.I.E.L.D. and publicly admits to being ["Iron Man"](tony-stark).',
      '[Nick Fury](fury) visits Stark at home and explains that he wants to discuss the *"Avenger Initiative".*',
    ],
    deaths: [
      { name: 'Yinsen', presumed: false },
      { name: 'Ten Rings', presumed: false },
    ],
  },
]);
