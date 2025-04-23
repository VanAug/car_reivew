import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
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
