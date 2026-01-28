# Guía para agregar nuevos Workshops o Talleres

Para agregar un nuevo evento a tu blog, sigue estos pasos:

## 1. Subir el Flyer
Guarda la imagen del flyer en la carpeta:
`/home/eduardo/Documents/Python_Projects/v0-blog-personal/public/Workshop/`

## 2. Crear el archivo de datos
Crea un nuevo archivo `.md` en la carpeta:
`/home/eduardo/Documents/Python_Projects/v0-blog-personal/content/workshops/`

El nombre del archivo debe seguir el formato `AAAA-MM-DD-titulo.md` (ejemplo: `2026-03-15-taller-javascript.md`).

## 3. Contenido del archivo
Copia y pega el siguiente formato en el nuevo archivo:

```markdown
---
title: "Título del Workshop"
date: "2026-03-15"
flyer: "/Workshop/nombre_de_tu_flyer.jpg"
description: "¡ESTE ES EL TEXTO QUE SE VE EN LA WEB! Escribe aquí el resumen o invitación."
---

(Opcional) Aquí puedes escribir más detalles. Este texto por ahora
no se muestra en la página principal, solo lo que pongas en 'description'.
```

### ¿Dónde edito el texto de invitación?
El texto que ves actualmente ("¡Te invitamos a una nueva clase abierta...") se encuentra **dentro de la línea `description:`** entre las comillas. Si quieres cambiarlo para un nuevo curso, simplemente edita lo que hay dentro de esas comillas en el nuevo archivo que crees.

## 4. El botón "Inscribite aquí"
El sistema genera automáticamente un enlace de correo electrónico. Cuando el usuario hace clic, se abre un email dirigido a ti con este formato:

**Asunto:** Inscripción a [Título del Workshop]  
**Cuerpo del mensaje (Texto automático):**
> Por favor para inscribirte envíame esta información:
> 
> 1. Nombre:
> 2. Teléfono para comunicarnos por WhatsApp (opcional):
> 3. ¿Qué dispositivo usás más? (celular / computadora / tableta / todos):
> 4. ¿Qué te gustaría más aprender de la tecnología? (Internet, Inteligencia Artificial, otros ejemplos: estafas, privacidad, WhatsApp, fotos, trámites, etc.):
> 5. Me quiero inscribir o averiguar más de este curso: [Título del Workshop]

---

### Notas Importantes:
- **Fecha**: Usa el formato `AAAA-MM-DD`. El sistema la usa para saber si es un evento futuro o si ya pasó.
- **Flyer**: Asegúrate de que la ruta comience con `/Workshop/` y el nombre sea idéntico al del archivo de imagen.
- **Visualización**: Solo aparecerá **un** workshop en la sección "Próximos eventos" (el más cercano a hoy). Los que ya pasaron se mueven automáticamente a la página de "Workshops Pasados".
