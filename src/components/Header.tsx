import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="Home">
          <span className="site-brand-mark">&lt;MA /&gt;</span>

          <span className="site-brand-path">~/dev-note</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/projects">
            <span className="nav-index">01</span>
            projects
          </Link>

          <Link href="/blog">
            <span className="nav-index">02</span>
            blog
          </Link>

          <Link href="/about">
            <span className="nav-index">03</span>
            about
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
