# Claude Code — IPA Colombia

Guía práctica y modular para managers de IPA Colombia que empiezan a usar Claude Code con licencia Enterprise.

## Ver el sitio

El sitio está publicado en: https://juanfegaripa.github.io/claude-code-ipa-colombia/

## Desarrollo local

```bash
pip install mkdocs-material
mkdocs serve
```

Abre http://localhost:8000 en tu navegador.

## Despliegue

El sitio se despliega automáticamente en GitHub Pages con cada push a `main` via GitHub Actions.

## Estructura

```
site/
├── mkdocs.yml          # Configuración del sitio
├── docs/
│   ├── index.md        # Inicio (empieza aquí)
│   ├── instalar.md     # Paso a paso de instalación
│   ├── que-puedo-y-que-no.md  # Compliance
│   ├── modulos/        # 7 módulos (herramientas + ejemplos)
│   ├── plantillas.md   # Archivos funcionales descargables
│   └── recursos.md     # Links, soporte, comunidad
└── .github/workflows/
    └── deploy.yml      # Auto-deploy a GitHub Pages
```

## Autor

Juan Felipe García, Country Director, IPA Colombia. Abril 2026.
