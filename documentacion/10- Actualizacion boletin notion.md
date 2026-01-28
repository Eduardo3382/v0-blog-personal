# Guia de Mantenimiento: Sección Boletín

Esta guía explica cómo gestionar el sector de **Último Boletín** en tu web y las opciones disponibles para evolucionar el diseño a futuro.

## 1. Cómo actualizar el boletín hoy (Método Actual)

Actualmente usamos la **Alternativa 1 (Enlace Directo)**. Es la más rápida porque no requiere subir archivos pesados.

### Pasos para actualizar:
1. Abre el archivo: [site-config.ts](file:///home/eduardo/Documents/Python_Projects/v0-blog-personal/lib/site-config.ts)
2. Busca el objeto `latestNewsletter`:
   ```typescript
   latestNewsletter: {
       title: "Boletín #98", // Cambia el número aquí
       url: "https://...",   // Pega el nuevo link de Notion aquí
       allNewslettersUrl: "https://..." // Este link suele ser fijo (el índice)
   },
   ```
3. Guarda el archivo y haz un `git push`. La web se actualizará automáticamente con el nuevo título y el nuevo enlace.

## 2. Enlace directo (Anchor Link)

He configurado un identificador único para esta sección. Puedes usarlo para enviar a la gente directamente al sector del boletín sin que tengan que scrollear desde el inicio.

*   **Enlace para compartir:** `https://eduardo.net.ar/#boletin`
*   **Cómo funciona:** El Navegador busca el `id="boletin"` en el código y posiciona la pantalla justo ahí.

---

## 3. Alternativas a Futuro (Para cuando quieras evolucionar)

Si en el futuro deseas que el boletín se vea diferente o se aloje totalmente en tu web, estas son las opciones:

### Alternativa 2: Uso de PDF
- **Qué es:** En lugar de un link a Notion, subes el boletín exportado como PDF.
- **Cómo hacerlo:** Guardas el PDF en `public/boletines/boletin-98.pdf` y apuntas el link de `site-config.ts` a ese archivo local.
- **Ideal para:** Usuarios que prefieren descargar y coleccionar los boletines o imprimirlos.

### Alternativa 3: Markdown (Importado)
- **Qué es:** Exportar desde Notion y tratar de limpiar el código para que encaje.
- **Desventaja:** Es un proceso tedioso porque Notion genera nombres de archivos y rutas de imágenes muy complejos que hay que "arreglar" a mano.

### Alternativa 4: HTML Estático
- **Qué es:** Subir la exportación HTML de Notion tal cual.
- **Ideal para:** Mantener la estética exacta de Notion pero bajo tu propio dominio (ej: `eduardo.net.ar/boletin-98.html`).

### Alternativa 5: Boletín Nativo Local (RECOMENDADO PARA CALIDAD TOTAL)
- **Qué es:** **Construir el boletín desde cero en tu computadora**, sin depender de Notion.
- **Cómo funciona:** 
  1. Escribes el contenido en un archivo `.md` (Markdown) en una carpeta local (ej: `content/boletines/`).
  2. Guardas las imágenes que quieras usar en una carpeta de tu proyecto (ej: `public/images/boletin-98/`).
  3. En el archivo Markdown, haces referencia a esas imágenes locales usando el formato: `/public/images/boletin-98/foto1.jpg`.
- **Ventaja:** Tienes control total del diseño, no dependes de ninguna plataforma externa, las fotos cargan instantáneamente y el SEO es perfecto. Es como escribir una entrada de blog pero con el formato de tu boletín.
- **Esfuerzo:** Requiere que te sientas cómodo editando el archivo de texto y organizando tus carpetas de imágenes.

---
> [!NOTE]
> Todos los estilos visuales (el efecto de cristal, los colores y las animaciones) que creamos hoy son compatibles con cualquiera de estas 5 alternativas.
