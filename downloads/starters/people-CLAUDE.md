# Mi people layer

Esta carpeta es la memoria de las personas con las que trabajas: a quién le escribes, por qué importa cada uno, cuándo fue el último contacto, qué se acordó. La idea no es un CRM corporativo: es una libreta operativa que vive contigo y crece con tu uso.

## Para qué sirve

Cuando llevas dos meses sin hablar con alguien y de repente necesitas escribirle, lo normal es perder 20 minutos buscando contexto en correos viejos y notas sueltas. Con este setup:
- Cada persona relevante tiene un archivo con lo esencial.
- Claude puede leer todo y prepararte un brief de un minuto antes de cualquier reunión o mensaje.
- La memoria no se pierde cuando cambia tu equipo o tu rol.

## Estructura

```
people/
├── CLAUDE.md           # Este archivo
├── internal/           # Personas dentro de IPA (colegas, jefes, otros equipos)
│   └── [slug-persona].md
├── external/           # Personas fuera de IPA (donantes, partners, gobierno, PIs)
│   └── [slug-persona].md
└── groups/             # Grupos de personas que recurrentemente se mueven juntas
    └── [slug-grupo].md
```

`slug-persona` = nombre en kebab-case sin tildes (ej: `claudia-casarotto`, `andres-parrado`).

## Formato de archivo de persona

Cada archivo empieza con frontmatter YAML (estructurado, fácil de leer para Claude) y sigue con texto libre.

```markdown
---
name: [Nombre completo]
entity_type: person
scope: internal | external
role: [cargo + organización]
aliases: [apodo1, apodo2]
priority: vip | regular | ocasional
relationship_status: active | dormant | closed
languages: [es, en]
default_channel: email | teams | wa
projects: [proyecto-1, proyecto-2]
last_contact: YYYY-MM-DD
last_contact_type: email | reunion | llamada | teams
follow_up_needed: true | false
---

# [Nombre]

## Quick Read
- **Quién es**: [una línea concreta: rol + dónde].
- **Por qué importa**: [una línea: qué representa para mi trabajo].
- **Objetivo de la relación**: [a qué quiero llegar con esta persona].
- **Cómo escribirle**: [tono, idioma, qué funciona, qué no].
- **Qué evitar**: [temas, fraseos, contextos que no funcionan].

## Historial reciente
- YYYY-MM-DD: [evento o interacción + qué se acordó].
- YYYY-MM-DD: [evento o interacción].

## Notas libres
[Espacio para contexto que no encaja arriba: backstory, rumores útiles, asuntos sensibles que recordar.]
```

## Cómo se usa

Claude puede:
- **Prepararte un brief** antes de una reunión o un mensaje:
  > "Voy a escribirle a Claudia. Pásame su archivo y los últimos correos."
- **Encontrar quién** sabe de algo:
  > "¿Quién en mi people layer está conectado con campañas presidenciales?"
- **Mantener la memoria al día**: después de una reunión, le dices a Claude "tomé estas notas con X persona, actualiza el archivo" y Claude agrega al historial.

## Reglas

1. **Confidencialidad**: este es un archivo de uso personal y operativo. No incluir información sensible que no estarías cómodo de tener escrita (notas disciplinarias, especulación dañina, datos de salud). Si algo es sensible, déjalo verbal.
2. **Una persona = un archivo**. No fragmentar por proyecto.
3. **Actualizar después de cada interacción importante**, mientras tienes el contexto fresco. Si lo dejas para "después" no pasa.
4. **Limpia los stale**: si llevas más de 6 meses sin contacto y no esperas retomarlo pronto, marca `relationship_status: dormant` para que no inflame las búsquedas.
5. **Datos de participantes de investigación NUNCA** acá. Esto es para tu red profesional, no para datos de campo.

## Cuándo NO usar este setup

- Si tu rol no involucra una red de relaciones que cambian (ej: rol técnico interno con equipo fijo): probablemente es overkill.
- Si tu organización ya tiene un CRM oficial (Salesforce, HubSpot) y la información debe vivir ahí: usa este setup solo para tu capa personal de notas, no como reemplazo del oficial.
