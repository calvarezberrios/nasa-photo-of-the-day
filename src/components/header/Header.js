import React from 'react';
import logo from "../../assets/images/logo.png"

const Header = () => {

    return (
        <header>
            <div className = "logo_title">
                <img src = {logo} alt = "Nasa Logo" />
                <h1>Space Explorers</h1>
            </div>
            <nav>
                <a href = "/" >Home</a>
                <a href = "/#apod" >Photo Of The Day</a>
                <a href = "/#byDate" >Photo By Date</a>
            </nav>
        </header>
    );
};

export default Header;