"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "LATEST", href: "/#latest" },
  { label: "ISSUES", href: "/#issues" },
  { label: "ABOUT", href: "/#editorial" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────────────── */}
      <aside
        aria-label="Magazine navigation"
        className="fixed left-0 top-0 h-screen bg-white border-r-[6px] border-black z-50 
                   flex-col items-center justify-between py-0
                   hidden md:flex"
        style={{ width: "80px" }}
      >
        {/* Logo mark */}
        <Link
          href="/"
          id="sidebar-logo"
          aria-label="BRUTE. Magazine home"
          className="w-full border-b-[6px] border-black flex items-center justify-center 
                     bg-black hover:bg-[#f2ff00] transition-colors duration-100 
                     group shrink-0"
          style={{ height: "80px" }}
        >
          <svg
            viewBox="0 0 32 32"
            className="w-9 h-9 fill-white group-hover:fill-black transition-colors duration-100"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 6 5 H 18.5 C 21.5 5 23.5 6.8 23.5 9.5 C 23.5 11.5 22.2 13 20.2 13.5 C 22.7 14 24 15.8 24 18.5 C 24 21.2 21.8 23 18.5 23 H 6 V 5 Z M 11 9 V 12 H 16.5 C 17.5 12 18.2 11.5 18.2 10.5 C 18.2 9.5 17.5 9 16.5 9 H 11 Z M 11 15 V 19 H 17.5 C 18.5 19 19.2 18.2 19.2 17 C 19.2 15.8 18.5 15 17.5 15 H 11 Z"
            />
            <rect
              x="25.5"
              y="19"
              width="4"
              height="4"
              className="fill-[#f2ff00] group-hover:fill-black transition-colors duration-100"
            />
          </svg>
        </Link>

        {/* Nav links */}
        <nav className="flex flex-col items-center flex-1 w-full" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className="nav-link w-full text-center"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Issue indicator */}
        <div
          className="w-full border-t-[6px] border-black flex items-center justify-center shrink-0"
          style={{ height: "80px" }}
          aria-hidden="true"
        >
          <span
            className="font-black tracking-widest"
            style={{ fontSize: "9px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            ISS. 07
          </span>
        </div>
      </aside>

      {/* ── Mobile bottom nav ────────────────────────────────── */}
      <nav
        className="fixed bottom-0 left-0 right-0 h-14 bg-white border-t-[6px] border-black 
                   z-50 flex md:hidden"
        aria-label="Mobile navigation"
      >
        <Link
          href="/"
          id="mobile-logo"
          aria-label="BRUTE. Magazine home"
          className="w-14 border-r-[6px] border-black flex items-center justify-center 
                     bg-black hover:bg-[#f2ff00] transition-colors duration-100 group"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white group-hover:fill-black transition-colors duration-100"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 6 5 H 18.5 C 21.5 5 23.5 6.8 23.5 9.5 C 23.5 11.5 22.2 13 20.2 13.5 C 22.7 14 24 15.8 24 18.5 C 24 21.2 21.8 23 18.5 23 H 6 V 5 Z M 11 9 V 12 H 16.5 C 17.5 12 18.2 11.5 18.2 10.5 C 18.2 9.5 17.5 9 16.5 9 H 11 Z M 11 15 V 19 H 17.5 C 18.5 19 19.2 18.2 19.2 17 C 19.2 15.8 18.5 15 17.5 15 H 11 Z"
            />
            <rect
              x="25.5"
              y="19"
              width="4"
              height="4"
              className="fill-[#f2ff00] group-hover:fill-black transition-colors duration-100"
            />
          </svg>
        </Link>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            id={`mobile-nav-${link.label.toLowerCase()}`}
            className="flex-1 border-r-[4px] border-black last:border-r-0 flex items-center 
                       justify-center font-black uppercase 
                       hover:bg-[#f2ff00] transition-colors duration-100"
            style={{ fontSize: "10px", letterSpacing: "0.15em" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
