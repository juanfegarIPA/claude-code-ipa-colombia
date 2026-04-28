# Starter: Growth

Setup para gestionar tu trabajo de desarrollo de proyectos: relaciones con donantes, partners, gobierno, PIs, y oportunidades en distintos estados de maduración.

## Para qué sirve

Este starter te deja una estructura de carpetas y archivos donde cada relación tiene su propio thread con historial, y cada oportunidad concreta tiene su carpeta con estado y próximos pasos. Una vez la cargas, Claude puede leer todo y darte síntesis instantáneas, preparar briefs antes de reuniones, y actualizar archivos cuando le pasas notas.

## Para quién

Managers que hacen business development, fundraising, coordinación con aliados externos, o gestión de pipeline de propuestas.

Si tu trabajo no involucra red de relaciones externas o pipeline activo, este starter no aplica.

---

## Qué te deja instalado

Una carpeta `growth/` dentro de tu workspace con esta estructura:

```
[tu-workspace]/
├── CLAUDE.md           (el de tu workspace, ya existente)
├── feedback.md
└── growth/
    ├── CLAUDE.md       (descargado en el Paso 1 abajo)
    ├── threads/
    │   └── README.md   (Claude lo crea en el Paso 4)
    ├── opportunities/
    │   ├── _pipeline.md  (Claude lo crea en el Paso 4)
    │   └── README.md
    └── assets/
```

---

## Paso 1 — Descarga el archivo CLAUDE.md del starter

Haz clic en el botón. El archivo `CLAUDE.md` se descarga a tu carpeta de Descargas (Downloads).

[:material-download: Descargar CLAUDE.md del starter de growth](../downloads/starters/growth/CLAUDE.md.txt){ .md-button .md-button--primary download="CLAUDE.md" }

---

## Paso 2 — Crea la carpeta `growth/` en tu workspace y mueve el archivo

1. Abre tu workspace de Claude Code en el explorador de archivos (la carpeta donde tienes `CLAUDE.md` y `feedback.md`).
2. Crea una carpeta nueva ahí dentro llamada exactamente `growth`.
3. Mueve el archivo `CLAUDE.md` que descargaste en el Paso 1 a esta carpeta `growth/`.

Después de este paso, tu workspace debe verse así:

```
[tu-workspace]/
├── CLAUDE.md
├── feedback.md
└── growth/
    └── CLAUDE.md      (recién movido)
```

---

## Paso 3 — Pídele a Claude que marque el starter como cargado

Pasa este prompt en Claude Code:

```
Acabo de cargar el starter de growth en una carpeta llamada growth/.
En mi CLAUDE.md raíz (al lado de feedback.md, no el que está dentro
de growth/), busca la sección "Plantillas starter que cargué" y marca
el starter de growth como cargado, usando growth/ como nombre de la
carpeta. La línea debe quedar:

- [x] Setup de growth personal — carpeta: `growth/`
```

**Qué hace Claude**: abre tu `CLAUDE.md` raíz, edita la línea correspondiente y guarda el archivo.

**Qué tienes que hacer tú**: nada.

---

## Paso 4 — Pídele a Claude que cree los archivos iniciales

Abre Claude Code en tu workspace y pasa este prompt:

```
Acabo de cargar el starter de growth en la carpeta growth/. Lee el CLAUDE.md
de esa carpeta y crea los archivos iniciales: growth/threads/README.md y
growth/opportunities/_pipeline.md, ambos con la estructura mínima descrita
en el CLAUDE.md del starter. También crea las subcarpetas threads/,
opportunities/ y assets/ si no existen.
```

**Qué hace Claude**: lee el `CLAUDE.md` del starter, crea las subcarpetas y los archivos iniciales con la estructura correcta. Te confirma cuando termine.

**Qué tienes que hacer tú**: revisar que los archivos se crearon. No tienes que escribir contenido todavía.

---

## Paso 5 — Crea tu primer thread real

Piensa en una relación activa tuya que valga la pena documentar (un donante con quien estás conversando, un partner académico, un PI, un contacto de gobierno).

Pasa a Claude este prompt:

```
Crea un nuevo thread para [nombre de la relación]. Usa el formato del CLAUDE.md
del starter de growth. Pídeme la información que necesites para llenar las
secciones "Quién es", "Por qué importa", "Último contacto" y "Próximo paso".
```

**Qué hace Claude**: te pregunta uno por uno los datos necesarios y los va llenando en `growth/threads/[nombre]/README.md`.

**Qué tienes que hacer tú**: responder las preguntas con la información que tienes en la cabeza. Si no recuerdas una fecha exacta, una aproximación está bien.

---

## Paso 6 — Listo

A partir de aquí, cada vez que tengas una reunión, una llamada o un avance con esa relación, le dices a Claude:

```
Tomé estas notas de la reunión con [nombre]: [pegar las notas].
Actualiza su thread.
```

Claude actualiza la sección "Último contacto" e "Historial" del archivo correspondiente.

Cuando quieras una síntesis del portafolio:

```
Hazme una síntesis de mis threads activos y dime cuáles necesitan
follow-up esta semana.
```

Cuando vayas a una reunión:

```
Tengo reunión mañana con [nombre]. Prepárame un brief usando todo lo
que tienes en su thread.
```

---

## Conexión con el PD Knowledge Base de IPA Colombia

Si tu trabajo cruza con el portafolio compartido de la oficina, puedes consultar el PD KB en Box. La ruta típica es `[tu-Box]\IPA_COL_Resources\IPA_COL_PD_Resources\IPA_COL_PD_KnowledgeBase\` pero `[tu-Box]` varía según cómo tengas configurado Box Drive.

Para encontrar la ruta exacta en tu máquina y dejarla anotada en el starter, pasa este prompt:

```
Busca en mi sistema dónde está la carpeta IPA_COL_PD_KnowledgeBase y
dame la ruta completa. Una vez la encuentres, abre growth/CLAUDE.md
y reemplaza [tu-Box] por la ruta real en la sección "Conexión al PD
Knowledge Base de IPA Colombia".
```

**Qué hace Claude**: encuentra la ruta y actualiza el archivo `growth/CLAUDE.md` con la ruta real.

**Qué tienes que hacer tú**: nada. Si Claude no encuentra la carpeta, te avisa y le pasas la ruta manualmente.

---

## Conexión con otros starters

- **People layer**: las personas que aparecen en tus threads de growth se solapan con tu people layer. La regla: el archivo de la persona vive en `people/`, el thread referencia a la persona desde `growth/threads/`.
- **Weekly review**: las oportunidades activas pueden aparecer en el Bloque 2 (limpiar la mesa) si llevan tiempo sin moverse.
