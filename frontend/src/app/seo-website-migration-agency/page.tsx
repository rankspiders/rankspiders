'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function SeoWebsiteMigrationAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. What is SEO website migration and why is it risky?",
      answer: "Website migration covers any significant change to your site—domain change, platform switch, URL restructure, or HTTPS move. Without proper SEO management, migrations can cause catastrophic ranking drops that take months to recover from."
    },
    {
      id: 2,
      question: "2. How do you protect rankings during a migration?",
      answer: "We conduct a full pre-migration SEO audit, map all existing URLs to their new equivalents, implement 301 redirects comprehensively, update internal links, and monitor search performance closely for 90 days post-launch."
    },
    {
      id: 3,
      question: "3. Do you handle platform migrations (e.g. WordPress to Shopify)?",
      answer: "Yes. We specialise in cross-platform migrations—including WooCommerce to Shopify, custom CMS to WordPress, and legacy platforms to modern stacks—with full SEO preservation at every step."
    },
    {
      id: 4,
      question: "4. How long does an SEO-safe website migration take?",
      answer: "Depending on the size of the site, a properly managed migration takes 4–12 weeks including pre-migration audit, redirect mapping, staging testing, and post-launch monitoring. Rushing a migration is the primary cause of SEO disasters."
    },
    {
      id: 5,
      question: "5. What monitoring do you provide after the migration?",
      answer: "We monitor organic traffic, crawl errors, index coverage, and ranking positions daily for the first 30 days and weekly for 60 days thereafter. Any anomalies are investigated and resolved immediately."
    }
  ];

  return (
    <>
      <PageHeader
        title="SEO Website"
        subtitle="Migration Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'SEO Website Migration', active: true }]}
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
                    <img src="/images/digital-advantage-img-3.jpg" alt="SEO Website Migration Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">Website migrations are one of the highest-risk events in a website's lifecycle. Without expert SEO management, a migration can wipe out years of organic ranking equity overnight. We make migrations safe—meticulously planned, technically precise, and continuously monitored.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Migrate Without <span>Losing Rankings</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Every URL mapped, every redirect verified, every ranking protected.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Full Pre-Migration SEO Audit</li>
                      <li>Comprehensive Redirect Mapping</li>
                      <li>Staging Environment Testing</li>
                      <li>90-Day Post-Launch Monitoring</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Pre-Migration Planning</h3>
                        <p>URL audits, redirect maps, and stakeholder alignment before a single line of code changes.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Post-Migration Recovery</h3>
                        <p>Rapid anomaly detection and resolution to catch any ranking drops within hours of launch.</p>
                      </div>
                    </div>
                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/work-image-2.jpg" alt="" />
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">A Migration Should Move <span>You Forward, Not Back</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Done right, a migration is an opportunity to improve your technical SEO foundation and emerge stronger than before.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">plan your migration</Link>
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
