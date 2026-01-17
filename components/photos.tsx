import { Camera } from "lucide-react";

const photos = [
  { id: 1, alt: "Evento tech" },
  { id: 2, alt: "Workshop programacion" },
  { id: 3, alt: "Conferencia" },
  { id: 4, alt: "Meetup comunidad" },
  { id: 5, alt: "Clase ensenanza" },
  { id: 6, alt: "Proyecto colaborativo" },
];

export function Photos() {
  return (
    <section id="fotos" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Fotos
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Momentos capturados en eventos, talleres y actividades de la
            comunidad tech.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square rounded-xl bg-card border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
              <span className="sr-only">{photo.alt}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Proximamente: Agrega tus fotos reales aqui
        </p>
      </div>
    </section>
  );
}
