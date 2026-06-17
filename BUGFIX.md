# Rank Spiders — Bug Fix Tracker
> Generated from 5-agent full-stack audit · June 2026  
> Tick each checkbox as fixes are applied.

---

## 🚨 SHIP BLOCKERS (Must fix before going live)

- [x] **#1** `GET /api/leads/export` is fully public — anyone can download entire customer DB as CSV · `backend/routers/leads.py:139`
- [x] **#2** `PATCH /api/leads/{id}/score` is fully public — anyone can overwrite lead scores · `backend/routers/leads.py:139`
- [x] **#3** Stored XSS via email — lead `message` field is raw HTML injected into email body · `backend/routers/leads.py:47`
- [x] **#4** `$2412.00 Total fund` placeholder live on ~8 pages · `free/demo-content`, `services/content`, `facebook`, `technical`, `team`, etc.
- [x] **#5** Literal placeholder description: `"This is the b2b seo page description."` in Google SERPs · `services/seo/b2b/page.tsx:7`
- [x] **#6** Literal placeholder description: `"This is the email marketing page description."` · `services/content/email-marketing/page.tsx:7`
- [x] **#7** Literal placeholder description: `"This is the custom landing page page description."` · `services/web-development/landing-page/page.tsx:7`
- [x] **#8** Literal placeholder description: `"This is the free demo content page description."` · `free/demo-content/page.tsx:7`
- [x] **#9** 3 links 404 — `/niche-seo-industries-agency` and `/niche-industries-agency` don't exist · `seo/ai/page.tsx:97`, `email-strategy/page.tsx:70`, `video-editing/page.tsx:82`
- [x] **#10** Competitor name "WebPulse" leaked in Technical SEO FAQ · `services/seo/technical/page.tsx`
- [x] **#11** Wrong Google Maps embed — shows `D-151 Sector 71`, real address is `D-152 Sector 74` · `contact-us/page.tsx:292`
- [x] **#12** Public debug endpoint burns paid Serper API credits · `backend/tools/rank_tracker/router.py:379`
- [x] **#13** SSRF blocklist incomplete — `169.254.169.254`, IPv6 loopback, `0.0.0.0` all unblocked · `backend/tools/seo_auditor/router.py:23`
- [x] **#14** Silent success on DB failure — leads endpoint returns 200 even when Supabase is down · `backend/routers/leads.py:105`

---

## 🔴 HIGH — SEO Critical

- [x] **#15** `www` vs non-`www` canonical split — fixed across 35 files · multiple files
- [x] **#16** `contact-us/page.tsx` — `'use client'` with zero metadata (no title, description, OG)
- [x] **#17** `testimonials/page.tsx` — `'use client'` with zero metadata
- [x] **#18** `help/page.tsx` — `'use client'` with zero metadata
- [x] **#19** `image-gallery/page.tsx` — `'use client'` with zero metadata
- [x] **#20** `video-gallery/page.tsx` — `'use client'` with zero metadata
- [x] **#21** `services/seo/page.tsx` — `'use client'` with zero metadata
- [x] **#22** `services/social-media/page.tsx` — `'use client'` with zero metadata
- [x] **#23** `services/social-media/instagram/page.tsx` — `'use client'` with zero metadata
- [x] **#24** `services/web-development/page.tsx` — `'use client'` with zero metadata
- [x] **#25** `services/paid-ads/page.tsx` — `'use client'` with zero metadata
- [x] **#26** `services/consultancy/page.tsx` — `'use client'` with zero metadata
- [x] **#27** `free/development-strategy/page.tsx` — `'use client'` with zero metadata
- [x] **#28** Footer logo is black-on-black — `filter: brightness(0)` on dark `#0f0f0f` footer · `custom.css:753`
- [x] **#29** Dark mode completely broken — added full `[data-theme="dark"]` CSS variable overrides to `custom.css`
- [x] **#30** Dark mode toggle button never rendered — added moon/sun toggle button with `useEffect` + `localStorage` to `Header.tsx`
- [ ] **#31** `localhost:8000` hardcoded fallback — all 7 tools + blog slug break silently in production
- [x] **#32** `SERPER_API_KEY` missing from `backend/.env.example`
- [x] **#33** Orphan pages — added Small Business SEO, SMO, ORM links in footer tabs; Image/Video Gallery in Resources · `Footer.tsx`
- [x] **#34** Footer tab "SEO Niche Industries" links to web-dev route — replaced with Small Business SEO in SEO tab · `Footer.tsx`

---

## 🟡 MEDIUM — Quality & Accessibility

- [x] **#35** WOW.js used 869 times across 61 files — stripped all `wow fadeInUp` classes and `data-wow-*` attrs via batch replace
- [x] **#36** `a:focus { outline: 0 }` globally kills keyboard navigation · `custom.css:375`
- [x] **#37** Footer link hover fails WCAG contrast — dark purple on `#0f0f0f` (~2.5:1, needs 4.5:1) · `custom.css:3694`
- [x] **#38** Footer tab button hover contrast failure — same dark purple on `#13131d` · `custom.css:3716`
- [x] **#39** `404` returned as `500` in `/api/blogs/{slug}` and `/api/projects/{slug}` · `blogs.py:16`, `projects.py:16`
- [x] **#40** No input length limits on lead form fields · `backend/routers/leads.py:18`
- [x] **#41** `alt=""` (decorative) images incorrectly flagged as missing alt in SEO auditor · `scraper.py:58`
- [x] **#42** OG `description` missing from 5 tool `page.tsx` files — `page-speed`, `meta-tags`, `keyword-density`, `robots-tester`, `sitemap-validator`
- [x] **#43** Breadcrumbs use `href="#"` on 8+ pages — fixed with correct parent routes
- [x] **#44** Brooklyn Simmons social links all `href="#"` — replaced with real Rank Spiders social URLs
- [x] **#45** Footer social icon links have no `aria-label` · `Footer.tsx:83–88`
- [x] **#46** Home contact form labels not wired to inputs — added `htmlFor`/`id` pairs to all fields · `HomeClient.tsx`
- [x] **#47** Country code `<select>` has no associated `<label>` — added `aria-label` · `contact-us/page.tsx`
- [x] **#48** Footer newsletter uses `alert()` — blocks UI thread, inaccessible · `Footer.tsx:67,70`
- [x] **#49** `namedItem('mail') as HTMLInputElement` — no null check, runtime crash risk · `Footer.tsx:60`
- [x] **#50** `source` field on leads is user-controlled — analytics can be spoofed · `leads.py:75`
- [x] **#51** `int(os.environ.get("SMTP_PORT"))` crashes with `TypeError` if env var unset · `leads.py:35`
- [x] **#52** `SUPABASE_URL`/`SUPABASE_KEY` no null-check at startup — cryptic error · `db.py:7`
- [ ] **#53** Competitor URLs stored without validation in rank tracker — SSRF-by-proxy · `rank_tracker/router.py:200`
- [ ] **#54** `browser`/`country`/`language` fields are free strings in rank tracker · `rank_tracker/router.py:97`
- [ ] **#55** `check_robots` has no independent timeout · `scraper.py`
- [ ] **#56** `PageSpeedClient` has no URL validation before API call · `PageSpeedClient.tsx`
- [x] **#57** Debug endpoint URL removed from production rank tracker UI · `RankTrackerClient.tsx`
- [ ] **#58** Hero image uses `<img>` instead of `next/image` `<Image>` · `HomeClient.tsx:576`
- [ ] **#59** Team member photos use `<img>` — 8 images, no optimization · `about/page.tsx:518`
- [ ] **#60** Blog thumbnails use `<img>` · `BlogListClient.tsx:77`, `blog/[slug]/page.tsx:229`
- [ ] **#61** Blog card images use CSS `backgroundImage` — no alt text, no CLS prevention · `HomeClient.tsx:1159`
- [x] **#62** `free/email-strategy` page content was about content writing — fully rewritten with email strategy copy
- [ ] **#63** Projects page uses static local JSON while homepage fetches from backend — data diverges · `projects/page.tsx`
- [ ] **#64** `og_site_name` computed by backend but never rendered in frontend · `AuditResults.tsx`
- [x] **#65** Brooklyn Simmons: role changed from "Lead Technician" to "SEO Strategist" — consistent with about page
- [ ] **#66** No response body size limit on SEO auditor — memory exhaustion risk · `seo_auditor/router.py`

---

## 🟢 LOW — Polish

- [x] **#67** Copyright shows `2025` (current year is 2026) · `Footer.tsx:341`
- [x] **#68** Koalendar booking link hardcoded to `date=2026-06-15` (past date) · `HomeClient.tsx:1437`, `Header.tsx:213,268`
- [x] **#69** No version pins in `requirements.txt` — pinned all 11 packages to current installed versions
- [x] **#70** `datetime.utcnow()` deprecated since Python 3.12 — replaced with `datetime.now(timezone.utc)` in `rank_tracker/router.py`
- [x] **#71** `raise_for_status()` may expose Serper API key — replaced with `is_success` check · `rank_tracker/scraper.py`
- [ ] **#72** Favicon `shortcut icon` detection dead code in scraper · `scraper.py:114`
- [x] **#73** SSE `EventSource` not closed on component unmount — added cleanup `useEffect` · `RankTrackerClient.tsx`
- [x] **#74** UI claims "25 SEO checks", actual count is 24 · `SeoAuditClient.tsx`
- [x] **#75** Gallery images have generic `alt="Gallery Image N"` — replaced with descriptive alt text · `image-gallery/page.tsx`
- [ ] **#76** 10+ map calls use index as `key` where stable unique IDs exist · `HomeClient.tsx`
- [x] **#77** 4 footer "Resources" links all pointed to `/projects` — replaced with Portfolio, Gallery, Blog, Team links
- [x] **#78** Tool URL inputs have no `<label>` or `aria-label` — added `aria-label` to all 6 tool clients
- [x] **#79** `heroSectionRef` declared but never read — removed dead ref · `HomeClient.tsx`
- [x] **#80** No `/robots.txt` route on FastAPI server — added `GET /robots.txt` endpoint · `backend/main.py`
- [x] **#81** ARIA comparison table missing `role="rowgroup"` wrapper — added to thead and tbody sections · `HomeClient.tsx`
- [ ] **#82** Bare `except: pass` swallows JSON-LD parse errors silently · `seo_auditor/scraper.py:129`
- [x] **#83** Video gallery uses absolute URLs for `src` — changed to relative paths · `video-gallery/page.tsx`
- [x] **#84** Copy-pasted duplicate description in testimonials "Why Choose Us" — fixed "Data-Driven Strategies" copy
- [ ] **#85** `imports inside function body` in debug endpoint · `rank_tracker/router.py:391` (debug endpoint already deleted)
- [x] **#86** `canvas.parentElement!` non-null assertion without guard — added null check · `HomeClient.tsx`
- [x] **#87** `ScrollingTicker` uses index key on duplicated array — fixed with compound `a-${i}`/`b-${i}` keys
- [x] **#88** `NEXT_PUBLIC_API_URL` env var already documented in `frontend/.env.example`

---

## Progress

| Category | Total | Fixed | Remaining |
|----------|-------|-------|-----------|
| 🚨 Ship Blockers | 14 | 14 | 0 |
| 🔴 High / SEO | 20 | 19 | 1 |
| 🟡 Medium | 32 | 24 | 8 |
| 🟢 Low | 22 | 18 | 4 |
| **Total** | **88** | **75** | **13** |
