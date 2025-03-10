import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css"; // Ensure global styles are loaded

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> {/* This is the ONLY place Router should be used */}
    <App />
  </BrowserRouter>
);
