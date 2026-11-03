# Guía de auditoría

Receta para auditar una producción **junto a quien mantiene el proyecto**, una por vez. Salió de auditar *Eyes of Wakanda*, la primera.
Para cargar contenido nuevo o corregir un dato suelto, la receta es `docs/CONTENT_GUIDE.md`.

## 0. Qué significa cada estado

| Estado | Qué dice | Validador |
|---|---|---|
| `legacy` | Viene del HTML de 2021. Puede tener datos imperfectos | Solo que no rompa nada |
| `audited` | Cargada o revisada en la v2, con Gemini. **No está garantizada**: hay texto inventado | Estricto con fechas, lugares y personajes |
| `verified: true` | Pasó esta auditoría, con la aprobación de quien mantiene el proyecto | Además, en las series cada evento dice su `segment`, ningún lugar comparte su punto exacto del mapa, los objetos van enlazados y dicen dónde están |

Nunca pongas `verified: true` sin esa aprobación. El orden de trabajo está en `docs/ROADMAP.md`.

## 1. El flujo

**1. Investigá.**

```bash
npm run research -- spider-noir-s1
npm run research -- spider-noir-s1 "Ben Reilly" "Silvermane"    # suma páginas de personajes o lugares
```

Deja todo en `.research/<produccion>/`, que git ignora: lo que dice hoy el archivo (`archive.md`), TMDB (`tmdb.md`) y las wikis (`wiki/`). Corrélo a mano: va lento a propósito, y si lo repetís solo pide las páginas que faltan.

Las páginas de episodios tienen una sección `Items`. Pedí también la página de cada objeto: ahí aparecen conexiones entre episodios. En *Eyes of Wakanda*, el colgante que Nkati pierde en el E1 es el que B'Kai busca en el E2.

**2. Compará cada dato contra las fuentes** (sección 2). Partí de que el texto de la v2 puede estar inventado, aunque suene convincente. En *Eyes of Wakanda* no existían la lanza de Memnon, el laberinto de Cnosos ni la Valquiria de las Nornas.

**3. Presentá una ficha y esperá la aprobación.** No toques el repo antes. La ficha va en el chat y tiene, por evento: fecha y de dónde sale, lugares en orden, personajes, objetos y dónde está cada uno, muertes, qué cambia respecto de la v2 y qué es nuevo. Al final, las dudas numeradas, con tu recomendación en cada una. Si quien mantiene el proyecto no recuerda un dato, decidí con las fuentes, decí qué elegiste y anotá las dudas que queden sin resolver.

**4. Aplicá** lo aprobado, con las recetas de `docs/CONTENT_GUIDE.md`, y agregá `verified: true` en `productions.ts`.

**5. Sincronizá y mirá con tus ojos.**

```bash
npm run cast:sync
npm run portraits:sync
npm run content -- unused      # lo que quedó sin usar
npm run build
npm run lint
```

Abrí la app y mirá: la producción filtrada en el timeline, las fichas de cada personaje nuevo, los lugares en el mapa, un recorrido (*Trace this journey*). Revisá las imágenes una por una: las wikis reciclan páginas.

**6. Commit sin publicar.** Directo en `master`, sin ramas, con `content:`. El push publica la página: esperá a que te lo pidan.

## 2. Fuentes, en este orden

1. **Lo que dice la pantalla:** carteles de fecha y lugar, y diálogos. Los transcripts de las wikis son la mejor forma de leerlos. Scraps from the Loft tiene los de series recientes: se leen con la herramienta web, porque el sitio no deja entrar scripts.
2. **Wikipedia y fuentes oficiales**, incluidas entrevistas a quienes hicieron la obra. **marvel.com no se usa.**
3. **Wikis de fans.** Marvel Database y la wiki de cada universo se equivocan y se contradicen: citan el episodio cuando pueden, y esa cita es lo que vale.
4. **Recaps escena por escena,** como los de Laughing Place. Cuando no hay transcript son la mejor segunda fuente: cuentan lo que se ve, aunque no siempre identifican los objetos. Una reseña suelta no alcanza: una ponía el Reino del León en el mar Egeo, y las dos wikis dicen océano Índico.

**Solo lo que se ve.** Cuentan la obra y sus flashbacks. Los cómics no entran, aunque sean oficiales: son otro multiverso. Si una wiki cita un cómic o un libro, ese dato no vale, y una escena que solo existe ahí no es un evento.

Un dato que no aparece en dos fuentes es una duda y va a la ficha. Si la memoria de quien mantiene el proyecto choca con una fuente, gana esa memoria. **Nunca completes un dato con lo que suena probable.**

## 3. Reglas

### Eventos

- Un evento es un conjunto de sucesos unidos por tiempo, lugar o relato. Tiene que poder intercalarse con los eventos de otras producciones.
- **El tiempo manda.** Seis semanas no cortan un evento; seis meses sí. Una película que abarca años tiene muchos eventos.
- **Un viaje en el tiempo son eventos separados:** uno en cada época.
- **Los flashbacks se deciden caso por caso.** Si solo recuerdan algo que ya está contado, no suman. Si muestran algo que no está en otro lado, proponé un evento en la ficha.
- Un epílogo que cae en otro año es otro evento. Si otra producción lo muestra, usá `alsoIn`.
- **Una producción menor se condensa, sin perder información.** Si pasa todo en pocas semanas, juntá episodios en un mismo evento, con un párrafo por episodio. *Spider-Noir* tiene cuatro eventos en 1933 para sus ocho episodios, y conserva lugares, personajes y muertes.

### Fechas

- **Siempre exacta si se puede.** Si las fuentes sostienen un año, va sin `approx`, aunque no aparezca en un cartel: la muerte de Ruby es 1928 por su tumba y por "hace cinco años".
- Año dicho en pantalla: exacto, sin `approx`.
- Fecha relativa (*500 años después*): se calcula desde una fecha firme y lleva `approx: true`. Se escribe el año calculado, no un número redondo: *Eyes of Wakanda* tiene 1896 + 500 = `{ year: 2396, approx: true }`.

### Lugares

- **Todos los lugares del evento, en el orden del relato.** Así pasa por ellos *Trace this journey*.
- **Solo lo que la obra nombra.** Si dice *Creta*, el lugar es Creta, no el palacio de Cnosos.
- **Dos lugares nunca comparten un punto exacto.** Un pin compartido hace parecer que todo pasó en el mismo sitio. Si son lugares distintos, cada uno lleva su coordenada, aunque la ciudad sea la misma.
- **Si la obra solo nombra una zona,** agregá `approximate: true`: el mapa dibuja un anillo y avisa que no se conoce el lugar exacto. Poné el punto en el centro de esa zona.
- **Mirá en el mapa qué queda alrededor de cada pin nuevo.** Las Seychelles parecían un buen lugar para el Reino del León, en el océano Índico, pero ahí está Genosha. El validador solo detecta puntos idénticos: dos lugares casi iguales se ven como uno.
- **Un lugar que la obra no sitúa se deduce.** Elegí un punto verosímil, con `approximate: true`, y contalo en la ficha. Lo que no se sabe no puede terminar todo en el mismo punto.
- **Wakanda** está al norte del lago Turkana, según el *Marvel Atlas*.
- Un lugar fuera de la Tierra usa `node`. Si tiene una puerta conocida en la Tierra, esa puerta es otro lugar: *K'un-Lun* tiene `kun-lun-gate`, en el Himalaya, y `kun-lun-heavenly-gate` en el Cosmos.

### Personajes

- **Ficha para todo personaje con nombre que influye en la trama.** Un cameo se asocia con `cast` y no lleva ficha nueva.
- Personajes sin nombre o que no cambian nada: `**negrita**` o nada.
- Un mismo nombre puede ser dos personas: Jorani es Iron Fist, pero no la ficha `iron-fist`, que es Danny Rand. Enlazar la ficha equivocada también le suma un crédito falso.
- Revisá `status` contra la obra. En la v2 había muertes que nadie vio en pantalla.

### Objetos

- **Ficha solo para objetos con nombre que cambian la trama o pasan de mano, y que importan al multiverso.** Lo que solo pesa en su serie se queda en el texto, sin marca, aunque decida un capítulo. En *Spider-Noir* entra el traje, y no el antídoto ni los billetes marcados. Ante la duda, sin ficha.
- Tipos: `weapon`, `relic`, `technology`, `material` y `record`. Si ninguno encaja, elegí el más cercano y decilo en la ficha: el traje de la Spider es ropa y quedó como `weapon`.
- **El recorrido sale de `at`: solo los lugares donde estuvo.** Si solo se lo ve o se lo nombra, va con `at: []`. En 2396 el hacha aparece en el escáner, pero no está en Birnin Zana.
- **Seguí cada objeto hasta su última escena.** Si alguien se lo lleva, el recorrido sigue: el hacha de Adwa vuelve a su lugar en 1896 y reaparece en el Museo de Gran Bretaña en 2016.
- Los `==subrayados==` de la v2 se reemplazan: si es un objeto, se enlaza; si no, se saca la marca.

### Texto

- De 2 a 4 oraciones sobrias en inglés, por episodio si el evento junta varios. Solo lo que pasa, sin adjetivos épicos ni interpretación.
- Títulos en presente, hasta 70 caracteres, sin punto final.
- En las bios, las fechas antes de Cristo van como `BC`, igual que en la app.

### Contenido inventado

- Si se confirma que no existe y nada lo usa, se borra. `npm run content -- unused` lo muestra.
- Si existe pero está mal, **el `id` se queda igual y se corrige el resto**. `memnon-vibranium-spear` conserva su `id` aunque no haya lanza, y `hatut-zeraze` se muestra como *War Dogs*.

## 4. Checklist final

- [ ] Cada dato de la ficha salió de una fuente, y lo aprobó quien mantiene el proyecto.
- [ ] Cada evento tiene fecha, lugares en orden, sus personajes y sus objetos con `at`, y `segment` si es una serie.
- [ ] Ningún `id` existente cambió.
- [ ] Lo inventado se borró, y `npm run content -- unused` no muestra nada nuevo.
- [ ] Miraste en la app el timeline, las fichas, las imágenes, el mapa y un recorrido, en PC y en celu.
- [ ] `npm run build` y `npm run lint` terminan sin errores.
- [ ] `docs/ROADMAP.md` marca la producción como hecha.
- [ ] Commit en `master`, sin push.
