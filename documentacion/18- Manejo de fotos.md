Para evitar que las fotos se vean recortadas en el futuro (especialmente si preferís usar el modo por defecto object-cover que llena todo el espacio), estas son las recomendaciones técnicas basadas en el diseño actual de tu blog:

1. Relación de Aspecto (Aspect Ratio)
La mayoría de los contenedores en tu web (especialmente en la página del artículo individual) utilizan una relación de 16:9 (formato horizontal panorámico).

Proporción ideal: 16:9.
Resolución recomendada: 1920 x 1080 píxeles o superior.
2. Composición de la Imagen (Zona de Seguridad)
Incluso con la proporción correcta, el diseño es responsivo (cambia de forma según el tamaño de la pantalla). En la página de inicio, el artículo destacado puede estirarse o encogerse dependiendo de cuánto texto haya al lado.

Regla de oro: Mantené el sujeto principal del "asunto" de la foto en el centro.
Evitá poner detalles importantes (como caras o texto) muy cerca de los bordes, ya que en dispositivos móviles o pantallas muy anchas, esos bordes son lo primero que se recorta.
3. Resumen de condiciones para "Foto Perfecta":
Condición	Recomendación
Formato	Horizontal (Paisaje)
Relación	16:9
Sujeto	Centrado
Calidad	Alta (mínimo 1200px de ancho)
[!TIP] Si alguna vez tenés una foto que es esencialmente vertical (como un retrato) o cuadrada y no querés que se recorte nada, podés seguir usando la opción que agregamos hoy: simplemente añadí imageFit: "contain" en el archivo del post y el sistema se encargará de mostrarla completa sin importar su forma.




Exactamente como sospechabas, el sistema utiliza la fecha para determinar cuál es el artículo más reciente, pero hay un detalle importante que debés tener en cuenta: el sistema prioriza la fecha definida dentro del archivo, no el nombre del archivo en sí.

Cómo se determina el orden:
En el archivo 
blog.ts
, el código hace lo siguiente:

Lee todos los archivos de la carpeta content/blog.
Extrae el campo date del contenido (el texto entre las líneas ---).
Ordena la lista de mayor a menor basándose estrictamente en esa fecha.
Instrucciones para crear una nueva nota "Última":
Para que una nota aparezca como la más reciente en la home, debés asegurarte de cumplir con lo siguiente:

El campo date en el Frontmatter: Es lo más importante. Debe ser la fecha más reciente en formato YYYY-MM-DD.
yaml
---
title: "Mi Nueva Nota"
date: "2026-01-21"  <-- Esta fecha debe ser mayor a las anteriores
...
---
Nombre del archivo: Por convención y orden personal (aunque el código no lo use para ordenar), te recomiendo seguir el formato que venís usando: YYYY-MM-DD_titulo-corto.md.
El Slug: Recordá que el slug que definas adentro será la dirección web. Evitá usar espacios y extensiones .md ahí.
[!NOTE] No importa el nombre que le pongas al archivo físico, si adentro escribís una fecha del año pasado, el sistema la pondrá al final de la lista. Siempre mandará la que tenga la fecha date más actual en el encabezado.


Las etiquetas se agregan en la parte superior de cada archivo 
.md
, en la sección llamada Frontmatter (el bloque de texto que está entre las líneas ---).

Debés añadir una línea que empiece con tags: seguida de la lista de etiquetas encerradas en corchetes [] y separadas por comas.

Aquí tenés el ejemplo exacto de cómo debe verse:

yaml
---
title: "Título de tu nota"
date: "2026-01-20"
excerpt: "Un breve resumen de la nota..."
slug: "nombre-de-la-url"
coverImage: "/ruta/a/la/foto.png"
tags: ["tecnología", "IA", "reflexión"]  <-- AQUÍ ES DONDE SE AGREGAN
---
Aquí empieza el contenido de tu nota...
Algunos detalles a tener en cuenta:
Formato: Las etiquetas deben ir entre comillas y separadas por comas dentro de los corchetes.
Sin el símbolo #: No hace falta poner el # en el archivo; el sistema lo agregará automáticamente cuando veas la página web.
Múltiples etiquetas: Podés poner las que quieras, por ejemplo: tags: ["personal", "viajes", "foto"].
Si no querés etiquetas: Simplemente podés omitir la línea tags: o dejarla vacía como tags: [], y no aparecerá nada en la web.


Para implementar la búsqueda o filtrado por etiquetas en tu blog, podrías seguir estos pasos conceptuales:

1. Definir la Estructura de la URL
Tienes dos opciones principales:

Query Params: /blog?tag=tecnologia (Más flexible para múltiples filtros).
Rutas Dinámicas: /blog/tag/tecnologia (Generalmente mejor para SEO).
2. Modificar la Lógica de Obtención de Datos
En tu archivo 
lib/blog.ts
, podrías crear una variante de 
getAllPosts
 que acepte un filtro:

typescript
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}
3. Implementar en el Componente de Página
Si usas la página 
/blog/page.tsx
:

Capturar el parámetro: Next.js te permite acceder a searchParams directamente en las Server Components.
Filtrar los posts: Antes de renderizar la lista, verifica si existe un tag en la URL. Si existe, usa solo los posts que coincidan; si no, muestra todos.
4. Actualizar la Interfaz (UI)
Convertir los Tags en Enlaces: En lugar de simples <span>, haz que cada tag sea un <Link href={"/blog?tag=" + tag}>.
Indicador de Filtro: Si hay un filtro activo, podrías mostrar un pequeño botón de "Limpiar filtro" o un encabezado que diga "Mostrando artículos con etiqueta: #tecnologia".
5. Filtrado en el Cliente (Opcional)
Si prefieres una experiencia más instantánea sin recargar la página:

Cargas todos los posts al inicio.
Usas un estado de React (useState) para guardar el tag seleccionado.
Renderizas la lista filtrada basándote en ese estado.
¿Te gustaría que profundice en alguno de estos puntos o que te muestre un ejemplo de código de alguna de estas partes?
