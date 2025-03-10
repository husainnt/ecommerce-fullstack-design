import React from "react";
import "../styles/global.css";

const CategorySection = ({ title, products }) => {
  return (
    <div className="category-section">
      <h3>{title}</h3>
      <button className="source-now-btn">Source now</button>
      <div className="category-items">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="category-card">
              <img src={product.image} alt={product.name} loading="lazy" />
              <p>{product.name}</p>
              <span className="category-price">From ${product.price}</span>
            </div>
          ))
        ) : (
          <p className="error-message">No products available</p>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
