import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/display"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Display
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
