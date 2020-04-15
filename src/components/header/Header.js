import React from 'react';
import logo from "../../assets/images/logo.png"

const Header = ({ getAnchor }) => {

    function changePage(e) {
        e.preventDefault();
        getAnchor(e.target.name);
        document.querySelectorAll(".container header nav a").forEach(link => link.classList.remove("selected"));
        e.target.classList.add("selected");
    }

    return (
        <header>
            <div className = "logo_title">
                <img src = {logo} alt = "Nasa Logo" />
                <h1>Space Explorers</h1>
            </div>
            <nav>
                <a className = "selected" href="/#" name = "" onClick = {changePage}>Home</a>
                <a href="/#" name = "#apod" onClick = {changePage}>Photo Of The Day</a>
                <a href="/#" name = "#byDate" onClick = {changePage}>Photo By Date</a>
            </nav>
        </header>
    );
};

export default Header;