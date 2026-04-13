# Plantillas funcionales

Estos archivos .md son instrucciones operativas que puedes copiar directamente a tu workspace de Claude Code. Claude los lee como contexto y los sigue.

---

## Cómo usar

1. Descarga o copia el archivo que necesites
2. Pégalo en tu carpeta de workspace
3. Edítalo con tu información (nombre, rol, preferencias)
4. Abre Claude Code en esa carpeta — Claude lo leerá automáticamente

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

**Siguiente paso:** [Explorar los módulos](modulos/index.md)
