import React from 'react';

const items = [
  'Social Media Marketing',
  'Search Engine Optimization',
  'Email Marketing',
  'Web Design',
  'Mobile Marketing Solutions',
];

const ScrollingTicker = () => (
  <div className="our-scrolling-ticker">
    <div className="scrolling-ticker-box">
      <div className="scrolling-content">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ScrollingTicker;
