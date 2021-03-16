import React from 'react';
import './ContactUs.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ContactUs = () => {
    return (
        <section className="contact-us">
            <Navbar />
            <div className="contactUS-banner d-flex justify-content-center align-items-center">
                <h1>Contact Us</h1>
            </div>
            <div className="contactUS-body">
                <h1>Coming Soon</h1>
            </div>
            <Footer />
        </section>
    );
};

export default ContactUs;