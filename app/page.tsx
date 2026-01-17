import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { LatestPost } from "@/components/latest-post";
import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Photos } from "@/components/photos";
import { Teaching } from "@/components/teaching";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LatestPost />
      <About />
      <Blog />
      <Photos />
      <Teaching />
      <Contact />
      <Footer />
    </main>
  );
}
