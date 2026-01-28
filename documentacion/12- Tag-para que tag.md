# Creating Tag Dictionary Script
I've created the script to generate the tag dictionary. Now I'm adding it to the project's scripts and running it for the first time.详情
## Files Edited
- package.json
- generate-tag-list.mjs
- Progress Updates
1. Creating scripts/generate-tag-list.mjs详情
2. Adding generate-tags script to package.json and running it详情
## Me podes decir que debo correr para ver el diccionario
Para actualizar y ver tu diccionario de etiquetas, tienes dos pasos:
1. Para actualizarlo (Generar la lista nueva)
Cada vez que agregues un artículo o una foto nueva con etiquetas, debes correr este comando en tu terminal para que el diccionario se ponga al día:
`npm run generate-tags`
2. Para verlo
El comando anterior creará o actualizará un archivo de texto. Para ver el diccionario real con la lista de etiquetas, solo tienes que abrir este archivo en tu editor:
`documentacion/DICCIONARIO_ETIQUETAS.md`
# ¿Cómo funciona? El script escanea automáticamente:
Tus artículos en content/blog/
Tus workshops en content/workshops/
Tus fotos en public/photos/ (leyendo sus metadatos internos)
Y te genera una tabla bonita indicando exactamente qué etiquetas estás usando y en qué secciones aparecen, para que siempre sepas si debes usar "tecnologia" o "innovacion", por ejemplo.
# Finalidad a futuro (Para qué sirven)
Aunque ahora solo se muestran visualmente, cargar etiquetas tiene tres propósitos fundamentales para el crecimiento de tu blog:
## 1
Filtrado inteligente: Pronto podremos añadir una función donde, al hacer clic en una etiqueta (ej: #tecnologia), el blog oculte todo lo demás y solo te muestre las fotos y artículos de ese tema.
SEO (Buscadores): Google utiliza estas palabras clave para entender mejor de qué trata tu sitio y mostrarte a personas que busquen esos temas específicos.
Relación de contenido: Permitirá que, al final de un artículo, el blog te sugiera: "Escritos relacionados" o "Fotos relacionadas" basándose en etiquetas comunes.
## 2
Cómo agregarlas en los Artículos (Markdown)
En los archivos de texto (.md), las etiquetas se agregan en la parte superior (el frontmatter).
Reglas importantes:
NO hace falta el #: El código del blog ya está preparado para ponerle el símbolo # automáticamente cuando lo muestra. En el archivo, pon solo la palabra.
Formato de lista: Se recomienda ponerlas entre corchetes [] Indican que es una lista, separadas por comas,  separan una etiqueta de otra, 
y separas con Comillas ": Protegen el texto. Si usas una etiqueta con espacios o caracteres especiales, las comillas aseguran que el sistema no se confunda.

Ejemplo correcto:
markdown
---
title: "Mi gran artículo"
date: "2024-05-15"
excerpt: "Una breve descripción..."
tags: ["tecnologia", "aprendizaje", "ia"]
---
## 3
Diferencia entre Fotos y Artículos
En Fotos: Si usas el script adaptar_blog.sh, él te pedirá las etiquetas y las guardará "dentro" de la foto (metadatos).
En Artículos: Debes escribirlas manualmente en el archivo 
.md.
**Tip Pro:** Intenta usar siempre las mismas palabras (ej: siempre "tecnologia" y no mezclar con "tech") para que el sistema de filtrado funcione perfecto en el futuro.
