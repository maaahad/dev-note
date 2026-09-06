// TODO: (maaahad) clean up and if possible merge the two util
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

const contentDirectory = path.join(process.cwd(), "content");

export type MdxDocument = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  content: string;
};

export function getProjectDocument(
  project: string,
  slug: string,
): MdxDocument | undefined {
  const filePath = path.join(
    contentDirectory,
    "projects",
    project,
    `${slug}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const source = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    content,
  };
}

export function getProjectDocuments(project: string): MdxDocument[] {
  const directory = path.join(contentDirectory, "projects", project);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");

      return getProjectDocument(project, slug)!;
    });
}
