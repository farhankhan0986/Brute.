/**
 * Footer — magazine footer with contact, social, and subscribe info.
 * Electric yellow top border, oversized typographic style.
 */
export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t-[8px] border-[#f2ff00] relative overflow-hidden pb-20 md:pb-0"
      aria-label="Footer"
    >
      {/* ── Top label bar ─────────────────────────────── */}
      <div
        className="border-b-[4px] px-6 md:px-14 py-4 flex items-center justify-between"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span className="font-black text-white/25 uppercase tracking-[0.4em]"
              style={{ fontSize: "10px" }}>
          05 — CONTACT
        </span>
        <span className="font-black text-white/25 uppercase tracking-[0.4em]"
              style={{ fontSize: "10px" }}>
          GET IN TOUCH
        </span>
      </div>

      {/* ── Main contact block ────────────────────────── */}
      <div className="px-6 md:px-14 pt-12 md:pt-18 pb-10 md:pb-14 relative z-10">

        <h2 className="font-black text-white/20 uppercase tracking-[0.5em] mb-5"
            style={{ fontSize: "11px" }}>
          Contact the Editors
        </h2>

        {/* Email — oversized */}
        <a
          href="mailto:farhankhan080304@gmail.com" /* TODO: Replace with real email */
          id="footer-email"
          aria-label="Email the editors"
          className="block font-black text-white leading-none tracking-tighter uppercase 
                     hover:text-[#f2ff00] transition-colors duration-100 mb-3 break-all"
          style={{ fontSize: "clamp(1.8rem, 5vw, 5rem)" }}
        >
          {/* TODO: Replace with real email */}
          editors@<wbr />brutemagazine.com
        </a>

        {/* Pitch line */}
        <p className="text-white/30 font-medium mb-10" style={{ fontSize: "0.85rem" }}>
          {/* TODO: Replace with editorial pitch info */}
          Pitching a case study, article idea, or studio profile? We read everything.
        </p>

        {/* ── Three column grid ────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-t-[4px] pt-10"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >

          {/* Publication info */}
          <div style={{ borderRight: "4px solid rgba(255,255,255,0.08)", paddingRight: "2rem" }}
               className="md:pr-8">
            <h3 className="font-black text-white/25 uppercase tracking-widest mb-3"
                style={{ fontSize: "10px" }}>
              Publication
            </h3>
            <p className="font-black text-white text-lg uppercase leading-tight">
              {/* TODO: Replace with real publication details */}
              BRUTE. Magazine<br />
              Vol. 3, Issue 07<br />
              June 2026
            </p>
          </div>

          {/* Follow */}
          <div className="md:px-8" style={{ borderRight: "4px solid rgba(255,255,255,0.08)" }}>
            <h3 className="font-black text-white/25 uppercase tracking-widest mb-3"
                style={{ fontSize: "10px" }}>
              Follow
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Instagram", href: "#" }, /* TODO: Replace with real URLs */
                { label: "Twitter / X", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Are.na", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  id={`footer-${s.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  className="font-black text-white/50 uppercase tracking-widest 
                             hover:text-[#f2ff00] transition-colors duration-100"
                  style={{ fontSize: "11px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div className="md:pl-8">
            <h3 className="font-black text-white/25 uppercase tracking-widest mb-3"
                style={{ fontSize: "10px" }}>
              Subscribe
            </h3>
            <p className="text-white/35 font-medium leading-relaxed mb-6"
               style={{ fontSize: "0.8rem" }}>
              {/* TODO: Replace with real subscribe copy */}
              New issue every 6-8 weeks. No spam. Just the magazine — in your inbox when it drops.
            </p>
            <a
              href="mailto:editors@brutemagazine.com?subject=Subscribe" /* TODO: Replace with proper subscribe link/form */
              id="footer-subscribe"
              className="inline-block font-black uppercase tracking-[0.2em] text-center
                         hover:bg-black hover:text-[#f2ff00] hover:border-[#f2ff00]
                         transition-colors duration-100"
              style={{
                background: "#f2ff00",
                color: "#000",
                border: "6px solid #f2ff00",
                padding: "0.9rem 2rem",
                fontSize: "0.7rem",
                borderRadius: 0,
              }}
            >
              Get Each Issue →
            </a>
          </div>
        </div>
      </div>

      {/* ── Copyright strip ────────────────────────────── */}
      <div
        className="border-t-[4px] px-6 md:px-14 py-4 flex items-center justify-between flex-wrap gap-2"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span className="text-white/15 font-black uppercase tracking-widest"
              style={{ fontSize: "10px" }}>
          {/* TODO: Replace with real copyright */}
          © 2026 BRUTE. Magazine. All rights reserved.
        </span>
        <span
          className="text-white/10 font-black tracking-widest"
          style={{ marginLeft: "auto", fontSize: "10px" }}
        >
          Design. Culture. Without Apology.
        </span>
      </div>

      {/* Watermark */}
      <div
        className="absolute bottom-0 right-0 font-black leading-none 
                   select-none pointer-events-none tracking-tighter"
        style={{ fontSize: "22vw", color: "rgba(255,255,255,0.02)" }}
        aria-hidden="true"
      >
        BRT.
      </div>
    </footer>
  );
}
