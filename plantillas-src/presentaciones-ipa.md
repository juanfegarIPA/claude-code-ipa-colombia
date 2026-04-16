# Presentaciones IPA — Instrucciones para Claude Code

## Onboarding (primera vez)

Antes de generar la primera presentación, verifica:

1. ¿El usuario tiene Node.js instalado?
   Comprueba ejecutando: node --version
   Si no está instalado, indícale: "Para generar presentaciones
   necesito Node.js. Descárgalo de https://nodejs.org (versión LTS)
   e instálalo. Después reinicia Claude Code."

2. ¿Existe pptxgenjs en el workspace?
   Comprueba si existe node_modules/pptxgenjs
   Si no, ejecuta: npm install pptxgenjs

Una vez confirmados ambos, puedes generar presentaciones.

## Cómo generar una presentación

Cuando el usuario pida una presentación:

1. Recibe el brief en texto libre
2. Genera un archivo build-slides.js en la carpeta del workspace
3. El script debe usar pptxgenjs para crear el .pptx
4. Ejecuta: node build-slides.js
5. Confirma al usuario que el .pptx se generó y dónde está

## Estructura del script build-slides.js

El script siempre debe seguir esta estructura:

```
const pptxgen = require("pptxgenjs");
const pptx = new pptxgen();

// Configuración base
pptx.layout = "LAYOUT_16x9";
pptx.author = "IPA Colombia";

// Función de sombra (NUNCA reutilizar objetos de sombra)
function makeShadow() {
  return { type: "outer", blur: 3, offset: 2,
           color: "000000", opacity: 0.3 };
}

// Crear slides...
// [cada slide con su tipo de layout]

// Guardar
pptx.writeFile({ fileName: "presentacion.pptx" });
```

## Marca IPA — Colores

Primarios:
- Dark Green: #155240 (RGB 21,82,64) — fondos oscuros, títulos
- IPA Green: #49AC57 (RGB 73,172,87) — acentos, barras laterales

Secundarios:
- Light Gray: #F1F2F2 — fondos claros
- Charcoal: #414042 — texto cuerpo
- Dark Blue: #2B4085 — acentos alternativos
- Red-Orange: #F26529 — highlights, llamados de atención

Usar máximo 3 colores por presentación. Priorizar legibilidad.

## Marca IPA — Tipografía

- Títulos: Georgia Regular (22-42pt según importancia)
- Labels y subtítulos: Arial Bold CAPS (9pt, con charSpacing)
- Cuerpo y bullets: Arial Regular (10-13pt)

## Elementos obligatorios en cada presentación

- Barra de acento izquierda: rectángulo verde (#49AC57) de 0.06"
  de ancho en slides de contenido
- Footer: número de slide en cada slide
- Sombras: usar makeShadow() — nunca reutilizar el mismo objeto

## Tipos de layout disponibles

Varía los layouts para evitar monotonía. Nunca dos slides
consecutivas con el mismo layout. Tipos disponibles:
- dark-title: fondo oscuro (#155240), texto blanco (para inicio/cierre)
- stat-cards: tarjetas con números grandes y etiquetas
- three-column: 3 columnas con iconos o viñetas
- two-column: contenido dividido en dos
- comparison: lado a lado con contraste visual
- numbered-flow: pasos numerados en secuencia
- timeline: progresión temporal
- bullets: lista con jerarquía visual (usar con moderación)
- table: datos tabulares con formato IPA

## Reglas de slides

- Una idea principal por slide
- Jerarquía visual clara: título > subtítulo > contenido
- Bullets cortos (máximo 2 líneas cada uno)
- Datos siempre con fuente citada
- Slide de título: tema + fecha + "IPA Colombia" (usar dark-title)
- Slide final: próximos pasos o call to action (usar dark-title)
- En títulos en español: solo mayúscula inicial y nombres propios

## Estructura sugerida

1. Título y fecha (dark-title)
2. Contexto / por qué importa
3-N. Contenido principal (un tema por slide, variando layouts)
N+1. Próximos pasos o cierre (dark-title)

## Cómo recibir el brief

El usuario describe lo que necesita en texto libre.
Ejemplo: "Hazme 6 slides sobre X. Slide 1: título.
Slide 2: contexto. Slides 3-5: hallazgos. Slide 6: cierre."

Genera el .pptx en la carpeta de workspace del usuario.
