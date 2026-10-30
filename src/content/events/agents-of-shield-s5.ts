// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agents-of-shield-s5', [
  {
    id: 'daisy-thwarts-talbot',
    date: { year: 2017, order: 130 },
    title: 'Daisy thwarts Talbot and saves the world',
    segment: 'E11–E22',
    text: [
      "[Phil Coulson](coulson): dying because of the deal with Ghost Rider is burning the kree blood inside him. He doesn't take the antidote and gives it to Daisy to save the world. Presumably dies in the real Tahiti with May. , [Melinda May](may): kissed with Phil, they went to Tahiti to enjoy his lasts days. , [Daisy](skye): saves the world, a fucking badasss , **Leo Fitz**: dies in the process. BUT he is alive somewhere in space because they broke the temporal loop. , **Jemma Simmons**: got married with Fitz , **Mack**: New director of SHIELD , **Elena**: killed Ruby to stop the end of the world but got worse , **Enoch**: died saving the team but also is alive with Fitz",
      '**Recovery Missions:**Gravitonium and saves the world from a catastrophic quake.',
      "**Enemies:** **Talbot**: turns bad when gets into the hydra chamber full of gravitonium but Daisy stops him from exploding Earth , **Ruby**: Hale's and Hydra artificial daughter dies dissapointly sad , **Hale**: Hydra's last general Talbot kills her , **The Confederacy**: tells the team that [Thanos](thanos) is coming to Earth.",
      '**Secondary appearances:** **Hunter**: helps Fitz in Earth.',
      '**Places:** *The Lighthouse*: SHIELD new HQ.',
    ],
    deaths: [
      { character: 'coulson', presumed: true },
      { name: 'Leo Fitz', presumed: true },
      { name: 'Enoch', presumed: true },
      { name: 'Talbot', presumed: false },
      { name: 'Ruby', presumed: false },
      { name: 'Hale', presumed: false },
    ],
  },
  {
    id: 'coulson-team-escapes-kasius',
    date: { year: 2091 },
    title: "Coulson's team escapes Kasius and returns to the past",
    segment: 'E1–E10',
    branch: 'shattered-earth-2091',
    text: [
      '[Phil Coulson](coulson): Teleported to the future to save humanity but they get trapped in a temporal loop , [Melinda May](may): suffers a wound when teleporting , [Daisy](skye): "The Destroyer of Worlds" they think she destroyed it. Captured, Kasius wants to sell her to the best bidder, her powers are blocked , **Leo Fitz**: he traveled to this year in cryogenic stasis to save the team. He dressed himself as a Marauder , **Jemma Simmons**: enslaved by Kasius. Saved by Fitz, asks Him to marry her , **Mack**: In love with Elena , **Elena**: She meets herself from the future, her hands are amputated. She warns her not to save Phil, but to save the world , **Enoch**: an "anthropologist" chronicom. Takes the team to the future and travels with Fitz to the future.',
      "**Recovery Missions:** Daisy's powers and the Monolith to the past.",
      '**Enemies:** **Kasius**: a Kree overlord who runs The Lighthouse and enslaved the last remnants of the human race. , **Sinara**: Kasius second hand and lover.',
      '**Secondary appearances:** **Deke**: a mercenary that turns to help the team **Flint**: an inhuman boy that can move and model stone, constructed the Monolith for the team.',
      '**Places:** *The Lighthouse*: the last bastion of the destroyed Earth. Gets destroyed when the team gets back to the past.',
    ],
    deaths: [
      { name: 'Kasius', presumed: false },
      { name: 'Sinara', presumed: false },
      { name: 'The Lighthouse', presumed: false },
    ],
  },
]);
