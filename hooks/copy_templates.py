"""Registra plantillas-src/*.md como archivos estáticos downloads/*.md.txt.

Razón de la extensión .md.txt: las plantillas necesitan servirse desde el
mismo origen que el sitio para que el atributo HTML `download` funcione en
Chrome. MkDocs procesa archivos .md como páginas, así que renombramos a
.md.txt en el path virtual — son servidos como estáticos.

Al hacer click en el botón, el atributo `download="CLAUDE.md"` del HTML
fuerza al browser a descargar y guardar con el nombre correcto (.md),
aunque en el servidor sean .md.txt.

Usamos on_files + File.generated() en vez de copiar archivos al filesystem,
para no ensuciar docs/ y mantener plantillas-src/ como single source of truth.
"""

import os
from mkdocs.structure.files import File


def on_files(files, config):
    docs_dir = config["docs_dir"]
    repo_root = os.path.dirname(docs_dir)
    src_dir = os.path.join(repo_root, "plantillas-src")

    if not os.path.isdir(src_dir):
        print(f"WARNING: plantillas-src/ not found at {src_dir}")
        return files

    added = 0
    for fname in sorted(os.listdir(src_dir)):
        if not fname.endswith(".md"):
            continue
        src = os.path.join(src_dir, fname)
        f = File.generated(
            config,
            src_uri=f"downloads/{fname}.txt",
            abs_src_path=src,
        )
        files.append(f)
        added += 1

    print(f"copy_templates hook: registered {added} templates under downloads/")
    return files
