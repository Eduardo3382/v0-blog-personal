import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Artículo no encontrado",
        };
    }

    return {
        title: `${post.title} | Eduardo de la Fuente`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Eduardo de la Fuente"],
            images: post.coverImage ? [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/#blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Ir a artículos anteriores
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Calendar className="w-4 h-4" />
                            <time>{post.date}</time>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6 pb-6 border-b">
                            <span>{post.readingTime} min de lectura ({post.wordCount} palabras)</span>
                            {post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-primary/80 font-medium">#{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {post.excerpt}
                        </p>
                    </header>

                    {post.coverImage && (
                        <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-12 border bg-muted/20">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    )}

                    <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:text-blue-500 dark:prose-a:text-blue-400 prose-a:font-medium hover:prose-a:underline">
                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
            <Footer />
        </article>
    );
}
