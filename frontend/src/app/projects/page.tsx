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
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/projects`)
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

      <div className="page-projects py-5">
        <div className="container">
          <div className="row">
            {projects.map((project) => {
              const slugIdx = (project.slug?.split('').reduce((a: number, c: string) => a + c.charCodeAt(0), 0) % 6) + 1;
              const fallbackImg = `/images/projects/project-${slugIdx}.jpg`;
              return (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="project-item wow fadeInUp shadow-sm rounded overflow-hidden">
                  <div className="project-image">
                    <Link href={`/projects/${project.slug}`}>
                      <figure className="image-anime">
                        <img
                          src={project.image_url || fallbackImg}
                          onError={(e) => { e.currentTarget.src = fallbackImg; }}
                          alt={project.title}
                          className="img-fluid"
                        />
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
