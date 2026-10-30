// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('the-incredible-hulk', [
  {
    id: 'bruce-banner-gamma-exposure',
    date: { year: 2005, order: 10 },
    title: 'Gamma exposure turns Bruce Banner into the Hulk',
    text: [
      'At Culver University in Virginia, **General Thaddeus "Thunderbolt" Ross** meets with [Dr. Bruce Banner](hulk), the colleague and boyfriend of his daughter **Betty**, regarding an experiment that Ross claims is meant to make humans **immune to gamma radiation.** The experiment **—part of a World War II-era "super-soldier"—fails**. The exposure to gamma radiation causes Banner to **transform** into [the Hulk](hulk) for brief periods of time, whenever his **heart rate rises above 200 beats per minute**. The Hulk destroys the lab and surrounding area, killing several people inside and injuring the General and Betty. Banner becomes a fugitive from the *U.S. military* and Ross, who **wants to weaponize** the Hulk.',
    ],
  },
  {
    id: 'hulk-overpowers-abomination',
    date: { year: 2010, order: 50 },
    title: 'Hulk overpowers the Abomination',
    text: [
      `[Banner](hulk) works at a bottling factory in Brazil, while **searching for a cure**. He anonymously collaborates with a colleague known only as **"Mr. Blue."** He is learning Yoga techniques to help keep control. **General Ross** sends a special forces team, led by **Emil Blonsky**, to capture him. Banner transforms into the Hulk and defeats Blonsky's team. Blonsky agrees to be **injected** with a small amount of a similar serum of Banner, which gives him **enhanced speed, strength, agility, and healing** and begins to **deform his skeleton and impairs his judgment**.`,
      `Banner returns to Culver University and reunites with **Betty**. He is attacked a second time by Ross and Blonsky's forces. Banner contacts Mr. Blue, who urges them to meet him in New York City. He is a cellular biologist named **Dr. Samuel Sterns**, who tells Banner he has developed a possible antidote.. After a **successful test**, he warns Banner that the antidote may only reverse each transformation. Sterns reveals he has **synthesized Banner's blood samples**, into a large supply, to apply its **"limitless potential"**. Banner wishes to destroy the blood supply. A recovered Blonsky joins Ross' forces for a third attempt to take Banner into custody. They succeed, and Banner and Betty are taken away in a helicopter. Blonsky stays behind and orders **Sterns** to inject him with Banner's blood. The experiment mutates Blonsky into **the Abomination**. Banner convinces Ross to release him. The Hulk defeats the Abomination by nearly strangling him to death with a chain.`,
      'A month later, he begins to **transform in a controlled manner** with a slight smirk.',
    ],
    deaths: [
      { name: 'Sterns', presumed: false },
    ],
  },
]);
