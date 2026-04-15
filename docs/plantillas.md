# Plantillas funcionales

Estas plantillas son archivos de texto con instrucciones que Claude Code lee automáticamente. Cuando copias una plantilla a tu carpeta de workspace, Claude la usa como contexto para entender quién eres y cómo ayudarte.

---

## Cómo funciona: módulos vs. plantillas

| | Módulo | Plantilla |
|---|--------|-----------|
| **Para quién** | Para ti (el manager) | Para Claude Code |
| **Qué es** | Una explicación de la filosofía y cómo está construido | Un archivo con instrucciones operativas |
| **Qué haces con él** | Lo lees para entender qué hace y por qué | Lo copias a tu workspace tal cual |

**Flujo en 3 pasos:**

1. **Lee el módulo** → entiende la filosofía y qué esperar
2. **Copia la plantilla** → pégala en tu workspace como archivo `.md`
3. **Abre Claude Code** → él te hace las preguntas que necesita y empieza a funcionar

!!! success "No necesitas editar nada"
    Las plantillas están diseñadas para ser **plug-and-play**. Cuando abras Claude Code por primera vez después de copiar una plantilla, él te hará las preguntas necesarias (tu nombre, cargo, estilo, etc.) y llenará la información automáticamente. No tienes que editar los archivos a mano.

---

## Cómo copiar una plantilla

1. Haz clic en "Ver contenido completo" de la plantilla que te interese
2. Copia todo el texto que aparece dentro del bloque
3. Abre un editor de texto (Notepad, TextEdit, o cualquiera) y pega el contenido
4. Guarda el archivo en tu carpeta de workspace con el nombre indicado (por ejemplo, `CLAUDE.md`)
5. Abre Claude Code en esa carpeta — él se encarga del resto

!!! tip "¿Qué es un archivo .md?"
    Es un archivo de texto simple (como un .txt) con formato básico. Puedes crearlo con cualquier editor de texto. Lo importante es que el nombre termine en `.md` (por ejemplo, `CLAUDE.md`, no `CLAUDE.md.txt`). En Windows, asegúrate de tener activada la opción "Mostrar extensiones de archivo" en el Explorador.

---

## Plantillas disponibles

### CLAUDE.md starter

Tu primer CLAUDE.md: le dice a Claude quién eres, qué haces y qué reglas seguir.

??? note "Ver contenido completo"
    ```markdown
    # Mi Workspace — Claude Code

    ## Onboarding (primera vez)

    Si los campos de abajo están vacíos o dicen "pendiente", antes de
    hacer cualquier otra cosa pregúntale al usuario:

    1. ¿Cómo te llamas y cuál es tu cargo en IPA Colombia?
    2. ¿Cuáles son tus 3 responsabilidades principales?
    3. ¿Qué carpetas usas para organizar tu trabajo?
       (si no tiene estructura, sugiérele: proyectos/ y drafts/)

    Con las respuestas, llena los campos de abajo directamente en este
    archivo. No le pidas al usuario que los edite manualmente.

    ## Quién soy
    - Nombre: pendiente
    - Rol: pendiente
    - Zona horaria: America/Bogota
    - Idioma: Español (inglés profesional cuando se requiera)

    ## Mi trabajo principal
    - pendiente
    - pendiente
    - pendiente

    ## Reglas de seguridad (IPA AI Usage Guidelines)
    - Nunca incluir datos de participantes de investigación
    - Nunca incluir evaluaciones de desempeño sin aprobación MIST
    - Evitar cifras específicas de salarios o presupuestos en los prompts
    - Ortografía en español: tildes, eñes y puntuación correcta siempre

    ## Estructura
    [se llena durante onboarding]
    ```

---

### Comunicaciones starter

Instrucciones para que Claude redacte mensajes en tu voz. Incluye perfil de voz, niveles de tono, y un log de correcciones que crece con el uso.

Ver [Módulo de Comunicaciones](modulos/01-comunicaciones.md) para entender la filosofía.

??? note "Ver contenido completo"
    ```markdown
    # Comunicaciones — Instrucciones para Claude Code

    ## Onboarding (primera vez)

    Si los campos de identidad dicen "pendiente", antes de redactar
    cualquier mensaje pregúntale al usuario:

    1. ¿Cómo te llamas y cuál es tu cargo?
    2. ¿Cómo describirías tu estilo de comunicación en una frase?
       (ej: "directo y profesional", "cálido pero conciso", "formal pero humano")
    3. ¿Hay frases o muletillas que NO quieres que use?
       (ej: "espero que estés bien", "me permito informar", párrafos largos sin bullets)
    4. ¿Tuteas a tu equipo o los tratas de usted?

    Con las respuestas, llena los campos de abajo directamente en este
    archivo. No le pidas al usuario que los edite manualmente.

    ## Tu perfil de voz

    Cuando redactes mensajes para mí, sigue estas reglas:

    ### Identidad
    - Nombre: pendiente
    - Rol: pendiente
    - Estilo general: pendiente

    ### Estructura de mensajes
    Todo mensaje debe tener esta estructura (adaptada al formato):
    1. **Por qué ahora**: qué cambió o qué detona este mensaje
    2. **Qué importa**: el contenido central
    3. **Qué se pide**: acción explícita
    4. **Para cuándo / quién**: deadline y responsable

    ### Niveles de tono
    - **Formal**: para donantes, gobierno, HQ. Oraciones completas, usted.
    - **Profesional-cercano**: para el equipo y colegas. Tuteo, directo, bullets.
    - **Informal**: para confirmaciones rápidas y WhatsApp. 1-2 oraciones.

    Selecciona el tono automáticamente según el destinatario. Si no es
    claro, pregunta antes de redactar.

    ### Lo que NO quiero
    - pendiente (se llena durante onboarding)

    ## Log de correcciones

    Cada vez que el usuario corrija un borrador, agrega la corrección aquí
    siguiendo este formato. Si este archivo no tiene correcciones aún,
    crea la primera entrada cuando el usuario te corrija por primera vez.

    ### Ejemplo de entrada:
    ### 2026-04-15 | email formal | donante USAID
    - "No usar 'me permito' — suena burocrático. Usar 'te comparto' o ir directo al punto."

    ### Correcciones:
    <!-- Este log crece con el uso. Entre más correcciones,
         mejor escribe Claude como tú. Léelo SIEMPRE antes de
         redactar un mensaje nuevo. -->
    ```

---

### Tareas starter

Setup mínimo para seguimiento de compromisos con una tabla simple. Claude la actualiza cuando le pides agregar, completar o revisar tareas.

Ver [Módulo de Gestión de tareas](modulos/02-gestion-de-tareas.md) para entender la filosofía.

??? note "Ver contenido completo"
    ```markdown
    # Seguimiento de tareas — Instrucciones para Claude Code

    ## Onboarding (primera vez)

    Si la tabla de tareas está vacía o solo tiene el ejemplo, pregúntale
    al usuario:

    1. ¿Cuáles son tus proyectos activos? (nombres cortos)
    2. ¿Qué compromisos tienes esta semana?
    3. ¿Hay algo bloqueado o esperando a alguien?

    Con las respuestas, llena la tabla de abajo directamente en este
    archivo. No le pidas al usuario que los edite manualmente.

    ## Cómo funciona

    Mantengo mis compromisos en este archivo. Claude me ayuda a
    actualizarlos, priorizarlos y revisarlos semanalmente.

    ## Tareas activas

    | # | Tarea | Estado | Prioridad | Proyecto | Fecha |
    |---|-------|--------|-----------|----------|-------|

    ## Completadas esta semana

    <!-- Mover aquí las tareas completadas al final de cada semana -->

    ## Instrucciones para Claude

    ### Estados válidos
    - `pendiente` — no se ha empezado
    - `en progreso` — se está trabajando activamente
    - `bloqueada` — detenida por una dependencia (indicar por qué)
    - `completada` — terminada

    ### Gestión de tareas
    - Cuando agregues tareas, usa el formato de la tabla
    - Los títulos van en infinitivo: "enviar brief", "revisar propuesta"
    - Cuando actualices el estado, cambia la columna directamente
    - Si una tarea lleva más de una semana como "pendiente", señálalo

    ### Revisión semanal (cuando el usuario la pida)
    Presenta estos 5 bloques en orden, esperando reacción entre cada uno:
    1. **Qué logramos**: tareas completadas, agrupadas por proyecto
    2. **Qué está en curso**: tareas activas + próximo paso concreto
    3. **Qué está bloqueado**: tareas detenidas + qué se necesita
    4. **Balance**: clasifica la semana en estratégico (avanzar prioridades),
       operativo (mantener la oficina), reactivo (responder urgencias).
       Estima porcentaje de cada uno. Meta: estratégico > 40%.
    5. **Próxima semana**: qué priorizar primero

    Después del review, mueve las completadas a la sección correspondiente
    y genera un snapshot guardable como referencia.

    ### Escalamiento
    Este sistema es un punto de partida. Si necesitas más estructura
    (dependencias entre tareas, auto-sync, dashboard), Claude puede
    ayudarte a construirlo incrementalmente.
    ```

---

### KB consulta starter

Instrucciones para que Claude Code sepa dónde encontrar el Knowledge Base de BD en Box y cómo consultarlo.

!!! warning "Requisito"
    Necesitas tener Box Drive sincronizado para que Claude Code pueda leer los archivos del KB.

Ver [Módulo de Knowledge Base](modulos/03-knowledge-base.md) para entender qué contiene y la visión futura.

??? note "Ver contenido completo"
    ```markdown
    # Knowledge Base de BD — Instrucciones para Claude Code

    ## Onboarding (primera vez)

    Si la ruta del KB dice "pendiente" o contiene "[TU-USUARIO]",
    pregúntale al usuario:

    1. ¿Cuál es tu usuario de Windows? (para armar la ruta de Box)
       En Mac la ruta es ~/Box/... y no necesita usuario.
    2. ¿Ya tienes Box Drive instalado y sincronizado?
       Si no → indicarle que lo descargue de box.com/drive o pida
       ayuda al helpdesk.

    Con la respuesta, reemplaza [TU-USUARIO] en las rutas de abajo.
    Si el usuario tiene CLAUDE.md, agrega la línea del KB ahí también.

    ## Qué es

    El Knowledge Base de Business Development de IPA Colombia.
    Contiene perfiles de aliados, assets reutilizables, portafolios
    temáticos y un pipeline de oportunidades.

    ## Dónde está

    - Windows: C:/Users/pendiente/Box/Oficina IPA Colombia/07_Budget Template/CO BD Knowledge Base/
    - Mac: ~/Box/Oficina IPA Colombia/07_Budget Template/CO BD Knowledge Base/

    ## Cómo consultarlo

    Cuando el usuario pregunte sobre aliados, oportunidades,
    propuestas, el pipeline de BD, o diga "el KB" / "nuestro KB",
    ve directo a la ruta de arriba. El KB tiene su propio CLAUDE.md
    con la estructura, taxonomía y reglas de edición.

    ### Preguntas típicas que puedes responder
    - "¿Con qué aliados tenemos oportunidades activas este trimestre?"
    - "Busca el thread de [nombre] y hazme un resumen"
    - "¿Qué assets tenemos para una reunión sobre educación?"
    - "Muéstrame el pipeline y dime qué necesita acción"

    ## Reglas
    - El KB es un recurso de equipo — no agregar info privada
    - No agregar valoraciones personales ni información de desempeño
    - Si la información parece desactualizada, mencionarlo al usuario
    ```

---

### Presentaciones IPA starter

Instrucciones para que Claude Code genere presentaciones .pptx con la marca de IPA aplicada automáticamente.

Ver [Módulo de Presentaciones](modulos/04-presentaciones-ipa.md) para entender la filosofía.

??? note "Ver contenido completo"
    ```markdown
    # Presentaciones IPA — Instrucciones para Claude Code

    ## Onboarding (primera vez)

    Antes de generar la primera presentación, verifica:

    1. ¿El usuario tiene Node.js instalado?
       Comprueba ejecutando: node --version
       Si no está instalado, indícale: "Para generar presentaciones
       necesito Node.js. Descárgalo de https://nodejs.org (versión LTS)
       e instálalo. Después reinicia Claude Code."

    2. ¿Existe pptxgenjs en el workspace?
       Comprueba si existe node_modules/pptxgenjs
       Si no, ejecuta: npm install pptxgenjs

    Una vez confirmados ambos, puedes generar presentaciones.

    ## Cómo generar una presentación

    Cuando el usuario pida una presentación:

    1. Recibe el brief en texto libre
    2. Genera un archivo build-slides.js en la carpeta del workspace
    3. El script debe usar pptxgenjs para crear el .pptx
    4. Ejecuta: node build-slides.js
    5. Confirma al usuario que el .pptx se generó y dónde está

    ## Estructura del script build-slides.js

    El script siempre debe seguir esta estructura:

    ```
    const pptxgen = require("pptxgenjs");
    const pptx = new pptxgen();

    // Configuración base
    pptx.layout = "LAYOUT_16x9";
    pptx.author = "IPA Colombia";

    // Función de sombra (NUNCA reutilizar objetos de sombra)
    function makeShadow() {
      return { type: "outer", blur: 3, offset: 2,
               color: "000000", opacity: 0.3 };
    }

    // Crear slides...
    // [cada slide con su tipo de layout]

    // Guardar
    pptx.writeFile({ fileName: "presentacion.pptx" });
    ```

    ## Marca IPA — Colores

    Primarios:
    - Dark Green: #155240 (RGB 21,82,64) — fondos oscuros, títulos
    - IPA Green: #49AC57 (RGB 73,172,87) — acentos, barras laterales

    Secundarios:
    - Light Gray: #F1F2F2 — fondos claros
    - Charcoal: #414042 — texto cuerpo
    - Dark Blue: #2B4085 — acentos alternativos
    - Red-Orange: #F26529 — highlights, llamados de atención

    Usar máximo 3 colores por presentación. Priorizar legibilidad.

    ## Marca IPA — Tipografía

    - Títulos: Georgia Regular (22-42pt según importancia)
    - Labels y subtítulos: Arial Bold CAPS (9pt, con charSpacing)
    - Cuerpo y bullets: Arial Regular (10-13pt)

    ## Elementos obligatorios en cada presentación

    - Barra de acento izquierda: rectángulo verde (#49AC57) de 0.06"
      de ancho en slides de contenido
    - Footer: número de slide en cada slide
    - Sombras: usar makeShadow() — nunca reutilizar el mismo objeto

    ## Tipos de layout disponibles

    Varía los layouts para evitar monotonía. Nunca dos slides
    consecutivas con el mismo layout. Tipos disponibles:
    - dark-title: fondo oscuro (#155240), texto blanco (para inicio/cierre)
    - stat-cards: tarjetas con números grandes y etiquetas
    - three-column: 3 columnas con iconos o viñetas
    - two-column: contenido dividido en dos
    - comparison: lado a lado con contraste visual
    - numbered-flow: pasos numerados en secuencia
    - timeline: progresión temporal
    - bullets: lista con jerarquía visual (usar con moderación)
    - table: datos tabulares con formato IPA

    ## Reglas de slides

    - Una idea principal por slide
    - Jerarquía visual clara: título > subtítulo > contenido
    - Bullets cortos (máximo 2 líneas cada uno)
    - Datos siempre con fuente citada
    - Slide de título: tema + fecha + "IPA Colombia" (usar dark-title)
    - Slide final: próximos pasos o call to action (usar dark-title)
    - En títulos en español: solo mayúscula inicial y nombres propios

    ## Estructura sugerida

    1. Título y fecha (dark-title)
    2. Contexto / por qué importa
    3-N. Contenido principal (un tema por slide, variando layouts)
    N+1. Próximos pasos o cierre (dark-title)

    ## Cómo recibir el brief

    El usuario describe lo que necesita en texto libre.
    Ejemplo: "Hazme 6 slides sobre X. Slide 1: título.
    Slide 2: contexto. Slides 3-5: hallazgos. Slide 6: cierre."

    Genera el .pptx en la carpeta de workspace del usuario.
    ```

---

### Revisión semanal starter

Instrucciones para que Claude Code te ayude a hacer una revisión estructurada de tu semana.

Ver [Módulo de Revisión semanal](modulos/05-revision-semanal.md) para entender la filosofía.

??? note "Ver contenido completo"
    ```markdown
    # Revisión semanal — Instrucciones para Claude Code

    ## Onboarding (primera vez)

    Si es la primera vez que el usuario pide un review, pregúntale:

    1. ¿Ya tienes un archivo de tareas en tu workspace?
       (si sí, ¿cómo se llama? si no, puedo crear uno contigo)
    2. ¿Cada cuándo quieres hacer el review? (semanal es lo recomendado)
    3. ¿Cuáles son tus proyectos activos y a cuál pilar estratégico
       pertenece cada uno? (si no tiene pilares claros, está bien —
       la clasificación puede ser simplemente: estratégico, operativo,
       o reactivo por proyecto)

    Guarda las respuestas en la sección de configuración de abajo.

    ## Configuración

    - Archivo de tareas: pendiente
    - Frecuencia: semanal (viernes)
    - Carpeta de snapshots: reviews/

    ## Qué hacer

    Cada viernes (o cuando el usuario lo pida), facilita una revisión
    semanal estructurada. El objetivo es dar claridad sobre qué
    avanzó, qué quedó pendiente, y qué priorizar la próxima semana.

    ## Estructura del review (5 bloques)

    Presenta cada bloque uno por uno. Espera la reacción del usuario
    antes de avanzar al siguiente. Si el usuario quiere repriorizar,
    delegar o cerrar algo, hazlo inmediatamente.

    ### 1. Qué logramos
    - Lista de tareas o compromisos completados esta semana
    - Agrupar por proyecto si hay varios

    ### 2. Qué está en curso
    - Tareas activas con su estado actual
    - Próximo paso concreto para cada una

    ### 3. Qué está bloqueado
    - Tareas detenidas y por qué
    - Qué se necesita para desbloquearlas (una decisión, información,
      una persona)

    ### 4. Balance estratégico
    Clasifica las actividades de la semana en tres categorías:

    - **Estratégico**: avanzar prioridades del plan o proyectos clave.
      Ejemplos: preparar propuesta para donante, avanzar plan estratégico,
      desarrollar alianza nueva.
    - **Operativo**: mantener la oficina funcionando. Ejemplos: procurement,
      HR, finanzas, reuniones de rutina, reportes recurrentes.
    - **Reactivo**: responder a lo urgente e inesperado. Ejemplos:
      solicitud de HQ no planeada, ajuste de presupuesto por TRM,
      problema de seguridad.

    Estima el porcentaje aproximado de cada categoría.
    Meta: mantener estratégico por encima de 40%.
    Compara con semanas anteriores si hay snapshots previos.

    ### 5. Decisiones pendientes
    - Qué necesita atención la próxima semana
    - Qué priorizar primero

    ## Fuentes de información

    - Si hay un archivo de tareas en el workspace, léelo
    - Si no, pide al usuario que liste sus compromisos de la semana
    - Si hay reviews anteriores en reviews/, léelos para comparar

    ## Al finalizar

    Genera un snapshot en formato markdown con este nombre:
    reviews/weekly-review-YYYY-MM-DD.md

    El snapshot debe incluir los 5 bloques con las decisiones tomadas
    durante la conversación.

    ## Reglas

    - Sé directo: di qué avanzó y qué no, sin suavizar
    - Si algo lleva más de 2 semanas pendiente, señálalo explícitamente
    - No agregar tareas nuevas sin que el usuario lo pida
    - No inventar tareas que no existan en la fuente de información
    ```

---

**Siguiente paso:** [Explorar los módulos](modulos/index.md)
