---

tipo: auditoria-plan-tesis
title: "Auditoría del Plan de Tesis aprobado 2024 vs. formulación 2026"
version: "1.0"
fecha: 2026-09-01
estado: cerrada
tarea: F11-T01
resultado: GO CON PENDIENTES
proximo_paso: F11-T02
hito_objetivo: D5A
---

# AUDITORÍA DEL PLAN DE TESIS APROBADO 2024 VS. FORMULACIÓN 2026

## Fase A — Auditoría académica, metodológica, estructural y editorial

## 0. Propósito del documento

Este documento consolida de forma canónica la auditoría realizada al Plan de Tesis aprobado por la Facultad de Ingeniería Civil de la Universidad Nacional de Ingeniería en 2024, confrontándolo con el estado académico vigente de la reformulación de la investigación al 31 de agosto de 2026 y con el estado operativo del proyecto al 1 de septiembre de 2026.

Su función es responder la siguiente pregunta:

> **¿Con lo que tenemos actualmente ya podemos construir responsablemente un nuevo Plan de Tesis, utilizando el Plan aprobado de 2024 como referencia institucional pero reemplazando su arquitectura académica antigua por la formulación actual?**

El resultado de la auditoría es:

> **GO CON PENDIENTES**

Existe suficiente definición académica y metodológica para avanzar hacia la arquitectura del nuevo Plan de Tesis.

Esto implica que:

* **F11-T01 — Auditar Plan de Tesis aprobado antiguo** puede considerarse académicamente cumplida;
* existe base suficiente para pasar a **F11-T02 / FASE B — Arquitectura del Nuevo Plan**;
* todavía **NO corresponde redactar el Nuevo Plan de Tesis 360° — Borrador Integral V1**;
* el siguiente trabajo consiste en definir la arquitectura exacta del nuevo Plan antes de iniciar su redacción integral.

Este documento no modifica la formulación académica vigente ni introduce decisiones nuevas.

---

# 1. Fuentes y jerarquía documental aplicada

La auditoría se realizó con la siguiente jerarquía documental.

## 1.1 Estado académico vigente

**Archivo:**

`CIERRE_FORMULACION_BASE_NUEVO_PLAN_TESIS_360.md`

**Estado documental:**

```yaml
tipo: cierre-formulacion-base
fecha: 2026-08-31
estado: vigente
proposito: base-academica-para-nuevo-plan-de-tesis
```

Este documento constituye la fuente principal para determinar:

* objeto actual de investigación;
* arquitectura conceptual;
* brecha de investigación;
* problema general candidato;
* objetivo general candidato;
* objetivos específicos candidatos;
* hipótesis general candidata;
* variable principal de estudio;
* indicadores;
* lógica de evaluación;
* alcance;
* terminología vigente;
* decisiones metodológicas adoptadas;
* decisiones pendientes.

Cuando existe contradicción académica con el Plan aprobado de 2024, prevalece este cierre.

---

## 1.2 Estado operativo vigente

**Archivo:**

`PLAN_MAESTRO_TRABAJO_TESIS_360 (2).md`

La copia utilizada durante la auditoría presentaba la siguiente cabecera:

```yaml
version: "0.1"
last_updated: "2026-09-01"
project_status: "En desarrollo"
current_phase: "Fase 11 — Extraer el nuevo Plan de Tesis"
next_milestone: "D5A — Nuevo Plan de Tesis 360° — Borrador Integral V1"
source_of_truth: true
```

Por tanto, pese a conservar `version: "0.1"`, correspondía al estado operativo actualizado del proyecto.

### Nota histórica de trazabilidad

Durante la auditoría se detectaron residuos operativos en la copia del Plan Maestro utilizada, entre ellos:

* referencias a F1 / D1 como estado actual;
* biblioteca bibliográfica como siguiente paso;
* actividades heredadas del diseño comparativo;
* referencias a escenario convencional;
* referencias a dataset convencional equivalente;
* otras tareas asociadas a una etapa metodológica anterior.

Estos residuos fueron corregidos posteriormente mediante la sincronización operativa:

> **commit `af92955` — `docs: synchronize plan and non-comparative tasks`**

Por tanto, **no constituyen pendientes vigentes** y no modifican ninguna conclusión académica de esta auditoría.

---

## 1.3 Referencia institucional, estructural e histórica

**Archivo:**

`Plan de Tesis Trujillo Lucano ultima version aprobado por la comisión(1).docx`

Este documento corresponde al Plan de Tesis aprobado por la comisión de la FIC-UNI en 2024.

Se utiliza principalmente como referencia de:

* estructura institucional;
* orden;
* extensión;
* nivel de detalle;
* forma de presentar antecedentes;
* realidad problemática;
* problema;
* objetivos;
* hipótesis;
* marco teórico;
* metodología de trabajo;
* cronograma;
* referencias;
* firmas;
* estilo editorial.

No se utiliza como autoridad metodológica absoluta porque la investigación actual ha cambiado sustancialmente.

---

# A1. VERIFICACIÓN DOCUMENTAL

## A1.1 Revisión completa del Plan aprobado de 2024

El Plan aprobado posee **10 páginas físicas**:

* una portada no numerada;
* nueve páginas interiores numeradas del 1 al 9.

El documento fue revisado integralmente, incluyendo:

* portada;
* datos generales;
* antecedentes referenciales;
* realidad problemática;
* problema general;
* objetivos;
* hipótesis;
* marco teórico;
* índice tentativo;
* metodología de trabajo;
* cronograma;
* referencias;
* firmas;
* elementos de edición y presentación.

---

## A1.2 Contenido página por página

| Página física | Numeración interna | Contenido principal                                                                                                                                                                                   |
| ------------- | -----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1             |                  — | Portada UNI–FIC; escudo institucional; “PLAN DE TESIS”; título; finalidad para obtención del título profesional; tesista; asesor; Lima–Perú; 2024.                                                    |
| 2             |                  1 | Datos del Plan: tema, tesista, código, asesor y Departamento Académico de Construcción. Inicio de **ANTECEDENTES REFERENCIALES** con TIC, información visual, fotografía 360° y Eiris & Gheisari.     |
| 3             |                  2 | Continuación de antecedentes internacionales: Eiris et al. y Kim et al.; antecedentes nacionales: Cruz y comienzo de Díaz & Valencia.                                                                 |
| 4             |                  3 | Final de Díaz & Valencia. Inicio del **PLANTEAMIENTO DE LA REALIDAD PROBLEMÁTICA**: dependencia de información, comunicación, interacción entre interesados, multiproyectos y gestión de información. |
| 5             |                  4 | Final de realidad problemática; problema general; objetivo general; tres objetivos específicos; hipótesis; inicio del **MARCO TEÓRICO**.                                                              |
| 6             |                  5 | Marco teórico: TIC, cámaras y fotografías de 360°, transformación digital y flujo de información.                                                                                                     |
| 7             |                  6 | Marco teórico: trabajo remoto y supervisión remota. Inicio del **ÍNDICE** tentativo.                                                                                                                  |
| 8             |                  7 | Final del índice; **METODOLOGÍA DE TRABAJO**: revisión bibliográfica, planificación de la metodología, evaluación en proyecto real y análisis de resultados.                                          |
| 9             |                  8 | **CRONOGRAMA DE TRABAJO** de seis meses. Inicio de **REFERENCIAS BIBLIOGRÁFICAS**.                                                                                                                    |
| 10            |                  9 | Final de referencias bibliográficas. Firmas del tesista y asesor.                                                                                                                                     |

---

## A1.3 Elementos editoriales comprobados

El Plan aprobado presenta una identidad editorial institucional clara:

* portada independiente;
* identificación de la Universidad Nacional de Ingeniería;
* identificación de la Facultad de Ingeniería Civil;
* escudo institucional;
* título destacado en mayúsculas;
* ficha de datos generales;
* cabecera institucional en páginas interiores;
* numeración posterior a la portada;
* títulos de sección en mayúsculas;
* desarrollo narrativo compacto;
* cronograma tabular;
* referencias bibliográficas;
* firmas de tesista y asesor como cierre.

El documento constituye, por tanto, una referencia institucional y editorial útil para construir el nuevo Plan.

---

## A1.4 Artefactos de edición observados

El archivo conserva evidencia de revisión editorial en Word, incluida la marca:

> `Comment by Marck Regalado: Modificado`

Estos elementos deben interpretarse como rastros del proceso de revisión del documento y no como requisitos del formato institucional.

---

## A1.5 Estado documental del cierre de formulación

El cierre vigente establece como arquitectura central:

```text
necesidades de información visual
        ↓
metodología de documentación fotográfica 360°
estructurada espacial y temporalmente
        ↓
historial visual de la obra
        ↓
consulta por profesionales
        ↓
respuesta verificable
        ↓
evaluación funcional
+
percepción complementaria
```

Esta arquitectura reemplaza la lógica académica del Plan aprobado de 2024:

```text
documentación fotográfica 360°
        ↓
comunicación / flujo de información
        ↓
mejora de la comunicación
        ↓
encuestas antes y después
```

---

## A1.6 Contradicciones documentales relevantes

| Situación                                                                                                       | Diagnóstico                                                         |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Plan 2024 centrado en mejora de comunicación vs. formulación 2026 centrada en resolución funcional de consultas | Evolución académica deliberada. Prevalece la formulación 2026.      |
| Diseño pretest/postest del Plan 2024 vs. diseño no comparativo actual                                           | Arquitectura antigua descartada.                                    |
| Edificios comerciales en Lima vs. caso actual todavía abierto                                                   | Delimitación antigua no debe conservarse automáticamente.           |
| Gestión de información visual como marco amplio vs. resolución de consultas como variable principal             | No existe contradicción: cumplen funciones conceptuales diferentes. |
| Documento Maestro referido históricamente pero no disponible                                                    | No impide esta auditoría ni, por sí solo, el paso a FASE B.         |

---

# A2. RECONSTRUCCIÓN DEL PLAN APROBADO DE 2024

## A2.1 Arquitectura general

| Orden | Sección                                   |               Extensión aproximada | Función                                      |
| ----: | ----------------------------------------- | ---------------------------------: | -------------------------------------------- |
|     1 | Portada                                   |                           1 página | Identificación institucional y académica     |
|     2 | Datos del Plan                            |                        ~1/3 página | Tema, tesista, código, asesor y departamento |
|     3 | Antecedentes referenciales                |                         ~2 páginas | Contextualización y estudios previos         |
|     4 | Planteamiento de la realidad problemática |                          ~1 página | Construcción narrativa del problema          |
|     5 | Problema general                          |                          ~2 líneas | Pregunta central                             |
|     6 | Objetivos                                 |                        ~1/2 página | Un objetivo general y tres específicos       |
|     7 | Hipótesis                                 |                        ~2–3 líneas | Hipótesis general                            |
|     8 | Marco teórico                             |                        ~2¼ páginas | Conceptos principales                        |
|     9 | Índice tentativo                          |                        ~1/2 página | Macroestructura prevista para la tesis       |
|    10 | Metodología de trabajo                    |                        ~3/4 página | Procedimiento general previsto               |
|    11 | Cronograma                                |                        <1/2 página | Seis meses y siete actividades               |
|    12 | Referencias bibliográficas                |                        ~1½ páginas | Fuentes utilizadas                           |
|    13 | Firmas                                    | Parte inferior de la última página | Tesista y asesor                             |

---

## A2.2 Nivel de detalle institucional observado

El Plan aprobado no contenía dentro de sus aproximadamente diez páginas:

* matriz de consistencia desarrollada;
* tabla formal de variables;
* dimensiones e indicadores explícitos;
* población detallada;
* muestra definitiva;
* tamaño muestral;
* prueba estadística definida;
* instrumentos completos;
* preguntas definitivas;
* protocolo exhaustivo de campo;
* arquitectura tecnológica completa;
* descripción detallada del caso;
* resultados preliminares.

La sección **METODOLOGÍA DE TRABAJO** describía principalmente las etapas previstas de la investigación.

Esto demuestra que, al menos en el Plan aprobado de 2024, la función del documento era presentar una **promesa académica y metodológica suficientemente clara**, no anticipar el contenido completo de la futura tesis.

---

## A2.3 Estilo académico

El estilo puede caracterizarse como:

> **institucionalmente formal y académicamente sintético**

Los antecedentes son narrativos.

La problemática se desarrolla en pocos párrafos.

Problema, objetivos e hipótesis son directos.

El marco teórico contiene definiciones breves.

La metodología se presenta como secuencia de actividades.

El cronograma es simple.

Esta referencia favorece una estrategia para el nuevo Plan basada en:

> **mayor rigor conceptual que en 2024, sin transformar el Plan en la tesis completa.**

---

## A2.4 Aspectos del Plan aprobado que no deben imitarse

La aprobación del documento no implica que todos sus componentes sean editorialmente perfectos.

Durante la revisión se detectaron, entre otros:

* error tipográfico en “Objetivos Rspecíficos”;
* citas dentro del marco teórico cuya referencia completa no aparece en la lista bibliográfica final;
* inconsistencias menores de estilo bibliográfico;
* fuerte dependencia conceptual de términos amplios como TIC, transformación digital y comunicación.

Por tanto:

> **el Plan aprobado debe utilizarse como referencia institucional y estructural, no como estándar metodológico absoluto ni como plantilla literal de contenido.**

---

# A3. AUDITORÍA SECCIÓN POR SECCIÓN

Se utilizaron las siguientes categorías:

* 🟢 **REUTILIZABLE** — puede conservarse conceptualmente con ajustes menores;
* 🟡 **REFORMULAR** — la función continúa siendo útil, pero requiere cambios sustanciales;
* 🔴 **RETIRAR** — pertenece a la arquitectura anterior o ya no cumple una función suficiente;
* 🔵 **INCORPORAR** — contenido necesario en 2026 que no estaba adecuadamente desarrollado en 2024.

---

## A3.1 Matriz de auditoría

| Elemento del Plan 2024                                            | Estado                           | Justificación                                                                                | Efecto sobre el nuevo Plan                                         |
| ----------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Estructura visual de portada UNI/FIC                              | 🟢 REUTILIZABLE                  | Ya cumplió una función institucional aceptada                                                | Utilizar como referencia editorial                                 |
| Ficha TEMA / TESISTA / CÓDIGO / ASESOR / DEPARTAMENTO             | 🟢 REUTILIZABLE                  | Función administrativa estable                                                               | Mantener estructura                                                |
| Título de 2024                                                    | 🔴 RETIRAR                       | Contiene “mejorar la comunicación”, “edificios comerciales” y “Lima”                         | Reemplazar cuando se cierre el título nuevo                        |
| Sección “Antecedentes referenciales”                              | 🟢 REUTILIZABLE                  | Su función institucional continúa vigente                                                    | Mantener sección con contenido actualizado                         |
| Introducción general sobre fotografías 360°                       | 🟡 REFORMULAR                    | La tecnología continúa siendo central, pero el argumento antiguo depende de TIC/comunicación | Reorientar hacia documentación visual, contexto e historial        |
| Antecedentes de Eiris y literatura 360°                           | 🟡 REFORMULAR                    | Parte de la literatura continúa siendo útil                                                  | Integrar junto al corpus actual más cercano                        |
| Kim et al. 2013                                                   | 🟡 / 🔴                          | Su función original estaba ligada a comunicación móvil                                       | Mantener solo si cumple una función concreta en la nueva narrativa |
| Cruz 2017                                                         | 🟡 REFORMULAR                    | Continúa siendo antecedente nacional potencialmente útil                                     | No utilizar como justificación de Design Thinking                  |
| Díaz & Valencia 2018                                              | 🔴 RETIRAR DEL NÚCLEO            | Gestión de restricciones mediante Trello se aleja del fenómeno actual                        | Prescindible en el espacio limitado del nuevo Plan                 |
| Realidad problemática basada en deficiencia de comunicación       | 🔴 RETIRAR                       | Ya no corresponde al fenómeno principal                                                      | Reconstruir completamente                                          |
| Dependencia general de la construcción respecto de la información | 🟡 REFORMULAR                    | Puede servir de contexto                                                                     | No convertirla en el problema investigado                          |
| Necesidades de información visual                                 | 🔵 INCORPORAR                    | Punto de partida de la formulación vigente                                                   | Debe formar parte de la problemática                               |
| Organización/contextualización/consulta de documentación visual   | 🔵 INCORPORAR                    | Conecta el objeto con la función evaluada                                                    | Debe integrarse en problemática y marco                            |
| Problema general basado en “mejorar la comunicación”              | 🔴 RETIRAR                       | Incompatible con la formulación no comparativa                                               | Sustituir por la formulación candidata vigente                     |
| Estructura de un objetivo general + tres específicos              | 🟢 REUTILIZABLE                  | Coincide con la arquitectura vigente                                                         | Mantener                                                           |
| OE antiguo sobre estructura de datos y flujos                     | 🟡 REFORMULAR                    | Parte de esa función continúa dentro del diseño metodológico                                 | Integrar conceptualmente en OE2                                    |
| OE antiguo sobre implementación piloto                            | 🟡 REFORMULAR                    | La aplicación real continúa siendo necesaria                                                 | Integrar en OE3                                                    |
| OE antiguo sobre impacto en comunicación antes/después            | 🔴 RETIRAR                       | Pertenece al diseño anterior                                                                 | Sustituir por evaluación funcional                                 |
| Hipótesis “mejora la comunicación”                                | 🔴 RETIRAR                       | Implica otro fenómeno y otra estructura de evidencia                                         | Sustituir por hipótesis vigente                                    |
| Cámaras y fotografías 360°                                        | 🟡 REFORMULAR                    | Tema necesario, pero necesita actualización conceptual                                       | Mantener en marco actual                                           |
| TIC genéricas                                                     | 🔴 RETIRAR DEL NÚCLEO            | No explican directamente el fenómeno investigado                                             | Como máximo contexto secundario                                    |
| Transformación digital                                            | 🔴 RETIRAR                       | No cumple función académica necesaria                                                        | Eliminar                                                           |
| Flujo de información                                              | 🔴 RETIRAR COMO EJE              | Ya no es resultado principal                                                                 | Solo mencionar si resulta contextual                               |
| Trabajo remoto                                                    | 🔴 RETIRAR                       | Corresponde a la problemática anterior                                                       | Eliminar                                                           |
| Supervisión remota                                                | 🔴 RETIRAR COMO BLOQUE           | No constituye la función principal de la metodología                                         | Mantener solo si una fuente específica lo requiere                 |
| Información visual en proyectos de construcción                   | 🔵 INCORPORAR                    | Marco amplio vigente                                                                         | Integrar en marco conceptual                                       |
| Documentación fotográfica de obra                                 | 🔵 INCORPORAR                    | Objeto actual                                                                                | Integrar explícitamente                                            |
| Contextualización espacial                                        | 🔵 INCORPORAR                    | Componente central de la metodología                                                         | Integrar                                                           |
| Contextualización temporal                                        | 🔵 INCORPORAR                    | Componente central                                                                           | Integrar                                                           |
| Organización e historial visual                                   | 🔵 INCORPORAR                    | Producto aplicado actual                                                                     | Integrar                                                           |
| Consulta y recuperación de información visual                     | 🔵 INCORPORAR                    | Función evaluada                                                                             | Integrar como núcleo                                               |
| Evaluación de la consulta                                         | 🔵 INCORPORAR                    | Sustenta tareas y métricas                                                                   | Integrar                                                           |
| Macroíndice de cinco capítulos                                    | 🟢 REUTILIZABLE                  | Sigue siendo compatible con propuesta, aplicación y evaluación                               | Revisar nombres y subestructura                                    |
| Metodología de trabajo presentada por etapas                      | 🟢 REUTILIZABLE                  | Nivel de formalización adecuado para un Plan                                                 | Reescribir según arquitectura actual                               |
| Encuestas pre/post                                                | 🔴 RETIRAR                       | Diseño abandonado                                                                            | Sustituir por tareas verificables + percepción posterior           |
| Aplicación en proyecto real                                       | 🟢 REUTILIZABLE                  | Continúa siendo necesaria                                                                    | Preferentemente prospectiva si el caso nuevo se confirma           |
| Cronograma tabular                                                | 🟢 REUTILIZABLE                  | Claro y suficiente                                                                           | Actualizar actividades y duración                                  |
| Bibliografía del Plan 2024                                        | 🟡 REFORMULAR FUERTEMENTE        | Parte del corpus ya no responde al problema actual                                           | Construir bibliografía desde fuentes actuales + seminales          |
| Firmas                                                            | 🟢 REUTILIZABLE ESTRUCTURALMENTE | Componente institucional                                                                     | Mantener según formato vigente                                     |

---

# A4. MAPA DE EVOLUCIÓN 2024 → 2026

| Elemento                           | Plan aprobado 2024                                                           | Formulación vigente 2026                                                                               | Evolución                 |
| ---------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| Tema amplio                        | Digitalización/TIC + fotografía 360° + comunicación                          | Gestión de información visual mediante documentación fotográfica 360°                                  | SE REDEFINE               |
| Problema práctico                  | Deficiencia de comunicación / flujo de información                           | Resolución de necesidades concretas de información visual                                              | SE REDEFINE               |
| Fenómeno central                   | Comunicación                                                                 | Resolución de consultas de información visual                                                          | SE REDEFINE               |
| Objeto                             | Registro visual / capturas 360°                                              | Documentación fotográfica de obra                                                                      | SE PRECISA                |
| Propuesta                          | Metodología de documentación fotográfica basada en 360°                      | Metodología de documentación fotográfica 360° estructurada espacial y temporalmente                    | SE MANTIENE Y PRECISA     |
| Papel de 360°                      | Capturar entornos para comunicación/remotización                             | Modalidad de documentación visual dentro de un historial organizado                                    | SE REDEFINE               |
| Producto                           | Registro visual                                                              | Historial visual de la obra                                                                            | SE INCORPORA FORMALMENTE  |
| Contexto espacial                  | Implícito                                                                    | Componente explícito                                                                                   | SE INCORPORA              |
| Contexto temporal                  | Implícito                                                                    | Componente explícito                                                                                   | SE INCORPORA              |
| Pregunta general                   | Mejora de comunicación                                                       | Capacidad para resolver consultas concretas                                                            | SE REDEFINE               |
| Objetivo general                   | Proponer metodología para mejorar flujo                                      | Desarrollar metodología, aplicarla y evaluar resolución de consultas                                   | SE REDEFINE               |
| OE1                                | Desarrollo de estructura de datos/flujos                                     | Identificar y caracterizar necesidades                                                                 | SE REDEFINE               |
| OE2                                | Implementación piloto                                                        | Diseño de la metodología                                                                               | SE REDEFINE               |
| OE3                                | Medir impacto antes/después                                                  | Aplicación + evaluación funcional + percepción                                                         | SE REDEFINE               |
| Hipótesis                          | Mejora la comunicación                                                       | Permite resolver consultas concretas                                                                   | SE REDEFINE               |
| Variable principal                 | Comunicación / impacto en comunicación                                       | Resolución de consultas de información visual                                                          | SE REDEFINE               |
| Indicador principal                | No formalizado con claridad                                                  | Tasa de resolución correcta                                                                            | SE INCORPORA              |
| Tiempo                             | No central                                                                   | Medida secundaria                                                                                      | SE INCORPORA              |
| Percepción                         | Evidencia principal                                                          | Evidencia complementaria                                                                               | SE REDEFINE               |
| Evaluación                         | Encuestas antes/después                                                      | Tareas con respuestas verificables                                                                     | SE REDEFINE               |
| Comparador                         | Pre/post implícito                                                           | No existe condición comparativa                                                                        | SE ELIMINA                |
| Participantes                      | Interesados del proyecto                                                     | Profesionales vinculados a proyectos de construcción                                                   | SE REDEFINE               |
| Caso                               | Edificios comerciales en Lima                                                | Caso de construcción aún por definir                                                                   | SE REDEFINE               |
| Delimitación tipológica/geográfica | Comercial / Lima                                                             | Pendiente de cierre                                                                                    | SE ABRE                   |
| Marco conceptual                   | TIC, 360°, transformación digital, flujo, trabajo remoto, supervisión remota | Información visual, documentación fotográfica, 360°, espacio, tiempo, historial, consulta y evaluación | SE REDEFINE               |
| Metodología                        | Revisión → planificación → implementación → pre/post                         | Necesidades → diseño → aplicación → historial → tareas → evaluación                                    | SE REDEFINE               |
| Design Thinking                    | Asociado a antecedentes/desarrollo previo                                    | Fuera del núcleo                                                                                       | SE ELIMINA                |
| CBA                                | No central en el Plan aprobado                                               | Expresamente descartado como componente obligatorio                                                    | SE MANTIENE FUERA         |
| Bibliografía                       | Predominio de fuentes anteriores a 2021 sobre TIC/comunicación               | Literatura reciente + antecedentes seminales directos                                                  | SE REDEFINE               |
| Nivel de afirmación                | “Mejora”                                                                     | “Permite”                                                                                              | SE REDUCE DELIBERADAMENTE |
| Evidencia necesaria                | Percepción antes/después                                                     | Exactitud funcional + tiempo + percepción complementaria                                               | SE REDEFINE               |

---

# A5. CONTROL DE CONSISTENCIA DE LA FORMULACIÓN ACTUAL

## A5.1 Cadena sometida a revisión

```text
PROBLEMA
↕
OBJETIVO GENERAL
↕
OBJETIVOS ESPECÍFICOS
↕
HIPÓTESIS
↕
PROPUESTA / INTERVENCIÓN
↕
PRODUCTO
↕
VARIABLE DE ESTUDIO
↕
INDICADOR
↕
INSTRUMENTO / TAREA
↕
EVIDENCIA
↕
CONCLUSIÓN POSIBLE
```

---

## A5.2 Formulaciones vigentes auditadas

### Problema general candidato

> **¿En qué medida el historial visual generado mediante una metodología de documentación fotográfica 360° estructurada espacial y temporalmente permite a profesionales vinculados a proyectos de construcción resolver consultas concretas de información visual de construcción?**

### Objetivo general candidato

> **Desarrollar una metodología de documentación fotográfica 360° estructurada espacial y temporalmente y evaluar, mediante su aplicación en un caso de construcción, la resolución de consultas concretas de información visual de construcción a partir del historial visual generado por parte de profesionales vinculados a proyectos de construcción.**

### OE1

> **Identificar y caracterizar necesidades de consulta de información visual de construcción que puedan ser atendidas mediante documentación fotográfica de obra.**

### OE2

> **Diseñar una metodología de documentación fotográfica 360° que establezca procedimientos y elementos para la captura, contextualización espacial y temporal, organización y consulta del historial visual de una obra.**

### OE3

> **Aplicar la metodología propuesta en un caso de construcción y evaluar la resolución de consultas concretas de información visual mediante tareas realizadas por profesionales sobre el historial fotográfico 360° generado, complementando los resultados con su valoración de la facilidad de consulta, organización, utilidad y aplicabilidad.**

### Hipótesis general candidata

> **El historial visual generado mediante la aplicación de una metodología de documentación fotográfica 360° estructurada espacial y temporalmente permite a profesionales vinculados a proyectos de construcción resolver consultas concretas de información visual de construcción.**

---

## A5.3 Hallazgos

| Hallazgo                                                                                                 | Clasificación         | Diagnóstico                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------ |
| Problema, hipótesis y variable convergen en la resolución de consultas                                   | CONCEPTUAL            | Coherencia adecuada                                                                                          |
| El OG incluye desarrollo de metodología además del fenómeno evaluado                                     | CONCEPTUAL            | Correcto para una tesis aplicada                                                                             |
| Problema e hipótesis recaen directamente sobre el historial, mientras la propuesta es la metodología     | CONCEPTUAL            | No constituye una inconsistencia fatal; debe mantenerse clara la cadena metodología → historial → evaluación |
| OE1 → OE2 → OE3 presentan secuencia lógica                                                               | METODOLÓGICO          | Correcto                                                                                                     |
| El OG es sintácticamente largo                                                                           | EDITORIAL             | Puede redactarse mejor posteriormente; no constituye falla metodológica                                      |
| La expresión “historial visual generado por parte de profesionales” puede producir ambigüedad sintáctica | EDITORIAL             | Requiere revisión futura sin alterar arquitectura                                                            |
| Se utilizan “historial visual” e “historial fotográfico 360°”                                            | EDITORIAL             | Requiere normalización terminológica futura                                                                  |
| Variable principal y tasa de resolución correcta están directamente alineadas                            | OPERACIONAL           | Correcto                                                                                                     |
| Correcto/incorrecto puede requerir criterios adicionales en tareas con respuestas complejas              | OPERACIONAL           | Debe resolverse al diseñar criterios de corrección                                                           |
| Tiempo no se denomina automáticamente “eficiencia”                                                       | CONCEPTUAL            | Decisión prudente                                                                                            |
| Percepción permanece separada del desempeño funcional                                                    | CONCEPTUAL            | Correcto                                                                                                     |
| Familias espacial/temporal/estado no necesitan convertirse automáticamente en dimensiones formales       | METODOLÓGICO          | Defendible                                                                                                   |
| Denominación “aplicada + descriptivo-evaluativa”                                                         | PENDIENTE DE RESPALDO | Puede requerir respaldo metodológico específico al redactar                                                  |
| Participantes todavía no delimitados exactamente                                                         | PENDIENTE DE DECISIÓN | No bloquea el Borrador V1                                                                                    |
| Caso final todavía abierto                                                                               | PENDIENTE DE DECISIÓN | No invalida la arquitectura                                                                                  |
| Seleccionar tareas únicamente después de observar el dataset puede generar oportunismo                   | OPERACIONAL           | Riesgo real que debe controlarse                                                                             |
| No existe porcentaje arbitrario de éxito                                                                 | METODOLÓGICO          | Correcto; se requiere criterio de interpretación, no umbral inventado                                        |

---

## A5.4 Diagnóstico de consistencia

La cadena principal es coherente:

```text
necesidad de consulta
        ↓
metodología
        ↓
historial
        ↓
uso por profesionales
        ↓
respuesta observable
        ↓
comparación con respuesta de referencia
        ↓
tasa de resolución
        ↓
evidencia para contrastar la hipótesis
```

No se identificó una ruptura conceptual que obligue a rediseñar la investigación antes del nuevo Plan.

---

# A6. AUDITORÍA DE LA HIPÓTESIS “PERMITE”

## A6.1 Pregunta central

Se evaluó si la siguiente hipótesis puede contrastarse realmente con el diseño previsto:

> **El historial visual generado mediante la aplicación de una metodología de documentación fotográfica 360° estructurada espacial y temporalmente permite a profesionales vinculados a proyectos de construcción resolver consultas concretas de información visual de construcción.**

---

## A6.2 Contrastabilidad

La hipótesis es **contrastable**, siempre que “permite” sea interpretado operacionalmente como:

> capacidad funcional observada cuando un profesional utiliza el historial visual para responder una consulta concreta cuya respuesta de referencia fue definida previamente.

La unidad elemental de evidencia será:

```text
participante
+
tarea
+
historial visual
        ↓
respuesta proporcionada
        ↓
comparación con respuesta de referencia
        ↓
correcta / incorrecta
```

---

## A6.3 Evidencia que podría respaldar la hipótesis

La evidencia funcional deberá considerar:

* tasa de resolución correcta;
* resultados por tarea;
* resultados por familia de consulta;
* patrones entre participantes;
* tiempo de resolución como medida secundaria;
* percepción profesional como evidencia complementaria.

No es necesario establecer previamente que un porcentaje como 70 %, 80 % o 90 % represente automáticamente éxito.

---

## A6.4 Respaldo parcial

La hipótesis podría considerarse parcialmente respaldada si aparecen patrones como:

* consultas espaciales resueltas adecuadamente, pero temporales no;
* determinadas tareas resueltas y otras con errores recurrentes;
* comportamiento desigual entre participantes;
* evidencia visual existente pero difícil de localizar;
* desempeño funcional adecuado acompañado de problemas importantes de facilidad o aplicabilidad.

En esos casos resulta más apropiado interpretar:

> **los resultados respaldan parcialmente la hipótesis**

que convertir el análisis en una decisión artificialmente binaria.

---

## A6.5 Resultados que impedirían respaldarla

Entre otros:

* respuestas incorrectas o no resueltas de forma recurrente;
* fallas sistemáticas en familias relevantes;
* incapacidad de localizar o interpretar la evidencia;
* tareas cuya respuesta dependa de información ajena al historial;
* tareas que puedan responderse únicamente leyendo metadatos cuando se esperaba evidencia visual;
* ground truth ambiguo;
* criterios de corrección definidos después de observar las respuestas.

---

## A6.6 Riesgo de tautología

Existe un riesgo metodológico si la lógica termina siendo:

```text
seleccionar solamente información que el historial contiene
        ↓
formular preguntas especialmente fáciles de responder
        ↓
concluir que el historial permite responderlas
```

Esto produciría una evaluación débil.

Sin embargo, la existencia de la información dentro del historial y la capacidad de un profesional para recuperarla e interpretarla son fenómenos diferentes.

Debe distinguirse:

### Nivel 1 — Existencia de evidencia

El investigador determina previamente que existe evidencia visual suficiente para que una tarea sea válida.

### Nivel 2 — Resolución humana

El participante debe:

* localizar;
* recuperar;
* interpretar;
* utilizar;

la evidencia necesaria y generar una respuesta correcta.

La existencia de evidencia no garantiza automáticamente su recuperación ni su interpretación.

---

## A6.7 Mecanismos para reducir el riesgo

Antes de ejecutar la evaluación deben quedar definidos:

1. familias o arquetipos de consulta;
2. criterios para seleccionar tareas;
3. requisitos mínimos de las tareas;
4. evidencia visual necesaria;
5. respuesta de referencia;
6. criterios de corrección;
7. variantes aceptables;
8. protocolo uniforme de administración.

La respuesta de referencia debe existir **antes de observar las respuestas de los participantes**.

### ANÁLISIS / RECOMENDACIÓN

Para fortalecer la independencia entre dataset y evaluación, conviene además que los **arquetipos de tarea y reglas de selección** existan antes de formular las preguntas concretas a partir del historial final.

Esto no implica diseñar ahora las preguntas definitivas.

---

## A6.8 ¿Se requiere un criterio adicional?

Sí, pero no necesariamente un porcentaje.

Se requiere un **criterio de interpretación de resultados** que considere conjuntamente:

* tasa global de resolución;
* comportamiento por tarea;
* comportamiento por familia;
* consistencia entre participantes;
* errores;
* tiempo;
* percepción complementaria.

Un fallo sistemático en una familia relevante deberá reflejarse en la interpretación final y evitar una conclusión global excesiva.

---

## A6.9 Veredicto

> **La hipótesis basada en “permite” es contrastable y compatible con el diseño no comparativo previsto.**

No existe necesidad metodológica de sustituirla actualmente por:

* mejora;
* incremento;
* reducción;
* optimización;
* superioridad.

Su principal riesgo es interpretativo y operacional, no la ausencia de un grupo control.

---

# A7. AUDITORÍA DEL OE1

## A7.1 Objetivo auditado

> **Identificar y caracterizar necesidades de consulta de información visual de construcción que puedan ser atendidas mediante documentación fotográfica de obra.**

Actualmente existen tres familias iniciales:

```text
ESPACIAL
¿Dónde?

TEMPORAL
¿Cuándo?

ESTADO / EVOLUCIÓN
¿Cómo estaba?
¿Qué cambió?
```

---

## A7.2 Riesgo de circularidad

Existiría circularidad si se realizara el siguiente procedimiento:

```text
se decide de antemano que existen exactamente tres familias
        ↓
se consulta exclusivamente sobre esas tres familias
        ↓
se concluye que las necesidades encontradas pertenecen a esas tres familias
```

Esa lógica debe evitarse.

---

## A7.3 Lógica defendible

La arquitectura actual sí resulta metodológicamente defendible si las familias iniciales funcionan como categorías sensibilizadoras derivadas de:

* literatura;
* antecedentes;
* razonamiento previo;

y OE1 tiene capacidad real para:

* confirmarlas;
* refinarlas;
* subdividirlas;
* combinarlas;
* complementarlas.

La secuencia adecuada sería:

```text
literatura + formulación inicial
        ↓
familias preliminares
        ↓
consulta a profesionales
        ↓
necesidades expresadas
        ↓
caracterización
        ↓
contraste con familias iniciales
        ↓
confirmación / refinamiento / ampliación
```

---

## A7.4 Condiciones metodológicas

### 1. No imponer las familias al participante

La obtención de necesidades no debería limitarse a preguntar directamente:

* qué necesita espacialmente;
* qué necesita temporalmente;
* qué necesita sobre estado.

Debe existir posibilidad de expresar necesidades fuera de esas categorías.

### 2. Separar obtención de clasificación

Primero se obtiene la necesidad.

Posteriormente se analiza cómo puede clasificarse.

### 3. Permitir necesidades fuera del alcance fotográfico

Pueden aparecer necesidades que requieran:

* planos;
* metrados;
* especificaciones;
* documentos contractuales;
* mediciones;
* información no visual.

Su aparición no debilita OE1.

Puede permitir delimitar qué necesidades sí son atendibles mediante documentación fotográfica.

### 4. OE1 debe informar realmente OE2

Si la metodología estuviera completamente cerrada antes de realizar OE1, el objetivo podría convertirse en decorativo.

La lógica adecuada es:

```text
base bibliográfica
        ↓
necesidades
        ↓
requisitos / refinamiento
        ↓
diseño final de metodología
```

---

## A7.5 Veredicto

> **OE1 es metodológicamente coherente con la existencia previa de las tres familias iniciales.**

No es necesario eliminar las familias.

Debe evitarse tratarlas como una taxonomía universal ya demostrada.

---

# A8. AUDITORÍA DEL POSIBLE CASO NUEVO

## A8.1 Implicancia general

Existe la posibilidad de utilizar un proyecto nuevo de construcción de aproximadamente un mes de duración.

Si el acceso se confirma, constituye la ruta preferible porque permitiría aplicar prospectivamente la metodología desde el inicio:

```text
ANTES / INICIO
definición espacial
+
puntos
+
recorridos
+
protocolo

        ↓

DURANTE
capturas periódicas
+
trazabilidad espacial
+
trazabilidad temporal

        ↓

FINAL
historial visual
+
preparación de evaluación
```

Esto permite que la metodología se aplique realmente como protocolo de documentación, en lugar de reconstruirse únicamente sobre material histórico.

---

## A8.2 Lo que debe definirse antes de iniciar la obra

| Elemento                                       | Razón                                       |
| ---------------------------------------------- | ------------------------------------------- |
| Confirmación del proyecto                      | Sin acceso no existe aplicación prospectiva |
| Permisos de acceso/captura                     | No deben improvisarse después               |
| Referencia espacial suficiente                 | Necesaria para mantener trazabilidad        |
| Criterio de selección de puntos                | Debe existir antes de la primera captura    |
| Puntos iniciales                               | Permiten recurrencia longitudinal           |
| Regla de permanencia/cambio                    | La obra puede modificar accesibilidad       |
| Concepto de sesión/recorrido                   | Necesario para organizar el registro        |
| Periodicidad o criterio de captura             | Evita perder estados irrepetibles           |
| Metadatos mínimos                              | Deben mantenerse desde el inicio            |
| Fecha/hora                                     | Elemento temporal básico                    |
| Nomenclatura                                   | Evita reconstrucciones posteriores          |
| Tratamiento de puntos inaccesibles             | Debe existir una regla previa               |
| Registro de cambios/desviaciones               | Necesario para trazabilidad                 |
| Control mínimo de calidad                      | Permite repetir capturas defectuosas        |
| Carga/vinculación                              | Evita pérdida de organización               |
| Backup mínimo                                  | Protege la evidencia                        |
| Protocolo de captura suficientemente operativo | Dependencia metodológica principal          |

---

## A8.3 Lo que puede definirse después de generar el historial

| Elemento                           | Razón                                            |
| ---------------------------------- | ------------------------------------------------ |
| Redacción exacta de cada tarea     | Depende de la evidencia realmente capturada      |
| Ground truth concreto              | Debe corresponder a estados documentados         |
| Número final de consultas          | Depende de cobertura y calidad                   |
| Distribución final por familia     | Puede ajustarse según evidencia disponible       |
| Variantes de respuesta aceptables  | Dependen del contenido de cada tarea             |
| Duración final de evaluación       | Puede determinarse mediante piloto               |
| Cuestionario perceptual definitivo | Puede cerrarse posteriormente                    |
| Número final de participantes      | Debe cerrarse antes de evaluación, no de captura |
| Tratamiento estadístico final      | Dependerá del diseño y datos                     |

---

## A8.4 Elementos que deben definirse parcialmente antes y concretarse después

Las tareas pertenecen a esta categoría.

### Antes de la obra

Deberían existir:

* familias iniciales;
* arquetipos generales;
* requisitos de elegibilidad;
* necesidad de evidencia visual;
* necesidad de verificabilidad;
* regla de definición previa del ground truth.

### Después de generar el historial

Podrán definirse:

* situación concreta;
* formulación textual;
* evidencia específica;
* respuesta de referencia;
* variantes aceptables.

Esto reduce el riesgo de diseñar retrospectivamente solo tareas que favorezcan al historial generado.

---

## A8.5 Caso histórico

El caso histórico disponible no necesita convertirse en caso final si se confirma el proyecto nuevo.

Puede mantenerse como:

* piloto de estructura de datos;
* prueba de interfaz;
* prueba de navegación;
* ensayo de tareas;
* prueba interna del protocolo.

Debe preservarse la separación entre:

> **piloto / preparación**

y

> **evaluación final**

---

# A9. BLOQUEANTES VS. NO BLOQUEANTES

## A9.1 Matriz temporal de bloqueantes

| Momento                                                   | Bloqueantes reales                                                                                                                                                                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Para empezar a definir la arquitectura del nuevo Plan** | No se identificó ningún bloqueante académico                                                                                                                                                                                    |
| **Para redactar el Borrador Integral V1**                 | Arquitectura exacta del Plan definida; mapa de contenidos por sección; trazabilidad suficiente para antecedentes/problemática/marco                                                                                             |
| **Para presentar formalmente el Plan**                    | Formato institucional vigente; título administrativo; problema/objetivos/hipótesis consolidados; metodología descrita; delimitación defendible; asesor y requisitos administrativos correspondientes                            |
| **Para iniciar el proyecto nuevo**                        | Proyecto confirmado; acceso/permisos; referencia espacial; protocolo mínimo; puntos iniciales; reglas de recurrencia/cambio; metadatos; nomenclatura; control de calidad y backup                                               |
| **Para realizar la evaluación final**                     | Historial terminado; evidencia inventariada; tareas congeladas; ground truth previo; criterios de corrección; interfaz funcional; piloto; participantes; instrumentos; procedimiento uniforme; registro de respuestas y tiempos |

---

## A9.2 No bloqueantes en el estado actual

No impiden pasar a FASE B:

* número exacto de participantes;
* número exacto de tareas;
* preguntas definitivas;
* ground truth concreto;
* cuestionario perceptual final;
* prueba estadística definitiva;
* número exacto de puntos;
* periodicidad exacta;
* recorridos concretos;
* plataforma definitiva;
* ubicación exacta del caso;
* proyecto exacto, siempre que no sea presentado ficticiamente como cerrado;
* título definitivo.

Debe distinguirse:

> **no bloqueante ahora**

de

> **decisión que puede permanecer indefinidamente abierta**.

Cada elemento deberá cerrarse antes de la fase en la que resulte necesario.

---

# A10. AUDITORÍA DE LA AUSENCIA DEL DOCUMENTO MAESTRO

El Plan Maestro refiere históricamente al archivo:

`DOCUMENTO_MAESTRO_TESIS_360_GESTION_INFORMACION_VISUAL.md`

Este archivo no estuvo disponible durante la auditoría.

---

## A10.1 ¿Impide la auditoría?

> **NO**

La auditoría pudo resolverse correctamente mediante:

* Plan aprobado de 2024;
* cierre de formulación 2026;
* Plan Maestro actualizado;
* contexto y decisiones consolidadas del proyecto.

---

## A10.2 ¿Impide pasar a FASE B?

> **NO**

La arquitectura del nuevo Plan puede definirse utilizando:

* estructura institucional del Plan 2024;
* formulación académica vigente;
* estado operativo actualizado.

No existe una dependencia académica que obligue a localizar el Documento Maestro antes de F11-T02.

---

## A10.3 ¿Impide por sí solo redactar posteriormente el Borrador Integral V1?

> **NO COMO BLOQUEANTE ABSOLUTO**

Sin embargo, para redactar con trazabilidad adecuada:

* antecedentes;
* realidad problemática;
* partes del marco conceptual;

será necesario disponer de las fuentes y argumentos concretos que sustentan las afirmaciones.

El cierre vigente consolida **qué se decidió**, pero no necesariamente contiene:

* todas las referencias completas;
* páginas específicas;
* extractos de trabajo;
* desarrollo completo de D1;
* desarrollo completo de F4-T06;
* fichas individuales de antecedentes;
* matriz bibliográfica completa.

---

## A10.4 Qué información podría ser necesario recuperar

Lo necesario no es específicamente el archivo llamado Documento Maestro.

Lo necesario es recuperar, cuando corresponda:

```text
AFIRMACIÓN
        ↓
FUENTE
        ↓
PÁGINA / SECCIÓN
        ↓
INTERPRETACIÓN
        ↓
USO EN EL NUEVO PLAN
```

Si esta trazabilidad existe en:

* cierre D1;
* cierre F4-T06;
* fichas de papers;
* fichas de tesis;
* matriz bibliográfica;
* otros documentos del repositorio;

el Documento Maestro no resulta indispensable.

---

## A10.5 Veredicto

> **El Documento Maestro no es bloqueante para cerrar F11-T01 ni para pasar a F11-T02 / FASE B.**

Antes de redactar las secciones bibliográficamente densas del Borrador Integral V1 deberá verificarse si los documentos existentes contienen la trazabilidad suficiente.

Solo si falta información concreta deberá localizarse el Documento Maestro o su fuente equivalente.

---

# A11. ADECUACIÓN AL NIVEL REAL DE UN PLAN DE TESIS

## A11.1 Referencia institucional

El Plan aprobado de 2024 tiene aproximadamente diez páginas y presenta una estructura compacta.

No constituye una tesis abreviada.

Esto permite evitar dos extremos:

```text
PLAN DEMASIADO SUPERFICIAL
```

y

```text
PLAN SOBREINGENIERIZADO COMO SI FUERA LA TESIS FINAL
```

El nuevo Plan debería contener mayor rigor conceptual y metodológico que el documento de 2024, pero mantener una extensión y nivel de desarrollo propios de un Plan de Tesis.

---

## A11.2 Elementos que deben quedar CERRADOS

Antes de presentar formalmente el nuevo Plan deberían estar consolidados:

* problema investigado;
* propuesta metodológica;
* producto generado;
* función principal evaluada;
* relación problema–objetivos–hipótesis;
* arquitectura de tres objetivos específicos;
* carácter no comparativo;
* variable principal;
* indicador principal;
* papel secundario del tiempo;
* papel complementario de la percepción;
* función metodológica del caso;
* lógica general OE1 → OE2 → OE3;
* límites fundamentales del alcance;
* componentes expresamente excluidos del núcleo.

---

## A11.3 Elementos que pueden permanecer PROVISIONALES durante el Borrador V1

* título exacto;
* proyecto específico;
* tipología;
* ubicación;
* número de participantes;
* perfiles definitivos;
* número de tareas;
* distribución final de tareas;
* puntos de captura;
* periodicidad;
* plataforma;
* instrumento perceptual definitivo;
* análisis estadístico definitivo.

Estos elementos no deben inventarse para dar una falsa apariencia de cierre.

---

## A11.4 Elementos que deben estar DESCRITOS A NIVEL DE PROCEDIMIENTO

### OE1

Debe explicarse:

* cómo se identificarán necesidades;
* cómo se caracterizarán;
* cómo podrán informar el diseño.

No es necesario presentar todavía las preguntas definitivas.

### Metodología 360°

Debe explicarse conceptualmente:

```text
captura
        ↓
contextualización espacial y temporal
        ↓
organización
        ↓
historial visual
        ↓
consulta
```

No es necesario incluir todavía el protocolo de campo completo.

### Caso de aplicación

Debe quedar clara:

* su función;
* los criterios que debe cumplir;
* su papel para materializar el historial.

### Aplicación prospectiva

Debe explicarse a nivel de procedimiento cómo se generará longitudinalmente el historial si se confirma el nuevo proyecto.

### Evaluación

Debe estar suficientemente definido que se utilizarán:

* tareas con profesionales;
* consultas basadas en evidencia;
* ground truth previo;
* respuesta correcta/incorrecta;
* tasa de resolución correcta;
* tiempo;
* percepción posterior;
* análisis descriptivo-evaluativo.

No es necesario incluir las tareas finales.

### Participantes

Debe definirse el tipo de participante y la lógica general de selección.

No es obligatorio cerrar todavía un `n` definitivo.

### Análisis

Debe explicarse cómo los resultados permitirán analizar la hipótesis.

No es necesario seleccionar anticipadamente una prueba estadística inferencial.

---

## A11.5 Elementos reservados para la tesis final

Entre otros:

* inventario completo de puntos;
* planos definitivos marcados;
* fechas reales de captura;
* registro completo de sesiones;
* base de datos final;
* arquitectura tecnológica detallada;
* capturas de interfaz;
* preguntas exactas;
* ground truth completo;
* instrumentos finales;
* resultados del piloto;
* resultados de evaluación;
* tablas estadísticas finales;
* discusión;
* limitaciones observadas;
* conclusiones finales.

---

## A11.6 Principio editorial resultante

El nuevo Plan debe responder:

> **¿Qué se investigará, por qué, qué se desarrollará y mediante qué procedimiento se obtendrá evidencia capaz de responder la pregunta de investigación?**

La tesis final deberá responder:

> **¿Qué se ejecutó exactamente, qué resultados se obtuvieron y qué puede concluirse a partir de ellos?**

El nuevo Plan no debe intentar responder anticipadamente la segunda pregunta.

---

# A12. DIAGNÓSTICO FINAL

# GO CON PENDIENTES

Con los documentos y decisiones disponibles existe suficiente definición académica para construir responsablemente el nuevo Plan de Tesis utilizando el Plan aprobado de 2024 como referencia institucional, estructural y editorial, pero sustituyendo su arquitectura académica anterior por la formulación vigente de 2026.

---

## A12.1 Elementos suficientemente definidos

Actualmente se encuentran suficientemente establecidos:

* marco amplio: **gestión de información visual**;
* objeto: **documentación fotográfica de obra**;
* propuesta: **metodología de documentación fotográfica 360° estructurada espacial y temporalmente**;
* producto aplicado: **historial visual de la obra**;
* función principal evaluada: **resolución de consultas concretas de información visual de construcción**;
* brecha provisionalmente cerrada;
* problema general candidato;
* objetivo general candidato;
* tres objetivos específicos candidatos;
* hipótesis general candidata;
* variable principal;
* indicador principal;
* tiempo como medida secundaria;
* percepción complementaria;
* familias iniciales de consulta;
* diseño no comparativo;
* lógica de evaluación;
* filosofía de alcance;
* posibilidad de un caso prospectivo;
* papel posible del caso histórico como piloto.

---

## A12.2 Pendientes que justifican “CON PENDIENTES” y no “NO-GO”

### Editoriales

* título definitivo;
* simplificación futura de algunas formulaciones;
* normalización terminológica;
* redacción administrativa final.

### Metodológicos / operacionales

* arquetipos y reglas definitivas para construir tareas;
* protocolo mínimo de captura;
* criterios finales para participantes;
* detalles de operacionalización;
* instrumentos finales;
* tratamiento estadístico definitivo.

### Caso

* proyecto específico;
* ubicación;
* planos;
* permisos;
* puntos;
* recorridos;
* periodicidad.

### Administrativos

* formato institucional vigente;
* asesor;
* requisitos documentales actuales de la FIC-UNI.

Ninguno de estos pendientes obliga a reconstruir la arquitectura académica central.

---

## A12.3 Riesgo metodológico principal identificado

Debe evitarse una evaluación cuya lógica termine siendo:

```text
el historial contiene determinada información
        ↓
se diseñan únicamente preguntas cuya respuesta ya se sabe que será sencilla
        ↓
se concluye que el historial permite resolver consultas
```

La lógica que debe preservarse es:

```text
necesidades y familias justificadas
        ↓
arquetipos / reglas de tarea
        ↓
aplicación de la metodología
        ↓
historial visual
        ↓
inventario de evidencia disponible
        ↓
tarea plausible y verificable
        ↓
ground truth definido antes de evaluar
        ↓
profesional utiliza el historial
        ↓
respuesta observada
        ↓
evaluación
```

Este riesgo es controlable y no constituye motivo para un NO-GO.

---

# 13. ESTADO DE F11-T01

## Tarea

**F11-T01 — Auditar Plan de Tesis aprobado antiguo y obtener referencia institucional para el nuevo Plan.**

## Estado académico

> **CUMPLIDA**

La auditoría permitió identificar:

* arquitectura exacta del documento aprobado;
* nivel real de detalle;
* contenido reutilizable;
* contenido que debe reformularse;
* contenido que debe retirarse;
* contenido nuevo requerido;
* cambios académicos 2024 → 2026;
* consistencia de la formulación vigente;
* riesgos metodológicos principales;
* decisiones que pueden permanecer abiertas;
* condiciones necesarias para continuar.

La obtención o verificación posterior del formato administrativo FIC vigente puede tratarse como una comprobación formal independiente antes de presentación, sin impedir el cierre académico de esta tarea.

---

# 14. HABILITACIÓN PARA F11-T02 / FASE B

La conclusión de esta auditoría habilita el siguiente paso:

> **F11-T02 — Mapear la investigación al formato del nuevo Plan**

equivalente en este flujo de trabajo a:

> **FASE B — ARQUITECTURA DEL NUEVO PLAN**

Existe suficiente definición para realizar esa fase.

Esto **NO autoriza todavía** la redacción del:

> **NUEVO PLAN DE TESIS 360° — BORRADOR INTEGRAL V1**

Antes debe construirse explícitamente la arquitectura documental.

---

# 15. OBJETIVOS PROPUESTOS PARA LA FUTURA FASE B

La futura FASE B deberá limitarse a definir la arquitectura exacta del nuevo Plan.

Sus objetivos serán:

## B1. Reconstruir el esqueleto institucional

Utilizar el Plan aprobado de 2024 para establecer:

* secciones;
* orden;
* jerarquía;
* extensión aproximada;
* nivel esperado de detalle;
* componentes editoriales.

Sin copiar su arquitectura académica obsoleta.

---

## B2. Mapear la formulación vigente hacia cada sección

Determinar dónde deben ubicarse:

* antecedentes;
* realidad problemática;
* problema general;
* objetivos;
* hipótesis;
* marco conceptual;
* metodología;
* caso;
* evaluación;
* cronograma;
* referencias.

---

## B3. Definir el grado de cierre de cada contenido

Para cada apartado indicar si deberá estar:

* cerrado;
* provisional;
* descrito a nivel de procedimiento;
* reservado para la tesis final.

---

## B4. Determinar extensión y profundidad por sección

Evitar:

* un Plan demasiado superficial;
* un Plan sobreingenierizado.

Utilizar el Plan aprobado como referencia real de escala institucional.

---

## B5. Construir el mapa de trazabilidad bibliográfica

Antes de la redacción integral, determinar qué fuentes sostendrán:

* antecedentes;
* realidad problemática;
* brecha;
* marco conceptual;
* metodología;
* evaluación.

---

## B6. Separar decisiones académicas de datos todavía abiertos

Evitar inventar para el Borrador Integral V1:

* proyecto;
* ubicación;
* participantes;
* tamaño de muestra;
* tareas;
* puntos;
* periodicidad;
* instrumento;
* análisis estadístico.

---

## B7. Dejar una arquitectura lista para redacción

El producto de FASE B deberá permitir que, posteriormente, la redacción del:

> **Nuevo Plan de Tesis 360° — Borrador Integral V1**

sea principalmente un proceso de desarrollo documental sobre una estructura ya validada y no una nueva discusión desde cero sobre la investigación.

---

# 16. DECISIÓN CANÓNICA DE CIERRE

```text
FASE A — AUDITORÍA
        ↓
RESULTADO
GO CON PENDIENTES
        ↓
F11-T01
ACADÉMICAMENTE CUMPLIDA
        ↓
SIGUIENTE PASO AUTORIZADO
F11-T02 / FASE B
ARQUITECTURA DEL NUEVO PLAN
        ↓
TODAVÍA NO EJECUTAR
NUEVO PLAN DE TESIS 360°
BORRADOR INTEGRAL V1
```

La auditoría concluye que la reformulación 2026 es suficientemente madura para sustituir la arquitectura académica del Plan de 2024, manteniendo de este último su valor institucional, estructural, editorial e histórico.

No se requiere reabrir la formulación desde cero.

No se requiere introducir un diseño comparativo.

No se requiere regresar a comunicación como variable principal.

No se requiere cerrar prematuramente los detalles que corresponden a fases posteriores.

El siguiente trabajo es exclusivamente:

> **definir la arquitectura exacta del nuevo Plan de Tesis.**

---

**Fin — `AUDITORIA_PLAN_TESIS_APROBADO_2024_VS_FORMULACION_2026.md`**
