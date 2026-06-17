import React from 'react';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rank Spiders',
  description: 'Read the Rank Spiders privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        title="Privacy"
        subtitle="Policy"
        breadcrumbs={[{ label: 'Privacy Policy', active: true }]}
      />

      <div className="page-service-single" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-entry">
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated: May 2025</p>

                <h2>1. Information We Collect</h2>
                <p data--delay="0.2s">We collect information you provide directly to us when you fill out contact forms, request quotes, or subscribe to our newsletter. This may include your name, email address, phone number, company name, and the nature of your enquiry.</p>
                <p data--delay="0.3s">We also automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs. This is collected through standard web analytics tools.</p>

                <h2 data--delay="0.4s" style={{ marginTop: '2rem' }}>2. How We Use Your Information</h2>
                <p data--delay="0.5s">We use the information we collect to:</p>
                <ul data--delay="0.6s">
                  <li>Respond to your enquiries and provide the services you request</li>
                  <li>Send you our newsletter if you have subscribed (you may unsubscribe at any time)</li>
                  <li>Improve our website and services based on usage data</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p data--delay="0.7s">We do not sell, trade, or rent your personal information to third parties.</p>

                <h2 data--delay="0.8s" style={{ marginTop: '2rem' }}>3. Cookies</h2>
                <p data--delay="0.9s">Our website uses cookies to enhance your browsing experience. Cookies are small data files placed on your device that help us understand how you interact with our site. You can control cookies through your browser settings. Disabling cookies may affect some functionality of our website.</p>

                <h2 style={{ marginTop: '2rem' }}>4. Third-Party Services</h2>
                <p data--delay="0.2s">We may use third-party services such as Google Analytics to understand website usage patterns. These services may collect information about your use of our website. Their use of your data is governed by their respective privacy policies.</p>

                <h2 data--delay="0.4s" style={{ marginTop: '2rem' }}>5. Data Security</h2>
                <p data--delay="0.5s">We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

                <h2 data--delay="0.6s" style={{ marginTop: '2rem' }}>6. Data Retention</h2>
                <p data--delay="0.7s">We retain personal information for as long as necessary to provide our services and comply with our legal obligations. Contact form submissions are retained for a maximum of 2 years. You may request deletion of your data at any time by contacting us.</p>

                <h2 style={{ marginTop: '2rem' }}>7. Your Rights</h2>
                <p data--delay="0.2s">You have the right to access, correct, or delete your personal information that we hold. You may also object to processing of your data or request that we restrict processing in certain circumstances. To exercise these rights, contact us at the details below.</p>

                <h2 data--delay="0.4s" style={{ marginTop: '2rem' }}>8. Contact Us</h2>
                <p data--delay="0.5s">If you have any questions about this privacy policy or our handling of your personal data, please contact us:</p>
                <ul data--delay="0.6s">
                  <li>Email: <a href="mailto:info.rankspiders@gmail.com">info.rankspiders@gmail.com</a></li>
                  <li>Phone: <a href="tel:+919988357092">+91 99883-57092</a></li>
                  <li>Address: Office No. 22, Ground Floor, D-152, Phase 8, Industrial Area, Sector 74, SAS Nagar, Punjab 160071, India</li>
                </ul>

                <h2 style={{ marginTop: '2rem' }}>9. Changes to This Policy</h2>
                <p data--delay="0.2s">We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated revision date. We encourage you to review this policy periodically.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
