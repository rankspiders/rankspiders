'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Sidebar from '@/components/Sidebar';

export default function LinkedinAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why is LinkedIn the most powerful platform for B2B marketing?",
      answer: "LinkedIn houses over 1 billion professionals including decision-makers, executives, and buyers. It's the only social platform where professional context is the primary engagement filterâ€”making it uniquely powerful for B2B lead generation and brand authority building."
    },
    {
      id: 2,
      question: "2. What does your LinkedIn marketing service include?",
      answer: "Our LinkedIn marketing service covers company page optimisation, content strategy and creation, personal profile optimisation for founders and executives, LinkedIn Ads management, and LinkedIn outreach campaign management."
    },
    {
      id: 3,
      question: "3. How do you generate leads through LinkedIn?",
      answer: "We combine organic content that builds authority and trust with targeted LinkedIn Ads and strategic outreach sequences. Our approach warms prospects through value-first content before any direct outreachâ€”resulting in higher response rates and quality conversations."
    },
    {
      id: 4,
      question: "4. Can you manage LinkedIn for both company pages and personal profiles?",
      answer: "Yes. We manage LinkedIn at both the brand and individual levelâ€”company page content, employee advocacy programmes, and personal branding for founders and executives who want to build thought leadership."
    },
    {
      id: 5,
      question: "5. How do you measure LinkedIn marketing success?",
      answer: "We track follower growth, engagement rate, post reach, profile views, connection requests accepted, InMail response rates, and most importantlyâ€”leads and pipeline generated from LinkedIn activity."
    }
  ];

  return (
    <>
      <PageHeader
        title="LinkedIn"
        subtitle="Marketing Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'LinkedIn Marketing', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"><Sidebar /></div>
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/digital-advantage-img-2.jpg" alt="LinkedIn Marketing Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p>LinkedIn is the world's largest professional network and the most effective platform for B2B lead generation. We build LinkedIn strategies that establish your brand authority, attract your ideal clients, and generate qualified leads through content, ads, and strategic outreach.</p>
                  <div className="service-strategy-box">
                    <h2 data--delay="0.4s">LinkedIn Marketing That <span>Generates B2B Leads</span></h2>
                    <p data--delay="0.6s">Organic authority + paid precision + strategic outreach = qualified pipeline.</p>
                    <ul data--delay="0.8s">
                      <li>Company Page Optimisation & Management</li>
                      <li>Thought Leadership Content Strategy</li>
                      <li>LinkedIn Ads Management</li>
                      <li>Executive Profile Building</li>
                    </ul>
                    <div className="service-strategy-body " data--delay="1s">
                      <div className="strategy-body-item">
                        <h3>Organic LinkedIn Strategy</h3>
                        <p>Content that builds authority, attracts followers, and positions you as the go-to in your industry.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>LinkedIn Lead Generation</h3>
                        <p>Targeted ads and outreach sequences that turn profile views into qualified sales conversations.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/sections/work-image-1.jpg" alt="Digital marketing team working on client SEO and social media campaigns" />
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
                  <h2 data--delay="0.2s" data-cursor="-opaque">LinkedIn is Where <span>B2B Deals Begin</span></h2>
                  <p data--delay="0.4s">The brands winning on LinkedIn are the ones that lead with value. We build that authority for youâ€”consistently and strategically.</p>
                </div>
                <div className="our-belief-btn " data--delay="0.8s">
                  <Link href="/contact-us" className="btn-default">grow on LinkedIn</Link>
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
