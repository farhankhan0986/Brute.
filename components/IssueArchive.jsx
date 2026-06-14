/**
 * IssueArchive — shows past issues in a grid.
 * Neo-brutalist grid with thick borders and issue metadata.
 */
import Link from "next/link";

const ISSUES = [
  {
    number: "07",
    theme: "Brutalism & Beyond",
    articles: 8,
    date: "June 2024",
    slug: "issue-07",
    accent: true,
  },
  {
    number: "06",
    theme: "Color + Strategy",
    articles: 7,
    date: "April 2024",
    slug: "issue-06",
    accent: false,
  },
  {
    number: "05",
    theme: "The Minimalism Debate",
    articles: 9,
    date: "February 2024",
    slug: "issue-05",
    accent: false,
  },
  {
    number: "04",
    theme: "Systems Thinking",
    articles: 6,
    date: "November 2023",
    slug: "issue-04",
    accent: false,
  },
  {
    number: "03",
    theme: "Typography Issue",
    articles: 8,
    date: "September 2023",
    slug: "issue-03",
    accent: false,
  },
  {
    number: "02",
    theme: "Brand Building",
    articles: 7,
    date: "June 2023",
    slug: "issue-02",
    accent: false,
  },
]; // TODO: Replace with real issue data

export default function IssueArchive() {
  return (
    <section
      id="issues"
      className="bg-black border-b-[8px] border-black py-14 md:py-20 overflow-hidden relative"
      aria-label="Issue archive"
    >
      {/* ── Section header ───────────────────────────────── */}
      <div className="px-6 md:px-14 mb-10 md:mb-14">
        <div className="flex items-baseline gap-5">
          <h2
            className="font-black text-white leading-none uppercase tracking-tighter -ml-1"
            style={{ fontSize: "clamp(4rem, 9vw, 9rem)" }}
          >
            ISSUES
          </h2>
          <span
            className="font-black leading-none -mb-2 select-none"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "rgba(255,255,255,0.06)" }}
            aria-hidden="true"
          >
            04
          </span>
        </div>
        <div
          className="mt-2 h-[6px] bg-[#f2ff00] border-[2px] border-[#f2ff00]"
          style={{ width: "clamp(100px, 15vw, 220px)" }}
          aria-hidden="true"
        />
        <p className="mt-3 text-white/30 font-black uppercase tracking-widest"
           style={{ fontSize: "11px" }}>
          Archive — {ISSUES.length} Issues Published
        </p>
      </div>

      {/* ── Issue grid ───────────────────────────────────── */}
      <div className="px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[6px] border-white/20">
          {ISSUES.map((issue, i) => (
            <Link
              key={issue.number}
              href={`/#latest`} /* TODO: Link to /issue/${issue.slug} when issue pages exist */
              id={`issue-${issue.number}`}
              className="group flex flex-col justify-between p-6 md:p-10 
                         transition-colors duration-100 hover:bg-[#f2ff00]"
              style={{
                background: issue.accent ? "#f2ff00" : "transparent",
                borderRight: (i + 1) % 3 !== 0 ? "4px solid rgba(255,255,255,0.15)" : "none",
                borderBottom: i < ISSUES.length - 3 ? "4px solid rgba(255,255,255,0.15)" : "none",
                minHeight: "200px",
              }}
            >
              {/* Issue number */}
              <div
                className="font-black leading-none tracking-tighter mb-4"
                style={{
                  fontSize: "clamp(3rem, 6vw, 6rem)",
                  color: issue.accent ? "#000" : "rgba(255,255,255,0.15)",
                }}
                aria-hidden="true"
              >
                {issue.number}
              </div>

              <div>
                <div className="font-black uppercase tracking-[0.3em] mb-2"
                     style={{
                       fontSize: "10px",
                       color: issue.accent ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.3)",
                     }}>
                  Issue {issue.number} — {issue.date}
                </div>
                <h3
                  className="font-black uppercase leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
                    color: issue.accent ? "#000" : "#fff",
                  }}
                >
                  {issue.theme}
                </h3>
                <div
                  className="mt-3 font-black uppercase tracking-widest"
                  style={{
                    fontSize: "10px",
                    color: issue.accent ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.25)",
                  }}
                >
                  {issue.articles} Articles
                </div>
              </div>

              {/* Hover arrow */}
              <div
                className="mt-4 font-black uppercase tracking-widest opacity-0 
                           group-hover:opacity-100 transition-opacity duration-100"
                style={{ fontSize: "10px", color: issue.accent ? "#000" : "#f2ff00" }}
              >
                Read Issue →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div
        className="absolute bottom-0 right-0 font-black leading-none 
                   select-none pointer-events-none tracking-tighter"
        style={{ fontSize: "20vw", color: "rgba(255,255,255,0.02)" }}
        aria-hidden="true"
      >
        ISS
      </div>
    </section>
  );
}
