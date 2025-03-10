import React from "react";
import "../styles/global.css"; 

// Import images properly
import jeansShorts from "../assets/images/jeans-shorts.png";
import winterCoat from "../assets/images/winter-coat.png";
import wallet from "../assets/images/wallet.png";
import leatherWallet from "../assets/images/leather-wallet.png";
import cameraBag from "../assets/images/camera-bag.png";
import headset from "../assets/images/headset.png";
import smartwatch from "../assets/images/smartwatch.png";
import leatherBag from "../assets/images/leather-bag.png";
import jeansBag from "../assets/images/jeans-bag.png";

const recommendedProducts = [
  { id: 1, name: "Jeans Shorts", price: 10.3, image: jeansShorts },
  { id: 2, name: "Winter Coat", price: 12.5, image: winterCoat },
  { id: 3, name: "Wallet", price: 34, image: wallet },
  { id: 4, name: "Leather Wallet", price: 99, image: leatherWallet },
  { id: 5, name: "Camera Bag", price: 9.99, image: cameraBag },
  { id: 6, name: "Headset", price: 8.99, image: headset },
  { id: 7, name: "Smartwatch", price: 10.3, image: smartwatch },
  { id: 8, name: "Leather Bag", price: 10.3, image: leatherBag },
  { id: 9, name: "Jeans Bag", price: 80.95, image: jeansBag },
];

const RecommendedItems = () => {
  return (
    <div className="recommended-section">
      <h3>Recommended Items</h3>
      <div className="recommended-grid">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="recommended-card">
            <img src={product.image} alt={product.name} />
            <p className="price">${product.price.toFixed(2)}</p>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
