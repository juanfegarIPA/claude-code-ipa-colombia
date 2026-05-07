# Mi setup de procurement

Esta carpeta es para gestionar tus decisiones de procurement: cuándo se requiere proceso competitivo, cuándo aplica una sole source justification (SSJ), y dónde guardar la documentación de cada caso.

## Para qué sirve

Procurement en IPA tiene reglas claras pero detalladas: hay umbrales por monto, evidencia obligatoria, templates oficiales. Sin estructura, cada decisión consume tiempo de lookup y se cometen errores costosos. Con este setup:
- La política aplicable está a un mensaje de distancia.
- Cada caso queda documentado con el formato correcto.
- Claude te guía por el proceso (qué nivel de competencia aplica, qué template usar, qué evidencia recoger).

## Estructura

```
procurement/
├── CLAUDE.md                  # Este archivo (referencia rápida + rol del manager)
├── policies/                  # Política IPA (read-only, copiada o linkeada de Box)
└── casos/                     # Una carpeta por decisión activa
    └── [YYYY-MM-DD]-[asunto]/
        ├── case-overview.md   # Resumen del caso, monto, contexto
        ├── ssj-draft.md       # SSJ si aplica (template oficial)
        └── docs/              # Cotizaciones, evidencia, correspondencia
```

## Política IPA — fuente de verdad

La política oficial vive en Box (read-only). La ruta típica es:

```
[tu-Box]\IPA_Resources\IPA_Global Operations_Resources\1_Procurement\1 _ Global Procurement P&Ps\
```

`[tu-Box]` puede variar según cómo tengas configurado Box Drive. Si no estás seguro de la ruta exacta, pídele a Claude que la descubra:

> "Busca en mi sistema dónde está la carpeta `1 _ Global Procurement P&Ps` y úsala como referencia para procurement."

Claude la encuentra. Una vez la tengas, anótala arriba reemplazando `[tu-Box]`.

Documentos clave (los nombres pueden tener actualizaciones de fecha; buscar la versión más reciente):
- `Global Procurement Policies and Procedures_YYYY-MM.pdf` — política global completa
- `Annexes/Annex 01b_Competition Thresholds Summary.docx` — umbrales por monto
- `Annexes/Annex 03a_Sole-source Justification Memo.docx` — template oficial SSJ
- `Annexes/Annex 03b_Scope of Work.docx` — template de scope of work

**Nunca modificar archivos en esa ubicación.** Copiar a `casos/[caso]/docs/` y trabajar sobre la copia.

## Umbrales de competencia (referencia rápida)

IPA Colombia opera como Field procurement (Country Office).

| Nivel | Monto (USD) | Proceso requerido |
|-------|-------------|-------------------|
| 1 — Direct Award | < 500 | Adjudicación directa, 1 cotización razonable |
| 2 — Three Quotations | 500 a 4,999 | Mínimo 3 cotizaciones por escrito + Bid Matrix |
| 3 — Written Solicitation | 5,000 o más | RFQ o RFP (proceso competitivo abierto) |

Documentos de adjudicación:
- 0 a 1,000 USD: PO opcional.
- 1,000 a 10,000 USD: PO firmado por proveedor.
- 10,000 USD o más: Vendor Agreement requerido.

## Sole Source Justification (SSJ)

### Cuándo aplica

SSJ es obligatorio para compras que omiten competencia cuando el monto supera USD 500 (Field).

### Criterios válidos (debe aplicar UNO)

| Criterio | Cuándo aplica | Evidencia |
|----------|---------------|-----------|
| Only one source | Mercado confirma que solo un proveedor tiene la capacidad | Documentar investigación de mercado |
| Emergency / Force majeure | Circunstancias excepcionales (no por mala planificación) | Documentar la emergencia |
| Proprietary / Exclusive | Bien o servicio de propiedad exclusiva | Documentación del proveedor |
| Justified follow-on | Competir causaría demoras inaceptables, duplicación o problemas de IP | Documentar el riesgo concreto |
| Donor-designated vendor | El donante exige por escrito ese proveedor | Adjuntar documentación del donante |

### Lo que NO justifica SSJ

- Tener relación previa con el proveedor.
- Mala planificación que dejó poco tiempo.
- Que el proveedor sea el más capacitado o el más barato.

## Mi rol como manager en procurement

Como manager de IPA Colombia tu responsabilidad típica es:
1. Identificar la necesidad de compra y el monto estimado.
2. Determinar qué nivel de proceso aplica.
3. Si aplica SSJ, redactarlo con la evidencia correspondiente.
4. Documentar el caso en `casos/[YYYY-MM-DD]-[asunto]/` con todos los soportes.
5. Coordinar con el equipo de operaciones para el proceso formal.

**Tu rol no es ejecutar el proceso de compra ni firmar el Vendor Agreement** — eso lo hace operaciones siguiendo los aprobadores. Tu rol es asegurar que la decisión esté bien fundamentada y documentada.

## Cómo Claude Code te ayuda con este setup

- "Tengo que comprar [X] por aproximadamente USD [monto]. ¿Qué proceso aplica?"
- "Necesito redactar un SSJ para [proveedor] porque [razón]. Empieza el draft."
- "Revisa este SSJ y dime si la evidencia es suficiente."
- "Hazme un resumen de los procurement abiertos que tengo en `casos/`."

## Reglas

1. **Cada caso = una carpeta**. Aunque sea simple, tener la carpeta facilita auditoría y traspaso.
2. **No mezclar casos en un solo archivo**.
3. **Datos sensibles** (cifras de propuestas competidoras, información comercial reservada): mantener en `docs/` con nombres claros y nunca compartir fuera del workspace de procurement.
