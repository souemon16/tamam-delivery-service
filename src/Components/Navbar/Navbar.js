import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/logo.png';

const Navbar = () => {

    return (
        <nav className="nav d-flex justify-content-between align-items-center">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Tamam Delivery Logo" className="img-fluid"/></Link>
            </div>
            <div className="nav-items d-flex justify-content-around">
            <Link to="/about-us"><button className="btn nav-btn">About Us</button> </Link>
            <Link to="/our-aim"><button className="btn nav-btn">Our Aim</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;