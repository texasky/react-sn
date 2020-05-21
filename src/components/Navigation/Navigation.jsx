import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div class="navbar__link">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div class="navbar__link">
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div class="navbar__link">
        <NavLink to="/news">News</NavLink>
      </div>
      <div class="navbar__link">
        <NavLink to="/music">Music</NavLink>
      </div>
      <div class="navbar__link">
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
