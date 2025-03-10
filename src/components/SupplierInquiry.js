import React, { useState } from "react";
import "../styles/global.css";

const SupplierInquiry = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    details: "",
    quantity: "",
    unit: "Pcs",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry Sent! ✅");
  };

  return (
    <div className="supplier-inquiry">
      <div className="inquiry-text">
        <h3>An easy way to send requests to all suppliers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <input type="text" name="itemName" placeholder="What item you need?" required onChange={handleChange} />
        <textarea name="details" placeholder="Type more details" required onChange={handleChange}></textarea>
        <div className="quantity-container">
          <input type="number" name="quantity" placeholder="Quantity" required onChange={handleChange} />
          <select name="unit" onChange={handleChange}>
            <option value="Pcs">Pcs</option>
            <option value="Kg">Kg</option>
            <option value="Boxes">Boxes</option>
          </select>
        </div>
        <button type="submit">Send Inquiry</button>
      </form>
    </div>
  );
};

export default SupplierInquiry;
