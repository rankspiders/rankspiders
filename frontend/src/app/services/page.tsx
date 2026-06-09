'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';

const servicesList = [
  {
    title: "SEO Optimisation",
    description: "Position your brand as a credible, high-trust authority across search ecosystems. Technical, on-page, and off-page SEO that compounds over time.",
    link: "/seo-agency-india",
    image: "/images/sections/service-circle-img-1.png",
    icon: "fa-solid fa-magnifying-glass-chart",
  },
  {
    title: "Web Design & Development",
    description: "Build fast, scalable, and conversion-focused websites tailored to your brand. WordPress, Shopify, and custom builds.",
    link: "/web-design-and-development-agency",
    image: "/images/sections/service-circle-img-2.png",
    icon: "fa-solid fa-code",
  },
  {
    title: "Social Media Marketing",
    description: "Amplify your brand voice, grow an engaged audience, and turn social followers into paying customers across every platform.",
    link: "/social-media-marketing",
    image: "/images/sections/service-circle-img-3.png",
    icon: "fa-brands fa-instagram",
  },
  {
    title: "Paid Advertising",
    description: "Drive targeted traffic and accelerate conversions with precision Google Ads, Meta Ads, and LinkedIn ad campaigns.",
    link: "/online-advertising-agency",
    image: "/images/sections/service-circle-img-4.png",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Content Marketing",
    description: "Build brand authority with strategic content — blog posts, landing pages, and articles engineered to rank and convert.",
    link: "/content-marketing-agency",
    image: "/images/sections/service-circle-img-5.png",
    icon: "fa-solid fa-pen-nib",
  },
  {
    title: "Consultancy",
    description: "Get expert guidance on your digital strategy. We audit, advise, and roadmap your growth — whether you need SEO, ads, or full-funnel consulting.",
    link: "/consultancy-agency",
    image: "/images/sections/service-circle-img-6.png",
    icon: "fa-solid fa-handshake",
  },
];

const allServices = [
  { category: "SEO", items: [
    { label: "SEO Optimisation", href: "/seo-agency-india" },
    { label: "Technical SEO", href: "/technical-seo-agency" },
    { label: "Local SEO", href: "/local-seo-agency" },
    { label: "E-Commerce SEO", href: "/ecommerce-seo-agency" },
    { label: "Shopify SEO", href: "/shopify-seo-agency" },
    { label: "WordPress SEO", href: "/wordpress-seo-agency" },
    { label: "Link Building SEO", href: "/link-building-seo-agency" },
    { label: "B2B SEO", href: "/b2b-seo-agency" },
    { label: "SaaS SEO", href: "/saas-seo-agency" },
    { label: "AI SEO", href: "/ai-seo-agency" },
  ]},
  { category: "Web Design & Dev", items: [
    { label: "Web Design & Development", href: "/web-design-and-development-agency" },
    { label: "WordPress Development", href: "/wordpress-development-agency" },
    { label: "Shopify Development", href: "/shopify-development-agency" },
    { label: "Custom Landing Pages", href: "/custom-landing-page-agency" },
    { label: "Website Maintenance", href: "/website-maintenance-agency" },
    { label: "SEO Website Migration", href: "/seo-website-migration-agency" },
  ]},
  { category: "Social Media", items: [
    { label: "Social Media Marketing", href: "/social-media-marketing" },
    { label: "Instagram Marketing", href: "/instagram-marketing-agency" },
    { label: "Facebook Marketing", href: "/facebook-marketing-agency" },
    { label: "LinkedIn Marketing", href: "/linkedin-agency" },
    { label: "YouTube Marketing", href: "/youtube-marketing-agency" },
    { label: "Pinterest Marketing", href: "/pinterest-marketing-agency" },
    { label: "Graphic Design", href: "/graphic-design-agency" },
  ]},
  { category: "Content & Email", items: [
    { label: "Content Marketing", href: "/content-marketing-agency" },
    { label: "Content Writing", href: "/content-writing-agency" },
    { label: "Email Marketing", href: "/email-marketing-agency" },
  ]},
  { category: "Paid Advertising", items: [
    { label: "Online Advertising", href: "/online-advertising-agency" },
    { label: "Google Ads", href: "/google-ads-agency" },
    { label: "Meta Ads", href: "/meta-ads-agency" },
    { label: "LinkedIn Ads", href: "/linkedin-ads-agency" },
    { label: "Pinterest Ads", href: "/pinterest-ads-agency" },
  ]},
  { category: "Consultancy", items: [
    { label: "Digital Consultancy", href: "/consultancy-agency" },
    { label: "SEO Consultancy", href: "/seo-consultancy-agency" },
    { label: "Business Growth Consultancy", href: "/business-growth-consultancy-agency" },
    { label: "Organic Growth Consultancy", href: "/organic-growth-consultancy-agency" },
    { label: "Social Media Consultancy", href: "/social-media-consultancy-agency" },
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
      <ScrollingTicker />

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
