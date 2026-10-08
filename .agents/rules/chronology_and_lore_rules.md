# DIRECTIVA REGLAMENTARIA: CRONOLOGÍA IN-UNIVERSE Y REGLAS DE MAPEO (MCU & MULTIVERSE)

Esta regla complementa y refuerza `.agents/AGENTS.md`.

## 1. PRINCIPIO SAGRADO DE CLASIFICACIÓN TEMPORAL (PNC)
- La clasificación de eventos en `src/data/timelineData.ts` responde **exclusivamente a la fecha narrativa interna (in-universe)**.
- Se prohíbe taxativamente usar el año de transmisión por televisión o lanzamiento de cine cuando el episodio o escena ocurre en otra época del tiempo.
- Casos paradigmáticos que deben mantenerse siempre en sus fechas verdaderas:
  - `era-_c__1200_B_C_E__`: Los 4 Fantásticos en la Antigua Grecia (*Fantastic Four TAS S01E09-10*).
  - `era-_1888_`: El origen victoriano de Mr. Sinister en Londres (*X-Men TAS S05E09 "Descent"*).
  - `era-_1944_`: Wolverine y el Capitán América en la Segunda Guerra Mundial (*X-Men TAS S05E11 "Old Soldiers"*).
  - `era-_1945_`: Los 5 Campeones Olvidados y el vórtice dimensional (*Spider-Man TAS S05E02-06*).
  - `era-_1959_`: El atentado contra Charles Xavier de joven en Oxford (*X-Men TAS S04E01 "One Man's Worth"*).

## 2. PRESERVACIÓN DEL ORRERY CÓSMICO
- Nunca restringir `cosmicCategory` al seleccionar una locación desde el timeline; usar `'all'` para que todos los reinos sigan dibujándose.
- Todo nodo celeste debe elevarse con `hover:z-50` al interactuar con el mouse.
- Priorizar la búsqueda de palabras clave de locación antes de matchear por `eventId`.
