import { Lightbulb, Users, Rocket } from "lucide-react";

const interests = [
  {
    icon: Lightbulb,
    title: "Aprendizaje Continuo",
    description:
      "Siempre explorando nuevas tecnologias, frameworks y metodologias para mantenerme actualizado en este mundo que evoluciona rapidamente.",
  },
  {
    icon: Users,
    title: "Educacion Tech",
    description:
      "Comparto conocimiento a traves de articulos, tutoriales y mentorias para ayudar a otros a crecer en tecnologia.",
  },
  {
    icon: Rocket,
    title: "Innovacion",
    description:
      "Fascinado por como la tecnologia puede transformar la vida de las personas y resolver problemas del mundo real.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">
            Sobre mi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Construyendo puentes entre
            <br />
            <span className="text-primary">tecnologia y personas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Soy un entusiasta de la tecnologia que cree firmemente en el poder
            del conocimiento compartido. Mi objetivo es hacer la tecnologia mas
            accesible y comprensible para todos, desde principiantes hasta
            profesionales que buscan expandir sus horizontes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <interest.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {interest.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
