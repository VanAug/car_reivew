import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AppRoutes from "../../routes";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/display">Display</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </>
  );
};

export default NavBar;
