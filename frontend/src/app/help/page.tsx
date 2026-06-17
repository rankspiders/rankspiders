'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Rank Spiders?",
      answer: "Getting started is easy. Fill out our contact form at /contact-us, call us on +91 99883-57092, or email info.rankspiders@gmail.com. We'll schedule a free discovery call to understand your business goals and recommend the right services."
    },
    {
      id: 2,
      question: "Which digital marketing services do you offer?",
      answer: "We offer a full range of digital marketing services including SEO (all types), social media marketing, content creation, web design and development, paid advertising (Google, Meta, LinkedIn), email marketing, graphic design, and digital marketing consultancy. Visit our /services page for the full list."
    },
    {
      id: 3,
      question: "How long before I see results from your services?",
      answer: "Results timelines vary by service. SEO typically shows meaningful improvements within 3â€“6 months. Paid advertising campaigns can generate leads within days. Social media growth builds over 2â€“3 months of consistent effort. We set realistic expectations at the start of every engagement."
    },
    {
      id: 4,
      question: "Do you work with businesses outside India?",
      answer: "Yes. While we're based in Mohali, Punjab, we work with clients across India and internationally. All our services can be delivered remotely, and we have experience serving clients in the UK, US, Canada, and Australia."
    },
    {
      id: 5,
      question: "What does your pricing look like?",
      answer: "Our pricing depends on the scope of services, competition level, and your business goals. We don't publish fixed prices because every business is differentâ€”we tailor packages to your specific needs and budget. Contact us for a free proposal."
    },
    {
      id: 6,
      question: "Can I use your free SEO tools?",
      answer: "Yes! We offer several free SEO tools at /tools including an SEO Audit tool, Page Speed analyser, Keyword Density checker, Robots.txt Tester, Sitemap Validator, and Meta Tags Extractor. All free, no sign-up required."
    },
    {
      id: 7,
      question: "How do I report a problem with the website?",
      answer: "If you encounter any issues with our website or tools, please email info.rankspiders@gmail.com or use our contact form. We aim to address reported issues within 24 hours."
    },
    {
      id: 8,
      question: "Where can I read your Privacy Policy and Terms?",
      answer: "Our Privacy Policy is at /privacy-policy and our Terms & Conditions are at /terms-and-conditions. If you have specific questions about our policies, don't hesitate to contact us directly."
    }
  ];

  return (
    <>
      <PageHeader
        title="Help"
        subtitle="Centre"
        breadcrumbs={[{ label: 'Help', active: true }]}
      />

      <div className="page-service-single" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title" style={{ marginBottom: '3rem' }}>
                <h2 data-cursor="-opaque">Frequently Asked <span>Questions</span></h2>
                <p data--delay="0.2s">Find answers to the most common questions about Rank Spiders services, tools, and policies.</p>
              </div>

              <div className="faq-accordion" id="accordion">
                {faqs.map((faq) => (
                  <div key={faq.id} className="accordion-item ">
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
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar" style={{ position: 'sticky', top: '100px' }}>
                <div style={{ marginBottom: '1.5rem', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <img
                    src="/images/sections/faqs-image.jpg"
                    alt="Rank Spiders support team ready to answer your questions"
                    width={400}
                    height={260}
                    style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                </div>
                <div className="sidebar-cta-box">
                  <h3>Still have questions?</h3>
                  <p>Our team is happy to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
                  <Link href="/contact-us" className="btn-default" style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
                    Contact Us
                  </Link>
                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)' }}>
                    <p><strong>Phone:</strong><br /><a href="tel:+919988357092">+91 99883-57092</a></p>
                    <p style={{ marginTop: '0.5rem' }}><strong>Email:</strong><br /><a href="mailto:info.rankspiders@gmail.com">info.rankspiders@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
