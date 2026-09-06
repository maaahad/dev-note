import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Architecture",
    slug: "architecture",
  },
  {
    number: "02",
    title: "Configuration",
    slug: "configuration",
  },
  {
    number: "03",
    title: "Database",
    slug: "database",
  },
  {
    number: "04",
    title: "GraphQL",
    slug: "graphql",
  },
  {
    number: "05",
    title: "Authentication",
    slug: "authentication",
  },
  {
    number: "06",
    title: "Testing",
    slug: "testing",
  },
  {
    number: "07",
    title: "Deployment",
    slug: "deployment",
  },
];

export function T1DiariesNav({ activeSection }: { activeSection?: string }) {
  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar-project">
        <Link href="/projects/t1diaries">
          <span className="docs-sidebar-command">&gt; cd</span>

          <span className="docs-sidebar-path">/projects/t1diaries</span>
        </Link>
      </div>

      <div className="docs-sidebar-heading">Documentation</div>

      <nav aria-label="T1 Diaries documentation">
        <ul className="docs-nav">
          {sections.map((section) => {
            const isActive = activeSection === section.slug;

            return (
              <li key={section.slug}>
                <Link
                  href={`/projects/t1diaries/${section.slug}`}
                  className={
                    isActive ? "docs-nav-link active" : "docs-nav-link"
                  }
                >
                  <span className="docs-nav-number">{section.number}</span>

                  <span>{section.title}</span>

                  {isActive && <span className="docs-nav-active">●</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
