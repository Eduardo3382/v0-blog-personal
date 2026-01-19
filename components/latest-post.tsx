import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  cover: string;
};

export function LatestPost({ post }: { post: Post }) {
  if (!post) return null;

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <span className="text-primary font-mono text-sm tracking-wider">
          Último artículo
        </span>

        <Link
          href={`/blog/${post.slug}`}
          className="group block mt-4 rounded-2xl border overflow-hidden hover:border-primary/50 transition"
        >
          <div className="flex flex-col md:flex-row">
            {/* Imagen */}
            <div className="relative md:w-1/3 h-56 md:h-auto">
             {post.cover && (
 		<Image
    			src={post.cover}
    			alt={post.title}
    			fill
    			className="object-cover"
    			priority
  	/>
)}

            </div>

            {/* Texto */}
            <div className="flex-1 p-6 md:p-8">
              <p className="text-sm text-muted-foreground mb-2">
                {post.date}
              </p>

              <h3 className="text-2xl font-bold mb-3">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-primary font-medium">
                Leer artículo <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

