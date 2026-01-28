# 04 - Gestión de Contenido
Toda la web está diseñada para que crezca sin que tengas que tocar código de programación.
## 1. Artículos del Blog (.md)
Cada artículo es un archivo de texto en la carpeta `content/blog/`.
### Plantilla completa de un artículo:
```markdown
---
title: "Título de tu artículo"
date: "2026-01-22"
excerpt: "Resumen corto que aparece en la tarjeta."
slug: "mi-articulo-slug"
coverImage: "/blog/nombre-de-imagen.jpg"
tags: ["tecnologia", "educacion"]
---
Contenido en Markdown aquí...
```
### ¿Para qué sirve cada campo?
- **title**: El nombre principal del artículo.
- **date**: La fecha. Determina el orden: la más reciente aparecerá primero y destacada en la Home.
- **excerpt**: Una breve intro para "tentar" al lector.
- **slug**: **¡Vital!** Es el nombre que aparecerá en la dirección web (ej: `eduardo.net.ar/blog/mi-articulo-slug`). Debe ser único, sin espacios y preferiblemente sin tildes ni eñes.
- **coverImage**: La imagen principal. Sube tu imagen a `public/blog/` y pon aquí la ruta que empieza con `/blog/`.
- **tags**: Palabras clave para el buscador y el sistema de filtrado.
>¿Por qué corchetes [], comas , y comillas "?
>Corchetes []: Indican que es una lista. Esto permite que el blog sepa que son varias palabras separadas y no una sola frase larga.
>Comillas ": Protegen el texto. Si usas una etiqueta con espacios o caracteres especiales, las comillas aseguran que el sistema no se confunda.
>Comas ,: Separan un elemento de otro.

## 2. Gestión de Boletines (Newsletter)
Los boletines no son archivos sueltos, sino que se gestionan desde el archivo central de configuración.
1. Abre el archivo `lib/site-config.ts`.
2. Busca la sección `latestNewsletter`.
3. Actualiza el `title` con el número de boletín y el `url` con el enlace directo (generalmente de Notion).
4. Guarda y sube el cambio. La Home se actualizará automáticamente con el nuevo link.
## 3. Próximos Cursos y Workshops
Se gestionan en `content/workshops/`. El sistema es inteligente:
- Si la fecha del workshop es **futura**, aparecerá en la sección "Próximos Talleres" de la Home.
- Si la fecha ya **pasó**, el sistema lo moverá automáticamente a la sección de "Workshops Pasados".
### Estructura de un Workshop:
```markdown
---
title: "Nombre del Curso"
date: "2026-02-06"
flyer: "/workshop/nombre_imagen.jpg"
description: "Breve resumen de lo que se va a aprender."
---
```
*Las imágenes de los flyers deben subirse a `public/workshop/`.*
## 4. Gestión de Fotos y Etiquetas
- **Galería**: Sube fotos a `public/photos/` y corre `npm run generate-photos`.
- **Diccionario**: Corre `npm run generate-tags` para actualizar tu lista de etiquetas en `12a- Tag-diccionarioYYYY-MM-DD.md`.
