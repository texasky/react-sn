import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
