import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Comenzando en el Mundo del Desarrollo Web en 2026",
    description:
      "Una guia completa para quienes quieren iniciar su camino en el desarrollo web, con recursos y consejos practicos.",
    date: "15 Enero 2026",
    tags: ["Desarrollo Web", "Principiantes"],
    href: "#",
  },
  {
    title: "Por que la IA no Reemplazara a los Programadores",
    description:
      "Un analisis sobre el rol de la inteligencia artificial en el desarrollo de software y por que los humanos seguimos siendo esenciales.",
    date: "8 Enero 2026",
    tags: ["IA", "Opinion"],
    href: "#",
  },
  {
    title: "Los Mejores Recursos para Aprender TypeScript",
    description:
      "Recopilacion de los mejores cursos, libros y herramientas para dominar TypeScript desde cero.",
    date: "28 Diciembre 2025",
    tags: ["TypeScript", "Recursos"],
    href: "#",
  },
  {
    title: "Construyendo tu Primera API con Node.js",
    description:
      "Tutorial paso a paso para crear una API RESTful robusta utilizando Node.js y Express.",
    date: "15 Diciembre 2025",
    tags: ["Node.js", "Tutorial"],
    href: "#",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Articulos y <span className="text-accent">Reflexiones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Comparto lo que aprendo, mis experiencias y reflexiones sobre
            tecnologia, desarrollo y educacion.
          </p>
        </div>

        <div className="grid gap-4">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            Ver todos los articulos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
