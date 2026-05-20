'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function Services() {
  const servicesList = [
    {
      title: "SEO Optimization",
      description: "Position your brand as a credible, high-trust authority across search ecosystems.",
      link: "/seo-agency-india",
      icon: "/images/icon-benefit-item-1.svg"
    },
    {
      title: "Web Design & Development",
      description: "Build fast, scalable, and conversion-focused websites tailored to your brand.",
      link: "/web-design-and-development-agency",
      icon: "/images/icon-benefit-item-2.svg"
    },
    {
      title: "Social Media Marketing",
      description: "Amplify your voice and connect with your audience on a deeper level.",
      link: "/social-media-marketing",
      icon: "/images/icon-benefit-item-3.svg"
    },
    {
      title: "AI SEO",
      description: "Future-proof your search presence with AI-driven optimization strategies.",
      link: "/ai-seo-agency",
      icon: "/images/icon-benefit-item-4.svg"
    },
    {
      title: "PPC & Meta Ads",
      description: "Drive targeted traffic and accelerate conversions with precision advertising.",
      link: "/meta-ads-agency",
      icon: "/images/icon-digital-advantage-1.svg"
    },
    {
      title: "Content Marketing",
      description: "Engage your audience with authoritative content that builds trust and authority.",
      link: "/content-marketing-agency",
      icon: "/images/icon-digital-advantage-2.svg"
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our" 
        subtitle="Services" 
        breadcrumbs={[{ label: 'Services', active: true }]} 
      />

      <div className="page-services py-5">
        <div className="container">
          <div className="row">
            {servicesList.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="service-item wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                  <div className="icon-box mb-3">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={service.link} className="btn-default">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-box py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2 className="wow fadeInUp">Ready to Grow Your <span>Digital Presence?</span></h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Connect with our experts and start your journey to digital success today.</p>
                <div className="mt-4 wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/contact-us" className="btn-default">Get a Free Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
