import { getAllPosts } from "@/lib/blog";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Calendar, Clock, Tag, ChevronLeft } from "lucide-react";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-16">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8 group"
                        >
                            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Volver al Inicio
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Todos los artículos</h1>
                        <p className="text-xl text-muted-foreground">
                            Explora todas mis notas, reflexiones y tutoriales sobre tecnología, diseño y más.
                        </p>
                    </header>

                    <div className="grid gap-12">
                        {posts.map((post) => (
                            <article key={post.slug} className="group">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <time>{post.date}</time>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{post.readingTime} min</span>
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        {post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-flex items-center gap-1 text-xs text-primary font-mono bg-primary/5 px-2 py-1 rounded"
                                                    >
                                                        <Tag className="w-3 h-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-24 border rounded-2xl bg-muted/20">
                            <p className="text-muted-foreground italic">Aún no hay artículos publicados.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
