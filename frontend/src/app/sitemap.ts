import { MetadataRoute } from 'next'

const BASE = 'https://www.rankspiders.com'
const API  = process.env.NEXT_PUBLIC_API_URL || 'https://api.rankspiders.com'

// Revalidate once per day so new blog/project posts appear in the sitemap
export const revalidate = 86400

async function fetchSlugs(path: string): Promise<{ slug: string; created_at?: string }[]> {
  try {
    const res = await fetch(`${API}${path}`, { next: { revalidate: 86400 } })
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    // ── Homepage ────────────────────────────────────────────────────
    { url: `${BASE}/`,                                    priority: 1.0,  changeFrequency: 'weekly',  lastModified: now },

    // ── Core SEO service pages (highest-traffic) ────────────────────
    { url: `${BASE}/seo-agency-india`,                    priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free-seo-audit-agency`,               priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/technical-seo-agency`,                priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/ai-seo-agency`,                       priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/local-seo-agency`,                    priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/link-building-seo-agency`,            priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/ecommerce-seo-agency`,                priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/b2b-seo-agency`,                      priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/saas-seo-agency`,                     priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/shopify-seo-agency`,                  priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/woocommerce-seo-agency`,              priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/wordpress-seo-agency`,                priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/small-business-seo-agency`,           priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/seo-website-migration-agency`,        priority: 0.8,  changeFrequency: 'monthly', lastModified: now },

    // ── Social Media ────────────────────────────────────────────────
    { url: `${BASE}/social-media-marketing`,              priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/instagram-marketing-agency`,          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/facebook-marketing-agency`,           priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/youtube-marketing-agency`,            priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/pinterest-marketing-agency`,          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/linkedin-agency`,                     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/graphic-design-agency`,               priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/smo`,                                 priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/video-editing`,                       priority: 0.75, changeFrequency: 'monthly', lastModified: now },

    // ── Web Development ─────────────────────────────────────────────
    { url: `${BASE}/web-design-and-development-agency`,   priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/wordpress-development-agency`,        priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/shopify-development-agency`,          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/website-maintenance-agency`,          priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/custom-landing-page-agency`,          priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free-development-strategy-agency`,    priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/web-design-and-development-niche-industries`, priority: 0.7, changeFrequency: 'monthly', lastModified: now },

    // ── Content Marketing ────────────────────────────────────────────
    { url: `${BASE}/content-marketing-agency`,            priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/content-writing-agency`,              priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free-demo-content-agency`,            priority: 0.7,  changeFrequency: 'monthly', lastModified: now },

    // ── Email Marketing ──────────────────────────────────────────────
    { url: `${BASE}/email-marketing-agency`,              priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free-email-strategy-agency`,          priority: 0.7,  changeFrequency: 'monthly', lastModified: now },

    // ── Online Advertising / PPC ─────────────────────────────────────
    { url: `${BASE}/online-advertising-agency`,           priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/google-ads-agency`,                   priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/meta-ads-agency`,                     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/linkedin-ads-agency`,                 priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/pinterest-ads-agency`,                priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/online-advertising-niche-industries`, priority: 0.7,  changeFrequency: 'monthly', lastModified: now },

    // ── Consultancy ──────────────────────────────────────────────────
    { url: `${BASE}/consultancy-agency`,                  priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/seo-consultancy-agency`,              priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/business-growth-consultancy-agency`,  priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/organic-growth-consultancy-agency`,   priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/social-media-consultancy-agency`,     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },

    // ── ORM ──────────────────────────────────────────────────────────
    { url: `${BASE}/orm-agency`,                          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },

    // ── Main nav / informational pages ───────────────────────────────
    { url: `${BASE}/about`,                               priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services`,                            priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/blog`,                                priority: 0.8,  changeFrequency: 'daily',   lastModified: now },
    { url: `${BASE}/projects`,                            priority: 0.75, changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE}/contact-us`,                          priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/testimonials`,                        priority: 0.65, changeFrequency: 'monthly', lastModified: now },

    // ── Tools ────────────────────────────────────────────────────────
    { url: `${BASE}/tools`,                               priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/seo-audit`,                     priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/page-speed`,                    priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/keyword-density`,               priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/robots-tester`,                 priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/sitemap-validator`,             priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/meta-tags`,                     priority: 0.65, changeFrequency: 'monthly', lastModified: now },

    // ── Gallery ──────────────────────────────────────────────────────
    { url: `${BASE}/image-gallery`,                       priority: 0.6,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/video-gallery`,                       priority: 0.6,  changeFrequency: 'monthly', lastModified: now },

    // ── Team ─────────────────────────────────────────────────────────
    { url: `${BASE}/team/brooklyn-simmons`,               priority: 0.5,  changeFrequency: 'yearly',  lastModified: now },

    // ── Legal / utility ──────────────────────────────────────────────
    { url: `${BASE}/terms-and-conditions`,                priority: 0.4,  changeFrequency: 'yearly',  lastModified: now },
    { url: `${BASE}/privacy-policy`,                      priority: 0.4,  changeFrequency: 'yearly',  lastModified: now },
    { url: `${BASE}/help`,                                priority: 0.4,  changeFrequency: 'monthly', lastModified: now },
  ]

  // ── Dynamic blog posts ──────────────────────────────────────────────
  const blogs = await fetchSlugs('/api/blogs')
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: post.created_at ? new Date(post.created_at) : now,
  }))

  // ── Dynamic project pages ───────────────────────────────────────────
  const projects = await fetchSlugs('/api/projects')
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE}/projects/${project.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
