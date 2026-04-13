# Módulo 3: Knowledge Base de Business Development

## Qué problema resuelve

La inteligencia relacional del equipo de BD está dispersa: en correos, en carpetas de Box, en la memoria de cada persona. Cuando alguien nuevo entra al equipo, o cuando necesitas recordar el historial con un aliado, no hay un lugar centralizado para consultar.

## Cómo funciona (la filosofía)

Un knowledge base compilado que responde tres preguntas fundamentales:

1. **Con quién trabajamos**: perfiles de aliados, donantes, implementadores, PIs. Historial de la relación, estado actual, próximos pasos.
2. **Qué tenemos para ofrecer**: assets reutilizables (one-pagers, comparative memos, vertical reviews) que el equipo puede usar en reuniones y propuestas.
3. **Hacia dónde vamos**: un pipeline de oportunidades con estados claros y un dashboard de seguimiento.

El KB vive en Box porque es un recurso de equipo, no individual. Todos los managers con acceso a Box pueden consultarlo.

## Qué hay hoy

El KB está en Box en la siguiente ruta:
```
Box/Oficina IPA Colombia/07_Budget Template/CO BD Knowledge Base/
```

Contenido actual:
- **24 threads sintetizados**: perfiles de relaciones con aliados, donantes y partners
- **11 assets**: collateral reutilizable para reuniones y propuestas
- **2 verticals**: portafolios temáticos (líneas de crecimiento con varios actores)
- **Pipeline dashboard** (`_pipeline.md`): estado de oportunidades activas

Se puede navegar de dos formas:
- Como vault de **Obsidian** (los archivos tienen wikilinks y se puede ver el grafo de conexiones)
- Con **Claude Code** apuntando a la ruta de Box (Claude lee los archivos y responde preguntas)

## Cómo consultar el KB con Claude Code

Abre Claude Code y haz preguntas como:

> "Lee la carpeta de Knowledge Base en Box y dime: con qué aliados tenemos oportunidades activas este trimestre?"

> "Busca en el KB el thread de [nombre de aliado] y hazme un resumen del historial de la relación y los próximos pasos."

> "Qué assets tenemos disponibles para una reunión con un donante interesado en educación?"

> "Muéstrame el pipeline dashboard y dime cuáles oportunidades necesitan acción esta semana."

La plantilla [`kb-consulta-starter.md`](../plantillas.md) tiene las instrucciones para que Claude Code sepa dónde encontrar el KB y cómo leerlo.

## Visión futura

El KB actual es una primera versión enfocada en relaciones y assets. Los próximos pasos que estamos considerando:

### Conectar con propuestas
- **Propuestas enviadas**: vincular cada oportunidad del pipeline con la propuesta que se envió, los montos, y el resultado (aprobada, rechazada, pendiente)
- **Propuestas generadas**: reutilizar narrativas, marcos lógicos y evidencia de propuestas anteriores para nuevas oportunidades
- **Templates por donante**: cada donante tiene preferencias y formatos distintos. El KB puede almacenar esas preferencias para no redescubrirlas cada vez

### Framework de decisiones go/no-go
- **Criterios estandarizados**: antes de invertir tiempo en una propuesta, evaluar la oportunidad contra criterios como: alineación estratégica, probabilidad de éxito, capacidad del equipo, margen operativo, relación existente con el donante
- **Historial de decisiones**: registrar por qué dijimos sí o no a cada oportunidad, para calibrar el criterio con el tiempo
- **Señales de alerta**: identificar patrones de oportunidades que no funcionaron y por qué

### Aprendizajes post-mortem
- **Propuestas exitosas**: qué hicimos bien, qué podemos replicar
- **Propuestas que no avanzaron**: qué faltó, qué podemos mejorar
- **Patrones**: qué tipo de propuestas tienen mejor tasa de éxito para IPA Colombia

Esta visión no necesita implementarse toda de una vez. Se construye incrementalmente, oportunidad por oportunidad.

## Cómo empezar

1. Verifica que tienes acceso a la carpeta de Box (`CO BD Knowledge Base/`)
2. Copia la plantilla [`kb-consulta-starter.md`](../plantillas.md) a tu workspace
3. Abre Claude Code y hazle una pregunta sobre el KB
4. Si encuentras información desactualizada o faltante, avísale al equipo de BD para actualizar
