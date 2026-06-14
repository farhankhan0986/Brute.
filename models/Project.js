import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Project slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    layoutVariant: {
      type: String,
      enum: ["A", "B", "C"],
      default: "A",
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    accentColor: {
      type: String,
      default: "#f2ff00",
    },
    pullQuote: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model re-compilation error in Next.js hot reload
const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
