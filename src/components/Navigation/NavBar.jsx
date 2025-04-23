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
        <Link to="/display">Display</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </>
  );
};

export default NavBar;
