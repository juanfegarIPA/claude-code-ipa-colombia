# Claude Code para IPA Colombia

Guía bifurcada con dos rutas según el tipo de trabajo: una para **Equipos y PMs** que delegan trabajo administrativo (BD, comunicaciones, weekly reviews, procurement, presentaciones) y otra para **Research Analysts** que escriben código (Stata, do-files, MEL, debugging). Las dos rutas comparten un núcleo obligatorio (seguridad de datos, bucles de feedback, prompting).

## Ver el sitio

Publicado en: **<https://juanfegaripa.github.io/claude-code-ipa-colombia/>**

## Origen y autoría

| Ruta | Autor | Contacto |
|---|---|---|
| Manager (módulos, starter packs, plantillas) | **Juan Felipe García** — Country Director, IPA Colombia | [jfgarcia@poverty-action.org](mailto:jfgarcia@poverty-action.org) |
| Analyst (Stata, do-files, ejercicios, ejemplos) | **Diego Quintero Mogollón** — Research Analyst, IPA Colombia | [dquintero@poverty-action.org](mailto:dquintero@poverty-action.org) |
| Núcleo compartido (safety, feedback, prompting, recursos) | Co-autoría | ambos |

La versión MkDocs Material original (autoría de Juan Felipe) sirvió de base para la ruta manager y para el contenido descargable. El sitio actual fusiona esa ruta con la guía técnica para analistas en un único stack Quarto.

## Mirror técnico

Existe una copia funcional en [Quintero-DiegoIPA/ipa-claude-code-intro](https://github.com/Quintero-DiegoIPA/ipa-claude-code-intro) que se mantiene como fallback / espacio de experimentación. La fuente de verdad institucional es este repo.

## Stack técnico

- **Quarto** + GitHub Pages (deploy automático vía `quarto-actions/publish@v2`)
- **Tema "Terminal Noir"** — paleta dark con IPA green (#4ea55b) como acento, tipografía DM Sans + JetBrains Mono
- **Sidebars bifurcados** activados por path: `/analyst/*` muestra el sidebar analyst, `/manager/*` muestra el sidebar manager, `/shared/*` aparece en ambos

## Desarrollo local

Requiere [Quarto](https://quarto.org/docs/get-started/) instalado.

```bash
quarto preview      # servidor de desarrollo con hot reload en localhost:4200
quarto render       # build completo a _site/
```

Para publicar manualmente (sin esperar a GitHub Actions):

```bash
quarto publish gh-pages --no-prompt --no-browser
```

## Estructura

```
claude-code-ipa-colombia/
├── _quarto.yml                # navbar + 2 sidebars + format html
├── styles.css                 # Terminal Noir + extras (cards, buttons, grid)
├── index.qmd                  # Hub bifurcado
├── README.md
│
├── analyst/                   # Ruta A — Research Analysts
│   ├── index.qmd, quickstart.qmd, setup.qmd, concepts.qmd,
│   ├── stata-workflow.qmd, exercises.qmd, examples.qmd
│
├── manager/                   # Ruta B — Equipos y PMs
│   ├── index.qmd, empezar.qmd, instalar.qmd, plantillas.qmd
│   ├── modulos/               # 7 módulos por capacidad
│   └── starters/              # 4 starter packs por rol
│
├── shared/                    # Núcleo compartido obligatorio
│   ├── safety.qmd             # IPA AI Usage Guidelines aplicadas (8 secciones)
│   ├── feedback-loops.qmd     # La práctica más importante
│   ├── prompting.qmd          # 5 patrones para prompts efectivos
│   └── recursos.qmd
│
├── images/                    # Gráficos SpC para examples
├── downloads/                 # 11 plantillas .md descargables (CLAUDE.md, feedback.md,
│                              # comunicaciones.md, kb-consulta.md, presentaciones-ipa.md,
│                              # revision-semanal.md, tareas.md + 4 starter CLAUDE.md)
└── .github/workflows/         # GitHub Actions de deploy a gh-pages
```

## Audiencia

Ambas rutas asumen familiaridad con el trabajo cotidiano en IPA y con las [IPA AI Usage Guidelines](https://ipastorage.box.com/s/mvr67ygvz1y3v8qmgjey67lk7msmyeks). La ruta analyst asume Stata avanzado; la ruta manager no asume programación.

## Contribuir

Issues y PRs bienvenidos. Para feedback rápido sobre contenido: escribe directo a Juan Felipe (manager) o Diego (analyst). Para cambios de infraestructura, abre un issue acá primero.
