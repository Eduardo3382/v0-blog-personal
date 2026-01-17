import Link from "next/link";
import { ArrowRight } from "lucide-react";

const latestPost = {
  title: "Comenzando tu viaje en el mundo de la programacion",
  excerpt:
    "La programacion no es solo escribir codigo, es aprender a pensar de manera logica y resolver problemas de formas creativas. En este articulo te comparto los primeros pasos que recomiendo para cualquier persona que quiera adentrarse en este fascinante mundo.",
  image: "/blog-latest.jpg",
  date: "15 Enero 2026",
  slug: "#blog",
};

export function LatestPost() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-primary font-mono text-sm tracking-wider">
            Ultimo articulo
          </span>
        </div>

        <Link
          href={latestPost.slug}
          className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <p className="text-sm text-muted-foreground mb-2">
                {latestPost.date}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                {latestPost.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                {latestPost.excerpt}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Leer articulo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
