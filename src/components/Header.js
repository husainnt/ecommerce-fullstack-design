import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.png" alt="Brand Logo" className="brand-logo" />
        </Link>

        {/* Search Bar */}
        <form className="d-flex search-bar">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>

        {/* Right Side Menu */}
        <div className="navbar-nav ms-auto">
          <Link to="/profile" className="nav-item nav-link">Profile</Link>
          <Link to="/messages" className="nav-item nav-link">Messages</Link>
          <Link to="/orders" className="nav-item nav-link">Orders</Link>
          <Link to="/cart" className="nav-item nav-link">
            <i className="bi bi-cart"></i> My Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
