# BlueForce

App estatica para practicar certificaciones Salesforce con feedback inmediato y progreso local por certificacion.

## URLs publicas

- Home: `/`
- Certificaciones: `/certifications/ux-designer`, `/certifications/platform-administrator`, `/certifications/business-analyst`
- Los archivos fisicos siguen siendo `.html`, pero `.htaccess` redirige las URLs con `.html` a sus versiones limpias.

## Archivos principales

- `index.html`: homepage con certificaciones disponibles y resumen de progreso.
- `certifications/*.html`: paginas independientes para cada certificacion. Las URLs publicas se sirven sin `.html` mediante `.htaccess`.
- `assets/data/certifications.js`: banco normalizado de certificaciones y preguntas.
- `assets/js/app.js`: motor compartido de practica, filtros, bookmarks, review de errores y localStorage.
- `assets/css/styles.css`: estilos compartidos.
- `tools/extract-certifications.mjs`: extractor que convierte los HTML originales al formato comun.

## Agregar una certificacion

1. Copia el nuevo HTML de study lab en la raiz del proyecto.
2. Agrega su entrada en `sourceFiles` y `metadata` dentro de `tools/extract-certifications.mjs`.
3. Ejecuta:

```bash
node tools/extract-certifications.mjs
```

4. Crea una pagina en `certifications/nueva-certificacion.html` usando una de las paginas actuales como base y cambiando `data-certification`. En `metadata.path`, usa la URL limpia, por ejemplo `certifications/nueva-certificacion`.

El progreso queda guardado en `localStorage`, separado por `id` de certificacion.
