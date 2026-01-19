import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

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
        <article className="min-h-screen bg-background pt-24 pb-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/#blog"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <time>{post.date}</time>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        {post.title}
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {post.excerpt}
                    </p>
                </header>

                {post.coverImage && (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* 
            TODO: Add markdown renderer here
            For now, we are rendering raw content 
        */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans">
                        {post.content}
                    </pre>
                </div>
            </div>
        </article>
    );
}
