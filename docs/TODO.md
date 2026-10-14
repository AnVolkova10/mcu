# MCU & Multiverse Project Roadmap & Backlog

Documento de seguimiento operativo y backlog de ideas futuras para la plataforma interactiva de cronología y cartografía del MCU y Multiverso.

---

## 🎨 1. Mejora Visual y Rediseño Estético (UI/UX)
- **Objetivo**: Llevar la estética general de la aplicación a un nivel visual superior y súper pulido.
- **Flujo de trabajo**:
  - Se implementará utilizando el prompting agent especializado creado por Angela.
  - Enfoque en fidelidad visual, tipografía, contrastes, micro-interacciones y consistencia visual entre vistas (Timeline, Map, Stats, Media).
- **Estado**: *Pendiente (programado para después del contenido actual)*.

---

## 🔮 2. Sistema de Recolección de Artefactos y Objetos Legendarios
- **Objetivo**: Replicar y expandir la mecánica interactiva de recolección de las *Infinity Stones* para abarcar reliquias cósmicas, tecnológicas y místicas del multiverso.
- **Artefactos a incorporar**:
  - **Cristal de M'Kraan (M'Kraan Crystal)**: El "Corazón del Cosmos" y nexo de todas las realidades de la galaxia Shi'ar (protagonista en *X-Men: TAS - The Phoenix Saga*).
  - *(Futuros candidatos: Los Diez Anillos del Mandarín, Darkhold, Libro de Vishanti, etc.)*.
- **Funcionalidades previstas**:
  - Drawer o panel interactivo de reliquias / inventario cósmico.
  - Detección automática de recolección al navegar o inspeccionar eventos del timeline.
  - Lore, descripción, origen dimensional y estado de desbloqueo.
- **Estado**: *Pendiente (planificado para desarrollo posterior)*.

---

## 📺 3. Contenido en Progreso: Master Timeline Universo Animado 90s (Earth-92131)

### Objetivo General
Integrar y auditar la totalidad de las 5 series nucleares del Universo Animado de Marvel de los 90s (X-Men, Spider-Man, Fantastic Four, Iron Man, The Incredible Hulk) en una cronología narrativa precisa, continua y coherente por eventos, locaciones y personajes.

---

### Hito 1: Cierre Completo del Bloque 1994 (Earth-92131)
- [x] **Resultado Observable**: 1994 consolidado con Fantastic Four T1, Iron Man T1 completa, despertar de Peter Parker en Spider-Man T1 y la culminación cósmica de X-Men T3.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `fantastic-four-tas-1`, `spider-man-tas-1`, `iron-man-tas-1`, `x-men-tas-3`.
  - [x] Eventos de Fantastic Four T1: Origen en el espacio/teletón, Namor & Sub-Mariner, Invasión Skrull & Galactus/Silver Surfer, Mask of Doom (Castillo de Doom en Latveria & rescate de Sue), Mole Man y Negative Zone.
  - [x] Eventos de Iron Man T1: Clímax de Force Works, El Origen de Iron Man en el Ártico/Vietnam, Boda fingida con Julia Carpenter.
  - [x] Eventos de Spider-Man T1: Picadura, Noche del Lagarto, Spider-Slayers de Smythe, Alien Costume / Saga de Venom y Hobgoblin.
  - [x] Eventos de X-Men T3: *The Phoenix Saga* (Fénix en órbita y en el Imperio Shi'ar), *No Mutant Is an Island*, y *The Dark Phoenix Saga* (Manipulación del Club Hellfire, devoración del sistema D'Bari y juicio en el Área Azul de la Luna con el sacrificio de Jean).
  - [x] Personajes con dossiers y glows en `global.css`.
  - [x] Compilación exitosa `npm run build`.

---

### Hito 2: Bloque 1995 (Crossovers Canónicos y Maduración Heroica)
- [x] **Resultado Observable**: `era-_1995_` enriquecida con los hitos de 1995 manteniendo la cohesión multiversal diegética.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `spider-man-tas-2`, `iron-man-tas-2`, `fantastic-four-tas-2`, `x-men-tas-4`.
  - [x] Eventos de Spider-Man T2: *Neogenic Nightmare*, Mutación y Crossover histórico con X-Men (*The Mutant Agenda*), Morbius, Punisher y Blade.
  - [x] Eventos de Iron Man T2: Disolución de Force Works, estreno de la *Modular Armor*, Madame Masque y *Armor Wars*.
  - [x] Eventos de Fantastic Four T2: *Inhumans Saga*, Daredevil en el Edificio Baxter (*And a Blind Man Shall Lead Them*), Ego the Living Planet y Pantera Negra en Wakanda.
  - [x] Eventos de X-Men T4: *One Man's Worth* (resistencia del 1995 distópico alternativo contra Nimrod), Proteus en Escocia, *Sanctuary* (Asteroide M como refugio orbital mutante de Magneto y traición nuclear de Fabian Cortez), *Family Ties* (Magneto, Quicksilver y Scarlet Witch en el Monte Wundagore descubren su filiación) y *Beyond Good and Evil* (Apocalipsis y el Eje del Tiempo).
  - [x] Compilación exitosa `npm run build`.

---

### Hito 3: Bloque 1996 (Guerra Simbiótica, Gigantes Verdes y Caída de Duendes)
- [x] **Resultado Observable**: `era-_1996_` creada e integrada con Spider-Man T3, Incredible Hulk T1 y X-Men T4/T5.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `spider-man-tas-3`, `incredible-hulk-tas-1`, `x-men-tas-5`.
  - [x] Eventos de Spider-Man T3: *Sins of the Fathers*, Doctor Strange, El Duende Verde, Crossover con Daredevil en el juicio de Peter (*Framed*), *The Spot*, Crossover de Iron Man & War Machine contra Venom & Carnage (*Venom Returns*), y *Turning Point* (El Duende Verde lanza a Mary Jane Watson a través del vórtice dimensional del Time Dilator en el puente George Washington).
  - [x] Eventos de The Incredible Hulk T1: Bruce Banner a la fuga, The Leader, Crossover de Iron Man & War Machine (*Helping Hand, Iron Fist*), Crossover de Thing y Fantastic Four (*Fantastic Fortitude*).
  - [x] Eventos de X-Men T5: *The Phalanx Covenant* (purga biotecnológica con Bestia, Magneto, Forja y Warlock, limpiado de duplicados de la Segunda Guerra Mundial).
  - [x] Compilación exitosa `npm run build`.

---

### Hito 4: Bloque 1997–1998 (Secret Wars, Spider Wars y Graduation Day)
- [x] **Resultado Observable**: `era-_1997_` y `era-_1998_` consolidadas e integradas al 100%, culminando el ciclo animado clásico de los 90s.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `spider-man-tas-4`, `spider-man-tas-5`, `incredible-hulk-tas-2`, `x-men-tas-5`.
  - [x] Eventos de Spider-Man T4: *Partners in Danger* (Génesis de Black Cat / Felicia Hardy con el suero del Súper Soldado, Guerra Nocturna de Vampiros con Blade, Morbius y Whistler, Harry Osborn como segundo Duende Verde, Hobie Brown / The Prowler, y el misterioso reaparecer acuático de Mary Jane).
  - [x] Eventos de Spider-Man T5: Boda de Peter y Mary Jane, *Six Forgotten Warriors* (Capitán América y Red Skull saliendo del limbo), *The Return of Hydro-Man & Clone Revelation* (Disolución del clon de Mary Jane y juramento multiversal de Peter), *Secret Wars* (reunión cumbre de Spider-Man, Storm, Iron Man, Fantastic Four, Capitán América) y *Spider Wars* (Multiverso de clones, Madame Web y Stan Lee).
  - [x] Eventos de The Incredible Hulk T2: She-Hulk, Gray Hulk.
  - [x] Evento de X-Men T5: *Graduation Day* (Despedida final del Profesor X hacia el Imperio Shi'ar).
  - [x] Compilación final `npm run build` y validación general.

---

## ⭐ 4. Auditoría Integral y Overhaul: Captain Marvel (2019) & Earth-616 Space Stone Arc
- [x] **Resultado Observable**: Auditoría exhaustiva completada de *Captain Marvel (2019)* en el Sacred Timeline (Earth-616).
- [x] **Criterios de Aceptación**:
  - [x] **Dossiers de Personajes y Glows CSS**:
    - [x] Creados 8 dossiers completos con roles, bios e iconografía de badge: `yon-rogg`, `mar-vell-wendy-lawson`, `maria-rambeau`, `monica-rambeau`, `supreme-intelligence`, `minn-erva`, `korath`, `ronan`.
    - [x] Definidos los glows respectivos en `src/styles/global.css` (`.yon-rogg`, `.mar-vell-wendy-lawson`, `.maria-rambeau`, `.monica-rambeau`, `.supreme-intelligence`, `.minn-erva`, `.korath`, `.ronan`).
  - [x] **Eventos Canónicos en Timeline (`src/data/timelineData.ts`)**:
    - [x] `event-_1989_-1`: Vuelo de prueba del motor de velocidad luz con el Tesseract, muerte de Mar-Vell a manos de Yon-Rogg, absorción de energía cósmica por Carol Danvers, rescate y transformación en Vers. Locación: *Project P.E.G.A.S.U.S. Mojave Crash Range* con coordenadas geográficas precisas. Flag Space Stone activo.
    - [x] `event-_1995_-1`: Eliminado tag `<h1>` residual y caracteres `\r\n`. Corregida errata de guion ("stro"). Inclusión de los 13 personajes participantes, highlights canónicos y 6 locaciones completas (*Blockbuster LA*, *Project Pegasus Mojave*, *Rambeau Residence New Orleans*, *Mar-Vell's Cloaked Orbital Laboratory*, *Hala Imperial City*, *Torfa Border World Outpost*).
    - [x] `event-_2018_-4`: Escena post-créditos de alerta con el pager en el New Avengers Facility en Upstate New York con Steve Rogers, Natasha Romanoff, Bruce Banner y Rhodey.
  - [x] **Cartografía Cósmica y Trayectoria de Infinity Stones (`src/screens/MapScreen.tsx`)**:
    - [x] Nuevos reinos cósmicos en `COSMIC_REALMS`: *Mar-Vell's Cloaked Orbital Laboratory* (órbita terrestre) y *Planet Hala (Kree Empire Capital)* (espacio profundo).
    - [x] Trayectoria de la Space Stone (*Tesseract*) expandida a 9 paradas cronológicas: incorpora el laboratorio orbital camuflado (Goose traga el cubo) y el despacho de Nick Fury en S.H.I.E.L.D. (Goose lo regurgita).
  - [x] Compilación exitosa `npm run build` con 0 errores.

---

## 🪐 5. Overhaul Integral: Orrery Cósmico, Cartografía Off-World y Prevención de Colisiones
- [x] **Resultado Observable**: Mapa cósmico (`MapScreen.tsx`) completamente rediseñado y funcional, con 34 reinos celestiales exhaustivos, sin colisión de nombres y sincronizado con las locaciones off-world del timeline.
- [x] **Criterios de Aceptación**:
  - [x] **Catálogo Completo de Reinos Cósmicos (`COSMIC_REALMS`)**:
    - [x] 34 nodos celestiales distribuidos radialmente en 360° sin agrupamientos problemáticos.
    - [x] Incluye todos los mundos MCU, TAS 90s y X-Men: Planet Torfa, Planet Hala, Mar-Vell Orbital Lab, Starcore Shuttle, Endeavour, Asteroid M, S.A.B.E.R., The Moon/Attilan, Asgard, Nidavellir, Muspelheim, Svartalfheim, Jotunheim, Shi'ar Empire (M'Kraan Crystal Nexus), Knowhere, Sakaar, Xandar, Titan, Vormir, Sovereign, Ego the Living Planet, Maveth, Contraxia, Morag, Negative Zone, TVA Null-Time, Mojoverse, Quantum Realm, Axis of Time, Battleworld, Ta Lo, K'un-Lun, etc.
  - [x] **Corrección de Solapamiento y Colisión de Etiquetas ("Se tapan las palabras")**:
    - [x] Implementado algoritmo `getCosmicBadgePlacement` con colocación radial inteligente por cuadrantes y zonas perimetrales.
    - [x] Las etiquetas exteriores apuntan hacia adentro o arriba/abajo según cercanía al borde, con `pointer-events-none` y `z-index` adaptativo para el nodo activo (`z-40`).
    - [x] Elevación interactiva de cursor (`hover:z-50`, `isHovered`): al pasar el cursor sobre cualquier planeta o nodo celestial, éste adquiere inmediatamente `z-50 scale-120` con badge resaltado sobre cualquier otro nodo adyacente o seleccionado, y viceversa al cambiar de nodo.
  - [x] **Corrección de Banners de Órbitas Giratorios**:
    - [x] Retirado `animate-spin` de los contenedores que alojan los textos tácticos (`YGGDRASIL • THE NINE REALMS AXIS`, `DEEP SPACE & GALACTIC EMPIRES`). Las leyendas orbitales se mantienen estáticas y perfectamente legibles.
  - [x] **Mapeo Automático de Locaciones Off-World**:
    - [x] Matcheador de 35 keywords prioritarias en `useEffect` de `selectedMapLocationPin`. Al clickear cualquier locación espacial o dimensional desde los eventos (como Torfa, Hala, Eje del Tiempo, Battleworld, etc.), abre directamente su nodo y dossier correspondiente.
    - [x] Corregido bug de eventos multi-locación (ej: Capitana Marvel 1995 con Hala, Torfa y Lab de Mar-Vell): el nombre específico de la locación tiene prioridad 1 sobre el `eventId`, y la categoría cósmica se mantiene en `'all'` para que ningún nodo del mapa desaparezca o se oculte.
  - [x] Compilación exitosa `npm run build` con 0 errores.

---

## 🏛️ 6. Principio Inviolable de Cronología In-Universe Pura (PNC) & Super Prompt `.agents/`
- [x] **Resultado Observable**: Creación del marco de directivas permanentes del proyecto en `.agents/` y migración/clasificación exhaustiva de todos los episodios históricos out-of-time a sus eras in-universe exactas (prohibición total de agrupar por fecha de emisión en televisión).
- [x] **Criterios de Aceptación**:
  - [x] **Infraestructura de Super Prompt Permanente (`.agents/`)**:
    - [x] Creado `.agents/AGENTS.md` con las 4 Leyes Supremas del proyecto: (1) Principio de Cronología In-Universe Pura (PNC), (2) Cartografía Terrestre vs. Orrery Cósmico Off-World, (3) Integridad de Personajes y Dossiers, (4) Protocolo de Validación y Límites de Git.
    - [x] Creado `.agents/rules/chronology_and_lore_rules.md` para el sistema de reglas continuas del agente.
  - [x] **Auditoría e Incorporación de Eras Históricas Out-of-Time (`src/data/timelineData.ts`)**:
    - [x] `era-_c__1200_B_C_E__`: *Fantastic Four TAS* (T1 E9-10 *"The Mask of Doom"*), expedición en la Plataforma Temporal del Doctor Doom a la Grecia Micénica en busca del Cofre de las Sirenas. Coordenadas de Micenas `[37.7308, 22.7561]`.
    - [x] `era-_1888_`: *X-Men TAS* (T5 E9 *"Descent"*), génesis victoriana de Dr. Nathaniel Essex / Mister Sinister en Londres, con Dr. James Xavier y Dr. John Grey. Su obsesión centenaria con los linajes Summers y Grey conecta directamente con *X-Men '97* (Madelyne Pryor y Cable). Coordenadas de Londres `[51.5074, -0.1278]`.
    - [x] `era-_1944_`: *X-Men TAS* (T5 E11 *"Old Soldiers"*), Logan con garras de hueso y Capitán América infiltran fortaleza nazi en Francia para rescatar al Dr. Cocteau de Red Skull. Coordenadas de Normandía `[49.4087, -1.3174]`.
    - [x] `era-_1945_`: *Spider-Man TAS* (T5 E2-6 *"Six Forgotten Warriors"*), clímax de la Segunda Guerra Mundial donde el Capitán América y los campeones combaten el dispositivo del Juicio Final, culminando con Steve Rogers tackleando a Red Skull dentro del vórtice dimensional donde quedan atrapados por 50 años. Coordenadas de Pripyat `[51.2763, 30.2219]`.
    - [x] `era-_1959_`: *X-Men TAS* (T4 E1 *"One Man's Worth"*), atentado temporal de Trevor Fitzroy contra el joven Charles Xavier de 20 años en Oxford, defendido por Wolverine, Storm y Bishop. Coordenadas de Oxford `[51.752, -1.2577]`.
  - [x] **Dossiers y Glows de Personajes**:
    - [x] `trevor-fitzroy` y `whizzer-robert-frank` agregados a `src/data/charactersData.ts` con bios completas, afiliaciones y roles.
    - [x] Clases CSS `.trevor-fitzroy` y `.whizzer-robert-frank` añadidas a `src/styles/global.css`.
  - [x] Compilación exitosa `npm run build` con 0 errores.

---

## 🎖️ 7. Auditoría Exhaustiva de Producciones Pre-TAS: Desglose In-Universe de Flashbacks, Infancias y Saltos Temporales
- [x] **Resultado Observable**: Auditoría y regularización meticulosa de las 10 producciones pre-TAS del catálogo (*Eyes of Wakanda*, *Spider-Noir*, *Captain America: The First Avenger*, *Agent Carter*, *X-Men: First Class*, *X-Men Origins: Wolverine*, *X-Men: Days of Future Past*, *X-Men: Apocalypse*, *X-Men: Dark Phoenix*, *Captain Marvel*). Se calcularon y desglosaron en sus años diegéticos exactos todos los recuerdos de infancia, callejones de reclutamiento, orígenes de la Habitación Roja y campañas bélicas anuales completas omitidas.
- [x] **Criterios de Aceptación**:
  - [x] **Capitán América (`captain-america-1`)**:
    - [x] `era-_c__1925_`: Steve Rogers a los 7 años atacado por matones en el patio de la escuela PS 13 de Brooklyn; Bucky Barnes (8 años) interviene para defenderlo, sellando su hermandad centenaria.
    - [x] `era-_1941_`: Callejón de Brooklyn tras Pearl Harbor. Steve reiteradamente rechazado 4-F defiende el noticiero bélico, levanta una tapa de basurero como escudo y pronuncia *"I can do this all day"*. Bucky en uniforme de la 107th lo rescata.
    - [x] `era-_1942_`: Separada la *1942 Stark World Exposition of Tomorrow* en Flushing Meadows, Queens (auto volador de Howard Stark y entrevista de reclutamiento del Dr. Abraham Erskine: *"No me gustan los matones"*).
    - [x] `era-_1943_`: Refactorizado para comenzar en el Campamento Lehigh (granada activa), transformación con suero y rayos Vita, muerte de Erskine, tour de bonos, rescate en solitario de Azzano (Austria), escudo de Vibranium y forja de los Howling Commandos.
    - [x] `era-_1944_`: Agregada la campaña militar europea anual completa de los Howling Commandos (Capitán América, Bucky, Dum Dum Dugan, Gabe Jones, Jim Morita, Jacques Dernier, Montgomery Falsworth) desmantelando fábricas de HYDRA por Francia, Bélgica y Alemania.
  - [x] **Agent Carter (`agent-carter-i` & `agent-carter-ii`)**:
    - [x] `era-_1937_`: Flashback a la URSS de 1937 en la *Red Room Academy*; niñas de 10 años encadenadas a las camas viendo *Blancanieves* y adiestradas en estrangulamiento letal (origen de Dottie Underwood y del programa Black Widow).
    - [x] `era-_1940_`: Flashback en Hampstead, Inglaterra; Peggy comprometida para matrimonio tradicional; su hermano el teniente Michael Carter la motiva a aceptar la invitación del SOE; muerte en combate de Michael en Francia que impulsa a Peggy a convertirse en agente de campo de inteligencia.
  - [x] **Captain Marvel (`captain-marvel-1`)**:
    - [x] `era-_c__1971_`: Flashback de infancia; Carol Danvers a los 6 años en Boston vuelca su karting casero; desafiando los gritos de su padre de que las carreras no son para niñas, se pone de pie con la rodilla sangrando, germen de su indomable voluntad heroica.
  - [x] **Dossiers y Estilos de Personajes**:
    - [x] Incorporados a `src/data/charactersData.ts`: `gabe-jones`, `jim-morita`, `jacques-dernier`, `james-montgomery-falsworth` y `michael-carter` con bios, grupos, orígenes y roles completos.
    - [x] Creadas las clases CSS de neón en `src/styles/global.css`: `.gabe-jones`, `.jim-morita`, `.jacques-dernier`, `.james-montgomery-falsworth` y `.michael-carter`.
  - [x] Compilación obligatoria exitosa `npm run build` con 0 errores de TypeScript y bundling.

---

## 🪐 8. Auditoría y Registro de Cameos Canónicos: The Phoenix Saga & Earthside Response (Earth-92131)
- [x] **Resultado Observable**: Auditoría y enriquecimiento canónico de los cameos y repercusiones en la Tierra de la crisis cósmica del Cristal M'Kraan y Dark Phoenix en *X-Men: TAS* Temporada 3 (1994).
- [x] **Criterios de Aceptación**:
  - [x] **Dossier de Personaje**: Creado `captain-britain` (Brian Braddock) en `src/data/charactersData.ts` con origen en Londres, afiliación con Captain Britain Corps / Excalibur / MI-13, y rol de héroe místico.
  - [x] **Glows CSS en `src/styles/global.css`**: Incorporadas las clases `.captain-britain` y `.peter-parker-spider-man` con sus respectivos colores y text-shadows de neón.
  - [x] **Eventos en Timeline (`src/data/timelineData.ts`)**:
    - [x] `event-1994-tas-3-phoenix-shiar`: Actualizado para incorporar la repercusión de la crisis del Cristal M'Kraan en la Tierra con Doctor Strange (Sanctum Sanctorum, Nueva York), Captain Britain (Londres, Inglaterra) y Spider-Man (rescate de civiles en las avenidas de Manhattan). Agregadas las 3 locaciones con coordenadas cartográficas reales de Leaflet y los personajes etiquetados.
    - [x] `event-1994-tas-3-dark-phoenix`: Agregado el registro de Doctor Strange sintiendo desde el Sanctum Sanctorum la aniquilación cósmica del sistema estelar D'Bari provocada por Dark Phoenix.
  - [x] Compilación obligatoria exitosa `npm run build` con 0 errores.

---

## ⚡ 9. Optimización de Arquitectura, Performance, Linting & Registro Canónico (Fases 1, 2 y 3)
- [x] **Resultado Observable**: Reducción del ~95% del bundle principal de entrada (de 1,516 kB a 78 kB) mediante code-splitting, memorización reactiva O(1) de búsquedas en runtime y creación del Registro Maestro de Producciones Auditadas (`docs/AUDITED_PRODUCTIONS.md`).
- [x] **Criterios de Aceptación**:
  - [x] **Fase 1 (Correcciones Inmediatas & Linters)**:
    - [x] Creado `eslint.config.js` compatible con ESLint v10 y TypeScript; `npm run lint` pasa con 0 errores y 0 advertencias.
    - [x] Unificación de alias en `src/data/charactersData.ts` con `characterAliases` y helper seguro `getCharacterById`. Se mapearon y resolvieron 100% las 16 discrepancias de IDs del timeline (`tony-stark-iron-man`, `clint-barton`, `james-rhodes`, `hank-mccoy-beast`, etc.) sin duplicar cards en `allCharacters`.
    - [x] `normalizeCharacterId` en `src/screens/MapScreen.tsx` actualizado para consumir directamente el mapa de alias unificado.
  - [x] **Fase 2 (Code-Splitting y Optimización de Carga)**:
    - [x] Configuración de `manualChunks` en `vite.config.ts` segregando `vendor-leaflet`, `vendor-react`, `vendor-icons`, `timeline-data` y `characters-data`.
    - [x] Code-splitting en `src/app/App.tsx` con `React.lazy()` y `<Suspense>` para todas las pantallas (`TimelineScreen`, `MapScreen`, `MediaScreen`, `CharactersScreen`, `StonesScreen`, `BookmarksScreen`, `StatsScreen`), aislando Leaflet al mapa.
    - [x] Fallback de carga con temática Marvel integrado en `App.tsx`.
    - [x] Compilación y bundling `npm run build` en ~745ms sin warnings de chunk size (`dist/assets/index-*.js` en 78 kB).
  - [x] **Fase 3 (Rendimiento en Runtime, Memoización O(1) & Registro Canónico)**:
    - [x] Creado `docs/AUDITED_PRODUCTIONS.md` como fuente de verdad canónica e integrado en `.agents/AGENTS.md` para delimitar producciones auditadas vs. backlog pendiente.
    - [x] `src/screens/CharactersScreen.tsx`: `appearanceCounts` y `filteredCharacters` memoizados con `useMemo`.
    - [x] `src/components/CharacterDrawer.tsx` y `src/components/MediaDetailModal.tsx`: Búsqueda de apariciones y eventos memoizada con `useMemo`.
    - [x] `src/screens/BookmarksScreen.tsx`: Búsqueda de eventos guardados optimizada con `useMemo` y `Set<string>` O(1).
    - [x] `src/components/EventCard.tsx`: Integrado `React.memo`, selectores específicos de Zustand y lookup O(1) vía `cssClassToCharacterId` eliminando re-renders masivos.
    - [x] `src/screens/TimelineScreen.tsx`: Encabezados de era extraídos al componente memoizado `EraHeader`, eliminando cómputo inline en JSX.
    - [x] Compilación obligatoria exitosa `npm run build` y `npm run lint` con 0 errores y 0 warnings.

---

## 📌 10. Auditoría e Integración Canónica de X-Men '97 (Temporada 1)
- [x] **Auditoría Diegética Completa (PNC - Ley Suprema N° 1)**:
  - [x] Desglose y reclasificación de los 10 episodios en 7 hitos cronológicos mayores diegéticos a través de 3 eras distintas:
    - **c. 3000 B.C.E.** (`era-_c__3000_B_C_E__`): Desplazamiento temporal de Asteroid M al Antiguo Egipto; Xavier, Magneto, Rogue, Beast y Nightcrawler rescatados por el joven mortal En Sabah Nur (`event-3000bce-xmen97-ancient-egypt-en-sabah-nur`).
    - **1997** (`era-_1997_`): Continuación inmediata de *Graduation Day* (X-Men TAS S5E10):
      1. Nuevo Orden & Juicio en la ONU; ataque de Friends of Humanity y pérdida de poderes de Storm (`event-1997-xmen97-new-order-un-trial-storm-fall`).
      2. Revelación del clon de Jean, Madelyne Pryor (Goblin Queen), pacto con Sinister y exilio temporal del infante Nathan Summers al futuro (`event-1997-xmen97-fire-made-flesh-goblin-queen-nathan-exile`).
      3. Simulación de Mojoverse / Motendo (Jubilee & Roberto) y renacimiento de poderes de Storm junto a Forge en Eagle Plaza; retorno de Xavier desde Chandilar (`event-1997-xmen97-motendo-lifedeath-storm-rebirth`).
      4. Genocidio mutante en Genosha por el Tri-Sentinel de Bastion; muerte de Magneto aparente y sacrificio cinético inmortal de Gambit (`event-1997-xmen97-genosha-holocaust-gambit-sacrifice`).
      5. Operación Zero Tolerance, Centinelas Prime, EMP global de Magneto desde el Polo Norte, extracción de adamantium de Wolverine en Asteroid M, caída e implosión temporal de Asteroid M y alianza táctica Bishop/Forge (`event-1997-xmen97-tolerance-extinction-emp-asteroid-m`).
    - **3960 C.E.** (`era-_3960_C_E__`): Desplazamiento temporal de Cyclops y Jean Grey dos milenios al futuro apocalíptico de En Sabah Nur; unión al Clan Askani liderado por Mother Askani (Rachel Summers) y rescate del joven Nathan Summers (`event-3960-xmen97-far-future-clan-askani`).
  - [x] **Dossiers de Personajes & Glows Visuales**:
    - Registrados 6 nuevos personajes con bios y estilos neón: `madelyne-pryor-goblin-queen`, `bastion-sebastion-gilberti`, `forge`, `mother-askani-rachel-summers`, `valerie-cooper`, `young-nathan-summers`.
    - Agregados alias unificados en `characterAliases` para detección y conteo instantáneo en drawers (`madelyne-pryor`, `goblin-queen`, `bastion`, `val-cooper`, `baby-nathan`, `rachel-summers`, `mother-askani`, etc.).
  - [x] **Cartografía y Coordenadas Reales**:
    - Locaciones terrestres vinculadas con coordenadas GPS reales (Nilo/Giza en Egipto, Genosha City, Dallas Eagle Plaza, Galápagos, Polo Norte Magnético).
    - Locaciones extraterrestres/orbitales (`Asteroid M Orbital Citadel`) catalogadas diegéticamente.
  - [x] **Catálogo de Medios & Registro Canónico**:
    - `x-men-97-1` agregado a `src/data/mediaData.ts` (Order 80, Marvel Television, releaseYear 2024, Earth-92131).
    - Actualizado `docs/AUDITED_PRODUCTIONS.md`, promoviendo *X-Men '97* de backlog a producción auditada oficial.
  - [x] **Propagación Retroactiva de Personajes en Producciones Auditadas**:
    - **Callisto**: Etiquetada con `<strong class="callisto">` e integrada en los arreglos de `characters` y `locations` en *X-Men: TAS* 1992 (*Captive Hearts*, duelo con Storm en las cloacas de Manhattan) y 1996 (*Out of the Past*, túneles Morlock atacados por Lady Deathstrike).
    - **Forge**: Etiquetado con `<strong class="forge">` e integrado en 2055 (*Days of Future Past* y *Time Fugitives*, activación de la muñequera temporal para Bishop) y 1996 (*The Phalanx Covenant*, alianza con Bestia y Magneto en Muir Island).
    - **Sebastian Shaw & Emma Frost**: Etiquetados con sus clases correspondientes e integrados en 1994 (*The Dark Phoenix Saga*, manipulación del Club Hellfire en Manhattan, añadiendo la locación en Upper East Side).
    - **Master Mold**: Etiquetado con `<strong class="master-mold">` e integrado en 1992 (*Slave Island* en Genosha con Trask) y 1995 (*One Man's Worth*).
    - **Dr. Valerie Cooper**: Mencionada y etiquetada en el juicio de la ONU de 1997 (*New Order*).
    - **Sunspot, Blink, Colossus, Iceman, Bishop, Kitty Pryde**: Etiquetados exhaustivamente en la batalla final del monasterio de Wulin en 2023 (*Days of Future Past*).
    - **Telepatas & Villanos en Beyond Good and Evil (1995)**: Etiquetados Mister Sinister, Magneto, Charles Xavier, Jean Grey, Psylocke y Emma Frost.

---

## 📌 11. Hash Routing, Navegación Nativa y Apertura en Nueva Pestaña (UX / Historial)
- [x] **Enrutamiento Reactivo por Hash y Sincronización de URLs**:
  - [x] Creado `src/utils/routeUtils.ts` con funciones puras para parsing determinista de hash, generación de URLs y recuperación de estado inicial (`getInitialActiveScreen`, `getInitialMapLocationPin`).
  - [x] Creado `src/hooks/useHashRouter.ts` para sincronizar `window.location.hash` con el store de Zustand de forma reactiva, bidireccional y sin dependencias externas pesadas.
  - [x] Compatibilidad 100% con GitHub Pages y Vite (`#/timeline`, `#/media`, `#/characters`, `#/stones`, `#/map`, `#/bookmarks`, `#/stats`).
  - [x] Soporte de deep-linking para locaciones en el mapa (`#/map?loc=...&lat=...&lng=...&event=...`).
- [x] **Apertura Nativa en Nueva Pestaña (Middle-Click / Ruedita del Mouse & Ctrl+Click)**:
  - [x] Corregido el bug donde abrir pestañas en segundo plano reescribía la URL a `#/timeline`: ahora el store de Zustand inicializa `activeScreen` y `selectedMapLocationPin` de forma sincrónica e instantánea desde el hash actual en el primer frame, y `useHashRouter` protege el hash inicial con `isInitialMountRef` y `isSyncingFromHashRef`.
  - [x] Todos los manejadores `onClick` de las etiquetas `<a>` (Navbar tabs, pastillas de locación en `EventCard.tsx`, logo de Marvel y footer) validan `e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0`, permitiendo al navegador abrir la pestaña nativa sin interceptar el click.
  - [x] Middle-click (o Ctrl+Click / botón derecho "Abrir en nueva pestaña") abre la nueva pestaña directamente en la vista correspondiente (ej. `#/media` abre Movies & Series; una pastilla de locación abre el Mapa centrado en las coordenadas correspondientes).
- [x] **Navegación con Botón "Atrás" del Mouse & Historial del Navegador**:
  - [x] Registro de historial nativo (`window.history` / `popstate` / `hashchange`).
  - [x] Preservación y restauración instantánea de la posición de scroll (`window.scrollY`) al regresar al Timeline con el botón "Atrás" del mouse o del navegador.
- [x] **Validación**:
  - [x] `npm run lint` y `npm run build` con 0 errores.
  - [x] Verificado con subagente de navegador en tiempo real sobre la app corriendo.

---

## 📌 12. Backlog de Ideas & Tareas Pendientes
- [ ] Auditoría de películas de la Fase 2 y 3 no auditadas previamente (*Ant-Man and the Wasp*, *Thor: The Dark World* 2988 B.C.E., *Infinity War* Zen-Whoberi 1996, *Civil War* 1991).
- [ ] Evaluación y auditoría de *Spider-Man Unlimited* (Earth-751263 / Counter-Earth).



