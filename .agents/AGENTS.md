# REGLAS MAESTRAS DE OPERACIÓN: MCU & MULTIVERSE CHRONOLOGY ENGINE
<!-- SUPER PROMPT PERMANENTE DE LORE, CRONOLOGÍA Y ARQUITECTURA -->

Este documento establece la directiva operativa permanente, inmutable e irrevocable para este proyecto. Ningún agente, modelo o subagente podrá ignorar, relajar o contradecir estas reglas bajo ninguna circunstancia.

---

## ⚡ LEY SUPREMA N° 1: PRINCIPIO DE CRONOLOGÍA IN-UNIVERSE PURA (PNC)
**LA ESENCIA ABSOLUTA DEL PROYECTO ES LA CRONOLOGÍA DIEGÉTICA (DENTRO DEL UNIVERSO).**

1. **PROHIBICIÓN TOTAL DE AGRUPACIÓN POR EMISIÓN O ESTRENO**:
   - **NUNCA**, bajo ningún concepto, se debe agrupar un episodio o evento según su fecha de emisión en televisión (air date), su año de estreno cinematográfico o su orden de temporada si la trama narrativa transcurre en una época histórica diferente.
   - Si una serie se emitió en 1997, pero un episodio transcurre en **1888**, ese evento pertenece única, obligatoria y exclusivamente a la era **1888** en `timelineData.ts`.
   - Si un episodio transcurre en la Segunda Guerra Mundial en **1944**, pertenece a la era **1944**, no a los años 90s.
   - Si un viaje en el tiempo transcurre en **1959** o en el **1200 a.C.**, pertenece a esa era histórica.

2. **TABLA MAESTRA DE AUDITORÍA HISTÓRICA OBLIGATORIA (EARTH-92131 & MULTIVERSO)**:
   Cualquier interacción con las series animadas clásicas o películas multiversales debe respetar esta asignación canónica estricta:

   | Año In-Universe | Obra / Episodio | Título / Hito Clave | Locación Real Diegética |
   | :--- | :--- | :--- | :--- |
   | **c. 1200 a.C.** | *Fantastic Four TAS* (T1 E9-10) | **The Mask of Doom**: Viaje temporal a la Grecia Mítica en busca del Cofre de las Sirenas. | Grecia Antigua / Mar Egeo |
   | **1888** | *X-Men TAS* (T5 E9) | **Descent**: Origen victoriano de Mr. Sinister (Nathaniel Essex, James Xavier, John Grey). | Londres Victoriano, Inglaterra |
   | **1942–1945** | *Spider-Man TAS* (T5 E2-6) | **Six Forgotten Warriors (Origen)**: Proyecto Rebirth, los 5 campeones y el vórtice de 1945 con Cap y Red Skull. | EE.UU. / Europa (WWII) |
   | **1944** | *X-Men TAS* (T5 E11) | **Old Soldiers**: Logan y Capitán América infiltran fortaleza nazi en Francia contra Red Skull. | Francia Ocupada (WWII) |
   | **1959** | *X-Men TAS* (T4 E1) | **One Man's Worth (Punto de Inflexión)**: Asesinato temporal de Charles Xavier a sus 20 años. | Oxford, Inglaterra (1959) |
   | **1992–1998** | *Earth-92131 Core* | Línea presente clásica de X-Men, Spider-Man, Fantastic Four, Iron Man, Hulk. | Westchester, NY, etc. |
   | **2055** | *X-Men TAS* (T1 E11-12) | **Days of Future Past**: El futuro post-apocalíptico de Centinelas de donde viaja Bishop. | América del Norte (2055) |
   | **3999** | *X-Men TAS* (T2 E8 / T4 E20) | **Time Fugitives / Beyond Good and Evil**: Siglo XL, Nueva Canaán gobernada por Apocalipsis (Cable). | Siglo XL (3999) |

3. **CONEXIÓN NARRATIVA CON OBRAS MODERNAS**:
   - Cada evento histórico debe resaltar sus ecos en el futuro. Por ejemplo, el origen de Sinister en 1888 debe documentar su fijación centenaria con los genes Summers y Grey que detona directamente en *X-Men '97* (Madelyne Pryor y Cable).

---

## 🗺️ LEY SUPREMA N° 2: CARTOGRAFÍA Y MAPAS (TIERRA VS. COSMOS)

1. **LOCACIONES TERRESTRES**:
   - Toda locación dentro del planeta Tierra debe incluir coordenadas de latitud y longitud válidas (`coordinates: [lat, lng]`) para centrarse y marcarse en el mapa interactivo de Leaflet.
2. **ORRERY CÓSMICO (LOCACIONES OFF-WORLD)**:
   - Todo planeta, luna, estación orbital o dimensión mística/multiversal debe estar exhaustivamente catalogado en `COSMIC_REALMS` dentro de `src/screens/MapScreen.tsx`.
   - **Cero colisiones**: Posicionamiento radial de etiquetas mediante `getCosmicBadgePlacement`.
   - **Elevación dinámica de cursor**: Todo nodo celestial debe elevarse a `z-50 scale-120` con `hover:z-50` y badge resaltado al colocar el mouse sobre él ("y viceversa").
   - **Regla de Matcheo Inequívoco**: Al seleccionar una locación desde un evento del timeline, la búsqueda debe priorizar **siempre el nombre y región de la locación** por encima del `eventId`, impidiendo que eventos con múltiples lugares seleccionen el nodo erróneo.
   - **Preservación Cósmica**: Al navegar a cualquier reino cósmico, la categoría debe mantenerse en `'all'`, asegurando que ningún nodo del universo desaparezca de la vista.

---

## 👥 LEY SUPREMA N° 3: INTEGRIDAD DE PERSONAJES Y DOSSIERS
1. Cada personaje que participe en un evento histórico debe tener:
   - Su ID unívoco registrado en `src/data/charactersData.ts` con alias, bio, roles y afiliaciones.
   - Su clase de color CSS con glow de neón en `src/styles/global.css`.
2. Las citas a personajes en los textos del timeline deben utilizar las etiquetas `<strong class="...">Nombre</strong>` con su clase correspondiente.

---

## 🛡️ LEY SUPREMA N° 4: PROTOCOLO DE VALIDACIÓN Y CONTROL DE VERSIONES
1. **Compilación Obligatoria**: Antes de dar por finalizada cualquier tarea o entregar un reporte, ejecutar siempre `npm run build` para asegurar cero errores de TypeScript y bundling.
2. **Seguimiento Operativo**: Mantener `docs/TODO.md` permanentemente actualizado con los hitos completados y los pendientes.
3. **Límite de Permisos Git**: NUNCA ejecutar `git commit` ni `git push` sin la instrucción explícita del usuario (`commit y push`). Los mensajes de commit deben seguir la convención en inglés (*English Conventional Commits*).
