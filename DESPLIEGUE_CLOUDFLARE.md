# Despliegue en Cloudflare Pages

El sitio se genera completamente como archivos estáticos. No requiere adaptador de Cloudflare, Pages Functions, base de datos ni variables secretas.

## Antes de conectar Cloudflare

1. Crear el repositorio remoto en GitHub.
2. Añadirlo como `origin` y subir la rama `main`.
3. Comprobar que `npm test` termina correctamente.

## Configuración de Pages

En **Workers & Pages → Create application → Pages → Import an existing Git repository**, usar:

| Opción | Valor |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | `24` |

No configurar el adaptador `@astrojs/cloudflare`: solo sería necesario para renderizado en servidor o funciones que este proyecto no utiliza.

Cloudflare reconstruirá producción con cada push a `main`. Las ramas y pull requests pueden utilizarse como previews antes de publicar cambios.

## Verificación posterior

- Abrir `/`, `/roadmap`, `/tareas`, `/decisiones`, `/log`, `/bibliografia` y `/hitos`.
- Probar filtros en tareas y bibliografía.
- Confirmar que no se publicaron PDFs ni datos sensibles.
- Revisar el enlace de la última entrada del log.

