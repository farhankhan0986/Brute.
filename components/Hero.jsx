"use client";

import Link from "next/link";

// Ticker — magazine-themed
const TICKER_ITEMS = [
  "ISSUE 07 OUT NOW",
  "◆",
  "DESIGN WITHOUT APOLOGY",
  "◆",
  "BRUTE. MAGAZINE",
  "◆",
  "CASE STUDIES / THEORY / CULTURE",
  "◆",
  "ISSUE 07 OUT NOW",
  "◆",
  "DESIGN WITHOUT APOLOGY",
  "◆",
  "BRUTE. MAGAZINE",
  "◆",
  "CASE STUDIES / THEORY / CULTURE",
  "◆",
];

export default function Hero({ latestArticle }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black flex flex-col overflow-hidden border-b-[8px] border-black"
      aria-label="Magazine cover"
    >
      {/* ── Decorative issue number watermark ─────────────── */}
      <span
        aria-hidden="true"
        className="absolute right-[-5rem] md:right-[-7rem] top-1/2 -translate-y-1/2 
                   font-black leading-none select-none pointer-events-none z-0 tracking-tighter"
        style={{ fontSize: "28vw", color: "rgba(255,255,255,0.04)" }}
      >
        07
      </span>

      {/* ── Top masthead bar ──────────────────────────────── */}
      <div className="flex items-center justify-between px-6 md:px-14 pt-8 pb-0 z-10">
        <span className="text-white/40 font-black uppercase tracking-[0.4em]"
              style={{ fontSize: "10px" }}>
          Vol. 3 — Issue 07
        </span>
        <span className="text-white/40 font-black uppercase tracking-[0.4em]"
              style={{ fontSize: "10px" }}>
          {/* TODO: Update with current date */}
          June 2026
        </span>
      </div>

      {/* ── Magazine name + cover story ───────────────────── */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-14 z-10 relative">

        {/* Magazine name — large logotype */}
        <div className="flex items-baseline gap-4 mb-6 md:mb-8">
          <h1
            className="font-black leading-none tracking-tighter text-white uppercase"
            style={{ fontSize: "clamp(4rem, 9vw, 11rem)" }}
            aria-label="BRUTE. Magazine"
          >
            BRUTE<span style={{ color: "#f2ff00" }}>.</span>
          </h1>
          <span className="text-white/20 font-black uppercase tracking-widest hidden md:block"
                style={{ fontSize: "11px" }}>
            Design & Culture Magazine
          </span>
        </div>

        {/* Issue label */}
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <span
            className="font-black uppercase tracking-[0.4em] px-3 py-1 border-[3px]"
            style={{ fontSize: "10px", background: "#f2ff00", color: "#000", borderColor: "#f2ff00" }}
          >
            Issue 07 — Cover Story
          </span>
        </div>

        {/* Cover story headline — offset for broken grid effect */}
        <p
          className="font-black leading-none tracking-tighter text-white uppercase"
          style={{
            fontSize: "clamp(2.2rem, 6.5vw, 8rem)",
            marginLeft: "clamp(0px, 3vw, 48px)", /* intentional offset */
            maxWidth: "80%",
          }}
        >
          {/* TODO: Replace with actual featured article title */}
          {latestArticle?.title || "Why Brutalism Is the New Minimalism"}
        </p>

        {/* Excerpt */}
        <p
          className="text-white/50 font-medium leading-relaxed mt-5 md:mt-6"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)", maxWidth: "480px", marginLeft: "clamp(0px, 3vw, 48px)" }}
        >
          {latestArticle?.excerpt || "Minimalism told us to remove. Brutalism tells us to reveal. The difference is more than aesthetic — it is ideological."}
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex items-center gap-5 flex-wrap"
             style={{ marginLeft: "clamp(0px, 3vw, 48px)" }}>
          <Link
            href={latestArticle ? `/article/${latestArticle.slug}` : "/#latest"}
            id="hero-cta-read"
            className="inline-block font-black uppercase tracking-[0.2em]
                       hover:bg-black hover:text-[#f2ff00] 
                       transition-colors duration-100"
            style={{
              background: "#f2ff00",
              color: "#000",
              border: "6px solid #f2ff00",
              padding: "1rem 2.5rem",
              fontSize: "0.8rem",
              borderRadius: 0,
            }}
          >
            Read Cover Story →
          </Link>
          <Link
            href="/#latest"
            id="hero-cta-browse"
            className="inline-block font-black uppercase tracking-[0.2em]
                       hover:border-[#f2ff00] hover:text-[#f2ff00]
                       transition-colors duration-100"
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.6)",
              border: "4px solid rgba(255,255,255,0.25)",
              padding: "1rem 2rem",
              fontSize: "0.8rem",
              borderRadius: 0,
            }}
          >
            Browse All Articles
          </Link>
        </div>
      </div>

      {/* ── Issue stats row ───────────────────────────────── */}
      <div
        className="grid grid-cols-3 border-t-[6px] z-10 relative"
        style={{ borderColor: "rgba(255,255,255,0.12)" }}
        aria-label="Issue stats"
      >
        {[
          { number: "8", label: "Articles" },
          { number: "5", label: "Categories" },
          { number: "47min", label: "Total Read" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="p-4 md:p-7"
            style={{ borderRight: i < 2 ? "4px solid rgba(255,255,255,0.12)" : "none" }}
          >
            <div className="text-white font-black leading-none"
                 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              {stat.number}
            </div>
            <div className="text-white/30 font-black uppercase tracking-widest mt-1"
                 style={{ fontSize: "10px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Scrolling ticker ──────────────────────────────── */}
      <div
        className="overflow-hidden border-t-[6px] border-[#f2ff00] py-3"
        style={{ background: "#f2ff00" }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              className="font-black uppercase whitespace-nowrap"
              style={{ color: "#000", fontSize: "0.7rem", letterSpacing: "0.3em", margin: "0 1.5rem" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
