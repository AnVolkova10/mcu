# Roadmap

## v3 (rama `v3`)

- [x] **Bloque 1 · Cimientos y timeline.** Modelo de datos nuevo (todo por ID), migración de los 220 eventos, títulos, auditoría de colores y personajes, validador, router por URL, sistema de diseño, timeline nuevo, paneles, buscador ⌘K, guardados y documentación.
- [x] **Bloque 2 · El resto de la app.** Películas y series con pósters de TMDB (solo en esa sección y en la ficha), personajes, gemas con su recorrido en el tiempo y archivo (progreso y cobertura de auditoría).
- [x] **Bloque 3 · Mapa v3.** Tierra (globo con MapLibre GL), Cosmos (escena 3D de reinos, galaxia y dimensiones) y Multiverso (realidades y ramas, estilo TVA). Los recorridos de gemas y personajes se ven en el globo y en el Cosmos.
- [x] **Pulido antes de publicar.** Footer fijo, Bebas Neue en los títulos, eras con nombre, fechas unificadas, fotos de actores teñidas, dibujos en las gemas y mapa que muestra solo los hitos del universo elegido.

## Contenido

Estado actual: `npm run content -- status` (28 producciones auditadas, 53 legacy de la v1).

**Lo que sigue.** Con la v3 publicada, revisar una por una las 28 producciones auditadas en la v2 junto a quien mantiene el proyecto, y recién después seguir con lo demás.

**Fechas pendientes de auditoría.** `2,000 years ago` (la Mano, *The Defenders*) sigue en texto libre hasta que se audite esa producción. Las dos `Ancient times` del catálogo de gemas (Morag y Agamotto) son recorridos sin fecha en el canon.

**Por auditar (legacy).** Todo el MCU de la v1: Iron Man → Infinity War, los one-shots, las series de ABC, Netflix y Freeform.

**Por agregar.** Producciones que todavía no están en el archivo:

- *Legion* (FX), en curso.
- *Runaways* T1–T3 y la trama principal de *Ant-Man and the Wasp* (2018). Estaban en el HTML de 2021 y se perdieron en la migración de la v2; el texto original sigue en el historial de git (`git show 57d9a2f:index.html`).
- *Avengers: Endgame* y todo lo posterior a Infinity War (Fase 4 en adelante).
- *Spider-Man Unlimited* (Counter-Earth).

## Ideas

- **Artefactos legendarios.** Repetir la mecánica de las Gemas para reliquias del multiverso: el Cristal M'Kraan, los Diez Anillos, el Darkhold, el Libro de los Vishanti.
- **Imágenes de personajes desde Marvel Database.** Complementa las fotos de TMDB, que tienen actores: la wiki tiene al personaje en cada universo, incluidos los animados, que hoy siguen con iniciales. Va en `photos.ts` como otra fuente, sin tocar las fotos actuales. Lo que hay que resolver antes: las imágenes son de Marvel y no tienen licencia de reutilización, enlazarlas directo se puede romper, hay que mapear a mano la página de cada personaje (las designaciones cambian, ej. Earth-534834 para Fantastic Four) y revisar encuadres, porque son desparejos.
