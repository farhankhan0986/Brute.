```
██████╗ ██████╗ ██╗   ██╗████████╗███████╗    ███╗   ███╗ █████╗  ██████╗ 
██╔══██╗██╔══██╗██║   ██║╚══██╔══╝██╔════╝    ████╗ ████║██╔══██╗██╔════╝ 
██████╔╝██████╔╝██║   ██║   ██║   █████╗      ██╔████╔██║███████║██║  ███╗
██╔══██╗██╔══██╗██║   ██║   ██║   ██╔══╝      ██║╚██╔╝██║██╔══██║██║   ██║
██████╔╝██║  ██║╚██████╔╝   ██║   ███████╗    ██║ ╚═╝ ██║██║  ██║╚██████╔╝
╚══════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚══════╝.
```

# BRUTE. Magazine — Design & Culture Without Apology

**BRUTE.** is a minimalist, high-contrast, Neo-Brutalist magazine and agency portfolio website. Built to showcase case studies, typography, brand strategy, and motion design, the project features a raw, confrontational layout with heavy black borders, electric yellow highlights, scrolling tickers, and interactive chromatic glitch effects.

---

## 🎨 Design System & Aesthetic Rules

The project strictly follows the **Neo-Brutalist** design guidelines configured in the Tailwind CSS v4 theme:

1. **High Contrast Color Palette:**
   - Primary Background: Solid White (`#ffffff`)
   - Accent Highlight: Electric Yellow (`#f2ff00`)
   - Borders & Elements: Solid Black (`#000000`)
   - Contrast Dark Highlight: Deep Yellow (`#d4e000`)
2. **Visual Constraints:**
   - **No rounded corners (`border-radius: 0`)** applied globally to buttons, cards, and input fields.
   - Thick black borders: standard borders are `4px`, layout partitions are `6px`, and section breaks are `8px`.
   - Selection highlighting in electric yellow.
   - Crosshair cursor applied page-wide.
3. **Typography:**
   - Primary display and body fonts set to `Space Grotesk`, loaded dynamically via optimized Google Font loaders (`next/font/google`).

---

## 🛠️ Tech Stack

- **Core Framework:** [Next.js 16 (App Router)](https://nextjs.org/) using Turbopack compiler.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with postcss theme configuration.
- **Database Engine:** [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) models.
- **Iconography:** Custom vector SVG assets (`app/icon.svg` & custom inline SVG components).

---

## 📂 Project Structure

```
├── app/
│   ├── api/projects/        # API route handling dynamic project lists
│   ├── article/[slug]/      # Dynamic page routing for magazine articles
│   ├── work/[slug]/         # Dynamic page routing for client case studies
│   ├── favicon.ico          # Custom 32x32 fallback binary favicon
│   ├── globals.css          # Core CSS variables, keyframes & custom theme utilities
│   ├── icon.svg             # Custom brand vector favicon (Option A: "B.")
│   ├── layout.js            # Main HTML layout, fonts loader, and sidebar offset
│   ├── page.js              # Home page rendering hero, grids, and archive
│   └── not-found.js         # Custom styled 404 page
├── components/
│   ├── Sidebar.jsx          # Desktop navigation & mobile bottom tab bar (SVG logos)
│   ├── Hero.jsx             # Masthead, cover story, stats, and scrolling ticker
│   ├── ArticleGrid.jsx      # Latest publication articles using glitch cards
│   ├── Manifesto.jsx        # Agency manifesto with broken grid layout & pull quotes
│   ├── Editorial.jsx        # Magazine about statement & typography column section
│   ├── Footer.jsx           # Oversized typographic contact links and newsletters
│   └── ArticleLayout.jsx    # Column layout wrapper for dynamic articles
├── data/
│   ├── articles.js          # Static seed data for editorial articles
│   └── projects.js          # Static seed data for work case studies
├── lib/
│   └── mongodb.js           # Singleton database client connector
├── models/
│   └── Project.js           # Mongoose schemas for dynamic work items
└── next.config.mjs          # Images optimization and domain config
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install the project dependencies:
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory and specify your MongoDB URI (see `.env.local.example`):
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/brute
```
*Note: If no `MONGODB_URI` environment variable is specified, the application will automatically fall back to static seed data loaded from `data/` with a console warning, allowing you to preview the app without database configuration.*

### 3. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build Production
Compile the optimized production build:
```bash
npm run build
```

---

## 🔧 Customization & Data Seeding

### Static Database Fallback
Articles and projects default to static JSON arrays in `data/articles.js` and `data/projects.js` when running offline. Edit these files directly to modify the initial launch content.

### Dynamic Database Integration
To load dynamic projects from a database, connect to MongoDB using the `MONGODB_URI` environment variable. The app exposes a GET route at `/api/projects` that queries the database using the schema defined in `models/Project.js`:

```javascript
// Example schema fields:
{
  title: String,
  slug: String,
  category: String,
  year: String,
  description: String,
  coverImage: String,
  images: [String],
  layoutVariant: "A" | "B" | "C",
  tags: [String],
  featured: Boolean,
  accentColor: String,
  pullQuote: String
}
```

---

## 🎨 Interactive Micro-Animations
The site includes pre-packaged, hardware-accelerated animations defined in `globals.css`:
- **`.glitch-card`**: Triggers chromatic red/cyan shift and structural shaking on hover.
- **`.marquee-track`**: An infinite scrolling marquee ticker that pauses on hover.
- **`fade-up`**: Smooth landing layout animation on scroll.
- **Sidebar Hover State:** Logo mark changes from a white geometric **B** to black on a yellow hover block, matching the interactive state of the navigation links.
