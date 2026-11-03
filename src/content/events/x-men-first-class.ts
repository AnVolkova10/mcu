// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-first-class', [
  {
    id: 'erik-powers-auschwitz',
    date: { year: 1944, order: 10 },
    title: "Erik Lehnsherr's magnetic powers awaken at Auschwitz",
    text: [
      "At Auschwitz, in occupied Poland, young [Erik Lehnsherr](erik-lehnsherr) is separated from his parents and bends a metal gate with his mind. Dr. Klaus Schmidt, later known as [Sebastian Shaw](sebastian-shaw), orders him to move a coin on his desk and, when Erik cannot, shoots his mother in front of him. Erik's rage tears the room apart and kills two guards.",
    ],
    locations: ['auschwitz-birkenau-concentration-camp'],
    deaths: [{ name: 'Edie Lehnsherr' }],
  },
  {
    id: 'charles-meets-raven',
    date: { year: 1944, order: 15 },
    title: 'Charles Xavier takes in Raven',
    text: [
      "In the family mansion in Westchester, twelve-year-old [Charles Xavier](charles-xavier) finds his mother in the kitchen at night and sees it is not her. It is [Raven](raven-darkholme), a ten-year-old blue shapeshifter, hungry and alone. Happy to meet someone else who is different, Charles tells her she never has to steal again and takes her in.",
    ],
    locations: ['xaviers-school-for-gifted-youngsters'],
  },
  {
    id: 'erik-hunts-schmidt',
    date: { year: 1962, order: 10 },
    title: 'Erik Lehnsherr tracks Klaus Schmidt to Villa Gesell',
    text: [
      "In Geneva, [Erik Lehnsherr](erik-lehnsherr) pulls out a Swiss banker's metal filling until he says where Klaus Schmidt is. In a tavern in Villa Gesell, Argentina, Erik kills two former Nazis and the barman. A photo of them with Schmidt on his yacht sends him on to Miami.",
    ],
    locations: ['swiss-bank-geneva', 'villa-gesell-nazi-hideout'],
  },
  {
    id: 'moira-finds-hellfire-club',
    date: { year: 1962, order: 20 },
    title: 'Moira MacTaggert uncovers the Hellfire Club',
    text: [
      "At Oxford, [Charles Xavier](charles-xavier) finishes his doctorate on human mutation with his foster sister [Raven](raven-darkholme) at his side. In Las Vegas, CIA agent [Moira MacTaggert](moira-mactaggert) follows [Colonel Hendry](robert-hendry) into the Hellfire Club. There she sees [Sebastian Shaw](sebastian-shaw) threaten him over the Jupiter missiles in Turkey, [Emma Frost](emma-frost) turn to diamond and [Azazel](azazel) vanish with him. Moments later Hendry is in the War Room at the Pentagon, backing the missiles. Later, on his yacht off Miami, the Caspartina, Shaw absorbs the blast of a grenade and kills Hendry with it, showing the power that also keeps him young.",
      "CIA director **John McCone** does not believe Moira, so she turns to Charles. At CIA Headquarters he reads the minds of the officers, among them [William Stryker Sr.](william-stryker-sr), and Raven takes Stryker's shape to prove it. A **Man in Black Suit** who has always believed in mutants offers to take them to his facility.",
    ],
    locations: ['oxford-university-faculty-of-genetics', 'hellfire-club-las-vegas', 'pentagon-war-room', 'miami-coastline-and-shaw-yacht', 'cia-headquarters'],
    cast: ['janos-quested'],
    deaths: ['robert-hendry'],
  },
  {
    id: 'charles-erik-recruit-mutants',
    date: { year: 1962, order: 30 },
    title: 'Charles Xavier and Erik Lehnsherr recruit young mutants',
    text: [
      "[Erik Lehnsherr](erik-lehnsherr) reaches the Caspartina off Miami on the same night that [Moira MacTaggert](moira-mactaggert) and [Charles Xavier](charles-xavier) arrive with the Coast Guard. [Emma Frost](emma-frost) blocks Charles's telepathy and throws Erik overboard. [Sebastian Shaw](sebastian-shaw) escapes in a submarine, and Charles saves Erik from drowning as he tries to drag it back. Aboard it, Shaw shows Emma the [helmet](object:magneto-helmet) the Soviets made him to keep telepaths out.",
      "At the Division X facility in Richmond, Charles exposes the young scientist [Hank McCoy](hank-mccoy) as a mutant and uses his machine, [Cerebro](object:cerebro), to find others. He and Erik recruit the dancer [Angel Salvadore](angel-salvadore), the taxi driver [Armando Muñoz](armando-munoz), [Alex Summers](alex-summers), who prefers solitary confinement in prison, and [Sean Cassidy](sean-cassidy). [Logan](logan-wolverine) turns them down in a bar in three words. Back at the base, [Raven](raven-darkholme) and the recruits pick their code names.",
    ],
    locations: ['miami-coastline-and-shaw-yacht', 'cia-division-x-secret-facility'],
    objects: [
      { id: 'magneto-helmet', at: [] },
      { id: 'cerebro', at: ['cia-division-x-secret-facility'] },
    ],
  },
  {
    id: 'shaw-attacks-division-x',
    date: { year: 1962, order: 40 },
    title: 'Sebastian Shaw destroys Division X and kills Darwin',
    text: [
      "[Charles Xavier](charles-xavier), [Erik Lehnsherr](erik-lehnsherr) and [Moira MacTaggert](moira-mactaggert) enter the Soviet Union to catch [Sebastian Shaw](sebastian-shaw) at a meeting with a general, but he has sent [Emma Frost](emma-frost) instead. They capture her at the general's retreat, and Charles learns the plan from her mind: a third world war that mutants will survive and humans will not.",
      "Meanwhile Shaw, wearing his [helmet](object:magneto-helmet), attacks Division X with [Azazel](azazel) and [Riptide](janos-quested). They kill the agents, among them the **Man in Black Suit**, and destroy [Cerebro](object:cerebro). Shaw invites the young mutants to join him and [Angel Salvadore](angel-salvadore) accepts. When [Alex Summers](alex-summers) fires at him, Shaw absorbs the blast and uses it to kill [Armando Muñoz](armando-munoz). In Moscow, Shaw forces a Soviet general to send missiles to Cuba.",
    ],
    locations: ['armivolkoff-military-retreat', 'cia-division-x-secret-facility', 'moscow-soviet-high-command'],
    cast: ['raven-darkholme', 'hank-mccoy', 'sean-cassidy'],
    deaths: ['armando-munoz', { name: 'Man in Black Suit' }],
    objects: [
      { id: 'magneto-helmet', at: ['cia-division-x-secret-facility'] },
      { id: 'cerebro', at: ['cia-division-x-secret-facility'] },
    ],
  },
  {
    id: 'x-men-train-at-the-mansion',
    date: { year: 1962, order: 50 },
    title: 'Hank McCoy becomes Beast as the team trains at the Xavier mansion',
    text: [
      "[Charles Xavier](charles-xavier) takes the survivors to his family mansion in Westchester to train for a week, helped by [Erik Lehnsherr](erik-lehnsherr) and [Moira MacTaggert](moira-mactaggert). [Hank McCoy](hank-mccoy) builds a chest unit that lets [Alex Summers](alex-summers) aim his energy and a flight suit that carries [Sean Cassidy](sean-cassidy) on his own scream. Charles reaches a forgotten memory of Erik with his mother, lighting the Hanukkah candles, and it lets Erik turn a satellite dish from afar.",
      "President Kennedy declares an embargo around Cuba as the Soviet missile ship sails. [Raven](raven-darkholme), who has accepted her blue skin thanks to Erik, turns down the cure Hank has made from her blood. Hank takes it alone and it goes wrong: it covers him in blue fur, and Alex names him Beast.",
    ],
    locations: ['xaviers-school-for-gifted-youngsters'],
  },
  {
    id: 'charles-erik-stop-shaw',
    date: { year: 1962, order: 60 },
    title: 'Charles and Erik stop Shaw but part as rivals',
    text: [
      "The team flies to the embargo line off Cuba in the jet [Hank McCoy](hank-mccoy) designed. [Azazel](azazel) has killed the crew of the Soviet missile ship Aral Sea and set it on course to cross the line, so [Charles Xavier](charles-xavier) takes over the mind of a Soviet officer and has his own fleet sink it. [Sean Cassidy](sean-cassidy) finds the submarine of [Sebastian Shaw](sebastian-shaw) by sonar, [Erik Lehnsherr](erik-lehnsherr) lifts it out of the water, and the tornado of [Riptide](janos-quested) brings it down on the beach with the jet.",
      "Shaw is feeding on the submarine's reactor to turn himself into a bomb. Erik pulls off his [helmet](object:magneto-helmet) so that Charles can freeze him, puts it on, tells Shaw he agrees with him but that he killed his mother, and slowly forces the coin from Auschwitz through his head.",
      "Urged on by [William Stryker Sr.](william-stryker-sr), the American and Soviet fleets fire on the beach. Erik stops the missiles in the air and turns them back. [Moira MacTaggert](moira-mactaggert) shoots at him, and a bullet he deflects hits Charles in the spine. Erik lets the missiles fall and leaves with [Raven](raven-darkholme), [Angel Salvadore](angel-salvadore), Azazel and Riptide.",
    ],
    locations: ['cuban-missile-crisis-naval-quarantine-line', 'bay-of-pigs-beach'],
    cast: ['alex-summers'],
    deaths: ['sebastian-shaw'],
    objects: [{ id: 'magneto-helmet', at: ['bay-of-pigs-beach'] }],
  },
  {
    id: 'erik-becomes-magneto',
    date: { year: 1962, order: 70 },
    title: "Charles wipes Moira's memory as Erik becomes Magneto",
    text: [
      "Four weeks later, in Thanksgiving week, [Charles Xavier](charles-xavier) is back at his mansion in a wheelchair, planning a school for mutants. [Moira MacTaggert](moira-mactaggert) tells him that he and his team are X-Men now and promises not to reveal where they are. He kisses her and erases her memory of them.",
      "At CIA Headquarters, Moira can tell [William Stryker Sr.](william-stryker-sr) and the others nothing. In her cell, [Emma Frost](emma-frost) gets a visit from [Erik Lehnsherr](erik-lehnsherr), in costume and wearing the [helmet](object:magneto-helmet), with [Raven](raven-darkholme), [Azazel](azazel), [Riptide](janos-quested) and [Angel Salvadore](angel-salvadore) behind him. He asks her to join them. When she calls him Erik, he answers: \"I prefer Magneto.\"",
    ],
    locations: ['xaviers-school-for-gifted-youngsters', 'cia-headquarters'],
    cast: ['hank-mccoy', 'alex-summers', 'sean-cassidy'],
    objects: [{ id: 'magneto-helmet', at: ['cia-headquarters'] }],
  },
]);
