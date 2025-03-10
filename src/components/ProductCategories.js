import React from "react";
import "../styles/ProductCategories.css";

import homeFurniture from "../assets/images/home-furniture.png";
import consumerElectronics from "../assets/images/consumer-electronics.png";
import fashionAccessories from "../assets/images/fashion-accessories.png";
import beautyHealth from "../assets/images/beauty-health.png";
import sportsOutdoors from "../assets/images/sports-outdoors.png";
import toysHobbies from "../assets/images/toys-hobbies.png";

const categories = [
  { name: "Home Furniture", image: homeFurniture },
  { name: "Consumer Electronics", image: consumerElectronics },
  { name: "Fashion & Accessories", image: fashionAccessories },
  { name: "Beauty & Health", image: beautyHealth },
  { name: "Sports & Outdoors", image: sportsOutdoors },
  { name: "Toys & Hobbies", image: toysHobbies },
];

const ProductCategories = () => {
  return (
    <section className="product-categories">
      <h2 className="section-title">Browse by Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
