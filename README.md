# Umar Farouk Yunusa — Personal Portfolio Website

A minimal, content-first portfolio website inspired by [alexitc.com](https://alexitc.com/about/). Built for speed, premium typography, default dark mode, and static-site efficiency.

## 🚀 Tech Stack

- **Framework:** [Astro v5](https://astro.build) (Static Site Generation)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (Vite-based compile, typography-first)
- **Blog:** Markdown/MDX files via Astro Content Collections (zero-CMS)
- **Host Target:** Vercel, Netlify, or GitHub Pages

## 📁 Key Directories

```text
/
├── public/                  # Static assets (Favicons, Open Graph images)
├── src/
│   ├── components/          # Reusable Astro components (FormattedDate.astro)
│   ├── content/
│   │   └── blog/            # MDX blog posts
│   ├── layouts/
│   │   └── Layout.astro     # Core layout (SEO head, Header/Footer navigation)
│   ├── pages/
│   │   ├── index.astro      # Home Page
│   │   ├── about.astro      # About Page (Bio & career facts)
│   │   ├── blog/            # Blog Listing and Slug route
│   │   ├── projects.astro   # Projects Listing (2025/2026 splits)
│   │   ├── resume.astro     # Styled resume with Print stylesheet support
│   │   └── rss.xml.js       # RSS feed generation
│   └── styles/
│       └── global.css       # Global styles, variables, typography, and @media print
└── astro.config.mjs         # Astro/Tailwind/MDX configuration
```

## ⚙️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
To build the static site:
```bash
npm run build
```
The compiled site files will be outputted to the `dist/` directory.

### 4. Preview the Build
```bash
npm run preview
```

## ✍️ Writing a Blog Post

Create a new `.mdx` or `.md` file under `src/content/blog/` with the following frontmatter structure:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "A short snippet about what the post covers."
tags: ["Topic1", "Topic2"]
draft: false
---
Your article content goes here.
```

- Draft posts (`draft: true`) are excluded from lists in production builds but visible in development mode.
