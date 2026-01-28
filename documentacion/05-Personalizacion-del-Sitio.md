# 05 - Personalización del Sitio
Si necesitas cambiar tus redes sociales, email o textos fijos, aquí te digo dónde buscar.
## 1. Configuración Centralizada (Lo más importante)
Casi todo lo "personal" se edita en un solo lugar:
📄 **`lib/site-config.ts`**
Aquí puedes cambiar:
- Tu nombre y título del sitio.
- Tu email de contacto.
- Los links a LinkedIn, GitHub, Twitter, Instagram, etc.
## 2. Secciones de la Home
Si quieres cambiar los textos o íconos de las tarjetas:
- **Sobre Mí**: `components/about.tsx` (mira el array `interests`).
- **Enseñanza**: `components/teaching.tsx` (mira el array `teachingItems`).
- **Navegación**: `components/navigation.tsx` (para cambiar los nombres del menú).
## 3. Animaciones y Diseño
- **Animaciones**: Usamos `framer-motion` a través de un componente llamado `MotionWrapper`. Si algo no se mueve, revisa que esté envuelto en él.
- **Estilo Cristal**: Busca la clase CSS `glass-card` en los archivos para mantener ese estilo moderno y translúcido.
> [!TIP]
> **¿Quieres cambiar un color?** Los colores principales se manejan en `styles/globals.css` mediante variables CSS (`--primary`, `--accent`).
