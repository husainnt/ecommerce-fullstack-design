import "../styles/global.css";
import React from "react";
import heroBanner from "../assets/images/hero-banner.png";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img src={heroBanner} alt="Latest Trending Electronics" />
      <div className="hero-text">
        <h1>Latest trending Electronic items</h1>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default HeroBanner;

