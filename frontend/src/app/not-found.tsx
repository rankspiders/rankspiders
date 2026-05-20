import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ScrollingTicker from '@/components/ScrollingTicker';

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="Page not"
        subtitle="found"
        breadcrumbs={[{ label: '404 error page', active: true }]}
      />
      <ScrollingTicker />
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-page-image wow fadeInUp">
                <img src="/images/404-error-img.png" alt="" />
              </div>
              <div className="error-page-content">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                    Oops! page not <span>found</span>
                  </h2>
                </div>
                <div className="error-page-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    The page you are looking for does not exist.
                  </p>
                  <Link className="btn-default wow fadeInUp" data-wow-delay="0.6s" href="/">
                    back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
