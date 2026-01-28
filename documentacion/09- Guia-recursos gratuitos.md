## Guía de edición de la sección "Recursos" y "Recursos gratuitos"
Esta guía explica:
- Qué cambios se hicieron en la sección de **Recursos** en la página principal.
- Cómo funciona la nueva página `/recursos`.
- Cómo agregar y actualizar **nuevos recursos** usando archivos Markdown (`.md`).
---
## 1. Cambios realizados en la página principal
### 1.1. Título de la sección
**Archivo**: `components/teaching.tsx`  
**Cambio**:
- El título de la sección pasó de **"Enseñanza"** a **"Recursos"**.
```tsx
<span className="text-primary font-mono text-sm tracking-wider">
  Educación
</span>
<h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
  Recursos
</h2>
```
### 1.2. Cursos Online
- Antes: `Cursos Online`
- Ahora: **`Cursos Online (Próximamente)`**
```ts
{
  icon: BookOpen,
  title: "Cursos Online (Próximamente)",
  description:
    "Material didactico estructurado para aprender a tu ritmo desde cualquier lugar.",
},
```
### 1.3. Mentorias
- Se actualizó la descripción para indicar cómo contratar:
```ts
{
  icon: Users,
  title: "Mentorias",
  description:
    "Sesiones personalizadas para resolver dudas y guiarte en tu camino tech. Para contratar, envíame un mail desde la sección de contacto.",
  href: "#contact",
  linkText: "Ir a contacto",
},
```
- Ahora este item enlaza a la sección de **Contacto** de la página principal (`#contact`).
### 1.4. Recursos Gratuitos
- Se agregó un enlace a la nueva página `/recursos`:
```ts
{
  icon: FileText,
  title: "Recursos Gratuitos",
  description:
    "Guias, tutoriales y materiales de estudio accesibles para todos. Página en construcción donde pronto encontrarás estos recursos.",
  href: "/recursos",
  linkText: "Ver recursos",
},
```
---
## 2. Nueva página de recursos: `/recursos`
### 2.1. Ruta y archivo
- **Página**: `/recursos`
- **Archivo**: `app/recursos/page.tsx`
Esta página:
- Muestra un encabezado con el título **"Recursos gratuitos"**.
- Indica que la página está en construcción.
- Lista los recursos que se encuentren en la carpeta `content/resources/`.
Fragmento principal:
```tsx
import { getAllResources } from "@/lib/resources";
export default function RecursosPage() {
  const resources = getAllResources();
  return (
    <main className="min-h-screen bg-background px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <span className="text-primary font-mono text-sm tracking-wider">
            Recursos
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Recursos gratuitos
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Esta página está en construcción. Pronto encontrarás aquí guías,
            tutoriales y materiales de estudio que podrás consultar de forma
            gratuita.
          </p>
        </header>
        {resources.length === 0 ? (
          <div className="border border-dashed border-border rounded-xl p-6 text-center text-muted-foreground">
            Aún no hay recursos publicados. Estoy trabajando en nuevo material,
            vuelve pronto.
          </div>
        ) : (
          <section className="space-y-4">
            {resources.map((resource) => (
              <article
                key={resource.slug}
                className="p-4 rounded-xl border border-border bg-card/50"
              >
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  {resource.title}
                </h2>
                {resource.excerpt && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {resource.excerpt}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  {resource.content.slice(0, 140)}...
                </p>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
```
---
## 3. Cómo se leen los recursos (Markdown) desde el código
**Archivo**: `lib/resources.ts`
Este módulo se encarga de leer todos los archivos `.md` que estén en `content/resources/` y devolverlos como objetos `Resource`.
```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
const resourcesDirectory = path.join(process.cwd(), "content/resources");
export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  content: string;
};
export function getAllResources(): Resource[] {
  if (!fs.existsSync(resourcesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(resourcesDirectory).filter((file) => file.endsWith(".md"));
  const resources = fileNames.map((fileName) => {
    const fullPath = path.join(resourcesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    let slug = data.slug ?? fileName.replace(".md", "");
    if (slug.endsWith(".md")) {
      slug = slug.replace(/\.md$/, "");
    }
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      category: data.category,
      content,
    };
  });
  return resources;
}
```
En resumen:
- Todos los recursos viven en: `content/resources/`.
- Cada archivo `.md` allí se convierte en un `Resource`.
- La página `/recursos` muestra la lista de esos recursos.
---
## 4. Estructura de los archivos Markdown de recursos
### 4.1. Carpeta de recursos
- Ruta: `content/resources/`
- Ejemplo de archivo creado: `recursos_en_construccion.md`
```md
---
title: "Recursos en construcción"
excerpt: "Pronto encontrarás aquí guías, tutoriales y materiales gratuitos."
category: "general"
---
Esta sección de recursos está en construcción.
En el futuro, aquí vas a encontrar:
- Guías prácticas en formato Markdown.
- Materiales para descargar.
- Enlaces a herramientas y lecturas recomendadas.
Vuelve pronto o suscríbete a mis canales para enterarte cuando publique nuevos recursos.
```
### 4.2. Campos del frontmatter
En la parte superior de cada `.md` se usa **YAML frontmatter** (entre `---`):
- **`title`**: título del recurso (obligatorio para mostrarlo bonito).
- **`excerpt`**: breve resumen que se ve en el listado.
- **`category`** (opcional): por si quieres agrupar recursos más adelante.
- **`slug`** (opcional): si lo defines, reemplaza al nombre del archivo como identificador.
Debajo del frontmatter va el **contenido** en Markdown (`content`), que por ahora se usa solo para mostrar un resumen corto en la lista (primeros ~140 caracteres).
---
## 5. Cómo agregar un nuevo recurso en el futuro (paso a paso)
1. **Crear un nuevo archivo `.md`**
   - Carpeta: `content/resources/`
   - Ejemplo:
   ```txt
   content/resources/2026-02-15_introduccion_a_python.md
   ```
2. **Agregar frontmatter y contenido**
   Ejemplo:
   ```md
   ---
   title: "Introducción a Python"
   excerpt: "Una guía rápida para dar tus primeros pasos con Python."
   category: "programación"
   ---
   Aquí va el contenido completo del recurso en formato Markdown.
   Puedes incluir:
   - Explicaciones paso a paso.
   - Código de ejemplo.
   - Enlaces a documentación oficial.
   ```
3. **Guardar el archivo**
   - No hace falta tocar ningún otro archivo de código.
   - Al recargar la página `/recursos`, el nuevo recurso aparecerá automáticamente en la lista.
---
## 6. Qué editar si quiero cambiar la visual de la sección
- **Texto y estructura de la sección "Recursos" en la página principal**  
  - Archivo: `components/teaching.tsx`  
  - Ahí puedes:
    - Cambiar los textos de cada tarjeta (Pastillitas, Clases presenciales, Cursos Online, Mentorias, Recursos Gratuitos).
    - Cambiar los íconos.
    - Cambiar o quitar enlaces (`href`, `linkText`).
- **Comportamiento de la página `/recursos`**  
  - Archivo: `app/recursos/page.tsx`  
  - Ahí puedes:
    - Modificar el diseño de la lista de recursos.
    - Mostrar más contenido en cada recurso (no solo el resumen).
    - Añadir filtros por `category` u otros campos.
- **Lógica de lectura de recursos en Markdown**  
  - Archivo: `lib/resources.ts`  
  - Ahí puedes:
    - Añadir nuevos campos a `Resource`.
    - Leer más metadatos del frontmatter (por ejemplo, `tags`, `level`, etc.).
Con esta estructura, para **agregar nuevos recursos** solo necesitas crear archivos `.md` en `content/resources/`, y la sección de **Recursos Gratuitos** junto con la página `/recursos` se irán poblando automáticamente.  
