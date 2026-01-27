import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MotionWrapper } from "./motion-wrapper";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: string;
  imageFit?: "cover" | "contain";
  tags: string[];
  readingTime: number;
};

export function LatestPost({ post }: { post: Post }) {
  if (!post) return null;

  return (
    <section id="post" className="py-12 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <MotionWrapper>
          <span className="text-primary font-mono text-sm tracking-wider">
            Último artículo
          </span>

          <Link
            href={`/blog/${post.slug}`}
            className="group block mt-4 rounded-2xl border overflow-hidden hover:border-primary/50 transition glass-card"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Imagen Miniatura */}
              <div className="relative w-full md:w-64 h-64 bg-muted/20 flex-shrink-0">
                {post.coverImage && (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                )}
              </div>

              {/* Texto */}
              <div className="flex-1 p-6 md:p-8">
                <p className="text-sm text-muted-foreground mb-2">
                  {post.date} • {post.readingTime} min de lectura
                </p>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:underline">
                  Leer artículo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
}
