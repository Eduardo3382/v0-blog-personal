## Guía de edición de contactos y redes sociales
Esta guía explica cómo están organizados los enlaces de contacto y redes sociales en la web, y qué pasos seguir para:
- Agregar/editar una red social o medio de contacto (incluido email).
- Decidir qué iconos aparecen en el `Hero` (debajo del nombre).
- Decidir qué iconos aparecen en el `Footer`.
- Mantener todo centralizado y fácil de actualizar.
---
## 1. Fuente única de la verdad: `lib/social-links.ts`
**Archivo principal**: `lib/social-links.ts`
En este archivo se define **toda** la información de contacto y redes:
- IDs de cada red (`id`).
- Nombre visible (`name`).
- URL (`href`).
- Icono (`icon`).
- Texto/handle a mostrar (`username`).
Tipo base:
```ts
export type SocialLinkId =
  | "email"
  | "linkedin"
  | "github"
  | "twitter"
  | "mastodon"
  | "notion"
  | "instagram";
export type SocialLink = {
  id: SocialLinkId;
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  username: string;
};
```
Lista centralizada:
```ts
export const allSocialLinks: SocialLink[] = [
  {
    id: "email",
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    username: siteConfig.email,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    username: siteConfig.links.linkedin.split("/in/")[1] || "LinkedIn",
  },
  {
    id: "github",
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    username: siteConfig.links.github.split(".com/")[1] || "GitHub",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    href: siteConfig.links.twitter,
    icon: Twitter,
    username: "@ehdela",
  },
  {
    id: "mastodon",
    name: "Mastodon",
    href: siteConfig.links.mastodon,
    icon: MastodonIcon,
    username: "@Eduardomastodon@mastodon.social",
  },
  {
    id: "notion",
    name: "Notion",
    href: siteConfig.links.notion,
    icon: NotionIcon,
    username: "Pastillitas de tecnología",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: Instagram,
    username: "@edu_byte",
  },
];
```
Helper para seleccionar enlaces por ID:
```ts
export function getSocialLinks(ids?: SocialLinkId[]): SocialLink[] {
  if (!ids) return allSocialLinks;
  const set = new Set(ids);
  return allSocialLinks.filter((link) => set.has(link.id));
}
```
---
## 2. Cómo agregar una nueva red social (o contacto)
### Paso 1: Agregar el ID
En `lib/social-links.ts`, en el tipo `SocialLinkId`, agrega el nuevo identificador.  
Ejemplo, para YouTube:
```ts
export type SocialLinkId =
  | "email"
  | "linkedin"
  | "github"
  | "twitter"
  | "mastodon"
  | "notion"
  | "instagram"
  | "youtube"; // nuevo
```
### Paso 2: Agregar la entrada en `allSocialLinks`
En el mismo archivo, agrega un nuevo objeto en el array `allSocialLinks`:
```ts
{
  id: "youtube",
  name: "YouTube",
  href: "https://youtube.com/@tu_canal",
  icon: YouTubeIcon, // el componente de ícono que uses
  username: "@tu_canal",
},
```
Con esto, la nueva red queda **disponible para toda la web**.
---
## 3. Cómo funciona la página de Contacto
**Archivo**: `components/contact.tsx`
En `Contact` se hace:
```ts
const socialLinks = getSocialLinks();
const emailLink = socialLinks.find((link) => link.id === "email");
const socialOnlyLinks = socialLinks.filter((link) => link.id !== "email");
```
- `emailLink`: se usa para el bloque de email destacado.
- `socialOnlyLinks`: son todas las redes excepto el email.
Bloque de email:
```tsx
{emailLink && (
  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border mb-6">
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
      <emailLink.icon className="w-5 h-5 text-accent" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{emailLink.name}</p>
      <Link
        href={emailLink.href}
        className="text-foreground hover:text-primary transition-colors font-medium"
      >
        {emailLink.username}
      </Link>
    </div>
  </div>
)}
```
Lista de redes sociales:
```tsx
{socialOnlyLinks.map((link) => (
  <Link
    key={link.name}
    href={link.href}
    target="_blank"
    className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
      <link.icon className="w-5 h-5" />
    </div>
    <div className="flex-1">
      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
        {link.name}
      </p>
      <p className="text-sm text-muted-foreground">
        {link.username}
      </p>
    </div>
  </Link>
))}
```
**Importante**:  
Si agregas una nueva red en `lib/social-links.ts`, Contact la mostrará **automáticamente** en la sección de “Redes Sociales” (no hace falta tocar `Contact`).
---
## 4. Cómo controlar qué iconos aparecen en el Hero
**Archivo**: `components/hero.tsx`
Se importa el helper:
```ts
import { getSocialLinks } from "@/lib/social-links";
```
Y se define qué IDs se usan en el Hero:
```ts
const heroSocialIds = ["linkedin", "github", "twitter", "mastodon", "instagram"] as const;
const heroSocialLinks = getSocialLinks(heroSocialIds);
```
Render:
```tsx
<div className="flex flex-wrap gap-4 mb-12">
  {heroSocialLinks.map((link) => (
    <Link
      key={link.id}
      href={link.href}
      target="_blank"
      className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
      aria-label={link.name}
    >
      <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </Link>
  ))}
</div>
```
### Para agregar o quitar iconos en el Hero
- **Agregar una red** (ej. YouTube):  
  - Asegúrate de que existe en `lib/social-links.ts`.  
  - Añade `"youtube"` a `heroSocialIds`.
- **Quitar una red del Hero** (ej. Notion):  
  - Simplemente **no** incluyas su ID en `heroSocialIds`.
No hace falta tocar JSX adicional: sólo la lista de IDs.
---
## 5. Cómo controlar qué iconos aparecen en el Footer
**Archivo**: `components/footer.tsx`
Importa el helper:
```ts
import { getSocialLinks } from "@/lib/social-links";
```
Define los IDs que se usan en el Footer:
```ts
const footerSocialIds = ["linkedin", "github", "twitter", "mastodon", "instagram"] as const;
const footerSocialLinks = getSocialLinks(footerSocialIds);
```
Render:
```tsx
<div className="flex items-center gap-4">
  {footerSocialLinks.map((link) => (
    <Link
      key={link.id}
      href={link.href}
      target="_blank"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label={link.name}
    >
      <link.icon className="w-5 h-5" />
    </Link>
  ))}
</div>
```
### Para agregar o quitar iconos en el Footer
- **Agregar una red al Footer**:  
  - Defínela en `lib/social-links.ts`.  
  - Añade su ID a `footerSocialIds`.
- **Quitar una red del Footer**:  
  - Elimina su ID de `footerSocialIds`.
---
## 6. Resumen rápido de mantenimiento
- **Editar/crear redes y contacto (incluido email)**  
  - Siempre en `lib/social-links.ts` (un solo lugar).
- **Página de Contacto**  
  - Usa todos los enlaces desde `getSocialLinks()`.  
  - El email se separa automáticamente (`emailLink`).  
  - Las redes se toman de `socialOnlyLinks` (todo menos email).
- **Hero (debajo del nombre)**  
  - Controlas qué aparece modificando `heroSocialIds` en `components/hero.tsx`.
- **Footer**  
  - Controlas qué aparece modificando `footerSocialIds` en `components/footer.tsx`.
Con esta estructura, puedes agregar una nueva red o cambiar un enlace **en un solo archivo** y luego decidir, con listas muy simples de IDs, en qué zonas del sitio aparece cada icono.
