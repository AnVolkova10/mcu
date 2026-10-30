// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-man-3', [
  {
    id: 'stark-rejects-killian',
    date: { year: 1999, order: 10 },
    title: 'Stark meets Maya Hansen and rejects Aldrich Killian',
    text: [
      "At a New Year's Eve party, [Tony Stark](tony-stark) meets scientist **Maya Hansen**, the inventor of an experimental regenerative treatment named **Extremis** that allows recovery from crippling injuries he also meets **Yinsen** a medic. Disabled scientist **Aldrich Killian** offers them a place in his company *Advanced Idea Mechanics*, but Stark rejects him.",
    ],
  },
  {
    id: 'killian-real-mandarin',
    date: { year: 2013, order: 10 },
    title: 'Stark confronts Aldrich Killian, the real Mandarin',
    text: [
      "[Stark](tony-stark) is suffering from PTSD and is having anxiety attacks due to his experiences during the alien invasion. Restless, he has built **42 new Iron Man suits** to cope with his insomnia, creating friction with his girlfriend **Pepper Potts**. A string of bombings claimed by a terrorist known as **the Mandarin** has left intelligence agencies bewildered by a lack of forensic evidence. Stark's security chief **Happy Hogan** is badly injured in one such attack and is put into a coma, prompting Stark to boldly issue a televised threat to the Mandarin, revealing his home address in the process. The Mandarin sends gunship helicopters to destroy Stark's home. **Maya Hansen**, who came to warn Stark, survives the attack with Potts.",
      `Stark escapes in an experimental new Iron Man suit, which his artificial intelligence **J.A.R.V.I.S.** pilots to rural Tennessee, following a flight plan from Stark's investigation into the Mandarin. Stark's new armor is not fully functional and lacks sufficient power to return to California, leaving the world to believe him dead. Stark investigates the remains of a local explosion bearing the hallmarks of a Mandarin attack. He discovers the "bombings" were triggered by soldiers subjected to **Extremis whose bodies explosively rejected the treatment**. These explosions were falsely attributed to a terrorist plot in order to cover up Extremis's flaws. **Killian** resurfaces and kidnaps Potts with assistance from Hansen. American intelligence agencies continue to search for the Mandarin's location, with [James Rhodes](war-machine) —the former War Machine, now re-branded as the [Iron Patriot](war-machine) —lured into a trap to steal his Iron-Man-like armor.`,
      "Stark traces **the Mandarin** and discovers that he is an English actor named **Trevor Slattery**. Killian, who appropriated Hansen's Extremis research as a cure for his own disability and expanded the program to include injured war veterans, reveals he is the real Mandarin. After capturing Stark, Killian reveals he has subjected Potts to Extremis in the hope Stark will help fix Extremis's flaws while trying to save her. When **Hansen** betrays Killian by threatening to jeopardize his operations, Killian kills her. Stark escapes and reunites with Rhodes, discovering that Killian intends to attack **President Ellis**.",
      "They trace Killian to an impounded damaged oil tanker where Killian intends to kill Ellis on live television. The **Vice President** will become a puppet leader, following Killian's orders, in exchange for Extremis to cure his young daughter's disability. On the platform, Stark works to save Potts, as Rhodes goes after the President. Stark **summons his remaining Iron Man suits**, controlled remotely by J.A.R.V.I.S., to provide air support. **Potts** falls to the platform below, causing Stark to believe her dead. Stark fights Killian, but finds himself cornered. **Potts**, whose Extremis powers allowed her to survive her fall, intervenes and kills Killian to save Stark. As a sign of his devotion to Potts, Stark orders J.A.R.V.I.S. to **remotely destroy all the Iron Man suits**.",
      "The Vice President is arrested, and Happy awakens from his coma. With Stark's help, Potts's **Extremis effects are stabilized**; and Stark promises to scale back his life as Iron Man, undergoing **surgery to remove the shrapnel** near his heart and throwing his **obsolete chest arc reactor into the sea**. He muses that, even without the technology, he will always be [Iron Man](tony-stark).",
      'Tony is telling all that happened to [Bruce](hulk) who wakes up without even hearing the story.',
    ],
    deaths: [
      { name: 'Hansen', presumed: false },
      { name: 'Potts', presumed: true },
    ],
  },
]);
