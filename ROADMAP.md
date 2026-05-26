# Rank Spiders — Website Build Roadmap

> **Goal:** Content-heavy, SEO-heavy site that ranks #1 for "SEO company India". Every page: 800–2000+ words, keyword-rich, plagiarism-free, AI-detection-free.

---

## TECH STACK

```
Browser → Next.js 16 + React 19 (frontend/ — port 3000)
             ↓ fetch()
Python FastAPI (backend/ — port 8000)
             ↓ supabase-py
Supabase PostgreSQL (cloud — stores blogs, projects, leads)
```

---

## SESSION ORDER

| # | Session | Status |
|---|---------|--------|
| 1 | Home page — 6 missing sections | 🔄 In Progress |
| 2 | About page — complete all sections | ❌ To Do |
| 3 | Contact form — wire to backend POST /api/submit | ❌ To Do |
| 4 | AEO Agency page + GEO Agency page (new) | ❌ To Do |
| 5 | Consultancy pages — PMS, Website Dev, Mobile App, AI Chatbot | ❌ To Do |
| 6 | Services hub — full redesign with all categories | ❌ To Do |
| 7 | SEO audit all existing service pages (metadata, H1, schema) | ❌ To Do |
| 8 | Blog content — add 5–10 posts to Supabase | ❌ To Do |
| 9 | Schema markup site-wide (JSON-LD) | ❌ To Do |
| 10 | Resume tools section | ❌ To Do |

---

## HOME PAGE (`/`) — Section Checklist

| Section | Status |
|---------|--------|
| Hero (heading, CTA, trust badges) | ✅ Done |
| ScrollingTicker | ✅ Done |
| Stats bar (10+, 500+, 95%, 1K+) | ✅ Done |
| Services grid (6 cards) | ✅ Done |
| Why Choose Us (3 reasons) | ✅ Done |
| CTA Banner | ✅ Done |
| Clients/Partners Logos Strip | ✅ Done (8 logos auto-downloaded, 5 need manual screenshot) |
| How We Work — 4-step process | ✅ Done |
| Featured Projects Preview (from API) | ✅ Done (with skeleton + empty state) |
| Testimonials (3–4 cards) | ✅ Done (placeholder — replace with real quotes) |
| Recent Blog Posts (from API) | ✅ Done (with skeleton + empty state) |
| Free Tools CTA Strip | ✅ Done |

---

## ABOUT PAGE (`/about`) — Section Checklist

| Section | Status |
|---------|--------|
| PageHeader | ✅ Done |
| About intro (image + text) | ✅ Done |
| Mission / Vision / Values | ✅ Done |
| Team grid (8 members) | ✅ Done |
| Animated stats counter | ❌ To Do |
| Our Story timeline | ❌ To Do |
| Certifications & Awards strip | ❌ To Do |
| Bottom CTA ("Work With Us") | ❌ To Do |
| Organization schema (JSON-LD) | ❌ To Do |

---

## ALL PAGES — Status Overview

### Core Pages
| Route | Status | Notes |
|-------|--------|-------|
| `/` | 🔄 In Progress | 6 sections missing |
| `/about` | 🔄 Partial | 4 sections missing |
| `/services` | ❌ Needs redesign | Hub page |
| `/contact-us` | 🔄 Partial | Not wired to Supabase |
| `/blog` | ✅ Done | Fetches from API |
| `/blog/[slug]` | ✅ Done | Dynamic route |
| `/projects` | ✅ Done | Fetches from API |
| `/projects/[slug]` | ✅ Done | Dynamic route |
| `/testimonials` | 🔄 Partial | Needs real content |
| `/tools` | ✅ Done | Hub + 6 tools |

### SEO Service Pages (need SEO audit)
| Route | Status |
|-------|--------|
| `/seo-agency-india` | 🔄 Needs audit |
| `/ai-seo-agency` | 🔄 Needs audit |
| `/technical-seo-agency` | 🔄 Needs audit |
| `/local-seo-agency` | 🔄 Needs audit |
| `/link-building-seo-agency` | 🔄 Needs audit |
| `/woocommerce-seo-agency` | 🔄 Needs audit |
| `/free-seo-audit-agency` | 🔄 Needs audit |
| `/saas-seo-agency` | 🔄 Needs audit |
| `/b2b-seo-agency` | 🔄 Needs audit |

### New Pages to Build
| Route | Service | Status |
|-------|---------|--------|
| `/aeo-agency` | Answer Engine Optimization | ❌ To Build |
| `/geo-agency` | Generative Engine Optimization | ❌ To Build |
| `/project-management-system` | Custom PMS | ❌ To Build |
| `/website-development-agency` | Website Building | ❌ To Build |
| `/mobile-app-development` | Mobile App Dev | ❌ To Build |
| `/ai-chatbot-agency` | AI Chatbots & Automation | ❌ To Build |

### Social Media Pages (need SEO audit)
`/social-media-marketing`, `/facebook-marketing-agency`, `/pinterest-marketing-agency`, `/youtube-marketing-agency`, `/social-media-consultancy-agency`, `/pinterest-ads-agency`, `/meta-ads-agency`, `/smo`

### Other Service Pages
`/web-design-and-development-niche-industries`, `/custom-landing-page-agency`, `/content-marketing-agency`, `/email-marketing-agency`, `/free-email-strategy-agency`, `/online-advertising-niche-industries`, `/orm-agency`, `/video-editing`

---

## SEO STANDARDS (Every Page Must Have)

- [ ] `metadata` export in `page.tsx` with `title`, `description`, `canonical`, `openGraph`
- [ ] Exactly **one H1** containing the primary keyword
- [ ] H2/H3 headings with LSI keywords
- [ ] JSON-LD schema (Organization / Service / Article / FAQPage)
- [ ] 3–5 internal links per page
- [ ] Minimum 800 words of original content
- [ ] All images have keyword-aware `alt` text
- [ ] Canonical URL set

## TARGET KEYWORDS

| Page | Primary Keyword |
|------|----------------|
| `/` | SEO agency India |
| `/seo-agency-india` | SEO agency India |
| `/ai-seo-agency` | AI SEO agency |
| `/aeo-agency` | answer engine optimization agency |
| `/geo-agency` | generative engine optimization |
| `/technical-seo-agency` | technical SEO services India |
| `/local-seo-agency` | local SEO India |
| `/about` | digital marketing agency India |
| `/blog` | SEO blog India |
| `/tools/seo-audit` | free SEO audit tool |

---

## CONTENT STANDARDS

- **Plagiarism-free** — 0% on Copyscape / Grammarly
- **AI-detection-free** — passes Originality.ai, GPTZero, Winston AI
- Conversational tone — "We help you…", "Your site will…"
- No filler: ban "In today's digital landscape", "Leveraging synergies"
- Short + long sentences mixed. Specific numbers. Active voice.
- Brand voice: direct, data-obsessed, no-fluff

---

## BACKEND API ENDPOINTS (All Built)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | All blog posts |
| GET | `/api/blogs/{slug}` | Single blog post |
| GET | `/api/projects` | All projects |
| GET | `/api/projects/{slug}` | Single project |
| POST | `/api/submit` | Save lead + send email |
| GET | `/api/tools/audit?url=` | SEO audit |
| GET | `/api/tools/speed?url=` | Page speed |
| GET | `/api/tools/keywords?url=` | Keyword density |
| GET | `/api/tools/robots?url=` | Robots.txt tester |
| GET | `/api/tools/sitemap?url=` | Sitemap validator |
| GET | `/api/tools/meta?url=` | Meta tag extractor |

Test all endpoints at: `http://localhost:8000/docs` (Swagger UI — auto-generated by FastAPI)
