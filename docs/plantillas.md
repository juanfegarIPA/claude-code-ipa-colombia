# Plantillas funcionales

Estas plantillas son archivos de texto con instrucciones que Claude Code lee automáticamente. Cuando copias una plantilla a tu carpeta de workspace, Claude la usa como contexto para entender quién eres y cómo ayudarte.

---

## Cómo usar

1. Haz clic en "Ver contenido completo" de la plantilla que te interese
2. Copia todo el texto que aparece dentro del bloque
3. Abre un editor de texto (Notepad, TextEdit, o cualquiera) y pega el contenido
4. Guarda el archivo en tu carpeta de workspace con el nombre indicado (por ejemplo, `CLAUDE.md`)
5. Edita los campos entre corchetes `[Tu nombre]` con tu información real
6. Abre Claude Code en esa carpeta y listo: Claude leerá el archivo automáticamente

!!! tip "¿Qué es un archivo .md?"
    Es un archivo de texto simple (como un .txt) con formato básico. Puedes crearlo con cualquier editor de texto. Lo importante es que el nombre termine en `.md` (por ejemplo, `CLAUDE.md`, no `CLAUDE.md.txt`). En Windows, asegúrate de tener activada la opción "Mostrar extensiones de archivo" en el Explorador.

---

## Plantillas disponibles

### CLAUDE.md starter

Tu primer CLAUDE.md: le dice a Claude quién eres, qué haces y qué reglas seguir.

??? note "Ver contenido completo"
    ```markdown
    # Mi Workspace — Claude Code

    ## Quién soy
    - Nombre: [Tu nombre]
    - Rol: [Tu cargo], IPA Colombia
    - Zona horaria: America/Bogota
    - Idioma: Español (inglés profesional cuando se requiera)

    ## Mi trabajo principal
    - [Responsabilidad 1]
    - [Responsabilidad 2]
    - [Responsabilidad 3]

    ## Reglas de seguridad (IPA AI Usage Guidelines)
    - Nunca incluir datos de participantes de investigación
    - Nunca incluir evaluaciones de desempeño sin aprobación MIST
    - Evitar cifras específicas de salarios o presupuestos en los prompts
    - Ortografía en español: tildes, eñes y puntuación correcta siempre

    ## Estructura
    [Tu-Workspace]/
    ├── CLAUDE.md
    ├── proyectos/
    └── drafts/
    ```

---

### Comunicaciones starter

Instrucciones para que Claude redacte mensajes en tu voz. Incluye perfil de voz, niveles de tono, y un log de correcciones que crece con el uso.

Ver [Módulo de Comunicaciones](modulos/01-comunicaciones.md) para entender la filosofía.

??? note "Ver contenido completo"
    ```markdown
    # Comunicaciones — Instrucciones para Claude Code

    ## Tu perfil de voz

    Cuando redactes mensajes para mí, sigue estas reglas:

    ### Identidad
    - Nombre: [Tu nombre]
    - Rol: [Tu cargo], IPA Colombia
    - Estilo general: [ej: directo y profesional, cálido pero conciso]

    ### Estructura de mensajes
    1. **Por qué ahora**: qué cambió o qué detona este mensaje
    2. **Qué importa**: el contenido central
    3. **Qué se pide**: acción explícita
    4. **Para cuándo / quién**: deadline y responsable

    ### Niveles de tono
    - **Formal**: para donantes, gobierno, HQ. Oraciones completas.
    - **Profesional-cercano**: para el equipo y colegas. Tuteo, directo.
    - **Informal**: para confirmaciones rápidas y WhatsApp.

    ### Lo que NO quiero
    - [ej: frases genéricas como "espero que estés bien"]
    - [ej: párrafos largos sin bullets]
    - [ej: tono institucional inflado]

    ## Log de correcciones

    Cada vez que corrija un borrador, agrega la corrección aquí:

    ### [Fecha] | [tipo] | [destinatario]
    - "[Qué corregí y por qué]"

    <!-- Este log crece con el uso. Entre más correcciones,
         mejor escribe Claude como tú. -->
    ```

---

### Tareas starter

Setup mínimo para seguimiento de compromisos con una tabla simple. Claude la actualiza cuando le pides agregar, completar o revisar tareas.

Ver [Módulo de Gestión de tareas](modulos/02-gestion-de-tareas.md) para entender la filosofía.

??? note "Ver contenido completo"
    ```markdown
    # Seguimiento de tareas — Instrucciones para Claude Code

    ## Cómo funciona

    Mantengo mis compromisos en este archivo. Claude me ayuda a
    actualizarlos, priorizarlos y revisarlos semanalmente.

    ## Tareas activas

    | # | Tarea | Estado | Prioridad | Proyecto | Fecha |
    |---|-------|--------|-----------|----------|-------|
    | 1 | [ejemplo: enviar brief] | pendiente | alta | [proyecto] | [fecha] |

    ## Completadas esta semana

    <!-- Mover aquí las tareas completadas al final de cada semana -->

    ## Instrucciones para Claude

    - Cuando agregues tareas, usa el formato de la tabla
    - Cuando actualices el estado, cambia la columna directamente
    - Al final de la semana, si pido un review: resume qué se completó,
      qué sigue pendiente, y qué debería ser prioridad la próxima semana
    - Si una tarea lleva más de una semana como "pendiente", señálalo
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

    ## Qué es

    El Knowledge Base de Business Development de IPA Colombia.
    Contiene perfiles de aliados, assets reutilizables, portafolios
    temáticos y un pipeline de oportunidades.

    ## Dónde está

    [Ajusta esta ruta a tu computador]

    - Windows: C:\Users\[TU-USUARIO]\Box\Oficina IPA Colombia\
      07_Budget Template\CO BD Knowledge Base\
    - Mac: ~/Box/Oficina IPA Colombia/07_Budget Template/
      CO BD Knowledge Base/

    ## Cómo consultarlo

    Cuando pregunte sobre aliados, oportunidades, propuestas o el
    pipeline de BD, lee los archivos del KB en la ruta de arriba.

    ### Estructura del KB
    - **Threads**: perfiles de relaciones (un archivo por aliado)
    - **Assets**: collateral reutilizable (one-pagers, memos)
    - **Verticals**: portafolios temáticos con varios actores
    - **_pipeline.md**: dashboard del pipeline de oportunidades

    ### Ejemplos de consultas
    - "Qué aliados tenemos en educación?"
    - "Dame el resumen del thread con [organización]"
    - "Qué assets tenemos para una reunión con un donante?"
    - "Cómo está el pipeline?"

    ### Reglas
    - El KB es un recurso de equipo — no agregar info privada
    - Si la información parece desactualizada, mencionarlo
    ```

---

### Presentaciones IPA starter

Instrucciones para que Claude Code genere presentaciones .pptx con la marca de IPA aplicada automáticamente.

Ver [Módulo de Presentaciones](modulos/04-presentaciones-ipa.md) para entender la filosofía.

??? note "Ver contenido completo"
    ```markdown
    # Presentaciones IPA — Instrucciones para Claude Code

    ## Qué hacer

    Cuando te pida generar una presentación, crea un archivo .pptx
    usando la librería pptxgenjs (JavaScript) o python-pptx (Python),
    aplicando la marca de IPA.

    ## Marca IPA — Colores

    Primarios:
    - IPA Green: #49ac57 (RGB 73,172,87)
    - Dark Green: #155240 (RGB 21,82,64)

    Secundarios:
    - Light Gray: #f1f2f2
    - Charcoal: #414042
    - Light Blue: #84d0d4
    - Red-Orange: #f26529

    Usar máximo 3 colores por presentación. Priorizar legibilidad.

    ## Marca IPA — Tipografía

    - Títulos: Georgia Regular
    - Labels y subtítulos: Arial Bold (mayúsculas en labels)
    - Cuerpo y bullets: Arial Regular

    ## Reglas de slides

    - Una idea principal por slide
    - Jerarquía visual clara: título > subtítulo > contenido
    - Bullets cortos (máximo 2 líneas cada uno)
    - Datos siempre con fuente citada
    - Slide de título: tema + fecha + "IPA Colombia"
    - Slide final: próximos pasos o call to action

    ## Estructura sugerida

    1. Título y fecha
    2. Contexto / por qué importa
    3-N. Contenido principal (un tema por slide)
    N+1. Próximos pasos o cierre

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

    ## Qué hacer

    Cada viernes (o cuando el usuario lo pida), facilita una revisión
    semanal estructurada. El objetivo es dar claridad sobre qué
    avanzó, qué quedó pendiente, y qué priorizar la próxima semana.

    ## Estructura del review (5 bloques)

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
    - Clasificar las actividades de la semana en:
      - **Estratégico**: avanzar prioridades del plan o proyectos clave
      - **Operativo**: mantener la oficina funcionando (procurement,
        HR, finanzas, reuniones de rutina)
      - **Reactivo**: responder a lo urgente e inesperado
    - Estimar el porcentaje aproximado de cada categoría
    - Comparar con semanas anteriores si hay datos

    ### 5. Decisiones pendientes
    - Qué necesita atención la próxima semana
    - Qué priorizar primero

    ## Cómo funciona

    - Presenta cada bloque uno por uno
    - Espera la reacción del usuario antes de avanzar al siguiente
    - Si el usuario quiere repriorizar, delegar o cerrar algo,
      hazlo inmediatamente
    - Al final, genera un resumen guardado como snapshot semanal

    ## Fuentes de información

    - Si hay un archivo de tareas en el workspace, léelo
    - Si no, pide al usuario que liste sus compromisos de la semana
    - Si hay reviews anteriores, compara para identificar tendencias

    ## Reglas

    - Sé directo: di qué avanzó y qué no, sin suavizar
    - Si algo lleva más de 2 semanas pendiente, señálalo
    - No agregar tareas nuevas sin que el usuario lo pida
    ```

---

**Siguiente paso:** [Explorar los módulos](modulos/index.md)
