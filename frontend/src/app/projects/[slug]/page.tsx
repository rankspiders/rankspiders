import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import projects from '@/data/projects';
import ProjectFaq from './ProjectFaq';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Rank Spiders`,
    description: `${project.category} project for ${project.client} — ${project.location}.`,
  };
}

export default async function ProjectSingle({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 data-cursor="-opaque">{project.title}</h1>
                <nav data--delay="0.2s">
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
                <div className="page-category-list project-category-list ">
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded shadow"
                    />
                  </figure>
                </div>

                <div
                  className="project-entry"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />

                <ProjectFaq />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
