import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="social-button d-flex">
                        <a href="" className="fb d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faFacebook} /> </a>
                        <a href="" className="twtr d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faTwitter} /> </a>
                        <a href="" className="insta d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faInstagram} /> </a>
                        <a href="" className="in d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faLinkedin} /> </a>
                    </div>
                    <div className="contact-button d-flex justify-content-around align-items-center">
                        <div>CALL US TO ORDER DELIVERY</div>
                        <div> <FontAwesomeIcon className="footer-icon" icon={faPhone} /> 123-456-789</div>
                    </div>
                </div>
            </div>

            <div className="other-section container d-flex justify-content-around align-items-center">
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
                        <li><a className="footer-link" href="">Bussiness Services</a></li>
                        <li><a className="footer-link" href="">Shop Delivery</a></li>
                        <li><a className="footer-link" href="">Personal Services</a></li>
                    </ul>
                </div>
                <div className="customer-care">
                <h5>Customer Care</h5>
                <ul>
                <li><a  className="footer-link" href="">Contact Us</a></li>
                <li><a  className="footer-link" href="">About Us</a></li>
                <li><a  className="footer-link" href="">News & Articles</a></li>
                </ul>
                </div>
            </div>

            <div className="copyright-section d-flex justify-content-between align-items-center">
            <p><strong className="link"><a href="">Tamam L.L.C</a></strong> @ 2021. All Rights Reserved</p>
            <p><strong className="link"><a href="">Terms of Use</a></strong> and <strong className="link"><a href="">Privacy Policy</a></strong></p>
            </div>
        </footer>
    );
};

export default Footer;