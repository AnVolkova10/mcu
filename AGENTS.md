# MCU Archive — guía para agentes

Cronología **in-universe** del multiverso Marvel: cada evento va en el año en que ocurre dentro de la historia, no en el año de estreno. Abarca el MCU (Earth-616), las películas X-Men de Fox (Earth-10005), el universo animado de los 90 y X-Men '97 (Earth-92131) y Spider-Noir (Earth-90214).

App personal: React 19 + TypeScript + Vite + Tailwind 4, publicada en GitHub Pages (`/mcu/`) con cada push a `master`.

## Las dos reglas del contenido

1. **Fecha in-universe siempre.** Si un episodio de 1997 transcurre en 1888, el evento va en 1888. Si una película de 2014 tiene un prólogo en 3600 a. C., ese prólogo es un evento aparte en 3600 a. C.
2. **Auditado vs. legacy.** Cada producción tiene `status`:
   - `audited`: revisada por quien mantiene el proyecto. Tiene que estar 100 % bien; el validador es estricto con ella.
   - `legacy`: heredada de la v1 (HTML de 2021). Puede tener datos imperfectos, pero nunca puede romper la app.

Si una fecha o un dato de canon es dudoso, **preguntá a quien mantiene el proyecto; no inventes**.

## Comandos

| Comando | Para qué |
|---|---|
| `npm run dev` | App local en http://localhost:5173/mcu/ |
| `npm run dev:phone` | Igual, pero visible desde el celu en la misma red: abrí la URL `Network` que imprime la terminal |
| `npm run build` | Valida el contenido, chequea tipos y compila. Correlo antes de terminar cualquier tarea |
| `npm run validate` | Solo valida el contenido (menos de 1 segundo) |
| `npm run content -- find "storm"` | Busca IDs de personajes, lugares, producciones y facciones |
| `npm run content -- year 1994` | Lista los eventos de un año con su `order` |
| `npm run content -- status` | Producciones auditadas y legacy, con su cantidad de eventos |
| `npm run posters:sync` | Busca en TMDB los pósters que falten y guarda sus rutas en los catálogos |
| `npm run lint` | ESLint (incluye las reglas de hooks de React) |

## Dónde está cada cosa

```
src/content/            ← DATOS (lo único que se edita para agregar contenido)
  catalog/              universos, series, producciones, personajes, facciones, lugares, cosmos, gemas
  events/<produccion>.ts  un archivo por película o temporada
src/domain/             lógica pura sin React: esquema, fechas, sintaxis del texto, índices, filtros, búsqueda
src/features/           pantallas y paneles (timeline, archive, library, search, map…)
  map/earth/            globo con MapLibre GL
  map/cosmos/           escena 3D (React Three Fiber): la posición de cada mundo sale de `layout.ts`
  map/multiverse/       realidades y ramas en SVG
src/shared/ui/          componentes reutilizables (Sheet, Chip, Avatar, SearchSelect…)
src/app/                App, encabezado y router (la URL guarda página, filtros y panel abierto)
scripts/content.ts      herramienta de contenido (validate / find / year / status), solo lectura
docs/CONTENT_GUIDE.md   receta paso a paso para agregar o auditar contenido
docs/ROADMAP.md         lo que falta
```

## Reglas de trabajo

- **Para agregar o modificar contenido, seguí `docs/CONTENT_GUIDE.md` paso a paso.**
- No leas archivos de datos enteros: buscá con `npm run content -- find` o con la búsqueda del editor.
- **Nunca cambies el `id` de un evento, personaje, lugar o producción que ya existe.** Romperías los guardados y los links compartidos.
- No edites `src/features/library/legacyEventIds.ts`: es el mapa de migración de los guardados de v2.
- Los colores de personajes, universos y gemas vienen de los datos; la legibilidad del texto se calcula sola (`src/domain/colors.ts`). No agregues CSS por personaje.
- Los pósters se muestran solo en la sección Movies & Series y en la ficha de cada producción. **Nunca en el timeline.**
- El estado del mapa vive en la URL (`src/features/map/useMapState.ts`), igual que el del resto de la app.
- `three` está fijo en `0.186.1` porque `postprocessing` exige `<0.187`. No lo actualices sin revisar eso.
- `.env.local` guarda el token de TMDB. Nunca lo imprimas, lo copies ni lo subas; la app publicada no lo necesita.
- Estilos: tokens en `src/styles/global.css` (`bg`, `surface`, `ink`, `accent`…). Reutilizá `src/shared/ui` antes de crear componentes nuevos.
- **Tests:** no agregues suites de tests. La red de seguridad es TypeScript estricto (los IDs están tipados) más el validador de contenido. Es un proyecto personal y los agentes cobran por correrlos.
- Antes de dar algo por terminado: `npm run build` y `npm run lint` sin errores.
- **Git:** nunca hagas commit ni push sin que te lo pidan. Mensajes en inglés con Conventional Commits (`feat:`, `fix:`, `content:`…).
