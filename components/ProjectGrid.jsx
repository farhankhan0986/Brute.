import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

/**
 * ProjectGrid — broken grid layout with cards of varying sizes.
 * Intentional misalignment, overlaps, and elements bleeding off edge.
 */
export default function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section
      id="work"
      className="relative bg-white border-b-[8px] border-black py-16 md:py-24 overflow-hidden"
      aria-label="Project showcase"
    >
      {/* ── Section header — bleeds off left edge ─────────────────── */}
      <div className="relative mb-12 md:mb-16 overflow-hidden">
        <div className="flex items-baseline gap-6 px-6 md:px-16">
          <h2
            className="font-black text-black leading-none uppercase tracking-tighter
                       text-[18vw] md:text-[12vw] lg:text-[10vw]
                       -ml-1 md:-ml-2 relative"
            aria-label="Work section"
          >
            WORK
          </h2>
          {/* Section number */}
          <span
            className="text-black/10 font-black text-[12vw] md:text-[8vw] leading-none 
                       -mb-2 select-none"
            aria-hidden="true"
          >
            02
          </span>
        </div>

        {/* Thick accent underline */}
        <div
          className="ml-6 md:ml-16 mt-2 h-[6px] bg-[#f2ff00] border-[2px] border-black"
          style={{ width: "clamp(120px, 20vw, 280px)" }}
          aria-hidden="true"
        />

        {/* Descriptor */}
        <p className="ml-6 md:ml-16 mt-4 text-black/50 text-sm font-black uppercase tracking-widest">
          Selected Projects — {projects.length} Case Studies {/* TODO: Update count */}
        </p>
      </div>

      {/* ── Broken grid ──────────────────────────────────────────────
          Layout philosophy:
          - 12-column grid
          - Cards span 6, 4, 8, 5, 7 columns — deliberately uneven
          - Some cards have negative top margin to create overlap
          - One card is pushed right with offset
          ─────────────────────────────────────────────────────────── */}

      <div className="px-4 md:px-10 relative">
        {/* ROW 1: Featured large card (8 cols) + small card (4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Card 1 — Large featured */}
          {projects[0] && (
            <div className="md:col-span-8">
              <ProjectCard project={projects[0]} priority />
            </div>
          )}
          {/* Card 2 — Offset small, pushed up on desktop to overlap slightly */}
          {projects[1] && (
            <div
              className="md:col-span-4"
              style={{ marginTop: "clamp(0px, 4vw, 60px)" }} /* Intentional vertical offset */
            >
              <ProjectCard project={projects[1]} />
            </div>
          )}
        </div>

        {/* ROW 2: Three-column row with accent divider */}
        <div className="relative mb-4 md:mb-6">
          {/* Accent divider — bleeds off both edges */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[4px] bg-black -left-10 -right-10 
                       hidden md:block z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative z-10">
            {/* Card 3 — Medium */}
            {projects[2] && (
              <div className="md:col-span-5">
                <ProjectCard project={projects[2]} />
              </div>
            )}
            {/* Accent block — solid yellow divider element */}
            <div
              className="md:col-span-2 hidden md:flex items-center justify-center 
                         bg-[#f2ff00] border-[6px] border-black"
              aria-hidden="true"
            >
              <span
                className="font-black text-black text-xs tracking-[0.3em] uppercase"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                2024
              </span>
            </div>
            {/* Card 4 — Medium, slight right push */}
            {projects[3] && (
              <div
                className="md:col-span-5"
                style={{ marginTop: "clamp(0px, -2vw, -24px)" }} /* Negative offset */
              >
                <ProjectCard project={projects[3]} />
              </div>
            )}
          </div>
        </div>

        {/* ROW 3: Full-width wide card + narrow card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Card 5 — Wide */}
          {projects[4] && (
            <div className="md:col-span-7">
              <ProjectCard project={projects[4]} />
            </div>
          )}
          {/* Card 6 — Narrow, pushed down */}
          {projects[5] && (
            <div
              className="md:col-span-5"
              style={{ marginTop: "clamp(0px, 3vw, 48px)" }} /* Downward offset */
            >
              <ProjectCard project={projects[5]} />
            </div>
          )}
        </div>
      </div>

      {/* ── View all CTA ─────────────────────────────────────────── */}
      <div className="px-6 md:px-16 mt-16 flex items-center gap-6 flex-wrap">
        <Link
          href="/#work"
          id="work-view-all"
          className="inline-block bg-black text-white border-[6px] border-black
                     px-10 py-4 font-black text-sm uppercase tracking-[0.2em]
                     hover:bg-[#f2ff00] hover:text-black
                     transition-colors duration-100"
          style={{ borderRadius: 0 }}
          aria-label="View all case studies"
        >
          All Projects ({projects.length})
        </Link>

        {/* Decorative divider line */}
        <div className="h-[4px] bg-black flex-1 hidden md:block" aria-hidden="true" />
      </div>

      {/* ── Decorative large text watermark ──────────────────────── */}
      <div
        className="absolute bottom-0 right-0 text-black/5 font-black text-[20vw] 
                   leading-none select-none pointer-events-none tracking-tighter"
        aria-hidden="true"
      >
        WRK
      </div>
    </section>
  );
}
