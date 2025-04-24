import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../routes";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/">Home</NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/display">Display</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
