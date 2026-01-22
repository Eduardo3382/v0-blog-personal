import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Workshop } from "@/lib/workshops";
import { siteConfig } from "@/lib/site-config";
import { MotionWrapper } from "./motion-wrapper";

interface UpcomingWorkshopProps {
    workshop: Workshop;
}

export function UpcomingWorkshop({ workshop }: UpcomingWorkshopProps) {
    return (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-6xl mx-auto">
                <MotionWrapper>
                    <div className="mb-8">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">
                            Próximos Eventos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                            Próximos cursos o talleres
                        </h2>
                    </div>
                </MotionWrapper>

                <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center glass-card rounded-3xl p-8 border border-border/50 backdrop-blur-sm">
                    <MotionWrapper className="flex justify-center" delay={0.2}>
                        <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-2xl shadow-2xl group">
                            <Image
                                src={workshop.flyer}
                                alt={workshop.title}
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </MotionWrapper>

                    <MotionWrapper className="space-y-6" delay={0.3}>
                        <div>
                            <div className="flex items-center gap-2 text-primary mb-3">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">
                                    {new Date(workshop.date).toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                {workshop.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {workshop.description}
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href={`mailto:${siteConfig.email}?subject=Inscripción a ${workshop.title}&body=${encodeURIComponent(
                                    `Por favor para inscribirte envíame esta información:\n\n` +
                                    `1. Nombre:\n` +
                                    `2. Teléfono para comunicarnos por WhatsApp (opcional):\n` +
                                    `3. ¿Qué dispositivo usás más? (celular / computadora / tableta / todos):\n` +
                                    `4. ¿Qué te gustaría más aprender de la tecnología? (Internet, Inteligencia Artificial, otros ejemplos: estafas, privacidad, WhatsApp, fotos, trámites, etc.):\n` +
                                    `5. Me quiero inscribir o averiguar más de este curso: ${workshop.title}`
                                )}`}
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all group"
                            >
                                Inscribite aquí
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
