'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const serviceChips = [
  { value: 'SEO Services',                  label: 'SEO',           icon: 'fa-solid fa-magnifying-glass-chart' },
  { value: 'Web Design & Development',      label: 'Web Design',    icon: 'fa-solid fa-code' },
  { value: 'Social Media Marketing',        label: 'Social Media',  icon: 'fa-brands fa-instagram' },
  { value: 'Content Writing Services',      label: 'Content',       icon: 'fa-solid fa-pen-nib' },
  { value: 'Email Marketing',               label: 'Email Mktg',    icon: 'fa-solid fa-envelope-open-text' },
  { value: 'PPC Services',                  label: 'PPC Ads',       icon: 'fa-solid fa-chart-line' },
  { value: 'Graphic Designing Services',    label: 'Graphic Design',icon: 'fa-solid fa-palette' },
  { value: 'Digital Marketing Services',    label: 'Digital Mktg',  icon: 'fa-solid fa-bullhorn' },
  { value: 'Consultancy',                   label: 'Consultancy',   icon: 'fa-solid fa-handshake' },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fname: '', lname: '', email: '', phone: '', service: '', message: '',
  });
  const [status,  setStatus]  = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg,  setErrMsg]  = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectService = (value: string) =>
    setFormData(prev => ({ ...prev, service: prev.service === value ? '' : value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service) { setErrMsg('Please select a service.'); return; }
    setErrMsg('');
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ fname: '', lname: '', email: '', phone: '', service: '', message: '' });
      } else {
        setErrMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrMsg('Could not reach the server. Please try again.');
      setStatus('error');
    }
  };

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Us"
        breadcrumbs={[{ label: 'Contact Us', active: true }]}
      />

      {/* ── Main contact section ── */}
      <section className="contact-v2">
        <div className="container">
          <div className="row g-0 align-items-stretch">

            {/* ── LEFT: dark info panel ── */}
            <div className="col-lg-5">
              <div className="contact-panel">
                {/* Decorative orbs */}
                <div className="contact-panel__orb contact-panel__orb--1" aria-hidden="true" />
                <div className="contact-panel__orb contact-panel__orb--2" aria-hidden="true" />

                <div className="contact-panel__body">
                  <p className="contact-panel__eyebrow">Get in touch</p>
                  <h2 className="contact-panel__heading">
                    Let&apos;s build something <span>great together</span>
                  </h2>
                  <p className="contact-panel__sub">
                    Tell us about your project and we&apos;ll get back to you within 24 hours with a free strategy session.
                  </p>

                  {/* Info items */}
                  <div className="contact-panel__info">
                    <a href="tel:+919988357092" className="contact-panel__info-item">
                      <div className="contact-panel__info-icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div>
                        <span className="contact-panel__info-label">Call us</span>
                        <span className="contact-panel__info-value">+91 99883-57092</span>
                      </div>
                    </a>

                    <a href="mailto:info@rankspiders.com" className="contact-panel__info-item">
                      <div className="contact-panel__info-icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div>
                        <span className="contact-panel__info-label">Email us</span>
                        <span className="contact-panel__info-value">info@rankspiders.com</span>
                      </div>
                    </a>

                    <div className="contact-panel__info-item">
                      <div className="contact-panel__info-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div>
                        <span className="contact-panel__info-label">Office</span>
                        <span className="contact-panel__info-value">Office No. 22, Ground Floor, D-152, Phase 8, Industrial Area, Sector 74, SAS Nagar, Punjab 160071, India</span>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="contact-panel__social">
                    <a href="https://www.youtube.com/@rankspiders/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/company/rankspidersdigitalagency/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/rankspiders.digital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/rankspidersdigital" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: form card ── */}
            <div className="col-lg-7">
              <div className="contact-form-card">

                {status === 'success' ? (
                  /* ── Success state ── */
                  <div className="contact-success">
                    <div className="contact-success__icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h3>Message sent!</h3>
                    <p>Thanks for reaching out. Our team will contact you within <strong>24 hours</strong> with a tailored strategy.</p>
                    <button className="btn-default" onClick={() => setStatus('idle')}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="contact-form-card__header">
                      <h3>Send us a message</h3>
                      <p>Fill in the form and we&apos;ll reach out with a free audit and strategy call.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      {/* Name row */}
                      <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                          <div className="cf-field">
                            <input
                              type="text" name="fname" id="fname"
                              value={formData.fname} onChange={handleChange}
                              placeholder=" " required
                              className="cf-input"
                            />
                            <label htmlFor="fname" className="cf-label">First name *</label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="cf-field">
                            <input
                              type="text" name="lname" id="lname"
                              value={formData.lname} onChange={handleChange}
                              placeholder=" " required
                              className="cf-input"
                            />
                            <label htmlFor="lname" className="cf-label">Last name *</label>
                          </div>
                        </div>
                      </div>

                      {/* Contact row */}
                      <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                          <div className="cf-field">
                            <input
                              type="email" name="email" id="email"
                              value={formData.email} onChange={handleChange}
                              placeholder=" " required
                              className="cf-input"
                            />
                            <label htmlFor="email" className="cf-label">Email address *</label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="cf-field">
                            <input
                              type="tel" name="phone" id="phone"
                              value={formData.phone} onChange={handleChange}
                              placeholder=" " required
                              className="cf-input"
                            />
                            <label htmlFor="phone" className="cf-label">Phone number *</label>
                          </div>
                        </div>
                      </div>

                      {/* Service chips */}
                      <div className="cf-service-section mb-3">
                        <p className="cf-service-label">What can we help you with? *</p>
                        <div className="cf-chips">
                          {serviceChips.map(s => (
                            <button
                              key={s.value}
                              type="button"
                              className={`cf-chip ${formData.service === s.value ? 'cf-chip--active' : ''}`}
                              onClick={() => selectService(s.value)}
                            >
                              <i className={s.icon}></i>
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="cf-field mb-4">
                        <textarea
                          name="message" id="message"
                          value={formData.message} onChange={handleChange}
                          placeholder=" " rows={4}
                          className="cf-input cf-textarea"
                        />
                        <label htmlFor="message" className="cf-label">Your message (optional)</label>
                      </div>

                      {/* Error */}
                      {(status === 'error' || errMsg) && (
                        <div className="cf-alert cf-alert--error">
                          <i className="fa-solid fa-triangle-exclamation"></i>
                          {errMsg || 'Something went wrong. Please try again.'}
                        </div>
                      )}

                      {/* Submit */}
                      <button type="submit" className="btn-default cf-submit" disabled={status === 'loading'}>
                        {status === 'loading'
                          ? <><i className="fa fa-circle-notch fa-spin"></i> Sending…</>
                          : <><i className="fa-solid fa-paper-plane"></i> Send Message</>
                        }
                      </button>

                      <p className="cf-disclaimer">
                        <i className="fa-solid fa-lock"></i>
                        Your information is private and will never be shared with third parties.
                      </p>
                    </form>
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.551612311209!2d76.69078777544946!3d30.707954374602444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef33c7cf9df7%3A0x9d6b5e6e713ec28!2sD-151%2C%20Ground%20Floor%2C%20Phase%208%2C%20Industrial%20Area%2C%20Sector%2071%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rank Spiders Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
