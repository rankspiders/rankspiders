'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const servicesList = [
  {
    title: "SEO Optimisation",
    description: "Position your brand as a credible, high-trust authority across search ecosystems. Technical, on-page, and off-page SEO that compounds over time.",
    link: "/services/seo",
    image: "/images/sections/service-circle-img-1.png",
    icon: "fa-solid fa-magnifying-glass-chart",
  },
  {
    title: "Web Design & Development",
    description: "Build fast, scalable, and conversion-focused websites tailored to your brand. WordPress, Shopify, and custom builds.",
    link: "/services/web-development",
    image: "/images/sections/service-circle-img-2.png",
    icon: "fa-solid fa-code",
  },
  {
    title: "Social Media Marketing",
    description: "Amplify your brand voice, grow an engaged audience, and turn social followers into paying customers across every platform.",
    link: "/services/social-media",
    image: "/images/sections/service-circle-img-3.png",
    icon: "fa-brands fa-instagram",
  },
  {
    title: "Paid Advertising",
    description: "Drive targeted traffic and accelerate conversions with precision Google Ads, Meta Ads, and LinkedIn ad campaigns.",
    link: "/services/paid-ads",
    image: "/images/sections/service-circle-img-4.png",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Content Marketing",
    description: "Build brand authority with strategic content — blog posts, landing pages, and articles engineered to rank and convert.",
    link: "/services/content",
    image: "/images/sections/service-circle-img-5.png",
    icon: "fa-solid fa-pen-nib",
  },
  {
    title: "Consultancy",
    description: "Get expert guidance on your digital strategy. We audit, advise, and roadmap your growth — whether you need SEO, ads, or full-funnel consulting.",
    link: "/services/consultancy",
    image: "/images/sections/service-circle-img-6.png",
    icon: "fa-solid fa-handshake",
  },
];

const allServices = [
  { category: "SEO", items: [
    { label: "SEO Optimisation", href: "/services/seo" },
    { label: "Technical SEO", href: "/services/seo/technical" },
    { label: "Local SEO", href: "/services/seo/local" },
    { label: "E-Commerce SEO", href: "/services/seo/ecommerce" },
    { label: "Shopify SEO", href: "/services/seo/shopify" },
    { label: "WordPress SEO", href: "/services/seo/wordpress" },
    { label: "Link Building SEO", href: "/services/seo/link-building" },
    { label: "B2B SEO", href: "/services/seo/b2b" },
    { label: "SaaS SEO", href: "/services/seo/saas" },
    { label: "AI SEO", href: "/services/seo/ai" },
  ]},
  { category: "Web Design & Dev", items: [
    { label: "Web Design & Development", href: "/services/web-development" },
    { label: "WordPress Development", href: "/services/web-development/wordpress" },
    { label: "Shopify Development", href: "/services/web-development/shopify" },
    { label: "Custom Landing Pages", href: "/services/web-development/landing-page" },
    { label: "Website Maintenance", href: "/services/web-development/maintenance" },
    { label: "SEO Website Migration", href: "/services/seo/website-migration" },
  ]},
  { category: "Social Media", items: [
    { label: "Social Media Marketing", href: "/services/social-media" },
    { label: "Instagram Marketing", href: "/services/social-media/instagram" },
    { label: "Facebook Marketing", href: "/services/social-media/facebook" },
    { label: "LinkedIn Marketing", href: "/services/social-media/linkedin" },
    { label: "YouTube Marketing", href: "/services/social-media/youtube" },
    { label: "Pinterest Marketing", href: "/services/social-media/pinterest" },
    { label: "Graphic Design", href: "/services/content/graphic-design" },
  ]},
  { category: "Content & Email", items: [
    { label: "Content Marketing", href: "/services/content" },
    { label: "Content Writing", href: "/services/content/writing" },
    { label: "Email Marketing", href: "/services/content/email-marketing" },
  ]},
  { category: "Paid Advertising", items: [
    { label: "Online Advertising", href: "/services/paid-ads" },
    { label: "Google Ads", href: "/services/paid-ads/google-ads" },
    { label: "Meta Ads", href: "/services/paid-ads/meta-ads" },
    { label: "LinkedIn Ads", href: "/services/paid-ads/linkedin-ads" },
    { label: "Pinterest Ads", href: "/services/paid-ads/pinterest-ads" },
  ]},
  { category: "Consultancy", items: [
    { label: "Digital Consultancy", href: "/services/consultancy" },
    { label: "SEO Consultancy", href: "/services/seo/consultancy" },
    { label: "Business Growth Consultancy", href: "/services/consultancy/business-growth" },
    { label: "Organic Growth Consultancy", href: "/services/consultancy/organic-growth" },
    { label: "Social Media Consultancy", href: "/services/social-media/consultancy" },
  ]},
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our"
        subtitle="Services"
        breadcrumbs={[{ label: 'Services', active: true }]}
      />

      {/* ── Featured service cards ── */}
      <div className="services-featured-section">
        <div className="container">
          <div className="section-title text-center section-title-center wow fadeInUp">
            <h3>What We Do</h3>
            <h2>Full-Service Digital Marketing <span>Under One Roof</span></h2>
            <p>From organic search to paid ads, from website builds to content strategy — we handle every channel your brand needs to grow online.</p>
          </div>

          <div className="row g-4 mt-2">
            {servicesList.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={service.link} className="services-feature-card wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                  <div className="services-feature-img">
                    <img src={service.image} alt={service.title} />
                    <div className="services-feature-icon">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  <div className="services-feature-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="services-feature-link">
                      Explore service <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Full service directory ── */}
      <div className="services-directory-section">
        <div className="container">
          <div className="section-title text-center section-title-center wow fadeInUp">
            <h3>Complete Service List</h3>
            <h2>Every Service We <span>Offer</span></h2>
          </div>

          <div className="row g-4 mt-2">
            {allServices.map((group, gi) => (
              <div key={gi} className="col-lg-4 col-md-6">
                <div className="services-dir-group wow fadeInUp" data-wow-delay={`${gi * 0.1}s`}>
                  <h4 className="services-dir-category">{group.category}</h4>
                  <ul className="services-dir-list">
                    {group.items.map((item, ii) => (
                      <li key={ii}>
                        <Link href={item.href}>
                          <i className="fa-solid fa-chevron-right"></i>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="our-offers">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-offers-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Not sure where to start?</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">Get a Free <span>Strategy Session</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Tell us about your business and goals. We&apos;ll recommend the right channels, set realistic expectations, and show you what growth looks like for your industry.</p>
                </div>
                <div className="offer-btn wow fadeInUp" data-wow-delay="0.6s">
                  <Link href="/contact-us" className="btn-default">Book Free Consultation</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="offer-image-box wow fadeInUp" data-wow-delay="0.2s">
                <figure>
                  <img src="/images/sections/offer-image.png" alt="Digital Marketing Services" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
