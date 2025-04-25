import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <nav>
      <div className="logo">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>
          Home
        </NavLink>
      </div>
      <ul className="nav-links">
        {user ? (
          <>
            <li className="greeting">{user.firstName}</li>
            <li>
              <NavLink className="logout-btn" onClick={handleLogout}>
                Log Out
              </NavLink>
            </li>
            <li>
              <NavLink to="/display" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Display
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Favorites
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signup" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/display" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Display
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
