# Módulo 6: Ejemplo — Seguimiento al plan estratégico

## Qué muestra este ejemplo

Cómo Claude Code sirve de puente entre un Excel complejo y outputs accionables: reportes de monitoreo, mensajes al equipo, dashboards de estado. Todo a partir de una fuente de verdad que vive en Box.

## El problema

IPA Colombia tiene un plan estratégico 2026 con 3 pilares, 14 metas, múltiples responsables y carpetas de seguimiento en Box. El reto es doble:

1. **Monitorear avance**: no basta con tener carpetas. Alguien tiene que revisar qué hay adentro, detectar señales de avance o estancamiento, y generar un reporte.
2. **Comunicar al equipo**: los responsables de cada meta necesitan saber cómo van, qué se espera, y qué está bloqueado. Sin comunicación activa, el plan se vuelve un documento que nadie mira.

## Cómo se construyó

### Fase 1: Infraestructura (completada)
- El Excel fuente en Box tiene la versión limpia del plan (14 metas, indicadores, responsables)
- Claude Code leyó el Excel, generó una configuración de metas (`metas-config.json`), y creó 74 carpetas en Box con estructura estandarizada para seguimiento
- Se generó una guía de uso en Word para el equipo

### Fase 2: Monitoreo mensual (operativa)
- Un skill (`/monitoreo`) escanea las carpetas de Box, lee los documentos que el equipo sube, y detecta señales de avance o estancamiento
- Genera tres outputs: un snapshot en JSON (datos crudos), un Excel de monitoreo, y un HTML ejecutivo navegable
- El CD revisa el HTML, agrega observaciones cualitativas, y comparte con el equipo

### Lo que Claude Code hace concretamente
- Lee el Excel fuente → extrae metas, indicadores, responsables
- Escanea Box → detecta documentos nuevos, fechas de actualización, señales de actividad
- Cruza lo que encuentra vs. lo que se esperaba → genera diagnóstico por meta
- Produce reportes en múltiples formatos → cada audiencia recibe lo que necesita

## La lección

El plan estratégico existía antes de Claude Code. Las carpetas en Box existían. Lo que faltaba era un puente entre los datos dispersos y la acción coordinada. Claude Code no reemplaza el plan ni la gestión humana — automatiza la parte mecánica (escanear, cruzar, formatear) para que el CD se enfoque en lo que importa: interpretar, decidir y comunicar.

## Relevancia para ti

Si gestionas un proyecto con múltiples componentes, responsables y fuentes de información, Claude Code puede:
- Leer tus archivos de seguimiento (Excel, Box, carpetas locales)
- Generar reportes de estado sin que tengas que compilar a mano
- Ayudarte a comunicar avance y detectar bloqueos temprano
- Mantener la conexión entre el plan y la ejecución

No necesitas 14 metas para que esto tenga valor. Un proyecto con 3 componentes y un Excel de seguimiento ya es suficiente.
