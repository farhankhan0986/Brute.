"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * ProjectCard — neo-brutalist card with glitch hover effect.
 * Each card size is controlled by the parent grid.
 */
export default function ProjectCard({ project, priority = false }) {
  const { title, slug, category, year, coverImage } = project;

  return (
    <article className="relative group">
      <Link
        href={`/work/${slug}`}
        id={`project-card-${slug}`}
        aria-label={`View case study: ${title}`}
        className="block relative overflow-hidden border-[6px] border-black 
                   glitch-card bg-black"
        style={{ borderRadius: 0 }}
      >
        {/* ── Cover image ────────────────────────────────────────── */}
        <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
          <Image
            src={coverImage}
            alt={`${title} project cover`} /* TODO: Update alt text with client description */
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 
                       group-hover:scale-105 group-hover:saturate-0"
            priority={priority}
            unoptimized /* Remove once using real client images */
          />

          {/* Dark overlay — always present */}
          <div
            className="absolute inset-0 bg-black/40 group-hover:bg-black/60 
                       transition-colors duration-300"
            aria-hidden="true"
          />
        </div>

        {/* ── Project info overlay ───────────────────────────────── */}
        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10">
          {/* Category + year top-right */}
          <div className="flex justify-between items-start">
            <span
              className="bg-[#f2ff00] text-black text-[10px] font-black uppercase 
                         tracking-widest px-2 py-1 border-[2px] border-black"
            >
              {category}
            </span>
            <span className="text-white/60 text-xs font-bold">{year}</span>
          </div>

          {/* Project title — massive type */}
          <div>
            <h3
              className="text-white font-black leading-none uppercase 
                         text-3xl md:text-4xl xl:text-5xl tracking-tighter
                         group-hover:text-[#f2ff00] transition-colors duration-100"
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.8)" }}
            >
              {title}
            </h3>
            {/* Arrow indicator on hover */}
            <div
              className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 
                         transition-opacity duration-200"
            >
              <div className="w-8 h-[3px] bg-[#f2ff00]" aria-hidden="true" />
              <span className="text-[#f2ff00] text-xs font-black uppercase tracking-widest">
                View Case Study
              </span>
            </div>
          </div>
        </div>

        {/* ── Chromatic aberration pseudo-layers (CSS-driven) ─────── */}
        {/* Applied via .glitch-card::before and ::after in globals.css */}
      </Link>
    </article>
  );
}
