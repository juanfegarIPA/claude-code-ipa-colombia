#!/usr/bin/env node
/**
 * hook-pre-tool-use.js — Guardrail de acceso a Box Drive
 *
 * Intercepta cada Read/Glob/Grep/Bash antes de ejecutarse. Si la operación
 * toca tu carpeta de Box (por ejemplo `C:\Users\TU_USUARIO\Box\`), verifica
 * que el path esté dentro de la whitelist canónica que tú definiste abajo.
 * Si está, deja pasar. Si no, bloquea la operación y le pide a Claude que
 * te pida confirmación explícita en el chat antes de reintentar.
 *
 * Esto evita que Claude lea libremente archivos sensibles de Box que no
 * estaban en el alcance de la tarea.
 *
 * --- INSTALACIÓN ---
 *
 * 1. Guarda este archivo en tu workspace, por ejemplo:
 *      C:\Users\TU_USUARIO\Documents\Claude\hooks\hook-pre-tool-use.js
 *      ~/Documents/Claude/hooks/hook-pre-tool-use.js
 *
 * 2. Edita la lista CANONICAL_PATHS_RELATIVE_TO_BOX (sección de abajo) con
 *    las subcarpetas de tu Box donde Claude puede leer libremente. Lo demás
 *    de tu Box quedará bloqueado por defecto.
 *
 * 3. Registra el hook en tu `~/.claude/settings.json` (o el equivalente
 *    según tu instalación). Agrega esta sección dentro del objeto raíz —
 *    si ya tienes una clave "hooks", solo agrega "PreToolUse" adentro:
 *
 *      "hooks": {
 *        "PreToolUse": [
 *          {
 *            "matcher": "Read|Glob|Grep|Bash",
 *            "hooks": [
 *              {
 *                "type": "command",
 *                "command": "node \"C:/Users/TU_USUARIO/Documents/Claude/hooks/hook-pre-tool-use.js\"",
 *                "timeout": 5
 *              }
 *            ]
 *          }
 *        ]
 *      }
 *
 *    En Mac/Linux, ajusta el path del comando a tu sistema (ej.
 *    `node "/Users/tu-usuario/Documents/Claude/hooks/hook-pre-tool-use.js"`).
 *
 * 4. Reinicia Claude Code para que cargue el hook.
 *
 * --- DETECCIÓN AUTOMÁTICA DE TU CARPETA BOX ---
 *
 * El hook detecta tu carpeta home automáticamente y asume que tu Box vive
 * en `<home>/Box/`. Si tu Box está en otro lugar, edita BOX_PREFIX abajo.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

// === EDITAR: ubicación de tu carpeta Box ===
// Por defecto se detecta como `<home>/Box/`. Si tu Box está en otro lugar
// (por ejemplo `D:\Box\` o `~/MiBox/`), reemplaza la línea siguiente con
// el path absoluto a la raíz de tu Box (terminado en `/`, lowercase,
// forward slashes).
const BOX_PREFIX = (path.join(os.homedir(), 'Box') + path.sep)
  .toLowerCase()
  .replace(/\\/g, '/');
// === FIN ===

// === EDITAR: paths canónicos donde Claude puede leer sin bloqueo ===
// Lista las subcarpetas de tu Box donde quieres que Claude opere libremente.
// Cualquier otro path Box requerirá tu confirmación explícita en el chat.
//
// Reglas:
// - Path RELATIVO a tu Box (sin "C:\Users\...\Box\" al inicio).
// - Forward slashes (`/`), incluso en Windows.
// - Termina con `/`.
// - Lowercase (el hook normaliza, da igual cómo se vea en disco).
//
// Ejemplos: descomenta y ajusta a tus carpetas reales.
const CANONICAL_PATHS_RELATIVE_TO_BOX = [
  // 'ipa_col_resources/ipa_col_pd_resources/ipa_col_pd_knowledgebase/',
  // 'general documents/performance review 2025/',
  // 'oficina ipa colombia/06_strategic plan/',
];
// === FIN ===

// Construcción de los prefijos canónicos absolutos (no editar)
const CANONICAL_PREFIXES = CANONICAL_PATHS_RELATIVE_TO_BOX.map(
  (p) => BOX_PREFIX + String(p).toLowerCase().replace(/\\/g, '/')
);

// --- Lectura del payload ---
let payload = '';
try {
  payload = fs.readFileSync(0, 'utf8');
} catch (_) {
  process.exit(0);
}

let data;
try {
  data = JSON.parse(payload);
} catch (_) {
  // Sin payload válido no bloqueamos — el hook nunca debe romper sesiones
  // por errores propios.
  process.exit(0);
}

const toolName = data.tool_name || '';
const input = data.tool_input || {};

// --- Helpers ---
function normalize(p) {
  if (!p) return '';
  let n = String(p).toLowerCase().replace(/\\/g, '/');
  // /c/users/... -> c:/users/... (msys/git bash mount)
  n = n.replace(/^\/([a-z])\//, '$1:/');
  n = n.replace(/^["'`]+|["'`]+$/g, '');
  return n;
}

function touchesBox(normalizedPath) {
  return normalizedPath.includes(BOX_PREFIX);
}

function isCanonical(normalizedPath) {
  return CANONICAL_PREFIXES.some((c) => normalizedPath.startsWith(c));
}

// Construye una regex dinámica para encontrar paths Box dentro de un
// comando Bash. Usa el prefijo Box detectado del usuario.
function boxPathRegexBare() {
  // BOX_PREFIX viene como "c:/users/<user>/box/" — extraemos el segmento
  // después del drive y construimos un patrón flexible.
  const escapedTail = BOX_PREFIX
    .replace(/^[a-z]:\//, '') // quita "c:/"
    .replace(/\/$/, ''); // quita slash final
  // ej: "users/<user>/box"
  const segs = escapedTail.split('/').filter(Boolean);
  if (segs.length === 0) return null;
  const pattern = segs
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('[\\\\/]');
  return new RegExp(
    `((?:[A-Za-z]:|\\/[A-Za-z])[\\\\/]${pattern}(?:[\\\\/][^\\s"'\`<>|;)]*)?)`,
    'gi'
  );
}

function boxPathRegexQuoted() {
  const escapedTail = BOX_PREFIX
    .replace(/^[a-z]:\//, '')
    .replace(/\/$/, '');
  const segs = escapedTail.split('/').filter(Boolean);
  if (segs.length === 0) return null;
  const pattern = segs
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('[\\\\/]');
  return new RegExp(
    `(["'\`])((?:[A-Za-z]:|\\/[A-Za-z])[\\\\/]${pattern}[\\\\/][^"'\`]*)\\1`,
    'gi'
  );
}

function extractBoxPathsFromCommand(cmd) {
  if (!cmd) return [];
  const reQuoted = boxPathRegexQuoted();
  const reBare = boxPathRegexBare();
  if (!reQuoted || !reBare) return [];
  const found = [];
  let cmdResidual = cmd;
  let m;
  while ((m = reQuoted.exec(cmd)) !== null) {
    found.push(m[2]);
  }
  cmdResidual = cmdResidual.replace(/(["'`])[^"'`]*\1/g, ' ');
  while ((m = reBare.exec(cmdResidual)) !== null) {
    found.push(m[1]);
  }
  return found;
}

// --- Construcción de la lista de paths a verificar ---
let pathsToCheck = [];
if (toolName === 'Read') {
  if (input.file_path) pathsToCheck.push(input.file_path);
} else if (toolName === 'Glob') {
  if (input.pattern) pathsToCheck.push(input.pattern);
  if (input.path) pathsToCheck.push(input.path);
} else if (toolName === 'Grep') {
  if (input.path) pathsToCheck.push(input.path);
} else if (toolName === 'Bash') {
  pathsToCheck = extractBoxPathsFromCommand(input.command || '');
} else {
  process.exit(0);
}

if (pathsToCheck.length === 0) {
  process.exit(0);
}

// --- Filtra los que tocan Box ---
const boxPaths = [];
for (const raw of pathsToCheck) {
  const n = normalize(raw);
  if (touchesBox(n)) boxPaths.push({ raw, normalized: n });
}

if (boxPaths.length === 0) {
  process.exit(0);
}

// --- ¿Todos canónicos? ---
const nonCanonical = boxPaths.filter((p) => !isCanonical(p.normalized));
if (nonCanonical.length === 0) {
  // Path Box pero canónico: emitimos `allow` explícito para bypass del
  // flujo normal de permissions y evitar prompts redundantes.
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'allow',
      permissionDecisionReason: 'Path Box canónico (whitelisted en hook PreToolUse).',
    },
  }));
  process.exit(0);
}

// --- Bloquear y pedir a Claude que confirme con el usuario en el chat ---
// Usamos `deny` (no `ask`) porque `permission_mode: acceptEdits` anula los
// prompts interactivos de `ask`. El mensaje instruye al modelo a pedir
// confirmación verbal al usuario antes de reintentar.
const reason =
  'GUARDRAIL DE BOX: bloqueado por hook PreToolUse.\n\n' +
  'Path(s) Box fuera de la whitelist canónica:\n' +
  nonCanonical.map((p) => '  - ' + p.raw).join('\n') +
  '\n\nPaths canónicos (sin bloqueo) configurados:\n' +
  (CANONICAL_PATHS_RELATIVE_TO_BOX.length === 0
    ? '  (ninguno — el manager no ha configurado paths canónicos todavía)\n'
    : CANONICAL_PATHS_RELATIVE_TO_BOX.map((p) => '  - ' + p).join('\n') + '\n') +
  '\nINSTRUCCIÓN AL ASISTENTE: detente, muestra al usuario el path que querías tocar, ' +
  'explica brevemente para qué, y pide confirmación EXPLÍCITA en el chat antes de reintentar. ' +
  'Si el manager indica que el path debe ser canónico permanente, ofrece editar ' +
  '`CANONICAL_PATHS_RELATIVE_TO_BOX` en este hook con el nuevo path.';

process.stdout.write(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: 'PreToolUse',
    permissionDecision: 'deny',
    permissionDecisionReason: reason,
  },
}));
process.exit(0);
