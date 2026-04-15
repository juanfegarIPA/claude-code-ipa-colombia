# Módulo 2: Gestión de tareas

!!! info "Prerequisitos"
    - **Software**: Ninguno adicional — solo Claude Code
    - **Dificultad**: :material-square: :material-square-outline: :material-square-outline: :material-square-outline: :material-square-outline: (mínima)

## Qué problema resuelve

Los compromisos se dispersan: algunos quedan en correos, otros en notas de reunión, otros en tu cabeza. Cuando llega viernes, no siempre sabes qué avanzó, qué está bloqueado, o qué se te olvidó. Las herramientas formales de project management (Asana, Monday) son poderosas pero requieren que el equipo las adopte y las mantenga.

## Cómo funciona (la filosofía)

Una fuente única de verdad con tres principios:

1. **Todo en un lugar**: cada compromiso, tarea o idea tiene un registro con estado, prioridad, proyecto asociado y dependencias.
2. **Auto-sync**: cuando trabajas en un proyecto y editas archivos, el sistema detecta automáticamente qué tareas están en progreso. No tienes que actualizar manualmente.
3. **Revisión periódica**: un weekly review estructura la reflexión semanal, conectando las tareas con las prioridades estratégicas.

No es un sistema para el equipo (para eso hay otras herramientas). Es un sistema personal de seguimiento que te da claridad sobre tus propios compromisos.

## Cómo está construido

```
task-manager/
├── tasks.json          # Fuente de verdad: todas las tareas en formato JSON
├── dashboard.md        # Estado actual generado automáticamente
├── today.md            # Plan del día (tareas más importantes)
├── reviews/            # Snapshots semanales
└── README.md           # Guía completa

scripts/
├── tasks.js            # CLI principal (agregar, listar, actualizar, completar, revisar...)
├── hook-post-tool-use.js  # Auto-marca tareas como "en progreso" al editar archivos
└── hook-stop.js           # Sugiere completar tareas al cerrar sesión
```

**Campos clave de cada tarea:**

- `title`, `status` (pending, in_progress, blocked, completed)
- `priority` (critical, high, medium, low)
- `project` (proyecto asociado)
- `lane` (today, week, backlog)
- `blocked_by` (IDs de tareas que la bloquean)

!!! note "Glosario rápido"
    - **`tasks.json`**: el archivo central donde viven todas las tareas. Claude lo lee y actualiza automáticamente. No necesitas editarlo a mano.
    - **CLI (Command Line Interface)**: interfaz de línea de comandos. En este caso, un programa que permite crear, listar y actualizar tareas escribiendo comandos en la terminal.
    - **hook**: una regla automática que se ejecuta cuando algo pasa. Por ejemplo, `hook-post-tool-use.js` detecta cuando editas un archivo de un proyecto y marca la tarea correspondiente como "en progreso" sin que tengas que hacerlo manualmente.

## Ejemplo real

**Crear una tarea:**
> "Crea una tarea para preparar el brief de la propuesta CSRI, prioridad alta, para esta semana, vinculada al proyecto growth"

**Ver qué está pendiente:**
> "Muéstrame las tareas pendientes de esta semana ordenadas por prioridad"

**Ciclo completo:**
1. Tarea creada con `status: pending`
2. Empiezas a trabajar en los archivos del proyecto → el hook detecta la edición → marca `in_progress`
3. Terminas → Claude sugiere marcarla como `completed`
4. En el weekly review → ves el resumen de lo que avanzó y lo que sigue

## Cómo empezar

1. Copia la plantilla [`tareas-starter`](../plantillas.md#tareas-starter) a tu workspace como `tareas.md`
2. Abre Claude Code — él te preguntará tus proyectos activos y compromisos de la semana, y llenará la tabla por ti
3. Pídele que te ayude a listar tus compromisos pendientes
4. No necesitas el sistema completo de JSON + hooks para empezar. Claude puede mantener una lista en un archivo .md y ya tienes más estructura que antes
5. Si te funciona y quieres escalar, Claude puede ayudarte a construir un sistema más robusto con el tiempo
