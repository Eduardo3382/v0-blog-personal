import Link from "next/link";
import { getSocialLinks } from "@/lib/social-links";

const footerSocialIds = ["linkedin", "github", "twitter", "mastodon", "instagram"] as const;
const footerSocialLinks = getSocialLinks(footerSocialIds);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {currentYear} Eduardo de la Fuente. Hecho con pasion por la
          tecnologia.
        </p>

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
      </div>
    </footer>
  );
}
