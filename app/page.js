import Hero from "@/components/Hero";
import ArticleGrid from "@/components/ArticleGrid";
import Editorial from "@/components/Editorial";
import IssueArchive from "@/components/IssueArchive";
import Footer from "@/components/Footer";
import { articles, getFeaturedArticles } from "@/data/articles";

export default function HomePage() {
  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <main>
      {/* 01 — Magazine Cover / Hero */}
      <Hero latestArticle={featuredArticle} />

      {/* 02 — Latest Articles Grid */}
      <ArticleGrid articles={articles} />

      {/* 03 — Editorial Statement (About) */}
      <Editorial />

      {/* 04 — Issue Archive */}
      <IssueArchive />

      {/* 05 — Footer / Contact */}
      <Footer />
    </main>
  );
}
