// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('captain-america-the-winter-soldier', [
  {
    id: 'bucky-assassinates-starks',
    date: { year: 1991, order: 30 },
    title: 'Brainwashed Bucky assassinates Howard and María Stark',
    text: [
      "On Long Island, [Howard Stark](howard-stark) and **María Stark** died in a car accident, killed by *HYDRA*'s brainwashed [Bucky](bucky-barnes) send by **Zola**. They had ==a case of super-soldier serum.==",
    ],
    deaths: [
      'howard-stark',
      { name: 'María Stark', presumed: false },
    ],
    alsoIn: ['iron-man', 'captain-america-civil-war'],
  },
  {
    id: 'shield-falls-hydra-exposed',
    date: { year: 2014, order: 60 },
    title: 'S.H.I.E.L.D. falls as Rogers and Romanoff expose Hydra',
    text: [
      "[Steve Rogers](steve-rogers) works in Washington, D.C., for the *S.H.I.E.L.D*. During a mission alongside Agent [Natasha Romanoff](black-widow) and S.H.I.E.L.D.'s counter-terrorism *S.T.R.I.K.E. team*, led by **Agent Rumlow**, Rogers discovers Romanoff has another agenda: to **extract data from the ship's computers**. Returning to the Triskelion, Rogers confronts Director [Nick Fury](fury) and is briefed about **Project Insight: three Helicarriers linked to spy satellites, designed to preemptively eliminate threats**. Unable to decrypt Romanoff's data, Fury becomes suspicious about Insight and asks senior S.H.I.E.L.D. official and Secretary of Internal Security **Alexander Pierce** to delay the project. Rogers went to visit [Peggy](peggy-carter) who is old and has Alzheimer's disease. Roger also has a neighbor who reveals herself to be S.H.I.E.L.D. **Agent 13, Kate**.",
      "On his way to rendezvous with [Maria Hill](maria-hill), Fury is ambushed by assailants led by an assassin called the **Winter Soldier**. Escaping to Rogers' apartment, [Fury](fury) warns him that **S.H.I.E.L.D. is compromised**, but is killed by the Winter Soldier, before handing Rogers a **flash drive containing the ship's data**. Fury is pronounced dead during surgery, and Hill recovers the body. The next day, Pierce summons Rogers to the Triskelion. When Rogers withholds Fury's information, Pierce brands him a fugitive. Rogers meets with Romanoff.",
      `Using the data, they discover a secret S.H.I.E.L.D. bunker in New Jersey, where they activate a **supercomputer containing the preserved consciousness** of **Arnim Zola**. He informs them that since S.H.I.E.L.D. was founded after World War II, *Hydra* has infiltrated and **operated within its ranks,** sowing global chaos with the objective of making humanity surrender its freedom in exchange for security. The pair narrowly escape death when a S.H.I.E.L.D. missile destroys the bunker (**Zola** dies in the explosion) , and realize that **Pierce** is Hydra's leader within S.H.I.E.L.D. Rogers and Romanoff enlist the help of former USAF pararescueman [Sam Wilson](falcon) who has his powered "Falcon" wingpack. They capture S.H.I.E.L.D. agent **Jasper Sitwell**, a Hydra mole, forcing him to divulge that Zola developed a **data-mining algorithm that can identify individuals becoming threats** to Hydra. **Sitwell** is killed in an ambush by the Winter Soldier, whom Rogers recognizes as **Bucky Barnes**, who was actually captured and experimented upon after WWII.`,
      "Hill manages to extract the trio to a safehouse where [Fury](fury), who had faked his death, plans to sabotage the Helicarriers by replacing their controller chips. Fury arrives and forces Pierce to unlock S.H.I.E.L.D.'s database so that Romanoff can **leak classified information, exposing Hydra to the public**. Following a struggle, Fury kills **Pierce**. (*the Council* also dead). Rogers and Wilson storm two Helicarriers and replace the controller chips, but the Winter Soldier fights Rogers on the third. Rogers fends him off and replaces the final chip, allowing Hill to **take control and have the vessels destroy each other**. Rogers refuses to fight the Winter Soldier, he rescues the unconscious Rogers before disappearing into the woods.",
      "With S.H.I.E.L.D. in disarray, Romanoff appears before a Senate subcommittee, while Fury, under the cover of his apparent death, heads to Eastern Europe in pursuit of Hydra's remaining cells. Rogers and Wilson decide to find the Winter Soldier. [Maria Hill](maria-hill) starts working in *Stark Industries* and **Kate** in the *CIA.*",
      '**Baron Wolfgang von Strucker**, at a Hydra lab, proclaims that the "age of miracles" has begun as scientists examine an ==energy-filled scepter== and ==two test subjects: one with superhuman speed, the other with telekinetic powers== ([Pietro](pietro) & [Wanda](scarlet-witch)). [Barnes](bucky-barnes) visits his own memorial at the Smithsonian Institution.',
    ],
    deaths: [
      { character: 'fury', presumed: true },
      { name: 'Zola', presumed: false },
      { name: 'Sitwell', presumed: false },
      { name: 'Pierce', presumed: false },
      { name: 'the Council', presumed: false },
    ],
  },
]);
