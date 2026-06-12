import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  async redirects() {
    return [
      // SEO
      { source: '/seo-agency-india',             destination: '/services/seo',                      permanent: true },
      { source: '/ai-seo-agency',                destination: '/services/seo/ai',                   permanent: true },
      { source: '/technical-seo-agency',         destination: '/services/seo/technical',            permanent: true },
      { source: '/local-seo-agency',             destination: '/services/seo/local',                permanent: true },
      { source: '/link-building-seo-agency',     destination: '/services/seo/link-building',        permanent: true },
      { source: '/ecommerce-seo-agency',         destination: '/services/seo/ecommerce',            permanent: true },
      { source: '/shopify-seo-agency',           destination: '/services/seo/shopify',              permanent: true },
      { source: '/woocommerce-seo-agency',       destination: '/services/seo/woocommerce',          permanent: true },
      { source: '/wordpress-seo-agency',         destination: '/services/seo/wordpress',            permanent: true },
      { source: '/b2b-seo-agency',               destination: '/services/seo/b2b',                  permanent: true },
      { source: '/saas-seo-agency',              destination: '/services/seo/saas',                 permanent: true },
      { source: '/small-business-seo-agency',    destination: '/services/seo/small-business',       permanent: true },
      { source: '/seo-website-migration-agency', destination: '/services/seo/website-migration',    permanent: true },
      { source: '/seo-consultancy-agency',       destination: '/services/seo/consultancy',          permanent: true },
      // Paid Ads
      { source: '/online-advertising-agency',             destination: '/services/paid-ads',                    permanent: true },
      { source: '/google-ads-agency',                     destination: '/services/paid-ads/google-ads',         permanent: true },
      { source: '/meta-ads-agency',                       destination: '/services/paid-ads/meta-ads',           permanent: true },
      { source: '/linkedin-ads-agency',                   destination: '/services/paid-ads/linkedin-ads',       permanent: true },
      { source: '/pinterest-ads-agency',                  destination: '/services/paid-ads/pinterest-ads',      permanent: true },
      { source: '/online-advertising-niche-industries',   destination: '/services/paid-ads/niche-industries',   permanent: true },
      // Social Media
      { source: '/social-media-marketing',         destination: '/services/social-media',              permanent: true },
      { source: '/smo',                            destination: '/services/social-media/smo',          permanent: true },
      { source: '/facebook-marketing-agency',      destination: '/services/social-media/facebook',     permanent: true },
      { source: '/instagram-marketing-agency',     destination: '/services/social-media/instagram',    permanent: true },
      { source: '/linkedin-agency',                destination: '/services/social-media/linkedin',     permanent: true },
      { source: '/pinterest-marketing-agency',     destination: '/services/social-media/pinterest',    permanent: true },
      { source: '/youtube-marketing-agency',       destination: '/services/social-media/youtube',      permanent: true },
      { source: '/social-media-consultancy-agency',destination: '/services/social-media/consultancy',  permanent: true },
      // Content
      { source: '/content-marketing-agency', destination: '/services/content',                 permanent: true },
      { source: '/content-writing-agency',   destination: '/services/content/writing',         permanent: true },
      { source: '/graphic-design-agency',    destination: '/services/content/graphic-design',  permanent: true },
      { source: '/video-editing',            destination: '/services/content/video-editing',   permanent: true },
      { source: '/email-marketing-agency',   destination: '/services/content/email-marketing', permanent: true },
      // Web Development
      { source: '/web-design-and-development-agency',             destination: '/services/web-development',                    permanent: true },
      { source: '/shopify-development-agency',                    destination: '/services/web-development/shopify',            permanent: true },
      { source: '/wordpress-development-agency',                  destination: '/services/web-development/wordpress',          permanent: true },
      { source: '/custom-landing-page-agency',                    destination: '/services/web-development/landing-page',       permanent: true },
      { source: '/website-maintenance-agency',                    destination: '/services/web-development/maintenance',        permanent: true },
      { source: '/web-design-and-development-niche-industries',   destination: '/services/web-development/niche-industries',   permanent: true },
      // Consultancy
      { source: '/consultancy-agency',                  destination: '/services/consultancy',                  permanent: true },
      { source: '/business-growth-consultancy-agency',  destination: '/services/consultancy/business-growth',  permanent: true },
      { source: '/organic-growth-consultancy-agency',   destination: '/services/consultancy/organic-growth',   permanent: true },
      { source: '/orm-agency',                          destination: '/services/consultancy/orm',               permanent: true },
      // Free Resources
      { source: '/free-seo-audit-agency',            destination: '/free/seo-audit',             permanent: true },
      { source: '/free-demo-content-agency',         destination: '/free/demo-content',          permanent: true },
      { source: '/free-development-strategy-agency', destination: '/free/development-strategy',  permanent: true },
      { source: '/free-email-strategy-agency',       destination: '/free/email-strategy',        permanent: true },
    ];
  },
};

export default nextConfig;
