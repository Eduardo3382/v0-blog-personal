import fs from "fs";
import path from "path";
import matter from "gray-matter";

const resourcesDirectory = path.join(process.cwd(), "content/resources");

export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  content: string;
};

export function getAllResources(): Resource[] {
  if (!fs.existsSync(resourcesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(resourcesDirectory).filter((file) => file.endsWith(".md"));

  const resources = fileNames.map((fileName) => {
    const fullPath = path.join(resourcesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    let slug = data.slug ?? fileName.replace(".md", "");
    if (slug.endsWith(".md")) {
      slug = slug.replace(/\.md$/, "");
    }

    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      category: data.category,
      content,
    };
  });

  return resources;
}

