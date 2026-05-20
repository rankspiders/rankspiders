import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="page-single-sidebar">
      <div className="page-category-list wow fadeInUp">
        <h3>Discover Our More Services</h3>
        <ul>
          <li><Link href="/free-seo-audit-agency">Free Seo Audit</Link></li>
          <li><Link href="/ai-seo-agency">AI Seo</Link></li>
          <li><Link href="/technical-seo-agency">Technical Seo</Link></li>
          <li><Link href="/local-seo-agency">Local Seo</Link></li>
          <li><Link href="/link-building-seo-agency">Link Building Seo</Link></li>
          <li><Link href="/saas-seo-agency">Saas Seo</Link></li>
          <li><Link href="/b2b-seo-agency">B2B Seo</Link></li>
          <li><Link href="/wordpress-seo-agency">Wordpress Seo</Link></li>
          <li><Link href="/ecommerce-seo-agency">E-Commerce Seo</Link></li>
          <li><Link href="/niche-seo-industries-agency">Niche Seo Industries</Link></li>
        </ul>
      </div>

      <div className="page-cta-box sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
        <div className="page-cta-header">
          <div className="review-images">
            <div className="review-image">
              <img src="/images/author-1.jpg" alt="" />
            </div>
            <div className="review-image">
              <img src="/images/author-2.jpg" alt="" />
            </div>
            <div className="review-image">
              <img src="/images/author-3.jpg" alt="" />
            </div>
          </div>
          <div className="review-rating-content">
            <p><span>2.5k</span> Positive Review in our solutions</p>
          </div>
        </div>

        <div className="page-cta-box-body">
          <div className="page-cta-counters">
            <div className="page-cta-counter-item">
              <h2><span className="counter">95</span></h2>
              <p>Client satisfaction</p>
            </div>
            <div className="page-cta-counter-item">
              <h2><span className="counter">1</span>K+</h2>
              <p>Project complete</p>
            </div>
          </div>
          <div className="page-cta-btn">
            <a href="tel:+919988357092">
              <img src="/images/icon-phone-white.svg" alt="" /> +91 99883-57092
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
