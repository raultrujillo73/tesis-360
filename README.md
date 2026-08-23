# Tesis 360° — seguimiento

Repositorio de trabajo y sitio estático para dar continuidad a la tesis sobre gestión de información visual mediante documentación fotográfica 360°.

## Consulta rápida

- Estado actual: `seguimiento/ESTADO_ACTUAL.md`
- Protocolo para agentes: `AGENTS.md`
- Plan completo: `PLAN_MAESTRO_TRABAJO_TESIS_360.md`
- Roadmap operativo: `seguimiento/fases/`
- Bibliografía: `bibliografia/fuentes/`

## Desarrollo local

```bash
npm install
npm run dev
```

Validación completa:

```bash
npm test
```

## Flujo cotidiano

1. Edita el estado de la tarea en `seguimiento/fases/`.
2. Actualiza `seguimiento/ESTADO_ACTUAL.md` si cambia la fase, próxima tarea o bloqueo.
3. Añade una entrada en `seguimiento/log/` para una sesión relevante.
4. Registra decisiones en `seguimiento/decisiones/` y fuentes en `bibliografia/fuentes/`.
5. Ejecuta `npm test`, haz commit y sube los cambios.

Si el avance llega como un informe generado en ChatGPT, guárdalo primero en `actualizaciones/YYYY/` y pide al agente que lea `AGENTS.md` y lo procese.

## Cloudflare Pages

Configurar el repositorio con:

- rama de producción: `main`;
- comando de compilación: `npm run build`;
- directorio de salida: `dist`;
- versión de Node: 24.

Cada `push` a `main` reconstruirá el sitio. No se requieren base de datos, funciones, adaptador SSR ni variables secretas.

La guía paso a paso se encuentra en `DESPLIEGUE_CLOUDFLARE.md`.

## Privacidad

Los PDFs con restricciones se guardan fuera del repositorio o, solo localmente, en `bibliografia/archivos-locales/`. Los datos personales deben permanecer fuera del repositorio público.
