import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { photos } from "@/lib/photos";

export function Photos() {
  const latestPhotos = [...photos].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 4);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {latestPhotos.map((photo) => (
            <figure key={photo.id} className="space-y-3 group">
              {/* Imagen al 65% y centrada */}
              <div className="w-[85%] sm:w-[75%] mx-auto aspect-square rounded-xl bg-card border border-border overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Texto */}
              <figcaption className="text-sm text-muted-foreground text-center space-y-1">
                <strong className="block text-foreground group-hover:text-primary transition-colors">
                  {photo.caption}
                </strong>

                {photo.note && (
                  <span className="block italic opacity-80">
                    {photo.note}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/fotos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
          >
            Ver galería completa
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
