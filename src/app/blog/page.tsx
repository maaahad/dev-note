import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="page">
      <section className="section">
        <div className="section-heading">
          <h1 className="section-title">Blog</h1>

          <span className="section-index">/blog</span>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-item">
              <time className="blog-date" dateTime={post.date}>
                {post.date}
              </time>

              <div>
                <Link href={`/blog/${post.slug}`} className="blog-title">
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
