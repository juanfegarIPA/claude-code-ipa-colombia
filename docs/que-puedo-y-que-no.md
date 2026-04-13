# Qué puedo y qué no puedo hacer con Claude — Referencia Rápida

**IPA Colombia | Abril 2026**
**Alineado con:** IPA AI Usage Guidelines v1.0 (marzo 2026)
**Licencia requerida:** Claude Enterprise (asignada por IPA)

---

## La regla de oro

Antes de poner cualquier información de IPA en Claude, hazte esta pregunta:

> **Si esta información se divulgara públicamente, le haría daño a una persona, a IPA o a un aliado?**

- **No**: es información INTERNAL o PUBLIC. Claude Enterprise la cubre.
- **Sí**: determina el nivel de daño y actúa en consecuencia (ver tabla abajo).

---

## Tabla de decisión por tipo de dato

| Tipo de dato | Clasificación IPA | Claude Enterprise | Ejemplos en Colombia |
|---|---|---|---|
| Información publicada, sitio web de IPA, reportes públicos | **PUBLIC** | Sí, sin restricción | Policy briefs, estudios publicados, informe anual (versión final) |
| Documentos internos de proyecto, notas de reunión, planes operativos | **INTERNAL** | Sí | Plan estratégico, agendas, briefings internos, task manager |
| Información organizacional sensible (sin restricciones de donante) | **CONFIDENTIAL** | Sí, con criterio | Propuestas en desarrollo (narrativa), procurement (estructura), estrategia |
| Información con restricciones de donante o de grant | **CONFIDENTIAL** | Verificar términos del grant primero | Presupuestos con cifras específicas, datos restringidos por acuerdo |
| Evaluaciones de desempeño, feedback individual, datos disciplinarios | **PROHIBIDA** | No, sin aprobación MIST | Performance reviews, 360 feedback, planes de mejora con nombres |
| Datos de participantes de investigación (PII/SPI) | **PROHIBIDA** | No, sin aprobación IRB | Nombres, ubicaciones, características identificables de participantes |
| Actas de junta/asamblea, informe de gestión (ESAL Colombia) | **PUBLIC** | Sí, sin restricción | Documentos legalmente públicos bajo ley colombiana de ESALs |

---

## Por situación de trabajo

### Comunicaciones y mensajería (emails, Teams, WhatsApp)

- **Sí**: redactar mensajes a colegas, aliados y donantes usando contexto general
- **Sí**: pedir a Claude que mejore tono, estructura o traduzca comunicaciones
- **Cuidado**: no incluir cifras específicas de salario o montos de grants en tus prompts
- **No**: redactar comunicaciones sobre asuntos disciplinarios o acciones formales de HR

### Propuestas y fundraising

- **Sí**: desarrollo de narrativa, framing estratégico, investigación de literatura
- **Sí**: usar Claude Projects de IPA para templates y análisis de RFPs
- **Cuidado**: no incluir cifras específicas de presupuesto o metodología propietaria sin verificar que el grant lo permita
- **Cuidado**: si no estás seguro de los términos del grant, consulta con Legal antes

### Reuniones y notas

- **Sí**: preparar talking points, agendas, resumir contexto público
- **Sí**: usar herramientas de notas de reunión para reuniones internas de IPA (con consentimiento de participantes)
- **No**: usar IA para tomar notas en reuniones con participantes de investigación o beneficiarios
- **No**: usar IA para tomar notas en reuniones externas con donantes o aliados sin pedir permiso explícito

### HR y gestión de personas

- **Sí**: redactar comunicaciones estándar de HR (invitaciones a reuniones, recordatorios de políticas, actualizaciones generales)
- **Sí**: usar Claude para tu propio desarrollo profesional o escritura reflexiva
- **Cuidado**: comunicaciones administrativas de HR que involucren licencias individuales, ajustes salariales o cambios organizacionales — evitar combinar nombres con cifras específicas
- **No**: evaluaciones de desempeño, feedback 360, registros disciplinarios, notas de coaching individual — requiere aprobación MIST

### Finanzas y presupuesto

- **Sí**: redactar narrativas de presupuesto, formatear resúmenes financieros, explicar estructura presupuestal
- **Cuidado**: evitar incluir montos específicos en dólares o datos salariales en los prompts de Claude
- **No**: datos salariales por nombre, detalles de presupuesto de grants con restricciones de donante, o datos de benchmarking de compensación

### Investigación

- **Sí**: escribir código para análisis, interpretar resultados publicados, redactar protocolos
- **Sí**: revisiones de literatura y síntesis de papers publicados
- **Cuidado**: datos de investigación no publicados (incluso anonimizados) — tratar como CONFIDENTIAL, usar Azure OpenAI o LLMs locales
- **No**: datos que puedan identificar participantes de investigación — nunca sin aprobación IRB

---

## Qué cambió con la licencia Enterprise

| Antes (licencia Pro personal) | Ahora (Enterprise) |
|---|---|
| Zona gris: datos INTERNAL procesados bajo términos de consumidor | Cubierto: términos comerciales + DPA contractual |
| Protección dependía de un ajuste del usuario (opt-out de entrenamiento) | Protección contractual vinculante, no reversible por el usuario |
| Claude Code requería Premium a $200/mes o acceso API | Premium seat asignado institucionalmente |
| Sin logs de auditoría ni controles de admin | Admin puede configurar retención, auditoría, políticas org |

**Lo que NO cambió con Enterprise:**
- Evaluaciones de desempeño **siguen prohibidas** sin aprobación MIST (es restricción de contenido, no de licencia)
- La buena práctica de **no incluir cifras específicas** de salarios o presupuestos en prompts sigue vigente
- Los datos de **participantes de investigación** siguen prohibidos sin IRB

---

## Si algo sale mal

1. **Para.** Deja de usar la herramienta con esos datos inmediatamente.
2. **Reporta.** Envía un ticket al helpdesk de MIST — sé transparente sobre lo que pasó.
3. **No te preocupes.** No hay penalización por reportar proactivamente.
4. **MIST ayuda.** Ellos evaluarán si se necesitan pasos adicionales.

Los lineamientos están diseñados para habilitar innovación, no para generar miedo. Los errores de buena fe son oportunidades de aprendizaje para toda la organización.

---

*Este documento complementa, no reemplaza, los IPA AI Usage Guidelines (v1.0, marzo 2026). Para situaciones no cubiertas aquí, consulta los lineamientos completos o contacta a MIST.*

*Contactos útiles:*
- **Azure OpenAI**: researchsupport@poverty-action.org (GRDS)
- **Aprobación de casos de uso**: ipahelpdesk.freshservice.com (asunto: "AI Use Case")
- **Licencias Claude Enterprise**: support@poverty-action.org
