// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-origins-wolverine', [
  {
    id: 'james-howlett-claws',
    date: { year: 1845 },
    title: "James Howlett's claws emerge as he kills Thomas Logan",
    text: [
      "In the Northwest Territories of Canada in 1845, sickly young boy [James Howlett](logan-wolverine) witnesses the murder of his father John by groundskeeper Thomas Logan. In a violent surge of mutant awakening, bone claws sprout from James's knuckles as he impales Thomas—who reveals with his dying breath that he is James's true biological father. Horrified and rejected by his mother, James flees into the freezing Canadian wilderness alongside his older half-brother [Victor Creed](victor-creed), swearing a lifelong oath to protect one another as their accelerated healing factors and feral mutations emerge.",
    ],
    locations: ['howlett-estate-and-northwest-wilderness'],
    deaths: [
      { name: 'Thomas Logan', presumed: false },
      { name: 'John Howlett', presumed: false },
    ],
  },
  {
    id: 'logan-victor-union-army',
    date: { year: 1861, end: 1865 },
    title: 'Logan and Victor Creed enlist in the Union Army',
    text: [
      'During the American Civil War (1861–1865), immortal mutant brothers [James (Logan)](logan-wolverine) and [Victor Creed](victor-creed) enlist in the Union Army. Charging into smoke-filled battlefields with fixed bayonets, they fight relentlessly on the frontlines, discovering that their rapid cellular regeneration heals gunshot wounds and saber strikes almost instantaneously.',
    ],
    locations: ['american-civil-war-battlefield'],
  },
  {
    id: 'logan-victor-western-front',
    date: { year: 1917, end: 1918, order: 20 },
    title: 'Western Front shelling fails to kill Logan and Victor',
    text: [
      "In the muddy, devastated trenches of the Western Front in Europe during World War I (1917–1918), [James (Logan)](logan-wolverine) and [Victor Creed](victor-creed) fight in the infantry under relentless artillery bombardment and toxic gas attacks. Wearing gas masks and charging through machine gun crossfire in No Man's Land, the brothers repeatedly survive catastrophic shell blasts that would annihilate ordinary mortal men.",
    ],
    locations: ['western-front-allied-trenches'],
  },
  {
    id: 'logan-victor-omaha-beach',
    date: { year: 1944, order: 20 },
    title: 'Logan and Victor storm Omaha Beach',
    text: [
      'On June 6, 1944, during the Allied invasion of Normandy in World War II, [James (Logan)](logan-wolverine) and [Victor Creed](victor-creed) storm the sands of Omaha Beach. Charging directly through heavily fortified German machine gun bunkers and explosive artillery fire, the mutant brothers lead the frontline assault from the amphibious landing craft onto the bluffs, shrugging off deadly bullet wounds with their unstoppable healing factors.',
    ],
    locations: [
      { id: 'normandy-invasion-beachhead', note: 'Omaha Beach' },
    ],
  },
  {
    id: 'stryker-recruits-team-x',
    date: { year: 1973, order: 20 },
    title: 'Stryker recruits Logan and Victor into Team X',
    text: [
      'During the Vietnam War in 1973, [Victor Creed](victor-creed) attempts to assault a local village woman and brutally murders a senior American officer who intervenes. When [James (Logan)](logan-wolverine) defends his brother, both are condemned to execution by firing squad. Tied to wooden posts, they withstand the volley of bullets unharmed due to their rapid healing factors. Major [William Stryker](william-stryker) visits their military prison cell and recruits them into **Team X**, a covert black-ops strike unit of mutant specialists.',
    ],
    locations: ['military-stockade-and-da-nang-outpost'],
  },
  {
    id: 'logan-team-x-lagos',
    date: { year: 1973, order: 30 },
    title: 'Logan walks away from Team X in Lagos',
    branch: 'fox-original',
    text: [
      'In 1973 in Lagos, Nigeria, [William Stryker](william-stryker) deploys **Team X**—the dual-katana assassin [Wade Wilson](wade-wilson), lethal marksman [Agent Zero](agent-zero), teleporter [John Wraith](john-wraith), super-dense bruiser [Fred Dukes (Blob)](fred-dukes), [Logan](logan-wolverine), and [Victor Creed](victor-creed)—to raid a rebel warlord compound and secure an extraterrestrial meteorite containing raw **Adamantium**. Disgusted when Stryker orders the execution of innocent African villagers, Logan refuses to murder civilians and walks away into the night, permanently severing ties with Victor and the unit.',
    ],
    locations: [
      'lagos-warlord-compound-and-adamantium-extraction-site',
    ],
  },
  {
    id: 'creed-stages-kayla-death',
    date: { year: 1979, order: 10 },
    title: "Victor Creed stages Kayla's death to bait Logan",
    branch: 'fox-original',
    text: [
      'Six years after walking away from Team X, [Logan](logan-wolverine) lives in peaceful seclusion as a lumberjack in the Canadian Rockies alongside his beloved schoolteacher partner, [Kayla Silverfox](kayla-silverfox). Meanwhile, [Victor Creed](victor-creed) hunts down their former squadmates, executing Chris Bradley in Ohio and staging the horrific slaughter of Kayla in the woods to bait Logan into a blood-feud. Overpowered and beaten by Victor, a grief-stricken Logan vows revenge at any cost.',
    ],
    locations: ['canadian-rockies-homestead'],
  },
  {
    id: 'logan-adamantium-skeleton',
    date: { year: 1979, order: 20 },
    title: 'Logan gains an Adamantium skeleton and flees Alkali Lake',
    branch: 'fox-original',
    text: [
      "Desperate for the strength to defeat Victor Creed, [Logan](logan-wolverine) agrees to Colonel [William Stryker](william-stryker)'s proposition: undergoing the agonizing **Weapon X** surgical procedure to fuse indestructible **Adamantium** alloy directly onto his entire skeletal structure at the subterranean **Alkali Lake Facility**.",
      "Surviving the torturous cellular bonding process, Logan overhears Stryker order his memory wiped to turn him into a mindless assassin. Flying into a feral fury, Wolverine shatters out of the water tank with gleaming metallic claws and tears through the compound into the wilderness. When Stryker sends [Agent Zero](agent-zero) to murder the elderly couple who sheltered him, Logan ambushes Zero's helicopter, leaps through the air to sever the rotor blades with his claws, and detonates the fuel tank—killing Agent Zero.",
    ],
    locations: ['alkali-lake-weapon-x-facility'],
    deaths: ['agent-zero'],
  },
  {
    id: 'weapon-xi-logan-amnesia',
    date: { year: 1979, order: 30 },
    title: 'Logan beheads Weapon XI and loses his memory',
    branch: 'fox-original',
    text: [
      "In search of Stryker's hidden mutant research island, [Logan](logan-wolverine) teams up with [John Wraith](john-wraith), confronting an obese [Fred Dukes](fred-dukes) in Las Vegas and the kinetically powered Cajun card-shark [Remy LeBeau (Gambit)](gambit-remy-lebeau) in New Orleans—the sole escapee from Stryker's facility. Outside the club, [Victor Creed](victor-creed) ambushes and murders Wraith to harvest his teleportation DNA. Gambit agrees to fly Logan by seaplane to the secret facility located inside the **Three Mile Island Nuclear Generating Station** in Pennsylvania.",
      "Inside the facility, Logan discovers [Kayla](kayla-silverfox) is alive, having manipulated Logan under coercion to protect her captive sister Emma. Logan liberates dozens of imprisoned young mutants—including [Scott Summers (Cyclops)](cyclops-scott-summers)—who are guided to safety outside by a telepathic rescue helicopter piloted by [Charles Xavier (Professor X)](charles-xavier). To eliminate Logan, Stryker activates **Weapon XI (The Mutant Killer)**—a genetically modified [Wade Wilson](wade-wilson) possessing Wolverine's healing, Wraith's teleportation, Cyclops' optic blasts, and long adamantium forearm katanas. Logan and Victor unite as brothers on top of the cooling tower to battle Weapon XI, with Logan decapitating the composite killer before the nuclear tower collapses.",
      `In the aftermath, Stryker shoots Kayla in the stomach and shoots Logan twice in the forehead with **Adamantium bullets**, piercing his skull and inflicting permanent retrograde amnesia. A dying Kayla uses her tactile hypnotic persuasion to command Stryker: *"Walk until your feet bleed... and keep walking."* Logan awakens with total memory loss next to Kayla's body, discovers his military dog tags stamped **"WOLVERINE"**, and departs with Gambit to walk his own solitary path.`,
    ],
    cast: ['william-stryker'],
    locations: [
      'las-vegas-underground-boxing-gym',
      'french-quarter-underground-poker-club',
      'three-mile-island-nuclear-facility-and-weapon-xi-laboratory',
    ],
    deaths: [
      'john-wraith',
      'kayla-silverfox',
      { character: 'wade-wilson', presumed: false, note: 'Decapitation' },
    ],
  },
]);
