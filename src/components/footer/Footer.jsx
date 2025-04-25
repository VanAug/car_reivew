import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Car rev innit.</h2>
          <p>We all love cars ama namna gani.</p>
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
