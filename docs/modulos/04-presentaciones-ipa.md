# Módulo 4: Presentaciones con marca IPA

## Qué problema resuelve

Crear slides profesionales con la marca de IPA toma horas: elegir colores, ajustar tipografía, formatear tablas, asegurar consistencia visual. Y cuando tienes prisa, la calidad baja.

## Cómo funciona (la filosofía)

Separar el contenido del formato. Tú describes qué quieres en cada slide (título, puntos clave, datos) en una conversación con Claude Code. Claude genera la presentación con la marca de IPA aplicada automáticamente: colores institucionales, tipografía correcta, estructura visual profesional.

El resultado es un archivo .pptx que puedes abrir en PowerPoint y ajustar si necesitas.

## Cómo está construido

El sistema usa `pptxgenjs` (una librería de JavaScript para generar archivos de PowerPoint desde código) con un script custom que:

1. Lee un brief en texto con la estructura de cada slide
2. Aplica las reglas de marca IPA (colores, fuentes, layouts)
3. Genera un .pptx listo para presentar

Documentos de referencia que Claude Code consulta:

- **IPA brand context**: colores, tipografía, reglas visuales
- **Evidence-based slide rules**: reglas de calidad para slides (una idea por slide, jerarquía visual, datos con fuente)
- **IPA slides playbook**: flujo estándar de trabajo

!!! note "Glosario rápido"
    - **`pptxgenjs`**: una librería (herramienta de software) que permite crear archivos .pptx desde código JavaScript. Claude Code la instala y usa automáticamente cuando le pides una presentación.
    - **script custom**: un programa escrito específicamente para este caso, que aplica las reglas de marca IPA a las slides generadas.
    - **brief**: descripción en texto libre de lo que quieres en la presentación. No necesita formato especial.

## Ejemplo real

**Lo que le dices a Claude Code:**
> "Necesito una presentación de 6 slides sobre los resultados del proyecto X. Slide 1: título y fecha. Slide 2: contexto del problema. Slides 3-5: hallazgos principales. Slide 6: próximos pasos. Usa marca IPA."

**Lo que produce:** un archivo .pptx con las slides formateadas, colores IPA (verde institucional, naranja), tipografía Georgia para títulos y Arial para cuerpo, estructura visual limpia.

## Cómo empezar

1. Copia la plantilla [`presentaciones-ipa-starter.md`](../plantillas.md) a tu workspace. Esta plantilla contiene los colores, tipografía y reglas de marca IPA para que Claude Code las aplique automáticamente.
2. Abre Claude Code (app de escritorio o terminal) y describe lo que necesitas: tema, número de slides, qué va en cada una
3. Claude Code generará un archivo .pptx en tu carpeta de workspace
4. Abre el .pptx en PowerPoint, revísalo, y ajusta lo que necesites

!!! tip "Consejo"
    Entre más específico sea tu brief, mejor será el resultado. En vez de "hazme una presentación sobre el proyecto", di "hazme 6 slides: la primera con título y fecha, la segunda con el contexto del problema (estos 3 puntos), etc."

!!! note "Nota técnica"
    Para generar el .pptx, Claude Code necesita ejecutar un script de JavaScript, lo cual requiere Node.js instalado. En la app de escritorio esto se maneja automáticamente. Si Claude te pide instalar algo, sigue las instrucciones que te dé.
