import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="Home">
          <span className="site-brand-mark">M.A.</span>

          <span className="site-brand-path">~/dev-note</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/projects">[ projects ]</Link>

          <Link href="/blog">[ blog ]</Link>

          <Link href="/about">[ about ]</Link>

          <Link href="https://github.com/maaahad" target="_blank">
            [ git ]
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
