# Módulo 2: Gestión de tareas

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
├── tasks.json          # Fuente de verdad: todas las tareas en JSON
├── dashboard.md        # Estado actual generado automáticamente
├── today.md            # Plan del día (MITs: Most Important Tasks)
├── reviews/            # Snapshots semanales
└── README.md           # Guía completa

scripts/
├── tasks.js            # CLI principal (add, list, update, complete, review, dashboard...)
├── hook-post-tool-use.js  # Auto-marca tareas in_progress al editar archivos
└── hook-stop.js           # Sugiere completar tareas al cerrar sesión
```

**Campos clave de cada tarea:**
- `title`, `status` (pending, in_progress, blocked, completed)
- `priority` (critical, high, medium, low)
- `project` (ruta al proyecto asociado)
- `lane` (today, week, backlog)
- `blocked_by` (IDs de tareas que la bloquean)
- `owner`, `next_checkin`, `promised_date` (para delegación)

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

1. Copia la plantilla [`tareas-starter.md`](../plantillas.md) a tu workspace
2. Empieza simple: pídele a Claude que te ayude a listar tus compromisos de la semana
3. No necesitas el sistema completo de JSON + hooks para empezar. Claude puede mantener una lista en un archivo .md y ya tienes más estructura que antes.
4. Si te funciona y quieres escalar, Claude puede ayudarte a construir un sistema más robusto con el tiempo.
