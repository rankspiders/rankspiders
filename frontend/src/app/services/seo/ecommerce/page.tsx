'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function EcommerceSeoAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What is e-commerce SEO and why does it matter for online stores?",
      answer: "E-commerce SEO is the practice of optimizing your online store so that product pages, category pages, and your overall site architecture appear prominently in search results when shoppers are actively looking to buy. It matters because organic search is consistently the highest-ROI acquisition channel for most e-commerce businesses — visitors from organic search have strong purchase intent, and unlike paid ads, every organic ranking you earn keeps driving revenue without additional spend. Over 12–24 months, strong e-commerce SEO compounds into a significant and defensible competitive advantage."
    },
    {
      id: 2,
      question: "2. Which e-commerce platforms do you work with?",
      answer: "We work across all major e-commerce platforms: Shopify, WooCommerce (WordPress), Magento 2, BigCommerce, PrestaShop, OpenCart, and custom-built stores. Each platform has unique SEO challenges — Shopify limits URL structure customization; Magento has complex faceted navigation; WooCommerce requires careful plugin management. Our technical approach is adapted to each platform&apos;s specific strengths, limitations, and configuration options rather than applying a one-size-fits-all solution."
    },
    {
      id: 3,
      question: "3. How do you handle SEO for large product catalogues with thousands of SKUs?",
      answer: "Large catalogues create unique SEO challenges: crawl budget waste, thin content at scale, duplicate content from product variants, and faceted navigation crawl traps. Our approach: we implement canonical tags to consolidate duplicate pages, use noindex directives for low-value filtered and sorted pages, create meta description templates that auto-populate unique data for each product, apply structured data at scale for product schema, and optimize crawl depth so your highest-value pages receive the most crawl attention. This ensures even a 50,000 SKU store ranks efficiently without manual page-by-page optimization."
    },
    {
      id: 4,
      question: "4. What is faceted navigation SEO and why is it important?",
      answer: "Faceted navigation refers to the filter and sort systems on e-commerce category pages (e.g., filter by size, color, price, brand). These filters generate hundreds or thousands of URL combinations — most of which are near-duplicate low-value pages that waste crawl budget and dilute page authority. Poorly managed faceted navigation is one of the most common causes of ranking decline in large e-commerce stores. We solve this through a combination of canonical tags, parameter handling in Google Search Console, robots.txt rules, and selectively indexing high-value filtered pages (like &apos;/red-running-shoes&apos;) that have genuine search demand."
    },
    {
      id: 5,
      question: "5. How long before we see results from e-commerce SEO?",
      answer: "Most online stores see measurable organic traffic improvements within 60–90 days for long-tail product and category keywords, with significant revenue impact typically visible at the 4–6 month mark. Technical SEO fixes often show results fastest — resolving crawl errors, fixing duplicate content, and improving page speed can produce ranking improvements within weeks. Competitive head keywords (e.g., 'buy running shoes online') take longer — typically 6–12 months depending on your domain authority and the competitive landscape. The compounding nature of e-commerce SEO means results accelerate significantly in months 12–24."
    },
    {
      id: 6,
      question: "6. Do you also help with conversion rate optimization alongside SEO?",
      answer: "Yes, because traffic without conversion is wasted effort. We combine SEO with CRO insights at the page level — improving product page layout and trust signals, optimizing above-the-fold content for high-intent queries, improving mobile UX for thumb-friendly navigation, enhancing page speed to reduce abandonment, and recommending A/B testing priorities based on traffic and bounce rate data. The goal isn&apos;t just to rank higher — it&apos;s to ensure the organic traffic we drive actually converts into orders, repeat customers, and revenue for your store."
    },
    {
      id: 7,
      question: "7. How do you optimize product images for SEO in e-commerce?",
      answer: "Product images are a critical but often overlooked SEO element. We optimize every image with: keyword-rich, descriptive alt text (not keyword-stuffed, genuinely descriptive of what&apos;s shown), appropriate file names before upload, WebP format conversion for faster loading, compression without visible quality loss, and lazy loading implementation. For stores with large image libraries, we implement bulk optimization processes. Proper image SEO improves page speed scores, helps products appear in Google Image Search (an often-ignored traffic source), and provides accessibility benefits that search engines reward."
    },
    {
      id: 8,
      question: "8. How do I get started with Rank Spiders' e-commerce SEO services?",
      answer: "Start with our Free SEO Audit — submit your store URL and we&apos;ll deliver a detailed analysis of your current technical health, keyword rankings, product page optimization gaps, and the fastest path to organic revenue growth within 48 hours. This gives you a clear picture of where you stand and what a full engagement would achieve. From there, we&apos;ll propose a customized e-commerce SEO strategy with clear deliverables, timelines, and projected traffic outcomes. No obligation, no generic proposals — just a specific, data-backed plan for your store."
    },
  ];

  return (
    <>
      <PageHeader
        title="E-Commerce"
        subtitle="SEO Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'E-Commerce SEO', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/services/seo/ecommerce-seo-banner.png"
                      alt="E-Commerce SEO Agency India — Rank Higher, Drive Traffic, Increase Sales — product schema, category page SEO, faceted navigation, WooCommerce SEO, Shopify SEO — Rank Spiders ecommerce SEO services"
                      title="E-Commerce SEO Agency India — Rank Spiders Online Store SEO"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">
                    E-commerce SEO is the discipline of turning organic search into your highest-ROI acquisition channel. Unlike paid ads that stop delivering the moment you pause spend, organic rankings compound — every position your products earn keeps driving qualified buyers to your store month after month. We optimize every layer of your store: product listings, category architecture, technical health, internal linking, and backlink authority — so your products appear at the exact moment buyers are ready to purchase.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    At Rank Spiders, our ecommerce SEO agency India expertise covers the technical differentiators that separate top-ranking stores from the rest: product schema markup for Google Shopping rich results, faceted navigation SEO to prevent crawl budget waste, duplicate content management across variation pages and filtered URLs, and crawl architecture optimization for stores with thousands of SKUs. We work across Shopify, WooCommerce, Magento, BigCommerce, and custom-built platforms.
                  </p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">E-Commerce SEO That <span>Drives Revenue</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">We engineer ecommerce SEO services India with one focus — qualified, high-intent organic traffic that converts into sales and long-term customers.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li><strong>Higher Product Rankings</strong> — get your product and category pages to the top of search results for high-intent buyer queries</li>
                      <li><strong>More Qualified Traffic</strong> — attract buyers who are actively searching to purchase, not just browsing</li>
                      <li><strong>More Sales & Revenue</strong> — turn organic visitors into loyal, repeat customers through intent-aligned content</li>
                      <li><strong>Faster Store Performance</strong> — Core Web Vitals optimization that reduces bounce rate and increases conversion rate</li>
                      <li><strong>Product Schema & Rich Results</strong> — structured data that earns star ratings, price, and availability in Google search results</li>
                      <li><strong>Scalable Technical Architecture</strong> — crawl budget management, canonical tags, and URL optimization for large catalogues</li>
                      <li><strong>Faceted Navigation SEO</strong> — prevent crawl traps from filtered URLs while maximizing indexation of high-value pages</li>
                      <li><strong>Google Shopping Feed Optimization</strong> — product feed SEO for maximum visibility in Google Shopping results</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>On-Page Product SEO</h3>
                        <p>Keyword-optimized product titles, compelling meta descriptions, structured product descriptions, image alt text, and schema markup that help products rank and convert simultaneously</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Technical Store Optimisation</h3>
                        <p>Crawl budget management, site speed improvements, canonical strategy, duplicate content resolution, and faceted navigation SEO for large catalogues and dynamic stores</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/project-marketing-image.jpg" alt="Rank Spiders ecommerce SEO campaign results — organic traffic growth and sales increase for online stores India" title="E-Commerce SEO Results — Rank Spiders" loading="lazy" />
                      </figure>
                    </div>
                  </div>

                  {/* What We Optimize */}
                  <div className="service-growth-box wow fadeInUp" data-wow-delay="0.2s">
                    <h2>What Our E-Commerce SEO <span>Process Covers</span></h2>
                    <div className="service-growth-body">
                      <div className="service-growth-item-list">
                        {[
                          { icon: "fa-solid fa-box", title: "Product Page Optimization", desc: "We optimize every product page for search intent — keyword-rich titles, compelling meta descriptions, benefit-led product copy, image alt text, structured data (Product schema with price, availability, reviews), and internal links to related products. Optimized product pages rank for long-tail buyer queries that drive direct sales." },
                          { icon: "fa-solid fa-sitemap", title: "Category Architecture & Structure", desc: "Category pages are often the highest-volume ranking opportunity in an e-commerce store. We optimize category page content, breadcrumbs, internal linking, and crawl priority — ensuring Google understands your store hierarchy and ranks your top categories for high-competition head keywords." },
                          { icon: "fa-solid fa-spider", title: "Technical Crawl & Index Management", desc: "Large stores waste crawl budget on low-value pages (search result pages, filtered URLs, near-duplicate variants). We implement canonical tags, noindex directives, and robots.txt rules to concentrate Google&apos;s crawl attention on your revenue-generating pages — improving rankings across the board." },
                          { icon: "fa-solid fa-star", title: "Reviews & Social Proof SEO", desc: "Customer reviews are a powerful ranking and conversion signal. We implement review schema markup, optimize your review acquisition strategy, and ensure review content is indexed by Google — earning star ratings in search results that significantly improve click-through rates." },
                        ].map((item, i) => (
                          <div key={i} className="service-growth-item">
                            <h3><i className={item.icon} style={{marginRight: '8px', color: 'var(--accent-color)'}}></i>{item.title}</h3>
                            <p>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-belief">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-belief-content">
                <div className="section-title section-title-center">
                  <h3 className="wow fadeInUp">Our Belief</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Organic Traffic is Your <span>Most Valuable Asset</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Paid traffic stops when budgets stop. Organic SEO compounds—every ranking you earn keeps working for you.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values — ecommerce SEO agency India, organic traffic growth, product schema, online store SEO, Shopify WooCommerce Magento" title="Rank Spiders E-Commerce SEO Core Values" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>questions</span></h2>
          </div>
          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item wow fadeInUp">
                <h2 className="accordion-header">
                  <button className={`accordion-button ${openFaq === faq.id ? '' : 'collapsed'}`} type="button" onClick={() => toggleFaq(faq.id)}>
                    {faq.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openFaq === faq.id ? 'show' : ''}`}>
                  <div className="accordion-body"><p>{faq.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
