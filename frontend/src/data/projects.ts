export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  client: string;
  location: string;
  date: string;
  image: string;
  content: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce SEO: 312% Traffic Growth in 6 Months",
    slug: "ecommerce-seo-312-percent-growth",
    category: "SEO Optimization",
    client: "Leading Fashion E-Commerce Brand",
    location: "Mumbai, India",
    date: "Jan 2025",
    image: "/images/projects/project-1.jpg",
    content: `<p>A leading fashion e-commerce brand was struggling with thin content, poor category page optimization, and minimal backlink authority. We rebuilt their site architecture, created 200+ optimized product and category pages, and executed a targeted link building campaign.</p><p><strong>Result:</strong> 312% increase in organic traffic, 89% increase in organic revenue within 6 months.</p>`,
  },
  {
    id: 2,
    title: "Local SEO Domination for Multi-Location Restaurant Chain",
    slug: "local-seo-restaurant-chain",
    category: "Local SEO",
    client: "Multi-Location Restaurant Chain",
    location: "Delhi NCR, India",
    date: "Nov 2024",
    image: "/images/projects/project-2.jpg",
    content: `<p>A restaurant chain with 12 locations across Delhi NCR needed to dominate local search in each area. We optimized 12 Google Business Profiles, built consistent local citations, implemented location-specific landing pages, and executed a review acquisition strategy.</p><p><strong>Result:</strong> All 12 locations ranking in the top 3 Map Pack positions for primary keywords.</p>`,
  },
  {
    id: 3,
    title: "B2B SaaS Content Strategy: 5x Organic Leads",
    slug: "b2b-saas-content-strategy-5x-leads",
    category: "Content Marketing",
    client: "HR Tech SaaS Company",
    location: "Bangalore, India",
    date: "Sep 2024",
    image: "/images/projects/project-3.jpg",
    content: `<p>A B2B SaaS company in the HR tech space had strong product-market fit but near-zero organic presence. We built a full content strategy around their buyer journey — from awareness blog posts to comparison pages to bottom-of-funnel case studies.</p><p><strong>Result:</strong> 5x increase in organic demo requests over 9 months with a 40% lower cost per acquisition than paid channels.</p>`,
  },
  {
    id: 4,
    title: "Social Media Growth: 0 to 85K Followers in 8 Months",
    slug: "social-media-growth-85k-followers",
    category: "Social Media Marketing",
    client: "D2C Health & Wellness Brand",
    location: "Pune, India",
    date: "Aug 2024",
    image: "/images/projects/project-4.jpg",
    content: `<p>A D2C health and wellness brand launched with no social presence. We built their entire social media strategy from scratch across Instagram, Facebook, and Pinterest — including content calendar, brand voice guidelines, influencer partnerships, and paid amplification.</p><p><strong>Result:</strong> 85,000 engaged followers, 4.2% average engagement rate, and social becoming their #2 revenue channel.</p>`,
  },
  {
    id: 5,
    title: "Technical SEO Audit & Fix: Recovering from Google Penalty",
    slug: "technical-seo-google-penalty-recovery",
    category: "Technical SEO",
    client: "Travel Agency",
    location: "Chennai, India",
    date: "Jun 2024",
    image: "/images/projects/project-5.jpg",
    content: `<p>A travel agency had lost 60% of organic traffic after a Google core update due to thin content, duplicate pages, and a toxic backlink profile. We conducted a full technical audit, disavowed 1,400+ toxic links, merged duplicate content, implemented canonical tags site-wide, and rebuilt their core service pages.</p><p><strong>Result:</strong> Full traffic recovery within 4 months and 15% above pre-penalty levels.</p>`,
  },
  {
    id: 6,
    title: "Meta Ads Campaign: 4.8x ROAS for D2C Brand",
    slug: "meta-ads-4x-roas-d2c-brand",
    category: "PPC & Paid Ads",
    client: "D2C Skincare Brand",
    location: "Hyderabad, India",
    date: "Apr 2024",
    image: "/images/projects/project-6.jpg",
    content: `<p>A D2C skincare brand was running Meta Ads internally with a 1.2x ROAS and hemorrhaging budget. We restructured their entire campaign architecture, rebuilt audiences using first-party data, created a full-funnel creative strategy, and implemented aggressive A/B testing.</p><p><strong>Result:</strong> ROAS improved from 1.2x to 4.8x within 90 days while scaling spend by 200%.</p>`,
  },
];

export default projects;
