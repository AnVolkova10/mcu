// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-days-of-future-past', [
  {
    id: 'en-sabah-nur-pyramids',
    date: { year: -3600, approx: true, order: 10 },
    title: 'En Sabah Nur raises the pyramids',
    text: [
      'In ancient Egypt, a crowd kneels and chants the name of a young [En Sabah Nur](en-sabah-nur-apocalypse) as he lifts blocks of stone with his mind to build the pyramids. His Four Horsemen watch from a distance.',
    ],
    locations: ['giza-plateau-and-great-pyramids'],
  },
  {
    id: 'mystique-frees-mutant-soldiers',
    date: { year: 1973, order: 35 },
    title: 'Mystique frees mutant soldiers from Stryker in Saigon',
    text: [
      'As the last American troops leave Vietnam, the government turns down the Sentinel program of [Bolivar Trask](bolivar-trask). In Saigon, [Mystique](raven-darkholme), disguised as an American colonel, stops Major [William Stryker](william-stryker) from shipping a group of mutant soldiers to Trask Industries for tests, among them [Alex Summers](alex-summers), Toad and Ink. She learns that Trask has been experimenting on mutants.',
    ],
    locations: ['saigon-air-base'],
  },
  {
    id: 'quicksilver-springs-magneto',
    date: { year: 1973, order: 40 },
    title: 'Quicksilver springs Magneto from the Pentagon',
    text: [
      '[Logan](logan-wolverine) wakes up in his body of 1973, in the bed of Gwen, the daughter of the mobster he guards, and drives to the Xavier mansion. The school has been closed for years. [Hank McCoy](hank-mccoy) looks after a drunk [Charles Xavier](charles-xavier), who takes a serum that lets him walk but shuts off his telepathy. They agree to help Logan, hoping to get Raven back.',
      'To free [Erik Lehnsherr](erik-lehnsherr), held a hundred floors under the Pentagon for the death of Kennedy, they recruit [Peter Maximoff](quicksilver-peter-maximoff), a teenager from outside Washington who moves faster than anyone can see. Peter gets them in and out of the prison. Erik says he was trying to save Kennedy, who was one of them.',
    ],
    locations: ['xaviers-school-for-gifted-youngsters', 'maximoff-family-residence', 'the-pentagon-subterranean-incarceration-facility'],
  },
  {
    id: 'paris-clash-trask',
    date: { year: 1973, order: 50 },
    title: 'A Paris clash over Trask exposes mutantkind',
    text: [
      'At the Paris peace talks that end the Vietnam War, [Mystique](raven-darkholme) poses as a Vietnamese general to reach [Bolivar Trask](bolivar-trask), but his mutant detector gives her away and [William Stryker](william-stryker) brings her down. [Charles Xavier](charles-xavier), [Logan](logan-wolverine), [Hank McCoy](hank-mccoy) and [Erik Lehnsherr](erik-lehnsherr) burst in. The sight of Stryker floods Logan with memories, and Erik shoots at Raven to stop her for good; she escapes through a window, wounded in the leg.',
      "Hank, now Beast, fights Erik in the street in front of the cameras, and the world sees mutants for the first time. Trask's men take Raven's blood, and President Nixon approves the Sentinel program. Erik takes back his [helmet](object:magneto-helmet) and, with the rails of a railway line, laces the [Sentinels](object:sentinels) bound for Washington with steel.",
    ],
    locations: ['hotel-royal-monceau', 'sentinel-prototype-rail-transit-yard'],
    objects: [
      { id: 'magneto-helmet', at: [] },
      { id: 'sentinels', at: ['sentinel-prototype-rail-transit-yard'] },
    ],
  },
  {
    id: 'mystique-spares-trask',
    date: { year: 1973, order: 60 },
    title: 'Mystique spares Trask and rewrites the future',
    text: [
      'At the mansion, [Charles Xavier](charles-xavier) stops taking the serum and, through the mind of [Logan](logan-wolverine), talks with his future self, who asks him to hope again. With [Cerebro](object:cerebro) he reaches [Mystique](raven-darkholme) and asks her to come home. In the Rogue Cut she does: [Hank McCoy](hank-mccoy) treats her wound, and at night she wrecks Cerebro and leaves. Either way they head for Washington, where the Sentinels will be unveiled.',
      'On the White House lawn, President Nixon presents the [Sentinels](object:sentinels). [Erik Lehnsherr](erik-lehnsherr), wearing his [helmet](object:magneto-helmet), lifts RFK Stadium and drops it around the White House, takes control of the Sentinels, runs Logan through with steel bars and throws him into the Potomac. Then he tears the presidential bunker out of the building.',
      "Mystique, disguised as Nixon, shoots Erik in the neck with a plastic gun. She aims it at [Bolivar Trask](bolivar-trask), but Charles talks her out of it, and the world sees a mutant save the President. The Sentinel program is shut down and Trask is arrested for selling military secrets; in the Rogue Cut he ends up in Erik's old cell under the Pentagon. In the Potomac, Mystique, disguised as Stryker, pulls Logan out of the water.",
    ],
    locations: ['xaviers-school-for-gifted-youngsters', 'rfk-stadium', 'the-white-house-lawn-and-rfk-stadium', 'potomac-river-recovery', 'the-pentagon-subterranean-incarceration-facility'],
    objects: [
      { id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] },
      { id: 'magneto-helmet', at: ['the-white-house-lawn-and-rfk-stadium'] },
      { id: 'sentinels', at: ['the-white-house-lawn-and-rfk-stadium'] },
    ],
  },
  {
    id: 'kitty-rewinds-moscow-ambush',
    date: { year: 2023, order: 10 },
    title: 'Kitty Pryde rewinds a Sentinel ambush in Moscow',
    branch: 'fox-original',
    text: [
      'In 2023, [Sentinels](object:sentinels) that adapt to any mutant power have killed most mutants and the humans who help them. In an underground hideout in Moscow they find [Kitty Pryde](kitty-pryde), [Bishop](bishop-lucas-bishop), [Iceman](iceman-bobby-drake), [Colossus](colossus-piotr-rasputin), [Blink](blink-clarice-ferguson), [Sunspot](sunspot-roberto-da-costa) and [Warpath](warpath-james-proudstar). The others die holding them off while Kitty sends the mind of Bishop a few days back to warn them, and the attack never happens.',
    ],
    locations: ['ruined-underground-metro-catacombs'],
    objects: [{ id: 'sentinels', at: ['ruined-underground-metro-catacombs'] }],
  },
  {
    id: 'logan-fifty-years-back',
    date: { year: 2023, order: 20 },
    title: "Xavier and Magneto's gambit sends Logan back fifty years",
    branch: 'fox-original',
    text: [
      'In a remote monastery in China, the survivors meet [Charles Xavier](charles-xavier), [Erik Lehnsherr](erik-lehnsherr), [Storm](storm-ororo-munroe) and [Logan](logan-wolverine). Charles explains that the Sentinels were born in 1973, when Mystique killed Bolivar Trask and was captured, and her DNA let them adapt to any power. Only Logan can survive a jump of fifty years, so [Kitty Pryde](kitty-pryde) sends his mind back. When he sees Stryker in Paris, his body lashes out and wounds Kitty.',
      'In the Rogue Cut, Charles, Erik and [Iceman](iceman-bobby-drake) fly to the Xavier mansion, where the Sentinels keep [Rogue](rogue-anna-marie) inside Cerebro, and free her. Iceman dies covering their escape, and Rogue takes over from Kitty.',
      'The [Sentinels](object:sentinels) storm the monastery. Storm, [Bishop](bishop-lucas-bishop), [Warpath](warpath-james-proudstar), [Sunspot](sunspot-roberto-da-costa), [Colossus](colossus-piotr-rasputin) and [Blink](blink-clarice-ferguson) are killed, and so is Iceman in the theatrical cut, while Erik is badly hurt. When Mystique spares Trask in 1973, this future is gone.',
    ],
    locations: ['wulin-mountain-sanctuary-and-monastery', 'xaviers-school-for-gifted-youngsters'],
    objects: [{ id: 'sentinels', at: ['xaviers-school-for-gifted-youngsters', 'wulin-mountain-sanctuary-and-monastery'] }],
    deaths: ['storm-ororo-munroe', 'bishop-lucas-bishop', 'warpath-james-proudstar', 'sunspot-roberto-da-costa', 'colossus-piotr-rasputin', 'blink-clarice-ferguson', 'iceman-bobby-drake'],
  },
  {
    id: 'logan-finds-jean-cyclops-alive',
    date: { year: 2023, order: 30 },
    title: 'Logan wakes to find Jean Grey and Scott Summers alive',
    text: [
      '[Logan](logan-wolverine) wakes up at the Xavier mansion in a new 2023, with the school full of students. An older [Hank McCoy](hank-mccoy) greets him, [Rogue](rogue-anna-marie) is there, and so are [Jean Grey](jean-grey) and [Scott Summers](cyclops-scott-summers), who were dead in the future he left. He finds [Charles Xavier](charles-xavier) and asks him to fill him in on the last fifty years.',
    ],
    locations: ['xaviers-school-for-gifted-youngsters'],
  },
]);
