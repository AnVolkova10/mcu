// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('daredevil-s1', [
  {
    id: 'toxic-waste-blinds-matt',
    date: { year: 1991, order: 10 },
    title: 'Toxic waste blinds young Matt but heightens his senses',
    text: [
      'Young [Matt](daredevil) gets hit with a truck filled with hazardous waste **blinding him while simultaneously enhancing his remaining senses to superhuman levels.**',
    ],
  },
  {
    id: 'murdock-topples-kingpin',
    date: { year: 2015, order: 10 },
    title: 'Matt Murdock topples Kingpin Wilson Fisk',
    text: [
      '[Matt Murdock](daredevil) at the age of nine was hit with a truck filled with hazardous waste **blinding him while simultaneously enhancing his remaining senses to superhuman levels**. After his father died, a man named **Stick** taught him how to manipulate his powers and training him in Martial Arts. He went to college and befriended **Foggy Nelson**. The two of them found *the Nelson and Murdock law firm*. **Wilson Fisk** had a traumatic, unstable childhood. Wilson kills his father with a hammer to death. Even well into his adult years, his father’s dark lessons in cruelty, power, respect, and control helped mold him into the man he is today, **the Kingpin**.',
      "==After the Battle of New York, Hell's Kitchen is struggling to recover.== Crime is in an all-time high due to the rise of a crime syndicate: utilizing drugs, weapons, and gangs to de-value the local property; to remake them into new crime-controlled buildings. Their very first client, **Karen Page**, grateful for the duo’s save, decides to work with them. Murdock continued his vigilantism and Wilson Fisk, falls in love to art curator, **Vanessa Marianna**. Meanwhile, Nelson and Page had been secretly working with **Ben Urich** to build a credible case against Fisk. **Claire** is a nurse who's been helping Matt, knowing his indentity, Foggy then too.",
      "After gathering enough credible evidence against Fisk and the death of the Yakuza mafia's leader **Nobu**, Murdock and the police was able to charge Fisk for criminal activity and was arrested. Finally donning the Daredevil costume, Murdock personally takes on Fisk as Daredevil, and wins after a fairly difficult fight. **Fisk** is now arrested and in jail; Marianna escaped and left the city. Murdock continued on his guardianship and vigilantism over the city as the [Daredevil](daredevil).",
    ],
    deaths: [
      { name: 'Ben Urich', presumed: false },
      { name: 'Nobu', presumed: true },
    ],
  },
]);
