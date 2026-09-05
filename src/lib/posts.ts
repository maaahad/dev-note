import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

export function getPosts(): Post[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, file);

    const source = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(source);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}
