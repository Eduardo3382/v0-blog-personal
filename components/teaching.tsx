import { BookOpen, Users, Video, FileText } from "lucide-react";

const teachingItems = [
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
            Educacion
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Ensenanza
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Mi mision es hacer la tecnologia accesible para todos. Aqui
            encontraras diferentes formas en las que puedo ayudarte a aprender.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {teachingItems.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <p className="text-center text-foreground">
            Interesado en aprender? Contactame y conversemos sobre como puedo
            ayudarte en tu viaje tech.
          </p>
        </div>
      </div>
    </section>
  );
}
