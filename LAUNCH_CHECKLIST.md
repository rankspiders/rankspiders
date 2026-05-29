# Rank Spiders — Website Launch Checklist

Track progress here. Each section is marked with a checkbox — check it off when done.

---

## Step 1 — Security Fix ✅
- [x] Move Gmail credentials out of `contact/route.ts` into `frontend/.env.local`
- [x] Add `frontend/.env.local` to `.gitignore`

## Step 2 — Fix Footer Dead Links & Text Issues ✅
- [x] Fix 17 broken href links to point at existing routes
- [x] Fix email display text (`info.rankspiders.com` → `info@rankspiders.com`)
- [x] Fix "Linkdin" typos → "LinkedIn" in labels
- [x] Fix Support section links (Help, Terms, Privacy Policy)
- [x] Fix Facebook / Pinterest social hrefs (or remove)

## Step 3 — Create Missing Service Pages (21 pages) ✅
**SEO**
- [x] `/ecommerce-seo-agency`
- [x] `/shopify-seo-agency`
- [x] `/wordpress-seo-agency`

**Web Design**
- [x] `/web-design-and-development-agency`
- [x] `/wordpress-development-agency`
- [x] `/shopify-development-agency`
- [x] `/website-maintenance-agency`
- [x] `/seo-website-migration-agency`
- [x] `/free-development-strategy-agency`

**Social Media**
- [x] `/graphic-design-agency`
- [x] `/linkedin-agency`

**Content**
- [x] `/content-writing-agency`

**Consultancy**
- [x] `/consultancy-agency`
- [x] `/seo-consultancy-agency`
- [x] `/business-growth-consultancy-agency`
- [x] `/organic-growth-consultancy-agency`

**Advertising**
- [x] `/online-advertising-agency`
- [x] `/google-ads-agency`
- [x] `/linkedin-ads-agency`

## Step 4 — Legal & Support Pages ✅
- [x] `/privacy-policy`
- [x] `/terms-and-conditions`
- [x] `/help`

## Step 5 — Fix Testimonials ✅
- [x] Replace 5 duplicate "isabella clarke" entries with unique testimonials
- [ ] Video Testimonials — waiting for real YouTube IDs from client (swap in `testimonials/page.tsx` lines 48–55)

## Step 6 — Fix Team Page ✅
- [x] Replace dummy email / phone / address
- [x] Remove duplicate skill entries (replaced all 3 SEO duplicates with 6 unique skills)

## Step 7 — Newsletter Form ✅
- [x] Created `/api/newsletter/route.ts` endpoint (sends email notification to SMTP_USER)

## Step 8 — Verify Services Page Link ✅
- [x] `/web-design-and-development-agency` now exists and builds cleanly

## Step 9 — Environment Config & Build ✅
- [x] `NEXT_PUBLIC_API_URL` set in `frontend/.env.local` (update to production URL before deploy)
- [x] `npm run build` passes — 71 pages, zero errors
- [ ] Update `NEXT_PUBLIC_API_URL` to your production backend URL before deploying

---

## Images ✅ (completed)
All 3 replacement images confirmed good and build passes clean.

> Files with these names already exist in `public/images/` — these are **replacements**.
> Download the image, rename it exactly as shown, drop into `frontend/public/images/`.

### Gallery (9 images — shown on `/image-gallery` page)

| Filename | Search on Pexels.com or Unsplash.com | Topic |
|---|---|---|
| `gallery1.jpg` | "SEO analytics dashboard laptop" | SEO results |
| `gallery2.jpg` | "social media marketing phone screen" | Social campaign |
| `gallery3.jpg` | "modern website design mockup" | Web design |
| `gallery4.jpg` | "email marketing campaign newsletter" | Email marketing |
| `gallery5.jpg` | "Google Ads PPC advertising dashboard" | Paid ads |
| `gallery6.jpg` | "content writing blog strategy" | Content marketing |
| `gallery7.jpg` | "e-commerce product website laptop" | E-commerce SEO |
| `gallery8.jpg` | "local business Google Maps marketing" | Local SEO |
| `gallery9.jpg` | "brand identity design logo branding" | Branding |

**Size:** 800×600px or 1200×800px, JPG

### Service Page Images (4 images — used across ALL service pages)

| Filename | Search term | Where used |
|---|---|---|
| `service-single-image.jpg` | "digital marketing team office laptop" | Every service page hero |
| `service-strategy-img.jpg` | "marketing strategy whiteboard planning" | Every service page strategy section |
| `service-impact-img-1.jpg` | "website traffic growth analytics graph" | Impact section metric 1 |
| `service-impact-img-2.jpg` | "business growth success team" | Impact section metric 2 |

**Size:** 600×450px, JPG

### Core Page Images (5 images)

| Filename | Where to search | Where used |
|---|---|---|
| `hero-image.png` | Canva — "digital marketing illustration" | Homepage hero character |
| `about-us-image-1.png` | Real team photo OR Pexels "digital agency team" | About page |
| `why-choose-image.png` | Pexels "digital marketing success growth" | About + Testimonials |
| `contact-us-image.jpg` | Pexels "customer support headset professional" | Contact page |
| `our-belief-image.png` | Canva "marketing agency team values" | Service pages belief section |

**Note:** `.png` → export as PNG from Canva. `.jpg` → download photo directly.

### Do NOT replace
- All `icon-*.svg` files (icons are fine)
- All `*-bg.png` files (backgrounds are fine)
- `logo.png`, `footer.png` (logos)
- `team-1.png` to `team-8.png` (team photos)
- `client/` folder (client logos)
