import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "BRUTE.",
  description:
    "BRUTE. is a design and culture magazine covering case studies, typography, brand strategy, motion design, and the ideas shaping creative work. No fluff. No filler.", // TODO: Customize
  keywords: "design magazine, case studies, branding, typography, creative culture, neo-brutalist, design theory", // TODO: Customize
  openGraph: {
    title: "BRUTE.",
    description: "Case studies, theory, and culture for people who take creative work seriously.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-white text-black overflow-x-hidden">
        {/* Fixed sidebar — always visible */}
        <Sidebar />

        {/* Main content — offset by .main-offset in globals.css.
            Uses raw CSS media query (not Tailwind utilities) to guarantee
            the 80px gap from the fixed sidebar is always applied. */}
        <div className="main-offset">
          {children}
        </div>
      </body>
    </html>
  );
}
