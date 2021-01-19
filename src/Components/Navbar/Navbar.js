import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav d-flex justify-content-between align-items-center">
            <div className="logo">
                <img src="" alt="Tamam Delivery Logo" className="img-fluid"/>
            </div>

            <div className="nav-items d-flex justify-content-around">
                <button className="btn btn-outline nav-btn app">Tamam App</button>
                <button className="btn nav-btn whatsapp">Whatsapp Us</button>
            </div>
        </nav>
    );
};

export default Navbar;