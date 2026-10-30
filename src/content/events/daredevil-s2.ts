// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('daredevil-s2', [
  {
    id: 'elektra-leaves-murdock',
    date: { year: 2005, order: 20 },
    title: 'Elektra leaves Matt Murdock when he refuses to kill',
    text: [
      "[Matt Murdock](daredevil) met [Elektra Natchios](elektra), the bored daughter of a wealthy Greek ambassador. The two bonded over their shared thrill-seeking nature and skills. When Natchios manipulated Murdock into confronting his father's killer, hoping to have Murdock kill him, Murdock refused to do so, and Natchios left.",
    ],
  },
  {
    id: 'murdock-punisher-hand',
    date: { year: 2015, order: 70 },
    title: 'Matt Murdock clashes with the Punisher and the Hand',
    text: [
      `Following the downfall some of New York mafias, various gangs attempt to take control of Hell's Kitchen. When a group of Irish are gunned down by an apparent "army", the sole survivor seeks out the firm of *Nelson and Murdock* for protection and **Karen Page**. [Matt Murdock](daredevil), as his secret vigilante persona Daredevil, investigates the cartels, who he learns had all of their high-power weapons stolen by a single man. He confronts the new vigilante in the rooftops near the hospital, and is shot in the head at point blank range. Nicknamed "[The Punisher](the-punisher)" by the DA's office. Daredevil wakes up as the Punisher's captive, and pleads with him to stop killing. The Punisher insists that what he does is necessary. Page begins investigating the Punisher herself. She learns that he is [Frank Castle](the-punisher), once a husband and father who was hospitalized with a bullet in his head. Castle tells Daredevil about his family, who were murdered, before allowing himself to be arrested.`,
      "[Elektra](elektra) returns to New York asking for Murdock's help with the Japanese arm of the Roxxon Energy Corporation. Murdock and Natchios defeat some of the Yakuza who are up to something big in New York they find a **big hole in the middle if the city.** They save **Stick** who says Elektra has been working for him since day one to recruit him to fight a war for *the Chaste* against *The Hand* (The Yakuza). Murdock and Page convince **Nelson** that they should be helping Castle themselves, to protect him from the DA but they fail. Castle enters prison, and is led by a guard to a meeting with **Fisk**. He offers Castle to kill the prison warlord allowing Fisk to take control of the prison. '**The Blacksmith** ' may be responsible for the murder of Castle's family. Fisk, after betraying Castle, arranges for Castle to escape the prison.",
      "Daredevil found several children being used as human incubators for a mix of chemicals and takes them to nurse **Claire Temple** to receive hospital treatment. Castle saves Page from an attack from The Blacksmith. Daredevil saves Temple from the Hand. Some of the Hand died during the fight, and an attempted autopsy on one of them shows the **scars of a prior autopsy**. The hospital board chooses to cover this up, compelling Temple to quit. **Nobu** is alive reveals that Elektra's killer instincts are because she is the [Black Sky](elektra), a **mythical weapon worshiped by the Hand**.",
      "Nelson joins the law firm of **Jeri Hogarth**. [Elektra](elektra) sacrifices herself to save Murdock, and he defeats the rest of the Hand with help of Castle. Stick returns to finish off **Nobu**. He arranges a meeting with Page, and reveals to her that he is Daredevil. The Hand later exhume Natchios' body, and place her in the **ancient device.**",
    ],
    deaths: [
      { character: 'elektra', presumed: true },
      { name: 'Nobu', presumed: false },
    ],
  },
]);
