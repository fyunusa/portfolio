# Portfolio Website — Build Prompt
## Owner: Umar Farouk Yunusa

---

## Overview

Build a **personal portfolio website** inspired by the minimalist, content-first aesthetic of [alexitc.com](https://alexitc.com/about/). The site should feel like a senior engineer's space — clean typography, fast, no bloat, no flashy animations. Dark mode preferred with a clean light fallback.

---

## Tech Stack

- **Framework:** Astro (preferred for static-site performance + blog support) or Next.js 14+ with App Router
- **Styling:** Tailwind CSS
- **Blog:** Markdown/MDX files (file-based, no CMS needed)
- **Deployment target:** Vercel or Netlify
- **No database required** — everything is file-based or static

---

## Site Structure / Pages

### 1. `/` — Home
- Hero section: Name, one-line tagline (see copy below), and links to GitHub, LinkedIn, X, and Real Dev
- Brief "Who I am" paragraph (2–3 sentences max)
- Navigation to: Blog, Projects, Resume, About
- Social links in footer

### 2. `/about` — About Me
Full narrative page. Include:

**Bio:**
> I got into programming by building things before I fully understood what I was building. Over 7+ years I've shipped fintech systems handling 500K+ daily transactions, built AI-integrated platforms before it was fashionable, and spent nights launching open-source tools just to scratch my own itch. I write mostly about backend systems, AI engineering, and the craft of building software that lasts.

**Facts to include (bullet list, like alexitc.com):**
- 7+ years of professional engineering across Nigeria, South Korea (MUST Company), and Canada (Manaknight Digital)
- Former Backend Lead at MUST Company — a South Korean fintech firm
- Built production AI systems integrating Claude, OpenAI, and Gemini with RAG pipelines and multi-agent workflows
- Founder of [Real Dev](https://realdevhq.com) — a developer knowledge platform and live talk show
- Currently building **LLMesh**, an open-source PHP AI SDK: *"The PHP AI SDK — works everywhere, including Laravel"*
- Creator of **Aura CSS** (`useaura` on npm) — a lightweight semantic attribute-based CSS library, 1,000+ weekly downloads
- Enrolled in an MBA at Bayero University Kano's Dangote Business School
- Shipped projects: OSBTS, OmniFile, Wazobia Agent, and more

### 3. `/blog` — Blog
- List page: sorted by date, shows title + date + short description
- Individual post pages rendered from MDX files in `/content/blog/`
- Support tags/categories
- RSS feed (`/rss.xml`)

**Starter blog posts to scaffold (empty MDX files with frontmatter only):**
```
/content/blog/building-llmesh-php-ai-sdk.mdx
/content/blog/rag-pipelines-for-backend-engineers.mdx
/content/blog/why-php-still-matters-in-ai-era.mdx
/content/blog/aura-css-launch-story.mdx
```

### 4. `/projects` — Projects
Split into two clearly labelled sections:

#### 2025 Projects
| Project | Description | Status | Links |
|---|---|---|---|
| **Aura CSS** | Lightweight semantic attribute-based CSS library. ~17kb, zero runtime. | Shipped | [npm](https://www.npmjs.com/package/useaura) · [GitHub](https://github.com/fyunusa) |
| **Wazobia Agent** | AI agent for multilingual Nigerian language tasks | Shipped | GitHub |
| **OmniFile** | Intelligent file processing and management platform | Shipped | GitHub |
| **OSBTS** | Open source bug tracking system | Shipped | GitHub |
| **Slack Status Overlay** | Chrome extension using Manifest V3, Slack OAuth, Cloudflare Worker, Canvas particle system | Shipped | GitHub |
| **Real Dev Live** | Developer talk show on Riverside.fm, distributed via YouTube | Live | [@realdevhq](https://x.com/realdevhq) |
| **Query Master Pro / ChronoBid Pro / Specs Comply Pro** | AI document intelligence platform built at Manaknight Digital | Production | — |

#### 2026 Projects (In Progress)
| Project | Description | Status |
|---|---|---|
| **LLMesh** | Open-source PHP AI SDK — framework-agnostic core (`llmesh/core`) with separate provider/adapter packages. Covers RAG, evals, observability, cost attribution, prompt versioning, smart routing. | 🔨 Active |
| *(More coming)* | — | — |

Each project card should show: name, short description, tech tags, status badge, and links (GitHub / live / npm).

### 5. `/resume` — Live Resume
A **styled, in-page resume** (not a PDF download — though offer a PDF export button).

Structure:

**Header:**
- Name: Umar Farouk Yunusa
- Title: Senior Backend & AI Engineer
- Location: Kano, Nigeria (Remote)
- Links: GitHub · LinkedIn · Email

**Summary:**
> Senior backend and full-stack engineer with 5+ years building high-throughput APIs, event-driven microservices, and production AI systems. Former Backend Lead at a South Korean fintech firm. Currently focused on AI/LLM engineering, open-source PHP tooling, and remote opportunities with companies in Canada, the US, and the UK.

**Skills (grouped):**
- **Languages:** PHP, Python, TypeScript/JavaScript
- **Frameworks:** Laravel, FastAPI, NestJS, Express
- **AI/ML:** Claude API, OpenAI, Gemini, RAG pipelines, vector databases, multi-agent workflows
- **Databases:** PostgreSQL, MySQL, MongoDB, Redis, DynamoDB
- **Infrastructure:** AWS, Azure, Docker, GitHub Actions, CI/CD
- **Practices:** Clean Architecture, SOLID, OAuth2, JWT, OWASP Top 10

**Experience:**
1. **Backend Lead** — MUST Company *(South Korean Fintech)* | Remote | 2023–2025
   - Architected fintech systems handling 500K+ daily transactions
   - Led BusinessHub platform delivery
   - Built event-driven microservices with sub-100ms APIs
   - Mentored engineers and enforced security standards

2. **Backend Developer** — Manaknight Digital *(Canada)* | Remote | 2022–2023
   - Built scalable FastAPI services with Celery + Redis background workers
   - Multi-tenant systems serving 100K+ daily requests
   - AI document intelligence suite (Query Master Pro, ChronoBid Pro, Specs Comply Pro)

3. **Technical Lead** — Edawhtech *(Nigeria)* | 2021–2022
   - Led backend delivery for high-traffic platforms
   - Built national-scale COVID travel portal

**Education:**
- MBA (in progress) — Dangote Business School, Bayero University Kano
- B.Sc. Computer Science *(adjust if needed)*

**Open Source:**
- LLMesh — PHP AI SDK (active)
- Aura CSS — 1,000+ weekly npm downloads
- Contributions: urllib3, Wagtail

---

## Navigation

```
Home | Blog | Projects | Resume | About
```

---

## Footer

Include:
- Social links: GitHub (`github.com/fyunusa`), LinkedIn (`linkedin.com/in/umar-yunusa-1463a418b`), X/Twitter, Real Dev (`@realdevhq`)
- Copyright: `© 2025 Umar Farouk Yunusa. All rights reserved.`
- RSS link

---

## Design Principles

- **Minimal.** No hero carousels, no particle animations, no gimmicks.
- **Typography-first.** Good font sizing, generous line height. Prefer `Inter` or `Geist` as body font.
- **Dark mode default** with system preference detection (CSS `prefers-color-scheme`)
- **Fast.** Static where possible. No unnecessary JS.
- **Mobile responsive.** Single-column on mobile, comfortable reading width (~680px max) on desktop.
- Color accent: a single muted tone — deep teal (`#0d9488`) or amber (`#d97706`) — used sparingly on links and badges only.

---

## Additional Notes

- The `/resume` page should have a **"Download PDF"** button that either opens a print dialog (`window.print()` with print CSS) or links to a static `/resume.pdf`
- Blog post MDX files should support frontmatter fields: `title`, `date`, `description`, `tags`, `draft`
- Draft posts (`draft: true`) should be excluded from the listing in production builds
- Add basic **Open Graph meta tags** to all pages (title, description, image)
- The site does not need a contact form — just link to email and LinkedIn

---

## Personal Info for Meta/SEO

- **Name:** Umar Farouk Yunusa
- **Handle:** `fyunusa` (GitHub), `@realdevhq` (X/Real Dev)
- **Email:** *(fill in before deploy)*
- **Default OG image:** A clean card with name + title on dark background

---

## Deliverables Expected

1. Full working Astro (or Next.js) project scaffold
2. All pages implemented and routed
3. MDX blog support with sample post stubs
4. Project section with 2025/2026 split
5. Live resume page + print CSS for PDF export
6. Responsive layout, dark mode, Tailwind styling
7. Footer with social links
8. RSS feed
9. README with local dev instructions
