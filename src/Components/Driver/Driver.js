import React from 'react';
import './Driver.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Driver = () => {
    return (
        <section className="be-driver">
            <Navbar />
            <div className="driver-banner d-flex justify-content-center align-items-center">
                <h1>Become A Driver</h1>
            </div>
            <div className="driver-body">
                <h1>Coming Soon</h1>
            </div>
            <Footer />
        </section>
    );
};

export default Driver;