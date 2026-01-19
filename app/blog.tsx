import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
};

type BlogProps = {
  posts: BlogPost[];
};

export function Blog({ posts }: BlogProps) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Artículos y <span className="text-accent">Reflexiones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Comparto lo que aprendo, mis experiencias y reflexiones sobre
            tecnología, desarrollo y educación.
          </p>
        </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-xl bg-background border hover:border-primary/50 transition flex flex-col md:flex-row gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-semibold group-hover:text-primary mb-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium"
          >
            Ver todos los artículos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

