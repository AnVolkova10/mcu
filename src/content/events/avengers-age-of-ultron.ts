// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('avengers-age-of-ultron', [
  {
    id: 'avengers-foil-ultron',
    date: { year: 2015, order: 40 },
    title: "The Avengers foil Ultron's extinction plan in Sokovia",
    text: [
      "In the Eastern European country of Sokovia, the Avengers: [Tony Stark](tony-stark), [Steve Rogers](steve-rogers), [Thor](thor), [Bruce Banner](hulk), [Natasha Romanoff](black-widow), [Clint Barton](hawkeye) and a Legion of 5? robots commanded by **J.A.R.V.I.S.** —raid a *Hydra facility* commanded by **Baron Wolfgang von Strucker**, who has experimented on humans using the scepter previously wielded by Loki. They meet two of Strucker's test subjects—twins [Pietro](pietro) (who has superhuman speed) and [Wanda Maximoff](scarlet-witch) (who has telepathic and telekinetic abilities)—and apprehend Strucker, while Stark retrieves ==Loki's scepter==.",
      `Stark and Banner discover an **artificial intelligence within the scepter's gem**, and secretly decide to use it to complete Stark's **"Ultron" global defense program**. The unexpectedly sentient **Ultron**, believing he must **eradicate humanity to save Earth**, eliminates Stark's A.I. **J.A.R.V.I.S.** and attacks the Avengers at their headquarters. Escaping with the scepter, Ultron uses the resources in Strucker's Sokovia base to upgrade his rudimentary body and build an army of robot drones. Having killed **Strucker**, he recruits the Maximoffs, who hold Stark responsible for their parents' deaths by his company's weapons, and goes to get **vibranium**.`,
      "A worldwide backlash over the resulting destruction, and the fears **Wanda's hallucinations incited**, send the team into hiding at Barton's farmhouse. Thor departs to consult with **Dr. Erik Selvig** on the apocalyptic future he saw in his hallucination, while [Nick Fury](fury) arrives and encourages the team to form a plan to stop Ultron. Ultron uses Loki's scepter to enslave the team's friend **Helen Cho**. They use her **synthetic-tissue technology, vibranium, and the scepter's gem to craft a new body**. As Ultron uploads himself into the body, Wanda is able to read his mind; discovering his plan for human extinction, **the Maximoffs turn against Ultron**. Rogers, Romanoff, and Barton fight Ultron and retrieve the synthetic body, but Ultron captures Romanoff.",
      `Stark and Banner secretly upload **J.A.R.V.I.S.** —who is still working after hiding from Ultron inside the Internet—into the synthetic body. Thor returns to help activate the body, based on ==his vision== that the gem on its brow is the [Mind Stone](stone:mind), one of ==the six Infinity Stones==, **the most powerful objects in existence**. This "[Vision](vision)" earns their trust by **being worthy of lifting Thor's hammer, Mjölnir**. The [Mind Stone](stone:mind) is in Vision's head. Him and the Maximoffs go with the Avengers to Sokovia, where Ultron has used the remaining vibranium to build a machine to lift a large part of the capital city skyward, intending to crash it into the ground to cause global extinction. Banner rescues Romanoff, who awakens the Hulk for the battle. The Avengers fight Ultron's army while Fury arrives in a Helicarrier with [Maria Hill](maria-hill), [James Rhodes](war-machine), and *S.H.I.E.L.D.* agents to evacuate civilians. [Pietro](pietro) dies when he shields Barton from gunfire, and a vengeful Wanda abandons her post to destroy **Ultron**'s primary body, which allows one of his drones to activate the machine. The city plummets, but Stark and Thor overload the machine and shatter the landmass. In the aftermath, the Hulk, unwilling to endanger Romanoff by being with her, departs in a Quinjet, while Vision confronts and seemingly destroys **Ultron**'s last remaining body.`,
      'Thor returns to Asgard to learn more about the forces he suspects have manipulated major events. As Stark leaves and Barton retires, Rogers and Romanoff prepare to **train new Avengers:** [Rhodes](war-machine), [Vision](vision), [Sam Wilson](falcon), and [Wanda](scarlet-witch).',
      '**Thanos**, dissatisfied by the failures of his pawns, dons a ==gauntlet== and **vows to retrieve the Infinity Stones himself**.',
    ],
    deaths: [
      { name: 'J.A.R.V.I.S.', presumed: true },
      { name: 'Strucker', presumed: false },
      'pietro',
      { name: 'Ultron', presumed: false },
    ],
    stones: ['mind'],
  },
]);
