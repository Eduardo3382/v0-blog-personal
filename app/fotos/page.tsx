import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Expand } from "lucide-react";
import { photos } from "@/lib/photos";

export default function GalleryPage() {
    const sortedPhotos = [...photos].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-16 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8 group"
                        >
                            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Volver al Inicio
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería de Fotos</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Una colección de momentos, escenas y detalles capturados a lo largo del tiempo.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedPhotos.map((photo) => (
                            <figure key={photo.id} className="group space-y-4">
                                <div className="relative aspect-square rounded-2xl overflow-hidden border bg-muted/20 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Expand className="text-white w-8 h-8" />
                                    </div>
                                </div>

                                <figcaption className="space-y-1 px-2">
                                    <div className="flex justify-between items-start gap-4">
                                        <strong className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                                            {photo.caption}
                                        </strong>
                                    </div>

                                    {photo.note && (
                                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                                            {photo.note}
                                        </p>
                                    )}
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    {sortedPhotos.length === 0 && (
                        <div className="text-center py-24 border rounded-3xl bg-muted/10">
                            <p className="text-muted-foreground italic text-lg">No hay fotos en la galería todavía.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
