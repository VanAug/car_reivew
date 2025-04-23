import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AppRoutes from "../../routes";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">Home</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/display">Display</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
