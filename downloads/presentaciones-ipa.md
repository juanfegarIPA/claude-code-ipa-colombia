# Presentaciones IPA — Instrucciones para Claude Code

## Onboarding (primera vez)

Antes de generar la primera presentación, verifica:

1. ¿El usuario tiene Node.js instalado?
   Comprueba ejecutando: `node --version`. Si no está instalado, indícale: "Para generar presentaciones necesito Node.js. Descárgalo de https://nodejs.org (versión LTS) e instálalo. Después reinicia Claude Code."
2. ¿Existe pptxgenjs en el workspace?
   Comprueba si existe `node_modules/pptxgenjs`. Si no, ejecuta `npm install pptxgenjs`.

Una vez confirmados ambos, puedes generar presentaciones.

## Flujo de generación

Cuando el usuario pida una presentación:

1. Recibe el brief en texto libre o en un archivo `slide-brief.md`.
2. Genera un archivo `build-slides.js` en la carpeta del workspace siguiendo la estructura y reglas de abajo.
3. Ejecuta: `node build-slides.js`.
4. Confirma al usuario que el `.pptx` se generó y dónde está.
5. **Paso obligatorio**: corre el audit de legibilidad sobre el `.pptx` generado y resuelve cualquier error antes de declarar la presentación lista (ver sección "Audit obligatorio" abajo).

## Reglas categóricas (no negociables)

Estas reglas se aplican siempre. No son sugerencias.

- **Nunca generar más de un slide en toda la presentación que sea solo bullets.** Cada slide debe tener al menos un elemento visual estructurado: cards, números en círculos, columnas, callouts, separadores, charts, tablas, o badges. Un solo slide de bullets ocasional está bien si tiene jerarquía visual clara (subtítulos, espaciado, mezcla de colores). Cuatro slides seguidos de bullets idénticos no.
- **Cada slide tiene un layout distinto al anterior.** No repetir layouts en slides consecutivos.
- **Hard floor de 10pt para todo texto.** El audit de legibilidad falla si hay texto bajo 10pt.
- **Una idea principal por slide.** Si hay dos ideas, son dos slides.

## Marca IPA — Colores

Primarios:
- Dark Green: `#155240` — fondos oscuros, títulos en slides claros.
- IPA Green: `#49AC57` — acentos, barras laterales.

Secundarios:
- Light Gray: `#F1F2F2` — fondos de cards, callouts.
- Charcoal: `#414042` — texto cuerpo.
- Dark Blue: `#2B4085` — acentos alternativos, callouts.
- Red-Orange: `#F26529` — highlights, llamados de atención, advertencias.

Usar máximo 3 colores secundarios por presentación, además de los primarios. Priorizar legibilidad.

## Marca IPA — Tipografía

- **Títulos de slide**: Georgia Regular, 22-30pt según importancia. Color `darkGreen` sobre fondo claro, `white` sobre fondo oscuro.
- **Título de portada**: Georgia Regular, 38-42pt.
- **Labels y eyebrows**: Arial Bold MAYÚSCULAS, 10pt mínimo (no 9pt — el audit falla), con `charSpacing: 2`.
- **Cuerpo y bullets**: Arial Regular, 11-13pt.
- **Footer**: Arial Regular, 10pt mínimo.
- **Italic**: Arial Italic para subtítulos descriptivos bajo el título de cada slide.

## Elementos obligatorios en cada presentación

- **Barra de acento izquierda**: rectángulo verde (`#49AC57`) de `0.06"` de ancho y altura completa de slide, en cada slide de contenido.
- **Footer**: número de slide en cada slide (ej: "2 / 7").
- **Sombras**: usar la función `makeShadow()` — nunca reutilizar el mismo objeto, crear uno nuevo en cada uso.
- **Slide de título** (primera): fondo `darkGreen`, texto blanco, label, título Georgia grande, subtítulo en `lightBlue`, separador, agenda corta.

## Layouts disponibles (varía entre slides consecutivos)

| Layout | Cuándo usarlo |
|--------|---------------|
| `dark-title` | Slide inicial y slide de cierre/CTA |
| `stat-cards` | Cuando hay 2-4 números o métricas clave |
| `2x2-cards` | Cuando hay 4 puntos paralelos (igual peso) |
| `three-column` | Cuando hay 3 conceptos con relación entre ellos |
| `comparison` | Cuando hay un contraste (HOY vs MAÑANA, problema vs solución) |
| `numbered-flow` | Cuando hay 3-5 pasos secuenciales |
| `timeline` | Cuando hay fechas o fases temporales |
| `flow + callout` | Cuando hay pasos a la izquierda y una idea destacada a la derecha |
| `bullets` | Una vez por presentación, máximo. Solo cuando ningún otro layout encaja. |
| `table` | Cuando hay datos tabulares (responsables, asignaciones, etc.) |

## Estructura del script `build-slides.js`

```javascript
const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "[Nombre del manager]";
pres.title = "[Título de la presentación]";

// Paleta IPA
const C = {
  green: "49AC57",
  darkGreen: "155240",
  charcoal: "414042",
  lightGray: "F1F2F2",
  darkBlue: "2B4085",
  redOrange: "F26529",
  lightBlue: "84D0D4",
  darkGray: "C9C9C8",
  white: "FFFFFF",
};

const TOTAL = [número total de slides];

// Helpers
const makeShadow = () => ({
  type: "outer", blur: 4, offset: 2, angle: 135,
  color: "000000", opacity: 0.1,
});

function addFooter(slide, num) {
  slide.addText(`${num} / ${TOTAL}`, {
    x: 9.0, y: 5.2, w: 0.8, h: 0.3,
    fontSize: 10, fontFace: "Arial", color: C.darkGray,
    align: "right", margin: 0,
  });
}

function addLabel(slide, text, x, y, color) {
  slide.addText(text.toUpperCase(), {
    x, y, w: 5, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: color || C.green, charSpacing: 2, margin: 0,
  });
}

function addLeftAccent(slide) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.06, h: 5.625,
    fill: { color: C.green },
  });
}

// [Crear cada slide con su layout específico]

const out = path.join(__dirname, "[nombre-archivo].pptx");
pres.writeFile({ fileName: out }).then(name => console.log("OK:", name));
```

## Mini-ejemplos de layouts (úsalos como referencia)

### Dark title (slide inicial)

```javascript
const slide = pres.addSlide();
slide.background = { color: C.darkGreen };

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.green },
});

addLabel(slide, "[Etiqueta · contexto]", 0.8, 1.2);

slide.addText("[Título principal]", {
  x: 0.8, y: 1.55, w: 8.4, h: 1.0,
  fontSize: 38, fontFace: "Georgia", color: C.white, margin: 0,
});

slide.addText("[Subtítulo descriptivo]", {
  x: 0.8, y: 2.55, w: 8, h: 0.5,
  fontSize: 18, fontFace: "Arial", color: C.lightBlue, margin: 0,
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 3.3, w: 2.5, h: 0.03, fill: { color: C.green },
});
```

### 2x2 cards (4 puntos paralelos)

```javascript
const slide = pres.addSlide();
slide.background = { color: C.white };
addLeftAccent(slide);
addLabel(slide, "[Sección]", 0.8, 0.5);

slide.addText("[Título del slide]", {
  x: 0.8, y: 0.8, w: 8.4, h: 0.7,
  fontSize: 26, fontFace: "Georgia", color: C.darkGreen, margin: 0,
});

slide.addText("[Subtítulo en italic]", {
  x: 0.8, y: 1.55, w: 8.4, h: 0.4,
  fontSize: 13, fontFace: "Arial", italic: true, color: C.charcoal, margin: 0,
});

const cards = [
  { title: "[Card 1 título]", body: "[Card 1 cuerpo]" },
  { title: "[Card 2 título]", body: "[Card 2 cuerpo]" },
  { title: "[Card 3 título]", body: "[Card 3 cuerpo]" },
  { title: "[Card 4 título]", body: "[Card 4 cuerpo]" },
];

cards.forEach((card, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const cx = 0.8 + col * 4.4;
  const cy = 2.2 + row * 1.55;

  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cy, w: 4.0, h: 1.3,
    fill: { color: C.lightGray }, shadow: makeShadow(),
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cy, w: 4.0, h: 0.04, fill: { color: C.green },
  });

  slide.addText(card.title, {
    x: cx + 0.2, y: cy + 0.15, w: 3.6, h: 0.3,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: C.darkGreen, margin: 0,
  });

  slide.addText(card.body, {
    x: cx + 0.2, y: cy + 0.5, w: 3.6, h: 0.7,
    fontSize: 11, fontFace: "Arial", color: C.charcoal,
    lineSpacingMultiple: 1.25, margin: 0,
  });
});

addFooter(slide, [número de slide]);
```

### Numbered-flow + callout lateral

```javascript
const slide = pres.addSlide();
slide.background = { color: C.white };
addLeftAccent(slide);
addLabel(slide, "[Sección]", 0.8, 0.5, C.darkBlue);

slide.addText("[Título]", {
  x: 0.8, y: 0.8, w: 8.4, h: 0.7,
  fontSize: 26, fontFace: "Georgia", color: C.darkGreen, margin: 0,
});

const steps = [
  { text: "[Paso 1]", sub: "[Detalle paso 1]" },
  { text: "[Paso 2]", sub: "[Detalle paso 2]" },
  { text: "[Paso 3]", sub: "[Detalle paso 3]" },
  { text: "[Paso 4]", sub: "[Detalle paso 4]" },
];

steps.forEach((step, i) => {
  const sy = 2.2 + i * 0.7;

  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: sy + 0.05, w: 0.4, h: 0.4,
    fill: { color: i === steps.length - 1 ? C.green : C.darkBlue },
  });
  slide.addText(`${i + 1}`, {
    x: 0.8, y: sy + 0.05, w: 0.4, h: 0.4,
    fontSize: 13, fontFace: "Arial", bold: true,
    color: C.white, align: "center", valign: "middle", margin: 0,
  });

  slide.addText(step.text, {
    x: 1.4, y: sy, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Arial", bold: true,
    color: C.darkGreen, margin: 0,
  });

  slide.addText(step.sub, {
    x: 1.4, y: sy + 0.3, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: C.charcoal,
    lineSpacingMultiple: 1.2, margin: 0,
  });
});

// Callout lateral
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.8, y: 2.2, w: 3.6, h: 2.8,
  fill: { color: C.lightGray }, shadow: makeShadow(),
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.8, y: 2.2, w: 3.6, h: 0.04, fill: { color: C.darkBlue },
});

slide.addText("[Etiqueta del callout]", {
  x: 6.05, y: 2.4, w: 3.1, h: 0.3,
  fontSize: 10, fontFace: "Arial", bold: true,
  color: C.darkBlue, charSpacing: 2, margin: 0,
});

slide.addText("[Cita o idea destacada]", {
  x: 6.05, y: 2.85, w: 3.1, h: 1.6,
  fontSize: 12, fontFace: "Georgia", italic: true,
  color: C.charcoal, lineSpacingMultiple: 1.4, margin: 0,
});
```

### Comparison de 3 columnas

```javascript
const slide = pres.addSlide();
slide.background = { color: C.white };
addLeftAccent(slide);
addLabel(slide, "[Sección]", 0.8, 0.5, C.redOrange);

slide.addText("[Título]", {
  x: 0.8, y: 0.8, w: 8.4, h: 0.7,
  fontSize: 26, fontFace: "Georgia", color: C.darkGreen, margin: 0,
});

const cols = [
  { header: "HOY", border: C.darkGray, bg: C.white,
    title: "[Estado actual]", body: "[Descripción]" },
  { header: "TRANSICIÓN", border: C.darkBlue, bg: C.lightGray,
    title: "[Estado intermedio]", body: "[Descripción]" },
  { header: "META", border: C.green, bg: C.white,
    title: "[Estado objetivo]", body: "[Descripción]" },
];

cols.forEach((col, i) => {
  const cx = 0.6 + i * 3.0;

  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: 2.2, w: 2.8, h: 2.9,
    fill: { color: col.bg },
    line: { color: col.border, width: 1.5 },
    shadow: makeShadow(),
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: 2.2, w: 2.8, h: 0.04, fill: { color: col.border },
  });

  slide.addText(col.header, {
    x: cx + 0.2, y: 2.35, w: 2.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: col.border, charSpacing: 2, margin: 0,
  });

  slide.addText(col.title, {
    x: cx + 0.2, y: 2.7, w: 2.4, h: 0.7,
    fontSize: 14, fontFace: "Georgia", bold: true,
    color: C.darkGreen, lineSpacingMultiple: 1.15, margin: 0,
  });

  slide.addText(col.body, {
    x: cx + 0.2, y: 3.55, w: 2.4, h: 1.4,
    fontSize: 11, fontFace: "Arial", color: C.charcoal,
    lineSpacingMultiple: 1.35, margin: 0,
  });
});
```

## Audit obligatorio

Después de generar el `.pptx`, corre el audit de legibilidad:

```bash
python "00-System/scripts/audit-pptx-legibility.py" "[ruta al pptx]"
```

Si el audit reporta **errores** (texto bajo 10pt), arréglalos antes de declarar la presentación lista. Los warnings se evalúan caso por caso.

Si no tienes acceso al script de audit (manager con workspace nuevo, sin acceso al de JF), verifica manualmente que ningún texto está bajo 10pt en el script de generación.

## Reglas de slides

- Una idea principal por slide.
- Jerarquía visual clara: label → título → subtítulo → contenido.
- Bullets (cuando sean inevitables): cortos, máximo 2 líneas cada uno.
- Datos siempre con fuente citada (puede ser una nota a pie de slide en `darkGray` italic 10pt).
- En títulos en español: solo mayúscula inicial y nombres propios.

## Estructura sugerida de una presentación

1. **Slide 1**: dark-title con título, subtítulo, agenda corta.
2. **Slides 2-N**: contenido principal, variando layouts (cards, flow, comparison, numbered, timeline, table).
3. **Slide final**: dark-title con próximos pasos o call to action.

## Cómo recibir el brief

El usuario describe la presentación en texto libre o en un archivo `slide-brief.md`. Para cada slide, idealmente especifica:

- Tipo de layout (`Type: cards`, `Type: numbered-flow`, etc.).
- Mensaje principal (`Message: ...`).
- Contenido (bullets, datos, cards, etc.).

Si el brief no especifica layouts, **tú eliges el layout más adecuado para cada slide**, asegurándote de que ningún slide quede solo con bullets y de que los layouts varíen.

Genera el `.pptx` en la carpeta de workspace del usuario. Confirma con el usuario el resultado y corre el audit antes de cerrar.
