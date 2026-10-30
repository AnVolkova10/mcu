// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-dark-phoenix', [
  {
    id: 'jean-grey-car-crash',
    date: { year: 1975 },
    title: "Jean Grey's powers cause a fatal car crash",
    text: [
      'In 1975 on a rural New York highway, eight-year-old [Jean Grey](jean-grey) inadvertently triggers her latent telekinetic abilities during an argument in the family car, causing her mother to lose consciousness and leading to a catastrophic head-on collision that kills her mother. While her traumatized father survives, he abandons the young girl out of terror of her destructive power. [Charles Xavier](charles-xavier) visits Jean at the hospital, warmly welcoming her to his school for gifted youngsters while covertly implanting deep **psychic mental blocks** in her mind to suppress the agonizing trauma and lie to her that her father died in the crash.',
    ],
    locations: [
      'upstate-rural-highway-and-county-hospital',
    ],
  },
  {
    id: 'jean-absorbs-cosmic-entity',
    date: { year: 1992, order: 20 },
    title: 'Jean absorbs a cosmic entity during the Endeavour rescue',
    text: [
      'In 1992, the NASA space shuttle **Endeavour** is crippled in Low Earth Orbit by a pulsing cosmic solar flare. Called directly by the President of the United States, [Charles Xavier](charles-xavier) dispatches the globally celebrated X-Men—led in the field by [Raven Darkhölme (Mystique)](raven-darkholme) alongside [Hank McCoy (Beast)](hank-mccoy), [Scott Summers (Cyclops)](cyclops-scott-summers), [Storm](storm-ororo-munroe), [Nightcrawler](nightcrawler-kurt-wagner), [Quicksilver](quicksilver-peter-maximoff), and [Jean Grey](jean-grey)—aboard the modified supersonic X-Jet.',
      `While Nightcrawler and Quicksilver teleport aboard the spinning shuttle to evacuate the stranded astronauts, Jean uses her immense telekinesis to hold the disintegrating hull together from the inside. When the cosmic solar flare erupts, it engulfs the shuttle—absorbing the entire primordial cosmic entity directly into Jean's biological cells. Surviving the blast without a scratch, the X-Men return home to worldwide adulation. Following the mission, an uneasy Raven confronts Xavier regarding his reckless pursuit of human approval at the expense of student safety, pointing out: *"And by the way, the women are always saving the men around here. You might want to think about changing the name to X-Women."*`,
    ],
    locations: ['low-earth-orbit-and-exosphere-space', 'xaviers-school-for-gifted-youngsters'],
  },
  {
    id: 'mystique-death-red-hook',
    date: { year: 1992, order: 30 },
    title: "Jean's telekinetic blast kills Mystique in Red Hook",
    text: [
      "The cosmic entity within Jean begins destabilizing, shattering the psychic mental blocks Xavier placed in her mind during childhood. Discovering that her father John Grey is alive, Jean travels to her childhood home in **Red Hook, New York**. Her father admits in shame that he abandoned her after the fatal crash because he viewed her powers with terror and disgust. Overwhelmed by grief and rage, Jean's psionic aura erupts into a violent shockwave.",
      "The X-Men arrive in Red Hook to de-escalate the crisis. As local police open fire, an unstable Jean repels the cruisers. Stepping forward alone to comfort her surrogate daughter, [Raven](raven-darkholme) attempts to reach Jean's heart. Overpowered by the raging entity, Jean unleashes a concussive telekinetic blast, violently launching Raven backward and impaling her onto sharp wooden spikes—tragically killing Mystique :'(.",
      "Horrified by what she has done, Jean flees to the mutant refugee island of **Genosha**, seeking sanctuary with a retired [Erik Lehnsherr (Magneto)](erik-lehnsherr). However, armed US military helicopters track Jean to the island, forcing Erik to banish her to protect his mutant commune. In her isolation, Jean is approached by [Vuk](vuk-dbari), the shapeshifting empress of the extraterrestrial **D'Bari** race, who seeks to manipulate Jean's inner turmoil to siphon and harvest the universe-destroying Phoenix Force that wiped out the D'Bari homeworld.",
    ],
    cast: [
      'jean-grey',
      'charles-xavier',
      'hank-mccoy',
      'cyclops-scott-summers',
      'storm-ororo-munroe',
      'nightcrawler-kurt-wagner',
    ],
    locations: ['childhood-home-of-jean-grey', 'genosha-island-mutant-sanctuary'],
    deaths: ['raven-darkholme'],
  },
  {
    id: 'jean-destroys-vuk',
    date: { year: 1992, order: 40 },
    title: 'Jean destroys Vuk and dissolves into a celestial firebird',
    text: [
      "Grief-stricken over Raven's death, [Hank McCoy](hank-mccoy) turns his back on Xavier and allies with [Magneto](erik-lehnsherr) to hunt down Jean in New York City. Outside a Manhattan brownstone where Vuk is manipulating Jean, Xavier's faction ([Cyclops](cyclops-scott-summers), [Storm](storm-ororo-munroe), [Nightcrawler](nightcrawler-kurt-wagner)) clashes in a brutal civil war against Magneto's strike team. Before either side can prevail, military mutant-containment forces ambush both factions with neural collars, capturing all mutants aboard a heavily armored government prisoner transport train.",
      "While in transit, the alien D'Bari armada ambushes the train to seize Jean. Freeing themselves from their power-dampening restraints, the X-Men, Beast, and Magneto unite in a seamless tactical counter-offensive, slicing through alien shapeshifters across moving train cars. Reaching full emotional clarity and oneness with the cosmic entity, [Jean Grey](jean-grey) awakens, effortlessly disintegrates the derailed train cars to shield her mutant family, and drags [Vuk](vuk-dbari) high into the outer atmosphere. Refusing to let the alien empire destroy Earth, Jean detonates Vuk with the full power of the entity, dissolving into a brilliant, celestial firebird in deep space.",
      "**Epilogue:** In honor of Jean's ultimate sacrifice, the mansion is officially rechristened the **Jean Grey School for Gifted Youngsters** with Hank McCoy serving as headmaster. In Paris, France, a retired Charles Xavier sits at an outdoor café and smiles as Erik Lehnsherr arrives to invite his oldest friend to a friendly game of chess, while a glowing flaming silhouette of the Phoenix glides across the sunlit afternoon sky.",
    ],
    cast: ['charles-xavier'],
    locations: [
      'manhattan-brownstone-district',
      'mcu-armored-prisoner-train-route',
      'exosphere-stratosphere',
      'cafe-de-la-paix',
    ],
    deaths: [
      { character: 'vuk-dbari', presumed: false, note: "D'Bari Leader" },
    ],
  },
]);
