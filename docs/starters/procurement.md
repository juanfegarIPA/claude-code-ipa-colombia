# Starter: Procurement

Setup para gestionar tus decisiones de procurement como manager IPA Colombia: cuándo aplica proceso competitivo, cuándo aplica sole source justification (SSJ), dónde guardar la documentación de cada caso.

## Para qué sirve

Procurement en IPA tiene reglas claras pero detalladas: hay umbrales por monto, evidencia obligatoria, templates oficiales. Sin estructura, cada decisión consume tiempo de lookup y se cometen errores costosos. Con este starter:

- La política aplicable está a un mensaje de distancia.
- Cada caso queda documentado con el formato correcto.
- Claude te guía por el proceso (qué nivel de competencia aplica, qué template usar, qué evidencia recoger).

## Para quién

Managers que toman decisiones de compra como parte de su rol — directamente o como solicitantes que validan con operaciones.

Si tu rol no involucra procurement (la mayoría se maneja directamente desde operaciones), este starter no aplica.

---

## Qué te deja instalado

```
[tu-workspace]/
├── CLAUDE.md
├── feedback.md
└── procurement/
    ├── CLAUDE.md       (descargado en el Paso 1)
    └── casos/          (Claude la crea vacía en el Paso 4)
```

---

## Paso 1 — Descarga el archivo CLAUDE.md del starter

[:material-download: Descargar CLAUDE.md del starter de procurement](../downloads/starters/procurement/CLAUDE.md.txt){ .md-button .md-button--primary download="CLAUDE.md" }

El archivo se baja a tu carpeta de Descargas.

---

## Paso 2 — Crea la carpeta `procurement/` y mueve el archivo

1. En tu workspace, crea una carpeta nueva llamada exactamente `procurement`.
2. Mueve el archivo `CLAUDE.md` descargado a esa carpeta `procurement/`.

---

## Paso 3 — Pídele a Claude que marque el starter como cargado

Pasa este prompt en Claude Code:

```
Acabo de cargar el starter de procurement en una carpeta llamada
procurement/. En mi CLAUDE.md raíz, busca la sección "Plantillas
starter que cargué" y marca el starter de procurement como cargado,
usando procurement/ como nombre de la carpeta. La línea debe quedar:

- [x] Procurement — carpeta: `procurement/`
```

**Qué hace Claude**: edita tu `CLAUDE.md` raíz y guarda el archivo.

**Qué tienes que hacer tú**: nada.

---

## Paso 4 — Pídele a Claude que cree la carpeta de casos y localice la política

Pasa este prompt:

```
Acabo de cargar el starter de procurement en procurement/. Haz dos cosas:

1. Crea la subcarpeta procurement/casos/ vacía.
2. Busca en mi sistema la carpeta "1 _ Global Procurement P&Ps" en Box y
   dame la ruta completa. Una vez la encuentres, abre procurement/CLAUDE.md
   y reemplaza [tu-Box] por la ruta real en la sección de "Política IPA".
```

**Qué hace Claude**: crea la carpeta `casos/`, busca la ruta de Box en tu sistema, y actualiza el archivo `procurement/CLAUDE.md` con la ruta correcta.

**Qué tienes que hacer tú**: nada en este paso. Si Claude no encuentra la ruta de Box, avísale dónde está manualmente y se la pasas.

---

## Paso 5 — Listo

A partir de aquí, cuando tengas una decisión de procurement, pasa este prompt:

```
Tengo que comprar [descripción de lo que se va a comprar] por aproximadamente
USD [monto]. Ayúdame a estructurar el caso.
```

**Qué hace Claude**:

1. Determina qué nivel de proceso aplica según el monto (Direct Award, Three Quotations, RFQ/RFP).
2. Te dice si aplica SSJ (sole source justification) y por qué.
3. Crea la carpeta `procurement/casos/[YYYY-MM-DD]-[asunto]/` con tres archivos:
   - `case-overview.md` — resumen del caso (lo va llenando con tus respuestas).
   - `ssj-draft.md` — solo si aplica.
   - `docs/` — vacía, para que vayas guardando cotizaciones y soportes.
4. Te pregunta los datos que necesita para llenar los drafts.

**Qué tienes que hacer tú**:

- Responder las preguntas que Claude te haga (proveedor, criterio SSJ que aplica, evidencia, fecha objetivo).
- Cuando los drafts estén listos, coordinar con el equipo de operaciones para el proceso formal. Tu rol como manager termina ahí — operaciones ejecuta el proceso de compra.

---

## Referencia rápida — umbrales

IPA Colombia opera como Field procurement.

| Nivel | Monto (USD) | Proceso |
|-------|-------------|---------|
| 1 — Direct Award | < 500 | Adjudicación directa, 1 cotización razonable |
| 2 — Three Quotations | 500 a 4,999 | Mínimo 3 cotizaciones por escrito + Bid Matrix |
| 3 — Written Solicitation | 5,000+ | RFQ o RFP (proceso competitivo abierto) |

Documentos de adjudicación:

- 0 a 1,000 USD: PO opcional.
- 1,000 a 10,000 USD: PO firmado por proveedor.
- 10,000 USD o más: Vendor Agreement requerido.

---

## Referencia rápida — SSJ

SSJ es obligatorio para compras que omiten competencia cuando el monto supera USD 500 (Field).

Criterios válidos (debe aplicar uno):

- **Only one source**: solo un proveedor tiene la capacidad. Evidencia: investigación de mercado.
- **Emergency / Force majeure**: circunstancias excepcionales. Evidencia: documentar la emergencia.
- **Proprietary / Exclusive**: bien o servicio de propiedad exclusiva. Evidencia: documentación del proveedor.
- **Justified follow-on**: competir causaría demoras inaceptables, duplicación o problemas de IP. Evidencia: documentar el riesgo.
- **Donor-designated vendor**: el donante exige por escrito ese proveedor. Evidencia: documentación del donante.

Lo que NO justifica SSJ:

- Tener relación previa con el proveedor.
- Mala planificación que dejó poco tiempo.
- Que el proveedor sea el más capacitado o el más barato.

---

## Conexión con otros starters

- **People layer**: si lo tienes, los proveedores recurrentes pueden tener archivos en `people/external/`.
- **Weekly review**: casos de procurement abiertos pueden aparecer en el Bloque 2 si llevan tiempo sin moverse.
