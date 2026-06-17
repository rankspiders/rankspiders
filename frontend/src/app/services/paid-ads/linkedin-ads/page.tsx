'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function LinkedinAdsAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why use LinkedIn Ads for B2B marketing?",
      answer: "LinkedIn Ads offer unparalleled professional targetingâ€”by job title, seniority, company size, industry, and skills. For B2B brands targeting decision-makers, LinkedIn Ads consistently deliver higher-quality leads than any other paid social platform, despite higher CPCs."
    },
    {
      id: 2,
      question: "2. What LinkedIn Ad formats do you use?",
      answer: "We use Sponsored Content (single image, carousel, video), Message Ads (InMail), Conversation Ads, Text Ads, Lead Gen Forms, and Document Adsâ€”selecting the right format for each campaign objective and testing multiple formats to identify the highest performers."
    },
    {
      id: 3,
      question: "3. What is a realistic budget for LinkedIn Ads?",
      answer: "LinkedIn Ads have higher minimum CPCs than other platforms due to the quality of their professional audience. We recommend a minimum test budget of â‚¹50,000â€“â‚¹100,000 per month to generate statistically significant performance data and meaningful lead volume."
    },
    {
      id: 4,
      question: "4. How do LinkedIn Lead Gen Forms work?",
      answer: "LinkedIn Lead Gen Forms allow users to submit their contact information without leaving LinkedInâ€”pre-populated from their profile data. This dramatically reduces friction and typically delivers 3â€“5Ã— higher conversion rates than click-through campaigns to landing pages."
    },
    {
      id: 5,
      question: "5. How do you measure LinkedIn Ads performance?",
      answer: "We track impressions, clicks, CTR, CPC, lead volume, CPL (cost per lead), lead quality scores, and pipeline generated. We integrate LinkedIn Ads data with your CRM so you can track leads from first ad impression all the way through to closed revenue."
    }
  ];

  return (
    <>
      <PageHeader
        title="LinkedIn Ads"
        subtitle="Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'LinkedIn Ads', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/project-marketing-image.jpg" alt="LinkedIn Ads Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p>LinkedIn Ads give you access to the world's most valuable professional audience with targeting precision unavailable anywhere else. We manage LinkedIn advertising campaigns that reach the right decision-makers, generate high-quality B2B leads, and build pipeline for your sales team.</p>
                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">LinkedIn Ads That <span>Reach Decision-Makers</span></h2>
                    <p data--delay="0.6s">Professional targeting, compelling creative, and lead generation that fills your B2B pipeline.</p>
                    <ul data--delay="0.8s">
                      <li>Sponsored Content & Video Ads</li>
                      <li>LinkedIn Lead Gen Forms</li>
                      <li>Message & Conversation Ads</li>
                      <li>Audience Building & Retargeting</li>
                    </ul>
                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Audience & Targeting Strategy</h3>
                        <p>Precision targeting by job title, company, industry, and seniority to reach your ideal buyers.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Lead Generation & Nurture</h3>
                        <p>Lead Gen Forms and retargeting sequences that turn LinkedIn engagement into qualified pipeline.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/project-highlight-image.jpg" alt="Rank Spiders project highlights and client case study results" />
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
                  <h3>Our Belief</h3>
                  <h2 data--delay="0.2s" data-cursor="-opaque">B2B Advertising Needs <span>Professional Precision</span></h2>
                  <p data--delay="0.4s">LinkedIn's CPCs are higher because the quality of its audience is higher. Precision targeting and compelling creative make those higher costs easily justified.</p>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">start LinkedIn Ads</Link>
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

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 data-cursor="-opaque">Frequently asked <span>questions</span></h2>
          </div>
          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item ">
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
