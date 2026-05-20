'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollingTicker from '@/components/ScrollingTicker';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Form submitted successfully ✅' });
        setFormData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong ❌' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server ❌' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Contact <span>Us</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">/ contact us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <ScrollingTicker />

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-us-image">
                <figure className="image-anime reveal">
                  <img src="/images/contact-us-image.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Contact us</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Let's Connect and Build Your <span>digital presence</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">We're here to turn your ideas into impactful digital experiences. Whether you're looking to elevate your brand, boost engagement, or drive more conversions, our team is ready to collaborate and craft a strategy that delivers real results.</p>
                </div>

                <div className="contact-info-box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="/images/icon-phone.svg" alt="" />
                      </div>
                      <div className="contact-item-content">
                        <h3>Phone</h3>
                        <p><a href="tel:+919988357092">+91 99883-57092</a></p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="/images/icon-mail.svg" alt="" />
                      </div>
                      <div className="contact-item-content">
                        <h3>Email</h3>
                        <p><a href="mailto:info@rankspiders.com">info.rankspiders.com</a></p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="/images/icon-location.svg" alt="" />
                      </div>
                      <div className="contact-item-content">
                        <h3>Location</h3>
                        <p>5th Floor, Veerji Tower, Office Number - 505, E-257, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140307</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-social-list">
                    <h3>follow us:</h3>
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
            </div>

            <div className="col-lg-12">
              <div className="contact-form-box">
                <div className="contact-us-form">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">Send us a message</h2>
                  </div>

                  <div className="contact-form">
                    <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="row">
                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="fname" value={formData.fname} onChange={handleChange} className="form-control" placeholder="First name" required />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="lname" value={formData.lname} onChange={handleChange} className="form-control" placeholder="Last name" required />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="E-mail" required />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="Phone" required />
                        </div>

                        <div className="form-group col-md-12 mb-4">
                          <select name="service" value={formData.service} onChange={handleChange} className="form-control optin_select_box" required>
                            <option value="">-- Select Service --</option>
                            <option value="Web Development Services">Web Development Services</option>
                            <option value="Web Designing Services">Web Designing Services</option>
                            <option value="Graphic Designing Services">Graphic Designing Services</option>
                            <option value="Content Writing Services">Content Writing Services</option>
                            <option value="PPC Services">PPC Services</option>
                            <option value="SEO Services">SEO Services</option>
                            <option value="Digital Marketing Services">Digital Marketing Services</option>
                            <option value="Social Media Marketing Services">Social Media Marketing Services</option>
                            <option value="Email Marketing">Email Marketing</option>
                          </select>
                        </div>

                        <div className="form-group col-md-12 mb-4">
                          <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows={3} placeholder="Write message..."></textarea>
                        </div>

                        <div className="col-md-12">
                          <button type="submit" className="btn-default btn-highlighted" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                          </button>
                        </div>

                        {status.message && (
                          <div className={`col-md-12 mt-3 alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                            {status.message}
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>

                <div className="google-map-iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.551612311209!2d76.69078777544946!3d30.707954374602444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef33c7cf9df7%3A0x9d6b5e6e713ec28!2sD-151%2C%20Ground%20Floor%2C%20Phase%208%2C%20Industrial%20Area%2C%20Sector%2071%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
