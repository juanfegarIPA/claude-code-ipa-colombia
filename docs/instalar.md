# Instalar Claude Code

Tiempo estimado: 10-15 minutos.

---

## Paso 1: Verifica tu licencia Enterprise

1. Ve a [claude.ai](https://claude.ai) e inicia sesión con tu correo de IPA (@poverty-action.org)
2. Si ves el logo de IPA o la indicación "Enterprise", estás cubierto
3. Si no, contacta a support@poverty-action.org para solicitar tu seat

---

## Paso 2: Elige cómo usar Claude Code

Claude Code se puede usar de tres formas. Todas funcionan con tu licencia Enterprise:

| Forma | Qué es | Para quién |
|-------|--------|------------|
| **Aplicación de escritorio** | App para Windows/Mac. Interfaz visual, sin terminal. | Recomendado para empezar |
| **Terminal (CLI)** | Línea de comandos. Máxima flexibilidad y poder. | Usuarios avanzados |
| **Web (claude.ai/code)** | Desde el navegador, sin instalar nada. | Para probar rápido |

!!! tip "¿Cuál usar?"
    La **aplicación de escritorio** es la forma más sencilla de empezar. Tiene la misma capacidad que la terminal pero con una interfaz más amigable. El CD de IPA Colombia usa la terminal porque permite automatizar flujos más complejos, pero no es necesario para aprovechar Claude Code.

### Opción A: Aplicación de escritorio (recomendada)

1. Descárgala desde [claude.ai/download](https://claude.ai/download) (disponible para Windows y Mac)
2. Instálala con las opciones por defecto
3. Ábrela e inicia sesión con tu correo @poverty-action.org
4. Salta al **Paso 3**

### Opción B: Terminal (CLI)

Requiere **Node.js**. Descárgalo desde [nodejs.org](https://nodejs.org/) (versión LTS) e instálalo con las opciones por defecto.

Luego abre una terminal:

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

### Opción C: Web

Ve a [claude.ai/code](https://claude.ai/code) e inicia sesión con tu correo de IPA. No necesitas instalar nada.

---

## Paso 3: Crea tu workspace

Tu workspace es una carpeta en tu computador donde Claude Code guardará contexto y archivos. Puedes crearla donde quieras. Ejemplo:

=== "Desktop app"
    Al abrir la app, te pedirá elegir una carpeta. Crea una carpeta `Claude` en tus Documentos y selecciónala.

=== "Terminal"
    ```bash
    mkdir -p ~/Documents/Claude
    cd ~/Documents/Claude
    ```

---

## Paso 4: Crea tu CLAUDE.md

El archivo `CLAUDE.md` es lo que le da contexto a Claude sobre quién eres. Crea un archivo con ese nombre en tu carpeta de workspace.

Puedes usar la plantilla [CLAUDE.md starter](plantillas.md) como punto de partida. Lo mínimo es:

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

## Paso 5: Tu primera conversación

=== "Desktop app"
    Abre la app y asegúrate de que tu workspace esté seleccionado. Claude leerá tu CLAUDE.md automáticamente.

=== "Terminal"
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
| No encuentro la app de escritorio | Descárgala desde [claude.ai/download](https://claude.ai/download) |
| `npm: command not found` (solo terminal) | Node.js no se instaló correctamente. Reinicia la terminal e intenta de nuevo. |
| `claude: command not found` (solo terminal) | Ejecuta `npm install -g @anthropic-ai/claude-code` de nuevo. |
| Error de autenticación | Verifica que estás usando tu correo @poverty-action.org. |

Para problemas técnicos, la documentación oficial está en [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code).

---

**Siguiente paso:** [Qué puedo y qué no puedo hacer](que-puedo-y-que-no.md)
