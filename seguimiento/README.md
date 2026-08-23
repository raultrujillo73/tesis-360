# Seguimiento operativo

Esta carpeta contiene el estado que cambia durante la ejecución de la tesis. El Plan Maestro conserva la estrategia; estos archivos son la fuente de verdad para el avance cotidiano y para la web.

## Estados de tareas

| Estado | Significado |
|---|---|
| `pendiente` | No iniciada |
| `en_curso` | Trabajo iniciado |
| `bloqueada` | No puede continuar por una dependencia concreta |
| `requiere_revision` | Trabajo producido que necesita revisión |
| `terminada` | Entregable completo y verificable |
| `descartada` | Se decidió no ejecutar |

## Estados de decisiones

`adoptada`, `provisional`, `pendiente` y `descartada`.

No edites contadores en la web: se calculan durante la compilación a partir de estos Markdown.

