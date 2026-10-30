// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('stark-expo-1974', [
  {
    id: 'howard-encodes-element',
    date: { year: 1974 },
    title: 'Howard Stark encodes a new element for Tony',
    text: [
      "At the **Stark Expo 1974** in Flushing Meadows, Queens, [Howard Stark](howard-stark) unveils the monumental architectural diorama for the *City of the Future*. Limited by the technology of his era, Howard secretly encodes the atomic lattice structure of a revolutionary synthetic element directly into the park's physical layout as a hidden scientific blueprint for his son, **Tony Stark**.",
      'In a classified archival film reel preserved in the ==S.H.I.E.L.D. Archives== (*Howard Stark S.H.I.E.L.D. Classified Files*), Howard halts filming the public Expo broadcast to record a profound, emotional message across time to Tony: *"What is and always will be my greatest creation... is you."* Howard securely locks away the film reel alongside classified Arc Reactor blueprints and S.H.I.E.L.D. historical dossiers for future discovery.',
    ],
    locations: [
      { id: 'flushing-meadows-corona-park', note: 'Stark Expo Pavilion' },
      'stark-industries-research-and-shield-archive',
    ],
    alsoIn: ['iron-man-2'],
  },
]);
