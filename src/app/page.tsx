import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">
      <section className="home-hero">
        <div className="command">
          <span className="prompt">&gt;</span>
          <span>whoami</span>
        </div>

        <h1 className="home-title">muhammed ahad</h1>

        <p className="home-subtitle">
          Software engineer building software with Rust, TypeScript, React,
          GraphQL and PostgreSQL.
        </p>

        <div className="home-meta">
          <div className="home-meta-row">
            <span className="meta-label">role</span>

            <span>software engineer</span>
          </div>

          <div className="home-meta-row">
            <span className="meta-label">focus</span>

            <span>full-stack development</span>
          </div>

          <div className="home-meta-row">
            <span className="meta-label">currently</span>

            <span>learning Rust backend engineering</span>
          </div>

          <div className="home-meta-row">
            <span className="meta-label">stack</span>

            <span>rust · axum · graphql · postgres · react · next.js</span>
          </div>
        </div>

        <div className="home-actions">
          <Link href="/projects" className="home-action">
            projects
          </Link>

          <Link href="/blogs" className="home-action">
            blogs
          </Link>

          <Link href="/about" className="home-action">
            about
          </Link>
        </div>
      </section>

      <section className="terminal">
        <div className="terminal-header">
          <span>~/dev-note</span>

          <span className="terminal-status">● online</span>
        </div>

        <div className="terminal-body">
          <p className="terminal-line">
            <span className="prompt">$</span> cat README.md
          </p>

          <p className="terminal-output">A personal engineering notebook.</p>

          <p className="terminal-output">
            Notes, projects, experiments and things learned while building
            software.
          </p>

          <p className="terminal-output">Everything starts here.</p>

          <p className="terminal-line">
            <span className="prompt">$</span> <span className="cursor">_</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2 className="section-title">Recent writing</h2>

          <span className="section-index">/blogs</span>
        </div>

        <p className="terminal-output">
          Technical notes about software engineering, Rust, GraphQL, frontend
          architecture and things I'm building.
        </p>
      </section>
    </div>
  );
}
