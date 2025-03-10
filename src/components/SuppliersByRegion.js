import React from "react";
import "../styles/global.css";

const suppliers = [
  { country: "United Arab Emirates", flag: "/assets/uae.png", link: "shopname.ae" },
  { country: "Australia", flag: "/assets/australia.png", link: "shopname.au" },
  { country: "United States", flag: "/assets/usa.png", link: "shopname.us" },
  { country: "Russia", flag: "/assets/russia.png", link: "shopname.ru" },
  { country: "Italy", flag: "/assets/italy.png", link: "shopname.it" },
  { country: "Denmark", flag: "/assets/denmark.png", link: "denmark.com.dk" },
  { country: "France", flag: "/assets/france.png", link: "shopname.fr" },
  { country: "China", flag: "/assets/china.png", link: "shopname.cn" },
  { country: "Great Britain", flag: "/assets/uk.png", link: "shopname.co.uk" },
];

const SuppliersByRegion = () => {
  return (
    <div className="suppliers-section">
      <h3>Suppliers by Region</h3>
      <div className="suppliers-grid">
        {suppliers.map((supplier, index) => (
          <a key={index} href={`https://${supplier.link}`} className="supplier-card" target="_blank" rel="noopener noreferrer">
            <img src={supplier.flag} alt={supplier.country} />
            <p>{supplier.country}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SuppliersByRegion;
