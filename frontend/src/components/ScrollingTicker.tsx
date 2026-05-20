import React from 'react';

const ScrollingTicker = () => {
  const items = [
    'Social Media Marketing',
    'Search Engine Optimization',
    'Email Marketing',
    'Web Design',
    'Mobile Marketing Solutions',
  ];

  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          {items.concat(items).map((item, index) => (
            <span key={index}>
              <img src="/images/icon-sparkle.svg" alt="" />
              {item}
            </span>
          ))}
        </div>
        <div className="scrolling-content">
          {items.concat(items).map((item, index) => (
            <span key={index}>
              <img src="/images/icon-sparkle.svg" alt="" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTicker;
