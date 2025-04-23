import React from "react";
import "./Navbar.css";
import AppRoutes from "../../routes";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/" className="logo">
              Home
            </a>
          </li>
          <li>
            <a href="/">Review</a>
          </li>
          <li>
            <a href="/">Favorites</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
