import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 data-cursor="-opaque">
                {title} <span>{subtitle}</span>
              </h1>
              <nav data--delay="0.2s">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">home</Link>
                  </li>
                  {breadcrumbs.map((item, index) => (
                    <li
                      key={index}
                      className={`breadcrumb-item ${item.active ? 'active' : ''}`}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.active ? (
                        `/ ${item.label}`
                      ) : (
                        <Link href={item.href || '#'}>/ {item.label}</Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
