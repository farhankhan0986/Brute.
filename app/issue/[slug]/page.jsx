import Link from "next/link";
import { notFound } from "next/navigation";
import { ISSUES, getIssueBySlug } from "@/data/issues";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";

/**
 * Generate static params for all issues to compile them statically.
 */
export async function generateStaticParams() {
  return ISSUES.map((issue) => ({
    slug: issue.slug,
  }));
}

/**
 * Dynamic metadata generation.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const issue = ISSUES.find((i) => i.slug === slug);

  if (!issue) {
    return { title: "Issue Not Found — BRUTE. Magazine" };
  }

  return {
    title: `Issue ${issue.number}: ${issue.theme} — BRUTE. Magazine`,
    description: issue.description,
  };
}

export default async function IssuePage({ params }) {
  const { slug } = await params;
  const issueData = getIssueBySlug(slug);

  if (!issueData) {
    notFound();
  }

  const { number, theme, date, description, articles: issueArticles } = issueData;

  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <div>
        {/* ── Sticky Top Navigation ── */}
        <div className="border-b-[6px] border-black bg-white px-6 md:px-14 py-4 flex items-center justify-between sticky top-0 z-40">
          <Link
            href="/#issues"
            id="issue-back-btn"
            className="font-black uppercase tracking-widest hover:text-[#f2ff00] hover:bg-black px-4 py-2 border-[4px] border-black transition-colors duration-100"
            style={{ borderRadius: 0, fontSize: "11px" }}
          >
            ← Back to Archive
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-black/30 font-black uppercase tracking-widest" style={{ fontSize: "10px" }}>
              BRUTE. Magazine
            </span>
            <span className="text-black/20 font-black">·</span>
            <span className="text-black/30 font-black uppercase tracking-widest" style={{ fontSize: "10px" }}>
              Issue {number}
            </span>
            <span className="text-black/20 font-black">·</span>
            <span className="text-black/30 font-black uppercase tracking-widest" style={{ fontSize: "10px" }}>
              {date}
            </span>
          </div>
        </div>

        {/* ── Issue Banner / Hero Section ── */}
        <section className="relative bg-[#f2ff00] border-b-[8px] border-black py-16 md:py-24 px-6 md:px-14 overflow-hidden">
          {/* Huge decorative watermark background */}
          <span
            className="absolute right-[-4rem] md:right-[-6rem] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none z-0 tracking-tighter"
            style={{ fontSize: "30vw", color: "rgba(0,0,0,0.03)" }}
            aria-hidden="true"
          >
            {number}
          </span>

          <div className="relative z-10 max-w-5xl">
            <span className="font-black uppercase tracking-[0.4em] bg-black text-[#f2ff00] px-3 py-1 border-[3px] border-black inline-block mb-4 text-xs">
              Issue {number} Archive
            </span>
            <h1
              className="font-black text-black leading-none uppercase tracking-tighter mb-6 -ml-1"
              style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
            >
              {theme}
            </h1>
            <p
              className="text-black/70 font-semibold leading-relaxed max-w-2xl text-[16px] md:text-[18px]"
            >
              {description}
            </p>
            <div className="mt-8 flex gap-6 text-black/55 text-xs font-black uppercase tracking-widest">
              <span>Date: {date}</span>
              <span>•</span>
              <span>Articles count: {issueArticles.length}</span>
            </div>
          </div>
        </section>

        {/* ── Articles Grid ── */}
        <section className="py-14 md:py-20 px-6 md:px-14">
          <h2 className="font-black text-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black" />
            Articles in this Issue ({issueArticles.length})
          </h2>

          {issueArticles.length === 0 ? (
            <div className="border-[6px] border-black p-12 text-center bg-white shadow-[8px_8px_0_#000000] max-w-xl mx-auto my-10">
              <span className="font-black text-black uppercase tracking-widest text-lg block mb-4">
                No Articles Seeded
              </span>
              <p className="text-black/55 font-medium mb-6 text-sm leading-relaxed">
                There are no articles written for this historical issue yet. Check back later or browse other editions.
              </p>
              <Link
                href="/#issues"
                className="font-black uppercase tracking-widest border-[4px] border-black bg-[#f2ff00] px-6 py-2 hover:bg-black hover:text-[#f2ff00] transition-colors duration-100 cursor-pointer"
                style={{ fontSize: "11px" }}
              >
                Back to Archive
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {issueArticles.map((article) => (
                <div key={article.id} className="min-h-[350px]">
                  <ArticleCard article={article} size="medium" />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
