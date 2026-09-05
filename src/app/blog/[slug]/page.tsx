import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPosts } from "@/lib/posts";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="article">
      <header className="article-header">
        <div className="article-meta">{post.date}</div>

        <h1 className="article-title">{post.title}</h1>

        <p className="article-description">{post.description}</p>
      </header>

      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
