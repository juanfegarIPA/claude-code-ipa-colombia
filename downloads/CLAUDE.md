# Mi Workspace — Claude Code

> **Para el manager**: este archivo es la "memoria operativa" de tu trabajo con Claude. Lo lee Claude Code en cada sesión y aplica lo que aquí esté escrito. Empieza simple, ajustas con el tiempo. Las marcas `<!-- INIT -->` son preguntas que Claude te va a hacer la primera vez que abras tu workspace; cuando respondas, Claude las reemplaza por tu respuesta y borra la marca.

## Quién soy

- **Nombre**: [Tu nombre]
- **Rol**: [Tu cargo], IPA Colombia
- **Equipo a cargo**: [equipo o área que diriges; "ninguno" si aplica]
- **Zona horaria**: America/Bogota
- **Idioma de trabajo**: Español (también inglés profesional)
- **Días de trabajo**: lunes a viernes (no esperar respuesta en fines de semana)

<!-- INIT-INTERVIEW: Cuando este manager abra Claude Code por primera vez, antes de cualquier otra acción, Claude debe correr esta entrevista corta para personalizar el archivo. Después de cada respuesta, Claude edita la sección correspondiente abajo y elimina solo el bloque INIT que ya respondió. No hacer todas las preguntas seguidas; intercalarlas con el flujo natural de trabajo. -->

## Mi trabajo principal

[Lista las 3-5 responsabilidades centrales de tu rol. Una línea cada una. Sin frases vacías tipo "lograr objetivos estratégicos" — ser concreto.]

- [Responsabilidad 1]
- [Responsabilidad 2]
- [Responsabilidad 3]

## Reglas de seguridad (IPA AI Usage Guidelines)

Estas reglas son obligatorias y no se negocian. Aplican a todo lo que hagas con Claude Code.

- **Nunca** incluir datos de participantes de investigación (nombres, ubicaciones, características identificables) en prompts ni archivos del workspace.
- **Nunca** incluir evaluaciones de desempeño, feedback 360 ni datos disciplinarios sin aprobación MIST.
- Evitar cifras específicas de salarios, presupuestos confidenciales o información financiera no pública en prompts.
- Credenciales y contraseñas **nunca** en archivos. Usar `.env` local si se necesita y agregarlo a `.gitignore`.
- Para detalle, leer `que-puedo-y-que-no.md` en el sitio de la guía.

## Estilo y voz

<!-- INIT-VOICE: Pregunta al manager: "¿Quieres que Claude redacte mensajes profesionales en tu voz? Si sí, vamos a construirla con ejemplos en las próximas semanas. Si prefieres usar tu propia voz directamente, dejamos esto para después." Reemplazar este bloque con la respuesta. -->

- Idioma por defecto en outputs: español (tildes, eñes y puntuación correcta — sin excepciones).
- Tuteo, nunca voseo.
- Sin em-dashes (—) en texto final. Usar coma, punto seguido o paréntesis.
- Sin emojis salvo que el manager lo pida.
- Sin frases genéricas tipo "Espero que este mensaje te encuentre bien".

## Estructura de mi workspace

```
[mi-workspace]/
├── CLAUDE.md          # Este archivo (memoria operativa)
├── feedback.md        # Correcciones acumuladas (ver sección abajo)
├── starters/          # Catálogo de plantillas starter (referencia, no tocar)
├── proyectos/         # Tus proyectos activos
├── drafts/            # Borradores en curso
└── archive/           # Versiones antiguas
```

Cuando "cargas" una plantilla starter (growth, weekly review, people, procurement), la forma de hacerlo es copiar el contenido de `starters/[nombre]/` a una carpeta nueva al lado de `CLAUDE.md` (por ejemplo `growth/`, `revisiones/`, `people/`). El `starters/` se queda como referencia del original; tu carpeta es donde trabajas y haces ajustes.

<!-- INIT-STRUCTURE: Pregunta al manager si su trabajo encaja en esta estructura básica o si prefiere algo distinto (ej: organizar por área, por tipo de entregable, por proyecto-cliente). Ajustar el árbol arriba según su respuesta. -->

## Convenciones

- Un archivo activo por entregable. Versiones antiguas a `archive/` con nombre descriptivo.
- Nombres de archivo en kebab-case (ej: `presupuesto-2026.md`, no `Presupuesto 2026.md`).
- Fechas en formato `YYYY-MM-DD` para que ordenen alfabéticamente.

## Bucle de feedback

Esta es una de las prácticas más importantes que hacen que Claude se vuelva más útil con el tiempo. Cuando Claude entrega algo y tú lo corriges, esa corrección debe quedar guardada en `feedback.md`. La próxima vez que pidas algo similar, Claude lee ese archivo primero y aplica lo aprendido. Sin esto, repites las mismas correcciones para siempre.

**Cómo funciona**:
1. Claude entrega un draft.
2. Tú corriges algo ("muy formal", "no uses esa palabra", "el cierre así no funciona").
3. Claude pregunta: "¿guardo esto como regla para próximas veces?"
4. Si dices que sí, Claude agrega una entrada a `feedback.md`.
5. La siguiente vez que pidas algo parecido, Claude lee el archivo y aplica la regla.

**Formato de entrada en `feedback.md`**:
```
## YYYY-MM-DD | [tipo] | [contexto]
- [patrón detectado]: [regla operativa concreta]
```

<!-- INIT-FEEDBACK: Después de la primera corrección que el manager haga a Claude, ofrecer abrir feedback.md por primera vez. No abrirlo antes — debe ser una respuesta a una corrección real, no un setup teórico. -->

## Proyectos activos

[Lista los proyectos en los que estás trabajando ahora. Una línea por proyecto: nombre + qué es + dónde vive en tu workspace.]

- `proyectos/[nombre]` — [una línea de qué es]

## Plantillas starter que cargué

[Cuando cargues una plantilla del catálogo `starters/`, anótala aquí con el nombre de la carpeta donde la pusiste. Ayuda a Claude a entender qué patrones usas.]

- [ ] Setup de growth personal — carpeta: `[ej: growth/]`
- [ ] Weekly review — carpeta: `[ej: revisiones/]`
- [ ] People layer — carpeta: `[ej: people/]`
- [ ] Procurement — carpeta: `[ej: procurement/]`

## Cosas que Claude debe saber

[Espacio libre para anotaciones operativas: contactos clave, contexto de proyectos, decisiones recientes, recordatorios. Empieza vacío y crece con el uso.]

- [Por ejemplo: "Cuando hable de Y proyecto, asume que lidero la coordinación con Z partner."]

---

**Última actualización**: [fecha que actualizas este archivo]
