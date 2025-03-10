import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // Import from products.js
import homeCategory from "../assets/images/home-soft-chairs.png";
import electronicsCategory from "../assets/images/electronics-headphones.png";

import "../styles/global.css"; // Import CSS

const ProductListing = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id} className="product-card">
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: "150px", height: "150px", objectFit: "cover" }} 
          />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;
