import Image from "next/image";
import Link from "next/link";

/**
 * CaseStudyLayout — experimental per-project page layout.
 * Three variants driven by project.layoutVariant: "A", "B", or "C".
 *
 * All variants feature:
 * - Dramatic type size variation (12rem headers, 1rem body)
 * - Solid accent color section dividers
 * - Hard borders, no rounded corners
 * - Intentional misalignment
 */
export default function CaseStudyLayout({ project }) {
  const { layoutVariant = "A" } = project;

  return (
    <>
      {/* ── Back button — consistent across all variants ──────────── */}
      <div className="border-b-[6px] border-black bg-white px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-40">
        <Link
          href="/"
          id="case-back-btn"
          className="font-black text-sm uppercase tracking-widest 
                     hover:text-[#f2ff00] hover:bg-black px-4 py-2
                     border-[4px] border-black transition-colors duration-100"
          style={{ borderRadius: 0 }}
        >
          ← All Work
        </Link>
        <span className="text-black/30 text-xs font-black uppercase tracking-widest hidden md:block">
          {project.category} — {project.year}
        </span>
      </div>

      {/* ── Render layout variant ──────────────────────────────────── */}
      {layoutVariant === "A" && <VariantA project={project} />}
      {layoutVariant === "B" && <VariantB project={project} />}
      {layoutVariant === "C" && <VariantC project={project} />}

      {/* ── Next project navigation ───────────────────────────────── */}
      <div className="bg-black border-t-[8px] border-[#f2ff00] px-6 md:px-16 py-12 md:py-20">
        <p className="font-black text-white/30 text-xs uppercase tracking-[0.5em] mb-4">
          Next Project
        </p>
        <Link
          href="/#work"
          id="case-next-project"
          className="font-black text-white text-3xl md:text-6xl uppercase leading-none 
                     tracking-tighter hover:text-[#f2ff00] transition-colors duration-100 block"
        >
          View All Work →
        </Link>
      </div>
    </>
  );
}

/* ================================================================
   VARIANT A: Full-bleed hero → accent block → pullquote → body
   ================================================================ */
function VariantA({ project }) {
  return (
    <article aria-label={`Case study: ${project.title}`}>
      {/* ── Full-bleed hero image ────────────────────────────────── */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-black border-b-[8px] border-black overflow-hidden">
        <Image
          src={project.images[0] || project.coverImage}
          alt={`${project.title} hero image`} /* TODO: Update with descriptive alt text */
          fill
          className="object-cover opacity-70"
          priority
          unoptimized
        />
        {/* Overlay with massive title */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
          <span className="text-[#f2ff00] font-black text-xs uppercase tracking-[0.5em] mb-4">
            {project.category} — {project.year}
          </span>
          <h1
            className="font-black text-white leading-none tracking-tighter uppercase"
            style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Accent block divider ─────────────────────────────────── */}
      <div className="bg-[#f2ff00] border-b-[8px] border-black px-6 md:px-16 py-6">
        <div className="flex items-center gap-4 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-black text-black text-xs uppercase tracking-[0.4em] 
                         border-[3px] border-black px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Body content ─────────────────────────────────────────── */}
      <div className="bg-white px-6 md:px-16 py-16 md:py-24 border-b-[8px] border-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Description column */}
          <div className="md:col-span-7">
            <h2 className="font-black text-black/20 text-xs uppercase tracking-[0.5em] mb-4">
              Overview
            </h2>
            <p className="text-black text-base md:text-lg leading-relaxed font-medium">
              {/* TODO: Replace with client project description */}
              {project.description}
            </p>
          </div>
          {/* Details column */}
          <div className="md:col-span-5 md:pl-8 md:border-l-[4px] md:border-black">
            <h2 className="font-black text-black/20 text-xs uppercase tracking-[0.5em] mb-6">
              Details
            </h2>
            <dl className="space-y-4">
              {[
                { term: "Client", detail: project.title }, /* TODO: Separate client name */
                { term: "Category", detail: project.category },
                { term: "Year", detail: project.year },
                { term: "Services", detail: project.tags.join(", ") },
              ].map(({ term, detail }) => (
                <div key={term}>
                  <dt className="font-black text-black/30 text-xs uppercase tracking-widest">
                    {term}
                  </dt>
                  <dd className="font-black text-black text-sm uppercase mt-1">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ── Massive pullquote ────────────────────────────────────── */}
      <div className="bg-black px-6 md:px-16 py-16 md:py-24 border-b-[8px] border-black overflow-hidden relative">
        <div
          className="absolute inset-0 text-white/[0.03] font-black leading-none 
                     select-none pointer-events-none flex items-center justify-center"
          style={{ fontSize: "clamp(8rem, 20vw, 22rem)" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <blockquote
          className="relative z-10 font-black text-white leading-none tracking-tighter uppercase"
          style={{ fontSize: "clamp(2.5rem, 6vw, 8rem)" }}
        >
          {/* TODO: Replace with client pullquote */}
          {project.pullQuote}
        </blockquote>
      </div>

      {/* ── Additional images ────────────────────────────────────── */}
      {project.images.length > 1 && (
        <div className="bg-white px-4 md:px-10 py-10 md:py-16 border-b-[8px] border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.images.slice(1).map((img, i) => (
              <div key={i} className="relative aspect-video border-[6px] border-black overflow-hidden">
                <Image
                  src={img}
                  alt={`${project.title} image ${i + 2}`} /* TODO: Update with descriptive alt text */
                  fill
                  className="object-cover"
                  unoptimized
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
   VARIANT B: Split 50/50 black/white hero — headline straddles divide
   ================================================================ */
function VariantB({ project }) {
  return (
    <article aria-label={`Case study: ${project.title}`}>
      {/* ── Split hero ───────────────────────────────────────────── */}
      <div className="relative border-b-[8px] border-black overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="grid grid-cols-2 h-full" style={{ minHeight: "70vh" }}>
          {/* Left — Black */}
          <div className="bg-black flex flex-col justify-end p-6 md:p-12 border-r-[4px] border-black">
            <span className="text-[#f2ff00] font-black text-xs uppercase tracking-[0.5em] mb-6">
              {project.category}
            </span>
            <h1
              className="font-black text-white leading-none tracking-tighter uppercase"
              style={{ fontSize: "clamp(3rem, 7vw, 10rem)" }}
            >
              {project.title.split(" ").slice(0, Math.ceil(project.title.split(" ").length / 2)).join(" ")}
            </h1>
          </div>
          {/* Right — White with image */}
          <div className="bg-white relative">
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`} /* TODO: Update alt text */
              fill
              className="object-cover border-l-[4px] border-black"
              priority
              unoptimized
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-white/80">
              <h1
                className="font-black text-black leading-none tracking-tighter uppercase"
                style={{ fontSize: "clamp(3rem, 7vw, 10rem)" }}
              >
                {project.title.split(" ").slice(Math.ceil(project.title.split(" ").length / 2)).join(" ")}
              </h1>
              <p className="text-black/50 text-sm font-black uppercase tracking-widest mt-4">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Accent divider ───────────────────────────────────────── */}
      <div className="h-6 bg-[#f2ff00] border-b-[8px] border-black" aria-hidden="true" />

      {/* ── Manifesto-style description ──────────────────────────── */}
      <div className="bg-white px-6 md:px-16 py-16 md:py-24 border-b-[8px] border-black">
        <div className="max-w-4xl">
          <p
            className="font-black text-black leading-tight tracking-tight uppercase mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 5rem)" }}
          >
            {/* TODO: Replace with short client challenge statement */}
            {project.description.split(".")[0]}.
          </p>
          <p className="text-black/50 text-base leading-relaxed font-medium">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-4 flex-wrap mt-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-black text-black text-xs uppercase tracking-widest 
                         border-[3px] border-black px-4 py-2 
                         hover:bg-[#f2ff00] transition-colors duration-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Pullquote — accent background ────────────────────────── */}
      <div className="bg-[#f2ff00] border-b-[8px] border-black px-6 md:px-16 py-16 md:py-24">
        <blockquote
          className="font-black text-black leading-none tracking-tighter uppercase"
          style={{ fontSize: "clamp(2rem, 5vw, 7rem)" }}
        >
          {/* TODO: Replace with client quote */}
          {project.pullQuote}
        </blockquote>
      </div>

      {/* ── Images grid ──────────────────────────────────────────── */}
      {project.images.length > 0 && (
        <div className="bg-black px-4 md:px-10 py-10 border-b-[8px] border-black">
          <div className="grid grid-cols-1 gap-4">
            {project.images.map((img, i) => (
              <div key={i} className={`relative border-[6px] border-white/20 overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-video"}`}>
                <Image
                  src={img}
                  alt={`${project.title} project image ${i + 1}`} /* TODO: Update alt text */
                  fill
                  className="object-cover"
                  unoptimized
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
   VARIANT C: Staggered type sizes, slightly rotated elements
   ================================================================ */
function VariantC({ project }) {
  return (
    <article aria-label={`Case study: ${project.title}`}>
      {/* ── Experimental title section ───────────────────────────── */}
      <div className="bg-white px-6 md:px-16 pt-16 md:pt-24 pb-8 border-b-[8px] border-black overflow-hidden relative">
        {/* Huge category label — rotated, absolute */}
        <div
          className="absolute top-12 right-[-4rem] md:right-[-6rem] text-black/[0.04] 
                     font-black uppercase tracking-widest select-none"
          style={{
            fontSize: "clamp(2rem, 8vw, 10rem)",
            transform: "rotate(90deg)",
            transformOrigin: "right center",
          }}
          aria-hidden="true"
        >
          {project.category}
        </div>

        {/* Main title — gigantic */}
        <h1
          className="font-black text-black leading-none tracking-tighter uppercase mb-4 relative z-10"
          style={{ fontSize: "clamp(3.5rem, 11vw, 14rem)" }}
        >
          {project.title}
        </h1>

        {/* Year — small, offset right */}
        <p
          className="font-black text-[#f2ff00] text-xs uppercase tracking-[0.5em] 
                     border-[3px] border-black bg-black px-3 py-1 inline-block mb-4"
          style={{ marginLeft: "auto", display: "block", width: "fit-content" }}
        >
          {project.year}
        </p>

        {/* Tiny body text contrast */}
        <p className="text-black/40 text-xs font-medium max-w-sm leading-relaxed">
          {/* TODO: Replace with client brief */}
          {project.description.substring(0, 120)}...
        </p>
      </div>

      {/* ── Rotated pullquote block ──────────────────────────────── */}
      <div className="bg-black py-16 md:py-24 px-6 md:px-16 border-b-[8px] border-black overflow-hidden">
        <blockquote
          className="font-black text-white leading-none tracking-tighter uppercase relative z-10"
          style={{
            fontSize: "clamp(2rem, 5vw, 7rem)",
            transform: "rotate(-1.5deg)",
          }}
        >
          {/* TODO: Replace with client quote */}
          {project.pullQuote}
        </blockquote>
      </div>

      {/* ── Accent block with details ────────────────────────────── */}
      <div className="bg-[#f2ff00] border-b-[8px] border-black px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Client", value: project.title },       /* TODO: Separate client name */
            { label: "Category", value: project.category },
            { label: "Year", value: project.year },
            { label: "Services", value: project.tags[0] },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="font-black text-black/40 text-[10px] uppercase tracking-[0.4em] mb-1">
                {label}
              </dt>
              <dd className="font-black text-black text-sm md:text-lg uppercase leading-tight">
                {value}
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* ── Full description — mixed type ────────────────────────── */}
      <div className="bg-white px-6 md:px-16 py-16 md:py-24 border-b-[8px] border-black">
        {/* Giant first word/sentence fragment */}
        <p
          className="font-black text-black leading-none tracking-tighter uppercase mb-6"
          style={{ fontSize: "clamp(3rem, 7vw, 9rem)" }}
        >
          {/* First word of description as display text */}
          {project.description.split(" ").slice(0, 3).join(" ")}
        </p>
        {/* Rest of description in small body text */}
        <p className="text-black text-base md:text-lg leading-relaxed font-medium max-w-2xl">
          {/* TODO: Replace with full client description */}
          {project.description}
        </p>
      </div>

      {/* ── Image grid — staggered ───────────────────────────────── */}
      {project.images.length > 0 && (
        <div className="bg-white px-4 md:px-10 pb-10 border-b-[8px] border-black">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`relative border-[6px] border-black overflow-hidden
                            ${i === 0 ? "md:col-span-7" : "md:col-span-5"}`}
                style={{
                  marginTop: i % 2 === 1 ? "clamp(0px, 3vw, 40px)" : "0",
                  aspectRatio: i === 0 ? "4/3" : "3/4",
                }}
              >
                <Image
                  src={img}
                  alt={`${project.title} detail image ${i + 1}`} /* TODO: Update alt text */
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
