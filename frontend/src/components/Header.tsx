'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
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

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
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
      <div className={`header-sticky ${isSticky ? 'active' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo.png"
                alt="Rank Spiders"
                width={160}
                height={44}
                priority
                style={{ height: 'auto' }}
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
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="/services">Services</Link>
                    <ul>
                      <li className="submenu">
                        <Link href="/seo-agency-india">SEO Optimization</Link>
                        <ul>
                          <li><Link href="/free-seo-audit-agency">Free SEO Audit</Link></li>
                          <li><Link href="/ai-seo-agency">AI SEO</Link></li>
                          <li><Link href="/technical-seo-agency">Technical SEO</Link></li>
                          <li><Link href="/local-seo-agency">Local SEO</Link></li>
                          <li><Link href="/link-building-seo-agency">Link Building SEO</Link></li>
                          <li><Link href="/woocommerce-seo-agency">Woocommerce SEO</Link></li>
                        </ul>
                      </li>
                      <li className="submenu">
                        <Link href="/social-media-marketing">Social Media Marketing</Link>
                        <ul>
                          <li><Link href="/facebook-marketing-agency">Facebook Marketing</Link></li>
                          <li><Link href="/pinterest-marketing-agency">Pinterest Marketing</Link></li>
                          <li><Link href="/youtube-marketing-agency">Youtube Marketing</Link></li>
                          <li><Link href="/social-media-consultancy-agency">Organic Growth Consultancy</Link></li>
                        </ul>
                      </li>
                      <li className="submenu">
                        <Link href="/web-design-and-development-niche-industries">Web Design & Development</Link>
                        <ul>
                          <li><Link href="/custom-landing-page-agency">Custom Landing Page</Link></li>
                          <li><Link href="/content-marketing-agency">Content Marketing</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/testimonials">Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog">Blog</Link>
                  </li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="/tools">Tools</Link>
                    <ul>
                      <li><Link href="/tools/seo-audit">SEO Audit Tool</Link></li>
                      <li><Link href="/tools">All Free Tools →</Link></li>
                    </ul>
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
