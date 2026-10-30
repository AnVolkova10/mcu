// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('thor', [
  {
    id: 'odin-routs-frost-giants',
    date: { year: 965 },
    title: 'Odin routs the Frost Giants in Tønsberg',
    text: [
      '[Odin](odin), king of Asgard, wages war against the *Frost Giants of Jotunheim* and their leader **Laufey**, to prevent them from conquering the nine realms, starting with Earth. The Asgardian warriors defeat the Frost Giants in Tønsberg, Norway, and seize the source of their power, ==the Casket of Ancient Winters.==',
    ],
    locations: ['ancient-norse-coastal-village', 'jotunheim-glacial-fortress'],
  },
  {
    id: 'odin-exiles-thor',
    date: { year: 2010, order: 20 },
    title: 'Odin exiles a powerless Thor to Earth',
    text: [
      "[Odin](odin) and **Frigga**'s son [Thor](thor) prepares to ascend to the throne of Asgard, but is interrupted when *Frost Giants* attempt to retrieve ==the Casket==. Against Odin's order, Thor travels to Jotunheim to confront **Laufey**, accompanied by his brother [Loki](loki), childhood friend **Sif** and the **Warriors Three: Volstagg, Fandral, and Hogun**. A battle ensues until Odin intervenes to save the Asgardians, destroying the fragile truce between the two races. Odin strips his son of his godly power and exiles him to Earth as a mortal, accompanied by his **hammer Mjölnir**, now protected by an enchantment that allows only the worthy to wield it. Thor lands in New Mexico, where astrophysicist **Dr. Jane Foster**, her assistant **Darcy Lewis**, and mentor **Dr. Erik Selvig** find him.",
    ],
  },
  {
    id: 'thor-proves-worthy',
    date: { year: 2010, order: 40 },
    title: "Thor proves worthy of Mjölnir and halts Loki's plan",
    text: [
      "[Coulson](coulson) forcibly acquires **Foster** 's **data about the wormhole**. Thor seeks to retrieve Mjolnir from the facility that *S.H.I.E.L.D.* has constructed defended by [Hawkeye](hawkeye), but he finds himself unable to lift it and is captured. With **Selvig** 's help, he is freed and resigns himself to exile on Earth as he develops a romance with Foster.",
      `[Loki](loki) discovers that he is **Laufey**'s biological son. Loki confronts [Odin](odin), who wearily falls into the deep **"Odinsleep"** to recover his strength. Loki takes the throne in Odin's stead and offers Laufey the chance to kill Odin and retrieve the Casket. **Sif** and **the Warriors Three**, convince **Heimdall**, gatekeeper of the ==Bifröst== —the means of traveling between worlds—to allow them passage to Earth. Loki sends **the Destroyer** to pursue them and kill Thor. Thor proves himself worthy by his sacrifice in battle to wield Mjölnir. The hammer returns to him, restoring his powers and enabling him to defeat **the Destroyer**. Kissing Foster goodbye and vowing to return, he leaves with his fellow Asgardians to confront Loki.`,
      "Loki betrays and kills **Laufey**, revealing his true plan to use Laufey's attempt on Odin's life as an excuse to destroy Jotunheim with the Bifröst Bridge, thus proving himself worthy to his adoptive father. Thor arrives and fights Loki before destroying the **Bifröst Bridge** to stop Loki's plan, stranding himself in Asgard. Odin awakens and prevents the brothers from falling into the **abyss** created in the wake of the bridge's destruction, but [Loki](loki) apparently commits suicide by allowing himself to fall when Odin rejects his pleas for approval. Thor makes amends with Odin, admitting he is not ready to be king; meanwhile, on Earth, Foster and her team search for a way to **open a portal** to Asgard.",
      'Selvig is taken to a S.H.I.E.L.D. facility, where [Nick Fury](fury) opens a briefcase and asks him to study a mysterious cube-shaped object,([Tesseract](stone:space)) which Fury says may hold untold power. An invisible [Loki](loki) prompts **Selvig** to agree, and he does.',
    ],
    deaths: [
      { name: 'Laufey', presumed: false },
      { character: 'loki', presumed: true },
    ],
    stones: ['space'],
  },
]);
