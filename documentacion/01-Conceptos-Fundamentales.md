# 01 - Conceptos Fundamentales
Para entender cómo funciona tu web, es importante tener claros estos conceptos básicos.

## 1. El Trío Dinámico: Dominio, DNS y Hosting
Imagina una calle real:
- **Dominio**: Es la **dirección** (ej: `eduardo.net.ar`).
- **DNS**: Es la **guía de direcciones** que dice "esta dirección corresponde a esta casa".
- **Hosting**: Es la **casa** donde vive tu contenido.

| Servicio   | Rol                    | Metáfora                                       |
|:-----------|:-----------------------|:-----------------------------------------------|
| **NIC.ar** | Registrador            | Registro Civil (quién es el dueño)             |
| **GitHub** | Almacén de Código      | El archivo central donde se guardan los planos |
| **Vercel** | Hosting                | La casa moderna donde vive la web              |
| **DNS**    | Sistema de Direcciones | El correo que sabe dónde vive cada uno         |

## 2. Tipos de Páginas Web
Tu sitio es una **Web Estática Moderna**.
- **Web Estática**: Como un folleto digital. El contenido ya está escrito y el servidor solo lo entrega. Es muy rápida, segura y barata.
- **Web Dinámica**: Genera contenido en el momento usando una base de datos (ej: Facebook o un e-commerce). Es más lenta y compleja.
> [!TIP]
> **¿Por qué elegimos Estática?** Porque para un blog o sitio de enseñanza es lo mejor: menos fallas, menos mantenimiento y máxima velocidad para tus alumnos.

## 3. GitHub y Vercel: El dúo de trabajo
Tu web se construye gracias a la unión de estas dos herramientas:
- **GitHub**: Es el lugar donde se guarda todo tu código, tus artículos e imágenes. Es como una "caja negra" que registra cada cambio que haces.
- **Vercel**: Es la plataforma que toma lo que hay en GitHub y lo convierte en una página web visible.

**¿Cómo trabajan juntos?** Cada vez que haces un `git push` (enviar cambios a GitHub), GitHub le avisa a Vercel: *"¡Ey, Eduardo guardó cambios nuevos!"*. Entonces Vercel reconstruye automáticamente tu sitio para que el mundo vea la última versión en segundos.
