import { getAllResources } from "@/lib/resources";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Recursos gratuitos | Eduardo de la Fuente",
  description:
    "Recursos gratuitos en construcción. Pronto encontrarás aquí guías, tutoriales y materiales para aprender tecnología.",
};

export default function RecursosPage() {
  const resources = getAllResources();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="px-6 md:px-12 lg:px-24 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <Link
              href="/#ensenanza"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 text-sm"
            >
              ← Volver a Recursos
            </Link>
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
                    {/* Por ahora solo mostramos un resumen muy corto */}
                    {resource.content.slice(0, 140)}...
                  </p>
                </article>
              ))}
            </section>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

