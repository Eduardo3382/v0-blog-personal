# Registro de Limpieza del Blog - Marzo 2026

Este documento detalla el proceso de mantenimiento y limpieza realizado para reducir el tamaño del proyecto y eliminar archivos innecesarios.

## 🔍 Hallazgos de la Revisión

En la revisión inicial, el proyecto ocupaba **788 MB**. Se identificaron los siguientes puntos de mejora:

- **Carpeta `.next/` (37 MB):** Almacena archivos de caché y compilación temporal.
- **Archivos `.jpg_original`:** Copias de seguridad duplicadas en la carpeta `public/photos/`.
- **Librerías (`node_modules/`):** Aunque son necesarias, pueden acumular "restos" de instalaciones previas.

---

## 🧹 Acciones Realizadas

### 1. Limpieza de Fotos Duplicadas
Se eliminaron todos los archivos temporales con la extensión `.jpg_original` generados durante el procesamiento de imágenes para el blog.

### 2. Mantenimiento de Librerías
Se ejecutó el comando `npm prune` para asegurar que solo estén instaladas las dependencias declaradas en el archivo `package.json`.

### 3. Sincronización con GitHub
Se realizó un `push` para que los cambios de limpieza (especialmente el borrado de fotos duplicadas) se reflejen en el repositorio remoto.

---

## 💡 Recomendaciones para el Futuro

### Sobre la carpeta `.next/`
Aunque esta carpeta se regenera automáticamente al ejecutar el comando `npm run dev`, es **conveniente borrarla de vez en cuando**.

**¿Por qué borrar `.next/` periódicamente?**
1. **Limpieza de Caché:** A veces Next.js mantiene en caché versiones antiguas de componentes o recursos que ya no existen, lo que puede causar errores visuales extraños.
2. **Optimización de Espacio:** La caché puede crecer indefinidamente si no se limpia.
3. **Compilación Limpia:** Garantiza que lo que estás viendo es exactamente lo que el código actual genera, sin "herencias" de compilaciones pasadas.

### Archivos `_original`
Si utilizas scripts para optimizar fotos, recuerda borrar los archivos originales (una vez verificado que todo esté bien) para evitar que la carpeta `public/` crezca innecesariamente.
