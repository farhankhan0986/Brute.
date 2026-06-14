/**
 * Editorial — magazine's editorial statement / about section.
 * Poster-style layout with mixed alignment and dramatic type sizes.
 * Replaces the agency "Manifesto" section.
 */
export default function Editorial() {
  return (
    <section
      id="editorial"
      className="relative bg-white border-b-[8px] border-black overflow-hidden"
      aria-label="Editorial statement"
    >
      {/* ── Top accent bar ──────────────────────────────── */}
      <div
        className="border-b-[8px] border-black px-6 md:px-14 py-4 flex items-center justify-between"
        style={{ background: "#f2ff00" }}
      >
        <span className="font-black text-black uppercase tracking-[0.4em]"
              style={{ fontSize: "10px" }}>
          03 — EDITORIAL
        </span>
        <span className="font-black text-black uppercase tracking-[0.4em]"
              style={{ fontSize: "10px" }}>
          {/* TODO: Update volume/issue */}
          Vol. 3
        </span>
      </div>

      {/* ── Poster body ─────────────────────────────────── */}
      <div className="px-6 md:px-14 py-14 md:py-22 relative">

        {/* Line 1 — Left, huge */}
        <p
          className="font-black uppercase leading-none tracking-tighter text-left text-black mb-3"
          style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
        >
          WE PUBLISH
        </p>

        {/* Line 2 — Center, medium dim */}
        <p
          className="font-black uppercase leading-tight text-center text-black/25 mb-2"
          style={{ fontSize: "clamp(1.5rem, 4vw, 5rem)", letterSpacing: "-0.02em" }}
        >
          work that cannot be
        </p>

        {/* Line 3 — Right, massive */}
        <p
          className="font-black uppercase leading-none tracking-tighter text-right text-black -mr-1"
          style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}
        >
          IGNORED.
        </p>

        {/* Accent underline */}
        <div
          className="my-6 md:my-10 h-[6px] bg-[#f2ff00] border-[2px] border-black"
          style={{ width: "clamp(80px, 15vw, 200px)", margin: "1.5rem auto" }}
          aria-hidden="true"
        />

        {/* Body text — small, offset */}
        <p
          className="font-medium leading-relaxed text-black/50"
          style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", maxWidth: "540px", marginLeft: "auto" }}
        >
          {/* TODO: Replace with editorial statement */}
          BRUTE. is a design and culture magazine for people who take creative work seriously.
          Every issue covers case studies, design theory, industry strategy, and the ideas
          shaping how we make things. No fluff. No filler. Just work worth reading about.
        </p>

        {/* ── Accent block pull quote ──────────────────── */}
        <div
          className="border-[6px] border-black px-6 md:px-10 py-5 md:py-8 my-10 md:my-16"
          style={{
            background: "#f2ff00",
            marginLeft: "clamp(-4px, -0.5vw, -8px)",
            width: "calc(100% + clamp(4px, 0.5vw, 8px))",
          }}
        >
          <p
            className="font-black uppercase text-black leading-tight text-center tracking-tight"
            style={{ fontSize: "clamp(1.4rem, 3vw, 4rem)" }}
          >
            {/* TODO: Replace with editorial quote */}
            &ldquo;Good design should be documented. Great design should be argued about.&rdquo;
          </p>
        </div>

        {/* ── Three column principles ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[6px] border-black mt-12 md:mt-16">
          {[
            {
              number: "I",
              title: "CASE STUDIES FIRST",
              body: "Every theory needs proof. We document real projects — what happened, why it worked, and what anyone can take from it.", // TODO: Replace
            },
            {
              number: "II",
              title: "NO SACRED COWS",
              body: "We cover trends critically. If something is overused, misunderstood, or outright wrong, we say so. Straight.", // TODO: Replace
            },
            {
              number: "III",
              title: "USEFUL ABOVE ALL",
              body: "Every piece should leave you with something actionable — a framework, a reframe, or at minimum a sharper way to see.", // TODO: Replace
            },
          ].map((p, i) => (
            <div
              key={p.number}
              className="p-6 md:p-9"
              style={{ borderRight: i < 2 ? "6px solid #000" : "none", borderBottom: "0" }}
            >
              <div
                className="font-black leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#f2ff00", WebkitTextStroke: "2px black" }}
              >
                {p.number}
              </div>
              <h3 className="font-black text-black uppercase tracking-widest mb-3"
                  style={{ fontSize: "11px" }}>
                {p.title}
              </h3>
              <p className="text-black/55 leading-relaxed font-medium" style={{ fontSize: "0.875rem" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Sign-off */}
        <div className="mt-14 md:mt-20 text-right">
          <p
            className="font-black text-black/15 uppercase leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            BRUTE.
          </p>
        </div>

        {/* Watermark */}
        <div
          className="absolute top-0 right-0 font-black leading-none 
                     select-none pointer-events-none tracking-tighter"
          style={{ fontSize: "22vw", color: "rgba(0,0,0,0.025)" }}
          aria-hidden="true"
        >
          ¶
        </div>
      </div>
    </section>
  );
}
