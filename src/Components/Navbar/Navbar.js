import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav d-flex justify-content-between align-items-center">
            <div className="logo">
                <img src="" alt="Tamam Delivery Logo" className="img-fluid"/>
            </div>

            <div className="nav-items d-flex justify-content-around">
                <button className="btn nav-btn">About Us</button>
                <button className="btn nav-btn">Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;