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
                    <img src="/images/icon-headset-gradiant.svg" alt="" />
                  </div>
                  <div className="footer-contact-item-content">
                    <p><a href="tel:+919988357092">+91 99883-57092</a></p>
                    <p><a href="mailto:info@rankspiders.com">info.rankspiders.com</a></p>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-location-gradiant.svg" alt="" />
                  </div>
                  <div className="footer-contact-item-content">
                    <p>5th Floor, Veerji Tower, Office Number - 505, E-257, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140307</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer-newsletter-box">
              <h3>Subscribe Newsletter's</h3>
              <div className="footer-newsletter-form">
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input type="email" name="mail" className="form-control" id="mail" placeholder="E-mail Address" required />
                    <button type="submit" className="btn-default">Subscribe</button>
                  </div>
                </form>
              </div>
              <p>* Stay updated with the latest SEO tips trends, & insights-straight to your inbox.</p>
              <div className="contact-social-list pt-5">
                <h3 className="m-0">follow us:</h3>
                <ul>
                  <li><a target="_blank" href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a target="_blank" href="https://www.youtube.com/@rankspiders/"><i className="fa-brands fa-youtube yt-icon"></i></a></li>
                  <li><a target="_blank" href="https://www.linkedin.com/company/rankspidersdigitalagency/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a target="_blank" href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                  <li><a target="_blank" href="https://www.instagram.com/rankspiders.digital/"><i className="fa-brands fa-instagram insta-icon"></i></a></li>
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
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/portfolio/smo">SMO Portfolios</Link></li>
                  <li><Link href="/portfolio/seo">SEO Portfolios</Link></li>
                  <li><Link href="/portfolio/web-dev">Website Development Portfolios</Link></li>
                  <li><Link href="/portfolio/content">Content Writing Portfolios</Link></li>
                </ul>
              </div>

              <div className="footer-links">
                <h3>Support</h3>
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Term's & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><Link href="/contact-us">Contact us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-ld-12 pt-4" style={{ borderTop: '1px solid var(--divider-color)' }}>
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
                          <li><Link href="/free-seo-audit-agency">Free Seo Audit</Link></li>
                          <li><Link href="/seo-agency-india">Seo</Link></li>
                          <li><Link href="/ai-seo-agency">AI Seo</Link></li>
                          <li><Link href="/technical-seo-agency">Technical Seo</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/link-building-seo-agency">Link Building Seo</Link></li>
                          <li><Link href="/saas-seo-agency">SaaS Seo</Link></li>
                          <li><Link href="/b2b-seo-agency">B2B Seo</Link></li>
                          <li><Link href="/local-seo-agency">Local Seo</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/ecommerce-seo-agency">Ecommerce Seo</Link></li>
                          <li><Link href="/woocommerce-seo-agency">woocommerce seo</Link></li>
                          <li><Link href="/shopify-seo-agency">Shopify Seo</Link></li>
                          <li><Link href="/wordpress-seo-agency">Wordpress Seo</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/seo-niche-industries">SEO Niche Industries</Link></li>
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
                          <li><Link href="/free-development-strategy-agency">Free Development Strategy</Link></li>
                          <li><Link href="/custom-landing-page-agency">Custom Landing Page</Link></li>
                          <li><Link href="/wordpress-development-agency">Wordpress Development</Link></li>
                          <li><Link href="/shopify-development-agency">Shopify Development</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/website-maintenance-agency">Website Maintenance</Link></li>
                          <li><Link href="/seo-website-migration-agency">Seo Website Migration</Link></li>
                          <li><Link href="/web-design-and-development-agency">Web Design & Development</Link></li>
                          <li><Link href="/web-design-and-development-niche-industries">Web Design Niche Industries</Link></li>
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
                          <li><Link href="/social-media-agency">Social Media</Link></li>
                          <li><Link href="/free-social-media-audit-agency">Free Social Media Audit</Link></li>
                          <li><Link href="/graphic-design-agency">Graphic Design</Link></li>
                          <li><Link href="/video-editing-agency">Video Editing</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/instagram-agency">Instagram Marketing</Link></li>
                          <li><Link href="/facebook-agency">Facebook Marketing</Link></li>
                          <li><Link href="/pinterest-agency">Pinterest Marketing</Link></li>
                          <li><Link href="/youtube-agency">Youtube Marketing</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/linkdin-agency">Linkdin Marketing</Link></li>
                          <li><Link href="/social-media-niche-industries">Social Media Niche Industries</Link></li>
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
                          <li><Link href="/content-marketing-agency">Content Marketing</Link></li>
                          <li><Link href="/content-writing-agency">Content Writing</Link></li>
                          <li><Link href="/free-demo-content-agency">Free Demo Content</Link></li>
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
                          <li><Link href="/email-marketing-agency">Email Marketing</Link></li>
                          <li><Link href="/free-email-strategy-agency">Free Email Strategy</Link></li>
                          <li><Link href="/email-niche-industries">Email Niche Industries</Link></li>
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
                          <li><Link href="/consultancy-agency">Consultancy</Link></li>
                          <li><Link href="/seo-consultancy-agency">Seo Consultancy</Link></li>
                          <li><Link href="/business-growth-consultancy-agency">Business Growth Consultancy</Link></li>
                          <li><Link href="/social-media-consultancy-agency">Social Media Consultancy</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/organic-growth-consultancy-agency">Organic Growth Consultancy</Link></li>
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
                          <li><Link href="/online-advertising-agency">Online Advertising</Link></li>
                          <li><Link href="/google-ads-agency">Google Ads</Link></li>
                          <li><Link href="/meta-ads-agency">Meta Ads</Link></li>
                          <li><Link href="/linkdin-ads-agency">Linkdin Ads</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="tabs-footer-links">
                        <ul style={{ width: '100%' }}>
                          <li><Link href="/pinterest-ads-agency">Pinterest Ads</Link></li>
                          <li><Link href="/online-advertising-niche-industries">Online Advertising Niche Industries</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="col-lg-12">
            <div className="footer-copyright-text">
              <p>Copyright © 2025 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
