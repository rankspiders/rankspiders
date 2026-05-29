import React from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Rank Spiders',
  description: 'Read the Rank Spiders terms and conditions governing the use of our website and digital marketing services.',
};

export default function TermsAndConditions() {
  return (
    <>
      <PageHeader
        title="Terms &"
        subtitle="Conditions"
        breadcrumbs={[{ label: "Terms & Conditions", active: true }]}
      />
      <ScrollingTicker />

      <div className="page-service-single" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-entry">
                <p className="wow fadeInUp" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated: May 2025</p>

                <h2 className="wow fadeInUp">1. Acceptance of Terms</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">By accessing and using the Rank Spiders website (rankspiders.com) or engaging our services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>

                <h2 className="wow fadeInUp" data-wow-delay="0.4s" style={{ marginTop: '2rem' }}>2. Services</h2>
                <p className="wow fadeInUp" data-wow-delay="0.5s">Rank Spiders provides digital marketing services including SEO, social media marketing, content creation, web design and development, paid advertising management, and digital marketing consultancy. The specific scope of services for each client is defined in a separate service agreement or proposal.</p>

                <h2 className="wow fadeInUp" style={{ marginTop: '2rem' }}>3. Client Responsibilities</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Clients agree to:</p>
                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                  <li>Provide accurate, complete, and current information as required to deliver services</li>
                  <li>Grant necessary access to platforms, accounts, and assets needed to perform agreed services</li>
                  <li>Review and approve deliverables within agreed timelines</li>
                  <li>Ensure all content provided does not infringe third-party intellectual property rights</li>
                </ul>

                <h2 className="wow fadeInUp" data-wow-delay="0.4s" style={{ marginTop: '2rem' }}>4. Intellectual Property</h2>
                <p className="wow fadeInUp" data-wow-delay="0.5s">Upon full payment of fees, clients receive ownership of all bespoke deliverables created specifically for them (website designs, written content, graphics). Rank Spiders retains ownership of all tools, methodologies, frameworks, and pre-existing intellectual property used in delivering services.</p>
                <p className="wow fadeInUp" data-wow-delay="0.6s">All content on the Rank Spiders website—including text, images, logos, and design—is the intellectual property of Rank Spiders and may not be reproduced without written permission.</p>

                <h2 className="wow fadeInUp" style={{ marginTop: '2rem' }}>5. Confidentiality</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Both parties agree to maintain the confidentiality of information shared in the course of the engagement that is designated as confidential or that would reasonably be understood to be confidential. This obligation survives termination of any service agreement.</p>

                <h2 className="wow fadeInUp" data-wow-delay="0.4s" style={{ marginTop: '2rem' }}>6. Payment Terms</h2>
                <p className="wow fadeInUp" data-wow-delay="0.5s">Payment terms are defined in individual service agreements. Where not otherwise specified, invoices are due within 15 days of issue. Rank Spiders reserves the right to suspend services for accounts with overdue balances exceeding 30 days.</p>

                <h2 className="wow fadeInUp" style={{ marginTop: '2rem' }}>7. Limitation of Liability</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Rank Spiders shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services or website. Our total liability for any claim arising from a service engagement shall not exceed the fees paid for that specific service in the 3 months preceding the claim.</p>
                <p className="wow fadeInUp" data-wow-delay="0.3s">Digital marketing results (search rankings, traffic, leads) are influenced by many factors outside our control including search engine algorithm changes, competitor activity, and market conditions. We do not guarantee specific results.</p>

                <h2 className="wow fadeInUp" data-wow-delay="0.4s" style={{ marginTop: '2rem' }}>8. Termination</h2>
                <p className="wow fadeInUp" data-wow-delay="0.5s">Either party may terminate a service engagement with 30 days written notice. Upon termination, clients remain liable for all fees incurred up to the termination date. Rank Spiders will provide all deliverables completed and owned by the client upon receipt of outstanding payments.</p>

                <h2 className="wow fadeInUp" style={{ marginTop: '2rem' }}>9. Governing Law</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">These terms are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Punjab, India.</p>

                <h2 className="wow fadeInUp" data-wow-delay="0.4s" style={{ marginTop: '2rem' }}>10. Contact</h2>
                <p className="wow fadeInUp" data-wow-delay="0.5s">For questions about these terms, contact us at <a href="mailto:info@rankspiders.com">info@rankspiders.com</a> or call <a href="tel:+919988357092">+91 99883-57092</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
