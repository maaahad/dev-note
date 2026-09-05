import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getPosts().filter((post) => !!post.content);
  console.log(posts);

  return (
    <div className="page">
      <section className="section">
        <div className="section-heading">
          <h1 className="section-title">Blogs</h1>

          <span className="section-index">/blogs</span>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-item">
              <time className="blog-date" dateTime={post.date}>
                {post.date}
              </time>

              <div>
                <Link href={`/blogs/${post.slug}`} className="blog-title">
                  {post.title}
                </Link>

                <p className="blog-description">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
