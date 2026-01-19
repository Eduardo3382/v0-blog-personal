import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { LatestPost } from "@/components/latest-post";
import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Photos } from "@/components/photos";
import { Teaching } from "@/components/teaching";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();
  const latestPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {latestPost && <LatestPost post={latestPost} />}

      <About />

      {otherPosts.length > 0 && <Blog posts={otherPosts} />}

      <Photos />
      <Teaching />
      <Contact />
      <Footer />
    </main>
  );
}

