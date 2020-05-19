import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img className="app-logo" src={logo} height="70px" width="70px" alt="Logo" />
        </header>
    )

}

export default Header;