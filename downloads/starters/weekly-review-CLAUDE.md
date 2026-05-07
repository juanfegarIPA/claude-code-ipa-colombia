# Mi setup de revisión semanal

Esta carpeta contiene la estructura para que hagas una revisión semanal de tu trabajo, conversacionalmente con Claude. La idea no es generar un reporte automático que nadie lee. Es darte un espacio fijo en la semana para preguntarte qué pasó, qué quedó pegado y qué viene.

## Para qué sirve

Sin esto, las semanas se acumulan: tareas viejas que nadie cancela, compromisos que se pierden, riesgos que escalan en silencio. La revisión semanal corta eso de raíz: 30-45 minutos los viernes (o cuando te sirva), Claude te lleva por 5 bloques, tú decides, queda registro.

## Estructura

```
weekly-review/
├── CLAUDE.md           # Este archivo (cómo funciona la revisión)
├── tareas.md           # Tu lista activa de tareas (puede ser tan simple como una lista)
├── proyectos.md        # Tus proyectos y su estado
└── reviews/            # Una carpeta de revisiones semanales
    └── YYYY-MM-DD.md   # Un archivo por revisión
```

## Cómo se hace una revisión

Cuando llegue el momento de la revisión, le dices a Claude algo como:
> "Hagamos la revisión semanal."

Claude lee `tareas.md`, `proyectos.md` y los archivos relevantes del workspace, y te presenta los 5 bloques. **No avanza al siguiente bloque hasta que respondes.** Nada se modifica sin tu confirmación.

### Bloque 1 — Qué logramos

Claude te muestra qué tareas se completaron en la semana y agrupa por proyecto. Pregunta: "¿Hay algo que se hizo esta semana que no está en la lista?". Si hay algo, lo capturas en el momento.

### Bloque 2 — Limpiar la mesa

Claude te muestra:
- Tareas vencidas (overdue): qué hacer con cada una (replanificar / cancelar / ya se hizo).
- Tareas que llevan tiempo sin moverse (stale): ¿siguen siendo relevantes?
- Compromisos que delegaste y no han vuelto: ¿hacer follow-up o soltarlos?

Tomas decisiones, Claude las anota. Nada se ejecuta hasta el final.

### Bloque 3 — Riesgos y prioridades

Claude te muestra:
- Cómo está distribuido tu tiempo entre proyectos (si hay datos suficientes).
- Iniciativas con deadlines próximos.
- Cosas críticas que están ahí calladas y podrían explotar.

Discusión abierta, no checkboxes.

### Bloque 4 — La semana que viene

Claude te ayuda a definir las 3-5 cosas más importantes para la semana siguiente (MIT — Most Important Tasks). Si hay más de 5, algo está sobrecargado.

### Bloque 5 — Relaciones y seguimiento

Si tienes el people layer instalado (otra plantilla starter), Claude te muestra contactos con los que llevas tiempo sin hablar y deberías retomar. Si no, salta este bloque.

## Al final

Claude te resume las decisiones acumuladas y te pregunta si las ejecuta. Una vez confirmado:
- Actualiza `tareas.md` con replanificaciones y cancelaciones.
- Crea el archivo `reviews/YYYY-MM-DD.md` con el resumen de la sesión.
- Te lo deja listo para que vuelvas la próxima semana.

## Formato de `tareas.md`

Mantén esto lo más simple posible. Una lista markdown sirve perfectamente:

```markdown
# Tareas activas

## En curso
- [ ] [tarea] — proyecto: [X], deadline: 2026-MM-DD
- [ ] [tarea] — proyecto: [Y], deadline: 2026-MM-DD

## Esperando respuesta de alguien
- [ ] [tarea] — esperando: [persona], desde: 2026-MM-DD

## Ideas / no urgente
- [ ] [tarea]

## Completadas esta semana
- [x] [tarea] — completada 2026-MM-DD
```

Una vez por semana, después de la revisión, mueve las completadas a un archivo `archive/tareas-YYYY.md` o simplemente bórralas si no necesitas la memoria.

## Formato de `proyectos.md`

```markdown
# Proyectos activos

## [Nombre del proyecto]
- Qué es: [una línea]
- Mi rol: [coordino / soy parte / lidero]
- Estado: [verde / amarillo / rojo]
- Próximo hito: [qué + fecha]

## [Otro proyecto]
...
```

## Reglas

1. La revisión se hace una vez por semana. Si la saltas dos semanas seguidas, replanteá si te sirve este formato.
2. No se ejecuta ningún cambio sin tu confirmación explícita.
3. El archivo `reviews/YYYY-MM-DD.md` es tu memoria — no lo borres aunque se vea repetitivo.
