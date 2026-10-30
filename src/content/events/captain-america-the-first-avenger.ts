// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('captain-america-the-first-avenger', [
  {
    id: 'bucky-defends-young-steve',
    date: { year: 1925, approx: true },
    title: 'Bucky Barnes defends young Steve Rogers from bullies',
    text: [
      'In the working-class tenements and schoolyards of Brooklyn, New York circa 1925, seven-year-old [Steve Rogers](steve-rogers)—frail, asthmatic, and frequently bedridden—is cornered and beaten by a gang of older neighborhood bullies. Eight-year-old [James Buchanan "Bucky" Barnes](bucky-barnes) leaps into the fray, scattering the attackers with his fists and helping Steve back to his feet. Recognizing in Rogers a stubborn, unshakeable courage that far exceeds his fragile physical frame, Bucky swears a protective pact that cements their unbreakable brotherhood for the next century.',
    ],
    locations: [
      'ps-13-schoolyard-and-brooklyn-tenement-yard',
    ],
  },
  {
    id: 'steve-alley-bully',
    date: { year: 1941 },
    title: 'Steve Rogers stands up to an alley bully',
    text: [
      `Following the attack on Pearl Harbor in December 1941 and the United States' entry into World War II, frail 90-pound Brooklynite [Steve Rogers](steve-rogers) attempts to enlist in the US Armed Forces across multiple boroughs, but is repeatedly turned down with Class 4-F status due to chronic asthma, heart palpitations, and scarlet fever. Attending a neighborhood cinema, Steve bravely confronts an obnoxious patron who disrespects an Allied war newsreel. Cornered in the rain-slicked alley behind the theater, Steve is battered mercilessly by the larger bully; refusing to stay down, Rogers raises a rusted garbage can lid like a shield and declares his defining battle cry: *"I can do this all day."* Sgt. [Bucky Barnes](bucky-barnes), dressed in freshly pressed Army dress blues, arrives just in time to knock the bully flat, rescue Steve, and break the news that the 107th Infantry Regiment has received orders to ship out to the European theater the next morning.`,
    ],
    locations: ['brooklyn-cinema-alleyway'],
  },
  {
    id: 'schmidt-steals-tesseract',
    date: { year: 1942, order: 10 },
    title: 'Johann Schmidt steals the Tesseract in Tønsberg',
    text: [
      "In Tønsberg, a German-occupied town in Norway, Nazi SS officer and head of HYDRA [Johann Schmidt](red-skull) storms an ancient Norse crypt and steals a legendary cosmic relic known as [the Tesseract (Space Stone)](stone:space), hidden behind an intricate Yggdrasil relief. Schmidt tasks his chief biochemist, Dr. [Arnim Zola](arnim-zola), with harnessing its infinite cosmic blue energy to power a destructive arsenal of advanced weaponry, planning to break away from Adolf Hitler's Third Reich and establish **HYDRA** as the supreme global power.",
    ],
    locations: ['ancient-norse-crypt', 'castle-kaufmann-hydra-weapons-division'],
    stones: ['space'],
  },
  {
    id: 'erskine-selects-steve',
    date: { year: 1942, order: 20 },
    title: 'Abraham Erskine selects Steve Rogers for Project Rebirth',
    text: [
      `In Flushing Meadows, Queens, [Bucky Barnes](bucky-barnes) takes [Steve Rogers](steve-rogers) on a double date to the vibrant **1942 Stark World Exposition of Tomorrow**. Visionary industrialist [Howard Stark](howard-stark) takes the main stage to demonstrate an experimental hover-car powered by prototype magnetic repulsor tech. Sneaking away from the festivities into the expo's military recruitment pavilion to falsify his home address and try enlisting a fifth time, Steve argues with Bucky about duty and sacrifice. German-defector scientist Dr. [Abraham Erskine](abraham-erskine) of the *Strategic Scientific Reserve (SSR)* overhears Steve's pure conviction. In the examination booth, Erskine questions why Rogers wants to fight: *"Do you want to kill Nazis?"* Steve answers truthfully: *"I don't want to kill anyone. I don't like bullies; I don't care where they're from."* Profoundly moved by Steve's moral character over brute strength, Erskine approves him 1-A for Project Rebirth at Camp Lehigh.`,
    ],
    locations: ['stark-world-exposition-of-tomorrow'],
  },
  {
    id: 'steve-becomes-super-soldier',
    date: { year: 1943 },
    title: 'Steve Rogers becomes a super-soldier and frees Bucky',
    text: [
      'At Camp Lehigh in 1943, Colonel [Chester Phillips](chester-phillips) and British intelligence agent [Peggy Carter](peggy-carter) put recruits through rigorous trials for the *Strategic Scientific Reserve (SSR)*, where [Steve Rogers](steve-rogers) demonstrates unmatched selflessness by throwing himself onto an active dummy grenade. In a secret subterranean Brooklyn laboratory powered by engineer [Howard Stark](howard-stark), Dr. [Abraham Erskine](abraham-erskine) administers the experimental **Super-Soldier Serum** and bombards Steve with **Vita-Rays**, transforming him into a peak-human super-soldier. Tragically, undercover HYDRA operative **Heinz Kruger** shoots and kills [Erskine](abraham-erskine) and destroys the remaining serum vials before Rogers pursues and captures him, with **Kruger** committing suicide by cyanide.',
      `With the serum formula lost, the US government relegates Steve to a theatrical costumed mascot dubbed **"Captain America"** to sell war bonds on tour. In November 1943, while touring near the Italian front lines, Steve learns that Bucky's unit—the 107th Infantry—was captured at Azzano by HYDRA. Refusing orders to stand down, Rogers goes rogue and mounts a daring solo infiltration into HYDRA's heavily fortified Austrian weapons facility, flown behind enemy lines by [Peggy Carter](peggy-carter) and [Howard Stark](howard-stark). Steve liberates Barnes and over 400 Allied prisoners of war, destroying the weapons plant. During the escape, Steve confronts [Johann Schmidt](red-skull), who removes his synthetic human face mask to reveal his horrifying crimson visage: [The Red Skull](red-skull)—the consequence of an imperfect, premature dose of Erskine's serum.`,
      `Officially promoted to Captain by Colonel Phillips, Steve forms an elite strike unit called the **Howling Commandos**, recruiting [Bucky Barnes](bucky-barnes), [Timothy "Dum Dum" Dugan](dum-dum-dugan), [Gabe Jones](gabe-jones), [Jim Morita](jim-morita), [James Montgomery Falsworth](james-montgomery-falsworth), and [Jacques Dernier](jacques-dernier). In London's underground SSR bunker, [Howard Stark](howard-stark) equips Steve with tailored tactical combat armor and presents him with a prototype circular shield forged from pure **Vibranium**—a rare Wakandan metal possessing total kinetic shock absorption. Rogers adopts the shield and paints it with his signature stars and stripes, preparing the unit for frontline warfare.`,
    ],
    cast: ['arnim-zola'],
    locations: [
      'ssr-secret-laboratory-and-vita-ray-chamber',
      'camp-lehigh-military-training-base',
      'hydra-107th-prison-facility',
    ],
    deaths: [
      'abraham-erskine',
      { name: 'Kruger', presumed: false },
    ],
    stones: ['space'],
  },
  {
    id: 'howling-commandos-dismantle-hydra',
    date: { year: 1944, order: 40 },
    title: 'The Howling Commandos dismantle HYDRA across Europe',
    text: [
      "Throughout 1944, [Captain America (Steve Rogers)](steve-rogers), Sgt. [Bucky Barnes](bucky-barnes), and their elite multinational strike unit, the **Howling Commandos**—[Dum Dum Dugan](dum-dum-dugan), [Gabe Jones](gabe-jones), [Jim Morita](jim-morita), [Jacques Dernier](jacques-dernier), and [James Montgomery Falsworth](james-montgomery-falsworth)—wage a relentless, year-long liberation campaign across Nazi-occupied Europe. Coordinated from London by Agent [Peggy Carter](peggy-carter) and Colonel [Chester Phillips](chester-phillips), and armed with Howard Stark's kinetic-absorbent Vibranium shield and specialized tactical munitions, the Commandos systematically raid and obliterate HYDRA's fortified manufacturing facilities, weapons depots, and research compounds across France, Belgium, and Germany.",
      "During a grueling winter offensive in the dense Ardennes forest, Rogers and his team ambush an armored HYDRA convoy transporting Tesseract-infused energy munitions, capturing invaluable telemetry and facility blueprints that pinpoint Johann Schmidt's inner fortress network. The Howling Commandos' string of decisive victories shatters HYDRA's industrial war machine, forcing a paranoid and desperate Red Skull to retreat to his central alpine redoubt at Kraussberg.",
    ],
    locations: [
      'occupied-ardennes-forest-and-hydra-research-depot',
      'london-ssr-underground-strategic-bunker',
    ],
    stones: ['space'],
  },
  {
    id: 'valkyrie-arctic-plunge',
    date: { year: 1945, order: 10 },
    title: 'Steve Rogers plunges the Valkyrie into the Arctic ice',
    text: [
      "During a high-speed SSR raid on an armored HYDRA mountain train in the Swiss Alps, Captain America's team captures chief scientist Dr. [Arnim Zola](arnim-zola). However, a hull breach sends [Bucky Barnes](bucky-barnes) plunging over the rail into a bottomless icy chasm to his apparent death. Broken by grief, [Steve Rogers](steve-rogers) leads the SSR and Howling Commandos in a massive final assault on the Red Skull's central mountain fortress. Red Skull launches his colossal flying-wing super-bomber, **The Valkyrie**, armed with Tesseract-charged atomic ordnance targeting New York, Washington, and American metropolitan centers.",
      "Rogers boards the Valkyrie and battles Schmidt in the cockpit. During the firefight, the Tesseract's energy containment matrix is damaged. When [Johann Schmidt](red-skull) grabs the glowing [Tesseract](stone:space) directly with his bare hands, the cosmic relic activates a blinding wormhole, dissolving and teleporting the Red Skull across deep space to Vormir. The Tesseract melts through the aircraft hull and sinks into the Atlantic Ocean. Realizing the autopilot is locked on New York, Rogers makes the ultimate sacrifice: he radios [Peggy Carter](peggy-carter) to say goodbye, promising her a raincheck dance, before manually plunging the *Valkyrie* into the Arctic ice sheet to save millions. In the aftermath, [Howard Stark](howard-stark) leads a naval recovery expedition, retrieving the glowing [Tesseract](stone:space) from the seabed while Steve remains lost in the frozen north.",
    ],
    cast: ['dum-dum-dugan'],
    locations: [
      'hydra-mountain-train-railway',
      'kraussberg-hydra-central-fortress',
      'valkyrie-crash-site-and-cryogenic-trench',
    ],
    deaths: [
      { character: 'bucky-barnes', presumed: true },
      { character: 'red-skull', presumed: true },
      { character: 'steve-rogers', presumed: true, note: 'Presumed Lost' },
    ],
    stones: ['space'],
  },
  {
    id: 'steve-rogers-wakes-up',
    date: { year: 2011 },
    title: 'Steve Rogers wakes up nearly seventy years later',
    text: [
      'Deep in the Arctic ice sheet, a S.H.I.E.L.D. recovery team discovers the frozen wreckage of the *Valkyrie* containing [Steve Rogers](steve-rogers) preserved in cryogenic suspended animation. Steve awakens inside a retro 1940s hospital room simulation in New York City. Recognizing a radio broadcast of a 1941 Brooklyn Dodgers game he attended in person, Steve realizes the deception, breaks out of the facility, and runs into the bustling, neon-lit modern world of Times Square. S.H.I.E.L.D. Director [Nick Fury](fury) arrives with tactical agents to de-escalate the situation, gently informing him that he has been asleep for nearly seventy years. Grieving the life he lost, Rogers somberly replies: *"I had a date."*',
    ],
    locations: ['shield-arctic-recovery-base', 'shield-times-square-bunker'],
  },
]);
