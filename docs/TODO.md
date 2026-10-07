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
- [x] **Resultado Observable**: 1994 consolidado con Fantastic Four T1, Iron Man T1 completa y el despertar de Peter Parker en Spider-Man T1.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `fantastic-four-tas-1`, `spider-man-tas-1`.
  - [x] Eventos de Fantastic Four T1: Origen en el espacio/teletón, Namor & Sub-Mariner, Invasión Skrull & Galactus/Silver Surfer, Mask of Doom (Grecia Antigua & Latveria), Mole Man y Negative Zone.
  - [x] Eventos de Iron Man T1: Clímax de Force Works, El Origen de Iron Man en el Ártico/Vietnam, Boda fingida con Julia Carpenter.
  - [x] Eventos de Spider-Man T1: Picadura, Noche del Lagarto, Spider-Slayers de Smythe, Alien Costume / Saga de Venom y Hobgoblin.
  - [x] Personajes con dossiers y glows en `global.css`.
  - [x] Compilación exitosa `npm run build`.

---

### Hito 2: Bloque 1995 (Crossovers Canónicos y Maduración Heroica)
- [x] **Resultado Observable**: `era-_1995_` enriquecida con los hitos de 1995 manteniendo la cohesión multiversal.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `spider-man-tas-2`, `iron-man-tas-2`, `fantastic-four-tas-2`, `x-men-tas-4`.
  - [x] Eventos de Spider-Man T2: *Neogenic Nightmare*, Mutación y Crossover histórico con X-Men (*The Mutant Agenda*), Morbius, Punisher y Blade.
  - [x] Eventos de Iron Man T2: Disolución de Force Works, estreno de la *Modular Armor*, Madame Masque y *Armor Wars*.
  - [x] Eventos de Fantastic Four T2: *Inhumans Saga*, Daredevil en el Edificio Baxter (*And a Blind Man Shall Lead Them*), Ego the Living Planet y Pantera Negra en Wakanda.
  - [x] Eventos de X-Men T4: *One Man's Worth* (línea temporal alternativa de Nimrod/Trevor Fitzroy), Proteus en Escocia, Asteroid M (*Sanctuary*), y *Beyond Good and Evil* (Apocalipsis y el Eje del Tiempo).
  - [x] Compilación exitosa `npm run build`.

---

### Hito 3: Bloque 1996 (Guerra Simbiótica, Gigantes Verdes y Caída de Duendes)
- [x] **Resultado Observable**: `era-_1996_` creada e integrada con Spider-Man T3, Incredible Hulk T1 y X-Men T4/T5.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `spider-man-tas-3`, `incredible-hulk-tas-1`, `x-men-tas-5`.
  - [x] Eventos de Spider-Man T3: *Sins of the Fathers*, Doctor Strange, El Duende Verde, Crossover con Daredevil en el juicio de Peter (*Framed*), *The Spot*, y Crossover de Iron Man & War Machine contra Venom & Carnage (*Venom Returns*).
  - [x] Eventos de The Incredible Hulk T1: Bruce Banner a la fuga, The Leader, Crossover de Iron Man & War Machine (*Helping Hand, Iron Fist*), Crossover de Thing y Fantastic Four (*Fantastic Fortitude*).
  - [x] Eventos de X-Men T4/T5: Lobezno y Capitán América en la Segunda Guerra Mundial (*Old Soldiers*), *The Phalanx Covenant*.
  - [x] Compilación exitosa `npm run build`.

---

### Hito 4: Bloque 1997–1998 (Secret Wars, Spider Wars y Graduation Day)
- [x] **Resultado Observable**: `era-_1997_` y `era-_1998_` creadas, culminando el ciclo animado clásico de los 90s.
- [x] **Criterios de Aceptación**:
  - [x] Medios registrados: `spider-man-tas-4`, `spider-man-tas-5`, `incredible-hulk-tas-2`.
  - [x] Eventos de Spider-Man T4 & T5: Boda de Peter y Mary Jane, *Six Forgotten Warriors* (Capitán América y Red Skull), *Secret Wars* (reunión cumbre de Spider-Man, Storm, Iron Man, Fantastic Four, Capitán América) y *Spider Wars* (Multiverso de clones, Madame Web y Stan Lee).
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

## 📌 5. Backlog de Ideas & Tareas Pendientes
- [ ] Fase 2 Multiverso: Evaluación de *X-Men '97* (Disney+) y *Spider-Man Unlimited* como continuaciones posteriores.
- [ ] Auditoría de películas live-action complementarias de los 90s (*Blade (1998)*) fuera de la burbuja animada de Earth-92131.

