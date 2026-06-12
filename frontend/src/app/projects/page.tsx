import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import projects from '@/data/projects';

export const metadata: Metadata = {
  title: 'Our Projects | Rank Spiders',
  description: 'Explore our portfolio of SEO, PPC, content marketing, and social media projects with proven results.',
};

export default function Projects() {
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
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="project-item shadow-sm rounded overflow-hidden">
                  <div className="project-image">
                    <Link href={`/projects/${project.slug}`}>
                      <figure className="image-anime">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="img-fluid"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="project-content p-4">
                    <p className="text-primary mb-1">{project.category}</p>
                    <h3>
                      <Link href={`/projects/${project.slug}`} className="text-dark">
                        {project.title}
                      </Link>
                    </h3>
                    <Link href={`/projects/${project.slug}`} className="btn-default btn-sm mt-3">
                      View Project
                    </Link>
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
