'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function OnlineAdvertisingNicheIndustries() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const industries = [
    { label: "Healthcare & Clinics",       icon: "fa-solid fa-stethoscope" },
    { label: "Real Estate",                icon: "fa-solid fa-building" },
    { label: "Law Firms",                  icon: "fa-solid fa-scale-balanced" },
    { label: "Dental Practices",           icon: "fa-solid fa-tooth" },
    { label: "Salons & Beauty",            icon: "fa-solid fa-scissors" },
    { label: "Roofing & Construction",     icon: "fa-solid fa-hard-hat" },
    { label: "Interior Designers",         icon: "fa-solid fa-couch" },
    { label: "Auto Repair & Dealers",      icon: "fa-solid fa-car" },
    { label: "E-Commerce Stores",          icon: "fa-solid fa-cart-shopping" },
    { label: "Restaurants & Food",         icon: "fa-solid fa-utensils" },
    { label: "NGO & Non-Profit",           icon: "fa-solid fa-heart" },
    { label: "Education & Coaching",       icon: "fa-solid fa-graduation-cap" },
    { label: "Electricians & Trades",      icon: "fa-solid fa-bolt" },
    { label: "Baby & Kids Products",       icon: "fa-solid fa-baby" },
    { label: "Travel & Tourism",           icon: "fa-solid fa-plane" },
    { label: "House Cleaning Services",    icon: "fa-solid fa-broom" },
  ];

  const faqs = [
    {
      id: 1,
      question: "1. Which advertising platforms do you manage for niche businesses?",
      answer: "We manage Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, and Pinterest Ads. The right mix depends on your industry — a roofing company performs best on Google Search, while a beauty salon sees strong returns from Instagram. We recommend the optimal combination based on your niche."
    },
    {
      id: 2,
      question: "2. How much budget do I need to start running ads for my business?",
      answer: "There's no fixed minimum, but most niche service businesses see meaningful results starting from ₹15,000–30,000/month in ad spend. We help you allocate budget across campaigns efficiently so every rupee is working toward leads or sales."
    },
    {
      id: 3,
      question: "3. Can you target customers in a specific city or local area?",
      answer: "Yes. Geographic targeting is one of the strongest features of paid advertising. Whether you want to reach customers in a single city, a radius around your business, or specific pin codes, we set up precise local targeting that stops wasteful spend on irrelevant audiences."
    },
    {
      id: 4,
      question: "4. How do you track whether ads are actually bringing in enquiries?",
      answer: "We set up conversion tracking for calls, form submissions, WhatsApp clicks, and purchases. You receive monthly reports showing cost per lead, return on ad spend (ROAS), and which campaigns are driving the most results for your business."
    },
    {
      id: 5,
      question: "5. Do you write the ad copy and create the creatives too?",
      answer: "Yes — we handle everything including ad copywriting, headline testing, image and video creative production, and landing page recommendations. You approve the content before anything goes live."
    },
  ];

  return (
    <>
      <PageHeader
        title="Online Advertising"
        subtitle="Niche Industries"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Online Advertising', href: '/services/paid-ads' },
          { label: 'Niche Industries', active: true },
        ]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            {/* ── Sidebar ── */}
            <div className="col-lg-4">
              <Sidebar />
            </div>

            {/* ── Main content ── */}
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime">
                    <img src="/images/sections/project-marketing-image.jpg" alt="Online Advertising for Niche Industries" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Paid advertising in a niche market is not about spending more — it's about targeting smarter. A dental clinic, a roofing company, and a law firm all advertise on Google, but the keywords, ad copy, landing pages, and bidding strategies are completely different. We build campaigns around how your specific customers search, not generic best practices.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Ads Built Around Your <span>Industry & Audience</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Cookie-cutter ad strategies waste budget. Our niche advertising approach starts with understanding your market — then building campaigns that speak directly to your customers' intent at every stage of the buying journey.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Niche Keyword Research & Negative Keyword Strategy</li>
                      <li>Industry-Specific Ad Copy & Creative</li>
                      <li>Local & Geographic Targeting</li>
                      <li>Conversion Tracking with Real ROI Reporting</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Industry Audit & Campaign Setup</h3>
                        <p>We research your competitors' ad strategies, identify high-intent keywords your customers are using, and structure campaigns for maximum relevance and Quality Score.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Ongoing Optimisation & Scaling</h3>
                        <p>Every week we analyse performance, test new ad variations, and reallocate budget to the campaigns generating the lowest cost per lead. We scale what works, cut what doesn't.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime">
                        <img src="/images/sections/project-highlight-image.jpg" alt="Advertising Strategy" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">Why Niche Ad Campaigns Outperform Generic Ones</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Broad targeting reaches everyone and converts no one. When your ad copy speaks the exact language your customer uses — references their specific problem, their location, their urgency — click-through rates and conversion rates rise dramatically. That's what niche advertising does.</p>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">150</span>+</h3>
                          <p>Paid ad campaigns run across 16+ niche industries</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Lower Cost Per Lead</h3>
                          <p>Industry-specific campaigns reduce wasted spend. You pay for clicks from people who are actually looking for your exact service — not broad traffic that never converts.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Higher Quality Enquiries</h3>
                          <p>When your messaging matches what a buyer is searching for in their specific context, the leads you get are more qualified, more ready to buy, and easier to close.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Industries grid ── */}
      <div className="niche-industries-section">
        <div className="container">
          <div className="section-title text-center section-title-center wow fadeInUp">
            <h3>Who We Advertise For</h3>
            <h2>Industries We Serve with <span>Online Advertising</span></h2>
            <p>We run paid campaigns across 16+ industries. Each sector gets a custom strategy — no copy-paste ad templates.</p>
          </div>

          <div className="row g-3 mt-2">
            {industries.map((ind, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-6">
                <div className="niche-industry-card wow fadeInUp" data-wow-delay={`${(i % 4) * 0.1}s`}>
                  <div className="niche-industry-icon">
                    <i className={ind.icon}></i>
                  </div>
                  <span>{ind.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 wow fadeInUp">
            <Link href="/contact-us" className="btn-default">Get a Free Advertising Audit</Link>
          </div>
        </div>
      </div>

      {/* ── Our belief ── */}
      <div className="our-belief">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-belief-content">
                <div className="section-title section-title-center">
                  <h3 className="wow fadeInUp">Our Belief</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Every Rupee You Spend <span>Should Come Back With Interest</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We don't run ads to spend your budget — we run ads to generate returns. Every campaign we manage is measured against cost per lead and revenue generated. If the numbers don't make sense, we stop and rebuild.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">get a free audit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/sections/our-belief-image.png" alt="Rank Spiders core values - data-driven digital marketing agency India" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQs ── */}
      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>questions</span></h2>
          </div>
          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item wow fadeInUp">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${openFaq === faq.id ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                  >
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
