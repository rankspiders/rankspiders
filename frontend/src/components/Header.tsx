'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Initialise theme from localStorage / system preference
  useEffect(() => {
    const saved = localStorage.getItem('rs-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  // Sticky + hide-on-scroll-down header
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 80) {
        setIsSticky(true);
        setIsHidden(currentY > lastScrollY.current);
      } else {
        setIsSticky(false);
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rs-theme', next);
  };

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(prev => (prev === key ? null : key));
  };

  return (
    <header className="main-header">
      <div className={`header-sticky ${isSticky ? 'active' : ''} ${isHidden ? 'hide' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo/rankspiders.png"
                alt="Rank Spiders"
                width={300}
                height={85}
                priority
                className="site-logo"
                style={{ height: '85px', width: 'auto' }}
              />
            </Link>

            {/* Desktop nav */}
            <div className="collapse navbar-collapse main-menu d-none d-lg-flex">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About Us</Link>
                  </li>
                  <li className="nav-item submenu has-mega">
                    <Link className="nav-link" href="/services">Services</Link>
                    <div className="mega-menu">
                      <div className="mega-services">
                        <div className="mega-col">
                          <p className="mega-col-label">SEO Optimization</p>
                          <Link href="/free-seo-audit-agency" className="mega-link">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Free SEO Audit</span>
                              <span className="mega-link-sub">Full report, zero cost</span>
                            </span>
                          </Link>
                          <Link href="/ai-seo-agency" className="mega-link">
                            <i className="fa-solid fa-robot"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">AI SEO</span>
                              <span className="mega-link-sub">Smart AI-driven ranking</span>
                            </span>
                          </Link>
                          <Link href="/technical-seo-agency" className="mega-link">
                            <i className="fa-solid fa-gear"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Technical SEO</span>
                              <span className="mega-link-sub">Speed & site structure</span>
                            </span>
                          </Link>
                          <Link href="/local-seo-agency" className="mega-link">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Local SEO</span>
                              <span className="mega-link-sub">Dominate your area</span>
                            </span>
                          </Link>
                          <Link href="/link-building-seo-agency" className="mega-link">
                            <i className="fa-solid fa-link"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Link Building</span>
                              <span className="mega-link-sub">Authority & backlinks</span>
                            </span>
                          </Link>
                          <Link href="/woocommerce-seo-agency" className="mega-link">
                            <i className="fa-brands fa-wordpress"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">WooCommerce SEO</span>
                              <span className="mega-link-sub">E-commerce rankings</span>
                            </span>
                          </Link>
                        </div>
                        <div className="mega-col">
                          <p className="mega-col-label">Social Media</p>
                          <Link href="/facebook-marketing-agency" className="mega-link">
                            <i className="fa-brands fa-facebook-f"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Facebook Marketing</span>
                              <span className="mega-link-sub">Ads & community growth</span>
                            </span>
                          </Link>
                          <Link href="/pinterest-marketing-agency" className="mega-link">
                            <i className="fa-brands fa-pinterest-p"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Pinterest Marketing</span>
                              <span className="mega-link-sub">Visual reach & traffic</span>
                            </span>
                          </Link>
                          <Link href="/youtube-marketing-agency" className="mega-link">
                            <i className="fa-brands fa-youtube"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Youtube Marketing</span>
                              <span className="mega-link-sub">Video SEO & growth</span>
                            </span>
                          </Link>
                          <Link href="/social-media-consultancy-agency" className="mega-link">
                            <i className="fa-solid fa-seedling"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Organic Growth</span>
                              <span className="mega-link-sub">Long-term social wins</span>
                            </span>
                          </Link>
                          <p className="mega-col-label" style={{marginTop: '14px'}}>Web & Content</p>
                          <Link href="/web-design-and-development-niche-industries" className="mega-link">
                            <i className="fa-solid fa-laptop-code"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Web Design & Dev</span>
                              <span className="mega-link-sub">Sites built to convert</span>
                            </span>
                          </Link>
                          <Link href="/content-marketing-agency" className="mega-link">
                            <i className="fa-solid fa-pen-nib"></i>
                            <span className="mega-link-text">
                              <span className="mega-link-name">Content Marketing</span>
                              <span className="mega-link-sub">Words that rank & sell</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="mega-featured">
                        <span className="mega-featured-tag">Free</span>
                        <h5 className="mega-featured-title">Get Your Free<br/>SEO Report</h5>
                        <p className="mega-featured-body">A full analysis of your site&apos;s SEO health — rankings, speed, and fixes — in minutes.</p>
                        <Link href="/free-seo-audit-agency" className="mega-featured-btn">
                          Claim Free Audit <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/testimonials">Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog">Blog</Link>
                  </li>
                  <li className="nav-item submenu has-dropdown">
                    <Link className="nav-link" href="/tools">Tools</Link>
                    <div className="nav-dropdown">
                      <Link href="/tools/seo-audit" className="mega-link">
                        <i className="fa-solid fa-chart-line"></i>
                        <span className="mega-link-text">
                          <span className="mega-link-name">SEO Audit Tool</span>
                          <span className="mega-link-sub">Analyse any website's SEO</span>
                        </span>
                      </Link>
                      <Link href="/tools" className="mega-link">
                        <i className="fa-solid fa-toolbox"></i>
                        <span className="mega-link-text">
                          <span className="mega-link-name">All Free Tools</span>
                          <span className="mega-link-sub">Explore our full toolkit</span>
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right actions */}
            <div className="header-actions">
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <i className="fa-regular fa-moon"></i>
                ) : (
                  <i className="fa-regular fa-sun"></i>
                )}
              </button>

              {/* CTA */}
              <Link href="/contact-us" className="btn-default d-none d-lg-inline-flex">
                Book a Meeting
              </Link>

              {/* Mobile hamburger */}
              <button
                className={`mobile-menu-toggle d-lg-none ${mobileOpen ? 'open' : ''}`}
                onClick={() => setMobileOpen(prev => !prev)}
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className="mobile-nav">
            <ul>
              <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link></li>
              <li className="mobile-has-children">
                <button onClick={() => toggleSubmenu('services')}>
                  Services <i className={`fa-solid fa-chevron-${openSubmenu === 'services' ? 'up' : 'down'}`}></i>
                </button>
                {openSubmenu === 'services' && (
                  <ul>
                    <li><Link href="/seo-agency-india" onClick={() => setMobileOpen(false)}>SEO Optimization</Link></li>
                    <li><Link href="/ai-seo-agency" onClick={() => setMobileOpen(false)}>AI SEO</Link></li>
                    <li><Link href="/technical-seo-agency" onClick={() => setMobileOpen(false)}>Technical SEO</Link></li>
                    <li><Link href="/local-seo-agency" onClick={() => setMobileOpen(false)}>Local SEO</Link></li>
                    <li><Link href="/social-media-marketing" onClick={() => setMobileOpen(false)}>Social Media Marketing</Link></li>
                    <li><Link href="/web-design-and-development-niche-industries" onClick={() => setMobileOpen(false)}>Web Design & Development</Link></li>
                    <li><Link href="/content-marketing-agency" onClick={() => setMobileOpen(false)}>Content Marketing</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</Link></li>
              <li><Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link></li>
              <li className="mobile-has-children">
                <button onClick={() => toggleSubmenu('tools')}>
                  Tools <i className={`fa-solid fa-chevron-${openSubmenu === 'tools' ? 'up' : 'down'}`}></i>
                </button>
                {openSubmenu === 'tools' && (
                  <ul>
                    <li><Link href="/tools/seo-audit" onClick={() => setMobileOpen(false)}>SEO Audit Tool</Link></li>
                    <li><Link href="/tools" onClick={() => setMobileOpen(false)}>All Free Tools</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</Link></li>
              <li className="mobile-cta">
                <Link href="/contact-us" className="btn-default" onClick={() => setMobileOpen(false)}>Book a Meeting</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
