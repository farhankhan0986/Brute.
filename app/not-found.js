import Link from "next/link";

/**
 * Custom 404 page — styled in magazine neo-brutalist style.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative large 404 */}
      <div
        className="absolute inset-0 flex items-center justify-center
                   font-black select-none pointer-events-none"
        style={{ fontSize: "clamp(15rem, 40vw, 50rem)", lineHeight: 1, color: "rgba(255,255,255,0.03)" }}
        aria-hidden="true"
      >
        404
      </div>

      <div className="relative z-10 text-center">
        <div
          className="inline-block px-4 py-2 mb-7 font-black uppercase tracking-[0.4em] border-[6px]"
          style={{ background: "#f2ff00", borderColor: "#f2ff00", fontSize: "10px", color: "#000" }}
        >
          Error 404
        </div>

        <h1
          className="font-black text-white leading-none tracking-tighter uppercase mb-5"
          style={{ fontSize: "clamp(3rem, 8vw, 10rem)" }}
        >
          NOT<br />FOUND.
        </h1>

        <p className="text-white/35 font-medium max-w-xs mx-auto mb-9"
           style={{ fontSize: "0.9rem" }}>
          This article or page does not exist. It may have moved, or never existed at all.
        </p>

        <Link
          href="/"
          id="not-found-home"
          className="inline-block font-black uppercase tracking-[0.2em]
                     hover:bg-black hover:text-[#f2ff00]
                     transition-colors duration-100"
          style={{
            background: "#f2ff00",
            color: "#000",
            border: "6px solid #f2ff00",
            padding: "0.9rem 2.5rem",
            fontSize: "0.75rem",
            borderRadius: 0,
          }}
        >
          ← Back to Magazine
        </Link>
      </div>
    </main>
  );
}
