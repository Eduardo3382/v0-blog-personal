import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "/photos/Farol_de_buenosaires.jpg",
    alt: "Farol de Buenos Aires",
    caption: "Farol histórico en una caminata por Buenos Aires",
  },
  {
    id: 2,
    src: "/photos/La_biblia_y_el_calefon.png",
    alt: "La biblia y el calefón",
    caption: "Impactante respiradero del 900 con cámaras de seguridad actuales",
    note: "Me recuerda que la tecnología debe acompañar sin imponerse.",
  },
];

export function Photos() {
  return (
    <section id="fotos" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">
            Galería
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Fotos
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Momentos capturados en eventos, talleres y escenas de la vida diaria.
          </p>
        </div>

        {/* Grilla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <figure key={photo.id} className="space-y-3">
              {/* Imagen al 65% y centrada */}
              <div className="w-[65%] mx-auto aspect-square rounded-xl bg-card border border-border overflow-hidden relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Texto */}
              <figcaption className="text-sm text-muted-foreground text-center space-y-1">
                <strong className="block text-foreground">
                  {photo.caption}
                </strong>

                {photo.note && (
                  <span className="block">
                    {photo.note}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
