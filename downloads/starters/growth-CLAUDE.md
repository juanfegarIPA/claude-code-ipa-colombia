# Mi setup de growth

Esta carpeta es la memoria de tu trabajo de desarrollo de proyectos: relaciones con donantes, partners, gobierno, PIs y oportunidades en distintos estados de maduración.

## Para qué sirve

Cuando trabajas growth sin esta estructura, la información vive en correos, Teams, llamadas, archivos sueltos. Cuando alguien te pregunta "¿cómo va con X donante?", tienes que reconstruir el contexto cada vez.

Con este setup:
- Cada relación tiene un `thread` con su historial.
- Cada oportunidad concreta tiene su carpeta con estado y próximos pasos.
- Claude Code puede leer todo y darte síntesis al instante.

## Estructura

```
growth/
├── CLAUDE.md           # Este archivo
├── threads/            # Una carpeta por relación activa
│   └── [nombre-actor]/
│       ├── README.md   # Síntesis: quién, por qué importa, último estado
│       └── notes/      # Notas de reuniones, correos, contexto
├── opportunities/      # Una carpeta por oportunidad concreta
│   ├── [nombre-oportunidad]/
│   │   ├── README.md   # Estado, actores, deadline, owner
│   │   └── docs/       # Drafts, propuestas, requisitos
│   └── _pipeline.md    # Tabla resumen de todas las oportunidades
└── assets/             # Material reusable (decks, propuestas viejas, comparativos)
```

## Threads — formato del README

Cada thread es una relación que vale la pena mantener viva. Estructura mínima:

```markdown
# [Nombre del actor o relación]

## Quién es
[Una línea: rol, organización, por qué nos cruzamos.]

## Por qué importa
[Una línea: qué oportunidad o riesgo representa para mi trabajo.]

## Último contacto
- Fecha: YYYY-MM-DD
- Canal: [email / reunión / llamada / Teams]
- Resumen: [lo que se habló y se acordó.]

## Próximo paso
[Lo que debe pasar después y de quién depende.]

## Historial
- YYYY-MM-DD: [evento o interacción.]
- YYYY-MM-DD: [evento o interacción.]
```

## Oportunidades — formato del README

Cada oportunidad es algo concreto: un fondo a aplicar, un partnership a cerrar, un proyecto a co-formular. Estructura mínima:

```markdown
# [Nombre de la oportunidad]

## Qué es
[Una línea: tipo de oportunidad, monto, plazo si aplica.]

## Estado
- [ ] Discovery
- [ ] Concept
- [ ] Formulation
- [ ] Submitted
- [ ] Awarded / Lost / Parked

## Actores
- Quién en mi equipo: [nombres]
- Quién del lado externo: [nombres + organización]

## Deadline
[Fecha clave o "rolling".]

## Próximo paso
[Lo que debe pasar y quién es el responsable.]
```

## Pipeline — `_pipeline.md`

Una tabla resumen para ver el portafolio completo de un vistazo. Formato:

| Oportunidad | Estado | Monto | Deadline | Próximo paso | Owner |
|-------------|--------|-------|----------|--------------|-------|
| [nombre] | concept | USD 50K | 2026-06-15 | [acción] | [persona] |

## Conexión al PD Knowledge Base de IPA Colombia

Si trabajas en oportunidades que cruzan con el portafolio de la oficina, vale la pena consultar el PD KB compartido en Box antes de empezar de cero. La ruta típica es:

```
[tu-Box]\IPA_COL_Resources\IPA_COL_PD_Resources\IPA_COL_PD_KnowledgeBase\
```

`[tu-Box]` puede variar según cómo tengas configurado Box Drive en tu máquina (en Bogotá normalmente `C:\Users\TU_USUARIO\Box\`, pero puede ser distinto). Si no estás seguro de la ruta exacta, pídele a Claude:

> "Busca en mi sistema dónde está la carpeta `IPA_COL_PD_KnowledgeBase` y úsala para consultar el KB."

Claude la descubre y la usa para esa sesión. Una vez la encuentras, anota la ruta en este archivo y reemplaza `[tu-Box]` arriba.

Tiene threads sintetizados, assets reusables y un pipeline a nivel oficina. Si encuentras información útil ahí, refleja la conexión en tu thread local.

## Reglas

1. Una oportunidad o relación = una carpeta. No mezclar varias en un solo archivo.
2. Cuando una oportunidad se cierra (awarded, lost, parked), actualizar `_pipeline.md` y dejar la carpeta donde está. No borrar — la memoria histórica importa.
3. Datos confidenciales (montos no públicos, conversaciones sensibles, intel competitiva) van solo en este workspace local, nunca al KB compartido.
