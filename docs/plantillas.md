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

---

### Tareas starter

Setup mínimo para seguimiento de compromisos con una tabla simple. Claude la actualiza cuando le pides agregar, completar o revisar tareas.

Ver [Módulo de Gestión de tareas](modulos/02-gestion-de-tareas.md) para entender la filosofía.

---

### KB consulta starter

Instrucciones para que Claude Code sepa dónde encontrar el Knowledge Base de BD en Box y cómo consultarlo.

!!! warning "Requisito"
    Necesitas tener Box Drive sincronizado para que Claude Code pueda leer los archivos del KB.

Ver [Módulo de Knowledge Base](modulos/03-knowledge-base.md) para entender qué contiene y la visión futura.

---

**Siguiente paso:** [Explorar los módulos](modulos/index.md)
