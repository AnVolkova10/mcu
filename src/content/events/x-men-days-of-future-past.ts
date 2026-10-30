// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-days-of-future-past', [
  {
    id: 'en-sabah-nur-pyramids',
    date: { year: -3600, approx: true, order: 10 },
    title: 'En Sabah Nur assembles the Great Pyramids',
    text: [
      'In Ancient Egypt circa 3600 B.C.E., a cloaked grey-skinned adolescent mutant named [En Sabah Nur (Apocalypse)](en-sabah-nur-apocalypse) uses immense godlike telekinesis to assemble the Great Pyramids from floating sandstone blocks across the desert. Thousands of ancient Egyptian worshippers prostrate themselves on the sand, chanting *"En Sabah Nur"* in reverent worship, as his Four Horsemen look on from horseback atop the dunes.',
    ],
    locations: ['giza-plateau-and-great-pyramids'],
  },
  {
    id: 'quicksilver-springs-magneto',
    date: { year: 1973, order: 40 },
    title: 'Quicksilver springs Magneto from the Pentagon',
    text: [
      'Awakening in his younger 1973 body in New York with bone claws, [Logan](logan-wolverine) travels to Westchester to find the X-Mansion deserted. A broken, reclusive [Charles Xavier](charles-xavier)—reliant on a genetic serum brewed by [Hank McCoy (Beast)](hank-mccoy) that restores his ability to walk at the cost of suppressing his telepathy—initially refuses to help. Logan convinces them that only they can prevent Mystique from assassinating weapons industrialist Bolivar Trask and causing a mutant genocide.',
      'To infiltrate the Pentagon and liberate the imprisoned [Erik Lehnsherr (Magneto)](erik-lehnsherr)—held in a maximum-security subterranean plastic chamber 100 feet beneath the Pentagon for the alleged assassination of JFK—the team enlists hypersonic teenager [Peter Maximoff (Quicksilver)](quicksilver-peter-maximoff). Moving at superhuman velocity during a security ambush in the kitchen, Quicksilver effortlessly neutralizes the guards, redirecting bullets and tasting soup mid-stride to successfully extract Magneto.',
    ],
    locations: [
      'xaviers-school-for-gifted-youngsters',
      'maximoff-family-residence',
      'the-pentagon-subterranean-incarceration-facility',
    ],
  },
  {
    id: 'paris-clash-trask',
    date: { year: 1973, order: 50 },
    title: 'A Paris clash over Trask exposes mutantkind',
    text: [
      'In Paris during the Vietnam War Peace Summit, [Raven Darkhölme (Mystique)](raven-darkholme) disguises herself as a South Vietnamese General to infiltrate the secret meeting where weapons mogul [Dr. Bolivar Trask](bolivar-trask) pitches his mutant-hunting Sentinel program to international diplomats. Just as Raven corners and prepares to shoot Trask, [Charles](charles-xavier), [Logan](logan-wolverine), [Hank](hank-mccoy), and [Erik](erik-lehnsherr) burst into the room to intervene.',
      "Believing Raven's death is the only absolute guarantee to stop Trask Industries from harvesting her genetic material for adaptive Sentinels, Magneto ruthlessly turns a gun on her and fires, wounding her leg as she leaps out the second-story window. A furious Beast transforms and tackles Magneto into a fountain, sparking a chaotic public brawl captured by international news cameras that exposes the existence of mutantkind to the entire globe. Slipping away through the crowd, Raven's shed blood is covertly collected by Trask's military scientists.",
      "En route to Washington, Magneto intercepts the freight train transporting prototype Mark I Sentinels, utilizing his magnetism to weave steel railway tracks into the polymer chassis of each robot—secretly converting Trask's automated army into his personal metallic puppets.",
    ],
    cast: ['william-stryker'],
    locations: [
      { id: 'hotel-royal-monceau', note: 'Paris Peace Accords' },
      'sentinel-prototype-rail-transit-yard',
    ],
  },
  {
    id: 'mystique-spares-trask',
    date: { year: 1973, order: 60 },
    title: 'Mystique spares Trask and rewrites the future',
    text: [
      'On the White House South Lawn, President Richard Nixon hosts a national press conference unveiling the Mark I Sentinels. [Magneto](erik-lehnsherr) launches a full-scale aerial assault, ripping the massive 50,000-seat **RFK Memorial Stadium** out of its concrete foundations and slamming it down around the White House to encircle the executive grounds. Taking control of the steel-laced Sentinels, Magneto turns the war machines against the Secret Service, impales [Logan](logan-wolverine) with heavy iron rebar, and hurls him deep into the bottom of the Potomac River.',
      `Magneto extracts the President's fortified steel bunker from the White House, broadcasting an ultimatum across global airwaves declaring mutant supremacy. Disguised as a Secret Service agent, [Raven](raven-darkholme) shoots Erik in the neck with a plastic pistol, disabling his powers. Aiming her gun at a terrified [Bolivar Trask](bolivar-trask), Raven is telepathically contacted by [Charles Xavier](charles-xavier), who chooses not to control her mind and instead appeals to her conscience: *"You can show them who we really are."*`,
      "In a historic turning point, Raven lowers and drops her weapon, sparing Trask's life and demonstrating to humanity that mutants are protectors rather than monsters. This single act of mercy convinces the US government to shut down the Sentinel initiative, arresting Trask for selling military secrets and creating a brand-new, peaceful future. In the Potomac River, military officer [William Stryker](william-stryker)—secretly Mystique with glowing yellow eyes—retrieves Logan's waterlogged body.",
    ],
    cast: ['hank-mccoy'],
    locations: ['the-white-house-lawn-and-rfk-stadium', 'potomac-river-recovery'],
  },
  {
    id: 'kitty-rewinds-moscow-ambush',
    date: { year: 2023, order: 10 },
    title: 'Kitty Pryde rewinds a Sentinel ambush in Moscow',
    branch: 'fox-original',
    text: [
      'In a dark, dystopian 2023, the world lies in smoking ruins. Advanced, biomechanically adaptive **Sentinels**—capable of mimicking any mutant power and weaponized with DNA harvested from Mystique in 1973—have exterminated millions of mutants and humans alike. In the devastated subways of Moscow, a ragtag mutant resistance strike team comprising [Kitty Pryde (Shadowcat)](kitty-pryde), [Lucas Bishop](bishop-lucas-bishop), [Bobby Drake (Iceman)](iceman-bobby-drake), [Piotr Rasputin (Colossus)](colossus-piotr-rasputin), [Clarice Ferguson (Blink)](blink-clarice-ferguson), [Roberto da Costa (Sunspot)](sunspot-roberto-da-costa), and [James Proudstar (Warpath)](warpath-james-proudstar) mounts a desperate stand.',
      "As adaptive Sentinels breach the bunker with thermal drills, the squad fights heroically to the death while Kitty uses her chronal phase-shifting ability to project Bishop's consciousness four days into the past—warning their past selves, averting the massacre, and narrowly slipping away into the global shadows.",
    ],
    locations: ['ruined-underground-metro-catacombs'],
  },
  {
    id: 'logan-fifty-years-back',
    date: { year: 2023, order: 20 },
    title: "Xavier and Magneto's gambit sends Logan back fifty years",
    branch: 'fox-original',
    text: [
      "Rendezvousing at a remote mountain monastery high in the Himalayas, the resistance unites with veteran X-Men leaders [Professor Charles Xavier](charles-xavier), [Magneto](erik-lehnsherr), [Storm](storm-ororo-munroe), and [Logan (Wolverine)](logan-wolverine). Xavier and Magneto formulate a final, suicidal gambit: sending someone back fifty years to 1973 to prevent Mystique from assassinating Bolivar Trask. Because a fifty-year jump would tear any mortal mind to shreds, only Wolverine's indestructible brain and cellular regeneration can survive the temporal trauma.",
      "As [Kitty](kitty-pryde) locks into [Logan](logan-wolverine)'s temples to initiate the transfer, a massive armada of Sentinel warships descends upon the mountain. In a heart-wrenching final stand, [Storm](storm-ororo-munroe), [Bishop](bishop-lucas-bishop), [Blink](blink-clarice-ferguson), [Sunspot](sunspot-roberto-da-costa), [Colossus](colossus-piotr-rasputin), [Iceman](iceman-bobby-drake), and [Magneto](erik-lehnsherr) fight to their absolute deaths against endless hordes of adaptive machines to buy every crucial second. As Sentinels breach the inner sanctum and aim their incinerator beams at [Kitty](kitty-pryde) and [Logan](logan-wolverine), the 1973 timeline rewrite takes effect—instantly wiping the apocalyptic Sentinels out of existence.",
    ],
    cast: ['warpath-james-proudstar'],
    locations: ['wulin-mountain-sanctuary-and-monastery'],
    deaths: [
      { character: 'storm-ororo-munroe', presumed: false, note: 'Sentinel Harpoon' },
      { character: 'bishop-lucas-bishop', presumed: false, note: 'Overload Detonation' },
      { character: 'blink-clarice-ferguson', presumed: false, note: 'Sentinel Impalement' },
      { character: 'sunspot-roberto-da-costa', presumed: false, note: 'Cryo-Decapitation' },
      { character: 'colossus-piotr-rasputin', presumed: false, note: 'Bisection' },
      { character: 'iceman-bobby-drake', presumed: false, note: 'Decapitation' },
    ],
  },
  {
    id: 'logan-finds-jean-cyclops-alive',
    date: { year: 2023, order: 30 },
    title: 'Logan awakens to find Jean Grey and Cyclops alive',
    text: [
      "Logan awakens in a comfortable bed at the sunlit, magnificent **Xavier's School for Gifted Youngsters** in Westchester County, New York. Wandering through the peaceful hallways, he is stunned to discover that the dark future has been completely rewritten: mutant students attend classes in peace, [Hank McCoy (Beast)](hank-mccoy) greets him, and his fallen comrades [Storm](storm-ororo-munroe), [Scott Summers (Cyclops)](cyclops-scott-summers), and [Jean Grey (Phoenix)](jean-grey) are alive and flourishing.",
      "Entering the headmaster's office, Logan meets an elderly [Charles Xavier](charles-xavier). Having lived through fifty years of a timeline he only partially remembers, Logan asks Charles for a history lesson on everything that transpired since 1973—with Charles smiling warmly and welcoming him home.",
    ],
    cast: ['logan-wolverine'],
    locations: ['xaviers-school-for-gifted-youngsters'],
  },
]);
