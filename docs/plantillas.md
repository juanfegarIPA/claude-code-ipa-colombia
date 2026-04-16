# Plantillas funcionales

Estas plantillas son archivos de texto con instrucciones que Claude Code lee automáticamente. Cuando copias una plantilla a tu carpeta de workspace, Claude la usa como contexto para entender quién eres y cómo ayudarte.

---

## Cómo funciona: módulos vs. plantillas

| | Módulo | Plantilla |
|---|--------|-----------|
| **Para quién** | Para ti (el manager) | Para Claude Code |
| **Qué es** | Una explicación de la filosofía y cómo está construido | Un archivo con instrucciones operativas |
| **Qué haces con él** | Lo lees para entender qué hace y por qué | Lo descargas y lo guardas en tu workspace |

**Flujo en 3 pasos:**

1. **Lee el módulo** → entiende la filosofía y qué esperar
2. **Descarga la plantilla** → guárdala en tu carpeta de workspace como archivo `.md`
3. **Abre Claude Code** → él te hace las preguntas que necesita y empieza a funcionar

!!! success "No necesitas editar nada"
    Las plantillas están diseñadas para ser **plug-and-play**. Cuando abras Claude Code por primera vez después de descargar una plantilla, él te hará las preguntas necesarias (tu nombre, cargo, estilo, etc.) y llenará la información automáticamente. No tienes que editar los archivos a mano.

---

## Cómo descargar una plantilla

1. Haz clic en el botón "Descargar" de la plantilla que te interese
2. Tu navegador baja el archivo `.md` a tu carpeta de descargas
3. Muévelo a tu carpeta de workspace (la misma donde vas a abrir Claude Code)
4. Abre Claude Code en esa carpeta — él se encarga del resto

!!! tip "¿Qué es un archivo .md?"
    Es un archivo de texto simple (como un .txt) con formato básico. Lo importante es que el nombre termine en `.md` (por ejemplo, `CLAUDE.md`, no `CLAUDE.md.txt`). En Windows, asegúrate de tener activada la opción "Mostrar extensiones de archivo" en el Explorador para confirmar que la extensión está correcta.

---

## Plantillas disponibles

### CLAUDE.md starter

Tu primer CLAUDE.md: le dice a Claude quién eres, qué haces y qué reglas seguir.

[:material-download: Descargar CLAUDE.md](https://raw.githubusercontent.com/juanfegarIPA/claude-code-ipa-colombia/main/plantillas-src/CLAUDE.md){ .md-button .md-button--primary download="CLAUDE.md" }

??? note "Ver contenido completo"
    ```markdown
    --8<-- "CLAUDE.md"
    ```

---

### Comunicaciones starter

Instrucciones para que Claude redacte mensajes en tu voz. Incluye perfil de voz, niveles de tono, y un log de correcciones que crece con el uso.

Ver [Módulo de Comunicaciones](modulos/01-comunicaciones.md) para entender la filosofía.

[:material-download: Descargar comunicaciones.md](https://raw.githubusercontent.com/juanfegarIPA/claude-code-ipa-colombia/main/plantillas-src/comunicaciones.md){ .md-button .md-button--primary download="comunicaciones.md" }

??? note "Ver contenido completo"
    ```markdown
    --8<-- "comunicaciones.md"
    ```

---

### Tareas starter

Setup mínimo para seguimiento de compromisos con una tabla simple. Claude la actualiza cuando le pides agregar, completar o revisar tareas.

Ver [Módulo de Gestión de tareas](modulos/02-gestion-de-tareas.md) para entender la filosofía.

[:material-download: Descargar tareas.md](https://raw.githubusercontent.com/juanfegarIPA/claude-code-ipa-colombia/main/plantillas-src/tareas.md){ .md-button .md-button--primary download="tareas.md" }

??? note "Ver contenido completo"
    ```markdown
    --8<-- "tareas.md"
    ```

---

### KB consulta starter

Instrucciones para que Claude Code sepa dónde encontrar el Knowledge Base de BD en Box y cómo consultarlo.

!!! warning "Requisito"
    Necesitas tener Box Drive sincronizado para que Claude Code pueda leer los archivos del KB.

Ver [Módulo de Knowledge Base](modulos/03-knowledge-base.md) para entender qué contiene y la visión futura.

[:material-download: Descargar kb-consulta.md](https://raw.githubusercontent.com/juanfegarIPA/claude-code-ipa-colombia/main/plantillas-src/kb-consulta.md){ .md-button .md-button--primary download="kb-consulta.md" }

??? note "Ver contenido completo"
    ```markdown
    --8<-- "kb-consulta.md"
    ```

---

### Presentaciones IPA starter

Instrucciones para que Claude Code genere presentaciones .pptx con la marca de IPA aplicada automáticamente.

Ver [Módulo de Presentaciones](modulos/04-presentaciones-ipa.md) para entender la filosofía.

[:material-download: Descargar presentaciones-ipa.md](https://raw.githubusercontent.com/juanfegarIPA/claude-code-ipa-colombia/main/plantillas-src/presentaciones-ipa.md){ .md-button .md-button--primary download="presentaciones-ipa.md" }

??? note "Ver contenido completo"
    ```markdown
    --8<-- "presentaciones-ipa.md"
    ```

---

### Revisión semanal starter

Instrucciones para que Claude Code te ayude a hacer una revisión estructurada de tu semana.

Ver [Módulo de Revisión semanal](modulos/05-revision-semanal.md) para entender la filosofía.

[:material-download: Descargar revision-semanal.md](https://raw.githubusercontent.com/juanfegarIPA/claude-code-ipa-colombia/main/plantillas-src/revision-semanal.md){ .md-button .md-button--primary download="revision-semanal.md" }

??? note "Ver contenido completo"
    ```markdown
    --8<-- "revision-semanal.md"
    ```

---

**Siguiente paso:** [Explorar los módulos](modulos/index.md)
