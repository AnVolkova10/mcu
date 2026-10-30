// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('thor-ragnarok', [
  {
    id: 'surtur-destroys-asgard',
    date: { year: 2017, order: 110 },
    title: 'Thor unleashes Surtur to destroy Asgard and Hela',
    text: [
      "[Thor](thor) is imprisoned by the fire demon **Surtur**, who reveals that Thor's father Odin is no longer on Asgard. He explains that the realm will soon be destroyed during the prophesied **Ragnarök**, once Surtur unites his crown with the **Eternal Flame** that burns in Odin's vault. Thor frees himself, defeats Surtur and takes his crown, believing he has prevented Ragnarök.",
      "He returns to *Asgard* to find **Heimdall** gone and his estranged brother [Loki](loki) posing as [Odin](odin). After exposing Loki, Thor forces him to help find their father, and with directions from [Stephen Strange](doctor-strange) at the *Sanctum Sanctorum* in New York City, they locate Odin in Norway. Odin explains that he is dying, Ragnarök is imminent and his passing will free his firstborn child, **Hela**, goddes of Death, from a prison she was sealed in long ago. Hela was the leader of Asgard's armies, conquering the Nine Realms with Odin, but Odin imprisoned her and wrote her out of history after fearing that she had become too ambitious and powerful. [Odin](odin) dies as Thor and Loki look on, and Hela appears, destroying Thor's hammer ==Mjolnir==. She pursues the two as they attempt to flee through the Bifröst Bridge, forcing them out into space. Arriving in Asgard, she defeats its army and kills **the Warriors Three**. She then resurrects the ancient dead who once fought with her, including her giant wolf **Fenris**. Hela plans to use the Bifröst to expand Asgard's empire, but Heimdall sneaks in and takes the sword that controls the Bridge.",
      "Thor crash-lands on *Sakaar*, a garbage planet surrounded by wormholes. A slave trader designated [Scrapper 142](valkyrie) subdues him and sells him as a gladiator to Sakaar's ruler, **the Grandmaster**, with whom Loki has already ingratiated himself. Thor recognizes 142 as a **Valkyrie, one of a legendary force of female warriors who were killed fighting Hela eons ago**. Thor is forced to compete in the Grandmaster's Contest of Champions, facing his old friend [Hulk](hulk). He follows Thor to a Quinjet, where a recording of Natasha Romanoff causes him to transform back into [Bruce Banner](hulk) for the first time since Sokovia.",
      "The Grandmaster orders 142 and Loki to find Thor and Hulk, but the pair come to blows and Loki forces her to relive the deaths of her Valkyrie companions at the hands of Hela. Deciding to help Thor, she takes Loki captive. Unwilling to be left behind, Loki provides the group with the means to steal one of the Grandmaster's ships. Loki again attempts to betray his brother, but Thor anticipates this and leaves him behind, where **Korg, Miek**, and the gladiators soon find him. Thor, Banner, and 142 escape through a wormhole to Asgard, where Hela's forces are attacking Heimdall and the remaining Asgardians in pursuit of the sword that controls the Bifröst. Banner transforms into Hulk again, defeating **Fenris**, while Thor and 142 fight Hela. Loki and the gladiators arrive to rescue the citizens. Thor, facing Hela, **loses his right eye** and then has a vision of Odin that helps him realize **only Ragnarök can stop her**. He sends Loki to retrieve Surtur's crown and place it in the Eternal Flame, Loki also steals the [Tesseract](stone:space). Surtur is reborn and destroys ***Asgard***, killing **Hela** as the refugees flee.",
      "Aboard the Grandmaster's spaceship, Thor, now king, reconciles with Loki and **decides to take his people to Earth**. But they are intercepted by a *large spacecraft*. The overthrown Grandmaster is confronted by his former subjects.",
    ],
    deaths: [
      'odin',
      { name: 'the Warriors Three', presumed: false },
      { name: 'Fenris', presumed: false },
      { name: 'Hela', presumed: false },
    ],
    stones: ['space'],
  },
]);
