# 03 - Entorno Local y Git
Trabajar de forma profesional significa tener una copia exacta de tu web en tu computadora para probar cambios antes de que el mundo los vea.

## 1. El Flujo de Trabajo (Semáforo)
| Paso            | Comando               | ¿Cuándo?                                    |
|:----------------|:----------------------|:--------------------------------------------|
| **Sincronizar** | `git pull`            | **Siempre** antes de empezar.               |
| **Probar**      | `npm run dev`         | Cuando quieras ver cómo queda el contenido. |
| **Preparar**    | `git add .`           | Cuando terminaste de escribir/editar.       |
| **Guardar**     | `git commit -m "msj"` | Para ponerle nombre a tus cambios.          |
| **Publicar**    | `git push`            | Para enviar todo a GitHub y Vercel.         |

## 2. Ver cambios en tu PC
Para abrir tu web en modo "previsualización":
1. Abre la terminal en la carpeta del proyecto.
2. Escribe: `npm run dev`.
3. Abre en tu navegador: `http://localhost:3000`.

## 3. Comandos Git de Emergencia
- **¿Qué cambié?**: `git status`
- **Me equivoqué, quiero borrar mis cambios locales**: `git restore .`
- **Ayuda, nada funciona localmente**: 
  ```bash
  git fetch origin
  git reset --hard origin/main
  ```

> [!WARNING]
> El comando `reset --hard` borrará lo que no hayas subido a GitHub. Úsalo solo como último recurso.
