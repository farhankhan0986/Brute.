import Image from "next/image";
import Link from "next/link";

function renderListText(text) {
  if (typeof text !== "string") return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-black text-black uppercase tracking-wider text-xs bg-[#f2ff00] px-1 border-2 border-black mr-1 shadow-[2px_2px_0_#000000]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/**
 * Renders a structured body array: [{type:"p"|"h2"|"blockquote"|"ul"|"ol", text:"...", items:[]}]
 * Used by all three variants.
 */
function ArticleBody({ body, isLead = false }) {
  if (!body || body.length === 0) return null;
  return (
    <div className="space-y-6">
      {body.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="font-black text-black uppercase tracking-wider pt-6 pb-2 border-b-[3px] border-black/10 flex items-center gap-2"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
            >
              <span className="inline-block w-3 h-3 bg-[#f2ff00] border-2 border-black shrink-0" />
              {block.text}
            </h2>
          );
        }
        if (block.type === "blockquote") {
          return (
            <blockquote
              key={i}
              className="border-l-[6px] border-[#f2ff00] pl-5 my-6 font-black text-black italic leading-tight"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
            >
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "ul") {
          return (
            <div key={i} className="my-6 pl-1">
              {block.title && (
                <h4 className="font-black text-black uppercase tracking-wider mb-4 text-xs flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#f2ff00] border-2 border-black" />
                  {block.title}
                </h4>
              )}
              <ul className="space-y-4">
                {block.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 bg-[#f2ff00] border-[3px] border-black shrink-0 shadow-[1px_1px_0_#000000]" aria-hidden="true" />
                    <span className="font-semibold text-black/80 text-[15px] leading-snug">
                      {renderListText(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (block.type === "ol") {
          return (
            <div key={i} className="my-6 pl-1">
              {block.title && (
                <h4 className="font-black text-black uppercase tracking-wider mb-4 text-xs flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-black" />
                  {block.title}
                </h4>
              )}
              <ol className="space-y-4">
                {block.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-black text-[10px] text-black bg-[#f2ff00] border-[2.5px] border-black px-1.5 py-0.5 shrink-0 shadow-[2px_2px_0_#000000] leading-none" aria-hidden="true">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-black/80 text-[15px] leading-snug pt-0.5">
                      {renderListText(item)}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          );
        }
        
        // Render first paragraph with a drop cap
        if (i === 0 && isLead) {
          const text = block.text;
          const firstChar = text.charAt(0);
          const restText = text.slice(1);
          return (
            <p
              key={i}
              className="leading-relaxed font-semibold text-black mb-5"
              style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.15rem)" }}
            >
              <span className="float-left text-5xl md:text-6xl font-black bg-[#f2ff00] text-black border-4 border-black px-3 py-1 mr-3 mt-1 leading-none shadow-[4px_4px_0_#000000]">
                {firstChar}
              </span>
              {restText}
            </p>
          );
        }

        return (
          <p
            key={i}
            className="leading-relaxed font-medium text-black/75 mb-4"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)" }}
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

/**
 * ArticleLayout — experimental magazine article page layout.
 * Three variants (A, B, C) with dramatic type sizes, accent dividers,
 * and table of contents. Body rendered from structured data.
 */
export default function ArticleLayout({ article }) {
  const { layoutVariant = "A" } = article;

  return (
    <>
      {/* ── Article header — sticky back nav ──────────────── */}
      <div
        className="border-b-[6px] border-black bg-white px-6 md:px-14 py-4 
                   flex items-center justify-between sticky top-0 z-40"
      >
        <Link
          href="/"
          id="article-back-btn"
          className="font-black uppercase tracking-widest 
                     hover:text-[#f2ff00] hover:bg-black px-4 py-2
                     border-[4px] border-black transition-colors duration-100"
          style={{ borderRadius: 0, fontSize: "11px" }}
        >
          ← All Articles
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-black/30 font-black uppercase tracking-widest"
                style={{ fontSize: "10px" }}>
            {article.issue}
          </span>
          <span className="text-black/20 font-black">·</span>
          <span className="text-black/30 font-black uppercase tracking-widest"
                style={{ fontSize: "10px" }}>
            {article.readingTime}
          </span>
          <span className="text-black/20 font-black">·</span>
          <span className="text-black/30 font-black uppercase tracking-widest"
                style={{ fontSize: "10px" }}>
            {article.category}
          </span>
        </div>
      </div>

      {/* ── Layout variant ────────────────────────────────── */}
      {layoutVariant === "A" && <VariantA article={article} />}
      {layoutVariant === "B" && <VariantB article={article} />}
      {layoutVariant === "C" && <VariantC article={article} />}

      {/* ── Continue reading ──────────────────────────────── */}
      <div className="bg-black border-t-[8px] border-[#f2ff00] px-6 md:px-14 py-12 md:py-20">
        <p className="font-black text-white/25 uppercase tracking-[0.5em] mb-4"
           style={{ fontSize: "10px" }}>
          Continue Reading
        </p>
        <Link
          href="/#latest"
          id="article-next"
          className="font-black text-white uppercase leading-none tracking-tighter 
                     hover:text-[#f2ff00] transition-colors duration-100 block"
          style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}
        >
          More Articles →
        </Link>
      </div>
    </>
  );
}

/* ================================================================
   VARIANT A: Full-bleed hero → tag strip → body + ToC sidebar → pullquote
   ================================================================ */
function VariantA({ article }) {
  return (
    <article aria-label={`Article: ${article.title}`}>

      {/* Full-bleed hero image */}
      <div
        className="relative w-full bg-black border-b-[8px] border-black overflow-hidden"
        style={{ height: "clamp(300px, 65vh, 700px)" }}
      >
        <Image
          src={article.images[0] || article.coverImage}
          alt={`Header image for: ${article.title}`}
          fill
          className="object-cover opacity-60"
          priority
          unoptimized
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-14">
          <span
            className="font-black uppercase tracking-[0.4em] mb-4 inline-block px-2 py-1 border-[2px] border-black"
            style={{ fontSize: "10px", background: "#f2ff00", color: "#000", width: "fit-content" }}
          >
            {article.category} — {article.issue}
          </span>
          <h1
            className="font-black text-white leading-none tracking-tighter uppercase"
            style={{ fontSize: "clamp(2.2rem, 7vw, 9rem)" }}
          >
            {article.title}
          </h1>
        </div>
      </div>

      {/* Tag + metadata strip */}
      <div
        className="border-b-[8px] border-black px-6 md:px-14 py-5"
        style={{ background: "#f2ff00" }}
      >
        <div className="flex items-center flex-wrap gap-3">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="font-black text-black uppercase tracking-[0.3em] 
                         border-[3px] border-black px-3 py-1"
              style={{ fontSize: "10px" }}
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto font-black text-black/50 uppercase tracking-widest"
                style={{ fontSize: "10px" }}>
            By {article.author} · {article.readingTime}
          </span>
        </div>
      </div>

      {/* Body + sidebar */}
      <div className="bg-white px-6 md:px-14 py-14 md:py-20 border-b-[8px] border-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">

          {/* Main body — real content */}
          <div className="md:col-span-7">
            <p className="font-black text-black/20 uppercase tracking-[0.5em] mb-6"
               style={{ fontSize: "10px" }}>
              Article
            </p>
            <ArticleBody body={article.body} isLead />
          </div>

          {/* Sidebar: table of contents + details */}
          <div className="md:col-span-5 md:pl-8 md:border-l-[4px] md:border-black sticky top-24 self-start">
            <p className="font-black text-black/20 uppercase tracking-[0.5em] mb-5"
               style={{ fontSize: "10px" }}>
              Contents
            </p>
            {article.tableOfContents && (
              <div className="border-[4px] border-black shadow-[6px_6px_0_#000000] mb-8 bg-white">
                <div className="bg-[#f2ff00] border-b-[4px] border-black px-4 py-3">
                  <h3 className="font-black text-black text-xs uppercase tracking-[0.3em]">
                    Table of Contents
                  </h3>
                </div>
                <ol className="divide-y-[3px] divide-black">
                  {article.tableOfContents.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 hover:bg-black hover:text-white transition-colors duration-100 group">
                      <span
                        className="font-black shrink-0 leading-none"
                        style={{ fontSize: "11px", color: "#f2ff00", WebkitTextStroke: "1px black" }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-black uppercase tracking-widest leading-tight group-hover:translate-x-1 transition-transform duration-100"
                            style={{ fontSize: "11px" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Author", value: article.author },
                { label: "Issue", value: article.issue },
                { label: "Category", value: article.category },
                { label: "Read Time", value: article.readingTime },
              ].map(({ label, value }) => (
                <div key={label} className="border-[4px] border-black p-4 bg-white shadow-[4px_4px_0_#000000]">
                  <dt className="font-black text-black/25 uppercase tracking-widest"
                      style={{ fontSize: "9px" }}>
                    {label}
                  </dt>
                  <dd className="font-black text-black uppercase mt-1"
                      style={{ fontSize: "12px" }}>
                    {value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="bg-black px-6 md:px-14 py-14 md:py-20 border-b-[8px] border-black overflow-hidden relative">
        <div
          className="absolute inset-0 font-black leading-none select-none pointer-events-none flex items-center justify-center"
          style={{ fontSize: "clamp(10rem, 22vw, 28rem)", color: "rgba(255,255,255,0.025)" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <blockquote
          className="relative z-10 font-black text-white leading-none tracking-tighter uppercase"
          style={{ fontSize: "clamp(2rem, 5vw, 7rem)" }}
        >
          {article.pullQuote}
        </blockquote>
      </div>

      {/* Additional images */}
      {article.images.length > 1 && (
        <div className="bg-white px-4 md:px-10 py-8 md:py-12 border-b-[8px] border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {article.images.slice(1).map((img, i) => (
              <div key={i} className="relative aspect-video border-[6px] border-black overflow-hidden">
                <Image
                  src={img}
                  alt={`${article.title} — image ${i + 2}`}
                  fill className="object-cover" unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

/* ================================================================
   VARIANT B: Split hero + accent divider + editorial body
   ================================================================ */
function VariantB({ article }) {
  const titleWords = article.title.split(" ");
  const midpoint = Math.ceil(titleWords.length / 2);

  return (
    <article aria-label={`Article: ${article.title}`}>

      {/* Split hero */}
      <div className="relative border-b-[8px] border-black overflow-hidden" style={{ minHeight: "65vh" }}>
        <div className="grid grid-cols-2 h-full" style={{ minHeight: "65vh" }}>
          <div className="bg-black flex flex-col justify-end p-6 md:p-12 border-r-[4px] border-black">
            <span
              className="font-black uppercase tracking-[0.4em] mb-5 inline-block px-2 py-1 border-[2px]"
              style={{ fontSize: "10px", background: "#f2ff00", color: "#000", borderColor: "#f2ff00", width: "fit-content" }}
            >
              {article.category} — {article.issue}
            </span>
            <h1
              className="font-black text-white leading-none tracking-tighter uppercase"
              style={{ fontSize: "clamp(2rem, 6vw, 8rem)" }}
            >
              {titleWords.slice(0, midpoint).join(" ")}
            </h1>
          </div>
          <div className="bg-white relative">
            <Image
              src={article.coverImage}
              alt={`Cover: ${article.title}`}
              fill className="object-cover" priority unoptimized
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-white/75">
              <h1
                className="font-black text-black leading-none tracking-tighter uppercase"
                style={{ fontSize: "clamp(2rem, 6vw, 8rem)" }}
              >
                {titleWords.slice(midpoint).join(" ")}
              </h1>
              <p className="text-black/40 font-black uppercase tracking-widest mt-3"
                 style={{ fontSize: "10px" }}>
                {article.readingTime} · {article.author}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow accent line */}
      <div className="h-5 bg-[#f2ff00] border-b-[8px] border-black" aria-hidden="true" />

      {/* Large lede sentence + full body */}
      <div className="bg-white px-6 md:px-14 py-14 md:py-20 border-b-[8px] border-black">
        <div className="max-w-4xl">
          <p
            className="font-black text-black leading-tight tracking-tight uppercase mb-8"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 4.5rem)" }}
          >
            {article.excerpt.split(".")[0]}.
          </p>
          <ArticleBody body={article.body} isLead />
        </div>
        {/* Tags */}
        <div className="flex gap-3 flex-wrap mt-9">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="font-black text-black uppercase tracking-widest 
                         border-[3px] border-black px-3 py-2 
                         hover:bg-[#f2ff00] transition-colors duration-100"
              style={{ fontSize: "10px" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Pull quote on yellow */}
      <div
        className="border-b-[8px] border-black px-6 md:px-14 py-14 md:py-20 flex justify-center bg-white"
      >
        <div className="bg-[#f2ff00] border-[6px] border-black p-8 md:p-12 shadow-[12px_12px_0_#000000] rotate-[-1deg] hover:rotate-0 transition-transform duration-100 max-w-5xl w-full">
          <blockquote
            className="font-black text-black leading-none tracking-tighter uppercase"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 6rem)" }}
          >
            &ldquo;{article.pullQuote}&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Images */}
      {article.images.length > 0 && (
        <div className="bg-black px-4 md:px-10 py-9 border-b-[8px] border-black">
          <div className="grid grid-cols-1 gap-4">
            {article.images.map((img, i) => (
              <div
                key={i}
                className="relative border-[6px] overflow-hidden"
                style={{ aspectRatio: "16/9", borderColor: "rgba(255,255,255,0.15)" }}
              >
                <Image
                  src={img} alt={`${article.title} — image ${i + 1}`}
                  fill className="object-cover" unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

/* ================================================================
   VARIANT C: Giant type display + staggered layout
   ================================================================ */
function VariantC({ article }) {
  return (
    <article aria-label={`Article: ${article.title}`}>

      {/* Giant title */}
      <div className="bg-white px-6 md:px-14 pt-14 md:pt-20 pb-7 border-b-[8px] border-black overflow-hidden relative">
        <div
          className="absolute top-10 right-[-5rem] font-black uppercase tracking-widest select-none"
          style={{ fontSize: "clamp(2rem, 8vw, 9rem)", color: "rgba(0,0,0,0.04)", transform: "rotate(90deg)", transformOrigin: "right center" }}
          aria-hidden="true"
        >
          {article.category}
        </div>
        <span
          className="font-black uppercase tracking-[0.4em] mb-5 inline-block px-2 py-1 border-[2px] border-black"
          style={{ fontSize: "10px", background: "#000", color: "#f2ff00" }}
        >
          {article.issue} — {article.category}
        </span>
        <h1
          className="font-black text-black leading-none tracking-tighter uppercase mb-3 relative z-10"
          style={{ fontSize: "clamp(2.5rem, 9vw, 12rem)" }}
        >
          {article.title}
        </h1>
        <p className="font-black uppercase tracking-[0.4em] text-black/30 block text-right"
           style={{ fontSize: "10px" }}>
          {article.author} · {article.readingTime}
        </p>
      </div>

      {/* Rotated pull quote */}
      <div className="bg-black py-16 md:py-24 px-6 md:px-14 border-b-[8px] border-black overflow-hidden flex justify-center">
        <div className="bg-white text-black border-[6px] border-black p-8 md:p-12 rotate-[1.5deg] shadow-[10px_10px_0_#f2ff00] hover:rotate-0 transition-transform duration-100 max-w-4xl w-full relative">
          <span className="absolute -top-5 -left-5 bg-[#f2ff00] text-black font-black uppercase text-xs px-3 py-1 border-[4px] border-black tracking-widest">
            Quote of the Issue
          </span>
          <blockquote
            className="font-black leading-none tracking-tighter uppercase"
            style={{ fontSize: "clamp(1.5rem, 4vw, 5rem)" }}
          >
            &ldquo;{article.pullQuote}&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Yellow metadata block */}
      <div
        className="border-b-[8px] border-black px-6 md:px-14 py-10 md:py-14"
        style={{ background: "#f2ff00" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Author", value: article.author },
            { label: "Category", value: article.category },
            { label: "Issue", value: article.issue },
            { label: "Read Time", value: article.readingTime },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="font-black text-black/35 uppercase tracking-[0.4em] mb-1" style={{ fontSize: "9px" }}>
                {label}
              </dt>
              <dd className="font-black text-black uppercase leading-tight" style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.3rem)" }}>
                {value}
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* Giant lede word + full body */}
      <div className="bg-white px-6 md:px-14 py-14 md:py-20 border-b-[8px] border-black">
        <p
          className="font-black text-black leading-none tracking-tighter uppercase mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 8rem)" }}
        >
          {article.excerpt.split(" ").slice(0, 4).join(" ")}
        </p>
        <div style={{ maxWidth: "680px" }}>
          <ArticleBody body={article.body} isLead />
        </div>
      </div>

      {/* Staggered images */}
      {article.images.length > 0 && (
        <div className="bg-white px-4 md:px-10 pb-12 border-b-[8px] border-black">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {article.images.map((img, i) => (
              <div
                key={i}
                className="relative border-[6px] border-black overflow-hidden shadow-[8px_8px_0_#000000] hover:shadow-[12px_12px_0_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150"
                style={{
                  gridColumn: i === 0 ? "span 7" : "span 5",
                  marginTop: i % 2 === 1 ? "clamp(0px, 3vw, 40px)" : "0",
                  aspectRatio: i === 0 ? "4/3" : "3/4",
                }}
              >
                <Image
                  src={img} alt={`${article.title} — detail ${i + 1}`}
                  fill className="object-cover" unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
