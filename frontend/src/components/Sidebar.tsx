import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="page-single-sidebar">
      <div className="page-category-list ">
        <h3>Discover Our More Services</h3>
        <ul>
          <li><Link href="/free/seo-audit">Free Seo Audit</Link></li>
          <li><Link href="/services/seo/ai">AI Seo</Link></li>
          <li><Link href="/services/seo/technical">Technical Seo</Link></li>
          <li><Link href="/services/seo/local">Local Seo</Link></li>
          <li><Link href="/services/seo/link-building">Link Building Seo</Link></li>
          <li><Link href="/services/seo/saas">Saas Seo</Link></li>
          <li><Link href="/services/seo/b2b">B2B Seo</Link></li>
          <li><Link href="/services/seo/wordpress">Wordpress Seo</Link></li>
          <li><Link href="/services/seo/ecommerce">E-Commerce Seo</Link></li>
          <li><Link href="/services/web-development/niche-industries">Niche Seo Industries</Link></li>
        </ul>
      </div>

      <div className="page-cta-box sidebar-cta-box " data--delay="0.2s">
        <div className="page-cta-header">
          <div className="review-images">
            <div className="review-image">
              <img src="/images/authors/author-1.jpg" alt="Client testimonial - Rank Spiders digital marketing agency India" />
            </div>
            <div className="review-image">
              <img src="/images/authors/author-2.jpg" alt="Happy client review - Rank Spiders digital marketing results" />
            </div>
            <div className="review-image">
              <img src="/images/authors/author-3.jpg" alt="Verified client success story - Rank Spiders India" />
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
              <img src="/images/icons/icon-phone.svg" alt="Call Rank Spiders" /> +91 99883-57092
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
