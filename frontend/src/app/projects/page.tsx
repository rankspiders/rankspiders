'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  image_url: string;
  slug: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageHeader 
        title="Our" 
        subtitle="Projects" 
        breadcrumbs={[{ label: 'Projects', active: true }]} 
      />

      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/icon-sparkle.svg" alt="" />Social Media Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Search Engine Optimization</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Email Marketing</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Web Design</span>
            <span><img src="/images/icon-sparkle.svg" alt="" />Mobile Marketing Solutions</span>
          </div>
        </div>
      </div>

      <div className="page-projects py-5">
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="project-item wow fadeInUp shadow-sm rounded overflow-hidden">
                  <div className="project-image">
                    <Link href={`/projects/${project.slug}`}>
                      <figure className="image-anime">
                        <img src={project.image_url} alt={project.title} className="img-fluid" />
                      </figure>
                    </Link>
                  </div>
                  <div className="project-content p-4">
                    <p className="text-primary mb-1">{project.category}</p>
                    <h3><Link href={`/projects/${project.slug}`} className="text-dark">{project.title}</Link></h3>
                    <Link href={`/projects/${project.slug}`} className="btn-default btn-sm mt-3">View Project</Link>
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
