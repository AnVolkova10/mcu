# Guía de contenido

Receta paso a paso para **agregar una película o serie nueva** y para **corregir una de la v1**. Para auditar una producción con quien mantiene el proyecto, seguí `docs/AUDIT_GUIDE.md`, que usa estas recetas.
Está escrita para que cualquier agente la siga sin conocer el proyecto. Seguí los pasos en orden y no te saltees el último (validar).

---

## 0. Reglas de oro

1. **La fecha es la de adentro de la historia**, nunca la de estreno. Un flashback de 1945 en una película de 2011 va en 1945. Si la obra no lo dice claro, preguntá a quien mantiene el proyecto.
2. **Todo se conecta por ID.** Personajes, lugares, producciones y gemas tienen un `id` (texto en minúsculas con guiones, ej. `steve-rogers`). Antes de crear algo, buscá si ya existe:
   ```bash
   npm run content -- find "steve"
   ```
3. **Nunca cambies un `id` que ya existe.** Si un nombre está mal, corregí el `name`, no el `id`.
4. **No inventes datos de canon.** Si dudás de una fecha, un lugar o quién muere, preguntá.
5. **Al final, siempre:** `npm run validate` y después `npm run build`. Si hay errores, arreglalos (abajo dice cómo).

## 1. Dónde está cada cosa

| Qué | Archivo |
|---|---|
| Eventos de una producción | `src/content/events/<id-de-la-produccion>.ts` (uno por película o temporada) |
| Películas, temporadas, especiales | `src/content/catalog/productions.ts` |
| Series (agrupan temporadas) | `src/content/catalog/series.ts` |
| Personajes | `src/content/catalog/characters.ts` (orden alfabético por id) |
| Imágenes y elenco de personajes | `src/content/catalog/portraits.ts` y `cast.ts` (los generan los scripts del paso 13, no se editan a mano) |
| Facciones y equipos | `src/content/catalog/factions.ts` |
| Lugares | `src/content/catalog/locations.ts` (orden alfabético por id) |
| Universos y ramas | `src/content/catalog/universes.ts` |
| Mundos del mapa Cosmos | `src/content/catalog/cosmos.ts` |
| Gemas del Infinito y su recorrido | `src/content/catalog/stones.ts` |
| Objetos y sus tipos | `src/content/catalog/objects.ts` (orden alfabético por id) |

Los archivos de `events/` se cargan solos: **no hay que registrarlos en ningún índice.**

---

## 2. Receta A — Agregar una película o serie nueva

Ejemplo: la temporada 1 de **Legion** (FX, 2017).

### Paso 1 · Elegir el ID de la producción

- Película: el título en minúsculas con guiones. `Thor: Ragnarok` → `thor-ragnarok`.
- Temporada: la serie + `-s` + número. Legion temporada 1 → `legion-s1`.
- Verificá que no exista: `npm run content -- find "legion"`.

### Paso 2 · El universo

Abrí `src/content/catalog/universes.ts` y elegí el universo donde pasa la historia (`earth-616`, `earth-10005`, `earth-92131`, `earth-62533`).

Si la producción es una realidad que todavía no está (Legion, por ejemplo, no es claramente ninguna de las cuatro), **preguntá a quien mantiene el proyecto qué universo usar.** Si hay que crear uno, agregalo así:

```ts
  'earth-xxxxx': {
    name: 'Earth-XXXXX',          // designación oficial (Marvel Database); si no tiene, preguntá
    label: 'Nombre corto',        // lo que se ve en los botones, ej. 'Fox X-Men'
    short: 'XXXXX',               // texto mínimo de la insignia
    color: '#14b8a6',             // bien distinto de los demás universos
    description: 'Una oración que explique qué realidad es.',
  },
```

El universo nuevo aparece solo en el mapa Multiverso, pero en un carril por defecto que se pisa con Noir. Para ordenarlo, sumale una altura en `LANES`, en `src/features/map/multiverse/strands.ts`. Con las ramas pasa lo mismo: aparecen solas, y `BRANCH_LANES` solo ajusta su altura.

### Paso 3 · La serie (solo si es una serie nueva)

En `src/content/catalog/series.ts`:

```ts
  legion: { title: 'Legion', shortTitle: 'Legion', network: 'FX' },
```

Si la cadena no está en la lista `Network` de `src/domain/schema.ts`, agregala ahí.

### Paso 4 · La producción

Al final de `src/content/catalog/productions.ts`, antes de `} as const`:

```ts
  'legion-s1': {
    kind: 'season',              // 'movie' | 'season' | 'special' | 'short'
    title: 'Legion (Season 1)',
    series: 'legion',            // solo temporadas
    season: 1,                   // solo temporadas
    released: '2017',            // año de estreno (rango con guion largo: '2013–2014')
    network: 'FX',
    universe: 'earth-xxxxx',     // el del paso 2
    status: 'audited',           // lo que cargues vos revisado es 'audited'
    color: '#a855f7',            // color del afiche o de la serie
    description: 'Una o dos oraciones sobre la temporada.',
  },
```

`phase: 'Phase 4'` solo para producciones del MCU de Marvel Studios.

### Paso 5 · El archivo de eventos

Creá `src/content/events/legion-s1.ts`. **El nombre del archivo tiene que ser igual al ID de la producción.**

```ts
// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('legion-s1', [
  {
    id: 'david-escapes-clockworks',
    date: { year: 2017 },
    title: 'David Haller escapes Clockworks with Syd Barrett',
    text: [
      'Primer párrafo con [David Haller](david-haller) y [Syd Barrett](syd-barrett)…',
      'Segundo párrafo…',
    ],
    locations: ['clockworks-psychiatric-hospital'],
  },
]);
```

Reglas del evento:

- `id`: corto, en minúsculas con guiones, único **dentro de este archivo**. El ID completo será `legion-s1.david-escapes-clockworks`.
- `title`: en inglés, de 3 a 9 palabras, en presente, sin punto final. Contá lo más importante que pasa. Ejemplo: `Bor defeats Malekith and hides the Aether`.
- `text`: uno o más párrafos en inglés, con la sintaxis del paso 7.
- Un evento = sucesos unidos por tiempo, lugar o relato. **El tiempo manda:** seis semanas no lo cortan, seis meses sí. Si una temporada salta entre años, hacé un evento por cada año. Un viaje en el tiempo son eventos separados.

### Paso 6 · La fecha (`date`)

| Caso | Cómo se escribe | Se muestra |
|---|---|---|
| Año exacto | `{ year: 1944 }` | 1944 |
| Aproximado | `{ year: 1925, approx: true }` | c. 1925 |
| Rango | `{ year: 1861, end: 1865 }` | 1861–1865 |
| Antes de Cristo | `{ year: -3600, approx: true }` | c. 3600 BC |
| Más de 10.000 años atrás, como lo dice la obra | `{ year: -998000, label: '1,000,000 years ago' }` | 1,000,000 years ago |
| Mítico, sin fecha | `{ year: -1000000000, label: 'Eons ago' }` | Eons ago |

**`label` es solo para fechas de más de 10.000 años.** Todo lo más reciente se escribe con el año, aunque la obra lo diga en relativo: "hace 5.000 años" es `{ year: -3000, approx: true }`. Así una misma época nunca tiene dos nombres. En las producciones auditadas, el validador lo exige.

Las eras (Ancient Era, World Wars, Cold War, Mutant Age, Heroic Age, Multiverse) salen solas del año. Están en `periods`, en `src/domain/dates.ts`.

**Varios eventos en el mismo año:** el orden dentro del año lo da `order` (más chico, más arriba). Mirá los que ya existen y elegí un número intermedio:

```bash
npm run content -- year 2017
```

Si hay eventos con `order: 10` y `order: 20`, el tuyo va entre ellos con `order: 15`.

### Paso 7 · El texto (sintaxis)

| Escribís | Resultado |
|---|---|
| `[Charles Xavier](charles-xavier)` | Enlace al personaje, en su color. **El texto entre corchetes puede ser cualquier nombre** (ej. `[el profesor](charles-xavier)`) |
| `[el Teseracto](stone:space)` | Enlace a la gema (`space`, `reality`, `power`, `mind`, `time`, `soul`) |
| `[el hacha](object:vibranium-ax)` | Enlace al objeto, subrayado del color de su tipo (paso 10) |
| `**Team X**` | Negrita, para nombres sin ficha |
| `*Chitauri*` | Cursiva |
| `==el arma secreta==` | Subrayado rojo heredado de la v1. No lo uses en contenido nuevo: si es un objeto, enlazalo (paso 10) |
| `\*` `\[` `\]` | Escribe el carácter literal |

Cada personaje enlazado en el texto queda asociado al evento solo; no hace falta listarlo aparte.

### Paso 8 · Personajes

Para cada personaje importante del evento:

1. Buscalo: `npm run content -- find "haller"`.
2. **Si existe**, usá su ID en el texto: `[David](david-haller)`.
3. **Si no existe**, agregalo a `src/content/catalog/characters.ts` **en orden alfabético por id**:

```ts
  'david-haller': {
    name: 'David Haller',
    alias: 'Legion',                 // solo si tiene nombre en clave; si no, borrá la línea
    color: '#a855f7',                // cualquier tono: la legibilidad se ajusta sola
    role: 'anti-hero',               // 'hero' | 'villain' | 'anti-hero' | 'secondary' | 'civilian' | 'cosmic'
    status: 'alive',                 // 'alive' | 'deceased' | 'presumably-dead' | 'variable'
    factions: ['division-3'],        // IDs de factions.ts (podés dejar [])
    origin: 'New York',
    bio: 'Una o dos oraciones en inglés.',
  },
```

- **Color:** elegí uno que se distinga de los personajes con los que más aparece. No reuses el color exacto de un compañero de equipo.
- **Facción nueva:** agregala en `src/content/catalog/factions.ts`: `'division-3': { name: 'Division 3' },`.
- **El mismo personaje en otro universo** (ej. el Wolverine de Fox y el animado) es **una sola ficha**. Si hace falta, explicá la versión en `variants: { 'earth-92131': 'Nota sobre esa versión.' }`.
- Personajes que están en la escena pero no nombrás en el texto: `cast: ['syd-barrett'],`.

### Paso 9 · Lugares

1. Buscalo: `npm run content -- find "clockworks"`.
2. Si existe, usá su ID en `locations: ['clockworks-psychiatric-hospital']`. Si el evento pasa por varios, ponelos **en el orden del relato**: así los recorre *Trace this journey*.
3. Si no existe, agregalo a `src/content/catalog/locations.ts` **en orden alfabético por id**.

Lugar en la Tierra, con coordenadas `[latitud, longitud]`. Para sacarlas: en Google Maps, clic derecho sobre el lugar → copiar los números.

```ts
  'clockworks-psychiatric-hospital': {
    name: 'Clockworks Psychiatric Hospital',
    place: 'New York',
    country: 'United States',
    kind: 'earth',
    coords: [40.7128, -74.006],
  },
```

**Cada lugar tiene su propio punto.** Dos lugares distintos nunca llevan la misma coordenada, aunque estén en la misma ciudad. Marcá solo lo que la obra nombra: si dice *Creta*, no pongas el palacio de Cnosos.

Si la obra solo nombra una zona, o no dice dónde pasó, elegí igual un punto puntual verosímil: un punto gana a un anillo, aunque no se sepa tan exacto. Mirá antes qué hay alrededor, para no pegarlo a un lugar que no tiene nada que ver. `approximate: true` dibuja un anillo y queda solo en los lugares que ya lo tienen.

Lugar fuera de la Tierra: sin coordenadas, con el `node` del mapa Cosmos (IDs en `src/content/catalog/cosmos.ts`):

```ts
  'astral-plane-shadow-king': {
    name: 'Astral plane',
    kind: 'dimension',         // 'orbit' | 'space' | 'dimension'
    node: 'astral-plane',      // si no existe, agregalo en cosmos.ts
  },
```

Mundo nuevo en `cosmos.ts`. No lleva posición: la escena la calcula sola según la `zone`.

```ts
  'astral-plane': {
    name: 'Astral Plane',
    zone: 'dimensions',        // 'orbit' | 'realms' | 'deep-space' | 'dimensions'
    look: 'portal',            // 'planet' | 'moon' | 'station' | 'realm' | 'portal' | 'nexus'
    color: '#a78bfa',
    description: 'Una oración que explique qué es este lugar.',
  },
```

El mapa marca hitos: al elegir un universo, un mundo solo aparece si tiene eventos de ese universo. Para que un mundo aparezca, cargá el lugar en `locations` del evento; no hay que declarar nada en `cosmos.ts`.

Para contar algo particular de ese lugar en este evento: `locations: [{ id: 'sanctum-sanctorum', note: "M'Kraan mystic alert" }]`.

### Paso 10 · Objetos

Un objeto lleva ficha si tiene nombre, **cambia la trama o pasa de mano** y **le importa al multiverso**. Un arma de fondo o una pista que solo pesa en su serie, no. Buscalo con `npm run content -- find "ax"`. Si no existe, agregalo a `src/content/catalog/objects.ts` **en orden alfabético por id**:

```ts
  'vibranium-ax': {
    name: 'Vibranium Ax',
    kind: 'weapon',            // 'weapon' | 'relic' | 'technology' | 'material' | 'record'
    description: 'Una o dos oraciones en inglés: qué es y dónde termina.',
  },
```

En el texto se enlaza con `[Vibranium ax](object:vibranium-ax)`. Los colores de cada tipo están en `objectKinds`, en ese mismo archivo. Por ahora los objetos no llevan imagen.

Cada evento dice **dónde está cada objeto**, para que su recorrido solo pase por lugares donde estuvo. Los lugares de `at` tienen que estar en `locations` y van en el orden del relato:

```ts
    locations: ['adwa-mountain-pass', 'birnin-zana-citadel'],
    objects: [
      { id: 'vibranium-ax', at: ['adwa-mountain-pass'] },   // estuvo solo en Adwa
      { id: 'quantum-scanner', at: [] },                    // se lo nombra o se lo ve, pero no está ahí
    ],
```

Un objeto que está en la escena y el texto no nombra también va en `objects`, y aparece al pie del evento. Un `material`, como el Vibranium, no tiene recorrido: se enlaza y listo.

### Paso 11 · Muertes, gemas y extras (opcional)

```ts
    deaths: [
      'yinsen',                                              // personaje con ficha: su ID
      { character: 'bucky-barnes', presumed: true },         // se lo cree muerto
      { name: 'Thomas Logan', note: 'killed by James' },     // sin ficha: nombre
    ],
    stones: ['space'],                    // gemas presentes aunque no estén enlazadas en el texto
    segment: 'E1–E7',                     // episodios que cubre el evento
    alsoIn: ['iron-man-2'],               // otras producciones que muestran el mismo momento
    universe: 'earth-92131',              // solo si es distinto del de la producción (crossovers)
    branch: 'fox-original',               // solo si pasa en una rama (ver branches en universes.ts)
```

### Paso 12 · El póster

```bash
npm run posters:sync
```

Busca en TMDB las producciones que todavía no tienen póster y guarda su ruta en `productions.ts`. Necesita `.env.local` con el token (`TMDB_READ_TOKEN=...`); si ese archivo no está, saltéate este paso y avisá a quien mantiene el proyecto.

Al final el comando lista lo que no encontró. Si encontró otra película con el mismo nombre o no encontró nada:

1. Buscá la obra en themoviedb.org y copiá el número de su URL (ej. `themoviedb.org/tv/67195` → `67195`).
2. Escribilo como `tmdbId: 67195,` en la serie (`series.ts`) o en la película (`productions.ts`).
3. Corré `npm run posters:sync -- --force`.

Las producciones sin póster usan un diseño de reemplazo automático: no se rompe nada.

### Paso 13 · El elenco y las imágenes de los personajes nuevos

```bash
npm run cast:sync
npm run portraits:sync
```

- `cast:sync` busca en los créditos de TMDB quién interpreta a cada personaje en cada universo, actores y voces. Es la lista "Played by" de la ficha. Usa el mismo token que los pósters.
- `portraits:sync` busca la imagen del personaje en la wiki de cada universo y guarda su dirección. La imagen sigue en Fandom: **nunca la copies al repo**.

Un personaje en dos universos tiene dos imágenes. Noir no tiene wiki de la serie, así que muestra la foto del actor; si tampoco hay foto, se ven las iniciales. No se rompe nada.

**Mirá siempre el resultado en la ficha.** Las wikis reciclan páginas: la de "Black Widow" hoy es Yelena y la de "Captain America" es Sam Wilson. Para corregir, abrí el script y corré el comando de nuevo:

| Problema | Dónde | Qué agregar |
|---|---|---|
| Imagen de otro personaje, o no la encuentra | `PAGES`, en `scripts/portraits.ts` | `'id-del-personaje': { 'earth-616': 'Título de la página' },` |
| Personaje correcto, mala imagen | `FILES`, en `scripts/portraits.ts` | `'id-del-personaje': { 'earth-616': 'Nombre del archivo.jpg' },` |
| Personaje chiquito en un póster | `FILES`, en `scripts/portraits.ts` | `['Archivo.jpg', izquierda, arriba, lado]`: el cuadrado a conservar, en fracciones de 0 a 1 |
| Falta un actor (acreditado con otro nombre) | `CREDITED_AS`, en `scripts/cast.ts` | `'id-del-personaje': ['Nombre del crédito'],` |
| Sobra un actor (doble, versión de chico) | `NOT_THEM`, en `scripts/cast.ts` | `'id-del-personaje': ['Nombre del actor'],` |

### Paso 14 · Validar y mirar

```bash
npm run validate     # contenido
npm run build        # tipos + compilación
npm run dev          # abrir http://localhost:5173/mcu/ y revisar el año del evento
```

**Checklist final**

- [ ] La fecha es la in-universe.
- [ ] El título está en inglés, en presente, sin punto final.
- [ ] Todos los personajes importantes están enlazados.
- [ ] Cada evento tiene al menos un lugar (obligatorio en producciones auditadas).
- [ ] La producción tiene póster, o quien mantiene el proyecto sabe que quedó sin él.
- [ ] Corriste `cast:sync` y `portraits:sync`, y miraste la ficha de los personajes nuevos.
- [ ] `npm run validate` y `npm run build` terminan sin errores.

---

## 3. Receta B — Corregir una producción de la v1

Las producciones `legacy` vienen del HTML original. Para ponerla al día sin la auditoría completa de `docs/AUDIT_GUIDE.md`:

1. Mirá su estado y cuántos eventos tiene: `npm run content -- status`.
2. Abrí su archivo en `src/content/events/`.
3. Revisá **cada evento**:
   - ¿La fecha es la in-universe? Si no, corregí `date` y, si hace falta, `order` (`npm run content -- year <año>`).
   - ¿El título describe bien el evento?
   - ¿Los personajes importantes están enlazados? Cambiá `**Nombre**` por `[Nombre](id)` cuando tengan ficha. Si no la tienen y son importantes, creala (paso 8).
   - ¿Tiene lugares? Agregalos (paso 9).
   - ¿Las muertes son correctas? Usá IDs cuando el personaje tenga ficha.
   - ¿El texto tiene errores de tipeo o de canon? Corregilos.
4. **No cambies el `id` de los eventos.** Si un evento tiene que dividirse en dos años, dejá el `id` original en la parte principal y creá un evento nuevo para la otra.
5. Cuando esté todo revisado, en `productions.ts` cambiá `status: 'legacy'` por `status: 'audited'`.
6. Corré `npm run validate`. Ahora el validador es estricto con esa producción y te va a avisar qué falta.

---

## 4. Errores del validador y cómo arreglarlos

| Mensaje | Qué hacer |
|---|---|
| `unknown character link "x"` | El ID entre paréntesis no existe. Buscalo con `find` o creá el personaje |
| `unknown location "x"` | Igual, en `locations.ts` |
| `events/x.ts declares production "y"` | El nombre del archivo tiene que ser igual al ID de la producción |
| `id must be kebab-case` | Solo minúsculas, números y guiones |
| `id repeated in the same file` | Dos eventos con el mismo `id` en el archivo |
| `audited events need at least one location` | Agregá `locations` al evento |
| `audited events need at least one character` | Enlazá un personaje en el texto o agregá `cast` |
| `death "X" has a dossier, use the character id` | Cambiá `{ name: 'X' }` por el ID del personaje |
| `"X" is a free-text date` | Sacá `label` y escribí el año, con `approx: true` si es aproximado (paso 6) |
| `paragraph N has broken markup` | Hay un `**`, `==` o `[...]( ` sin cerrar en ese párrafo |
| `earth places need coords` | Falta `coords: [lat, lng]` en el lugar |
| `off-world places need a valid cosmos "node"` | Falta `node`, o el nodo no existe en `cosmos.ts` |
| `verified productions say which episode or part each event covers` | Agregá `segment` al evento (solo series `verified`) |
| `place "x" shares its exact point with y` | Dale a cada lugar su propia coordenada (solo producciones `verified`) |
| `unknown object link "x"` | El ID no existe en `objects.ts`. Buscalo con `find` o crealo (paso 10) |
| `verified productions link objects as [Label](object:id)` | Cambiá `==texto==` por un enlace al objeto, o sacá las marcas |
| `say where "x" is in this event` | Agregá el objeto a `objects` con su `at` (paso 10) |
| `object "x" is at "y", which is not a place of this event` | Sumá ese lugar a `locations` o corregí `at` |

Si TypeScript marca en rojo un ID mientras escribís, es porque no existe: es el mismo aviso, antes de validar.
