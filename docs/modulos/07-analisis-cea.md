# Módulo 7: Ejemplo — Análisis de costo-efectividad (CEA)

!!! info "Prerequisitos para replicar algo parecido"
    - **Software**: Claude Code
    - **Para documentos Word**: Claude Code genera `.docx` con la librería `docx` de npm (`npm install docx`)
    - **Para Excel con formato**: Python + openpyxl (`pip install openpyxl`)
    - **Para presentaciones**: Node.js + pptxgenjs (ver [módulo 4](04-presentaciones-ipa.md))
    - **Dificultad**: :material-square: :material-square: :material-square: :material-square: :material-square-outline: (proyecto técnico, múltiples herramientas)

## Qué muestra este ejemplo

Cómo Claude Code funciona como research assistant + generador de documentos para un proyecto analítico técnico: investigación de literatura, modelamiento, y producción de entregables en Word, Excel y PowerPoint.

## El problema

IPA Colombia necesitaba estimar el retorno de inversión del modelo de Embedded Labs (caso ICBF) — un análisis técnico que requiere revisar literatura, construir un modelo de costo-efectividad, y producir documentos para distintas audiencias (equipo técnico, dirección, aliados).

La pregunta central: ¿cuál es el retorno de invertir en un laboratorio que mejora el rendimiento del gasto público existente?

## Cómo se construyó

### Investigación
- Claude Code ayudó a revisar y sintetizar literatura sobre costo-efectividad de intervenciones similares
- Se documentaron preguntas críticas y supuestos del modelo en archivos markdown
- Cada decisión metodológica se registró en un log de decisiones para trazabilidad

### Modelamiento
- El modelo vive en un Excel con escenarios, supuestos y fórmulas
- Claude Code generó el Excel con colores por tipo de celda y fórmulas funcionales
- Se pueden correr escenarios cambiando los supuestos sin reconstruir el modelo

### Documentos
- Los entregables se escriben primero como texto en el workspace (fáciles de editar)
- Claude Code los convierte automáticamente a Word (.docx) con formato profesional
- Los documentos finales se copian a Box para compartir con el equipo
- La presentación se generó con marca IPA aplicada automáticamente

### Flujo dual: workspace + Box
| Lugar | Formato | Propósito |
|-------|---------|-----------|
| Workspace (local) | .md, scripts | Trabajo en curso, edición rápida |
| Box (compartido) | .docx, .xlsx | Versiones para el equipo |

Cuando se actualiza un .md en el workspace, regenerar el .docx es un comando. Los cambios fluyen automáticamente.

## La lección

Claude Code no hizo el análisis por nosotros. Lo que hizo fue:

1. **Acelerar la investigación**: buscar, sintetizar y organizar información
2. **Producir documentos técnicos**: convertir análisis en Word, Excel y PowerPoint sin pelear con formato
3. **Mantener trazabilidad**: cada decisión documentada, cada supuesto explícito, cada cambio versionable
4. **Conectar workspace y equipo**: el trabajo vive en markdown (flexible), los entregables viven en Box (accesibles)

El CD aportó el criterio, las preguntas y las decisiones. Claude Code aportó la velocidad de ejecución y la consistencia de formato.

## Relevancia para ti

Si trabajas en proyectos que requieren investigación, análisis y documentos técnicos, Claude Code puede:
- Ayudarte a revisar y sintetizar literatura
- Construir modelos en Excel con fórmulas y escenarios
- Generar documentos profesionales en Word desde markdown
- Mantener un log de decisiones para que tu equipo entienda el razonamiento
- Producir presentaciones para distintas audiencias desde un mismo brief

No necesitas que tu proyecto sea tan técnico como un CEA. Si tienes un análisis que requiere documentos para distintas audiencias, Claude Code te ahorra horas de formato.

## Cómo empezar con algo parecido

1. Si tienes un análisis, informe o documento técnico en curso, abre Claude Code con ese archivo en tu workspace
2. Pídele a Claude: "Lee este documento y genera un resumen ejecutivo de una página en Word" o "Convierte este análisis en una presentación de 5 slides"
3. Claude generará el archivo (.docx o .pptx) que puedes abrir, revisar y compartir
4. Si necesitas investigación: "Busca literatura reciente sobre [tema] y hazme una síntesis de los 5 hallazgos más relevantes"
