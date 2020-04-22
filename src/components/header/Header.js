import React, { useState } from 'react';
import logo from "../../assets/images/logo.png";
import styled from "styled-components";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

const HeaderSection = styled.header`
    width: 100%;
    background: #B8D2FF;
    padding: 20px 0 0 0;

    .logo_title {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .navbar {

        .mr-auto, .navbar-toggler {
            margin: 0 auto;
        }

        .navbar-toggler {
            font-size: 3rem;
        }

        ul {
            font-size: 1.6rem;
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        
    }
`;

const Header = ({ getAnchor, setData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function changePage(e) {
        if(isOpen) {
            toggle();
        }
        e.preventDefault();

        if (!e.target.className.includes("selected")) {

            getAnchor(e.target.name);
            document.querySelectorAll(".container header nav a").forEach(link => link.classList.remove("selected"));
            e.target.classList.add("selected");
            setData();
            
        }
    }

    return (
        <HeaderSection>
            <div className="logo_title">
                <img width="112" height="112" src={logo} alt="Nasa Logo" />
                <h1>Space Explorers</h1>
            </div>
            <Navbar light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className = "selected" href="/#" name = "" onClick = {changePage}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#" name = "#apod" onClick = {changePage}>Photo Of The Day</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#" name = "#byDate" onClick = {changePage}>Photo By Date</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            {/* <nav>
                <a className = "selected" href="/#" name = "" onClick = {changePage}>Home</a>
                <a href="/#" name = "#apod" onClick = {changePage}>Photo Of The Day</a>
                <a href="/#" name = "#byDate" onClick = {changePage}>Photo By Date</a>
            </nav> */}
        </HeaderSection>
    );
};

export default Header;