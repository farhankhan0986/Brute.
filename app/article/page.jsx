"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import Footer from "@/components/Footer";

const CATEGORIES = ["All", "Case Study", "Opinion", "Education", "How-To", "Typography", "Design Theory"];

export default function AllArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredArticles = articles.filter((a) => {
    if (activeCategory === "All") return true;

    const categoryLower = a.category.toLowerCase().trim();
    const filterLower = activeCategory.toLowerCase().trim();

    if (categoryLower === filterLower) return true;
    if (filterLower === "case study" && categoryLower === "analysis") return true;
    if (filterLower === "design theory" && (categoryLower === "ux ethics" || categoryLower === "color theory")) return true;
    if (a.tags && a.tags.some(tag => tag.toLowerCase().trim() === filterLower)) return true;

    return false;
  });

  return (
    <>
      {/* Sticky header bar */}
      <div className="border-b-[6px] border-black bg-white px-6 md:px-14 py-4 flex items-center justify-between sticky top-0 z-40">
        <Link
          href="/"
          id="archive-back-btn"
          className="font-black uppercase tracking-widest hover:text-[#f2ff00] hover:bg-black px-4 py-2 border-[4px] border-black transition-colors duration-100"
          style={{ borderRadius: 0, fontSize: "11px" }}
        >
          ← Back to Home
        </Link>
        <span className="text-black/35 font-black uppercase tracking-widest" style={{ fontSize: "10px" }}>
          BRUTE. Archive Index — Issue 07
        </span>
      </div>

      <main className="bg-white min-h-screen py-14 md:py-20 border-b-[8px] border-black">
        {/* Title Masthead */}
        <div className="relative mb-14 overflow-hidden px-6 md:px-14">
          <div className="flex items-baseline gap-5">
            <h1
              className="font-black text-black leading-none uppercase tracking-tighter -ml-1"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
            >
              ARCHIVE
            </h1>
            <span
              className="font-black leading-none -mb-2 select-none"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "rgba(0,0,0,0.07)" }}
              aria-hidden="true"
            >
              idx.
            </span>
          </div>
          <div className="mt-3 h-[6px] bg-[#f2ff00] border-[2px] border-black" style={{ width: "clamp(100px, 15vw, 220px)" }} />
          <p className="mt-4 text-black/40 font-black uppercase tracking-widest" style={{ fontSize: "11px" }}>
            Total Catalog — {articles.length} Articles · {filteredArticles.length} matching entries
          </p>
        </div>

        {/* Category Filters */}
        <div className="px-6 md:px-14 mb-12 flex gap-0 overflow-x-auto">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-black uppercase tracking-widest whitespace-nowrap px-4 py-2 border-[4px] border-black -ml-[4px] first:ml-0 hover:bg-[#f2ff00] hover:z-10 relative cursor-pointer transition-colors duration-100"
                style={{ fontSize: "10px", background: isActive ? "#f2ff00" : "#fff", color: "#000", outline: "none" }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid list */}
        <div className="px-6 md:px-14">
          {filteredArticles.length === 0 ? (
            <div className="border-[6px] border-black p-12 text-center my-10 bg-white shadow-[8px_8px_0_#000000] max-w-xl mx-auto">
              <span className="font-black text-black uppercase tracking-widest text-lg block mb-4">
                No Archive Entries
              </span>
              <p className="text-black/55 font-medium max-w-sm mx-auto mb-6 text-sm leading-relaxed">
                We couldn't find any entries under "{activeCategory}". Reset the filters to view the full catalog.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="font-black uppercase tracking-widest border-[4px] border-black bg-[#f2ff00] px-6 py-2 hover:bg-black hover:text-[#f2ff00] transition-colors duration-100 cursor-pointer"
                style={{ fontSize: "11px" }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="border-[6px] border-black bg-white flex flex-col justify-between shadow-[8px_8px_0_#000000] hover:shadow-[12px_12px_0_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 relative group"
                >
                  <div>
                    {/* Cover image thumbnail */}
                    <div className="relative w-full aspect-video border-b-[6px] border-black bg-black overflow-hidden">
                      <Image
                        src={article.coverImage}
                        alt={`Cover: ${article.title}`}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        unoptimized
                      />
                      <div className="absolute top-3 left-3">
                        <span className="font-black uppercase tracking-widest text-[9px] bg-black text-white px-2 py-1 border-[2px] border-white">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2 text-black/35 font-black uppercase tracking-widest" style={{ fontSize: "9px" }}>
                        <span>{article.issue}</span>
                        <span>·</span>
                        <span>{article.readingTime}</span>
                      </div>
                      <h2 className="font-black text-black uppercase tracking-tight leading-tight group-hover:text-black mb-3 line-clamp-2" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>
                        {article.title}
                      </h2>
                      <p className="text-black/60 font-medium text-xs line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Link */}
                  <div className="p-5 pt-0 mt-auto">
                    <Link
                      href={`/article/${article.slug}`}
                      className="block font-black text-center uppercase tracking-widest border-[3px] border-black bg-black text-white py-2 hover:bg-[#f2ff00] hover:text-black transition-colors duration-100 text-[10px]"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
