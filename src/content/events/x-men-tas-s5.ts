// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s5', [
  {
    id: 'nathaniel-essex-sinister',
    date: { year: 1888 },
    title: 'Nathaniel Essex transforms himself into Mister Sinister',
    text: [
      'In Victorian London in 1888, visionary scientist [Dr. Nathaniel Essex](mister-sinister-nathaniel-essex) becomes obsessed with the theory of evolution, convinced that humanity is poised to undergo a sudden genetic leap into a super-powered mutant race (Homo Superior). Condemned as a madman by the Royal Society and passionately opposed by his scientific peers Dr. James Xavier (ancestor of Charles Xavier) and Dr. John Grey (ancestor of Jean Grey), Essex employs ruthless street criminals to abduct indigents and beggars from the Whitechapel and East End London slums for subterranean biological experiments.',
      "Horrified by his monstrous transformation and mourning the tragic death of their infant child, Essex's wife Rebecca dies rejecting him as 'sinister'. Consumed by megalomania and grief, Essex synthesizes an experimental mutagenic compound derived from human mutants and injects himself with the catalyst. His cellular structure alters radically, granting him cellular immortality, devastating telekinesis, superhuman strength, alabaster skin, and a crystalline red diamond in his brow. Renouncing his humanity, he christens himself [Mister Sinister](mister-sinister-nathaniel-essex), embarking on a century-long quest to harvest the Summers and Grey genetic lines—a sinister obsession that connects directly into the events of X-Men '97.",
    ],
    locations: [
      'essex-manor-laboratory-and-east-end-london-slums',
    ],
    deaths: [
      { name: 'Rebecca Essex', presumed: false },
    ],
  },
  {
    id: 'captain-america-logan-france',
    date: { year: 1944, order: 30 },
    title: 'Captain America and Logan team up in occupied France',
    text: [
      "During World War II in 1944 in Nazi-occupied France, Canadian commando [Logan](logan-wolverine) (decades prior to his adamantium bonding) is deployed on a covert sabotage mission behind enemy lines. There he crosses paths with America's legendary super-soldier [Captain America (Steve Rogers)](steve-rogers) and his young partner Bucky. Teaming up against the Third Reich, Logan unleashes his raw bone claws and feral combat instincts alongside Captain America's vibranium shield to infiltrate a subterranean Gestapo mountain laboratory.",
      'Fighting through heavily armed SS shock troops, the duo uncovers a Nazi biological super-weapon project overseen by [Red Skull](red-skull) and geneticist Dr. Klaus Schmidt. In a desperate duel beneath collapsing fortifications, Captain America and Logan extract the captured Allied scientist Dr. André Cocteau and detonate the experimental laboratory. Before parting ways into the fog of war, Steve Rogers and Logan forge a bond of mutual brotherhood and timeless warrior respect that endures across generations in Earth-92131.',
    ],
    locations: [
      'nazi-gestapo-fortress-and-subterranean-lab',
    ],
  },
  {
    id: 'beast-phalanx-alliance',
    date: { year: 1996, order: 70 },
    title: 'Beast rallies unlikely allies against the Phalanx',
    text: [
      "A techno-organic cybernetic alien collective known as the **Phalanx** invades Earth, assimilating human and mutant DNA to build a planetary hive mind. With the core X-Men captured and infected, [Beast](hank-mccoy) recruits unlikely allies: mutant sovereign [Magneto](erik-lehnsherr), mutant inventor [Forge](forge), and the compassionate techno-organic runaway Warlock. Infiltrating the central spire on Muir Island, the strike team synthesizes a biological counter-virus that purges the cybernetic pathogen worldwide, liberating the X-Men and severing the Phalanx's extraterrestrial link.",
    ],
    cast: ['logan-wolverine', 'charles-xavier'],
    locations: [
      'phalanx-assimilation-spire-and-muir-island',
    ],
  },
  {
    id: 'mystique-nightcrawler-mother',
    date: { year: 1996, order: 80 },
    title: "Mystique confesses she is Nightcrawler's mother",
    text: [
      "Political anti-mutant fanatic [Graydon Creed](graydon-creed) launches a genocidal national campaign to outlaw mutants, staging paramilitary raids with the Friends of Humanity. Investigating Creed's biological history, teleporter [Kurt Wagner (Nightcrawler)](nightcrawler-kurt-wagner) and foster sister [Rogue](rogue-anna-marie) infiltrate Creed's compound, uncovering hidden birth certificates that link back to rogue shapeshifter [Mystique (Raven Darkhölme)](raven-darkholme).",
      "In a dramatic confrontation above a waterfall, Mystique confesses the agonizing truth: Nightcrawler is her biological son, abandoned as an infant when a terrified Bavarian mob drove her off a cliff. Furthermore, Graydon Creed is her own human son, fathered decades earlier by feral mutant [Sabretooth (Victor Creed)](victor-creed). Broadcasting genetic proof on live television, Nightcrawler exposes Creed's absolute hypocrisy, obliterating his political campaign. Rather than seeking vengeance, Kurt forgives his mother and embraces his Christian faith, forging a sacred spiritual bond with Rogue.",
    ],
    locations: [
      'friends-of-humanity-compound-and-bavarian-waterfall-ridge',
    ],
  },
  {
    id: 'xavier-departs-earth',
    date: { year: 1997, order: 50 },
    title: 'Charles Xavier departs Earth with Empress Lilandra',
    text: [
      "During a live international human-mutant relations summit in Washington D.C., anti-mutant fanatic Henry Peter Gyrich shoots [Professor Charles Xavier](charles-xavier) with an experimental sonic disruptor, exposing his mutant brainwaves on television and leaving him on the brink of death. Worldwide mutant panic erupts, with Magneto preparing a retaliatory war army on the island of Genosha. Wolverine, Cyclops, and Jean Grey travel to Genosha, appealing to Magneto's deep friendship with Charles. Magneto yields, halting his war. Using a Shi'ar telepathic beacon, the X-Men contact [Empress Lilandra](lilandra-neramani), who arrives in an imperial starship to transport Xavier to the Shi'ar Empire for alien medical treatment. Surrounding their dying mentor's bed at the mansion, the X-Men bid a tearful farewell as Charles leaves Earth in their capable hands.",
    ],
    cast: [
      'erik-lehnsherr',
      'cyclops-scott-summers',
      'jean-grey',
      'logan-wolverine',
      'storm-ororo-munroe',
      'hank-mccoy',
      'rogue-anna-marie',
      'gambit-remy-lebeau',
      'jubilee-jubilation-lee',
    ],
    locations: ['xavier-mansion-and-genosha-capital'],
  },
]);
