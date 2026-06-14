import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

/**
 * Dynamic case study page — /work/[slug]
 * Params is a Promise in Next.js 16+ — must await it.
 */

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — BRUTE STUDIO",
    };
  }

  return {
    title: `${project.title} — BRUTE STUDIO`,
    description: project.description,
    openGraph: {
      title: `${project.title} — BRUTE STUDIO`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  // Next.js 16: params is a Promise
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <CaseStudyLayout project={project} />
    </main>
  );
}
