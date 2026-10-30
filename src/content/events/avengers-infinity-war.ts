// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('avengers-infinity-war', [
  {
    id: 'thanos-snap-erases-half',
    date: { year: 2018, order: 30 },
    title: 'Thanos erases half of all life with a snap',
    text: [
      "Having acquired the [Power Stone](stone:power) from the planet Xandar, [Thanos](thanos) and his lieutenants: **Ebony Maw, Cull Obsidian, Proxima Midnight, and Corvus Glaive**, intercept the spaceship carrying the survivors of **Asgard's destruction**. After subduing [Thor](thor), Thanos extracts the [Space Stone](stone:space) from the Tesseract, overpowers the [Hulk](hulk), and kills [Loki](loki). Thanos also kills **Heimdall** after he sends Hulk to Earth using the Bifröst. Thanos and his lieutenants leave, destroying the ship.",
      "Hulk crash-lands in the Sanctum Sanctorum in New York City, reverting to the form of Bruce Banner. He warns [Stephen Strange](doctor-strange) and **Wong** about Thanos' plan to destroy half of all life in the universe, and they recruit [Tony Stark](tony-stark). Maw and Obsidian arrive to retrieve the [Time Stone](stone:time) from Strange, drawing [Peter Parker](spider-man)'s attention. Maw is unable to take the Time Stone due to an enchantment and captures Strange. Stark and Parker sneak aboard Maw's spaceship while Wong stays behind to guard the Sanctum.",
      "[Star Lord](star-lord), [Gamora](gamora), [Rocket](rocket), [Groot](groot) and [Drax](drax) respond to a distress call from the Asgardian ship and rescue Thor. Thor surmises that Thanos is going after the [Reality Stone](stone:reality), which **Taneleer Tivan** possesses on Knowhere. He travels with Rocket and Groot to Nidavellir to enlist the aid of the dwarf king **Eitri** in **creating the battle-axe Stormbreaker**. Peter Quill, Gamora, Drax, and **Mantis** travel to Knowhere, and they find Thanos possessing the Reality Stone. Thanos kidnaps Gamora, who discloses the [Soul Stone](stone:soul)'s location to save [Nebula](nebula) from torture. On Vormir, the Stone's keeper, **Red Skull**, tells Thanos that he can only acquire it by sacrificing someone he loves. Thanos kills [Gamora](gamora), earning the Stone.",
      "In Edinburgh, Midnight and Glaive ambush [Wanda Maximoff](scarlet-witch) and [Vision](vision) to retrieve the [Mind Stone](stone:mind) in Vision's forehead. [Steve Rogers](steve-rogers), [Natasha Romanoff](black-widow), and [Sam Wilson](falcon) rescue them and they take shelter with [James Rhodes](war-machine) and Banner at the Avengers Compound. Vision asks Maximoff to destroy him and the Mind Stone to keep Thanos from retrieving it, but Maximoff refuses. Rogers suggests they travel to *Wakanda*, which he believes has the resources to remove the Stone without killing Vision.",
      "Nebula escapes captivity and asks the remaining Guardians to meet her on Thanos' destroyed homeworld, Titan. Stark and Parker kill **Maw** and rescue Strange. They meet Quill, Drax and Mantis after the three Guardians board Maw's ship, and they all land on Titan. Strange uses the Time Stone to view millions of possible futures, **seeing only one in which the Avengers win.** The group formulates a plan to subdue Thanos and remove the ==Infinity Gauntlet==, which he uses to safely house the Stones. Thanos appears and justifies his plans as necessary to guarantee the survival of a universe threatened by overpopulation. Nebula arrives soon after and helps the others subdue Thanos, but then deduces that Thanos has killed Gamora. Enraged, Quill attacks Thanos, inadvertently allowing him to break the group's hold and overpower them. Thanos grievously wounds Stark, but Strange offers the Time Stone in exchange for sparing Stark's life.",
      "In Wakanda, Rogers reunites with [Bucky Barnes](bucky-barnes) before Thanos' army invades. The Avengers, along with [T'Challa](black-panther) and the Wakandan forces, mount a defense while [Shuri](shuri) works to extract the Mind Stone from Vision. Unable to summon the Hulk after losing his fight with Thanos, Banner fights in Stark's Hulkbuster armor. Thor, Rocket, and Groot arrive to reinforce the Avengers and together they kill **Midnight, Obsidian, and Glaive**. Although Thanos' army is routed, Shuri is unable to complete the extraction before Thanos himself arrives on the field. Maximoff destroys the [Mind Stone](stone:mind) and Vision, but Thanos uses the [Time Stone](stone:time) to reverse her actions and rips the repaired [Mind Stone](stone:mind) from [Vision](vision) 's forehead, killing him. Thor severely wounds Thanos with Stormbreaker, but Thanos activates the completed ==Gauntlet by snapping his fingers before teleporting away.==",
      "==Half of all life across the universe disintegrates,== including [Barnes](bucky-barnes), [T'Challa](black-panther), [Groot](groot), [Maximoff](scarlet-witch), [Wilson](falcon), **Mantis**, [Drax](drax), [Quill](star-lord), [Strange](doctor-strange), [Parker](spider-man), [Maria Hill](maria-hill), and [Nick Fury](fury), though Fury is able to send an emergency signal on a modified pager. Stark and Nebula remain stranded on Titan while Banner, **M'Baku**, [Okoye](okoye), Rhodes, Rocket, Rogers, Romanoff, and Thor are left on the Wakandan battlefield. Meanwhile, Thanos watches a sunrise on a remote planet.",
    ],
    deaths: [
      { character: 'loki', presumed: true },
      { name: 'Heimdall', presumed: false },
      { name: 'Taneleer Tivan', presumed: true },
      'gamora',
      { name: 'Maw', presumed: false },
      { name: 'Midnight, Obsidian, and Glaive', presumed: false },
      { character: 'vision', presumed: true },
      { character: 'bucky-barnes', presumed: true },
      { character: 'black-panther', presumed: true },
      { character: 'groot', presumed: true },
      { character: 'scarlet-witch', presumed: true },
      { character: 'falcon', presumed: true },
      { name: 'Mantis', presumed: true },
      { character: 'drax', presumed: true },
      { character: 'star-lord', presumed: true },
      { character: 'doctor-strange', presumed: true },
      { character: 'spider-man', presumed: true },
      { character: 'maria-hill', presumed: true },
      { character: 'fury', presumed: true },
      'mantis',
    ],
    stones: ['power', 'space', 'time', 'reality', 'soul', 'mind'],
  },
]);
