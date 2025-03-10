import React from "react";
import "../styles/global.css";

const Sidebar = () => {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipment",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More categories",
  ];

  return (
    <div className="sidebar">
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
