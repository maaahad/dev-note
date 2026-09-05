import Link from "next/link";

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="terminal-prompt">
          <span className="prompt-symbol">&gt;</span>
          <span>whoami</span>
        </div>

        <h1>Muhammed Ahad</h1>

        <p className="hero-description">
          Software engineer building things with Rust, TypeScript, React and
          GraphQL.
        </p>

        <div className="terminal-output">
          <div>
            <span className="terminal-label">role</span>
            <span>software engineer</span>
          </div>

          <div>
            <span className="terminal-label">focus</span>
            <span>full-stack development</span>
          </div>

          <div>
            <span className="terminal-label">stack</span>
            <span>rust · react · next.js · graphql · postgres</span>
          </div>
        </div>

        <nav className="hero-links" aria-label="Main navigation">
          <Link href="/projects">projects</Link>
          <Link href="/blog">blog</Link>
          <Link href="/about">about</Link>
        </nav>
      </section>

      <section className="terminal-window">
        <div className="terminal-window-header">
          <span>~/dev-note</span>

          <span className="terminal-status">● online</span>
        </div>

        <div className="terminal-window-body">
          <p>
            <span className="prompt-symbol">$</span> cat README.md
          </p>

          <p className="terminal-muted">A personal engineering notebook.</p>

          <p className="terminal-muted">
            Notes, projects, experiments and things I learn while building
            software.
          </p>

          <p>
            <span className="prompt-symbol">$</span>{" "}
            <span className="cursor">_</span>
          </p>
        </div>
      </section>
    </main>
  );
}
