'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import Sidebar from '@/components/Sidebar';

export default function FreeSeoAudit() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    url: '',
    service: 'free seo audit',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const data = new FormData();
    data.append('fname', formData.fname);
    data.append('lname', formData.lname);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('url', formData.url);
    data.append('service', formData.service);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/submit`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Audit request submitted successfully ✅' });
        setFormData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          url: '',
          service: 'free seo audit',
        });
      } else {
        setStatus({ type: 'error', message: result.detail || 'Something went wrong ❌' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server ❌' });
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      id: 1,
      question: "1. What is included in Rank Spiders’ Free SEO Audit?",
      answer: "Rank Spiders’ Free SEO Audit Services provide a detailed review of your website’s technical health, content quality, keyword alignment and overall search visibility."
    },
    {
      id: 2,
      question: "2. How can a Free SEO Audit help my business grow online?",
      answer: "A Free SEO Audit from Rank Spiders helps identify hidden issues that block rankings and traffic growth. By uncovering technical errors and content gaps, our audit enables smarter SEO decisions."
    },
    {
      id: 3,
      question: "3. Is the Free SEO Audit suitable for small and local businesses?",
      answer: "Yes. Rank Spiders’ Free SEO Audit Services are ideal for small, local and growing businesses. We focus heavily on local SEO audit services to help brands improve visibility."
    },
    {
      id: 4,
      question: "4. How is Rank Spiders’ SEO Audit different from automated audit tools?",
      answer: "Unlike automated tools that generate generic reports, Rank Spiders provides a human-led, insight-driven SEO audit."
    },
    {
      id: 5,
      question: "5. What happens after I receive my Free SEO Audit report?",
      answer: "After delivering your Free SEO Audit, Rank Spiders walks you through the findings and explains the impact of each issue in simple terms."
    }
  ];

  return (
    <>
      <PageHeader
        title="Free"
        subtitle="Seo Audit"
        breadcrumbs={[
          { label: 'Seo Optimization', href: '/seo-agency-india' },
          { label: 'Free Seo Audit', active: true }
        ]}
      />
      <ScrollingTicker />

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="contact-form-box mb-5 mt-0">
                  <div className="contact-us-form" style={{ width: '100%' }}>
                    <div className="section-title">
                      <h2 className="wow fadeInUp" data-cursor="-opaque">Free audit Form</h2>
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
                          <div className="form-group col-md-6 mb-4">
                            <select name="service" value={formData.service} onChange={handleChange} className="form-control optin_select_box">
                              <option value="free seo audit">Free seo audit</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mb-4">
                            <input name="url" type="url" value={formData.url} onChange={handleChange} className="form-control" placeholder="https://your-website.com" required />
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
                </div>

                <div className="service-entry">
                  <h3 className="wow fadeInUp">Discover Hidden Growth Opportunities with a Free SEO Audit</h3>
                  <p className="wow fadeInUp">Get a clear view of how your website performs in search with a comprehensive Free SEO Audit.</p>

                  <div className="service-strategy-box">
                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Identify SEO Issues Limiting Rankings<span> and Organic Growth</span></h2>
                    <ul className="wow fadeInUp" data-wow-delay="0.8s">
                      <li>Website performance and technical SEO health</li>
                      <li>Search visibility and keyword gap analysis</li>
                      <li>On-page and content optimization insights</li>
                      <li>Actionable recommendations for measurable growth</li>
                    </ul>

                    <div className="service-strategy-body wow fadeInUp" data-wow-delay="1s">
                      <div className="strategy-body-item">
                        <h3>Technical SEO Audit Specialists</h3>
                        <p>Experts analyzing site speed, structure, indexing, and crawlability issues</p>
                      </div>
                      <div className="strategy-body-item">
                        <h3>Content & Keyword Audit Experts</h3>
                        <p>Evaluating relevance, intent alignment, and content gaps impacting rankings</p>
                      </div>
                    </div>

                    <div className="service-strategy-image">
                      <figure className="image-anime reveal">
                        <img src="/images/service-strategy-img.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-single-faqs">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>question</span></h2>
          </div>

          <div className="faq-accordion" id="accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item wow fadeInUp">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openFaq === faq.id ? '' : 'collapsed'}`} 
                    type="button" 
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openFaq === faq.id ? 'show' : ''}`}>
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
