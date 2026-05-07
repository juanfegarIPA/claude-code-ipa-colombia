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
