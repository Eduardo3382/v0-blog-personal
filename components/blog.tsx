import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import { getAllPosts, BlogPost } from "@/lib/blog";
import { MotionWrapper } from "./motion-wrapper";

interface BlogProps {
  posts?: BlogPost[];
}

export function Blog({ posts: initialPosts }: BlogProps) {
  const posts = initialPosts || getAllPosts().slice(1, 5);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-8">
            Artículos anteriores
          </h2>
        </MotionWrapper>

        <div className="grid gap-4">
          {posts.map((post, index) => (
            <MotionWrapper key={post.slug} delay={index * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-xl glass-card border hover:border-primary transition block"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </MotionWrapper>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            Ver todos los artículos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

