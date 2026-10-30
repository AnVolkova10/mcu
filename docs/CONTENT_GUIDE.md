# Guía de contenido

Receta paso a paso para **agregar una película o serie nueva** y para **auditar o corregir una de la v1**.
Está escrita para que cualquier agente la siga sin conocer el proyecto. Seguí los pasos en orden y no te saltees el último (validar).

---

## 0. Reglas de oro

1. **La fecha es la de adentro de la historia**, nunca la de estreno. Un flashback de 1945 en una película de 2011 va en 1945. Si la obra no lo dice claro, preguntá a la usuaria.
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
| Facciones y equipos | `src/content/catalog/factions.ts` |
| Lugares | `src/content/catalog/locations.ts` (orden alfabético por id) |
| Universos y ramas | `src/content/catalog/universes.ts` |
| Mundos del mapa Cosmos | `src/content/catalog/cosmos.ts` |
| Gemas del Infinito y su recorrido | `src/content/catalog/stones.ts` |

Los archivos de `events/` se cargan solos: **no hay que registrarlos en ningún índice.**

---

## 2. Receta A — Agregar una película o serie nueva

Ejemplo: la temporada 1 de **Legion** (FX, 2017).

### Paso 1 · Elegir el ID de la producción

- Película: el título en minúsculas con guiones. `Thor: Ragnarok` → `thor-ragnarok`.
- Temporada: la serie + `-s` + número. Legion temporada 1 → `legion-s1`.
- Verificá que no exista: `npm run content -- find "legion"`.

### Paso 2 · El universo

Abrí `src/content/catalog/universes.ts` y elegí el universo donde pasa la historia (`earth-616`, `earth-10005`, `earth-92131`, `earth-90214`).

Si la producción es una realidad que todavía no está (Legion, por ejemplo, no es claramente ninguna de las cuatro), **preguntá a la usuaria qué universo usar.** Si hay que crear uno, agregalo así:

```ts
  'earth-xxxxx': {
    name: 'Earth-XXXXX',          // designación oficial (Marvel Database); si no tiene, preguntá
    label: 'Nombre corto',        // lo que se ve en los botones, ej. 'Fox X-Men'
    short: 'XXXXX',               // texto mínimo de la insignia
    color: '#14b8a6',             // un color que no use otro universo
    description: 'Una oración que explique qué realidad es.',
  },
```

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
- Un evento = un momento o un arco con fecha propia. Si una temporada salta entre años, hacé un evento por cada año.

### Paso 6 · La fecha (`date`)

| Caso | Cómo se escribe | Se muestra |
|---|---|---|
| Año exacto | `{ year: 1944 }` | 1944 |
| Aproximado | `{ year: 1925, approx: true }` | c. 1925 |
| Rango | `{ year: 1861, end: 1865 }` | 1861–1865 |
| Antes de Cristo | `{ year: -3600, approx: true }` | c. 3600 BCE |
| Relativo, como lo dice la obra | `{ year: -2984, label: '5,000 years ago' }` | 5,000 years ago |

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
| `**Team X**` | Negrita, para nombres sin ficha |
| `*Chitauri*` | Cursiva |
| `==el arma secreta==` | Subrayado rojo, para el objeto o dato clave del evento |
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
2. Si existe, usá su ID en `locations: ['clockworks-psychiatric-hospital']`.
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

Lugar fuera de la Tierra: sin coordenadas, con el `node` del mapa Cosmos (IDs en `src/content/catalog/cosmos.ts`):

```ts
  'astral-plane-shadow-king': {
    name: 'Astral plane',
    kind: 'dimension',         // 'orbit' | 'space' | 'dimension'
    node: 'astral-plane',      // si no existe, agregalo en cosmos.ts
  },
```

Para contar algo particular de ese lugar en este evento: `locations: [{ id: 'sanctum-sanctorum', note: "M'Kraan mystic alert" }]`.

### Paso 10 · Muertes, gemas y extras (opcional)

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

### Paso 11 · Validar y mirar

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
- [ ] `npm run validate` y `npm run build` terminan sin errores.

---

## 3. Receta B — Auditar o corregir una producción de la v1

Las producciones `legacy` vienen del HTML original. Para auditar una:

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
| `paragraph N has broken markup` | Hay un `**`, `==` o `[...]( ` sin cerrar en ese párrafo |
| `earth places need coords` | Falta `coords: [lat, lng]` en el lugar |
| `off-world places need a valid cosmos "node"` | Falta `node`, o el nodo no existe en `cosmos.ts` |

Si TypeScript marca en rojo un ID mientras escribís, es porque no existe: es el mismo aviso, antes de validar.
