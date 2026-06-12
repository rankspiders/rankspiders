'use client';

import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What is digital marketing, and how can it help my business?",
    answer: "Digital marketing uses online channels — SEO, paid ads, social media, and content — to attract and convert customers. Done right, it delivers measurable ROI and compounds over time unlike traditional advertising.",
  },
  {
    id: 2,
    question: "How do you measure success in a campaign?",
    answer: "We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness.",
  },
  {
    id: 3,
    question: "Can you help with both SEO and paid ads?",
    answer: "Yes. We run both organic SEO and paid campaigns (Google, Meta) and can integrate them into a unified strategy so each channel supports the other.",
  },
  {
    id: 4,
    question: "Is there a contract or long-term commitment?",
    answer: "We offer flexible month-to-month engagements as well as project-based work. We prefer to earn your continued business through results rather than lock-in clauses.",
  },
];

export default function ProjectFaq() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="page-single-faqs mt-5">
      <div className="section-title">
        <h2 className="wow fadeInUp" data-cursor="-opaque">
          Frequently asked <span>questions</span>
        </h2>
      </div>

      <div className="faq-accordion mt-4" id="accordion">
        {faqs.map((faq) => (
          <div key={faq.id} className="accordion-item wow fadeInUp border mb-2 rounded">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openId === faq.id ? '' : 'collapsed'} py-3`}
                type="button"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                {faq.id}. {faq.question}
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${openId === faq.id ? 'show' : ''}`}>
              <div className="accordion-body bg-light">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
