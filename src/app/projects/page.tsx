export const metadata = {
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
              <h2 className="blog-title">T1 Diaries</h2>

              <p className="blog-description">
                Community-driven Type 1 Diabetes diary platform built with Rust,
                GraphQL and PostgreSQL.
              </p>
            </div>
          </article>

          <article className="blog-item">
            <span className="blog-date">02</span>

            <div>
              <h2 className="blog-title">dev-note</h2>

              <p className="blog-description">
                Personal engineering notebook for documenting projects,
                experiments and technical decisions.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
