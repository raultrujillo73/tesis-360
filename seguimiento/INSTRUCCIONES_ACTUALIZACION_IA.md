---
title: "Protocolo de actualización para agentes de IA"
version: "1.0"
last_updated: "2026-08-23"
---

# Protocolo de actualización para agentes de IA

## Objetivo

Convertir un informe narrativo de avance en cambios trazables y consistentes, sin inventar información ni duplicar fuentes de verdad.

## Secuencia obligatoria

1. Leer `AGENTS.md`, este protocolo y `seguimiento/ESTADO_ACTUAL.md`.
2. Incorporar el informe recibido en `actualizaciones/YYYY/YYYY-MM-DD-descripcion.md` si aún no está guardado. Preservar íntegramente su cuerpo.
3. Identificar afirmaciones comprobables del informe: trabajo realizado, entregables, decisiones, fuentes, bloqueos y próximos pasos.
4. Relacionar cada afirmación con tareas existentes. Si no existe una tarea adecuada, no crearla automáticamente salvo que el informe o el usuario ordene ampliar el plan.
5. Actualizar los Markdown operativos según la tabla de rutas.
6. Crear siempre una entrada de log cuando el informe represente una sesión o avance relevante.
7. Actualizar `seguimiento/ESTADO_ACTUAL.md` al final, una vez conocido el estado resultante.
8. Ejecutar `npm run validate` y `npm run build`.
9. Corregir errores de estructura sin alterar el significado académico.
10. Entregar un resumen de cambios y dudas.

## Tabla de rutas

| Hallazgo del informe | Archivo de destino |
|---|---|
| Cambio de fase, próxima tarea, bloqueo o resumen | `seguimiento/ESTADO_ACTUAL.md` |
| Inicio, avance o cierre de tarea | `seguimiento/fases/Fxx-*.md` |
| Decisión adoptada, provisional, pendiente o descartada | `seguimiento/decisiones/D-xxx-*.md` |
| Sesión o acontecimiento relevante | `seguimiento/log/YYYY-MM-DD-*.md` |
| Nueva fuente o cambio de lectura/análisis | `bibliografia/fuentes/*.md` |
| Cumplimiento de condición de decisión | `seguimiento/hitos/Dxx-*.md` |
| Cambio conceptual de la investigación | Documento Maestro y decisión relacionada |
| Cambio del orden o estrategia global | Plan Maestro y decisión relacionada |

## Criterios de interpretación

- “Revisé”, “empecé” o “avancé” implica normalmente `en_curso`.
- “Terminé” solo implica `terminada` si el informe identifica el entregable o este existe en el repositorio.
- Una recomendación de ChatGPT no es una decisión adoptada por Raúl; registrar como `provisional` o `pendiente`.
- Una tarea bloqueada debe indicar la causa concreta y, cuando se conozca, la acción para desbloquearla.
- Si dos informes se contradicen, conservar ambos, mantener el último estado confirmado y registrar la contradicción en `pending_questions` del estado actual.
- No inferir porcentajes subjetivos. El progreso se calcula por tareas terminadas sobre tareas activas, excluyendo descartadas.

## Informe recibido

Si no tiene frontmatter, añadir solamente:

```yaml
---
tipo: informe-de-avance
fecha: YYYY-MM-DD
origen: ChatGPT
estado_procesamiento: procesado
procesado_el: YYYY-MM-DD
---
```

No reescribir el cuerpo original. La entrada del log debe enlazar su ruta en `source_updates`.

## Lista de cierre

- [ ] El informe original quedó conservado.
- [ ] Cada cambio de estado está respaldado por evidencia.
- [ ] Las tareas terminadas tienen entregable.
- [ ] Las decisiones nuevas tienen motivo e impacto.
- [ ] Las fuentes nuevas tienen, como mínimo, título, tipo y estado.
- [ ] Se añadió o actualizó el log.
- [ ] Estado actual y siguiente tarea son coherentes.
- [ ] No se incorporaron datos sensibles.
- [ ] `npm run validate` termina correctamente.
- [ ] `npm run build` termina correctamente.

