import { Newspaper, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { MotionWrapper } from "./motion-wrapper";

export function LatestNewsletter() {
    const { latestNewsletter } = siteConfig;

    if (!latestNewsletter) return null;

    return (
        <section id="boletin" className="py-12 px-6 md:px-12 lg:px-24 bg-background scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <MotionWrapper>
                    <div className="mb-8">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">
                            Actualidad
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                            Último boletín emitido
                        </h2>
                    </div>
                </MotionWrapper>

                <div className="relative overflow-hidden glass-card rounded-3xl border border-white/20 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
                    {/* Enhanced Background decoration to match mockup */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

                    <div className="relative grid md:grid-cols-[auto_1fr] gap-12 items-center">
                        <MotionWrapper delay={0.2} className="flex justify-center md:justify-start">
                            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-transform hover:scale-105 duration-300">
                                <Image
                                    src={latestNewsletter.image || "/photos/Boletin99_ig_4_5.jpg"}
                                    alt={latestNewsletter.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.3} className="space-y-6 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                                    {latestNewsletter.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                    {latestNewsletter.description || "Cada semana comparto curiosidades, noticias y tips sobre el mundo tecnológico."}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <Link
                                    href={latestNewsletter.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all group shadow-lg shadow-primary/20"
                                >
                                    Leer boletín ahora
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href={latestNewsletter.allNewslettersUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors group font-medium"
                                >
                                    Ver boletines anteriores
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </MotionWrapper>
                    </div >
                </div >
            </div >
        </section >
    );
}
