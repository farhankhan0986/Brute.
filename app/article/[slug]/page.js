import ArticleLayout from "@/components/ArticleLayout";
import { articles, getArticleBySlug } from "@/data/articles";
import { notFound } from "next/navigation";

/**
 * Dynamic article page — /article/[slug]
 * Params is a Promise in Next.js 16+ — must await it.
 */

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found — BRUTE. Magazine" };
  }

  return {
    title: `${article.title} — BRUTE. Magazine`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — BRUTE. Magazine`,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <ArticleLayout article={article} />
    </main>
  );
}
