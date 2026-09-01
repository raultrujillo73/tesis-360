---

tipo: arquitectura-nuevo-plan-tesis
fecha: 2026-09-01
estado: cerrada
tarea: F11-T02
resultado: LISTA PARA FASE C
hito_objetivo: D5A
------------------

# ARQUITECTURA DEL NUEVO PLAN DE TESIS 360° — V1

## FASE B — Arquitectura del Nuevo Plan de Tesis

## 0. Propósito del documento

Este documento consolida de forma canónica la arquitectura aprobada para el futuro:

> **NUEVO PLAN DE TESIS 360° — BORRADOR INTEGRAL V1**

Su función es definir con precisión el esqueleto documental que deberá utilizarse durante la FASE C antes de iniciar la redacción integral.

Este documento determina:

* qué secciones tendrá el nuevo Plan;
* en qué orden aparecerán;
* qué función académica cumple cada sección;
* qué contenido deberá desarrollar cada una;
* qué contenido no deberá incorporarse todavía;
* qué fuentes deberán utilizarse;
* qué nivel de cierre corresponde a cada elemento;
* qué extensión aproximada tendrá cada sección;
* qué elementos editoriales del Plan aprobado de 2024 se reutilizarán;
* qué arquitectura académica de 2026 sustituirá al planteamiento anterior.

La FASE B no modifica:

* problema general candidato;
* objetivo general candidato;
* objetivos específicos candidatos;
* hipótesis general candidata;
* brecha de investigación;
* diseño no comparativo;
* variable principal;
* indicadores;
* arquitectura general de evaluación.

Este documento **no constituye todavía la redacción del nuevo Plan de Tesis**.

---

# 1. Fuentes y jerarquía aplicada

## 1.1 Referencia institucional y estructural

**Plan de Tesis aprobado por la FIC-UNI en 2024.**

Se utiliza como referencia directa para:

* estructura institucional;
* orden de secciones;
* extensión;
* nivel de detalle;
* presentación editorial;
* cronograma;
* referencias;
* firmas.

El formato FIC que se utilizará para el nuevo Plan es el observado en este documento aprobado.

Por tanto, la arquitectura institucional válida para el nuevo Plan será:

```text
PORTADA
DATOS DEL PLAN
ANTECEDENTES REFERENCIALES
PLANTEAMIENTO DE LA REALIDAD PROBLEMÁTICA
PROBLEMA GENERAL
OBJETIVOS
HIPÓTESIS
MARCO TEÓRICO
ÍNDICE
METODOLOGÍA DE TRABAJO
CRONOGRAMA
REFERENCIAS
FIRMAS
```

No se incorporarán como nuevas secciones principales:

* justificación;
* variables;
* población y muestra;
* instrumentos;
* diseño estadístico;

salvo que posteriormente exista una instrucción expresa de la FIC.

---

## 1.2 Fuente académica vigente

**`CIERRE_FORMULACION_BASE_NUEVO_PLAN_TESIS_360.md`**

Constituye la fuente principal para:

* arquitectura conceptual;
* propuesta;
* producto;
* función evaluada;
* problema;
* objetivos;
* hipótesis;
* variable;
* indicadores;
* evaluación;
* alcance;
* terminología vigente.

---

## 1.3 Fuente operativa

**`PLAN_MAESTRO_TRABAJO_TESIS_360.md`**

Se utiliza para:

* estado del proyecto;
* secuencia de trabajo;
* dependencias;
* caso prospectivo;
* protocolo;
* próximos hitos.

Los residuos históricos detectados durante FASE A fueron posteriormente sincronizados en el repositorio y no constituyen pendientes vigentes.

---

## 1.4 Auditoría canónica precedente

**`AUDITORIA_PLAN_TESIS_APROBADO_2024_VS_FORMULACION_2026.md`**

La FASE B parte de las conclusiones ya aprobadas de dicha auditoría.

No se reabre la formulación académica desde cero.

---

# B1. PRINCIPIO GENERAL DE ARQUITECTURA

El nuevo Plan deberá conservar dos capas claramente diferenciadas.

## B1.1 Capa institucional

Procede del Plan aprobado por la FIC-UNI en 2024:

```text
PORTADA
        ↓
DATOS DEL PLAN
        ↓
ANTECEDENTES REFERENCIALES
        ↓
PLANTEAMIENTO DE LA REALIDAD PROBLEMÁTICA
        ↓
PROBLEMA GENERAL
        ↓
OBJETIVOS
        ↓
HIPÓTESIS
        ↓
MARCO TEÓRICO
        ↓
ÍNDICE TENTATIVO
        ↓
METODOLOGÍA DE TRABAJO
        ↓
CRONOGRAMA
        ↓
REFERENCIAS
        ↓
FIRMAS
```

Esta estructura se conserva.

---

## B1.2 Capa académica nueva

Procede de la formulación vigente de 2026:

```text
INFORMACIÓN VISUAL EN CONSTRUCCIÓN
        ↓
DOCUMENTACIÓN FOTOGRÁFICA DE OBRA
        ↓
NECESIDADES DE CONSULTA
        ↓
METODOLOGÍA DE DOCUMENTACIÓN FOTOGRÁFICA 360°
ESTRUCTURADA ESPACIAL Y TEMPORALMENTE
        ↓
HISTORIAL VISUAL DE LA OBRA
        ↓
CONSULTA POR PROFESIONALES
        ↓
RESPUESTA VERIFICABLE
        ↓
EVALUACIÓN FUNCIONAL
        +
PERCEPCIÓN COMPLEMENTARIA
```

La jerarquía conceptual que deberá respetarse es:

```text
GESTIÓN DE INFORMACIÓN VISUAL
= marco amplio

DOCUMENTACIÓN FOTOGRÁFICA DE OBRA
= objeto

FOTOGRAFÍA 360°
= modalidad de captura

CONTEXTUALIZACIÓN ESPACIAL Y TEMPORAL
+ ORGANIZACIÓN
= mecanismo

HISTORIAL VISUAL
= producto aplicado

RESOLUCIÓN DE CONSULTAS
= función principal evaluada
```

---

# B2. DECISIÓN SOBRE LA ESTRUCTURA INSTITUCIONAL

No se identificó una razón académica para alterar las trece secciones principales del Plan aprobado.

| Estructura 2024                           | Decisión para nuevo Plan | Justificación                                      |
| ----------------------------------------- | ------------------------ | -------------------------------------------------- |
| Portada                                   | **MANTENER**             | Función institucional                              |
| Datos del Plan                            | **MANTENER**             | Función administrativa                             |
| Antecedentes referenciales                | **MANTENER**             | Su función permanece; cambia el contenido          |
| Planteamiento de la realidad problemática | **MANTENER**             | Se reconstruye desde información visual y consulta |
| Problema general                          | **MANTENER**             | Existe formulación candidata vigente               |
| Objetivos                                 | **MANTENER**             | 1 OG + 3 OE resulta suficiente                     |
| Hipótesis                                 | **MANTENER**             | Existe hipótesis candidata no comparativa          |
| Marco teórico                             | **MANTENER**             | Se reemplaza la columna conceptual antigua         |
| Índice tentativo                          | **MANTENER**             | Se conserva únicamente a nivel de macrocapítulos   |
| Metodología de trabajo                    | **MANTENER**             | Requiere mayor precisión interna, no nueva sección |
| Cronograma                                | **MANTENER**             | Se sustituye la antigua secuencia pre/post         |
| Referencias                               | **MANTENER**             | Se actualiza completamente el corpus               |
| Firmas                                    | **MANTENER**             | Función institucional                              |

## Decisión estructural

No crear por iniciativa propia secciones principales adicionales.

La nueva investigación debe adaptarse a la estructura FIC ya aprobada, no transformar el Plan en un documento metodológico de otro formato.

---

# B3. SISTEMA DE NIVEL DE CIERRE

Durante la futura redacción se utilizarán cuatro categorías.

| Estado                       | Significado                                                          |
| ---------------------------- | -------------------------------------------------------------------- |
| **CERRADO**                  | Debe aparecer ya definido en el Plan                                 |
| **PROVISIONAL**              | Puede aparecer explícitamente sujeto a confirmación                  |
| **A NIVEL DE PROCEDIMIENTO** | Debe explicarse cómo se realizará, sin instrumento o protocolo final |
| **RESERVADO PARA TESIS**     | No debe desarrollarse todavía dentro del Plan                        |

Principio:

> **Provisional no significa ambiguo y cerrado no significa sobreespecificado.**

---

# B4. ANTECEDENTES REFERENCIALES

## B4.1 Función

Los antecedentes referenciales deben construir una narrativa académica acumulativa.

No deben convertirse en una lista independiente de resúmenes de artículos.

La sección deberá responder progresivamente:

```text
¿QUÉ YA EXISTE?
        ↓
¿QUÉ CAPACIDADES SE HAN DESARROLLADO?
        ↓
¿CÓMO SE HAN ORGANIZADO Y CONSULTADO
LOS REGISTROS FOTOGRÁFICOS?
        ↓
¿CÓMO SE HA UTILIZADO 360°
LONGITUDINALMENTE?
        ↓
¿CÓMO SE HAN EVALUADO
ESTOS SISTEMAS?
        ↓
¿QUÉ COMBINACIÓN EQUIVALENTE
NO SE LOCALIZÓ EN EL CORPUS?
        ↓
¿DÓNDE SE POSICIONA LA TESIS?
```

Debe evitarse cualquier construcción artificial de novedad.

La brecha no consiste en inventar individualmente:

* fotografía 360°;
* longitudinalidad;
* puntos recurrentes;
* planos;
* fechas;
* históricos;
* consulta;
* evaluación profesional.

La diferencia de trabajo se encuentra en su intersección particular con una evaluación mediante tareas y respuestas verificables.

---

## B4.2 Bloque 1 — Antecedentes tempranos de documentación panorámica longitudinal

### Antecedentes núcleo

* Shih et al. (2001);
* Shih, Lai & Tsai (2006) — PIDMS.

### Función argumental

Mostrar que desde etapas tempranas ya se desarrollaron sistemas capaces de combinar:

* imágenes panorámicas;
* documentación de una obra;
* distintas etapas temporales;
* consulta retrospectiva;
* integración con información del proyecto.

### Afirmación que permiten sostener

> La documentación panorámica longitudinal y la recuperación histórica de registros de construcción no constituyen por sí mismas una novedad de esta tesis.

### Extensión objetivo

**1 párrafo desarrollado.**

---

# B4.3 Bloque 2 — Consolidación de la fotografía 360° en construcción

### Antecedentes núcleo

* Eiris y línea de investigación relacionada;
* Shinde et al. (2023).

### Función argumental

Ubicar las fotografías y panoramas 360° como una línea tecnológica ya desarrollada dentro del ámbito AEC.

Introducir capacidades como:

* captura amplia del entorno;
* navegación visual;
* representación inmersiva;
* asociación con ubicaciones;
* documentación de obra;
* diversidad de aplicaciones.

### Afirmación que permiten sostener

> La aplicación de fotografías y panoramas 360° en construcción se encuentra ampliamente antecedida.

La fotografía 360° deberá presentarse como **modalidad de captura**, no como novedad aislada.

### Extensión objetivo

**1 párrafo.**

---

# B4.4 Bloque 3 — Consulta espacio-temporal de documentación fotográfica

### Antecedente núcleo

* Wu & Tory (2009) — PhotoScope;
* Wu (2009), cuando la tesis sea necesaria para ampliar detalles metodológicos.

### Función argumental

Introducir un cambio fundamental:

```text
NO SOLO DOCUMENTAR
        ↓
SINO CONSULTAR
UN ARCHIVO HISTÓRICO
        ↓
PARA RESPONDER
NECESIDADES DE INFORMACIÓN
```

PhotoScope resulta especialmente relevante porque relaciona:

* fotografías de construcción;
* espacio;
* tiempo;
* contenido;
* navegación;
* búsqueda;
* preguntas profesionales.

### Afirmaciones que permite sostener

* ubicación y tiempo son ejes relevantes para consultar fotografías;
* los archivos históricos pueden utilizarse para responder preguntas;
* la consulta espacio-temporal de fotografías de construcción tampoco constituye una novedad absoluta.

### Extensión objetivo

**1–2 párrafos.**

---

# B4.5 Bloque 4 — Documentación longitudinal 360° contemporánea

### Antecedentes núcleo

* Bahakim (2023);
* Erazo-Rondinel & Melgar.

### Función argumental

Mostrar que antecedentes recientes ya se aproximan considerablemente a la infraestructura documental de la propuesta.

Especialmente en Bahakim aparecen elementos como:

```text
360°
+
PUNTOS RECURRENTES
+
PLANO / LAYOUT
+
FECHA
+
RECAPTURA
+
HISTORIAL
+
COMPARACIÓN TEMPORAL
+
ACCESO
+
EVALUACIÓN PROFESIONAL
```

### Afirmación que permiten sostener

> Puntos recurrentes, plano, fecha, historial visual y evaluación profesional no pueden presentarse individualmente como aportes inéditos de la nueva tesis.

La diferencia deberá buscarse en la forma de utilizar ese historial para resolver consultas verificables.

### Extensión objetivo

**1–2 párrafos.**

---

# B4.6 Bloque 5 — Antecedentes peruanos

### Prioridad

* Vega Hurtado & Vidal Osorio (2023);
* Erazo-Rondinel & Melgar cuando corresponda como antecedente desarrollado en contexto peruano;
* Cruz Calcina (2017), únicamente si cumple una función concreta dentro de la narrativa nacional.

### Función de Vega Hurtado & Vidal

Demostrar que en Perú ya existe una propuesta aplicada de gestión de avances mediante recorridos o documentación 360° y participación de stakeholders.

Debe evitarse, por tanto, una falsa afirmación del tipo:

> “En Perú no se ha utilizado fotografía 360° en construcción”.

### Función posible de Cruz

Puede conservarse únicamente como antecedente nacional de investigación aplicada sobre gestión de información/TIC en construcción.

No debe utilizarse para reintroducir:

* comunicación como variable;
* Design Thinking;
* arquitectura metodológica de 2024.

### Extensión objetivo

**Aproximadamente 1 párrafo.**

---

# B4.7 Bloque 6 — Síntesis hacia la brecha

El cierre de antecedentes debe integrar el corpus, no añadir otro resumen por autor.

La lógica será:

```text
YA EXISTEN

documentación panorámica longitudinal
+
fotografía 360° en construcción
+
organización espacial y temporal
+
consulta histórica de fotografías
+
puntos recurrentes
+
planos / layouts
+
evaluación profesional de sistemas 360°

PERO

EN LOS ANTECEDENTES IDENTIFICADOS Y REVISADOS

NO SE ENCONTRÓ UNA EVALUACIÓN EQUIVALENTE
EN LA QUE PROFESIONALES UTILICEN
UN HISTORIAL FOTOGRÁFICO 360°
ESTRUCTURADO ESPACIAL Y TEMPORALMENTE
PARA RESOLVER CONSULTAS CONCRETAS
DE INFORMACIÓN VISUAL DE CONSTRUCCIÓN
MEDIANTE TAREAS CON RESPUESTAS VERIFICABLES
```

### Qué no debe afirmarse

* “no existe ningún estudio”;
* “somos los primeros”;
* “nadie lo ha realizado”;
* “la estructura espacio-temporal es nueva”;
* “el historial 360° es nuevo”;
* “la evaluación profesional con 360° no existe”.

---

# B4.8 Extensión objetivo de antecedentes

**2.0–2.5 páginas.**

Aproximadamente:

* 6–8 párrafos sustantivos;
* selección reducida de antecedentes núcleo;
* organización argumental y no cronología exhaustiva.

---

# B5. PLANTEAMIENTO DE LA REALIDAD PROBLEMÁTICA

## B5.1 Función

La realidad problemática debe construir el problema práctico e informacional de la tesis.

No debe:

* repetir la brecha académica;
* comenzar directamente desde una supuesta ausencia de 360°;
* volver a construir el problema alrededor de comunicación;
* asumir la efectividad de la solución antes de evaluarla.

---

# B5.2 Cadena argumental propuesta

## Etapa 1 — Producción de información visual durante la construcción

```text
PROYECTO DE CONSTRUCCIÓN
        ↓
TRANSFORMACIONES FÍSICAS CONTINUAS
        ↓
GENERACIÓN DE REGISTROS FOTOGRÁFICOS
```

### Afirmaciones que necesitan respaldo

* las fotografías son utilizadas para documentar actividades, condiciones o evolución;
* durante el desarrollo de una obra pueden acumularse registros visuales de diferentes momentos.

---

## Etapa 2 — Acumulación no equivale a disponibilidad informacional

```text
TENER FOTOGRAFÍAS
        ≠
PODER RECUPERAR FÁCILMENTE
LA INFORMACIÓN NECESARIA
```

### Afirmaciones que necesitan respaldo

* crecimiento de colecciones fotográficas;
* necesidad de indexación y recuperación;
* dificultades asociadas a localizar registros relevantes.

---

## Etapa 3 — Necesidad de contextualización

```text
FOTOGRAFÍA AISLADA
        ↓
CONTEXTO ESPACIAL
+
CONTEXTO TEMPORAL
        ↓
REGISTRO SITUADO
DENTRO DEL PROYECTO
```

La problemática deberá explicar que la utilidad documental depende no solo de conservar una imagen, sino de poder relacionarla con elementos como:

* ubicación;
* punto;
* momento;
* fecha;
* estado documentado.

La formulación académica central seguirá utilizando:

> **estructurada espacial y temporalmente**

y no se sustituirá por “ubicación y fecha”.

---

## Etapa 4 — De colección de fotografías a historial visual

```text
CAPTURAS
+
CONTEXTUALIZACIÓN
+
ORGANIZACIÓN
+
ACUMULACIÓN TEMPORAL
        ↓
HISTORIAL VISUAL DE LA OBRA
```

Aquí debe introducirse el historial visual como **producto de la metodología**, no como solución cuya eficacia ya haya sido demostrada.

---

## Etapa 5 — Necesidades de consulta

El historial adquiere función práctica cuando puede utilizarse para obtener información.

Las familias iniciales podrán introducirse de forma prudente:

```text
ESPACIAL
¿Dónde?

TEMPORAL
¿Cuándo?

ESTADO / EVOLUCIÓN
¿Cómo estaba?
¿Qué cambió?
```

No deberán presentarse como taxonomía universal.

OE1 podrá:

* confirmarlas;
* refinarlas;
* complementarlas.

---

## Etapa 6 — Problema investigable

La problemática no deberá formularse como:

> “faltan cámaras 360°”

ni como:

> “no existen sistemas para guardar fotografías”.

El problema debe conducir hacia la capacidad funcional de una documentación fotográfica 360° organizada espacial y temporalmente para ser utilizada posteriormente al resolver necesidades concretas de información visual.

---

## Etapa 7 — Necesidad de una propuesta metodológica y una evaluación

```text
NECESIDAD DE CONSULTA
        ↓
METODOLOGÍA DE DOCUMENTACIÓN
        ↓
HISTORIAL VISUAL
        ↓
USO POR PROFESIONALES
        ↓
RESPUESTA VERIFICABLE
        ↓
EVALUACIÓN
```

La propuesta deberá aparecer como respuesta investigativa al problema, no como una solución asumida.

---

## Etapa 8 — Desembocadura en el problema general

El último tramo deberá conducir directamente hacia la pregunta general candidata vigente.

No debe existir un salto entre:

* problemática;
* pregunta;
* objetivo;
* hipótesis.

---

# B5.3 Afirmaciones que necesitan respaldo bibliográfico

| Afirmación                                                                  | Estado previsto                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Las fotografías se utilizan como documentación en proyectos de construcción | Respaldo disponible; verificar fuente primaria              |
| Los archivos visuales pueden crecer longitudinalmente                       | Respaldo disponible                                         |
| La acumulación puede dificultar recuperación/indexación                     | Respaldo disponible                                         |
| El contexto espacial es relevante para consultar documentación fotográfica  | Respaldo disponible                                         |
| El contexto temporal es relevante para consultar documentación fotográfica  | Respaldo disponible                                         |
| 360° aporta cobertura/contexto visual desde un punto                        | Respaldo disponible                                         |
| 360° por sí sola no resuelve organización ni recuperación                   | Síntesis conceptual respaldable mediante literatura         |
| Profesionales pueden formular consultas espaciales, temporales y de estado  | Existe respaldo previo; OE1 deberá aportar evidencia propia |
| Existen exactamente tres familias universales                               | No respaldado y no debe afirmarse                           |
| La metodología propuesta resolverá las necesidades                          | No debe asumirse; será objeto de evaluación                 |

---

# B5.4 Extensión objetivo

**1.25–1.75 páginas.**

Aproximadamente:

* 5–7 párrafos;
* argumento lineal;
* mínimo contexto genérico;
* máxima conexión con el fenómeno investigado.

---

# B6. PROBLEMA, OBJETIVOS E HIPÓTESIS

Las formulaciones vigentes se insertarán en el nuevo Plan sin alterar su arquitectura durante FASE B.

---

## B6.1 Problema general candidato

> **¿En qué medida el historial visual generado mediante una metodología de documentación fotográfica 360° estructurada espacial y temporalmente permite a profesionales vinculados a proyectos de construcción resolver consultas concretas de información visual de construcción?**

### Estado

**CERRADO conceptualmente.**

### Pendiente para FASE C

Únicamente revisión editorial:

* economía sintáctica;
* repetición de términos;
* integración exacta con el párrafo final de la problemática.

No cambiar la arquitectura investigativa.

---

# B6.2 Objetivo general candidato

> **Desarrollar una metodología de documentación fotográfica 360° estructurada espacial y temporalmente y evaluar, mediante su aplicación en un caso de construcción, la resolución de consultas concretas de información visual de construcción a partir del historial visual generado por parte de profesionales vinculados a proyectos de construcción.**

### Estado

**CERRADO conceptualmente.**

### Pendiente para FASE C

Revisión exclusivamente editorial, especialmente por la posible ambigüedad de:

> “historial visual generado por parte de profesionales”.

Toda futura corrección deberá preservar la secuencia:

```text
DESARROLLAR METODOLOGÍA
        ↓
APLICARLA
        ↓
GENERAR HISTORIAL
        ↓
EVALUAR LA RESOLUCIÓN DE CONSULTAS
```

---

# B6.3 OE1 — Necesidades

> **Identificar y caracterizar necesidades de consulta de información visual de construcción que puedan ser atendidas mediante documentación fotográfica de obra.**

### Estado

**CERRADO conceptualmente.**

Las tres familias iniciales no deberán convertirse en la respuesta predefinida del objetivo.

---

# B6.4 OE2 — Diseño

> **Diseñar una metodología de documentación fotográfica 360° que establezca procedimientos y elementos para la captura, contextualización espacial y temporal, organización y consulta del historial visual de una obra.**

### Estado

**CERRADO conceptualmente.**

Su arquitectura responde directamente a:

```text
CAPTURA
        ↓
CONTEXTUALIZACIÓN
        ↓
ORGANIZACIÓN
        ↓
CONSULTA
```

---

# B6.5 OE3 — Aplicación y evaluación

> **Aplicar la metodología propuesta en un caso de construcción y evaluar la resolución de consultas concretas de información visual mediante tareas realizadas por profesionales sobre el historial fotográfico 360° generado, complementando los resultados con su valoración de la facilidad de consulta, organización, utilidad y aplicabilidad.**

### Estado

**CERRADO conceptualmente.**

### Pendiente para FASE C

Normalización editorial entre:

* “historial fotográfico 360°”;
* “historial visual de la obra”.

No agregar un cuarto objetivo para la aplicación.

---

# B6.6 Hipótesis general candidata

> **El historial visual generado mediante la aplicación de una metodología de documentación fotográfica 360° estructurada espacial y temporalmente permite a profesionales vinculados a proyectos de construcción resolver consultas concretas de información visual de construcción.**

### Estado

**CERRADO conceptualmente y contrastable con el diseño previsto.**

Mantener:

> **permite**

No sustituir por:

* mejora;
* incrementa;
* reduce;
* optimiza;
* supera.

---

# B7. MARCO TEÓRICO Y CONCEPTUAL

## B7.1 Decisión estructural

No se utilizarán ocho subtítulos independientes dentro del Plan.

Para conservar una estructura compacta, los conceptos se organizarán en **cuatro bloques conceptuales**.

Estos bloques orientan la futura redacción del apartado MARCO TEÓRICO, pero no implican necesariamente que el documento final deba mostrar una numeración interna extensa.

---

# B7.2 Bloque conceptual 1 — Información visual y documentación fotográfica en construcción

Agrupa:

* información visual;
* gestión de información visual como marco amplio;
* documentación fotográfica de obra.

### Función

Establecer:

```text
GESTIÓN DE INFORMACIÓN VISUAL
        ↓
DOCUMENTACIÓN FOTOGRÁFICA
COMO OBJETO CONCRETO
```

Debe evitarse convertir “gestión de información visual” en una variable cuantitativa única.

### Profundidad

**2–3 párrafos.**

---

# B7.3 Bloque conceptual 2 — Fotografía y panoramas 360°

Agrupa:

* fotografía panorámica;
* fotografía 360°;
* características relevantes;
* capacidades;
* limitaciones necesarias.

### Función

Explicar el papel tecnológico de 360° sin convertirlo en toda la contribución.

Debe quedar clara la diferencia:

```text
360°
APORTA COBERTURA / CONTEXTO VISUAL

PERO

NO GARANTIZA POR SÍ SOLA
ORGANIZACIÓN
+
RECUPERACIÓN
+
CONSULTA
```

### Profundidad

**Aproximadamente 2 párrafos.**

---

# B7.4 Bloque conceptual 3 — Contextualización y organización espacio-temporal del historial visual

Agrupa:

* contextualización espacial;
* contextualización temporal;
* organización;
* historial visual.

### Función

Construir la cadena:

```text
CAPTURA
        ↓
CONTEXTO ESPACIAL
+
CONTEXTO TEMPORAL
        ↓
ORGANIZACIÓN
        ↓
ACUMULACIÓN LONGITUDINAL
        ↓
HISTORIAL VISUAL
```

No es necesario convertir:

* espacio;
* tiempo;
* organización;
* historial;

en cuatro grandes secciones teóricas independientes dentro de un Plan compacto.

### Profundidad

**2–3 párrafos.**

---

# B7.5 Bloque conceptual 4 — Consulta y evaluación de información visual

Agrupa conceptualmente:

* acceso;
* navegación;
* recuperación;
* interpretación;
* consulta;
* resolución;
* evaluación.

### Función

Establecer que:

```text
ABRIR UNA FOTOGRAFÍA
≠
RESOLVER UNA CONSULTA
```

La consulta parte de una necesidad de información y termina en una respuesta.

Este bloque debe permitir comprender por qué la evaluación utiliza:

* tareas;
* respuestas;
* ground truth;
* corrección;
* tiempo.

Sin desarrollar todavía el instrumento.

### Profundidad

**2–3 párrafos.**

---

# B7.6 Contenidos que no se reintroducirán

No incluir como bloques teóricos:

* transformación digital;
* Industria 4.0;
* TIC genéricas;
* trabajo remoto;
* supervisión remota;
* Design Thinking;
* CBA.

Reality Capture podrá aparecer únicamente como ubicación conceptual breve cuando ayude a contextualizar 360°, sin convertirse en un bloque dominante.

---

# B7.7 Extensión objetivo del marco

**1.75–2.25 páginas.**

Aproximadamente:

* 8–10 párrafos;
* cuatro bloques conceptuales;
* definiciones estrictamente funcionales para la investigación.

---

# B8. METODOLOGÍA DE TRABAJO

## B8.1 Función

La metodología del nuevo Plan deberá ser más precisa que la versión aprobada en 2024, pero seguirá siendo una **metodología a nivel de Plan**, no el Capítulo III terminado.

Debe responder:

> **¿Cómo se ejecutará la investigación desde la identificación de necesidades hasta la contrastación de la hipótesis?**

---

# B8.2 Etapa 1 — Revisión bibliográfica y consolidación conceptual

Debe indicar que se revisará y utilizará bibliografía relacionada con:

* información visual;
* documentación fotográfica;
* fotografía 360°;
* contextualización espacial;
* contextualización temporal;
* organización de históricos;
* consulta;
* evaluación.

No desarrollar dentro del Plan:

* protocolo bibliométrico;
* estrategia exhaustiva de búsqueda;
* fichas individuales;
* matriz bibliográfica completa.

---

# B8.3 Etapa 2 — Identificación y caracterización de necesidades

Corresponde principalmente a OE1.

Debe explicar a nivel de procedimiento:

```text
CONSULTA A PROFESIONALES
        ↓
IDENTIFICACIÓN DE NECESIDADES
        ↓
CARACTERIZACIÓN
        ↓
CONTRASTE CON FAMILIAS INICIALES
        ↓
REQUISITOS PARA LA METODOLOGÍA
```

Debe permitir:

* confirmar;
* refinar;
* complementar;

las familias iniciales.

No incluir todavía:

* preguntas exactas;
* guía definitiva;
* tamaño final de participantes.

---

# B8.4 Etapa 3 — Diseño de la metodología

Corresponde a OE2.

Debe indicar que la metodología establecerá procedimientos y elementos para:

* captura;
* referencia espacial;
* contextualización temporal;
* organización;
* vinculación;
* conservación;
* consulta.

La metodología deberá permanecer conceptualmente independiente del software específico.

No convertir esta etapa en:

* desarrollo de aplicación;
* arquitectura SaaS;
* evaluación de Retool;
* diseño de base de datos como fin en sí mismo.

---

# B8.5 Etapa 4 — Selección y preparación del caso

Debe explicarse que se seleccionará:

> **un caso de construcción adecuado para la aplicación de la metodología**

con capacidad de producir un historial longitudinal.

No especificar todavía:

* proyecto;
* empresa;
* tipología;
* ubicación;
* fecha;
* número de puntos.

---

# B8.6 Etapa 5 — Aplicación y generación del historial visual

Debe describirse a nivel de procedimiento:

```text
REFERENCIA ESPACIAL
        ↓
PUNTOS / UBICACIONES
        ↓
SESIONES / RECORRIDOS
        ↓
CAPTURAS 360°
        ↓
TRAZABILIDAD TEMPORAL
        ↓
ORGANIZACIÓN
        ↓
HISTORIAL VISUAL
```

Puede mencionarse la aplicación prospectiva como ruta prevista si el caso seleccionado lo permite.

No desarrollar todavía:

* plano real;
* coordenadas;
* número exacto de puntos;
* periodicidad exacta;
* nomenclatura completa;
* marca de cámara;
* interfaz definitiva.

---

# B8.7 Etapa 6 — Preparación de la evaluación

Debe quedar clara la secuencia:

```text
HISTORIAL GENERADO
        ↓
INVENTARIO DE EVIDENCIA
        ↓
SELECCIÓN DE CONSULTAS PLAUSIBLES
        ↓
CONSTRUCCIÓN DE TAREAS VERIFICABLES
        ↓
DEFINICIÓN DE RESPUESTA DE REFERENCIA
ANTES DE LA EVALUACIÓN
        ↓
CRITERIOS DE CORRECCIÓN
```

Cada tarea deberá:

1. representar una necesidad plausible de información en construcción;
2. poder responderse con el historial disponible;
3. requerir interpretación de evidencia visual;
4. poseer una respuesta verificable definida previamente.

No diseñar todavía las tareas concretas.

---

# B8.8 Etapa 7 — Evaluación con profesionales

Debe indicar que los participantes:

1. utilizarán el historial visual;
2. realizarán tareas de consulta;
3. proporcionarán respuestas;
4. tendrán registrado el tiempo de resolución;
5. realizarán posteriormente una valoración complementaria.

No especificar todavía:

* número final de participantes;
* número final de tareas;
* duración exacta;
* cuestionario definitivo.

---

# B8.9 Etapa 8 — Análisis funcional y perceptual

## Evaluación funcional principal

Considerará:

* respuesta correcta/incorrecta;
* tasa de resolución correcta;
* resultados por tarea;
* resultados por familia;
* patrones entre participantes;
* tiempo de resolución.

## Evaluación perceptual complementaria

Considerará:

* facilidad de consulta;
* organización;
* utilidad;
* aplicabilidad.

La percepción no sustituirá la evidencia funcional.

---

# B8.10 Etapa 9 — Interpretación y discusión

Debe explicarse que los resultados serán:

* relacionados con los objetivos;
* utilizados para interpretar la hipótesis;
* contrastados conceptualmente con los antecedentes;
* discutidos dentro de los límites del caso y los participantes.

La interpretación podrá adoptar posteriormente formulaciones como:

* los resultados respaldan la hipótesis;
* los resultados la respaldan parcialmente;
* los resultados no proporcionan evidencia suficiente para respaldarla.

No establecer ahora porcentajes arbitrarios de éxito.

---

# B8.11 Contenido reservado para los Capítulos III y IV de la tesis

No desarrollar dentro del Plan:

* protocolo completo de captura;
* criterios exactos de selección de puntos;
* plano definitivo;
* periodicidad real;
* nomenclatura completa;
* modelo detallado de datos;
* arquitectura tecnológica;
* interfaz;
* tareas concretas;
* ground truth concreto;
* cuestionario completo;
* piloto completo;
* protocolo exacto de sesión;
* resultados;
* análisis estadístico final.

---

# B8.12 Extensión objetivo

**1.5–2.0 páginas.**

Aproximadamente:

* 7–9 párrafos breves;
* estructura secuencial;
* suficiente precisión para demostrar viabilidad;
* sin desarrollar el protocolo final.

---

# B9. ARQUITECTURA DE LA EVALUACIÓN DENTRO DEL PLAN

La evaluación deberá aparecer dentro de **METODOLOGÍA DE TRABAJO**.

No se convertirá en nueva sección institucional principal.

---

## B9.1 Variable principal

> **Resolución de consultas de información visual de construcción.**

Estado:

**CERRADO.**

---

# B9.2 Medida elemental

> **Respuesta correcta / incorrecta por tarea.**

Estado:

**CERRADO.**

---

# B9.3 Indicador principal

> **Tasa de resolución correcta.**

Conceptualmente:

```text
TRC =
consultas correctamente resueltas
/
consultas realizadas
× 100
```

Podrá analizarse posteriormente:

* globalmente;
* por participante;
* por tarea;
* por familia.

Estado:

**CERRADO.**

---

# B9.4 Medida secundaria

> **Tiempo de resolución por tarea.**

No denominar automáticamente al tiempo:

> eficiencia

hasta disponer de justificación conceptual suficiente.

Estado:

**CERRADO como medida secundaria.**

---

# B9.5 Percepción complementaria

Después de las tareas se recogerá valoración sobre:

* facilidad de consulta;
* organización;
* utilidad;
* aplicabilidad.

Estado:

**CERRADO en dimensiones generales / A NIVEL DE PROCEDIMIENTO en instrumento.**

---

# B9.6 Unidad de evaluación

> **Tarea de consulta concreta realizada mediante el historial visual.**

Cada tarea deberá tener:

* pregunta;
* evidencia visual;
* respuesta de referencia;
* criterios de corrección;
* variantes aceptables cuando correspondan.

---

# B9.7 Ground truth

Debe quedar explícito en el Plan que:

> **la respuesta de referencia se definirá antes de observar las respuestas de los participantes.**

Esto constituye una condición metodológica importante para evitar evaluaciones retrospectivamente acomodadas.

---

# B9.8 Diseño

> **No comparativo.**

No se contemplará:

* grupo control;
* baseline;
* pretest/postest;
* fotografía tradicional vs. 360°;
* carpetas convencionales vs. historial;
* escenario convencional;
* condición experimental comparativa.

---

# B9.9 Detalle que no debe incluirse todavía

No incorporar en el Plan:

* número exacto de tareas;
* número exacto de participantes;
* cuestionario completo;
* porcentaje de aprobación;
* umbral de éxito;
* hipótesis nula/alternativa clásica forzada;
* p-values comprometidos;
* prueba estadística definitiva.

---

# B10. ARQUITECTURA DEL CASO DE APLICACIÓN

## B10.1 Forma de referirse al caso

Mientras no se confirme el proyecto definitivo, el Plan podrá utilizar una formulación como:

> **caso de construcción seleccionado para la aplicación de la metodología**

o equivalente.

No deberá afirmar todavía:

* tipo de edificación;
* empresa;
* ubicación;
* fecha;
* número de puntos;
* número de recorridos.

---

# B10.2 Criterios mínimos del caso que sí pueden declararse

El caso deberá permitir, como mínimo:

1. acceso autorizado para realizar la documentación;
2. disponibilidad de una referencia espacial suficiente;
3. realización de capturas en diferentes momentos;
4. definición y seguimiento de puntos o ubicaciones;
5. generación de un historial con variación temporal;
6. condiciones logísticas y de seguridad compatibles con la captura;
7. existencia de evidencia visual suficiente para construir posteriormente consultas verificables.

---

# B10.3 Posible caso prospectivo

Existe actualmente la posibilidad de acceder a una obra nueva de aproximadamente un mes.

Esta constituye la ruta operativamente preferible si se confirma, porque permitiría:

```text
ANTES DEL INICIO
definir protocolo y referencias
        ↓
DURANTE LA OBRA
capturar longitudinalmente
        ↓
AL FINAL
conformar historial y evaluar
```

No debe convertirse todavía en una característica académica obligatoria del Plan hasta confirmar el caso.

---

# B10.4 Papel del caso histórico

El caso histórico disponible podrá mantenerse como:

* piloto de estructura;
* prueba de navegación;
* prueba de interfaz;
* ensayo interno de tareas;
* prueba del protocolo.

No debe confundirse con la evaluación final si se selecciona otro caso.

---

# B11. ÍNDICE TENTATIVO DE LA TESIS

## B11.1 Principio institucional

El Plan aprobado por la FIC utiliza un índice tentativo únicamente a nivel de macroestructura.

El nuevo Plan seguirá el mismo criterio.

No se desarrollarán dentro del índice del Plan:

* subcapítulos;
* numeración 1.1, 1.2, 2.1, etc.;
* desagregaciones internas de metodología;
* subapartados de evaluación.

El detalle interno de los capítulos se reservará para la futura tesis.

---

## B11.2 Macroestructura aprobada para el Plan

```text
RESUMEN

ABSTRACT

PRÓLOGO

LISTA DE TABLAS

LISTA DE FIGURAS

LISTA DE SÍMBOLOS Y SIGLAS

CAPÍTULO I: INTRODUCCIÓN

CAPÍTULO II: MARCO TEÓRICO Y CONCEPTUAL

CAPÍTULO III: DESARROLLO DE LA METODOLOGÍA DE DOCUMENTACIÓN FOTOGRÁFICA 360°

CAPÍTULO IV: APLICACIÓN Y EVALUACIÓN DE LA METODOLOGÍA

CAPÍTULO V: RESULTADOS Y DISCUSIÓN

CONCLUSIONES

RECOMENDACIONES

REFERENCIAS BIBLIOGRÁFICAS

ANEXOS
```

---

## B11.3 Estado de los títulos

### Cerrados estructuralmente

* CAPÍTULO I — INTRODUCCIÓN;
* CAPÍTULO II — MARCO TEÓRICO Y CONCEPTUAL;
* CONCLUSIONES;
* RECOMENDACIONES;
* REFERENCIAS BIBLIOGRÁFICAS;
* ANEXOS.

### Susceptibles de pulido editorial durante FASE C

* CAPÍTULO III;
* CAPÍTULO IV;
* CAPÍTULO V.

Cualquier ajuste futuro deberá conservar la lógica:

```text
CAPÍTULO III
DESARROLLO DE LA PROPUESTA

        ↓

CAPÍTULO IV
APLICACIÓN + EVALUACIÓN

        ↓

CAPÍTULO V
RESULTADOS + DISCUSIÓN
```

---

## B11.4 Contenido reservado para la tesis

La futura tesis podrá desarrollar posteriormente:

* subcapítulos;
* numeración detallada;
* componentes de metodología;
* caso;
* evaluación;
* resultados.

Eso no debe anticiparse dentro del índice tentativo del Plan.

---

# B12. CRONOGRAMA

## B12.1 Arquitectura temporal vigente

Debe retirarse completamente la lógica antigua:

```text
REVISIÓN
        ↓
DESARROLLO
        ↓
ENCUESTA PRE
        ↓
IMPLEMENTACIÓN
        ↓
ENCUESTA POST
```

El cronograma debe reflejar la arquitectura actual.

---

# B12.2 Secuencia completa de actividades

| Nº | Actividad                                                                 | Dependencia principal       |
| -: | ------------------------------------------------------------------------- | --------------------------- |
|  1 | Revisión y consolidación bibliográfica                                    | —                           |
|  2 | Identificación y caracterización de necesidades de información visual     | 1                           |
|  3 | Diseño y refinamiento de la metodología de documentación fotográfica 360° | 1–2                         |
|  4 | Preparación del protocolo de captura                                      | 3                           |
|  5 | Selección y preparación del caso de aplicación                            | Puede avanzar paralelamente |
|  6 | Aplicación de la metodología y captura longitudinal                       | 4–5                         |
|  7 | Organización y conformación del historial visual                          | 6, progresivamente          |
|  8 | Diseño y pilotaje de tareas de evaluación                                 | 2–3 y evidencia disponible  |
|  9 | Preparación de respuestas de referencia y protocolo de evaluación         | 7–8                         |
| 10 | Evaluación con profesionales                                              | 9                           |
| 11 | Análisis de resultados funcionales y perceptuales                         | 10                          |
| 12 | Discusión, conclusiones y redacción final                                 | 11                          |

---

# B12.3 Versión compacta recomendada para el Plan

Para evitar un cronograma excesivamente fragmentado, la tabla final podrá trabajar aproximadamente con nueve actividades:

```text
1. Revisión bibliográfica

2. Identificación y caracterización de necesidades

3. Diseño de la metodología y protocolo de captura

4. Selección y preparación del caso

5. Aplicación de la metodología y generación del historial visual

6. Preparación y pilotaje de la evaluación

7. Evaluación con profesionales

8. Análisis y discusión de resultados

9. Redacción de la tesis
```

---

# B12.4 Estado

**CERRADO en la secuencia lógica.**

**PROVISIONAL en la duración temporal de cada actividad.**

No inventar fechas antes de disponer del cronograma real de ejecución.

---

# B13. MAPA DE FUENTES PARA LA FUTURA REDACCIÓN

Los documentos de cierre del proyecto sirven como fuentes internas de decisión.

La futura redacción académica deberá volver, cuando corresponda, a las fuentes primarias.

| Sección del Plan                | Afirmación / función                           | Fuentes ya disponibles              | Fuentes/documentos a recuperar o verificar                                | Estado de trazabilidad          |
| ------------------------------- | ---------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------- | ------------------------------- |
| Portada / datos                 | Estructura FIC                                 | Plan aprobado 2024                  | Ninguno adicional para la arquitectura                                    | **ALTA**                        |
| Antecedentes                    | Documentación panorámica longitudinal temprana | F4-T06                              | Ficha/PDF Shih 2001 y PIDMS 2006                                          | **ALTA conceptual**             |
| Antecedentes                    | Línea 360° en construcción                     | D1 + F4-T06                         | Eiris y Shinde 2023                                                       | **ALTA**                        |
| Antecedentes                    | Consulta espacio-temporal                      | D1 + PhotoScope + F4-T06            | Wu 2009 si se requiere mayor detalle                                      | **MUY ALTA**                    |
| Antecedentes                    | Historial longitudinal 360° moderno            | F4-T06                              | Ficha/PDF Bahakim 2023                                                    | **MUY ALTA conceptual**         |
| Antecedentes                    | Contexto peruano contemporáneo                 | F4-T06                              | Ficha/PDF Erazo-Rondinel & Melgar                                         | **ALTA**                        |
| Antecedentes nacionales         | Guía 360° en Lima                              | Análisis nacional previo            | Ficha/PDF Vega Hurtado & Vidal                                            | **ALTA**                        |
| Antecedente nacional secundario | TIC/información aplicada                       | Plan 2024 + análisis previo         | Cruz Calcina si se decide conservar                                       | **MEDIA / NO ESENCIAL**         |
| Realidad problemática           | Crecimiento de archivos fotográficos           | PhotoScope + análisis conceptual    | Brilakis/Soibelman y fuentes ya identificadas                             | **ALTA**                        |
| Realidad problemática           | Recuperación e indexación                      | PhotoScope + D1                     | Fuentes primarias correspondientes                                        | **ALTA**                        |
| Realidad problemática           | Contextualización espacial/temporal            | D1                                  | PhotoScope, Brilakis, Bahakim                                             | **ALTA**                        |
| Realidad problemática           | Capacidades y límites de 360°                  | D1                                  | Eiris/Shinde                                                              | **ALTA**                        |
| Brecha                          | Intersección no localizada en corpus           | F4-T06                              | Verificación de referencias finales del corpus                            | **MUY ALTA**                    |
| Problema                        | Formulación candidata                          | Cierre de formulación               | Ninguna fuente adicional para preservar formulación                       | **CERRADA**                     |
| Objetivos                       | Arquitectura vigente                           | Cierre de formulación               | Ninguna                                                                   | **CERRADA**                     |
| Hipótesis                       | “Permite”                                      | Cierre de formulación               | Ninguna                                                                   | **CERRADA**                     |
| Marco conceptual                | Gestión de información visual                  | D1                                  | Fuentes primarias recogidas en D1                                         | **ALTA**                        |
| Marco conceptual                | Documentación fotográfica                      | D1 + análisis conceptual            | PhotoScope / Brilakis / fuentes correspondientes                          | **ALTA**                        |
| Marco conceptual                | Contextualización                              | D1                                  | PhotoScope / Brilakis / Bahakim                                           | **ALTA**                        |
| Marco conceptual                | Consulta                                       | D1 + PhotoScope                     | Wu / PhotoScope                                                           | **MUY ALTA**                    |
| Marco conceptual                | Familias iniciales                             | D1 + PhotoScope                     | OE1 producirá evidencia propia posterior                                  | **PROVISIONAL deliberadamente** |
| Metodología                     | Diseño aplicado no comparativo                 | Cierre de formulación               | Fuente metodológica solo si se utiliza una denominación formal específica | **ALTA**                        |
| Evaluación                      | Tareas y respuestas verificables               | Cierre + PhotoScope + F4-T06        | Ficha detallada Wu y antecedentes task-based ya analizados                | **ALTA**                        |
| Caso                            | Criterios mínimos                              | Cierre + Plan Maestro               | Datos del proyecto cuando se confirme                                     | **PROVISIONAL**                 |
| Cronograma                      | Secuencia de ejecución                         | Plan Maestro + arquitectura vigente | Ninguna fuente académica adicional                                        | **ALTA**                        |
| Referencias                     | Corpus final                                   | Matriz y fichas existentes          | Consolidación bibliográfica                                               | **PARCIAL hasta FASE C**        |

---

# B13.1 Documentos del proyecto prioritarios para FASE C

Antes o durante la redacción deberán utilizarse especialmente:

* `CIERRE_D1_DEFINICION_CONCEPTUAL_TESIS_360.md`;
* `CIERRE_F4_T06_BRECHA_INVESTIGACION_TESIS_360.md`;
* fichas de PhotoScope / Wu;
* ficha de Bahakim;
* ficha de Eiris;
* ficha de Shinde;
* fichas de Shih / PIDMS;
* análisis de Erazo-Rondinel & Melgar;
* análisis de Vega Hurtado & Vidal;
* matriz bibliográfica;
* informe conceptual sobre información visual / workflow 360° cuando resulte útil.

---

# B13.2 Documento Maestro

El archivo:

`DOCUMENTO_MAESTRO_TESIS_360_GESTION_INFORMACION_VISUAL.md`

no constituye un prerrequisito obligatorio para iniciar FASE C.

La prioridad será utilizar:

```text
CIERRES ACADÉMICOS
+
FICHAS
+
PDFS PRIMARIOS
+
MATRIZ BIBLIOGRÁFICA
```

El Documento Maestro solo deberá recuperarse si se identifica una afirmación concreta cuya trazabilidad no pueda reconstruirse mediante los documentos anteriores.

---

# B14. EXTENSIÓN OBJETIVO DEL NUEVO PLAN

## B14.1 Presupuesto general

La extensión objetivo será:

> **aproximadamente 12–14 páginas físicas en total**

incluyendo:

* portada;
* contenido académico;
* cronograma;
* referencias;
* firmas.

La extensión podrá variar ligeramente según la maquetación, sin convertir el número de páginas en un requisito rígido.

---

# B14.2 Justificación

El Plan aprobado de 2024 tenía aproximadamente diez páginas.

El nuevo documento puede ser algo mayor porque necesita:

1. antecedentes más próximos y académicamente mejor articulados;
2. una transición explícita hacia la brecha;
3. una problemática focalizada en consulta de información visual;
4. una metodología más observable;
5. una explicación mínima de tareas verificables y ground truth;
6. separación entre desempeño funcional y percepción.

No existe justificación para convertirlo en un documento de 20–30 páginas.

---

# B14.3 Presupuesto por sección

| Sección                                   | Extensión objetivo |
| ----------------------------------------- | -----------------: |
| Portada                                   |           1.0 pág. |
| Datos del Plan                            |       0.4–0.5 pág. |
| Antecedentes referenciales                |      2.0–2.5 págs. |
| Planteamiento de la realidad problemática |    1.25–1.75 págs. |
| Problema general                          |     0.15–0.20 pág. |
| Objetivos                                 |       0.5–0.7 pág. |
| Hipótesis                                 |     0.15–0.25 pág. |
| Marco teórico                             |    1.75–2.25 págs. |
| Índice tentativo                          |       0.4–0.6 pág. |
| Metodología de trabajo                    |      1.5–2.0 págs. |
| Cronograma                                |       0.5–0.7 pág. |
| Referencias                               |      1.5–2.0 págs. |
| Firmas                                    |          ~0.3 pág. |
| **TOTAL APROXIMADO**                      |    **12–14 págs.** |

---

# B15. MATRIZ MAESTRA DE ARQUITECTURA

Esta matriz constituye el plano principal que deberá utilizarse durante FASE C.

| Sección                                          | Función                                  | Contenido principal                                                                                | Fuentes                            | Estado                                            |       Extensión | Qué NO incluir todavía                                           |
| ------------------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------- | --------------: | ---------------------------------------------------------------- |
| **1. Portada**                                   | Identificación institucional             | UNI, FIC, Plan de Tesis, título, tesista, asesor, lugar y año                                      | Plan aprobado 2024                 | **PROVISIONAL** por título/asesor                 |          1 pág. | Título o asesor no confirmados                                   |
| **2. Datos del Plan**                            | Datos administrativos                    | Tema, tesista, código, asesor, departamento                                                        | Plan aprobado 2024                 | **PROVISIONAL parcialmente**                      |    0.4–0.5 pág. | Datos no confirmados                                             |
| **3. Antecedentes referenciales**                | Posicionar la investigación              | Shih/PIDMS → línea 360° → PhotoScope → Bahakim/Erazo → antecedentes peruanos → brecha              | F4-T06 + D1 + fichas/PDF           | **CERRADO en arquitectura**                       |     2–2.5 págs. | Lista de resúmenes, falsa novedad                                |
| **4. Planteamiento de la realidad problemática** | Construir problema práctico              | información visual → fotografías → acumulación → contexto → historial → consulta → problema        | D1 + PhotoScope + retrieval + 360° | **CERRADO en lógica**                             | 1.25–1.75 págs. | Comunicación como variable, eficacia asumida                     |
| **5. Problema general**                          | Formular pregunta central                | Formulación candidata vigente                                                                      | Cierre de formulación              | **CERRADO conceptualmente / edición pendiente**   |       ~0.2 pág. | Mejora, comparación, causalidad                                  |
| **6. Objetivos**                                 | Convertir problema en trabajo ejecutable | OG + OE1 + OE2 + OE3 vigentes                                                                      | Cierre de formulación              | **CERRADO conceptualmente**                       |    0.5–0.7 pág. | OE adicionales por actividades                                   |
| **7. Hipótesis**                                 | Proposición contrastable                 | Hipótesis vigente con “permite”                                                                    | Cierre de formulación              | **CERRADO conceptualmente**                       |       ~0.2 pág. | Mejora, optimiza, reduce, superioridad                           |
| **8. Marco teórico**                             | Definir conceptos necesarios             | información/documentación; 360°; contextualización/historial; consulta/evaluación                  | D1 + fuentes primarias             | **CERRADO en arquitectura**                       | 1.75–2.25 págs. | Transformación digital, Industria 4.0, trabajo remoto, DT, CBA   |
| **9. Índice tentativo**                          | Mostrar macroestructura de la tesis      | Cinco capítulos + secciones finales institucionales                                                | Plan aprobado + formulación actual | **CERRADO a nivel macro**                         |    0.4–0.6 pág. | Subcapítulos, numeración 1.1/2.1/etc.                            |
| **10. Metodología de trabajo**                   | Explicar ejecución                       | literatura → necesidades → diseño → caso → aplicación → historial → tareas → evaluación → análisis | Cierre + Plan Maestro              | **A NIVEL DE PROCEDIMIENTO**                      |     1.5–2 págs. | Instrumentos completos, protocolo exhaustivo                     |
| **Evaluación dentro de metodología**             | Demostrar contrastabilidad               | variable, correcto/incorrecto, TRC, tiempo, percepción, ground truth, no comparativo               | Cierre + PhotoScope + F4-T06       | **CERRADO en lógica / procedimiento en detalles** | Incluida arriba | n final, tareas finales, umbrales, prueba estadística definitiva |
| **Caso dentro de metodología**                   | Materializar propuesta                   | criterios mínimos y aplicación prospectiva cuando corresponda                                      | Cierre + Plan Maestro              | **PROVISIONAL**                                   | Incluida arriba | Empresa, tipo, lugar, puntos no confirmados                      |
| **11. Cronograma**                               | Mostrar viabilidad                       | 8–9 actividades desde revisión hasta redacción                                                     | Arquitectura metodológica          | **CERRADO en secuencia / PROVISIONAL en tiempos** |    0.5–0.7 pág. | Fechas inventadas, pretest/postest                               |
| **12. Referencias**                              | Sustentar afirmaciones                   | fuentes primarias, recientes, seminales y nacionales                                               | Corpus del proyecto                | **A CONSOLIDAR EN FASE C**                        |     1.5–2 págs. | Bibliografía heredada sin función                                |
| **13. Firmas**                                   | Cierre institucional                     | Tesista y asesor                                                                                   | Plan aprobado 2024                 | **PROVISIONAL parcialmente**                      |       ~0.3 pág. | Datos no confirmados                                             |

---

# B16. MATRIZ DE NIVEL DE CIERRE

## B16.1 CERRADO

Deben aparecer definidos en el nuevo Plan:

* gestión de información visual como marco amplio;
* documentación fotográfica de obra como objeto;
* metodología de documentación fotográfica 360° estructurada espacial y temporalmente como propuesta;
* historial visual como producto;
* resolución de consultas como función principal evaluada;
* diseño no comparativo;
* variable principal;
* respuesta correcta/incorrecta;
* tasa de resolución correcta;
* tiempo como medida secundaria;
* percepción como complemento;
* estructura OG + tres OE;
* hipótesis con “permite”;
* narrativa general de antecedentes;
* cadena de la realidad problemática;
* cuatro bloques conceptuales del marco;
* macroestructura de cinco capítulos;
* secuencia lógica del cronograma.

---

# B16.2 PROVISIONAL

Pueden permanecer expresamente abiertos:

* título definitivo;
* asesor;
* proyecto;
* empresa;
* tipología;
* ubicación;
* fecha;
* número de participantes;
* perfiles definitivos;
* número de tareas;
* distribución final por familias;
* puntos;
* recorridos;
* periodicidad;
* software;
* duración exacta del trabajo de campo;
* redacción final de los nombres de capítulos III, IV y V.

---

# B16.3 A NIVEL DE PROCEDIMIENTO

Deben explicarse sin presentar todavía su versión final:

* identificación de necesidades;
* caracterización;
* diseño de metodología;
* selección de caso;
* aplicación;
* captura;
* contextualización;
* organización;
* generación del historial;
* construcción de tareas;
* establecimiento de ground truth;
* evaluación;
* percepción;
* análisis;
* interpretación.

---

# B16.4 RESERVADO PARA TESIS

No debe desarrollarse todavía:

* instrumento final de OE1;
* preguntas exactas de consulta;
* ground truth concreto;
* criterios completos por tarea;
* protocolo completo de captura;
* protocolo exacto de sesión;
* número definitivo de participantes;
* plano final;
* puntos reales;
* fechas reales;
* dataset;
* arquitectura completa del sistema;
* interfaz final;
* resultados;
* tablas;
* gráficos;
* pruebas estadísticas finales;
* discusión empírica;
* limitaciones observadas;
* conclusiones finales;
* subcapítulos detallados del índice.

---

# B17. CONTROL FINAL DE CONSISTENCIA

## B17.1 Problema ↔ Objetivo general

**CONSISTENTE**

El problema pregunta si el historial visual permite resolver consultas concretas.

El objetivo general propone desarrollar la metodología, aplicarla y evaluar precisamente esa resolución.

---

# B17.2 Objetivo general ↔ OE1 / OE2 / OE3

**CONSISTENTE**

```text
OE1
¿QUÉ NECESIDADES DE CONSULTA EXISTEN?
        ↓
OE2
¿CÓMO DEBE DISEÑARSE LA METODOLOGÍA?
        ↓
OE3
¿QUÉ OCURRE AL APLICARLA Y
UTILIZAR EL HISTORIAL PARA CONSULTAR?
```

La aplicación no requiere convertirse en un cuarto objetivo.

---

# B17.3 Hipótesis ↔ Evaluación

**CONSISTENTE**

```text
“PERMITE RESOLVER”
        ↓
TAREA
        ↓
RESPUESTA DEL PARTICIPANTE
        ↓
RESPUESTA DE REFERENCIA
        ↓
CORRECTA / INCORRECTA
        ↓
TASA DE RESOLUCIÓN CORRECTA
```

Tiempo y percepción complementan el análisis.

---

# B17.4 OE1 ↔ Metodología

**CONSISTENTE**

OE1 precede conceptualmente al cierre definitivo de la metodología.

Las familias iniciales:

* espacial;
* temporal;
* estado/evolución;

funcionan como categorías preliminares y no como resultado obligatorio.

---

# B17.5 OE2 ↔ Metodología

**CONSISTENTE**

OE2 se materializa mediante procedimientos para:

* captura;
* contextualización;
* organización;
* consulta.

No existe necesidad de incorporar desarrollo de software como objetivo independiente.

---

# B17.6 OE3 ↔ Caso y evaluación

**CONSISTENTE**

OE3 integra:

```text
APLICACIÓN
        ↓
HISTORIAL
        ↓
TAREAS
        ↓
EVALUACIÓN FUNCIONAL
        +
PERCEPCIÓN
```

---

# B17.7 Evaluación ↔ Diseño no comparativo

**CONSISTENTE**

La arquitectura no promete:

* mejora;
* impacto causal;
* superioridad;
* reducción de tiempo frente a otra condición;
* comparación con fotografía tradicional;
* pretest/postest.

Por tanto, no requiere un escenario convencional.

---

# B17.8 Metodología ↔ Índice tentativo

**CONSISTENTE**

La macroestructura permite posteriormente distribuir el trabajo así:

```text
CAPÍTULO III
DESARROLLO DE LA METODOLOGÍA

        ↓

CAPÍTULO IV
APLICACIÓN + EVALUACIÓN

        ↓

CAPÍTULO V
RESULTADOS + DISCUSIÓN
```

Sin necesidad de anticipar subcapítulos en el Plan.

---

# B17.9 Cronograma ↔ Metodología

**CONSISTENTE**

Cada actividad del cronograma corresponde a una etapa real de la investigación.

No existen actividades heredadas del diseño comparativo.

---

# B17.10 Control de promesas innecesarias

La arquitectura no promete:

* Design Thinking;
* CBA;
* IA;
* computer vision;
* BIM obligatorio;
* SaaS;
* desarrollo complejo de software;
* comparación experimental;
* pretest/postest;
* estadística inferencial obligatoria;
* mejora de comunicación;
* edificio comercial;
* ubicación específica;
* muestra cerrada prematuramente.

---

# B18. ARQUITECTURA NUEVO PLAN DE TESIS 360° — V1

## Diagnóstico

> **LISTA PARA FASE C**

La arquitectura institucional, académica, metodológica y editorial del nuevo Plan está suficientemente definida.

La futura redacción deberá utilizar:

```text
FORMATO FIC DEL PLAN APROBADO 2024
        +
FORMULACIÓN ACADÉMICA VIGENTE 2026
        +
CIERRE D1
        +
CIERRE F4-T06
        +
FICHAS Y FUENTES PRIMARIAS
        +
ESTA ARQUITECTURA
```

como base de trabajo.

No existe una decisión estructural adicional que deba resolverse antes de iniciar la redacción del Borrador Integral V1.

Los pendientes actualmente abiertos corresponden principalmente a:

* información todavía no confirmada del caso;
* detalles operacionales de instrumentos;
* participantes;
* tareas;
* protocolo;
* aspectos editoriales menores.

Estos elementos no invalidan la arquitectura.

---

# 19. ESTADO DE F11-T02

## Tarea

**F11-T02 — Mapear la investigación al formato del nuevo Plan.**

## Estado académico

> **CUMPLIDA**

La FASE B ha definido:

* estructura institucional exacta;
* función de cada sección;
* contenido que deberá desarrollar;
* contenido que deberá excluir;
* narrativa de antecedentes;
* arquitectura de realidad problemática;
* posición de problema, objetivos e hipótesis;
* estructura compacta del marco teórico;
* metodología de trabajo;
* evaluación;
* tratamiento del caso no confirmado;
* macroíndice de cinco capítulos;
* cronograma;
* mapa de fuentes;
* presupuesto de extensión;
* matriz maestra de redacción;
* nivel de cierre de cada componente;
* consistencia transversal.

Por tanto:

> **F11-T02 puede considerarse académicamente cumplida.**

---

# 20. SIGUIENTE TRABAJO

El siguiente trabajo del proyecto es:

> **FASE C — Redacción del NUEVO PLAN DE TESIS 360° — BORRADOR INTEGRAL V1**

FASE C deberá redactar el documento utilizando esta arquitectura como plano y sin reabrir decisiones académicas ya cerradas salvo que durante la redacción aparezca una contradicción real y trazable.

**FASE C todavía no se inicia mediante este documento.**

---

**Fin — `ARQUITECTURA_NUEVO_PLAN_TESIS_360_V1.md`**
