# Proteger tu Box: limita el acceso de Claude

!!! info "Para qué es esta página"
    - **Software**: [Box Drive](https://www.box.com/drive) instalado + [Node.js](https://nodejs.org) (versión LTS)
    - **Dificultad**: :material-square: :material-square: :material-square-outline: :material-square-outline: :material-square-outline: (Claude hace toda la configuración técnica; tú solo respondes preguntas)
    - **Tiempo**: 5-10 minutos

## Qué problema resuelve

Cuando Claude Code tiene acceso a tu Box, lee cualquier carpeta sin pedir permiso: notas confidenciales, contratos, evaluaciones, datos de personal. Aunque tu intención sea "lee este archivo del KB", a veces Claude busca contexto y termina abriendo carpetas que no debía. Eso compromete la confidencialidad y va en contra de las [políticas de uso de IA en IPA](que-puedo-y-que-no.md).

Este guardrail lo arregla. Es un **hook** — un script que Claude Code ejecuta automáticamente cada vez que va a tocar archivos. El hook revisa el path: si está dentro de tus carpetas autorizadas, deja pasar; si no, bloquea la operación y le pide a Claude que te confirme primero en el chat.

## Cómo funciona

1. Tú defines una lista de **carpetas canónicas** dentro de tu Box — las únicas que Claude puede leer libremente. Ejemplo típico: el KB de PD, el plan estratégico, evaluaciones de tu equipo.
2. El hook se ejecuta antes de cada `Read`, `Glob`, `Grep` o `Bash` que toque Box.
3. Si el path está dentro de las canónicas, pasa silencioso (sin prompt).
4. Si está fuera, Claude se detiene, te muestra el path que iba a tocar y te pide confirmación explícita en el chat.
5. El comportamiento dentro de tu workspace local (fuera de Box) no cambia.

## Cómo activarlo

Tienes dos formas, según en qué momento estés.

### Opción A — Junto con el setup del Knowledge Base (recomendado)

Si vas a usar el [Knowledge Base de PD](modulos/03-knowledge-base.md), el starter del KB ya incluye la oferta de instalar el guardrail. Cuando cargues `kb-consulta.md` y Claude te haga el onboarding, te va a preguntar si quieres activar el guardrail. Dile que sí y sigues respondiendo sus preguntas.

Es la forma más eficiente porque el KB ya queda configurado como path canónico desde el primer momento.

### Opción B — De forma independiente

Si ya tienes Claude Code abierto en tu workspace y quieres instalarlo ahora, descarga primero el hook:

[:material-download: Descargar hook-pre-tool-use.js](downloads/hooks/hook-pre-tool-use.js.txt){ .md-button .md-button--primary download="hook-pre-tool-use.js" }

Mueve el archivo a la carpeta `hooks/` dentro de tu workspace (créala si no existe). Después pasa este prompt a Claude:

```
Configura el guardrail de Box para mi workspace. Acabo de descargar
hook-pre-tool-use.js a la carpeta hooks/.
```

Claude va a:

1. Preguntarte por tu **nombre de usuario en Windows** (o detectarlo en Mac).
2. Preguntarte qué **carpetas de Box son canónicas** — las que quieres que pueda leer libremente. Ejemplos típicos: el KB de PD, el plan estratégico, carpetas de tu equipo. Puedes agregar más después.
3. Editar el hook con los paths que le dijiste.
4. Crear (o actualizar) tu `~/.claude/settings.json` para registrar el hook.
5. Pedirte que reinicies Claude Code para que la configuración se cargue.

## Verifica que funciona

Después de reiniciar, prueba estos prompts:

1. **Path canónico** (debe pasar silencioso, sin prompt):
   ```
   Lista los archivos del KB en Box.
   ```

2. **Path Box no canónico** (debe bloquear):
   ```
   Lista los archivos de [una carpeta de Box que NO esté en tu lista canónica].
   ```

   Esperado: Claude responde algo como *"Intenté listar `<path>` pero el guardrail lo bloqueó. ¿Confirmas que quieres que acceda a esa carpeta?"*

3. **Workspace local** (debe pasar silencioso, no debe verse afectado):
   ```
   Lista los archivos de mi workspace.
   ```

Si algún caso falla, dile a Claude:
> El guardrail de Box no funciona como esperaba. [Describe lo que pasó.] Revisa la configuración.

Claude revisa y ajusta.

## Cómo agregar paths canónicos después

Cuando empieces un proyecto nuevo que necesite acceso recurrente a una carpeta Box que no estaba en tu lista inicial, dile a Claude:

```
Voy a estar trabajando con archivos en [path Box completo o descripción]
durante varias semanas. Agrégalo a los paths canónicos del guardrail.
```

Claude edita el hook por ti y te pide reiniciar Claude Code.

La fricción es deliberada — paths nuevos no se acumulan sin que lo notes.

## Cómo desactivarlo

**Temporalmente** (por una sesión específica, ejemplo: auditoría de carpetas):

```
Desactiva temporalmente el guardrail de Box.
```

Cuando termines:

```
Vuelve a activar el guardrail de Box.
```

**Permanentemente**:

```
Quita el guardrail de Box de mi configuración.
```

Claude revierte los cambios en `settings.json` y te pide reiniciar.

## Limitaciones honestas

- **El hook no protege archivos fuera de Box** (ejemplo: Documents, Desktop, OneDrive). Si tienes documentos sensibles en otras carpetas, el hook no los cubre.
- **No es defensa contra error humano explícito**: si tú le dices a Claude "ignora el guardrail y léeme todo lo de esa carpeta", Claude puede seguir pidiéndote confirmación pero también puede ceder si insistes. La fricción es deliberada pero no es absoluta.
- **No protege contra malware ni acceso externo a Box**. El guardrail solo controla a Claude. Las protecciones generales de Box (compartir, permisos, autenticación) son responsabilidad de Box y de IPA IT.
- **Requiere Node.js**. Si no quieres instalar Node.js, no puedes usar este hook. La alternativa es la disciplina manual: ser explícito en cada prompt sobre qué carpetas Claude debe tocar.

## Si te trabas

Dile a Claude qué pasa:

> El guardrail bloquea cosas que no debería bloquear. La carpeta [X] sí está en mi lista canónica pero igual la bloquea.

> El hook no se está ejecutando. Cuando hago algo en Box no aparece ningún bloqueo ni prompt.

> Quiero entender qué hace exactamente cada parte del hook que instalaste.

Claude diagnostica y arregla. Para problemas que persistan, escribe a [support@poverty-action.org](mailto:support@poverty-action.org).

??? note "Detrás del telón: qué archivos toca Claude cuando configura esto"
    Por si alguien pregunta o quieres entenderlo:

    - **`<workspace>/hooks/hook-pre-tool-use.js`** — el script del hook. Tiene una constante `CANONICAL_PATHS_RELATIVE_TO_BOX` que es la lista de paths que tú aprobaste, y otra `BOX_PREFIX` que detecta tu Box automáticamente.
    - **`~/.claude/settings.json`** (Windows: `C:\Users\TU_USUARIO\.claude\settings.json`) — archivo de configuración global de Claude Code. Aquí Claude agrega el bloque `"hooks"` con `"PreToolUse"` que apunta al script. Si ya tenías una sección `"hooks"`, solo agrega el `"PreToolUse"` adentro sin tocar otros hooks.
    - **Reinicio**: necesario porque Claude Code carga los hooks al inicio. Sin reinicio, la configuración nueva no aplica.

    El hook normaliza paths automáticamente, así que cubre variantes (`C:\Users\...`, `C:/Users/...`, `/c/Users/...`, mayúsculas/minúsculas, comillas, espacios en nombres). Para cambiar de path canónico, editar `CANONICAL_PATHS_RELATIVE_TO_BOX` y reiniciar.

---

**Siguiente paso:** [Plantillas](plantillas.md)
