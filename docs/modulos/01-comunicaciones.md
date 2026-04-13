# Módulo 1: Comunicaciones

## Qué problema resuelve

Cuando escribes 50+ mensajes a la semana (emails, Teams, WhatsApp) a audiencias distintas (donantes, equipo, aliados, HQ), mantener un tono consistente y profesional es difícil. Cada mensaje compite con todo lo demás que tienes que hacer, y la calidad baja cuando estás cansado o apurado.

## Cómo funciona (la filosofía)

La idea central es que Claude **aprenda tu voz** a partir de ejemplos reales, no de templates genéricos. El sistema tiene tres componentes:

1. **Referencia rápida de voz**: un documento que describe cómo escribes: directo, humano, intencional. Incluye niveles de tono (formal para donantes, profesional-cercano para el equipo, informal para confirmaciones rápidas).

2. **Log de feedback**: cada vez que corriges un borrador ("no digas 'hacer seguimiento', di 'recordar'"), la corrección se guarda. Claude lee este log antes de cada borrador nuevo y no repite el error.

3. **Ejemplos acumulados**: cada mensaje aprobado se guarda como ejemplo. Con 150+ ejemplos, Claude tiene suficiente material para capturar tu estilo sin que tengas que explicarlo cada vez.

El resultado: entre más lo usas, mejor escribe como tú.

## Cómo está construido

```
msg-writer/
├── references/
│   ├── voice-quick-ref.md    # Tu perfil de voz (tono, estructura, anti-patrones)
│   ├── feedback.md           # Log de correcciones acumuladas
│   └── tone-tiers.md         # Guía detallada de niveles de tono
├── examples/
│   ├── index.json            # Índice buscable de todos los mensajes
│   └── [150+ archivos .md]   # Mensajes aprobados como referencia
└── scripts/
    └── deliver.js            # Convierte markdown → HTML con formato, copia al clipboard
```

Claude lee la referencia de voz y las últimas correcciones antes de cada borrador. Al entregar, el script convierte el markdown a HTML con formato y lo copia al clipboard listo para pegar en Teams o Gmail.

## Ejemplo real

**Prompt:**
> "Escríbeme un mensaje de Teams para el equipo de managers avisando que tenemos licencia Enterprise de Claude y que preparé una guía para empezar a usarlo."

**Lo que Claude hace internamente:**
1. Lee voice-quick-ref.md → selecciona tono profesional-cercano (equipo interno)
2. Lee feedback.md → recuerda: siempre empezar con "Hola", no usar em-dashes, pedir el favor en vez de dar instrucciones
3. Revisa los últimos 3 ejemplos de tipo "teams" para calibrar longitud y estructura
4. Redacta el borrador con la estructura: por qué ahora → qué importa → qué se pide → para cuándo

**Resultado:** un borrador que suena como tú, no como una IA genérica.

## Cómo empezar

1. Copia la plantilla [`comunicaciones-starter.md`](../plantillas.md) a tu workspace
2. Edítala con tu información: cómo escribes, qué tono usas, qué errores quieres evitar
3. Pídele a Claude Code que te ayude a redactar un mensaje real
4. Cuando corrijas el borrador, dile a Claude qué cambiar y por qué. Esas correcciones se acumulan.

No necesitas 150 ejemplos para empezar. Con 5-10 mensajes aprobados, Claude ya tiene buena calibración.
