"""Registra plantillas-src/*.{md,js} como archivos estáticos downloads/*.

Razón de la extensión sufijada (.md.txt, .js.txt): las plantillas necesitan
servirse desde el mismo origen que el sitio para que el atributo HTML
`download` funcione en Chrome. MkDocs procesa archivos .md como páginas, así
que renombramos a .txt en el path virtual — son servidos como estáticos.

Al hacer click en el botón, el atributo `download="CLAUDE.md"` (o
`download="hook-pre-tool-use.js"`) del HTML fuerza al browser a descargar y
guardar con el nombre correcto, aunque en el servidor sean .txt.

Usamos on_files + File.generated() en vez de copiar archivos al filesystem,
para no ensuciar docs/ y mantener plantillas-src/ como single source of truth.
"""

import os
from mkdocs.structure.files import File

# Extensiones que registramos como descargas. Cada una se sirve con sufijo
# `.txt` en el path virtual para evitar que MkDocs/Chrome las procesen como
# páginas o las bloqueen por mime-type.
DOWNLOADABLE_EXTENSIONS = (".md", ".js")


def on_files(files, config):
    docs_dir = config["docs_dir"]
    repo_root = os.path.dirname(docs_dir)
    src_dir = os.path.join(repo_root, "plantillas-src")

    if not os.path.isdir(src_dir):
        print(f"WARNING: plantillas-src/ not found at {src_dir}")
        return files

    added = 0
    for root, _dirs, fnames in os.walk(src_dir):
        for fname in sorted(fnames):
            if not fname.endswith(DOWNLOADABLE_EXTENSIONS):
                continue
            src = os.path.join(root, fname)
            rel = os.path.relpath(src, src_dir).replace(os.sep, "/")
            f = File.generated(
                config,
                src_uri=f"downloads/{rel}.txt",
                abs_src_path=src,
            )
            files.append(f)
            added += 1

    print(f"copy_templates hook: registered {added} templates under downloads/")
    return files
