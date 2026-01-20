import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

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
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/edu_byte/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
