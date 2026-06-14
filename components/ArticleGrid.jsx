"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

const CATEGORIES = ["All", "Case Study", "Opinion", "Education", "How-To", "Typography", "Design Theory"];

/**
 * ArticleGrid — broken grid magazine layout.
 * Dynamic filtering of articles + responsive broken grid mapping.
 */
export default function ArticleGrid({ articles }) {
  const [activeCategory, setActiveCategory] = useState("All");

  if (!articles || articles.length === 0) return null;

  // Filter articles based on active category
  const filteredArticles = articles.filter((a) => {
    if (activeCategory === "All") return true;

    const categoryLower = a.category.toLowerCase().trim();
    const filterLower = activeCategory.toLowerCase().trim();

    // Match direct category
    if (categoryLower === filterLower) return true;

    // Group subcategories/related terms:
    // - "Analysis" groups under "Case Study"
    if (filterLower === "case study" && categoryLower === "analysis") return true;

    // - "UX Ethics" or "Color Theory" groups under "Design Theory"
    if (filterLower === "design theory" && (categoryLower === "ux ethics" || categoryLower === "color theory")) return true;

    // Check if any tag matches the filter name
    if (a.tags && a.tags.some(tag => tag.toLowerCase().trim() === filterLower)) return true;

    return false;
  });

  return (
    <section
      id="latest"
      className="relative bg-white border-b-[8px] border-black py-14 md:py-20 overflow-hidden"
      aria-label="Latest articles"
    >
      {/* ── Section header ───────────────────────────────────── */}
      <div className="relative mb-10 md:mb-14 overflow-hidden">
        <div className="flex items-baseline gap-5 px-6 md:px-14">
          <h2
            className="font-black text-black leading-none uppercase tracking-tighter -ml-1"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
            aria-label="Latest articles"
          >
            LATEST
          </h2>
          <span
            className="font-black leading-none -mb-2 select-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "rgba(0,0,0,0.07)" }}
            aria-hidden="true"
          >
            02
          </span>
        </div>
        <div
          className="ml-6 md:ml-14 mt-2 h-[6px] bg-[#f2ff00] border-[2px] border-black"
          style={{ width: "clamp(100px, 15vw, 220px)" }}
          aria-hidden="true"
        />
        <p className="ml-6 md:ml-14 mt-3 text-black/40 font-black uppercase tracking-widest"
           style={{ fontSize: "11px" }}>
          Issue 07 — {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"}
        </p>
      </div>

      {/* ── Category filter strip ── */}
      <div className="px-6 md:px-14 mb-8 md:mb-10 flex gap-0 overflow-x-auto">
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-black uppercase tracking-widest whitespace-nowrap px-4 py-2
                         border-[4px] border-black -ml-[4px] first:ml-0
                         hover:bg-[#f2ff00] hover:z-10 relative cursor-pointer transition-colors duration-100"
              style={{ fontSize: "10px", background: isActive ? "#f2ff00" : "#fff", color: "#000", outline: "none" }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── Grid Container ── */}
      <div className="px-4 md:px-10">
        {filteredArticles.length === 0 ? (
          <div className="border-[6px] border-black p-12 text-center my-10 bg-white shadow-[8px_8px_0_#000000] max-w-xl mx-auto">
            <span className="font-black text-black uppercase tracking-widest text-lg block mb-4">
              No Articles Found
            </span>
            <p className="text-black/55 font-medium max-w-sm mx-auto mb-6 text-sm leading-relaxed">
              We couldn't find any articles under "{activeCategory}" matching your selection. Please try another filter or reset.
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
          <>
            {/* ROW 1: Large featured (8 cols) + two stacked smalls (4 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-4 md:mb-5">
              {filteredArticles[0] && (
                <div className="md:col-span-8">
                  <ArticleCard article={filteredArticles[0]} size="large" priority />
                </div>
              )}
              <div className="md:col-span-4 flex flex-col gap-4 md:gap-5"
                   style={{ marginTop: "clamp(0px, 3vw, 48px)" }}>
                {filteredArticles[1] && <ArticleCard article={filteredArticles[1]} size="small" />}
                {filteredArticles[2] && <ArticleCard article={filteredArticles[2]} size="small" />}
              </div>
            </div>

            {/* ROW 2: Mid divider with accent + 3 columns */}
            <div className="relative mb-4 md:mb-5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 relative z-10">
                {/* Solid accent block — "In this issue" info */}
                <div
                  className="md:col-span-3 flex flex-col justify-between p-5 md:p-8 
                             border-[6px] border-black"
                  style={{ background: "#f2ff00" }}
                  aria-label="Issue navigation"
                >
                  <div>
                    <p className="font-black uppercase tracking-[0.4em]" style={{ fontSize: "9px", color: "#000" }}>
                      In This Issue
                    </p>
                    <div className="mt-4 space-y-3">
                      {["Opinion", "Case Study", "Education", "How-To", "Typography"].map((c) => (
                        <div key={c} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-black shrink-0" aria-hidden="true" />
                          <span className="font-black uppercase tracking-widest text-black"
                                style={{ fontSize: "10px" }}>
                            {c}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/#issues"
                    className="mt-6 block font-black uppercase tracking-widest text-black 
                               border-[3px] border-black px-3 py-2 text-center
                               hover:bg-black hover:text-[#f2ff00] transition-colors duration-100"
                    style={{ fontSize: "9px" }}
                  >
                    All Issues →
                  </Link>
                </div>

                {filteredArticles[3] && (
                  <div className="md:col-span-5">
                    <ArticleCard article={filteredArticles[3]} size="medium" />
                  </div>
                )}
                {filteredArticles[4] && (
                  <div className="md:col-span-4"
                       style={{ marginTop: "clamp(0px, -2vw, -28px)" }}>
                    <ArticleCard article={filteredArticles[4]} size="medium" />
                  </div>
                )}
              </div>
            </div>

            {/* ROW 3: Wide + narrow */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
              {filteredArticles[5] && (
                <div className="md:col-span-7">
                  <ArticleCard article={filteredArticles[5]} size="medium" />
                </div>
              )}
              {filteredArticles[6] && (
                <div className="md:col-span-5"
                     style={{ marginTop: "clamp(0px, 4vw, 56px)" }}>
                  <ArticleCard article={filteredArticles[6]} size="medium" />
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* ── View all CTA ──────────────────────────────────── */}
      <div className="px-6 md:px-14 mt-12 flex items-center gap-6 flex-wrap">
        <Link
          href="/article"
          id="articles-view-all"
          className="inline-block font-black uppercase tracking-[0.2em]
                     hover:bg-[#f2ff00] hover:text-black transition-colors duration-100 cursor-pointer"
          style={{
            background: "#000",
            color: "#fff",
            border: "6px solid #000",
            padding: "0.9rem 2.5rem",
            fontSize: "0.75rem",
            borderRadius: 0,
          }}
        >
          All Articles ({articles.length})
        </Link>
        <div className="h-[4px] bg-black flex-1 hidden md:block" aria-hidden="true" />
      </div>

      {/* ── Watermark ────────────────────────────────────── */}
      <div
        className="absolute bottom-0 right-0 font-black leading-none 
                   select-none pointer-events-none tracking-tighter"
        style={{ fontSize: "18vw", color: "rgba(0,0,0,0.04)" }}
        aria-hidden="true"
      >
        READ
      </div>
    </section>
  );
}
