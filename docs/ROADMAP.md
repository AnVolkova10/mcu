# Roadmap

## v3

- [x] **Bloque 1 · Cimientos y timeline.** Modelo de datos nuevo (todo por ID), migración de los 220 eventos, títulos, auditoría de colores y personajes, validador, router por URL, sistema de diseño, timeline nuevo, paneles, buscador ⌘K, guardados y documentación.
- [x] **Bloque 2 · El resto de la app.** Películas y series con pósters de TMDB (solo en esa sección y en la ficha), personajes, gemas con su recorrido en el tiempo y archivo (progreso y cobertura de auditoría).
- [x] **Bloque 3 · Mapa v3.** Tierra (globo con MapLibre GL), Cosmos (escena 3D de reinos, galaxia y dimensiones) y Multiverso (realidades y ramas, estilo TVA). Los recorridos de gemas y personajes se ven en el globo y en el Cosmos.
- [x] **Pulido antes de publicar.** Footer fijo, Bebas Neue en los títulos, eras con nombre, fechas unificadas, dibujos en las gemas y mapa que muestra solo los hitos del universo elegido.
- [x] **Imágenes de personajes.** Una imagen por universo, enlazada desde las wikis de Fandom, y lista "Played by" con actores y voces desde TMDB.
- [x] **Objetos.** Ficha propia, subrayado por tipo en el texto, sección Objects, filtro en el timeline y recorrido en el mapa. Se llena con las auditorías.

## Contenido

Estado actual: `npm run content -- status` (28 producciones auditadas, 3 verificadas, 53 legacy de la v1).

**Lo que sigue.** Revisar una por una las 28 producciones auditadas en la v2 junto a quien mantiene el proyecto, con `docs/AUDIT_GUIDE.md`, y recién después seguir con lo demás. Van en el orden de la cronología de Aaron Perris (https://aaronperris.com/mcu/):

- [x] *Eyes of Wakanda* T1
- [x] *Spider-Noir* T1
- [x] *Captain America: The First Avenger*
- [ ] *Agent Carter* T1
- [ ] *Agent Carter* T2
- [ ] *X-Men: First Class*
- [ ] *X-Men Origins: Wolverine*
- [ ] *X-Men: Days of Future Past*
- [ ] *X-Men: Apocalypse*
- [ ] *Dark Phoenix*
- [ ] *X-Men: The Animated Series* T1
- [ ] *X-Men: The Animated Series* T2
- [ ] *X-Men: The Animated Series* T3
- [ ] *Iron Man: The Animated Series* T1
- [ ] *Fantastic Four: The Animated Series* T1
- [ ] *Spider-Man: The Animated Series* T1
- [ ] *Spider-Man: The Animated Series* T2
- [ ] *X-Men: The Animated Series* T4
- [ ] *Iron Man: The Animated Series* T2
- [ ] *Captain Marvel*
- [ ] *Spider-Man: The Animated Series* T3
- [ ] *X-Men: The Animated Series* T5
- [ ] *Fantastic Four: The Animated Series* T2
- [ ] *The Incredible Hulk* T1
- [ ] *Spider-Man: The Animated Series* T4
- [ ] *X-Men '97* T1
- [ ] *Spider-Man: The Animated Series* T5
- [ ] *The Incredible Hulk* T2

**Puntos compartidos del mapa.** 23 puntos exactos siguen repartidos entre 57 lugares. Se separan a medida que se audita cada producción: el validador lo exige en las verificadas y lo muestra como aviso en las demás.

**Fechas pendientes de auditoría.** `2,000 years ago` (la Mano, *The Defenders*) sigue en texto libre hasta que se audite esa producción. Las dos `Ancient times` del catálogo de gemas (Morag y Agamotto) son recorridos sin fecha en el canon.

**Por auditar (legacy).** Todo el MCU de la v1: Iron Man → Infinity War, los one-shots, las series de ABC, Netflix y Freeform.

**Por agregar.** Producciones que todavía no están en el archivo:

- *Legion* (FX), en curso.
- *Runaways* T1–T3 y la trama principal de *Ant-Man and the Wasp* (2018). Estaban en el HTML de 2021 y se perdieron en la migración de la v2; el texto original sigue en el historial de git (`git show 57d9a2f:index.html`).
- *Avengers: Endgame* y todo lo posterior a Infinity War (Fase 4 en adelante).
- *Spider-Man Unlimited* (Counter-Earth).

## Ideas

- **Más objetos.** Llegan con cada auditoría. Faltan los grandes del multiverso: el Cristal M'Kraan, los Diez Anillos, el Darkhold, el Libro de los Vishanti.
- **Imágenes de objetos.** Hoy no llevan. Las wikis tienen páginas de objetos con imagen, y valdrían los mismos límites que para los personajes.
- **Versión de cómic en la ficha.** Sumar la imagen del cómic como una versión más del personaje, con Comic Vine: necesita una clave gratuita, es solo para uso no comercial y pide un link de vuelta. Sin medir: conviene contar cuántos personajes cubre antes de decidir.

## Si la página se hace pública

Hoy es un proyecto personal, y estas decisiones lo asumen. Antes de difundirla, revisar:

- **El repo y la página ya son accesibles.** `AnVolkova10/mcu` figura como público y GitHub Pages publica `master`. Nadie los conoce, pero cualquiera con el link entra. Hacer privado el repo en una cuenta gratuita apaga la página.
- **Imágenes de personajes.** Son de Marvel y Disney, sin licencia de reutilización. Se enlazan desde Fandom y no se copian, pero eso no da derechos sobre ellas. No guardarlas en el repo: quedarían redistribuidas desde acá.
- **Términos de Fandom.** Según fuentes secundarias prohíben el acceso automatizado sin permiso, y `portraits:sync` y `research` usan su API pública. No pude leer el texto oficial: leerlo en https://www.fandom.com/terms-of-use, y pedir permiso o cambiar de fuente. No correr esos scripts en tareas automáticas.
- **Enlaces directos.** Dependen de Fandom y solo responden con referer. Con tráfico real se pueden bloquear. Si caen, se ven la foto del actor o las iniciales, pero se perdería casi todo el catálogo.
- **TMDB.** Es gratis para uso no comercial, con el logo y el aviso que ya están en Créditos. Publicidad, donaciones o cualquier ingreso piden licencia comercial.
- **Marca Marvel.** El logo del encabezado es una marca registrada, y el aviso de proyecto de fans no da permiso para usarlo. Conviene reemplazarlo por un nombre propio.
- **Fuente URW DIN.** Es una tipografía comercial y está en el repo. Confirmar la licencia o cambiarla por una libre. Bebas Neue no tiene ese problema (OFL).
- **Cronología original.** Pedirle permiso a Aaron Perris antes de difundir una versión basada en su trabajo.
- **marvel.com.** No usarlo como fuente: bloquea a los programas y los términos de Disney prohíben extraer contenido con scripts.
