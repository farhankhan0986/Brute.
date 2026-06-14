"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * ArticleCard — neo-brutalist magazine article card.
 * Sizes controlled by parent grid via className prop.
 */
export default function ArticleCard({ article, priority = false, size = "medium" }) {
  const { title, slug, category, issue, readingTime, excerpt, coverImage, tags } = article;

  const isLarge = size === "large";
  const isSmall = size === "small";

  return (
    <article className="relative group h-full">
      <Link
        href={`/article/${slug}`}
        id={`article-card-${slug}`}
        aria-label={`Read: ${title}`}
        className="block relative overflow-hidden border-[6px] border-black glitch-card bg-black h-full"
        style={{ borderRadius: 0 }}
      >
        {/* ── Cover image ──────────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: isLarge ? "16/9" : isSmall ? "4/3" : "4/3" }}
        >
          <Image
            src={coverImage}
            alt={`Cover image for: ${title}`} /* TODO: Update with descriptive alt */
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:saturate-0"
            priority={priority}
            unoptimized
          />
          <div
            className="absolute inset-0 transition-colors duration-300"
            style={{ background: "rgba(0,0,0,0.45)" }}
            aria-hidden="true"
          />
          {/* Glitch layers via globals.css .glitch-card */}
        </div>

        {/* ── Article info overlay ─────────────────────────── */}
        <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between z-10">
          {/* Top: category pill + reading time */}
          <div className="flex items-start justify-between gap-2">
            <span
              className="font-black uppercase tracking-widest px-2 py-1 border-[2px] border-black"
              style={{ fontSize: "9px", background: "#f2ff00", color: "#000" }}
            >
              {category}
            </span>
            <span className="text-white/60 font-bold" style={{ fontSize: "10px" }}>
              {readingTime}
            </span>
          </div>

          {/* Bottom: title + issue */}
          <div>
            <div className="text-white/40 font-black uppercase tracking-widest mb-1"
                 style={{ fontSize: "9px" }}>
              {issue}
            </div>
            <h3
              className="font-black leading-none uppercase tracking-tighter text-white 
                         group-hover:text-[#f2ff00] transition-colors duration-100"
              style={{
                fontSize: isLarge
                  ? "clamp(1.8rem, 3vw, 3.5rem)"
                  : isSmall
                  ? "clamp(1.1rem, 2vw, 1.8rem)"
                  : "clamp(1.4rem, 2.5vw, 2.5rem)",
                textShadow: "2px 2px 0 rgba(0,0,0,0.9)",
              }}
            >
              {title}
            </h3>

            {/* Excerpt — only on large cards */}
            {isLarge && (
              <p className="text-white/50 text-xs font-medium leading-relaxed mt-2 line-clamp-2">
                {excerpt}
              </p>
            )}

            {/* Read arrow */}
            <div
              className="mt-3 flex items-center gap-2 transition-opacity duration-200"
              style={{ opacity: 0 }}
              ref={(el) => {
                if (el) {
                  el.parentElement?.parentElement?.parentElement?.addEventListener("mouseenter", () => {
                    el.style.opacity = "1";
                  });
                  el.parentElement?.parentElement?.parentElement?.addEventListener("mouseleave", () => {
                    el.style.opacity = "0";
                  });
                }
              }}
            >
              <div className="h-[3px] w-6" style={{ background: "#f2ff00" }} aria-hidden="true" />
              <span className="font-black uppercase tracking-widest text-[#f2ff00]"
                    style={{ fontSize: "9px" }}>
                Read Article
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
