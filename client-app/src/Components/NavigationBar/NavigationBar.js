import "./NavigationBar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div>
      <nav class="navbar">
        <div class="nav--items">
          <Link to="/">Shop</Link>
          <Link to="/contact">Get in touch</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}
