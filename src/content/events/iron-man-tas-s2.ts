// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-man-tas-s2', [
  {
    id: 'stark-disbands-force-works',
    date: { year: 1995, order: 60 },
    title: 'Tony Stark disbands Force Works and goes solo',
    text: [
      'Tired of team discord and security liabilities, [Tony Stark](tony-stark) disbands **Force Works**. Hawkeye and Scarlet Witch depart angrily, while Tony retreats into solitary engineering at Stark Enterprises. Unveiling his state-of-the-art **Modular Armor (Model 13)** alongside his witty, highly capable artificial intelligence operating system [H.O.M.E.R.](homer-ai), Tony operates solo. He confronts corporate rival Justin Hammer, unmasks Maggia heiress [Madame Masque (Whitney Frost)](madame-masque-whitney-frost), and foils a corrupt clone scheme targeting the legacy of his late father Howard Stark.',
    ],
    cast: ['war-machine'],
    locations: [
      'stark-enterprises-and-force-works-compound',
    ],
  },
  {
    id: 'iron-man-armor-wars',
    date: { year: 1995, order: 70 },
    title: 'Iron Man wages the Armor Wars over stolen tech',
    text: [
      "Tony Stark discovers that confidential schematics for his repulsor and armor technology have been stolen by Justin Hammer and sold on the global black market. Driven by guilt that his life's work is being weaponized, Iron Man wages a unilateral crusade known as **The Armor Wars**. Defying military and superhero sanctions, Stark hunts down and disables armored adversaries across the globe using negator packs—neutralizing The Beetle, Controller, Strikebreaker, Crimson Dynamo, and Titanium Man. With War Machine's support, Tony destroys Hammer's orbital fabrication mainframe, reclaiming dominion over his creations.",
    ],
    cast: ['tony-stark', 'war-machine', 'homer-ai'],
    locations: [
      'hammer-industries-orbital-production-facility',
    ],
  },
  {
    id: 'mandarin-heart-of-darkness',
    date: { year: 1995, order: 80 },
    title: "Stark overloads the Mandarin's Heart of Darkness",
    text: [
      'In the catastrophic finale of his world-conquering crusade, warlord [The Mandarin](mandarin) unleashes the primordial Makluan alien relic known as the Heart of Darkness. The entity generates a planetary anti-technological dampening pulse, instantly neutralizing all electrical grids, communications, combustion engines, and computerized weaponry across Earth, plunging human civilization into medieval darkness. Stripped of his high-tech armor functions, industrialist [Tony Stark](tony-stark) rallies [James Rhodes (War Machine)](war-machine) and Force Works.',
      "Equipping an archaic, non-electronic kinetic exoskeleton, Tony and his allies storm the Mandarin's mountain fortress in China. In a brutal hand-to-hand duel, Stark engages the Mandarin directly beneath the coils of alien dragon Fin Fang Foom and his Makluan brood. Overloading the Heart of Darkness with concentrated kinetic strikes, Stark shatters the anti-technology matrix, causing the energy vortex to sever the Mandarin's Ten Rings and scatter them across the planet, restoring global power and saving civilization.",
    ],
    locations: [
      'the-mandarins-mountain-citadel-and-dragon-chamber',
    ],
  },
]);
