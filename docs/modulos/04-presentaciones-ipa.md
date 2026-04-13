# Módulo 4: Presentaciones con marca IPA

## Qué problema resuelve

Crear slides profesionales con la marca de IPA toma horas: elegir colores, ajustar tipografía, formatear tablas, asegurar consistencia visual. Y cuando tienes prisa, la calidad baja.

## Cómo funciona (la filosofía)

Separar el contenido del formato. Tú escribes un **brief en texto** describiendo qué quieres en cada slide (título, puntos clave, datos). Claude Code genera la presentación con la marca de IPA aplicada automáticamente: colores institucionales, tipografía correcta, estructura visual profesional.

El resultado es un archivo .pptx que puedes abrir en PowerPoint y ajustar si necesitas.

## Cómo está construido

El sistema usa `pptxgenjs` (una librería de JavaScript) con un script custom que:

1. Lee un brief en markdown con la estructura de cada slide
2. Aplica las reglas de marca IPA (colores, fuentes, layouts)
3. Genera un .pptx listo para presentar

Documentos de referencia:
- **IPA brand context**: colores, tipografía, reglas visuales
- **Evidence-based slide rules**: reglas de calidad para slides (una idea por slide, jerarquía visual, datos con fuente)
- **IPA slides playbook**: flujo estándar de trabajo

## Ejemplo real

**Prompt:**
> "Necesito una presentación de 8 slides sobre los resultados del análisis de costo-efectividad del modelo Embedded Labs. Usa marca IPA. El brief es: slide 1 título, slide 2 contexto del problema, slide 3 metodología, slides 4-6 hallazgos principales, slide 7 implicaciones, slide 8 próximos pasos."

**Lo que produce:** un .pptx con 8 slides formateadas, colores IPA (teal, naranja), tipografía Georgia/Arial, estructura visual limpia.

## Cómo empezar

1. Para presentaciones sencillas, puedes simplemente pedirle a Claude Code: "Hazme una presentación de X slides sobre [tema] con marca IPA"
2. Claude Code puede generar el script y el .pptx directamente
3. Si necesitas más control, revisa el playbook de slides en `00-System/docs/ipa-slides-playbook.md`
