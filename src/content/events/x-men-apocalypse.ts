// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-apocalypse', [
  {
    id: 'en-sabah-nur-entombed',
    date: { year: -3600, approx: true, order: 20 },
    title: 'Rebels collapse the pyramid and entomb En Sabah Nur',
    text: [
      "Following years of tyrannical rule over Ancient Egypt in 3600 B.C.E., the aging god-king mutant [En Sabah Nur (Apocalypse)](en-sabah-nur-apocalypse) leads a massive ritual procession into the apex of his golden pyramid to transfer his consciousness into the youthful body of a mutant endowed with cellular regeneration. As the solar eclipse alignment begins the mystical transference, Egyptian human resistance rebels sabotage the massive stone counterweights to collapse the monument. Apocalypse's Four Horsemen sacrifice their lives erecting psionic shields to protect their master, sealing En Sabah Nur in deep suspended animation under thousands of tons of rubble for millennia.",
    ],
    locations: [
      'nile-valley-golden-pyramid-of-en-sabah-nur',
    ],
  },
  {
    id: 'en-sabah-nur-horsemen',
    date: { year: 1983, order: 20 },
    title: 'En Sabah Nur awakens and gathers his Four Horsemen',
    text: [
      'In 1983 Cairo, CIA operative [Moira MacTaggert](moira-mactaggert) investigates an underground mystical cult whose excavations accidentally channel sunlight into an ancient subterranean tomb, resurrecting [En Sabah Nur (Apocalypse)](en-sabah-nur-apocalypse) after thousands of years of dormancy. Wandering into the crowded alleyways, Apocalypse rescues teenage thief [Ororo Munroe (Storm)](storm-ororo-munroe) from merchants, magically enhancing her weather manipulation into godlike electrical storms and baptizing her as his **First Horseman (Famine)**.',
      "In East Berlin, [Raven Darkhölme (Mystique)](raven-darkholme) infiltrates a brutal underground mutant cage match, liberating the winged aerialist [Warren Worthington III (Angel)](archangel-warren-worthington) and the teleporting German youth [Kurt Wagner (Nightcrawler)](nightcrawler-kurt-wagner). Apocalypse tracks down mutant broker Caliban, recruiting the psionic tracker [Betsy Braddock (Psylocke)](psylocke-betsy-braddock) as his **Second Horseman (Pestilence)** and bio-mechanically transmuting Angel's damaged feathered wings into razor-sharp metallic blades capable of firing lethal steel flechettes as his **Third Horseman (Death)**.",
      "In Pruszków, Poland, [Erik Lehnsherr (Magneto)](erik-lehnsherr) has spent ten years living under an alias as a foundry worker with his wife Magda and young daughter Nina. When local militia attempt to arrest him and accidentally slay his family with a misfired arrow, Erik butchers the squad in grief. Apocalypse intervenes, teleports Erik to the ruins of Auschwitz-Birkenau, and enhances his magnetism to tap into Earth's planetary electromagnetic core, coronating him as his **Fourth Horseman (War)**.",
    ],
    locations: [
      'old-cairo-bazaars-and-underground-tomb',
      'underground-mutant-fight-club',
      'forest-cottage-and-steel-foundry',
      'auschwitz-birkenau-camp-memorial',
    ],
  },
  {
    id: 'apocalypse-abducts-xavier',
    date: { year: 1983, order: 30 },
    title: 'Apocalypse abducts Xavier as the mansion explodes',
    text: [
      "At Xavier's School, [Charles Xavier](charles-xavier) welcomes teenage mutant [Scott Summers (Cyclops)](cyclops-scott-summers), whose destructive optic blasts destroyed a high school bathroom, introducing him to telepathic student [Jean Grey (Phoenix)](jean-grey). Joining forces with [Moira MacTaggert](moira-mactaggert) and [Alex Summers (Havok)](alex-summers), Charles enters Cerebro to locate Erik. Apocalypse telepathically counter-hacks Cerebro, hijacking Xavier's neural pathways to order global military superpowers to launch all terrestrial nuclear warheads into deep space, effectively disarming the human race.",
      "Apocalypse and his Horsemen teleport directly into the mansion to abduct Charles. In a desperate attempt to sever the portal, Havok fires a high-potency plasma blast, accidentally striking the Blackbird jet's fuel core in the subterranean hangar and triggering a catastrophic explosion that tears through the entire estate.",
      'Arriving at the estate gates at the exact instant of detonation, [Peter Maximoff (Quicksilver)](quicksilver-peter-maximoff) accelerates into hypersonic velocity. In a breathtaking display of superhuman speed set to *"Sweet Dreams"*, Quicksilver races through collapsing flaming hallways, chucking dozens of students, teachers, and household pets out windows onto safety mattresses seconds ahead of the fireball. Havok tragically perishes at the blast epicenter. Seconds after the rescue, Colonel [William Stryker](william-stryker) arrives in military gunships, using a high-frequency acoustic EMP device to incapacitate and abduct [Hank McCoy (Beast)](hank-mccoy), [Raven](raven-darkholme), [Quicksilver](quicksilver-peter-maximoff), and Moira to his secret Alkali Lake installation.',
    ],
    cast: ['erik-lehnsherr', 'en-sabah-nur-apocalypse'],
    locations: ['xaviers-school-for-gifted-youngsters'],
    deaths: [
      { character: 'alex-summers', presumed: false, note: 'Havok' },
    ],
  },
  {
    id: 'jean-unleashes-weapon-x',
    date: { year: 1983, order: 40 },
    title: 'Jean Grey unleashes Weapon X at Alkali Lake',
    text: [
      "Stowing away aboard Stryker's military transport, young students [Jean Grey](jean-grey), [Scott Summers](cyclops-scott-summers), and [Kurt Wagner](nightcrawler-kurt-wagner) infiltrate the high-security subterranean **Alkali Lake Weapon X Facility** in the Canadian wilderness to liberate their captured teammates.",
      "Navigating the fortified corridors, Jean telepathically senses a feral presence locked behind a heavy containment blast door and releases **Weapon X**—a heavily conditioned [Logan](logan-wolverine) fitted with a neuro-targeting headset and gleaming Adamantium claws. Unleashing ferocious berserker rage, Logan tears through Stryker's heavily armed mercenary force in a gory hallway massacre, slaughtering dozens of guards and allowing the students to advance.",
      'Before Logan bolts into the freezing snowy forest, Jean gently approaches the feral beast, using her psychic touch to calm his fractured mind and restore a key memory fragment of his lost identity. Reunited with [Hank](hank-mccoy), [Raven](raven-darkholme), [Quicksilver](quicksilver-peter-maximoff), and [Moira](moira-mactaggert), the young mutant strike team dons experimental military flight suits, commandeers an advanced supersonic stealth jet, and charts a course for Cairo.',
    ],
    cast: ['william-stryker'],
    locations: [
      'alkali-lake-subterranean-weapon-x-facility',
    ],
  },
  {
    id: 'phoenix-incinerates-apocalypse',
    date: { year: 1983, order: 50 },
    title: "Jean's Phoenix Force incinerates Apocalypse in Cairo",
    text: [
      "In Cairo, [Apocalypse](en-sabah-nur-apocalypse) levels the modern metropolis into sand and erects a towering black pyramid. Positioning [Charles Xavier](charles-xavier) on a sacrificial altar, he initiates a consciousness transference ritual to assimilate Charles' telepathy and claim absolute psychic dominion over every mind on Earth. Aloft in the stratosphere, [Magneto](erik-lehnsherr) manipulates planetary geomagnetic fields, ripping metallic structures across continents into an orbiting shield of debris.",
      "The X-Men arrive in Cairo: [Nightcrawler](nightcrawler-kurt-wagner) teleports inside the pyramid and rescues Charles at the final second, though the partial transference causes Xavier's hair to fall out permanently. As the Four Horsemen engage the team, [Quicksilver](quicksilver-peter-maximoff) pummels Apocalypse at hypersonic velocity before the ancient mutant traps and snaps his leg. [Mystique](raven-darkholme) and Quicksilver appeal to Erik's conscience, reminding him he still has family. Erik turns against Apocalypse, impaling him with crossed steel girders, while [Storm](storm-ororo-munroe) rebels and unleashes lightning upon her former master.",
      `Fighting Apocalypse simultaneously on the physical battlefield and within Xavier's astral plane, the mutant team is slowly overwhelmed by Apocalypse's impenetrable shields. In a decisive moment of faith, Charles telepathically calls out to [Jean Grey](jean-grey): *"Jean, let go. Unleash your power."* Jean walks into the sky and releases the primordial **Phoenix Force**, manifesting an immense flaming raptor aura that shatters Apocalypse's psionic shield and incinerates his molecular structure into ash.`,
      '**Epilogue:** Erik and Jean use their immense powers to rebuild the Xavier Institute. Erik and Raven depart to forge their own paths, while Xavier, Hank, and Mystique assemble the next generation of X-Men—[Cyclops](cyclops-scott-summers), [Jean Grey](jean-grey), [Storm](storm-ororo-munroe), [Nightcrawler](nightcrawler-kurt-wagner), and [Quicksilver](quicksilver-peter-maximoff)—in customized tactical suits inside the **Danger Room** to train against giant prototype Sentinels.',
    ],
    cast: ['hank-mccoy', 'psylocke-betsy-braddock', 'archangel-warren-worthington'],
    locations: [
      'apocalypses-grand-pyramid-and-metropolitan-cairo-ruins',
      'rebuilt-xavier-manor-and-danger-room',
    ],
    deaths: [
      { character: 'en-sabah-nur-apocalypse', presumed: false, note: 'Apocalypse' },
      { character: 'archangel-warren-worthington', presumed: false, note: 'Archangel' },
    ],
  },
  {
    id: 'essex-corp-wolverine-blood',
    date: { year: 1983, order: 60 },
    title: "Essex Corp retrieves Wolverine's blood from Alkali Lake",
    text: [
      `In the aftermath of Wolverine's bloody escape from the Alkali Lake facility, a cleanup crew in dark business suits representing **Essex Corp** inspects the bullet-riddled, bloodstained containment laboratory. Bypassing dead bodies, an operative retrieves a glass vial of Wolverine's mutant blood labeled *"Weapon X"* and places it into an Essex Corp briefcase—laying the groundwork for future human cloning and the genetic creation of Laura Kinney (X-23).`,
    ],
    cast: ['william-stryker'],
    locations: ['abandoned-alkali-lake-facility'],
  },
]);
