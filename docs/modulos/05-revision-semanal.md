# Módulo 5: Revisión semanal

## Qué problema resuelve

Las semanas pasan y no siempre hay claridad sobre qué avanzó, qué se quedó sin atención, o si tu tiempo está alineado con tus prioridades estratégicas. Sin una revisión estructurada, lo urgente siempre desplaza lo importante.

## Cómo funciona (la filosofía)

Una revisión semanal en 5 bloques que conecta las tareas concretas con la dirección estratégica:

1. **Qué logramos**: tareas completadas esta semana, agrupadas por proyecto
2. **Qué está en curso**: tareas activas con estado y próximo paso
3. **Qué está bloqueado**: tareas detenidas y por qué (dependencias, decisiones pendientes, información faltante)
4. **Balance estratégico**: qué porcentaje de tu semana fue trabajo estratégico vs. operativo vs. reactivo
5. **Decisiones pendientes**: qué necesita tu atención la próxima semana

El review es conversacional: Claude presenta cada bloque, tú reaccionas, tomas decisiones y Claude las ejecuta (repriorizar, delegar, cerrar).

## Ejemplo real

**Prompt:**
> "Hagamos el weekly review"

**Lo que produce (fragmento del bloque 4):**

> Esta semana:
> - **Estratégico (45%)**: avance en propuesta CSRI, monitoreo del plan estratégico, brief para reunión con Claudia
> - **Operativo (35%)**: procurement D1, preparación informe de gestión, coordinación staff meeting
> - **Reactivo (20%)**: solicitud urgente de HQ, ajuste presupuestal por TRM
>
> Comparado con la semana anterior, el balance estratégico subió 10 puntos. La meta es mantenerlo por encima de 40%.

## Cómo está construido

El weekly review usa dos fuentes:

- **Task manager** (`tasks.json`): todas las tareas con sus estados y proyectos
- **Contexto estratégico** (`strategy-context.json`): un archivo que mapea cada proyecto a un pilar del plan estratégico, para clasificar cada tarea como estratégica, operativa o reactiva

El output es un archivo markdown con el reporte completo que se guarda como snapshot semanal en una carpeta de reviews.

!!! note "Glosario rápido"
    - **snapshot**: una foto del estado de las cosas en un momento dado. Guardar un snapshot semanal permite ver tendencias con el tiempo.
    - **estratégico vs. operativo vs. reactivo**: categorías para clasificar tu tiempo. Estratégico = avanzar prioridades del plan. Operativo = mantener la oficina funcionando. Reactivo = responder a lo urgente e inesperado.

## Cómo empezar

1. Copia la plantilla [`revision-semanal-starter.md`](../plantillas.md) a tu workspace
2. No necesitas un task manager completo. Al final de cada semana, pídele a Claude: "Ayúdame a revisar mi semana. Estos fueron mis compromisos: [lista]. Qué avancé, qué no, y qué debería priorizar la próxima semana?"
3. Si te sirve, puedes ir agregando estructura: un archivo de tareas, categorías (estratégico/operativo/reactivo), y el review se vuelve más preciso
4. La clave no es la herramienta sino el hábito de reflexionar sobre tu semana con estructura
