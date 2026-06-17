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
        {[...items.map((item, i) => ({ item, key: `a-${i}` })), ...items.map((item, i) => ({ item, key: `b-${i}` }))].map(({ item, key }) => (
          <span key={key} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ScrollingTicker;
