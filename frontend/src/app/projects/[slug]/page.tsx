'use client';

import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { useParams } from 'next/navigation';

interface Project {
  title: string;
  client: string;
  category: string;
  location: string;
  date: string;
  image_url: string;
  content: string;
}

export default function ProjectSingle() {
  const params = useParams();
  const slug = params.slug;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:8000/api/projects/${slug}`)
        .then(res => res.json())
        .then(data => {
          setProject(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching project:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <div className="py-5 text-center">Loading...</div>;
  if (!project) return <div className="py-5 text-center">Project not found.</div>;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">{project.title}</h1>                        
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">home</a></li>
                    <li className="breadcrumb-item"><a href="/projects">/ projects</a></li>
                    <li className="breadcrumb-item active" aria-current="page">/ {project.title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-project-single py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar shadow-sm p-4 rounded bg-white">
                <div className="page-category-list project-category-list wow fadeInUp">
                  <h3 className="h5 border-bottom pb-2 mb-3">Project Details</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>Client :</strong> {project.client}</li>
                    <li className="mb-2"><strong>Category :</strong> {project.category}</li>
                    <li className="mb-2"><strong>Location :</strong> {project.location}</li>
                    <li className="mb-2"><strong>Date :</strong> {project.date}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="project-single-content">
                <div className="page-single-image mb-4">
                  <figure className="image-anime reveal">
                    <img src={project.image_url || '/images/project-2.jpg'} alt={project.title} className="img-fluid rounded shadow" />
                  </figure>
                </div>
                
                <div className="project-entry" dangerouslySetInnerHTML={{ __html: project.content }}>
                </div>

                <div className="page-single-faqs mt-5">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">Frequently asked <span>question</span></h2>
                  </div>

                  <div className="faq-accordion mt-4" id="accordion">
                    {[1, 2, 3, 4].map((id) => (
                      <div key={id} className="accordion-item wow fadeInUp border mb-2 rounded">
                        <h2 className="accordion-header">
                          <button 
                            className={`accordion-button ${openFaq === id ? '' : 'collapsed'} py-3`} 
                            type="button" 
                            onClick={() => toggleFaq(id)}
                          >
                            {id === 1 && "1. What is digital marketing, & help my business?"}
                            {id === 2 && "2. How do you measure success in a campaign?"}
                            {id === 3 && "3. Can you help with both SEO and paid ads?"}
                            {id === 4 && "4. Is there a contract or long-term commitment?"}
                          </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${openFaq === id ? 'show' : ''}`}>
                          <div className="accordion-body bg-light">
                            <p>We closely track key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), and return on investment (ROI) to evaluate campaign effectiveness.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
