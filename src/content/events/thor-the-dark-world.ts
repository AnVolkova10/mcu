// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('thor-the-dark-world', [
  {
    id: 'bor-defeats-malekith',
    date: { year: -1000000000, label: 'Eons ago' },
    title: 'Bor defeats Malekith and hides the Aether',
    text: [
      '**Bor**, father of Odin, clashes with the *Dark Elves*, **Malekith**, who seeks to unleash a weapon known as [the Aether](stone:reality) on the nine realms. They defeat him on their home world of Svartalfheim, Bor safeguards ==the Aether within a stone column==. Unknown to Bor, Malekith, his lieutenant **Algrim** and a handful of Dark Elves escape into suspended animation.',
    ],
    locations: [
      'convergence-nexus-and-svartalfheim-wastes',
    ],
    stones: ['reality'],
  },
  {
    id: 'thor-stops-malekith',
    date: { year: 2013, order: 20 },
    title: 'Thor stops Malekith from unleashing the Aether',
    text: [
      'In Asgard, [Loki](loki) stands imprisoned for his war crimes on Earth. Meanwhile, [Thor](thor), alongside warriors **Fandral, Volstagg,** and **Sif**, wins the final battle in a war to pacify the Nine Realms following the **reconstruction of the Bifröst**. They learn that **the Convergence**, a rare alignment of the Nine Realms, is imminent; as the event approaches, portals linking the worlds appear at random.',
      "In London, **Jane Foster** and her intern **Darcy Lewis** travel to an abandoned factory where such portals have appeared, Foster is teleported to another world, she absorbs [the Aether](stone:reality). **Heimdall** alerts Thor that Foster has moved beyond his near all-seeing vision, leading Thor to find Foster, she inadvertently releases an **unearthly force**, and Thor returns with her to Asgard. [Odin](odin), recognizing the Aether, warns that the Aether will not only kill Foster but that its return heralds a catastrophic prophecy. **Malekith**, awakened by the Aether's release, turns **Algrim** into a **Kursed** and attacks Asgard. During the battle, Malekith and Algrim search for Foster and Thor's mother **Frigga** is killed protecting Foster. **Lorelei** (enemy of the agents of S.H.I.E.L.D in 2013) escapes prison.",
      "Defying Odin, Thor enlists the help of Loki, who knows of a **secret portal** to Svartalfheim, where they will use Foster to lure and confront Malekith. Loki tricks Malekith into drawing the Aether out of Foster, but Thor's attempt to destroy the exposed substance fails. Malekith merges with the Aether and leaves in his ship as [Loki](loki) is fatally wounded while killing **Algrim**. Thor and Foster discover another portal and reunite in London with **Dr. Erik Selvig**—who was briefly institutionalized due to the mental trauma he suffered during Loki's attack on Earth. Malekith plans to restore the Dark Elves to dominance by unleashing the Aether at the center of the Convergence in Greenwich. Thor battles **Malekith** and wins.",
      "Thor returns to Asgard, where he declines [Odin](odin)'s offer to take the throne and tells Odin of Loki's sacrifice. As he leaves, Odin's form transforms into [Loki](loki), who is alive and impersonating Odin.",
      'Volstagg and Sif visit **the Collector** and entrust [the Aether](stone:reality) to his care, commenting that having two Infinity Stones so close together would be unwise. As they leave, the Collector states ==his desire to acquire the other five Stones.== Foster and Thor reunite on Earth.',
    ],
    deaths: [
      { name: 'Frigga', presumed: false },
      { character: 'loki', presumed: true },
      { name: 'Algrim', presumed: false },
      { name: 'Malekith', presumed: false },
      { character: 'odin', presumed: true },
    ],
    stones: ['reality'],
  },
]);
