# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rank Spiders is a fullstack digital marketing agency website. The monorepo has two separate applications:

- `frontend/` — Next.js 16 (App Router) + React 19 + TypeScript
- `backend/` — FastAPI (Python) with Supabase and SMTP email

## Commands

### Frontend (`frontend/`)

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

### Backend (`backend/`)

```bash
# Activate virtualenv first (from repo root)
venv\Scripts\activate          # Windows
source venv/bin/activate       # Unix

cd backend
pip install -r requirements.txt
uvicorn main:app --reload      # Start at localhost:8000
```

## Architecture

### Frontend

Next.js App Router. Every folder under `src/app/` is a route — most are standalone service/landing pages with no shared logic.

**Important (from AGENTS.md):** This project uses **Next.js 16**, which has breaking changes from earlier versions. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code.

- `src/app/layout.tsx` — Root layout. Loads global CSS (Bootstrap, FontAwesome, Swiper, custom) and wraps every page with `<Header>` and `<Footer>`. Google Fonts (Inter + Plus Jakarta Sans) are loaded via `<link>` in `<head>`.
- `src/components/` — Shared components: `Header`, `Footer`, `PageHeader`, `ScrollingTicker`, `Sidebar`, `MotionWrapper`.
- `src/styles/` — Vendor CSS files imported globally via layout.tsx.
- `src/app/api/contact/route.ts` — Next.js API route that handles the contact form. Sends email via **nodemailer** directly. Does **not** write to the database.

### Design System

The entire visual theme is driven by CSS custom properties in `src/styles/custom.css` (`:root` block at the top). Dark mode is toggled via `[data-theme="dark"]` on `<html>` — controlled by `Header.tsx` with `localStorage` persistence.

**Key CSS variables:**
- `--bg-color`, `--bg-secondary` — page backgrounds
- `--primary-color`, `--text-color`, `--text-muted` — text hierarchy
- `--accent-color` (`#4F46E5` indigo), `--accent-secondary-color` (`#06B6D4` cyan) — brand accents
- `--card-bg`, `--card-border`, `--shadow-sm`, `--shadow-md` — card system
- `--header-bg` — glassmorphism header background (includes opacity)
- `--default-font` (Inter), `--heading-font` (Plus Jakarta Sans)

**Adding animations:** Use `MotionWrapper` from `src/components/MotionWrapper.tsx` (wraps Framer Motion `whileInView`). Use `MotionCard` for hover-lift cards. Do not add new `wow fadeInUp` classes — WOW.js is not initialized.

**ScrollingTicker:** Always use `<ScrollingTicker />` component. Never hardcode the ticker HTML inline in pages.

### Backend

Modular FastAPI app. `backend/main.py` is the entry point (~30 lines — only app init + `include_router` calls). Logic lives in routers.

**File structure:**
```
backend/
├── main.py                         ← app init + include_router calls only
├── db.py                           ← shared Supabase client (imported by routers)
├── requirements.txt
├── routers/
│   ├── blogs.py                    ← GET /api/blogs, GET /api/blogs/{slug}
│   ├── projects.py                 ← GET /api/projects, GET /api/projects/{slug}
│   ├── leads.py                    ← POST /api/submit (Supabase + email)
│   └── tools.py                    ← mounts all tool sub-routers
└── tools/
    └── seo_auditor/
        ├── router.py               ← GET /api/tools/audit
        └── scraper.py              ← check_robots() + extract_seo()
```

**Adding a new tool:** create `backend/tools/<name>/router.py` with an `APIRouter`, then import and `include_router` it in `backend/routers/tools.py`. No changes to `main.py` needed.

**All API endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/blogs` | All blog posts from Supabase, ordered by date |
| GET | `/api/blogs/{slug}` | Single blog post |
| GET | `/api/projects` | All project records |
| GET | `/api/projects/{slug}` | Single project |
| POST | `/api/submit` | Saves lead to Supabase + sends email notification |
| GET | `/api/tools/audit?url=` | SEO audit: returns JSON with 10+ on-page checks |

**Environment variables** required in `backend/.env`:
- `SUPABASE_URL`, `SUPABASE_KEY` — Supabase project credentials
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` — Gmail SMTP (uses App Password)
- `RECEIVER_EMAIL` — where lead notifications are sent

### Tools section

The `/tools/` route namespace is for interactive SEO utilities built into the site. Each tool is a self-contained pair:

- **Backend:** `backend/tools/<name>/router.py` (FastAPI `APIRouter`) + `scraper.py` (pure logic, no HTML)
- **Frontend:** `frontend/src/app/tools/<name>/page.tsx` (server component, exports `metadata`) + `<NameClient>.tsx` (`'use client'` interactive component)

**Current tools:**

| Route | API endpoint | Description |
|-------|-------------|-------------|
| `/tools/seo-audit` | `GET /api/tools/audit?url=` | On-page SEO audit: title, meta, headings, canonical, images, OG, speed, robots |

**SEO audit response shape:**
```json
{
  "url", "status_code", "load_time_ms", "robots_allowed",
  "title", "title_length", "meta_description", "meta_description_length",
  "h1_tags", "h2_count", "h3_count", "canonical",
  "image_count", "images_missing_alt_count",
  "internal_links", "external_links",
  "open_graph": { "og_title", "og_description", "og_image", "og_type" },
  "has_viewport_meta"
}
```

**Tool page pattern:** `page.tsx` is a server component that exports `metadata` (title, description, OG, canonical) and renders a `<NameClient />` component. The client component does the `fetch` to `http://localhost:8000/api/tools/...` and renders results. This hybrid gives full SEO metadata while keeping interactivity client-side.

### Data flow split

There are **two parallel contact paths**:

1. **Frontend contact form** (`/contact-us`) → POST `/api/contact` (Next.js route) → nodemailer only, no DB write
2. **Backend** `POST /api/submit` → Supabase `leads` table + email — this endpoint exists but is not currently called by the frontend

Blog and Projects pages call the FastAPI backend at `http://localhost:8000` directly from the browser (client components with `fetch`). Both `/blog` and `/projects` are `'use client'` pages that fetch on mount.

### Supabase tables

- `blogs` — columns: `id`, `title`, `slug`, `excerpt`, `content`, `author`, `image_url`, `created_at`
- `projects` — columns: `id`, `title`, `slug`, `category`, `location`, `date`, `content`, `image_url`
- `leads` — columns: `fname`, `lname`, `email`, `phone`, `service`, `message`, `created_at`
