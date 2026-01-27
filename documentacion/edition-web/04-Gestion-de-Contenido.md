# 04 - Gestión de Contenido

Toda la web está diseñada para que crezca sin que tengas que tocar código de programación.

## 1. Artículos del Blog (.md)

Cada artículo es un archivo de texto en la carpeta `content/blog/`.

### Plantilla de un artículo:
```markdown
---
title: "Título de tu artículo"
date: "2026-01-22"
excerpt: "Resumen corto que aparece en la tarjeta."
tags: ["tecnologia", "educacion"]
---
Contenido en Markdown aquí...
```

> [!NOTE]
> El sistema calcula automáticamente el tiempo de lectura y ordena los posts por fecha. El más reciente siempre aparece destacado en la Home.

## 2. Gestión de Fotos

### Para la Galería:
1. Sube las fotos a `public/photos/`.
2. Corre el comando: `npm run generate-photos`.
3. ¡Listo! La galería se actualiza sola con las nuevas imágenes y sus fechas.

### Para los Artículos:
Sube la imagen a `public/blog/` y ponla en el encabezado del `.md` como `coverImage: "/blog/nombre.jpg"`.

## 3. Diccionario de Etiquetas
Para mantener el orden con las etiquetas (#tecnología, #ia, etc.), usa:
```bash
npm run generate-tags
```
Esto actualiza el archivo `documentacion/DICCIONARIO_ETIQUETAS.md` con todo lo que has usado hasta ahora.

## 4. Workshops (Talleres)
Funcionan igual que el blog: Crea un `.md` en `content/workshops/`. La web mostrará automáticamente el próximo evento y los pasados en sus respectivas secciones.
