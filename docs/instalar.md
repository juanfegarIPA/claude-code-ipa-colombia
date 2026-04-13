# Instalar Claude Code

Tiempo estimado: 10-15 minutos.

---

## Paso 1: Verifica tu licencia Enterprise

1. Ve a [claude.ai](https://claude.ai) e inicia sesión con tu correo de IPA (@poverty-action.org)
2. Si ves el logo de IPA o la indicación "Enterprise", estás cubierto
3. Si no, contacta a support@poverty-action.org para solicitar tu seat

---

## Paso 2: Instala Node.js

Claude Code necesita Node.js para funcionar. Descárgalo desde [nodejs.org](https://nodejs.org/) y elige la versión **LTS** (Long Term Support).

Instálalo con las opciones por defecto.

---

## Paso 3: Instala Claude Code

Abre una terminal:

=== "Windows"
    Busca **Terminal** o **PowerShell** en el menú de inicio

=== "Mac"
    Abre la app **Terminal**

Ejecuta:

```bash
npm install -g @anthropic-ai/claude-code
```

Verifica que se instaló:

```bash
claude --version
```

---

## Paso 4: Crea tu workspace

```bash
mkdir -p ~/Documents/Claude
cd ~/Documents/Claude
```

---

## Paso 5: Crea tu CLAUDE.md

El archivo `CLAUDE.md` es lo que le da contexto a Claude sobre quién eres. Crea un archivo con ese nombre en tu carpeta de workspace.

Puedes usar la plantilla [claude-md-starter.md](plantillas.md) como punto de partida. Lo mínimo es:

```markdown
# Mi Workspace — Claude Code

## Quién soy
- Nombre: [Tu nombre]
- Rol: [Tu cargo], IPA Colombia
- Zona horaria: America/Bogota

## Mi trabajo principal
- [Responsabilidad 1]
- [Responsabilidad 2]
- [Responsabilidad 3]

## Reglas
- No incluir datos de participantes de investigación
- No incluir evaluaciones de desempeño sin aprobación MIST
```

---

## Paso 6: Tu primera conversación

```bash
cd ~/Documents/Claude
claude
```

La primera vez te pedirá autenticarte con tu cuenta de IPA.

Prueba algo concreto:

!!! example "Ejemplos de prompts para empezar"
    - "Tengo una reunión mañana con [aliado]. Ayúdame a preparar 5 talking points sobre [tema]."
    - "Necesito escribir un email a [persona] agradeciendo su participación en [evento]."
    - "Lee este documento y hazme un resumen ejecutivo de una página."

---

## Problemas comunes

| Problema | Solución |
|----------|----------|
| `npm: command not found` | Node.js no se instaló correctamente. Reinicia la terminal e intenta de nuevo. |
| `claude: command not found` | Ejecuta `npm install -g @anthropic-ai/claude-code` de nuevo. |
| Error de autenticación | Verifica que estás usando tu correo @poverty-action.org. |

Para problemas técnicos, la documentación oficial está en [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code).

---

**Siguiente paso:** [Qué puedo y qué no puedo hacer](que-puedo-y-que-no.md)
