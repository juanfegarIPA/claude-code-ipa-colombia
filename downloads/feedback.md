# Feedback acumulado

Registro de correcciones que el manager ha dado a Claude. Claude lee este archivo antes de redactar cualquier output (mensajes, drafts, presentaciones) para evitar repetir errores.

## Cómo se llena

Cada vez que el manager corrige algo y dice "guarda esto como regla", se agrega una entrada con este formato:

```
## YYYY-MM-DD | [tipo] | [contexto]
- [patrón detectado]: [regla operativa concreta]
```

**Ejemplos de tipos**: `email`, `teams`, `presentación`, `reporte`, `tarea`, `otro`.

**Una regla buena**: específica, accionable, sin teoría.
- ✓ "En Teams al equipo, no firmar con mi nombre al final salvo si lo pido explícito."
- ✗ "Ser más conciso." (demasiado vago, no es accionable)

## Reglas activas

(Por ahora vacío. La primera entrada aparece cuando el manager corrige algo y pide que se guarde.)

---

## Reglas graduadas (3+ ocurrencias)

Cuando una regla se repite 3 o más veces, Claude la propone como regla "graduada" y la mueve a esta sección. Estas son reglas universales que aplican siempre.

(Vacío al inicio.)
