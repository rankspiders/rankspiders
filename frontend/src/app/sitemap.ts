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
    { url: `${BASE}/`,                                             priority: 1.0,  changeFrequency: 'weekly',  lastModified: now },

    // ── SEO ─────────────────────────────────────────────────────────
    { url: `${BASE}/services/seo`,                                 priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free/seo-audit`,                               priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/technical`,                       priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/ai`,                              priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/local`,                           priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/link-building`,                   priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/ecommerce`,                       priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/b2b`,                             priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/saas`,                            priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/shopify`,                         priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/woocommerce`,                     priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/wordpress`,                       priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/small-business`,                  priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/website-migration`,               priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/seo/consultancy`,                     priority: 0.85, changeFrequency: 'monthly', lastModified: now },

    // ── Social Media ────────────────────────────────────────────────
    { url: `${BASE}/services/social-media`,                        priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/social-media/instagram`,              priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/social-media/facebook`,               priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/social-media/youtube`,                priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/social-media/pinterest`,              priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/social-media/linkedin`,               priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/social-media/smo`,                    priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/social-media/consultancy`,            priority: 0.8,  changeFrequency: 'monthly', lastModified: now },

    // ── Content ──────────────────────────────────────────────────────
    { url: `${BASE}/services/content`,                             priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/content/writing`,                     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/content/graphic-design`,              priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/content/video-editing`,               priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/content/email-marketing`,             priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free/demo-content`,                            priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free/email-strategy`,                          priority: 0.7,  changeFrequency: 'monthly', lastModified: now },

    // ── Web Development ─────────────────────────────────────────────
    { url: `${BASE}/services/web-development`,                     priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/web-development/wordpress`,           priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/web-development/shopify`,             priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/web-development/maintenance`,         priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/web-development/landing-page`,        priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/free/development-strategy`,                    priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/web-development/niche-industries`,    priority: 0.7,  changeFrequency: 'monthly', lastModified: now },

    // ── Paid Ads ─────────────────────────────────────────────────────
    { url: `${BASE}/services/paid-ads`,                            priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/paid-ads/google-ads`,                 priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/paid-ads/meta-ads`,                   priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/paid-ads/linkedin-ads`,               priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/paid-ads/pinterest-ads`,              priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/paid-ads/niche-industries`,           priority: 0.7,  changeFrequency: 'monthly', lastModified: now },

    // ── Consultancy ──────────────────────────────────────────────────
    { url: `${BASE}/services/consultancy`,                         priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/consultancy/business-growth`,         priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/consultancy/organic-growth`,          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services/consultancy/orm`,                     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },

    // ── Main nav / informational pages ───────────────────────────────
    { url: `${BASE}/about`,                                        priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/services`,                                     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/blog`,                                         priority: 0.8,  changeFrequency: 'daily',   lastModified: now },
    { url: `${BASE}/projects`,                                     priority: 0.75, changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE}/contact-us`,                                   priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/testimonials`,                                 priority: 0.65, changeFrequency: 'monthly', lastModified: now },

    // ── Tools ────────────────────────────────────────────────────────
    { url: `${BASE}/tools`,                                        priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/seo-audit`,                              priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/page-speed`,                             priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/keyword-density`,                        priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/robots-tester`,                          priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/sitemap-validator`,                      priority: 0.65, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/tools/meta-tags`,                              priority: 0.65, changeFrequency: 'monthly', lastModified: now },

    // ── Gallery ──────────────────────────────────────────────────────
    { url: `${BASE}/image-gallery`,                                priority: 0.6,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE}/video-gallery`,                                priority: 0.6,  changeFrequency: 'monthly', lastModified: now },

    // ── Team ─────────────────────────────────────────────────────────
    { url: `${BASE}/team/brooklyn-simmons`,                        priority: 0.5,  changeFrequency: 'yearly',  lastModified: now },

    // ── Legal / utility ──────────────────────────────────────────────
    { url: `${BASE}/terms-and-conditions`,                         priority: 0.4,  changeFrequency: 'yearly',  lastModified: now },
    { url: `${BASE}/privacy-policy`,                               priority: 0.4,  changeFrequency: 'yearly',  lastModified: now },
    { url: `${BASE}/help`,                                         priority: 0.4,  changeFrequency: 'monthly', lastModified: now },
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
