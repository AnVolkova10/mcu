// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('luke-cage-s1', [
  {
    id: 'carl-lucas-experiment',
    date: { year: 2014, order: 30 },
    title: 'Sabotaged experiment gives Carl Lucas his abilities',
    text: [
      '[Carl Lucas](luke-cage) is framed for a crime he didn’t commit and is incarcerated at Seagate Prison. Develops an attraction to psychologist **Reva Connors**; is forced to engage in illegal ring fights and crosses paths with **Shades**, also an inmate then. He gets mortally injured and Reva asks Dr. Noah **Burstein**, a scientist conducting illegal experimental procedures on the inmates in exchange for reduced sentences, to try and save Lucas with a procedure that causes rapid healing. **The experimient is sabotaged and the resulting accident gives Lucas his abilities.** He escapes and meets up with Connors, starting a new life with her under the name "[Luke Cage](luke-cage)".',
    ],
  },
  {
    id: 'cage-battles-diamondback',
    date: { year: 2015, order: 80 },
    title: 'Luke Cage battles his half-brother Diamondback',
    text: [
      `[Luke Cage](luke-cage) keeps a low profile as a sweeper at ex-gangster **Henry "Pop" Hunter**'s barbershop, and as a dishwasher at crime boss **Cornell "Cottonmouth" Stokes**' nightclub, Harlem's Paradise. NYPD detectives **Misty Knight** and **Rafael Scarfe** investigate a crime and impound the *Hammer Industries* weapons that Stokes was selling. With help from **"Shades" Alvarez**, who works for Stokes' supplier **Diamondback** and also the suppor oft his cousin **Mariah Dillard**, a councilwoman. They want to own Harlem. Stokes men kill **Pop** accidentally. Stokes goes to the restaurant where Cage is living and fires a missile at the building. Cage pulls himself and his landlady out of the rubble, and **reveals his abilities and name to the media.**`,
      "**Claire Temple** arrives in Harlem to visit her mother. Shades reveals to Stokes a new type of weapon, ==the Judas bullet, built from alien metal and based on a prototype stolen from Hammer Industries==, that could kill Cage. Dillard kills **Stokes**, and Shades helps her frame Cage for the murder. With Stokes unable to afford it, Diamondback use a Judas bullet to kill Cage himself in exchange for control of Harlem. Claire meets up with Cage. **Stryker** is Diamondback, Luke's half-brother. Seeking revenge confronts Cage on a sidestreet.",
      "Claire convinces Cage to get **Burstein's** help, and they find the doctor living in hiding. He places Cage in **acid that should soften his skin** and allow them to remove the shrapnel. He and Claire look through the files on him and learn that **Reva** had known about Seagates's fights, and was assessing Cage with the intention of putting him through Burstein's procedure as a test subject. Stryker appears wearing a **Hammer's powered suit** which allows him to match Cage's strength and invulnerability. Cage tasks Knight to go after Dillard and Alvarez while he engages Stryker. Federal marshals arrest Cage for his escape from Seagate. Claire kisses him before he leaves, and promises to call a [good lawyer](daredevil) that she knows. A friend finds the **files to clear Cage's name** in the barbershop. Dillard re-opens Harlem's Paradise with Alvarez by her side, and Knight watching them. Claire considers taking up self-defense lessons. A hospitalized Stryker is visited by Burstein.",
    ],
    deaths: [
      { name: 'Pop', presumed: false },
      { name: 'Stokes', presumed: false },
    ],
  },
]);
