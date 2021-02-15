import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    AOS.init();

    return (
        <footer className="footer">
            <div className="social-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div data-aos="fade-right" data-aos-delay="250" className="social-button d-flex">
                        <a data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" href="" className="fb d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faFacebook} /> </a>
                        <a data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" href="" className="twtr d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faTwitter} /> </a>
                        <a data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" href="" className="insta d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faInstagram} /> </a>
                        <a data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" href="" className="in d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faLinkedin} /> </a>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="250" className="contact-button d-flex justify-content-around align-items-center">
                        <div className="call">WHATSAPP US TO ORDER DELIVERY</div>
                        <div> <FontAwesomeIcon className="footer-icon" icon={faPhone} /> 123-456-789</div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up-right" data-aos-delay="250" className="other-section container">
                <div className="row">
                    <div className="col-lg-5 col-md-10 col-sm-12 about">
                        <div className="logo">
                            <img src="" alt="Tamam's Logo" className="img-fluid" />
                        </div>
                        <div className="des">
                            <p>We are delivery company that provides fast and reliable package transport.</p>
                        </div>
                    </div>
                    <hr className="footer-hr" />
                    <div data-aos="zoom-in" data-aos-delay="250" className="col-lg-4 col-md-8 col-sm-12 footer-services">
                        <h5>Services</h5>
                        <ul>
                            <Link className="link" to=""><li><a className="footer-link" href="">Bussiness Services</a></li></Link>
                            <Link className="link" to=""><li><a className="footer-link" href="">Shop Delivery</a></li></Link>
                            <Link className="link" to=""><li><a className="footer-link" href="">Personal Services</a></li></Link>
                        </ul>
                    </div>
                    <hr className="footer-hr" />
                    <div className="col-lg-3 col-md-8 col-sm-12 customer-care">
                        <h5>Customer Care</h5>
                        <ul>
                            <Link className="link" to="/about-us"><li><a className="footer-link" href="">About Us</a></li></Link>
                            <Link className="link" to="/our-aim"><li><a className="footer-link" href="">Our Aim</a></li></Link>
                            <Link className="link" to="/contact-us"><li><a className="footer-link" href="">Contact Us</a></li></Link>
                        </ul>
                    </div>
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