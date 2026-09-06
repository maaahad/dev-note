import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectDocument, getProjectDocuments } from "@/lib/posts";
import { T1DiariesNav } from "../components/T1DiariesNav";

type PageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return getProjectDocuments("t1diaries").map((document) => ({
    section: document.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { section } = await params;

  const document = getProjectDocument("t1diaries", section);

  if (!document) {
    return {};
  }

  return {
    title: `${document.title} — T1 Diaries`,
    description: document.description,
  };
}

export default async function T1DiariesDocumentPage({ params }: PageProps) {
  const { section } = await params;

  const document = getProjectDocument("t1diaries", section);

  if (!document) {
    notFound();
  }

  return (
    <div className="docs-layout">
      <T1DiariesNav activeSection={section} />

      <main className="docs-content">
        <article className="article">
          <header className="article-header">
            <div className="article-meta">/projects/t1diaries/{section}</div>

            <h1 className="article-title">{document.title}</h1>

            <p className="article-description">{document.description}</p>
          </header>

          <div className="prose">
            <MDXRemote source={document.content} />
          </div>
        </article>
      </main>
    </div>
  );
}
