import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="section-heading">
          <h1 className="section-title">Projects</h1>

          <span className="section-index">/projects</span>
        </div>

        <div className="blog-list">
          <article className="blog-item">
            <span className="blog-date">01</span>

            <div>
              <Link href="/projects/t1diaries" className="blog-title">
                T1 Diaries
              </Link>

              <p className="blog-description">
                Community-driven Type 1 Diabetes diary platform built with Rust,
                GraphQL and PostgreSQL.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
