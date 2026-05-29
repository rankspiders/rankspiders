'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function WebsiteMaintenanceAgency() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const toggleFaq = (id: number) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    {
      id: 1,
      question: "1. Why does my website need ongoing maintenance?",
      answer: "Websites degrade over time—plugins become outdated, security vulnerabilities emerge, performance slows, and content grows stale. Regular maintenance keeps your site secure, fast, and performing at its best for both users and search engines."
    },
    {
      id: 2,
      question: "2. What does your website maintenance service include?",
      answer: "Our maintenance packages include CMS and plugin updates, security scanning and patching, uptime monitoring, performance checks, database optimisation, backup management, and a monthly report on your site's health status."
    },
    {
      id: 3,
      question: "3. How often will you update my website?",
      answer: "We perform security and plugin updates weekly, full performance audits monthly, and backup verifications daily. Critical security patches are applied within 24 hours of release."
    },
    {
      id: 4,
      question: "4. Do you handle content updates as part of maintenance?",
      answer: "Yes. Our maintenance plans include a content update allowance each month—whether that's adding new pages, updating service information, refreshing images, or publishing blog posts on your behalf."
    },
    {
      id: 5,
      question: "5. What happens if my site goes down?",
      answer: "We monitor all maintained sites 24/7. If your site goes down, we receive an immediate alert and begin diagnosis and recovery. Most issues are resolved within one hour of detection."
    }
  ];

  return (
    <>
      <PageHeader
        title="Website"
        subtitle="Maintenance Agency"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Website Maintenance', active: true }]}
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
                    <img src="/images/digital-advantage-img-3.jpg" alt="Website Maintenance Agency" />
                  </figure>
                </div>
                <div className="service-entry">
                  <p className="wow fadeInUp">A neglected website is a security risk, an SEO liability, and a poor brand ambassador. Our website maintenance service ensures your site stays secure, fast, and updated—so you can focus on running your business, not worrying about your website.</p>
                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Maintenance That <span>Protects Your Investment</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Proactive care that keeps your site secure, fast, and always online.</p>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Security Monitoring & Patching</li>
                      <li>CMS & Plugin Updates</li>
                      <li>Uptime Monitoring (24/7)</li>
                      <li>Performance Optimisation</li>
                    </ul>
                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Security & Updates</h3>
                        <p>Weekly security scans, patch management, and malware removal to keep your site clean.</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Performance & Backups</h3>
                        <p>Daily backups, monthly speed audits, and database optimisation to keep performance sharp.</p>
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
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Prevention is Cheaper <span>Than Recovery</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">One security incident or performance crash costs far more than a year of proactive maintenance. We keep that from happening.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">get protected</Link>
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
