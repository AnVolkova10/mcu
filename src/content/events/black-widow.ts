// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('black-widow', [
  {
    id: 'natasha-yelena-red-room',
    date: { year: 1995, order: 20 },
    title: 'Natasha and Yelena leave Ohio for the Red Room',
    text: [
      "Young [Natasha Romanoff](black-widow) and **Yelena Belova** are whisked away by their surrogate parents, **Alexei Shostakov**, originally Russia's Captain America known as the Red Guardian, and former Black Widow **Melina Vostokoff** from their home in Ohio. As their mission ends, Romanoff and Belova are put through *the Red Room* for further training.",
    ],
  },
  {
    id: 'natasha-yelena-red-room-2',
    date: { year: 2016, order: 60 },
    title: "Natasha and Yelena dismantle Dreykov's Red Room",
    text: [
      "[Natasha Romanoff](black-widow) is a fugitive from the government for violating the Sokovia Accords. Elsewhere, **Yelena** is still working for *the Red Room*, where she kills a former Black Widow, only to come in contact with a substance called Red Dust that removes the Red Room's control of her. She sends the antidote to Romanoff's safehouse in the hopes that she will return to help her. As Romanoff unknowingly drives off with the antidote, she is attacked by **Taskmaster**, who is after the Red Dust. Romanoff manages to evade Taskmaster and learns that the Dust came from Belova. The two reunite in Budapest, but are then attacked by Black Widows. While escaping, Romanoff learns the Red Room is still active and that its leader, **Dreykov**, is still alive. She defected SHIELD for the killing of Dreykov. After detonating a building with him and his young daughter Antonia in it (an act that has haunted her), both were presumed dead.",
      'Natasha and Yelena break **Alexei** out of prison to learn where Dreykov is and he tells them that they need to speak with **Melina** who has been living on a farm in Russia using mind control on pigs. Belova reveals that while they were not a real family, she still wanted to believe that they were so, while Shostakov and Vostokoff admit that they too wished they were a real family. Vostokoff gives away their location to Dreykov whose agents arrive and take them away to the Red Room, which is located on an aerial base.',
      "Romanoff learns that **Taskmaster** is Antonia, who had suffered damage so severe that Dreykov was forced to put a chip in her head to help her, turning her into the perfect soldier. Romanoff also discovers that she cannot harm Dreykov due to a pheromone lock in him. After goading Dreykov into punching her in the face, Romanoff intentionally severs a nerve in her nasal passage to negate the pheromone and allow herself to attack Dreykov. Belova creates a Red Dust bomb that releases the Widows from mind control. Romanoff gets into the control desk and copies the locations of the other Widows worldwide to a portable drive just as the ship begins to explode and fall. Before leaving the control room, she picks up two vials of Red Dust that survived Belova's bomb. Vostokoff and Shostakov are forced to escape the ship via aircraft just as Belova takes out **Dreykov**'s escape ship, killing him.",
      'Romanoff gives Belova a parachute as she and Antonia have one final battle through the sky before safely landing on the ground. Romanoff uses one vial of Red Dust on Antonia, freeing her from servitude. The rest of the Widows arrive as Belova, Vostokoff, and Shostakov say goodbye to Romanoff, with Belova giving her her vest to remember her by and Romanoff giving Belova the last Red Dust vial and the portable drive, telling her to find and free the other Widows. As they leave along with a recovering Antonia, Romanoff awaits the arrival of **Ross** and his men.',
      'Two weeks later, Romanoff, now sporting blond hair. She rides off to free the detained Avengers from the Raft with [Rogers](steve-rogers)',
    ],
    deaths: [
      { name: 'Dreykov', presumed: false },
    ],
  },
  {
    id: 'valentina-yelena-barton',
    date: { year: 2021 },
    title: 'Valentina assigns Yelena to take down Clint Barton',
    text: [
      `After [Romanoff](black-widow)'s death, **Yelena** encounters **Contessa Valentina Allegra de Fontaine**, now her employer, at Romanoff's grave, and receives her next assignment: take down [Clint Barton](hawkeye), the man "responsible" for Romanoff's death.`,
    ],
    deaths: [
      { character: 'black-widow', presumed: true },
    ],
  },
]);
