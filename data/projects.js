/**
 * Seed project data — placeholder content marked for client customization.
 * TODO: Replace all placeholder text, images, and metadata with actual client content.
 */

export const projects = [
  {
    id: "1",
    title: "VOID COLLECTIVE",
    slug: "void-collective",
    category: "Brand Identity",
    year: "2024",
    description:
      "A complete rebrand for an underground art collective. Raw, confrontational, intentionally uneasy. We stripped everything back to pure signal.", // TODO: Replace with client brief
    coverImage: "https://picsum.photos/seed/void/800/600", // TODO: Replace with client asset
    images: [
      "https://picsum.photos/seed/void1/1200/800", // TODO: Replace with client asset
      "https://picsum.photos/seed/void2/800/1200", // TODO: Replace with client asset
      "https://picsum.photos/seed/void3/1200/600", // TODO: Replace with client asset
    ],
    layoutVariant: "A",
    tags: ["Branding", "Identity", "Print"],
    featured: true,
    accentColor: "#f2ff00",
    pullQuote: "Design is not decoration. It is the violence of clarity.", // TODO: Replace with client quote
  },
  {
    id: "2",
    title: "CONCRETE WAVE",
    slug: "concrete-wave",
    category: "Digital Campaign",
    year: "2024",
    description:
      "A digital-first campaign for a lifestyle brand. Maximum impact, minimum noise. The grid is your enemy.", // TODO: Replace with client brief
    coverImage: "https://picsum.photos/seed/concrete/800/600", // TODO: Replace with client asset
    images: [
      "https://picsum.photos/seed/concrete1/1200/800", // TODO: Replace with client asset
      "https://picsum.photos/seed/concrete2/600/1200", // TODO: Replace with client asset
    ],
    layoutVariant: "B",
    tags: ["Campaign", "Digital", "Motion"],
    featured: true,
    accentColor: "#f2ff00",
    pullQuote: "We made the ordinary look like a declaration of war.", // TODO: Replace with client quote
  },
  {
    id: "3",
    title: "IRON FIST RECORDS",
    slug: "iron-fist-records",
    category: "Web Design",
    year: "2023",
    description:
      "A music label that wanted a site as loud as their roster. We obliged. No apologies.", // TODO: Replace with client brief
    coverImage: "https://picsum.photos/seed/iron/800/600", // TODO: Replace with client asset
    images: [
      "https://picsum.photos/seed/iron1/1200/900", // TODO: Replace with client asset
      "https://picsum.photos/seed/iron2/900/1200", // TODO: Replace with client asset
    ],
    layoutVariant: "C",
    tags: ["Web", "Music", "UX"],
    featured: true,
    accentColor: "#f2ff00",
    pullQuote: "Silence is violence. We turned the volume to 11.", // TODO: Replace with client quote
  },
  {
    id: "4",
    title: "BRUTAL FASHION",
    slug: "brutal-fashion",
    category: "E-Commerce",
    year: "2023",
    description:
      "An online store for a fashion brand that refuses to be polite. Commerce meets confrontation.", // TODO: Replace with client brief
    coverImage: "https://picsum.photos/seed/brutal/800/600", // TODO: Replace with client asset
    images: [
      "https://picsum.photos/seed/brutal1/1200/800", // TODO: Replace with client asset
    ],
    layoutVariant: "A",
    tags: ["E-Commerce", "Fashion", "UX"],
    featured: false,
    accentColor: "#f2ff00",
    pullQuote: "Style is a weapon. We sharpened theirs.", // TODO: Replace with client quote
  },
  {
    id: "5",
    title: "RAW ARCHITECTURE",
    slug: "raw-architecture",
    category: "Brand + Web",
    year: "2022",
    description:
      "A firm that builds with concrete and contradiction. We built their identity the same way.", // TODO: Replace with client brief
    coverImage: "https://picsum.photos/seed/raw/800/600", // TODO: Replace with client asset
    images: [
      "https://picsum.photos/seed/raw1/1600/900", // TODO: Replace with client asset
      "https://picsum.photos/seed/raw2/900/900", // TODO: Replace with client asset
    ],
    layoutVariant: "B",
    tags: ["Architecture", "Branding", "Print"],
    featured: false,
    accentColor: "#f2ff00",
    pullQuote: "The building does not apologize for existing. Neither should the brand.", // TODO: Replace with client quote
  },
  {
    id: "6",
    title: "SIGNAL THEORY",
    slug: "signal-theory",
    category: "Motion + Identity",
    year: "2022",
    description:
      "A tech startup that speaks in systems. We turned their abstraction into a visceral visual language.", // TODO: Replace with client brief
    coverImage: "https://picsum.photos/seed/signal/800/600", // TODO: Replace with client asset
    images: [
      "https://picsum.photos/seed/signal1/1200/800", // TODO: Replace with client asset
    ],
    layoutVariant: "C",
    tags: ["Tech", "Identity", "Motion"],
    featured: false,
    accentColor: "#f2ff00",
    pullQuote: "Data has aesthetics. We found them.", // TODO: Replace with client quote
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
