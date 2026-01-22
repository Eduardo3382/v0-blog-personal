import { BookOpen, Users, Video, FileText, Mail, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

const teachingItems = [
  {
    icon: Mail,
    title: "Pastillitas de tecnología",
    description:
      "Boletin semanal gratuitos donde publico curiosidades, noticias y tips sobre el mundo tecnologico.",
    href: "https://eduardoescritos.notion.site/Pastillitas-de-tecnolog-a-2c96916a4f714d4f8e1a1ccf0f4f50cd?source=copy_link",
  },
  {
    icon: MapPin,
    title: "Clases presenciales",
    description:
      "Clases abiertas a todo público y edad todos lo viernes 1530 horas en Sociedad Friulana (Navarro 3974, Villa Devoto) ☎️ Informes: 4501-0764",
  },
  {
    icon: BookOpen,
    title: "Cursos Online",
    description:
      "Material didactico estructurado para aprender a tu ritmo desde cualquier lugar.",
  },
  {
    icon: Users,
    title: "Mentorias",
    description:
      "Sesiones personalizadas para resolver dudas y guiarte en tu camino tech.",
  },
  {
    icon: Video,
    title: "Workshops",
    description:
      "Talleres practicos donde aprendemos construyendo proyectos reales.",
  },
  {
    icon: FileText,
    title: "Recursos Gratuitos",
    description:
      "Guias, tutoriales y materiales de estudio accesibles para todos.",
  },
];

export function Teaching() {
  return (
    <section id="ensenanza" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">
            Educación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Enseñanza
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Mi misión es hacer la tecnología accesible para todos. Aquí
            encontrarás diferentes formas en las que puedo ayudarte a aprender.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {teachingItems.map((item) => {
            const Content = (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {item.href && (
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.href && (
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:underline">
                      Ver boletines
                    </span>
                  )}
                </div>
              </div>
            );

            const containerClassName =
              "group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 block h-full";

            return item.href ? (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={containerClassName}
              >
                {Content}
              </Link>
            ) : (
              <div key={item.title} className={containerClassName}>
                {Content}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <p className="text-center text-foreground">
            ¿Interesado en aprender? Contáctame y conversemos sobre cómo puedo
            ayudarote en tu viaje tech.
          </p>
        </div>
      </div>
    </section>
  );
}
