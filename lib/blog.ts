import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  imageFit?: "cover" | "contain";
  content: string;
  wordCount: number;
  readingTime: number;
  tags: string[];
};

function calculateReadingMetadata(content: string) {
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 225); // Average reading speed
  return { wordCount: words, readingTime };
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    // Ensure slug doesn't have .md extension if it comes from data
    let slug = data.slug ?? fileName.replace(".md", "");
    if (slug.endsWith(".md")) {
      slug = slug.replace(/\.md$/, "");
    }

    const { wordCount, readingTime } = calculateReadingMetadata(content);
    const tags = Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [];

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      imageFit: data.imageFit,
      content,
      wordCount,
      readingTime,
      tags,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}


