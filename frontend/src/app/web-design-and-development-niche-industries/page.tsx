'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function WebDesignNicheIndustries() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const industries = [
    { label: "Healthcare & Clinics",        icon: "fa-solid fa-stethoscope" },
    { label: "Real Estate",                  icon: "fa-solid fa-building" },
    { label: "Law Firms",                    icon: "fa-solid fa-scale-balanced" },
    { label: "Dental Practices",             icon: "fa-solid fa-tooth" },
    { label: "Salons & Beauty",              icon: "fa-solid fa-scissors" },
    { label: "Roofing & Construction",       icon: "fa-solid fa-hard-hat" },
    { label: "Interior Designers",           icon: "fa-solid fa-couch" },
    { label: "Auto Repair & Dealers",        icon: "fa-solid fa-car" },
    { label: "E-Commerce Stores",            icon: "fa-solid fa-cart-shopping" },
    { label: "Restaurants & Food",           icon: "fa-solid fa-utensils" },
    { label: "NGO & Non-Profit",             icon: "fa-solid fa-heart" },
    { label: "Education & Coaching",         icon: "fa-solid fa-graduation-cap" },
    { label: "Electricians & Trades",        icon: "fa-solid fa-bolt" },
    { label: "Baby & Kids Products",         icon: "fa-solid fa-baby" },
    { label: "Travel & Tourism",             icon: "fa-solid fa-plane" },
    { label: "House Cleaning Services",      icon: "fa-solid fa-broom" },
  ];

  const faqs = [
    {
      id: 1,
      question: "1. Do you build industry-specific websites or use generic templates?",
      answer: "Every website we build is customised for your industry. We research your competitors, understand your audience's behaviour, and design layouts that match how your specific customers browse and convert — no off-the-shelf templates."
    },
    {
      id: 2,
      question: "2. Can you build websites for highly regulated industries like healthcare or law?",
      answer: "Yes. We have experience building HIPAA-aware and compliance-conscious websites for healthcare, dental, and legal clients. We ensure privacy policies, contact forms, and data handling meet the standards your industry requires."
    },
    {
      id: 3,
      question: "3. Will my website be optimised for SEO from the start?",
      answer: "Absolutely. SEO is built into every website we develop — from site structure, page speed, and mobile responsiveness to schema markup and on-page optimisation. You won't need a separate SEO overhaul after launch."
    },
    {
      id: 4,
      question: "4. How long does it take to build a niche industry website?",
      answer: "Most industry websites are delivered in 4–8 weeks depending on scope, number of pages, and integrations required. We provide a detailed timeline before work begins and keep you updated at every stage."
    },
    {
      id: 5,
      question: "5. Do you offer ongoing support and maintenance after launch?",
      answer: "Yes. We offer monthly website maintenance packages that cover updates, security, performance monitoring, and content changes. You focus on your business — we keep your website running perfectly."
    },
  ];

  return (
    <>
      <PageHeader
        title="Web Design & Development"
        subtitle="Niche Industries"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Web Design & Development', href: '/web-design-and-development-agency' },
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
                    <img src="/images/sections/digital-advantage-img-3.jpg" alt="Web Design for Niche Industries" />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">Every industry has its own audience expectations, trust signals, and conversion triggers. A healthcare website needs to feel clinical and reassuring; a roofing company website needs to project reliability and speed. We build websites that speak your customers' language — not generic digital placeholders.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Built for Your Industry, <span>Designed to Convert</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Our niche-specific web development process starts with understanding your industry inside and out — then building a site around how your customers actually behave online.</p>

                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Industry-Specific UX & Conversion Design</li>
                      <li>Mobile-First, Fast-Loading Architecture</li>
                      <li>SEO-Ready Structure from Day One</li>
                      <li>Compliance-Aware for Regulated Industries</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Discovery & Industry Research</h3>
                        <p>We analyse your niche, study competitor websites, and map the user journey your customers follow — before writing a single line of code.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Design, Build & Optimise</h3>
                        <p>From wireframes to launch, every element is tested for speed, usability, and conversion. We don't just make sites look good — we make them work.</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime">
                        <img src="/images/sections/work-image-2.jpg" alt="Web Design Strategy" />
                      </figure>
                    </div>
                  </div>

                  <div className="service-growth-box">
                    <h2 className="wow fadeInUp">What Makes a Niche Website Different?</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Niche websites outperform generic ones because they are built around specific audience intent. A dental patient searching for "teeth whitening Mohali" has very different expectations than someone browsing a SaaS homepage. We match the design, tone, and structure to what your specific audience needs to see in order to trust you and enquire.</p>

                    <div className="service-growth-body">
                      <div className="growth-counter-box">
                        <div className="icon-box">
                          <img src="/images/icons/icon-growth-counter.svg" alt="" />
                        </div>
                        <div className="growth-counter-content">
                          <h3><span className="counter">200</span>+</h3>
                          <p>Niche websites built across industries — each one uniquely designed for its audience</p>
                        </div>
                      </div>

                      <div className="service-growth-item-list wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-growth-item">
                          <h3>Audience-Matched Design</h3>
                          <p>Colours, fonts, imagery, and layout are chosen based on what builds trust in your specific market — not generic design trends.</p>
                        </div>
                        <div className="service-growth-item">
                          <h3>Conversion Architecture</h3>
                          <p>Every page is structured to guide visitors toward the action you want — booking, calling, or enquiring — without friction.</p>
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
            <h3>Who We Build For</h3>
            <h2>Industries We Serve with <span>Web Design & Development</span></h2>
            <p>We have built high-converting websites across 16+ industries. If your sector is not listed, we still build for it — every industry has unique digital needs we are ready to meet.</p>
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
            <Link href="/contact-us" className="btn-default">Get a Free Website Consultation</Link>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Your Website Should Work <span>As Hard As You Do</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">A website that doesn't generate enquiries is just a digital brochure. We build sites that actively convert visitors into leads — through smart design, fast performance, and industry-specific trust signals.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">start your project</Link>
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
