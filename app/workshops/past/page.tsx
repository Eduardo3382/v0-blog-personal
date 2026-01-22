import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getPastWorkshops } from "@/lib/workshops";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PastWorkshopsPage() {
    const pastWorkshops = getPastWorkshops();

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    <Link
                        href="/#ensenanza"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Enseñanza
                    </Link>

                    <div className="mb-12">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">
                            Archivo
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                            Workshops Pasados
                        </h1>
                        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                            Una recopilación de los talleres y cursos realizados anteriormente.
                        </p>
                    </div>

                    {pastWorkshops.length === 0 ? (
                        <div className="bg-card border border-border rounded-2xl p-12 text-center">
                            <p className="text-muted-foreground">Aún no hay workshops pasados registrados.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pastWorkshops.map((workshop) => (
                                <div key={workshop.slug} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image
                                            src={workshop.flyer}
                                            alt={workshop.title}
                                            fill
                                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-primary text-sm mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <span>
                                                {new Date(workshop.date).toLocaleDateString("es-ES", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {workshop.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {workshop.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
