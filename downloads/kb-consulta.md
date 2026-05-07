# Knowledge Base de PD — Instrucciones para Claude Code

## Onboarding (primera vez)

Si la ruta del KB dice "pendiente" o contiene "[TU-USUARIO]",
pregúntale al usuario:

1. ¿Cuál es tu usuario de Windows? (para armar la ruta de Box)
   En Mac la ruta es ~/Box/... y no necesita usuario.
2. ¿Ya tienes Box Drive instalado y sincronizado?
   Si no → indicarle que lo descargue de box.com/drive o pida
   ayuda al helpdesk.

Con la respuesta, reemplaza [TU-USUARIO] en las rutas de abajo.
Si el usuario tiene CLAUDE.md, agrega la línea del KB ahí también.

## Qué es

El Knowledge Base de Project Development de IPA Colombia. Cubre
desarrollo de proyectos y de negocios en sentido amplio: perfiles
de aliados, donantes, implementadores, gobierno, academia y PIs;
assets reutilizables; portafolios temáticos y un pipeline de
oportunidades.

## Dónde está

- Windows: C:/Users/pendiente/Box/IPA_COL_Resources/IPA_COL_PD_Resources/IPA_COL_PD_KnowledgeBase/
- Mac: ~/Box/IPA_COL_Resources/IPA_COL_PD_Resources/IPA_COL_PD_KnowledgeBase/

## Cómo consultarlo

Cuando el usuario pregunte sobre aliados, oportunidades,
propuestas, el pipeline de PD, o diga "el KB" / "nuestro KB",
ve directo a la ruta de arriba. El KB tiene su propio CLAUDE.md
con la estructura, taxonomía y reglas de edición.

### Preguntas típicas que puedes responder
- "¿Con qué aliados tenemos oportunidades activas este trimestre?"
- "Busca el thread de [nombre] y hazme un resumen"
- "¿Qué assets tenemos para una reunión sobre educación?"
- "Muéstrame el pipeline y dime qué necesita acción"

## Reglas
- El KB es un recurso de equipo — no agregar info privada
- No agregar valoraciones personales ni información de desempeño
- Si la información parece desactualizada, mencionarlo al usuario

---

## Guardrail de Box (recomendado al activar el KB)

Después de configurar el KB, ofrécele al usuario instalar el
guardrail de Box. El guardrail es un hook PreToolUse que limita
a Claude a leer solo carpetas Box autorizadas (canónicas), en
vez de cualquier archivo de su Box. Mensaje sugerido:

> Listo, el KB ya quedó configurado. Tienes la opción de instalar
> también el guardrail de Box: limita mi acceso a Box a solo las
> carpetas que tú autorices. Recomendado si tu Box tiene archivos
> sensibles que no quieres que yo lea sin permiso. ¿Lo instalamos?

Si dice que sí, sigue este flujo (no requiere abrir editores):

### Pre-requisitos

Verifica con el usuario:
- Box Drive instalado (ya lo confirmaste arriba).
- Node.js instalado. Si no lo tiene, dile que lo descargue de
  nodejs.org (versión LTS) y reinicie esta sesión cuando termine.

### Pasos

1. **Descarga el hook**. La plantilla genérica está en el sitio
   de la guía: indícale al usuario que la descargue desde
   `https://juanfegaripa.github.io/claude-code-ipa-colombia/manager/proteger-box.html`
   (botón "Descargar hook-pre-tool-use.js"). El archivo se baja
   con extensión `.js`.

2. **Crea la carpeta de hooks** en el workspace si no existe:
   `<workspace>/hooks/`. Mueve `hook-pre-tool-use.js` ahí.

3. **Pregunta los paths canónicos** con AskUserQuestion. Sugiere
   estos como opciones (multiSelect):
   - El KB de PD (ya lo conocemos:
     `ipa_col_resources/ipa_col_pd_resources/ipa_col_pd_knowledgebase/`)
   - Plan estratégico de IPA Colombia
     (`oficina ipa colombia/06_strategic plan/`)
   - Performance reviews del equipo
     (`general documents/performance review 2025/`)
   - Otros (dejar que el usuario los liste)

   Convierte cada respuesta a path RELATIVO a su Box, en lowercase,
   con forward slashes, terminado en `/`. Si el usuario menciona
   un path absoluto (ej: `C:\Users\xxx\Box\Carpeta\`), córtale el
   prefijo Box.

4. **Edita el hook**. Lee `<workspace>/hooks/hook-pre-tool-use.js`,
   busca la constante `CANONICAL_PATHS_RELATIVE_TO_BOX = [...]` y
   reemplaza los ejemplos comentados con los paths que el usuario
   eligió, sin comentar (lista de strings).

5. **Registra el hook en settings.json**. El archivo está en:
   - Windows: `C:\Users\<USER>\.claude\settings.json`
   - Mac: `~/.claude/settings.json`

   Si no existe, créalo con:
   ```json
   {
     "hooks": {
       "PreToolUse": [
         {
           "matcher": "Read|Glob|Grep|Bash",
           "hooks": [
             {
               "type": "command",
               "command": "node \"<workspace>/hooks/hook-pre-tool-use.js\"",
               "timeout": 5
             }
           ]
         }
       ]
     }
   }
   ```

   Reemplaza `<workspace>` con la ruta real (con forward slashes
   incluso en Windows). Si el archivo ya existe y tiene `"hooks"`,
   agrega solo el `"PreToolUse"` adentro respetando el resto.
   Si ya tiene `"PreToolUse"`, agrega un nuevo objeto al array (no
   lo reemplaces — pueden coexistir varios hooks).

6. **Confirma al usuario**:
   > Listo. Cierra y vuelve a abrir Claude Code para que cargue
   > el hook. Después prueba a leer un archivo del KB (debe pasar
   > silencioso) y a listar una carpeta de Box que NO esté en tu
   > lista canónica (debe bloquearse y pedirme confirmación).

### Comandos del usuario sobre el guardrail

Cuando el usuario diga alguna de estas cosas, sigue el flujo
indicado:

- **"Agrega [path Box] a los canónicos"** → edita
  `CANONICAL_PATHS_RELATIVE_TO_BOX` agregando el path normalizado
  (relativo a Box, lowercase, forward slashes, slash final).
  Pídele reiniciar Claude Code.

- **"Quita [path] de los canónicos"** → edita la lista quitando
  ese path. Pídele reiniciar.

- **"Desactiva temporalmente el guardrail"** → en `settings.json`
  cambia la clave `"PreToolUse"` por `"PreToolUse_disabled"`.
  Pídele reiniciar y avísale que se quitó la protección de Box.

- **"Vuelve a activar el guardrail"** → cambia
  `"PreToolUse_disabled"` de vuelta a `"PreToolUse"`. Pídele
  reiniciar.

- **"Quita el guardrail permanentemente"** → en `settings.json`,
  remueve solo la entrada de `PreToolUse` que apunta al hook
  (deja otras intactas). Pregúntale si también quiere borrar
  `<workspace>/hooks/hook-pre-tool-use.js`. Pídele reiniciar.

- **"El guardrail bloquea algo que no debería"** → diagnóstica
  leyendo `CANONICAL_PATHS_RELATIVE_TO_BOX` y comparando con el
  path real. Casos comunes: falta `/` final, espacios mal escritos,
  mayúsculas (el hook normaliza a lowercase, así que la lista
  también debe estar lowercase).

- **"El guardrail no se está ejecutando"** → verifica que
  `settings.json` tenga el bloque `PreToolUse` correcto y que el
  path al script en `command` sea correcto y use forward slashes.
