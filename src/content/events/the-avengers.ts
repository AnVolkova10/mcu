// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('the-avengers', [
  {
    id: 'avengers-repel-chitauri',
    date: { year: 2012, order: 10 },
    title: "The Avengers repel Loki's Chitauri invasion",
    text: [
      '[Loki](loki) encounters **the Other**, leader of the *Chitauri*. In exchange for the Tesseract, the Other promises Loki an army. [Nick Fury](fury), director of *S.H.I.E.L.D.*, and his lieutenant [Agent Maria Hill](maria-hill) arrive at a remote research facility during an evacuation, where physicist **Dr. Erik Selvig** is experimenting on the [Tesseract](stone:space), [Clint Barton](hawkeye) watches from above. [Phil Coulson](coulson) says that the object has ==begun radiating an unusual form of energy==. The Tesseract ==suddenly activates== and opens a wormhole, allowing Loki to reach Earth. He ==takes the Tesseract== and uses his **scepter** to enslave **Selvig** and **Clint Barton**.',
      `Fury reactivates the =="Avengers Initiative"==. Agent [Natasha Romanoff](black-widow) heads to Kolkata to recruit [Dr. Bruce Banner](hulk) to trace the Tesseract through its **gamma radiation emissions**. Coulson visits [Tony Stark](tony-stark) to have him check Selvig's research, and Fury approaches [Steve Rogers](steve-rogers) with an assignment to retrieve the Tesseract. In Stuttgart, Barton steals **iridium needed to stabilize the Tesseract's power** while Loki causes a distraction, leading to a brief confrontation with Rogers, Stark, and Romanoff that ends with **Loki's surrender**. While Loki gets escorted to S.H.I.E.L.D., [Thor](thor), arrives and frees him, hoping to convince him to abandon his plan and return to Asgard, he agrees to take Loki to S.H.I.E.L.D.'s **the Helicarrier**.`,
      "Upon arrival, Loki gets imprisoned while Banner and Stark attempt to locate the Tesseract. The Avengers become divided, both over how to approach Loki and the revelation that S.H.I.E.L.D. **plans to harness the Tesseract to develop weapons as a deterrent against hostile extraterrestrials.** As the group argues, Barton and Loki's other possessed agents attack the Helicarrier, disabling one of its engines in flight and causing Banner to transform into [the Hulk](hulk). Romanoff reluctantly fights [Barton](hawkeye), and **knocks him unconscious, breaking Loki's mind control.** Loki escapes after killing [Coulson](coulson) and ejecting Thor from the airship, while the Hulk falls to the ground after attacking a fighter jet. Fury **uses Coulson's death to motivate** the Avengers into working as a team.",
      "Loki uses the ==Tesseract, and a wormhole generator== Selvig built, to open a wormhole above Stark Tower to the **Chitauri fleet** in space, launching his invasion. Rogers, Stark, Romanoff, Barton, and Thor rally in defense of New York City. Banner arrives and transforms into the Hulk, and together the Avengers battle the Chitauri while evacuating civilians. The Hulk **beats Loki into submission**. Romanoff makes her way to the generator, where **Selvig**, freed from Loki's mind control, reveals that Loki's scepter can shut down the generator. Meanwhile, Fury's superiors from the *World Security Council* attempt to end the invasion by **launching a nuclear missile.** Stark **intercepts the missile and takes it through the wormhole** toward the Chitauri fleet. The **missile detonates, destroying the Chitauri mothership and disabling their forces** on Earth. Stark's suit loses power, and he falls back through the wormhole just as Romanoff ==closes it.==",
      'In the aftermath, Thor ==returns Loki and the== [Tesseract](stone:space)==to Asgard==, while Fury expresses confidence that the Avengers will return if needed. The Other confers with his master(**Thanos**) about the failed attack on Earth.',
    ],
    deaths: [
      { character: 'coulson', presumed: true },
    ],
    stones: ['space'],
  },
]);
