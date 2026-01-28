# Guía de Actualización de Fotos
Esta guía explica cómo gestionar tu galería de fotos utilizando el nuevo script de adaptación automática y los metadatos de las imágenes.
## 1. Adaptación y Optimización (Recomendado)
Antes de subir una foto al blog, es fundamental optimizarla para que la web cargue rápido y tenga los datos correctos. Para esto, utiliza el script `adaptar_blog.sh`.
### ¿Qué hace este script?
1.  **Redimensiona**: Ajusta la imagen a un ancho máximo de **1200px** (ideal para la web).
2.  **Calidad**: Optimiza el peso al 85% sin pérdida visual notable.
3.  **Color**: Convierte el perfil a sRGB (estándar de navegadores).
4.  **Metadatos**: Verifica si la foto tiene Título, Nota, Fecha y Etiquetas. **Si faltan, te permite escribirlos en el momento.**
### Cómo usarlo:
1. Abre una terminal en la carpeta del script:
   ```bash
   cd /home/eduardo/Documents/Python_Projects/Adapt_photo
   ```
2. Ejecuta el script con la foto que quieras preparar:
   ```bash
   ./adaptar_blog.sh /ruta/a/tu/foto.jpg
   ```
3. El script te preguntará si quieres editar los datos si faltan.
4. Busca la versión lista en la carpeta `blog_ready/`.
---
## 2. Preparación Manual (Metadatos)
Si prefieres usar un editor externo (Lightroom, Photoshop), asegúrate de completar estos campos:
| Campo en la Web | Metadato Técnico | Si falta (Regla de Fallback) |
| :--- | :--- | :--- |
| **Título (Title)** | Headline / ObjectName | Usa el nombre del archivo |
| **Nota (Note)** | Description / Caption | Se muestra vacío |
| **Fecha (Date)** | CreateDate / DateTimeOriginal | Se muestra vacío (aviso en log) |
| **Etiquetas (Tags)** | Keywords / Subject | No se muestran |
> [!IMPORTANT]
> - **Fecha**: Formato `AAAA-MM-DD` (ej: 2024-05-15).
> - **Etiquetas**: Separadas por comas, sin el símbolo `#`.
---
## 3. Publicación en el Blog
Una vez que tengas tus fotos listas (ya sea por el script o manualmente):
1. **Subir**: Copia los archivos a `/public/photos/` dentro de la carpeta del blog.
2. **Procesar**: En la terminal del blog, ejecuta:
   ```bash
   npm run generate-photos
   ```
3. **Publicar**:
   ```bash
   git add .
   git commit -m "feat: actualizar galería de fotos"
   git push
   ```
---
## Resumen de Herramientas
- **Script de Adaptación**: Ubicado en `/home/eduardo/Documents/Python_Projects/Adapt_photo/adaptar_blog.sh`.
- **Carpeta de Fotos**: `/public/photos/`.
- **Generador Automático**: `npm run generate-photos`.
