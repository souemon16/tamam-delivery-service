import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-section">
                <div className="container-fluid d-flex">
                    <div className="social-button d-flex">
                        <div className="fb"> <FontAwesomeIcon icon={faFacebook} /> </div>
                        <div className="twtr"> <FontAwesomeIcon icon={faTwitter} /> </div>
                        <div className="insta"> <FontAwesomeIcon icon={faInstagram} /> </div>
                        <div className="in"> <FontAwesomeIcon icon={faLinkedin} /> </div>
                    </div>
                    <div className="contact-button d-flex">
                        <div>CALL US TO ORDER DELIVERY</div>
                        <div> <FontAwesomeIcon icon={faPhone} /> 123-456-789</div>
                    </div>
                </div>
            </div>

            <div className="other-section container">
                <div className="about">
                    <div className="logo">
                        <img src="" alt="Tamam's Logo" className="img-fluid" />
                    </div>
                    <div className="des">
                        <p>We are courier company that provides fast and reliable package transport.</p>
                    </div>
                </div>
                <div className="footer-services">
                    <h5>Services</h5>
                    <ul>
                        <li><a href="">Bussiness Services</a></li>
                        <li><a href="">Shop Delivery</a></li>
                        <li><a href="">Personal Services</a></li>
                    </ul>
                </div>
                <div className="customer-care">
                <h5>Customer Care</h5>
                <li><a href="">Contact Us</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">News & Articles</a></li>
                </div>
            </div>

            <div className="copyright-section">
            <p><strong className="link">Tamam L.L.C</strong> @ 2021. All Rights Reserved</p>
            <p><strong className="link">Terms of Use</strong> and <strong className="link">Privacy Policy</strong></p>
            </div>
        </footer>
    );
};

export default Footer;