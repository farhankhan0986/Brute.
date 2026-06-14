import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { projects as seedProjects } from "@/data/projects";
import { NextResponse } from "next/server";

/**
 * GET /api/projects
 * Returns all projects, or filtered by ?featured=true
 * Falls back to static seed data if MongoDB is not connected.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get("featured");

  try {
    const conn = await connectDB();

    if (conn) {
      // Use MongoDB
      const query = featured === "true" ? { featured: true } : {};
      const projects = await Project.find(query).sort({ year: -1 }).lean();

      return NextResponse.json({ projects, source: "mongodb" });
    }
  } catch (error) {
    console.error("MongoDB error, falling back to seed data:", error.message);
  }

  // Fallback: static seed data
  const filtered =
    featured === "true"
      ? seedProjects.filter((p) => p.featured)
      : seedProjects;

  return NextResponse.json({ projects: filtered, source: "seed" });
}
