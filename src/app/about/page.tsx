export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="page">
      <article className="article">
        <header className="article-header">
          <div className="article-meta">$ cat about.txt</div>

          <h1 className="article-title">About</h1>
        </header>

        <div className="prose">
          <p>
            I'm Muhammed Ahad, a software engineer interested in building
            reliable and maintainable software.
          </p>

          <p>
            My frontend background is primarily React, Next.js and TypeScript.
            I'm currently going deeper into backend engineering with Rust.
          </p>

          <p>
            This website is my engineering notebook. I use it to document
            projects, experiments, architecture decisions and things I learn.
          </p>
        </div>
      </article>
    </div>
  );
}
