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
