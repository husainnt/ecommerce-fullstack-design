import React, { useState } from "react";
import "../styles/global.css";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}! ✅`);
    setEmail("");
  };

  return (
    <div className="newsletter-section">
      <h3>Subscribe to our newsletter</h3>
      <p>Get daily news on upcoming offers from many suppliers all over the world</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
