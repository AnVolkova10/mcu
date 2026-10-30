// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-man-2', [
  {
    id: 'stark-vanko-palladium',
    date: { year: 2010, order: 10 },
    title: 'Tony Stark overcomes Ivan Vanko and palladium poisoning',
    text: [
      "In Russia **Ivan Vanko**, whose father, **Anton Vanko**, a former *Stark Industries* employee, has just died, begins building a **miniature arc reactor** similar to Stark's. Six months later, [Stark](tony-stark) uses his Iron Man suit for peaceful means, resisting government pressure to **sell his designs**. Later, Stark learns that the **palladium core** is slowly poisoning him, and he cannot find a substitute. Stark appoints his personal assistant **Pepper Potts** as **CEO** of Stark Industries and hires Stark employee [Natalie Rushman](black-widow) to replace her as his personal assistant. Stark competes in the Monaco Historic Grand Prix, where he is attacked in the middle of the race by Vanko. Stark dons his armor and defeats Vanko.",
      `Stark's rival, **Justin Hammer**, fakes Vanko's death and asks him to build a line of **armored suits**. Stark's best friend, [James Rhodes](war-machine) confiscates **one of the armors for the U.S. Air Force.** [Nick Fury](fury), director of *S.H.I.E.L.D.*, approaches Stark, revealing that "Rushman" is Agent [Natasha Romanoff](black-widow) and that Howard Stark was a S.H.I.E.L.D. founder. Fury gives Stark some of his **father's old material**. Tony discovers a hidden message, with the aid of his A.I., **J.A.R.V.I.S.**, he **synthesizes a new element, ending his palladium dependency** (with the help of **Captain America's shield prototype** ).`,
      "At the Expo, Hammer unveils Vanko's armored drones, led by Rhodes in a **heavily weaponized version of the prototype armor**. Stark arrives to warn Rhodes, but Vanko takes remote control of all the drones and Rhodes' armor and attacks Stark. Hammer soon gets arrested for breaking Vanko out of prison while Romanoff and Stark's bodyguard Happy Hogan go after Vanko at Hammer's factory. **Vanko** commits suicide by blowing up his suit, along with the defeated drones.",
      'At a debriefing, Fury informs Stark that because of his difficult personality, S.H.I.E.L.D. intends to use him only as a **consultant**.',
    ],
    deaths: [
      { name: 'Anton Vanko', presumed: false },
      { name: 'Vanko', presumed: false },
    ],
  },
]);
