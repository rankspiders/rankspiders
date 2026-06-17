'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'SEO Optimization' },
    { id: 'tab2', label: 'Web Design & Development' },
    { id: 'tab3', label: 'Social Media' },
    { id: 'tab4', label: 'Content Marketing' },
    { id: 'tab5', label: 'Email Marketing' },
    { id: 'tab6', label: 'Consultancy' },
    { id: 'tab7', label: 'Advertising' },
  ];

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-logo">
                <Image src="/images/footer.png" alt="Rank Spiders" width={174} height={48} style={{ height: 'auto' }} />
              </div>

              <div className="footer-contact-details">
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icons/icon-headset-gradiant.svg" alt="Customer support contact" />
                  </div>
                  <div className="footer-contact-item-content">
                    <p><a href="tel:+919988357092">+91 99883-57092</a></p>
                    <p><a href="mailto:info.rankspiders@gmail.com">info.rankspiders@gmail.com</a></p>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icons/icon-location-gradiant.svg" alt="Rank Spiders office location" />
                  </div>
                  <div className="footer-contact-item-content">
                    <p>Office No. 22, Ground Floor, D-152, Phase 8, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer-newsletter-box">
              <h3>Subscribe Newsletter&apos;s</h3>
              <div className="footer-newsletter-form">
                <form id="newslettersForm" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const input = form.elements.namedItem('mail') as HTMLInputElement | null;
                  if (!input) return;
                  const email = input.value;
                  const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
                  const statusEl = form.nextElementSibling as HTMLElement | null;
                  if (btn) btn.disabled = true;
                  try {
                    await fetch('/api/newsletter', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email }),
                    });
                    form.reset();
                    if (statusEl) { statusEl.textContent = '✓ Subscribed! Thank you.'; statusEl.style.color = '#06B6D4'; }
                  } catch {
                    if (statusEl) { statusEl.textContent = 'Subscription failed. Please try again.'; statusEl.style.color = '#ef4444'; }
                  } finally {
                    if (btn) btn.disabled = false;
                  }
                }}>
                  <div className="form-group">
                    <input type="email" name="mail" className="form-control" id="mail" placeholder="E-mail Address" required />
                    <button type="submit" className="btn-default">Subscribe</button>
                  </div>
                </form>
              </div>
              <p>* Stay updated with the latest SEO tips trends, &amp; insights-straight to your inbox.</p>
              <div className="contact-social-list pt-5">
                <h3 className="m-0">follow us:</h3>
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/rankspidersdigital" aria-label="Follow Rank Spiders on Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@rankspiders/" aria-label="Rank Spiders on YouTube"><i className="fa-brands fa-youtube yt-icon"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rankspidersdigitalagency/" aria-label="Rank Spiders on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/rankspiders" aria-label="Rank Spiders on Pinterest"><i className="fa-brands fa-pinterest-p"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rankspiders.digital/" aria-label="Rank Spiders on Instagram"><i className="fa-brands fa-instagram insta-icon"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="footer-links-box">
              <div className="footer-links">
                <h3>quick links</h3>
                <ul>
                  <li><Link href="/">home</Link></li>
                  <li><Link href="/about">About us</Link></li>
                  <li><Link href="/testimonials">Testimonials</Link></li>
                  <li><Link href="/blog">blog</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
              </div>

              <div className="footer-links">
                <h3>Resources</h3>
                <ul>
                  <li><Link href="/projects">Portfolio</Link></li>
                  <li><Link href="/image-gallery">Image Gallery</Link></li>
                  <li><Link href="/video-gallery">Video Gallery</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/team">Our Team</Link></li>
                </ul>
              </div>

              <div className="footer-links">
                <h3>Support</h3>
                <ul>
                  <li><Link href="/help">Help</Link></li>
                  <li><Link href="/terms-and-conditions">Term&apos;s &amp; Conditions</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/contact-us">Contact us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-services-section">
        <div className="container">
            <div className="service-tabs d-flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`footer-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content-box">
              {activeTab === 'tab1' && (
                <div className="tab-pane active">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/free/seo-audit">Free SEO Audit</Link></li>
                          <li><Link href="/services/seo">SEO</Link></li>
                          <li><Link href="/services/seo/ai">AI SEO</Link></li>
                          <li><Link href="/services/seo/technical">Technical SEO</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/seo/link-building">Link Building SEO</Link></li>
                          <li><Link href="/services/seo/saas">SaaS SEO</Link></li>
                          <li><Link href="/services/seo/b2b">B2B SEO</Link></li>
                          <li><Link href="/services/seo/local">Local SEO</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/seo/ecommerce">Ecommerce SEO</Link></li>
                          <li><Link href="/services/seo/woocommerce">WooCommerce SEO</Link></li>
                          <li><Link href="/services/seo/shopify">Shopify SEO</Link></li>
                          <li><Link href="/services/seo/wordpress">WordPress SEO</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/seo/small-business">Small Business SEO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tab2' && (
                <div className="tab-pane active">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/free/development-strategy">Free Development Strategy</Link></li>
                          <li><Link href="/services/web-development/landing-page">Custom Landing Page</Link></li>
                          <li><Link href="/services/web-development/wordpress">WordPress Development</Link></li>
                          <li><Link href="/services/web-development/shopify">Shopify Development</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/web-development/maintenance">Website Maintenance</Link></li>
                          <li><Link href="/services/seo/website-migration">SEO Website Migration</Link></li>
                          <li><Link href="/services/web-development">Web Design &amp; Development</Link></li>
                          <li><Link href="/services/web-development/niche-industries">Web Design Niche Industries</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tab3' && (
                <div className="tab-pane active">
                   <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/social-media">Social Media</Link></li>
                          <li><Link href="/contact-us">Free Social Media Audit</Link></li>
                          <li><Link href="/services/content/graphic-design">Graphic Design</Link></li>
                          <li><Link href="/services/content/video-editing">Video Editing</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/social-media/instagram">Instagram Marketing</Link></li>
                          <li><Link href="/services/social-media/facebook">Facebook Marketing</Link></li>
                          <li><Link href="/services/social-media/pinterest">Pinterest Marketing</Link></li>
                          <li><Link href="/services/social-media/youtube">YouTube Marketing</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/social-media/linkedin">LinkedIn Marketing</Link></li>
                          <li><Link href="/services/social-media/smo">Social Media Optimization (SMO)</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tab4' && (
                <div className="tab-pane active">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/content">Content Marketing</Link></li>
                          <li><Link href="/services/content/writing">Content Writing</Link></li>
                          <li><Link href="/free/demo-content">Free Demo Content</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tab5' && (
                <div className="tab-pane active">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/content/email-marketing">Email Marketing</Link></li>
                          <li><Link href="/free/email-strategy">Free Email Strategy</Link></li>
                          <li><Link href="/services/content/email-marketing">Email Niche Industries</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tab6' && (
                <div className="tab-pane active">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/consultancy">Consultancy</Link></li>
                          <li><Link href="/services/seo/consultancy">SEO Consultancy</Link></li>
                          <li><Link href="/services/consultancy/business-growth">Business Growth Consultancy</Link></li>
                          <li><Link href="/services/social-media/consultancy">Social Media Consultancy</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/consultancy/organic-growth">Organic Growth Consultancy</Link></li>
                          <li><Link href="/services/consultancy/orm">Online Reputation Management</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tab7' && (
                <div className="tab-pane active">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/paid-ads">Online Advertising</Link></li>
                          <li><Link href="/services/paid-ads/google-ads">Google Ads</Link></li>
                          <li><Link href="/services/paid-ads/meta-ads">Meta Ads</Link></li>
                          <li><Link href="/services/paid-ads/linkedin-ads">LinkedIn Ads</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/services/paid-ads/pinterest-ads">Pinterest Ads</Link></li>
                          <li><Link href="/services/paid-ads/niche-industries">Online Advertising Niche Industries</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="col-lg-12">
            <div className="footer-copyright-text">
              <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
