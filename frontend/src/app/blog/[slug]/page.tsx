'use client';

import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';
import { useParams } from 'next/navigation';

interface Post {
  title: string;
  author: string;
  created_at: string;
  image_url: string;
  content: string;
}

export default function BlogSingle() {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:8000/api/blogs/${slug}`)
        .then(res => res.json())
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching blog post:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <div className="py-5 text-center">Loading...</div>;
  if (!post) return <div className="py-5 text-center">Post not found.</div>;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">{post.title}</h1>                        
                <div className="post-single-meta wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="me-3"><i className="fa-regular fa-user text-primary"></i> {post.author}</li>
                    <li><i className="fa-regular fa-clock text-primary"></i> {new Date(post.created_at).toLocaleDateString()}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollingTicker />

      <div className="page-single-post py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="post-image mb-5">
                <figure className="image-anime reveal">
                  <img src={post.image_url || '/images/post-1.jpg'} alt={post.title} className="img-fluid rounded" />
                </figure>
              </div>

              <div className="post-content">
                <div className="post-entry" dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>

                <div className="post-tag-links mt-5 pt-4 border-top">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags wow fadeInUp" data-wow-delay="0.5s">
                        <span className="tag-links font-weight-bold">
                          Tags:
                          <a href="#" className="ms-2 badge bg-light text-dark">Explore</a>
                          <a href="#" className="ms-1 badge bg-light text-dark">Start</a>
                          <a href="#" className="ms-1 badge bg-light text-dark">Contact</a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                      <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item"><a href="#" className="btn btn-outline-primary btn-sm rounded-circle"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="btn btn-outline-primary btn-sm rounded-circle"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="btn btn-outline-primary btn-sm rounded-circle"><i className="fa-brands fa-instagram"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="btn btn-outline-primary btn-sm rounded-circle"><i className="fa-brands fa-x-twitter"></i></a></li>
                        </ul>
                      </div>
                    </div>
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
