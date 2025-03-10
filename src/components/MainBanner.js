import React from 'react';

const MainBanner = () => {
  return (
    <section 
      className="main-banner" 
      style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
    >
      <div className="banner-content">
        <h1>Discover Amazing Products</h1>
        <p>Shop the latest trends with the best deals.</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default MainBanner;
