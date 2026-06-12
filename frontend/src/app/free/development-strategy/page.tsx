'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function FreeDevelopmentStrategyAgency() {
  return (
    <>
      <PageHeader
        title="Free Development"
        subtitle="Strategy Session"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Free Development Strategy', active: true }]}
      />

      <div className="page-service-single">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src="/images/sections/digital-advantage-img-3.jpg" alt="Free Development Strategy Session" />
                  </figure>
                </div>
                <div className="service-entry">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">Get a Free Web Development Strategy Session</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Not sure which platform, technology, or development approach is right for your business? Book a free strategy session with our web development team and walk away with a clear, actionable roadmap.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.6s">In your free session we cover:</p>
                  <ul className="wow fadeInUp" data-wow-delay="0.8s">
                    <li>Platform recommendation (WordPress, Shopify, Next.js, custom)</li>
                    <li>Estimated timeline and budget range</li>
                    <li>Technical requirements and integrations</li>
                    <li>SEO and performance considerations</li>
                    <li>Migration strategy if you have an existing site</li>
                  </ul>
                  <p className="wow fadeInUp" data-wow-delay="1s">No sales pressure. No commitment required. Just expert guidance to help you make the right decision for your business.</p>
                  <div className="wow fadeInUp" data-wow-delay="1.2s" style={{ marginTop: '2rem' }}>
                    <Link href="/contact-us" className="btn-default">Book Your Free Session</Link>
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
                  <h3 className="wow fadeInUp">No Obligation</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Clarity Before <span>Commitment</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We believe every great project starts with a great plan. Our free strategy sessions give you the roadmap—whether you work with us or not.</p>
                </div>
                <div className="our-belief-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="/contact-us" className="btn-default">book now</Link>
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
    </>
  );
}
