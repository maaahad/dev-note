import type { Metadata } from "next";
import Link from "next/link";
import { T1DiariesNav } from "./components/T1DiariesNav";

export const metadata: Metadata = {
  title: "T1 Diaries",
};

const sections = [
  {
    number: "01",
    title: "Architecture",
    slug: "architecture",
    description: "Overall architecture and design decisions.",
  },
  {
    number: "02",
    title: "Configuration",
    slug: "configuration",
    description:
      "Application configuration, environment variables and secrets.",
  },
  {
    number: "03",
    title: "Database",
    slug: "database",
    description: "PostgreSQL, SQLx and database migrations.",
  },
  {
    number: "04",
    title: "GraphQL",
    slug: "graphql",
    description: "GraphQL schema, queries, mutations and resolvers.",
  },
  {
    number: "05",
    title: "Authentication",
    slug: "authentication",
    description: "Authentication, JWTs and refresh tokens.",
  },
  {
    number: "06",
    title: "Testing",
    slug: "testing",
    description: "Unit tests, integration tests and test infrastructure.",
  },
  {
    number: "07",
    title: "Deployment",
    slug: "deployment",
    description: "Containers, infrastructure and production deployment.",
  },
];

export default function T1DiariesPage() {
  return (
    <div className="docs-layout">
      <T1DiariesNav />

      <main className="docs-content">
        <header className="docs-project-header">
          <div className="docs-project-header-meta">/projects/t1diaries</div>

          <h1>T1 Diaries</h1>

          <p>
            Community-driven Type 1 Diabetes diary platform built with Rust,
            GraphQL and PostgreSQL.
          </p>
        </header>

        <section className="section">
          <div className="section-heading">
            <h2 className="section-title">Documentation</h2>

            <span className="section-index">07 sections</span>
          </div>

          <div className="blog-list">
            {sections.map((section) => (
              <article key={section.slug} className="blog-item">
                <span className="blog-date">{section.number}</span>

                <div>
                  <Link
                    href={`/projects/t1diaries/${section.slug}`}
                    className="blog-title"
                  >
                    {section.title}
                  </Link>

                  <p className="blog-description">{section.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
