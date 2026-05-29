'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function ContentWritingAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What types of content do you write?",
      answer: "We write SEO-optimised blog posts and articles, website copy, service and landing page content, case studies, whitepapers, email sequences, product descriptions, social media captions, and press releases—covering the full content spectrum for digital marketing."
    },
    {
      id: 2,
      question: "2. How do you ensure the content ranks in search engines?",
      answer: "Every piece of content we write is built on keyword research, search intent analysis, competitor content gap audits, and proper on-page SEO structure—headers, meta descriptions, internal linking, and schema where applicable."
    },
    {
      id: 3,
      question: "3. Can you write content for technical or niche industries?",
      answer: "Yes. We have writers with expertise across SaaS, healthcare, finance, legal, e-commerce, and B2B services. We research each topic thoroughly and have subject matter experts review technical content for accuracy."
    },
    {
      id: 4,
      question: "4. Do you match our brand voice and tone?",
      answer: "Absolutely. We begin every content engagement with a voice and tone audit. For ongoing work, we build a brand style guide and content brief templates that ensure every piece of content sounds authentically like your brand."
    },
    {
      id: 5,
      question: "5. How do you handle revisions?",
      answer: "All our content packages include revision rounds. We work collaboratively until the content meets your standards. Our goal is to get it right first time—which our detailed briefing process usually achieves."
    }
  ];

  return (
    <>
      <PageHeader
        title="Content"
        subtitle="Writing Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Content Writing', active: true }]}
      />
      <ScrollingTicker />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/approach-image.jpg" alt="Content Writing Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Content is the foundation of every digital marketing strategy. We write content that ranks, resonates, and converts—combining deep keyword research with authentic brand storytelling that engages your audience and drives them to act.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Content That <span>Ranks & Converts</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">SEO-led, brand-aligned writing that builds authority and drives measurable results.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>SEO Blog Posts & Long-Form Articles</li>
                      <li>Website & Landing Page Copy</li>
                      <li>Case Studies & Whitepapers</li>
                      <li>Email & Social Media Content</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>SEO Content Strategy</h3>
                        <p>Keyword-driven content plans built around search intent—designed to capture and convert organic traffic.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Brand Voice & Copywriting</h3>
                        <p>Persuasive copy that speaks in your brand's voice and moves readers through your conversion funnel.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/digital-advantage-img-1.jpg" alt="" />
                      </figure>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Great Content is the <span>Best Long-Term Investment</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Content you publish today can rank, engage, and convert for years. We write content built for longevity—not just the current algorithm.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">start writing</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-belief-image">
                <img src="/images/our-belief-image.png" alt="" />
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
