/**
 * IssueArchive — shows past issues in a grid.
 * Neo-brutalist grid with thick borders and issue metadata.
 */
import Link from "next/link";
import { getIssuesWithStats } from "@/data/issues";

export default function IssueArchive() {
  const issues = getIssuesWithStats();

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
          Archive — {issues.length} Issues Published
        </p>
      </div>

      {/* ── Issue grid ───────────────────────────────────── */}
      <div className="px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[6px] border-white/20">
          {issues.map((issue, i) => (
            <Link
              key={issue.number}
              href={`/issue/${issue.slug}`}
              id={`issue-${issue.number}`}
              className="group flex flex-col justify-between p-6 md:p-10 
                         transition-colors duration-100 hover:bg-[#f2ff00]"
              style={{
                background: issue.accent ? "#f2ff00" : "transparent",
                borderRight: (i + 1) % 3 !== 0 ? "4px solid rgba(255,255,255,0.15)" : "none",
                borderBottom: i < issues.length - 3 ? "4px solid rgba(255,255,255,0.15)" : "none",
                minHeight: "250px",
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
                  className="font-black uppercase leading-tight tracking-tight text-white group-hover:text-black transition-colors duration-100"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
                    color: issue.accent ? "#000" : undefined,
                  }}
                >
                  {issue.theme}
                </h3>
                <div
                  className="mt-3 font-black uppercase tracking-widest text-white/40 group-hover:text-black/50 transition-colors duration-100"
                  style={{
                    fontSize: "10px",
                    color: issue.accent ? "rgba(0,0,0,0.4)" : undefined,
                  }}
                >
                  {issue.articlesCount} {issue.articlesCount === 1 ? "Article" : "Articles"}
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
