---
title: "Plan Maestro de Trabajo — Tesis 360° / Gestión de Información Visual"
version: "0.1"
last_updated: "2026-09-01"
project_status: "En desarrollo"
current_phase: "Fase 11 — Extraer el nuevo Plan de Tesis"
next_milestone: "D5A — Nuevo Plan de Tesis 360° — Borrador Integral V1"
source_of_truth: true
---

# PLAN MAESTRO DE TRABAJO
## Tesis 360° — Gestión de Información Visual

**Versión:** 0.1  
**Fecha de inicio de este plan:** 22 de agosto de 2026  
**Uso previsto:** seguimiento personal, coordinación con ChatGPT/otros agentes IA, preparación de repositorio GitHub y futura publicación como sitio de seguimiento en Cloudflare Pages.

---

# 0. PROPÓSITO DEL PLAN

Este documento convierte el trabajo de tesis en un **proyecto operativo completo**, desde el estado actual hasta la entrega y sustentación final.

No reemplaza al `DOCUMENTO_MAESTRO_TESIS_360_GESTION_INFORMACION_VISUAL.md`.

| Documento | Pregunta que responde |
|---|---|
| Documento Maestro | ¿Qué estamos investigando, por qué y con qué lógica? |
| Plan Maestro de Trabajo | ¿Qué tenemos que hacer, en qué orden, quién lo hace y cómo sabemos que quedó terminado? |

Este plan debe permitir que, después de varios días o semanas sin trabajar en la tesis, sea posible abrirlo y saber rápidamente:

1. dónde estamos;
2. qué se hizo;
3. qué quedó decidido;
4. qué está pendiente;
5. qué depende de qué;
6. cuál es la siguiente tarea concreta.

---

# 1. PRINCIPIOS DE TRABAJO

## 1.1 La tesis se desarrollará intelectualmente antes de formalizar el Plan

El proceso administrativo de la universidad es:

```text
ASESOR
  ↓
PLAN DE TESIS
  ↓
APROBACIÓN
  ↓
DESARROLLO / PRESENTACIÓN DE TESIS
```

Sin embargo, el proceso intelectual de trabajo será:

```text
ENTENDER LA INVESTIGACIÓN
        ↓
REVISAR LITERATURA
        ↓
DEFINIR PROBLEMA / BRECHA
        ↓
DISEÑAR METODOLOGÍA
        ↓
DISEÑAR EVALUACIÓN
        ↓
TENER UNA TESIS CONCEPTUALMENTE MADURA
        ↓
EXTRAER EL PLAN DE TESIS
        ↓
VALIDAR CON ASESOR
        ↓
PRESENTAR PLAN
        ↓
EJECUTAR FORMALMENTE LA INVESTIGACIÓN
```

Esto permite que el Plan de Tesis sea una **promesa realista de algo que ya sabemos cómo ejecutar**.

## 1.2 Avanzar mucho sin asesor, pero no ejecutar prematuramente lo irreversible

Se puede avanzar ampliamente sin asesor en:

- literatura;
- marco conceptual;
- estado del arte;
- brecha;
- objetivos;
- hipótesis;
- metodología preliminar;
- búsqueda y evaluación de proyectos candidatos;
- prototipo;
- pruebas técnicas;
- instrumentos preliminares;
- matriz de consistencia;
- capítulos preliminares;
- búsqueda de profesionales.

Conviene tener la opinión del asesor **antes de ejecutar como datos oficiales**:

- entrevistas formales;
- encuestas finales;
- evaluación experimental definitiva;
- muestra definitiva;
- análisis final que dependa de un diseño cerrado.

Las conversaciones preliminares pueden servir para aprender y pilotear, pero no deben presentarse automáticamente como evidencia formal de tesis.

## 1.3 Tesis mínima suficiente

Toda tarea debe responder a una necesidad real de investigación.

Antes de agregar un componente:

1. ¿qué objetivo satisface?;
2. ¿qué requisito resuelve?;
3. ¿necesita ser medido?;
4. ¿qué conclusión permitirá?;
5. ¿qué ocurre si se elimina?

No desarrollar funcionalidades o capítulos solo porque “podrían verse bien”.

## 1.4 Separar metodología de implementación

La investigación estudia una **metodología de documentación fotográfica 360°**.

No estudia específicamente Retool, PostgreSQL, Supabase, una marca de cámara ni una plataforma comercial. Estas herramientas pueden materializar la metodología, pero son una **capa adaptable**.

## 1.5 Trazabilidad bibliográfica obligatoria

Para cada afirmación académica importante se buscará:

```text
AFIRMACIÓN
    ↓
FUENTE
    ↓
PÁGINA / SECCIÓN
    ↓
EXTRACTO CORTO DE TRABAJO
    ↓
INTERPRETACIÓN
    ↓
QUÉ PERMITE SOSTENER
    ↓
QUÉ NO PERMITE SOSTENER
```

Los extractos exactos servirán como notas de investigación para localizar el argumento dentro del PDF. La redacción final deberá hacerse en palabras propias y citar correctamente la fuente.

---

# 2. ESTADOS, RESPONSABLES Y PRIORIDADES

## 2.1 Estados

| Código | Estado |
|---|---|
| ⬜ | Pendiente |
| 🟡 | En curso |
| 🟠 | Bloqueada |
| 🔁 | Requiere revisión |
| ✅ | Terminada |
| ❌ | Descartada |

## 2.2 Responsables

| Código | Responsable |
|---|---|
| R | Raúl |
| GPT | ChatGPT |
| R+GPT | Trabajo conjunto |
| AI | Otro agente IA / Codex / Claude |
| A | Asesor |
| P | Profesional participante |
| E | Experto/juez, si finalmente se requiere |

## 2.3 Prioridad

- **P0:** necesaria para poder continuar.
- **P1:** importante.
- **P2:** puede esperar.
- **P3:** opcional / mejora.

---

# 3. ESTADO ACTUAL DEL PROYECTO

**Última actualización:** 2026-09-01

## 3.1 Fase actual

> **Preparación del Nuevo Plan de Tesis 360° — Borrador Integral V1, a partir del cierre de formulación base.**

## 3.2 Ya existe

- ✅ Plan de Tesis aprobado de 2024.
- ✅ Avance amplio de tesis anterior.
- ✅ Metodología preliminar de documentación 360°.
- ✅ Modelo de información preliminar.
- ✅ Implementación histórica con PostgreSQL/Retool.
- ✅ Caso histórico con planos, fotografías y material reutilizable.
- ✅ `ingenieria_inversa_matriz_tesis_360.md`.
- ✅ `ejemplo_plan_tesis_ruta_1_gestion_informacion_visual.md`.
- ✅ `ejemplo_plan_y_tesis_ruta_1_v2.md`.
- 🔁 `DOCUMENTO_MAESTRO_TESIS_360_GESTION_INFORMACION_VISUAL.md` referido históricamente; su archivo no está disponible en este clon y debe localizarse antes del Borrador Integral V1.
- ✅ Decisión de usar **gestión de información visual** como eje.
- ✅ Decisión de retirar Design Thinking del planteamiento nuevo.
- ✅ Decisión de retirar CBA como componente obligatorio.
- ✅ Lista inicial de papers y tesis peruanas recomendadas.

## 3.3 Decisiones abiertas principales

- 🔴 nombre académico definitivo del fenómeno actualmente denominado “gestión de información visual”;
- ✅ brecha de trabajo cerrada provisionalmente y trazable;
- ✅ formulaciones candidatas de problema, objetivos e hipótesis y arquitectura de evaluación;
- 🔴 título definitivo;
- 🔴 título y redacción administrativa definitivos;
- 🔴 detalles de operacionalización, instrumento y análisis final;
- 🔴 proyecto/caso final;
- 🔴 tamaño y perfil de muestra;
- 🔴 evaluación definitiva;
- 🔴 caso histórico, proyecto nuevo o combinación;
- 🔴 alcance final: comercial, educativa, proyecto específico u otra delimitación.

## 3.4 Próxima acción concreta

> **F11-T02 — FASE B: reconstruir el esqueleto institucional del Plan 2024 y mapear la formulación 2026 antes de redactar el Nuevo Plan de Tesis 360° — Borrador Integral V1.**

La formulación vigente se resume en: gestión de información visual → documentación fotográfica de obra → metodología de documentación fotográfica 360° estructurada espacial y temporalmente → historial visual → resolución de consultas concretas de información visual. Las formulaciones de problema, objetivos e hipótesis son candidatas vigentes; no son todavía redacción administrativa definitiva.

---

# 4. ESPACIOS DE TRABAJO RECOMENDADOS EN CHATGPT

No es obligatorio tener exactamente estos chats. La finalidad es evitar mezclar cientos de páginas de análisis de papers con las decisiones generales.

| Chat sugerido | Uso |
|---|---|
| `00 — Tesis 360 — Dirección general` | decisiones, roadmap, coordinación |
| `01 — Tesis 360 — Papers internacionales` | análisis de artículos |
| `02 — Tesis 360 — Tesis peruanas` | UNI, PUCP, UPC, ALICIA |
| `03 — Tesis 360 — Estado del arte y brecha` | síntesis bibliográfica |
| `04 — Tesis 360 — Marco teórico` | conceptos |
| `05 — Tesis 360 — Metodología` | componentes y procedimiento |
| `06 — Tesis 360 — Requisitos profesionales` | entrevistas/consulta |
| `07 — Tesis 360 — Caso de estudio` | proyecto, planos, dataset |
| `08 — Tesis 360 — Evaluación` | tareas, instrumentos, muestra |
| `09 — Tesis 360 — Resultados y estadística` | análisis de datos |
| `10 — Tesis 360 — Redacción` | capítulos |
| `11 — Tesis 360 — Plan de Tesis` | extracción del plan formal |
| `12 — Tesis 360 — Asesor y observaciones` | feedback y control de cambios |

### Regla

Las decisiones importantes tomadas en chats secundarios deben trasladarse al:

1. **Log de trabajo**;
2. **Registro de decisiones**;
3. Documento Maestro, si cambian el entendimiento de la investigación.

---

# 5. SISTEMA DE ARCHIVOS RECOMENDADO

```text
tesis-360/
│
├── README.md
├── DOCUMENTO_MAESTRO.md
├── PLAN_MAESTRO_TRABAJO.md
│
├── status/
│   ├── ESTADO_ACTUAL.md
│   ├── LOG.md
│   └── DECISIONES.md
│
├── bibliografia/
│   ├── README.md
│   ├── matriz_bibliografica.md
│   ├── 01_estado_arte_360/
│   ├── 02_gestion_informacion/
│   ├── 03_informacion_visual/
│   ├── 04_recuperacion_fotografias/
│   ├── 05_espacio_tiempo/
│   ├── 06_reality_capture/
│   ├── 07_evaluacion_usuarios/
│   ├── 08_tesis_peruanas/
│   └── 09_tesis_uni_metodologia/
│
├── fichas/
│   ├── papers/
│   └── tesis/
│
├── investigacion/
│   ├── problema/
│   ├── estado_del_arte/
│   ├── marco_conceptual/
│   ├── metodologia/
│   ├── requisitos/
│   ├── caso/
│   ├── evaluacion/
│   └── resultados/
│
├── instrumentos/
│   ├── exploratorio/
│   ├── validacion/
│   └── evaluacion_final/
│
├── tesis/
│   ├── capitulo_1/
│   ├── capitulo_2/
│   ├── capitulo_3/
│   ├── capitulo_4/
│   ├── capitulo_5/
│   ├── conclusiones/
│   └── anexos/
│
├── plan_tesis/
│
├── asesor/
│   ├── brief/
│   ├── reuniones/
│   └── observaciones/
│
└── sustentacion/
```

> Los PDFs originales pueden mantenerse fuera del repositorio público si existen restricciones de copyright. El repositorio puede almacenar fichas, metadatos y enlaces mientras los archivos privados permanecen en almacenamiento local/privado.

---

# 6. FASE 0 — INFRAESTRUCTURA Y CONTROL

**Objetivo:** dejar preparado el sistema para no perder decisiones, fuentes o avances.

### F0-T01 — Crear repositorio de trabajo
- **Estado:** ⬜
- **Prioridad:** P0
- **Responsable:** R + AI
- **Tareas:** crear repositorio GitHub; estructura base; incorporar Documento Maestro; incorporar este Plan; crear `LOG.md`, `DECISIONES.md` y `ESTADO_ACTUAL.md`.
- **Entregable:** repositorio inicial.
- **Criterio de cierre:** documentos centrales versionados.

### F0-T02 — Crear sitio de seguimiento
- **Estado:** ⬜
- **Prioridad:** P1
- **Responsable:** AI
- **Tareas:** construir interfaz simple; publicar con Cloudflare Pages; mostrar dashboard, roadmap, decisiones, bibliografía y log; utilizar Markdown como fuente de verdad cuando sea práctico.
- **Entregable:** URL del tracker.
- **Criterio de cierre:** estado consultable desde navegador.

### F0-T03 — Configurar reglas de actualización
- **Estado:** ⬜
- **Responsable:** R+GPT
- **Definir:** cuándo actualizar log, decisiones, Documento Maestro y tareas.
- **Criterio de cierre:** reglas documentadas.

---

# 7. FASE 1 — CONSTRUIR LA BIBLIOTECA BIBLIOGRÁFICA

**Objetivo:** reunir las fuentes que sustentarán la investigación.

### F1-T01 — Descargar bibliografía internacional prioritaria
- **Estado:** 🟡
- **Prioridad:** P0
- **Responsable:** R
- **Lista inicial:** Shinde et al. 2023; Brilakis et al. 2005; Brilakis & Soibelman 2006; Wu & Tory/PhotoScope; Eiris et al. 2017; Eiris & Gheisari 2019; Fobiri et al. 2022; Pal & Hsieh 2021; Erazo-Rondinel & Melgar 2024; Taha et al. 2025; Adegoke et al. 2026.
- **Buscar primero en:** fuente oficial, OpenAlex, repositorio institucional, versión OA/preprint legítima.
- **Criterio de cierre:** primera ronda disponible para análisis.

### F1-T02 — Descargar tesis peruanas prioritarias
- **Estado:** 🟡
- **Prioridad:** P0
- **Responsable:** R
- **Fuentes:** UNI, PUCP, UPC, ALICIA/CONCYTEC.
- **Prioridad:** Cruz Calcina; Torres Begazo & Guevara; Vega Hurtado & Vidal; Alfaro Miranda & Ramos; otros cercanos.

### F1-T03 — Descargar tesis UNI como referencia metodológica/formal
- **Estado:** ⬜
- **Prioridad:** P1
- **Responsable:** R
- **Incluir inicialmente:** microsimulación BRT; pavimentos Aeropuerto de Iquitos; planificación de refinería mediante LPS; diseño/construcción virtual para suministro de acero; otras FIC comparables.
- **Objetivo:** estudiar cómo delimitan caso, objetivos, metodología, aplicación y conclusiones.

### F1-T04 — Crear convención de nombres
- **Estado:** ⬜
- **Responsable:** R
- **Ejemplo:** `2023_Shinde_360_AEC_Systematic_Review.pdf`.

### F1-T05 — Crear matriz maestra de bibliografía
- **Estado:** ⬜
- **Responsable:** R+GPT
- **Campos:** ID, referencia, año, tipo, revista/universidad, DOI, OpenAlex, OA/PDF, tema, estado de lectura, ficha, capítulo/uso previsto, prioridad.

---

# 8. FASE 2 — ANALIZAR FUENTES UNA POR UNA

**Objetivo:** pasar de “tener PDFs” a “tener conocimiento trazable”.

### F2-T01 — Crear sesión de papers internacionales
- **Estado:** ⬜
- **Responsable:** R
- **Acción:** crear chat separado en este proyecto y subir allí fuentes por grupos manejables.

### F2-T02 — Analizar cada paper con ficha estándar
- **Estado:** ⬜
- **Responsable:** R+GPT

```text
REFERENCIA
PREGUNTA / PROBLEMA
OBJETIVO
MÉTODO
CASO / MUESTRA
VARIABLES / DIMENSIONES
INDICADORES
INSTRUMENTOS
RESULTADOS
LIMITACIONES
CONTRIBUCIÓN

QUÉ SUSTENTA PARA NUESTRA TESIS
QUÉ NO SUSTENTA

CITAS DE TRABAJO
- página
- extracto corto
- interpretación
- posible uso

UBICACIÓN POSIBLE
- 1.1
- 1.2
- 1.5
- Cap. II
- metodología
- discusión
```

### F2-T03 — Analizar tesis peruanas
- **Estado:** ⬜
- **Responsable:** R+GPT
- **Además:** formato, muestra, instrumentos, validación, relación objetivos-capítulos, función del caso y conclusiones.

### F2-T04 — Analizar tesis UNI de referencia
- **Estado:** ⬜
- **Responsable:** R+GPT
- **Pregunta:** ¿cómo utiliza FIC-UNI un proyecto específico como caso y hasta dónde generaliza?

### F2-T05 — Construir banco de afirmaciones y citas
- **Estado:** ⬜
- **Responsable:** R+GPT

| Afirmación | Fuente | Página | Extracto | Interpretación | Puede sostener | No puede sostener |
|---|---|---:|---|---|---|---|

---

# 9. HITO D1 — DEFINICIÓN CONCEPTUAL

Responder antes de cerrar terminología:

1. ¿“Gestión de información visual” es defendible?
2. ¿Qué términos usa la literatura?
3. ¿Necesitamos definición compuesta propia?
4. ¿Cuáles son sus componentes?
5. ¿Qué queda fuera?

**Entregable:** decisión registrada.

---

# 10. FASE 3 — MARCO CONCEPTUAL Y PROBLEMÁTICA

### F3-T01 — Definir información visual
- **Responsable:** R+GPT
- **Entregable:** ficha conceptual con fuentes.

### F3-T02 — Definir gestión de información
- **Responsable:** R+GPT

### F3-T03 — Construir definición de gestión de información visual
- **Responsable:** R+GPT
- **Regla:** indicar claramente cómo se deriva de literatura.

### F3-T04 — Estudiar recuperación de fotografías
- **Responsable:** R+GPT
- **Fuentes núcleo:** Brilakis, PhotoScope y trabajos recientes.

### F3-T05 — Estudiar contextualización espacial
- **Responsable:** R+GPT

### F3-T06 — Estudiar contextualización temporal
- **Responsable:** R+GPT

### F3-T07 — Estudiar comparabilidad histórica
- **Responsable:** R+GPT

### F3-T08 — Definir papel específico de 360°
- **Responsable:** R+GPT
- **Separar:** capacidades, limitaciones y problemas que 360° no resuelve.

### F3-T09 — Ubicar 360° dentro de Reality Capture
- **Responsable:** R+GPT
- **Alcance:** solo lo necesario.

### F3-T10 — Formular arquitectura académica desde D1 y F4-T06
- **Responsable:** R+GPT
- **Entregable:** situación problemática, problema investigable, pregunta general, objetivo general, objetivos específicos, hipótesis candidata y evidencia necesaria para contrastarla.
- **Límite:** mantener carácter candidato; no cerrar redacción administrativa, variables e indicadores definitivos, diseño, muestra, instrumento, título ni caso definitivo.
- **Estado:** terminado mediante `investigacion/formulacion/CIERRE_FORMULACION_BASE_NUEVO_PLAN_TESIS_360.md`; la formulación resultante es no comparativa y usa “permite”, no “mejora”.

---

# 11. FASE 4 — ESTADO DEL ARTE Y BRECHA

### F4-T01 — Matriz comparativa de investigaciones
- **Responsable:** R+GPT
- **Campos sugeridos:** propuesta, 360°, proyecto real/simulado, estructura espacial, temporal, recuperación, independencia tecnológica, evaluación con profesionales, comparación convencional.

### F4-T02 — Identificar qué ya existe
- **Responsable:** R+GPT

### F4-T03 — Identificar qué no puede presentarse como novedad
- **Responsable:** R+GPT

### F4-T04 — Formular 2–3 brechas candidatas
- **Responsable:** R+GPT

### F4-T05 — Intentar refutar cada brecha
- **Responsable:** R+GPT
- **Regla:** buscar deliberadamente fuentes que contradigan nuestra supuesta novedad.

### F4-T06 — Elegir brecha provisional
- **Responsable:** R+GPT
- **Criterio:** específica, verificable y ejecutable.
- **Estado:** cerrada provisionalmente y trazable el 2026-08-26. Ver `investigacion/estado-del-arte/CIERRE_F4_T06_BRECHA_INVESTIGACION_TESIS_360.md`.
- **Brecha de trabajo:** en el corpus revisado no se identificó una evaluación task-based de la consulta humana de información retrospectiva sobre una obra mediante un historial fotográfico 360° estructurado espacial y temporalmente.
- **Política bibliográfica:** priorizar 2021–2026 para caracterizar el estado actual; conservar y acompañar con literatura reciente a Shih et al. (2001/2006) y Wu & Tory (2009) por ser antecedentes directos seminales.

---

# 12. HITO D2 — BRECHA

No cerrar diseño definitivo hasta poder explicar en menos de un minuto:

> **Qué existe, qué falta y qué investigaremos nosotros.**

**Estado:** cumplido provisionalmente y trazable mediante F4-T06. La siguiente decisión no es la brecha, sino la intensidad de la afirmación central y su traducción a problema, pregunta, objetivos, hipótesis y evidencia.

---

# 13. FASE 5 — DELIMITACIÓN Y CASO DE ESTUDIO

### F5-T01 — No asumir automáticamente “edificación comercial”
- **Responsable:** R+GPT
- **Comparar:** comercial, educativa, multifamiliar o proyecto específico.

### F5-T02 — Revisar cómo tesis UNI delimitan casos
- **Responsable:** R+GPT

### F5-T03 — Crear lista de proyectos candidatos
- **Responsable:** R
- **Meta:** 2–4 alternativas.

### F5-T04 — Evaluar proyecto histórico
- **Responsable:** R+GPT
- **Inventariar:** planos, fechas, fotos, 360°, base de datos, permisos, calidad, continuidad temporal, posibilidad de tareas.

### F5-T05 — Buscar proyecto nuevo accesible
- **Responsable:** R
- **Estado:** existe una posibilidad real de proyecto nuevo de aproximadamente un mes para aplicación prospectiva desde el inicio; será ruta preferible solo si se confirma el acceso. Los datos del proyecto y permisos siguen pendientes.
- **Ejemplos:** tienda, colegio u otra obra con acceso razonable.

### F5-T06 — Matriz simple de selección

| Criterio | Proyecto A | Proyecto B | Proyecto C |
|---|---:|---:|---:|
| Acceso | | | |
| Planos | | | |
| Permiso fotos | | | |
| Varias fechas | | | |
| Seguridad | | | |
| Duración | | | |
| Facilidad logística | | | |
| Potencial de evaluación | | | |
| Compatibilidad con tesis | | | |

No es necesario usar CBA formal.

### F5-T07 — Elegir caso provisional
- **Responsable:** R+GPT
- **Estado:** provisional hasta revisión con asesor.

---

# 14. HITO D3 — ALCANCE Y CASO

Debe quedar definido provisionalmente:

- tipo de proyecto;
- lugar;
- caso;
- por qué es adecuado como escenario;
- hasta dónde se pueden generalizar resultados.

---

# 15. FASE 6 — CONSULTA EXPLORATORIA DE NECESIDADES

> Antes de aprobación formal, puede trabajarse como piloto/informal. Si debe servir como evidencia oficial, confirmar diseño con asesor y repetir formalmente si corresponde.

### F6-T01 — Identificar profesionales candidatos
- **Responsable:** R
- **Meta:** 6–8 nombres para seleccionar aproximadamente 4.
- **Perfiles:** residente, producción, oficina técnica, supervisor, arquitecto, jefe de proyecto.

### F6-T02 — Registrar candidatos

| Persona | Rol | Experiencia | Tipo proyecto | Contactabilidad | Posible función |
|---|---|---|---|---|---|

> Si el repositorio/sitio es público, no publicar datos personales sin necesidad.

### F6-T03 — Diseñar guía semiestructurada
- **Responsable:** R+GPT

### F6-T04 — Validar neutralidad
- **Responsable:** R+GPT
- **Evitar:** “¿le parece útil nuestra metodología?”
- **Preferir:** “¿cómo recupera actualmente fotografías?”, “¿qué necesita saber para interpretar una captura?”.

### F6-T05 — Realizar piloto informal
- **Responsable:** R
- **Objetivo:** probar preguntas, no producir resultados finales.

### F6-T06 — Revisar guía
- **Responsable:** R+GPT

### F6-T07 — Dejar versión formal lista
- **Responsable:** R+GPT

---

# 16. FASE 7 — REVISAR Y REDISEÑAR LA METODOLOGÍA 360°

### F7-T01 — Inventariar componentes 2024
- **Responsable:** R+GPT

### F7-T02 — Aplicar prueba de necesidad

| Componente | Necesidad | Requisito | Mantener | Modificar | Eliminar |
|---|---|---|---|---|---|

### F7-T03 — Confirmar núcleo
- proyecto;
- plano;
- punto;
- recorrido;
- fecha;
- captura;
- nota;
- almacenamiento;
- consulta;
- histórico.

### F7-T04 — Confirmar capa adaptable
- cámara;
- plataforma;
- almacenamiento;
- visor;
- interfaz;
- periodicidad;
- roles;
- conectividad.

### F7-T05 — Rediseñar protocolo mínimo
- **Responsable:** R+GPT
- **Prioridad:** P0 antes del inicio de un eventual proyecto prospectivo.
- **Alcance mínimo:** referencias espaciales, puntos, sesiones, permanencia/cambio, periodicidad o criterios, fecha/hora, nomenclatura, puntos inaccesibles, cambios, carga/vinculación y control de calidad.

### F7-T06 — Rediseñar modelo de información
- **Responsable:** R+GPT
- **Objetivo:** conservar lo útil y eliminar entidades innecesarias.

### F7-T07 — Dibujar flujo completo
- **Responsable:** R+GPT

### F7-T08 — Crear metodología preliminar v1.0
- **Responsable:** R+GPT
- **Entregable:** documento separado reutilizable en Capítulo III.

---

# 17. HITO D4 — METODOLOGÍA

Antes de programar la aplicación, la metodología debe poder explicarse **sin mencionar Retool, PostgreSQL o una marca de cámara**.

---

# 18. FASE 8 — DISEÑAR LA EVALUACIÓN

### F8-T01 — Definir efecto a medir
- **Responsable:** R+GPT
- **Candidatos:** recuperación de evidencia, contexto espacial, contexto temporal y resolución de consultas.

### F8-T02 — Revisar indicadores usados en literatura
- **Responsable:** R+GPT

### F8-T03 — Definir variables/dimensiones provisionales
- **Responsable:** R+GPT

### F8-T04 — Diseñar condición convencional justa
- **Responsable:** R+GPT
- **Regla:** no crear una comparación artificialmente mala.
- **Estado:** descartada para la formulación vigente, que no contempla grupo control, baseline, pretest/postest ni comparación contra carpetas o fotografía convencional.

### F8-T05 — Diseñar condición metodología 360°
- **Responsable:** R+GPT

### F8-T06 — Diseñar tareas de consulta verificables
- espacial;
- temporal;
- estado/evolución.

### F8-T07 — Diseñar métricas objetivas
- tiempo;
- exactitud;
- completitud;
- tasa de tareas.

### F8-T08 — Diseñar valoración subjetiva
- facilidad;
- utilidad;
- aplicabilidad;
- comentarios.

### F8-T09 — Controlar consistencia de aplicación
- instrucciones uniformes;
- evitar pistas ajenas al historial visual;
- registrar incidencias de aplicación.

### F8-T10 — Diseñar ficha de registro
- **Responsable:** R+GPT

### F8-T11 — Diseñar cuestionario complementario
- **Responsable:** R+GPT

### F8-T12 — Plan estadístico preliminar
- **Responsable:** R+GPT
- **Regla:** no elegir prueba estadística antes de conocer diseño y muestra.

---

# 19. FASE 9 — PROTOTIPO / IMPLEMENTACIÓN DE PRUEBA

> Primero se define la evaluación. Después se construye solo la aplicación necesaria.

### F9-T01 — Requisitos funcionales mínimos
- **Responsable:** R+GPT

```text
PROYECTO
  ↓
PLANO
  ↓
PUNTO
  ↓
FECHAS
  ↓
VISOR 360°
```

### F9-T02 — Decidir reutilizar Retool o crear interfaz nueva
- **Responsable:** R+GPT+AI

### F9-T03 — Preparar dataset
- **Responsable:** R
- planos, puntos, capturas, fechas, notas.

### F9-T04 — Crear prototipo funcional
- **Responsable:** AI+R

### F9-T05 — Verificar trazabilidad
- **Responsable:** R+GPT

### F9-T06 — Crear escenario convencional
- **Responsable:** R+GPT
- **Estado:** descartada para la formulación vigente; no se contempla escenario convencional, baseline ni comparación entre condiciones.

### F9-T07 — Prueba técnica interna
- **Responsable:** R

### F9-T08 — Pilotear tareas
- **Responsable:** R+GPT
- **Regla:** no usar piloto como resultado final.

---

# 20. FASE 10 — PREPARAR ACERCAMIENTO AL ASESOR

Idealmente cuando el diseño intelectual esté aproximadamente **70–80 % resuelto**, antes de la recolección definitiva.

### F10-T01 — Identificar posibles asesores
- **Responsable:** R
- registrar especialidad, afinidad, disponibilidad y contacto.

### F10-T02 — Preparar speech de 2 minutos
- **Responsable:** R+GPT
- debe explicar: tesis anterior, problema detectado, nueva premisa, qué ya existe, qué se evaluará, viabilidad y qué se espera del asesor.

### F10-T03 — Brief de 1–2 páginas
- **Responsable:** R+GPT

### F10-T04 — Paquete para asesor
- **Responsable:** R+GPT
- brief, esquema, objetivos, metodología, evaluación, bibliografía principal y estado.

### F10-T05 — Contactar asesores
- **Responsable:** R

### F10-T06 — Registrar reuniones
- **Responsable:** R
- fecha, comentarios, cambios y acuerdos.

### F10-T07 — Clasificar feedback

| Observación | Aceptar | Rechazar | Analizar | Impacto |
|---|---|---|---|---|

---

# 21. HITO D5 — VISTO BUENO PARA FORMALIZAR

Antes de datos oficiales deben estar razonablemente definidos:

- asesor;
- brecha;
- objetivos;
- hipótesis;
- metodología;
- caso;
- evaluación;
- instrumentos preliminares.

---

# 22. FASE 11 — EXTRAER EL NUEVO PLAN DE TESIS

### F11-T01 — Auditar Plan de Tesis aprobado antiguo y obtener formato institucional vigente
- **Responsable:** R
- **Estado:** terminado. La auditoría concluyó GO CON PENDIENTES y confirma que no existe un bloqueante académico para iniciar F11-T02.
- **Evidencia:** `plan_tesis/auditorias/AUDITORIA_PLAN_TESIS_APROBADO_2024_VS_FORMULACION_2026.md`.

### F11-T02 — Mapear investigación al formato
- **Responsable:** R+GPT
- **Prioridad:** P0.
- **Interpretación operativa:** FASE B — Arquitectura del Nuevo Plan de Tesis: reconstruir el esqueleto institucional, mapear la formulación 2026, definir contenido y extensión por sección, distinguir contenido cerrado/provisional y preparar trazabilidad bibliográfica. No redactar todavía el borrador integral.

### F11-T03 — Redactar antecedentes
- **Responsable:** R+GPT

### F11-T04 — Redactar realidad problemática
- **Responsable:** R+GPT

### F11-T05 — Cerrar problema
- **Responsable:** R+GPT+A

### F11-T06 — Cerrar objetivos
- **Responsable:** R+GPT+A

### F11-T07 — Cerrar hipótesis
- **Responsable:** R+GPT+A

### F11-T08 — Redactar metodología de trabajo
- **Responsable:** R+GPT

### F11-T09 — Elaborar cronograma
- **Responsable:** R+GPT

### F11-T10 — Revisar consistencia

```text
PROBLEMA
  ↕
OBJETIVO
  ↕
HIPÓTESIS
  ↕
VARIABLE
  ↕
DIMENSIÓN
  ↕
INDICADOR
  ↕
INSTRUMENTO
```

### F11-T11 — Revisión del asesor
- **Responsable:** A+R

### F11-T12 — Presentar Plan
- **Responsable:** R

### F11-T13 — Levantar observaciones
- **Responsable:** R+GPT

### Entregable próximo

> **Nuevo Plan de Tesis 360° — Borrador Integral V1**

Se elaborará después de F11-T02, usando como fuentes principales el cierre de formulación base, D1, F4-T06, fichas y antecedentes analizados, matrices y demás documentación vigente. El Documento Maestro, si se recupera, será una fuente complementaria; su ausencia no bloquea F11-T02 mientras exista trazabilidad suficiente de afirmación → fuente → página/sección → evidencia. No presupone título, caso, participantes, tareas, instrumento o análisis definitivo.

### F11-T14 — Obtener aprobación
- **Responsable:** R

---

# 23. HITO D6 — PLAN APROBADO

Desde aquí, la recolección formal debe respetar lo comprometido o documentar cambios acordados con el asesor.

---

# 24. FASE 12 — EJECUCIÓN FORMAL DE CONSULTA DE REQUISITOS

Si el Plan definitivo utiliza esta etapa como evidencia:

### F12-T01 — Confirmar muestra
- **Responsable:** R+A

### F12-T02 — Confirmar instrumento
- **Responsable:** R+GPT+A

### F12-T03 — Verificar consentimiento/procedimiento institucional
- **Responsable:** R+A

### F12-T04 — Ejecutar entrevistas/consulta
- **Responsable:** R

### F12-T05 — Transcribir/resumir
- **Responsable:** R+GPT

### F12-T06 — Codificar necesidades
- **Responsable:** R+GPT

### F12-T07 — Convertir a requisitos
- **Responsable:** R+GPT

### F12-T08 — Contrastar con metodología preliminar
- **Responsable:** R+GPT

### F12-T09 — Versión final de metodología
- **Responsable:** R+GPT

---

# 25. FASE 13 — PREPARACIÓN FINAL DEL CASO / DATASET

### F13-T01 — Confirmar proyecto
- **Responsable:** R+A

### F13-T02 — Obtener permisos
- **Responsable:** R

### F13-T03 — Seleccionar planos/zonas
- **Responsable:** R

### F13-T04 — Definir puntos
- **Responsable:** R+GPT

### F13-T05 — Definir fechas/recorridos
- **Responsable:** R

### F13-T06 — Tomar capturas si es proyecto nuevo
- **Responsable:** R

### F13-T07 — Control de calidad
- **Responsable:** R

### F13-T08 — Organizar dataset
- **Responsable:** R+AI

### F13-T09 — Implementar metodología
- **Responsable:** R+AI

### F13-T10 — Preparar dataset convencional equivalente
- **Responsable:** R+GPT
- **Estado:** descartada para la formulación vigente; no se requiere dataset convencional equivalente.

---

# 26. FASE 14 — PARTICIPANTES DE EVALUACIÓN FINAL

### F14-T01 — Lista larga de candidatos
- **Responsable:** R

### F14-T02 — Definir criterios de inclusión
- **Responsable:** R+GPT+A

### F14-T03 — Separar participantes de jueces/validadores
- **Responsable:** R+GPT

### F14-T04 — Invitar participantes
- **Responsable:** R

### F14-T05 — Agendar sesiones
- **Responsable:** R

### F14-T06 — Preparar protocolo uniforme
- **Responsable:** R+GPT

---

# 27. FASE 15 — PILOTO FORMAL DE EVALUACIÓN

### F15-T01 — Ejecutar 1–3 sesiones piloto
- **Responsable:** R

### F15-T02 — Detectar ambigüedades
- **Responsable:** R+GPT

### F15-T03 — Revisar duración
- **Responsable:** R+GPT

### F15-T04 — Revisar dificultad
- **Responsable:** R+GPT

### F15-T05 — Ajustar instrumentos
- **Responsable:** R+GPT+A

### F15-T06 — Congelar protocolo
- **Responsable:** R+A

---

# 28. FASE 16 — EVALUACIÓN FINAL

### F16-T01 — Ejecutar sesiones
- **Responsable:** R

### F16-T02 — Registrar tiempos
- **Responsable:** R

### F16-T03 — Registrar aciertos
- **Responsable:** R

### F16-T04 — Aplicar cuestionarios
- **Responsable:** R

### F16-T05 — Registrar comentarios
- **Responsable:** R

### F16-T06 — Control de calidad de datos
- **Responsable:** R+GPT

### F16-T07 — Cerrar base de datos
- **Responsable:** R

---

# 29. FASE 17 — ANÁLISIS DE RESULTADOS

### F17-T01 — Limpiar datos
- **Responsable:** R+GPT

### F17-T02 — Estadística descriptiva
- **Responsable:** R+GPT

### F17-T03 — Verificar supuestos
- **Responsable:** R+GPT

### F17-T04 — Análisis inferencial si corresponde
- **Responsable:** R+GPT
- **Regla:** no usar estadística compleja por apariencia.

### F17-T05 — Analizar preguntas abiertas
- **Responsable:** R+GPT

### F17-T06 — Crear tablas
- **Responsable:** R+GPT

### F17-T07 — Crear gráficos
- **Responsable:** R+GPT

### F17-T08 — Mapear resultado a indicador
- **Responsable:** R+GPT

### F17-T09 — Mapear indicador a objetivo
- **Responsable:** R+GPT

---

# 30. HITO D7 — QUÉ PODEMOS CONCLUIR

Crear tabla:

| Resultado | Permite afirmar | No permite afirmar |
|---|---|---|

No redactar conclusiones que excedan evidencia.

---

# 31. FASE 18 — REDACCIÓN DE TESIS

La redacción puede comenzar antes; aquí se consolida.

### F18-T01 — Capítulo I
- **Responsable:** R+GPT
- respetar estructura UNI rígida.

### F18-T02 — Capítulo II
- **Responsable:** R+GPT
- solo conceptos necesarios.

### F18-T03 — Capítulo III
- **Responsable:** R+GPT
- metodología final.

### F18-T04 — Capítulo IV
- **Responsable:** R+GPT
- caso + procedimiento.

### F18-T05 — Capítulo V
- **Responsable:** R+GPT
- resultados + discusión.

### F18-T06 — Conclusiones
- **Responsable:** R+GPT

### F18-T07 — Recomendaciones
- **Responsable:** R+GPT

### F18-T08 — Anexos
- **Responsable:** R

### F18-T09 — Referencias
- **Responsable:** R+GPT

---

# 32. FASE 19 — CONTROL DE CALIDAD ACADÉMICO

### F19-T01 — Matriz objetivo-capítulo-conclusión
- **Responsable:** R+GPT

### F19-T02 — Auditoría de citas
- **Responsable:** R+GPT

### F19-T03 — Verificar citas contra PDFs
- **Responsable:** R

### F19-T04 — Revisar referencias fantasma
- **Responsable:** R+GPT

### F19-T05 — Revisar bibliografía
- **Responsable:** R+GPT

### F19-T06 — Revisar figuras/tablas
- **Responsable:** R

### F19-T07 — Consistencia terminológica
- **Responsable:** R+GPT

### F19-T08 — Limitaciones
- **Responsable:** R+GPT

### F19-T09 — Formato UNI
- **Responsable:** R

### F19-T10 — Originalidad y atribución
- **Responsable:** R
- verificar que paráfrasis y citas estén correctamente atribuidas.

---

# 33. FASE 20 — ITERACIÓN CON ASESOR

### F20-T01 — Enviar versión
- **Responsable:** R

### F20-T02 — Registrar observaciones
- **Responsable:** R

### F20-T03 — Convertir observaciones en tareas
- **Responsable:** R+GPT

### F20-T04 — Resolver observaciones
- **Responsable:** R+GPT

### F20-T05 — Registrar cambios importantes
- **Responsable:** R

### F20-T06 — Obtener conformidad
- **Responsable:** A

---

# 34. FASE 21 — ENTREGA Y SUSTENTACIÓN

### F21-T01 — Preparar versión final
- **Responsable:** R

### F21-T02 — Verificar requisitos administrativos
- **Responsable:** R

### F21-T03 — Presentar tesis
- **Responsable:** R

### F21-T04 — Preparar presentación
- **Responsable:** R+GPT

### F21-T05 — Preparar narrativa de sustentación
- problema, brecha, método, resultados, contribución y limitaciones.

### F21-T06 — Banco de preguntas
- **Responsable:** R+GPT

### F21-T07 — Simular sustentación
- **Responsable:** R+GPT

### F21-T08 — Preparar respuestas a objeciones metodológicas
- **Responsable:** R+GPT

### F21-T09 — Sustentación
- **Responsable:** R

### F21-T10 — Levantar observaciones finales
- **Responsable:** R+GPT

### F21-T11 — Depositar versión final
- **Responsable:** R

---

# 35. ROADMAP RESUMIDO

```text
F0  Infraestructura y seguimiento
 ↓
F1  Descargar bibliografía
 ↓
F2  Analizar fuentes
 ↓
D1  Definir concepto
 ↓
F3  Construir marco conceptual
 ↓
F4  Estado del arte + brecha
 ↓
D2  Confirmar brecha
 ↓
F5  Alcance + casos candidatos
 ↓
D3  Caso provisional
 ↓
F6  Preparar consulta exploratoria
 ↓
F7  Revisar metodología
 ↓
D4  Metodología preliminar estable
 ↓
F8  Diseñar evaluación
 ↓
F9  Construir prototipo/dataset piloto
 ↓
F10 Buscar asesor
 ↓
D5  Validar diseño
 ↓
F11 Extraer y presentar Plan de Tesis
 ↓
D6  Plan aprobado
 ↓
F12 Requisitos formales
 ↓
F13 Caso/dataset final
 ↓
F14 Participantes
 ↓
F15 Piloto
 ↓
F16 Evaluación final
 ↓
F17 Resultados
 ↓
D7  Límites de conclusión
 ↓
F18 Redacción final
 ↓
F19 Calidad académica
 ↓
F20 Revisión asesor
 ↓
F21 Entrega + sustentación
```

---

# 36. REGISTRO DE DECISIONES

Este bloque puede mantenerse aquí o separarse a `status/DECISIONES.md`.

| ID | Fecha | Decisión | Estado | Motivo | Impacto |
|---|---|---|---|---|---|
| D-001 | 2026-08 | Gestión de información visual como eje | Adoptada | encaja mejor con mecanismo real | cambia problema/variable |
| D-002 | 2026-08 | Retirar Design Thinking | Adoptada | complejidad innecesaria | requisitos mediante literatura + consulta |
| D-003 | 2026-08 | Retirar CBA obligatorio | Adoptada | criterios simples bastan | simplifica metodología |
| D-004 | 2026-08 | Plataforma agnóstica | Adoptada | separar método de tecnología | Retool/PostgreSQL = referencia |
| D-005 | 2026-08 | Avanzar tesis antes de Plan | Adoptada | Plan más coherente | investigación conceptual previa |
| D-006 | 2026-08 | No ejecutar evaluación final antes de validar diseño | Adoptada | evitar rehacer datos | incorporar asesor antes de fase formal |

---

# 37. LOG DE TRABAJO

## Cómo usarlo

Crear una entrada cuando ocurra cualquiera de estos eventos:

- sesión importante;
- decisión;
- nueva fuente clave;
- cambio de alcance;
- reunión con profesor;
- experimento/piloto;
- archivo relevante creado;
- bloqueo.

No hace falta registrar conversaciones triviales.

## Plantilla

```markdown
## YYYY-MM-DD — Título corto

### Qué se trabajó
- ...

### Hallazgos
- ...

### Decisiones
- ...

### Archivos creados/modificados
- ...

### Fuentes añadidas
- ...

### Pendientes
- ...

### Próximo paso recomendado
- ...

### Por qué importa
- ...
```

---

# 38. LOG INICIAL DEL PROYECTO ACTUAL

## 2026-08-22 — Inicio del sistema maestro de seguimiento

### Qué se trabajó

- Se revisó el Documento Maestro.
- Se confirmó el deseo de avanzar la investigación antes de formalizar el nuevo Plan.
- Se decidió trabajar con una lógica de tesis “desde el final hacia el Plan”.
- Se definió que la literatura debe descargarse y analizarse sistemáticamente.
- Se decidió guardar para cada fuente citas de trabajo, páginas, interpretación y alcance.
- Se planteó analizar por separado papers internacionales, tesis peruanas y tesis UNI de referencia metodológica.
- Se confirmó la necesidad de buscar tempranamente proyectos candidatos y profesionales candidatos.
- Se decidió que la implementación tecnológica será mínima y posterior al diseño de evaluación.
- Se confirmó que el asesor debe incorporarse antes de ejecutar la recolección formal definitiva, aunque la arquitectura intelectual puede avanzarse ampliamente antes.

### Decisiones

- Mantener “gestión de información visual” como eje de trabajo mientras se afina la terminología.
- Buscar caso de estudio de manera flexible: comercial, colegio u otro proyecto accesible.
- No asumir que el caso debe justificar universalmente una categoría de edificación.
- Separar profesionales para consulta de requisitos de participantes de evaluación final.
- Mantener un log cronológico y un registro de decisiones.

### Archivos centrales

- `DOCUMENTO_MAESTRO_TESIS_360_GESTION_INFORMACION_VISUAL.md`
- `PLAN_MAESTRO_TRABAJO_TESIS_360.md`

### Próximo paso

1. crear repositorio;
2. publicar tracker;
3. descargar bibliografía prioritaria;
4. crear matriz bibliográfica;
5. iniciar análisis de Shinde et al. y referencias núcleo.

### Por qué importa

Este punto marca el cambio desde una fase de replanteamiento a una fase de **ejecución sistemática de la investigación**.

---

# 39. DASHBOARD — FORMATO PARA LA FUTURA WEB

## Estado actual

**Fase:** F11 — Extraer el nuevo Plan de Tesis
**Progreso general:** calculado a partir de tareas
**Bloqueadores:** ninguno  
**Próximo hito:** D5A — Nuevo Plan de Tesis 360° — Borrador Integral V1
**Próxima tarea:** F11-T02 — FASE B — Arquitectura del Nuevo Plan de Tesis

## Indicadores sugeridos

- tareas terminadas / totales;
- fase actual;
- próximo hito;
- fuentes descargadas;
- fuentes analizadas;
- decisiones abiertas;
- proyectos candidatos;
- profesionales candidatos;
- capítulos con borrador;
- fecha del último log.

---

# 40. INSTRUCCIONES PARA CODEX / AGENTE QUE CONSTRUYA EL TRACKER

## Objetivo

Construir un repositorio GitHub y una interfaz simple desplegable en Cloudflare Pages para seguir el estado de la tesis.

## Principios

1. Los Markdown deben seguir siendo legibles sin la web.
2. Markdown debe ser la fuente de verdad cuando sea práctico.
3. No modificar decisiones académicas al construir la interfaz.
4. Priorizar claridad, no complejidad.
5. Debe ser sencillo actualizar tareas desde Git.
6. El log debe ordenarse cronológicamente.
7. Las decisiones deben distinguir `adoptada`, `provisional`, `pendiente` y `descartada`.
8. Bibliografía debe mostrar fuente, tipo, descarga, lectura, ficha, DOI, OA/OpenAlex y uso previsto.
9. No exponer públicamente PDFs con copyright.
10. Si el sitio es público, no publicar nombres/contactos de participantes ni documentos internos sensibles.

## Vistas mínimas

### Dashboard
- fase;
- siguiente tarea;
- últimos avances;
- bloqueadores;
- decisiones abiertas.

### Roadmap
- fases;
- tareas;
- dependencias;
- estado;
- prioridad;
- responsable.

### Bibliografía
- matriz;
- lectura;
- fichas;
- enlaces.

### Decisions
- registro de decisiones.

### Log
- historial.

### Caso
- candidatos y estado, sin información sensible pública.

### Personas
- opcional y preferentemente privada/no publicada.

## No sobreingeniería

Primera versión:

> **Markdown + frontend estático + GitHub + Cloudflare Pages.**

No añadir base de datos, autenticación o backend salvo necesidad posterior clara.

---

# 41. REGLAS PARA NO PERDER EL CONTROL

1. Nunca dar una tarea por terminada sin entregable.
2. Toda decisión importante debe quedar escrita.
3. Toda fuente leída debe producir una ficha.
4. Toda afirmación relevante debe poder volver a una fuente.
5. Todo cambio conceptual importante debe actualizar Documento Maestro.
6. Las conversaciones con IA no son el repositorio oficial del conocimiento.
7. El repositorio es la fuente de continuidad.
8. Los pilotos no son resultados finales.
9. No recolectar formalmente datos antes de cerrar diseño.
10. No ampliar alcance sin registrar qué objetivo lo exige.
11. No construir software que la evaluación no necesite.
12. No elegir estadística antes de conocer diseño y muestra.
13. No usar “experto” sin criterios.
14. No presentar como novedad algo ya existente.
15. No concluir más de lo medido.

---

# 42. DEFINICIÓN DE “TERMINADO”

La tesis se considera terminada cuando:

- [ ] problema y brecha están sustentados;
- [ ] objetivos están respondidos;
- [ ] metodología está documentada;
- [ ] evaluación fue ejecutada correctamente;
- [ ] datos son trazables;
- [ ] resultados responden indicadores;
- [ ] discusión usa literatura;
- [ ] conclusiones no exceden evidencia;
- [ ] citas fueron verificadas;
- [ ] asesor dio conformidad;
- [ ] formato institucional está correcto;
- [ ] anexos están completos;
- [ ] tesis fue presentada;
- [ ] sustentación fue realizada;
- [ ] observaciones finales fueron levantadas;
- [ ] versión definitiva fue depositada.

---

# 43. SIGUIENTE SESIÓN RECOMENDADA

## Objetivo

**Auditar al 100 % el Plan de Tesis aprobado antiguo antes de elaborar el Nuevo Plan de Tesis 360° — Borrador Integral V1.**

### Paso 1 — Raúl
Localizar y reunir la versión íntegra del Plan de Tesis aprobado antiguo.

### Paso 2 — Raúl
Preparar la matriz de auditoría del Plan aprobado:

> estructura institucional reutilizable → contenido vigente → contenido a reformular → contenido a eliminar

### Paso 3 — Raúl
Leer el Plan aprobado al 100 % y registrar la auditoría, sin redactar aún el Borrador Integral V1.

### Paso 4 — Raúl + GPT
Usar la auditoría, el cierre de formulación base, D1, F4-T06 y los antecedentes ya analizados para preparar posteriormente el Borrador Integral V1.

---

# CIERRE

El objetivo de este sistema no es burocratizar la tesis. Es evitar dos riesgos:

1. **perder contexto después de varios días o meses**;
2. **hacer trabajo que no contribuye directamente a la investigación**.

La regla general será:

```text
LEER
 ↓
ENTENDER
 ↓
REGISTRAR
 ↓
DECIDIR
 ↓
DISEÑAR
 ↓
PROBAR
 ↓
MEDIR
 ↓
CONCLUIR
```

El Plan de Tesis formal aparecerá cuando esta cadena esté suficientemente madura para convertirse en una promesa académica realista.

---

**Fin — Plan Maestro de Trabajo v0.1**
