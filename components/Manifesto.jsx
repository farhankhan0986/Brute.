/**
 * Manifesto — poster-style "About" section.
 * Statement text with inconsistent alignment (left/center/right within same block).
 * Font sizes vary dramatically. Accent color background blocks used as dividers.
 */
export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative bg-white border-b-[8px] border-black overflow-hidden"
      aria-label="Agency manifesto"
    >
      {/* ── Top accent bar ─────────────────────────────────────── */}
      <div className="bg-[#f2ff00] border-b-[8px] border-black px-6 md:px-16 py-4 flex items-center justify-between">
        <span className="font-black text-black text-xs uppercase tracking-[0.4em]">
          03 — MANIFESTO
        </span>
        <span className="font-black text-black text-xs uppercase tracking-[0.4em]">
          {/* TODO: Update year */}
          Est. 2018
        </span>
      </div>

      {/* ── Main poster body ───────────────────────────────────── */}
      <div className="px-6 md:px-16 py-16 md:py-24 relative">

        {/* Line 1 — Left aligned, huge */}
        <p
          className="font-black uppercase leading-none tracking-tighter text-left 
                     text-[11vw] md:text-[8vw] lg:text-[7vw] text-black mb-4 md:mb-6"
        >
          {/* TODO: Replace manifesto text */}
          WE BELIEVE
        </p>

        {/* Line 2 — Center aligned, medium */}
        <p
          className="font-black uppercase leading-tight text-center
                     text-3xl md:text-5xl lg:text-6xl text-black/30 mb-2 md:mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          {/* TODO: Replace manifesto text */}
          design should be
        </p>

        {/* Line 3 — Right aligned, massive with accent */}
        <p
          className="font-black uppercase leading-none tracking-tighter text-right 
                     text-[13vw] md:text-[9vw] lg:text-[8vw]
                     -mr-1 md:-mr-2"
          style={{ color: "#000" }}
        >
          {/* TODO: Replace manifesto text */}
          IMPOSSIBLE
        </p>

        {/* Accent underline between lines */}
        <div
          className="my-6 md:my-8 h-[6px] bg-[#f2ff00] border-[2px] border-black"
          style={{ width: "clamp(80px, 15vw, 200px)", marginLeft: "auto", marginRight: "auto" }}
          aria-hidden="true"
        />

        {/* Line 4 — Left again, medium */}
        <p
          className="font-black uppercase leading-none tracking-tighter text-left
                     text-[10vw] md:text-[7vw] lg:text-[6vw] text-black mb-2 md:mb-3
                     -ml-1 md:-ml-2"
        >
          {/* TODO: Replace manifesto text */}
          TO IGNORE.
        </p>

        {/* Accent block divider */}
        <div
          className="bg-[#f2ff00] border-[6px] border-black px-6 md:px-12 py-4 md:py-6 
                     my-10 md:my-16 relative"
          style={{
            marginLeft: "clamp(-4px, -1vw, -16px)", /* Bleeds left */
            width: "calc(100% + clamp(4px, 1vw, 16px))",
          }}
        >
          <p
            className="font-black uppercase text-black leading-tight
                       text-xl md:text-3xl lg:text-4xl text-center tracking-tight"
          >
            {/* TODO: Replace pull quote */}
            &ldquo;We make work that is felt before it is understood.&rdquo;
          </p>
        </div>

        {/* ── Three column principles ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[6px] border-black mt-12 md:mt-20">
          {[
            {
              number: "I",
              title: "CLARITY IS VIOLENCE",
              body: "We strip everything back until only truth remains. No decoration. No apology. Just the signal.", // TODO: Replace
            },
            {
              number: "II",
              title: "THE GRID IS A LIE",
              body: "Rules exist to be broken deliberately. We misalign, overlap, and collide because constraint is the enemy of expression.", // TODO: Replace
            },
            {
              number: "III",
              title: "BOLD IS NOT LOUD",
              body: "Bold means certainty. It means knowing exactly what to say and saying nothing else. That is how work becomes unforgettable.", // TODO: Replace
            },
          ].map((principle, i) => (
            <div
              key={principle.number}
              className={`p-6 md:p-10 ${i < 2 ? "border-b-[6px] md:border-b-0 md:border-r-[6px] border-black" : ""}`}
            >
              <div className="font-black text-4xl md:text-6xl text-[#f2ff00] mb-4 leading-none"
                   style={{ WebkitTextStroke: "2px black" }}>
                {principle.number}
              </div>
              <h3 className="font-black text-black text-sm md:text-base uppercase tracking-widest mb-3">
                {principle.title}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed font-medium">
                {principle.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Sign-off line ──────────────────────────────────── */}
        <div className="mt-16 md:mt-24 text-right">
          <p
            className="font-black text-black/20 text-[7vw] md:text-[5vw] uppercase 
                       leading-none tracking-tighter"
          >
            {/* TODO: Replace agency name */}
            BRUTE STUDIO
          </p>
        </div>

        {/* ── Decorative large number watermark ──────────────── */}
        <div
          className="absolute top-0 right-0 text-black/[0.03] font-black text-[25vw] 
                     leading-none select-none pointer-events-none tracking-tighter"
          aria-hidden="true"
        >
          ¶
        </div>
      </div>
    </section>
  );
}
