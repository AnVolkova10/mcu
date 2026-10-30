# Roadmap

## v3 (rama `v3`)

- [x] **Bloque 1 · Cimientos y timeline.** Modelo de datos nuevo (todo por ID), migración de los 220 eventos, títulos, auditoría de colores y personajes, validador, router por URL, sistema de diseño, timeline nuevo, paneles, buscador ⌘K, guardados y documentación.
- [ ] **Bloque 2 · El resto de la app.** Películas y series (con pósters de TMDB, solo en esa sección y en la ficha), personajes, gemas y archivo (progreso y estado de auditoría).
- [ ] **Bloque 3 · Mapa v3.** Tierra (globo con MapLibre GL), Cosmos (escena 3D de reinos y dimensiones) y Multiverso (realidades y ramas, estilo TVA).

## Contenido

Estado actual: `npm run content -- status` (28 producciones auditadas, 53 legacy de la v1).

**Por auditar (legacy).** Todo el MCU de la v1: Iron Man → Infinity War, los one-shots, las series de ABC, Netflix y Freeform.

**Por agregar.** Producciones que todavía no están en el archivo:

- *Legion* (FX), en curso.
- *Runaways* T1–T3 y la trama principal de *Ant-Man and the Wasp* (2018). Estaban en el HTML de 2021 y se perdieron en la migración de la v2; el texto original sigue en el historial de git (`git show 57d9a2f:index.html`).
- *Avengers: Endgame* y todo lo posterior a Infinity War (Fase 4 en adelante).
- *Spider-Man Unlimited* (Counter-Earth).

## Ideas

- **Artefactos legendarios.** Repetir la mecánica de las Gemas para reliquias del multiverso: el Cristal M'Kraan, los Diez Anillos, el Darkhold, el Libro de los Vishanti.
- **Recorrido de un personaje en el mapa.** Ver su viaje en el globo y en el Cosmos, como las gemas.
