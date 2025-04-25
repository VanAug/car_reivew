import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <h2>Car rev innit.</h2>
          <p>We all love cars ama namna gani.</p>
        </div>
        <div class="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/display">Display</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/signin">Sign in </NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Rev Ride. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
