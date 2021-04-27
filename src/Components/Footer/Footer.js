import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import logoFooter from '../../Images/logo-footer.png';

const Footer = () => {

    AOS.init();

    return (
        <footer className="footer">
            <div className="social-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div data-aos="fade-right" data-aos-delay="250" className="social-button d-flex">
                        <a data-aos="zoom-in" rel="noreferrer" data-aos-delay="300" data-aos-duration="1000" target="_blank" href="https://www.facebook.com/tamamdelivery" className="fb d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faFacebook} /> </a>
                        <a data-aos="zoom-in" rel="noreferrer" data-aos-delay="300" data-aos-duration="1000" target="_blank" href="https://twitter.com/tamamdelivery" className="twtr d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faTwitter} /> </a>
                        <a data-aos="zoom-in" rel="noreferrer" data-aos-delay="300" data-aos-duration="1000" target="_blank" href="https://www.instagram.com/tamamdelivery/" className="insta d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faInstagram} /> </a>
                        <a data-aos="zoom-in" rel="noreferrer" data-aos-delay="300" data-aos-duration="1000" target="_blank" href="https://www.linkedin.com/in/tamamdelivery/" className="in d-flex justify-content-center align-items-center"> <FontAwesomeIcon className="footer-icon" icon={faLinkedin} /> </a>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="250" className="contact-button d-flex justify-content-around align-items-center">
                        <div className="call">WHATSAPP US TO ORDER DELIVERY </div>
                        <div> <FontAwesomeIcon className="footer-icon" icon={faPhone} /> +971 56 366 7816 </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up-right" data-aos-delay="250" className="other-section container">
                <div className="row">
                    <div className="col-lg-5 col-md-10 col-sm-12 about">
                        <Link to='/'>
                        <div className="footer-logo">
                            <img src={logoFooter} alt="Tamam's Logo" className="img-fluid" />
                        </div>
                        </Link>
                        <div className="des">
                            <p>We are delivery company that provides fast and reliable package transport. <br/> For any details contact us: info@tamamdelivery.com </p>
                        </div>
                    </div>
                    <hr className="footer-hr" />
                    <div data-aos="zoom-in" data-aos-delay="250" className="col-lg-4 col-md-8 col-sm-12 footer-services">
                        <h5>Services</h5>
                        <ul>
                            <Link className="footer-link" to=""><li>Bussiness Services</li></Link>
                            <Link className="footer-link" to=""><li>Shop Delivery</li></Link>
                            <Link className="footer-link" to=""><li>Personal Services</li></Link>
                        </ul>
                    </div>
                    <hr className="footer-hr" />
                    <div className="col-lg-3 col-md-8 col-sm-12 customer-care">
                        <h5>Customer Care</h5>
                        <ul>
                            <Link className="footer-link" to="/about-us"><li>About Us</li></Link>
                            <Link className="footer-link" to="/our-aim"><li>Our Aim</li></Link>
                            <Link className="footer-link" to="/contact-us"><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="copyright-section d-flex justify-content-between align-items-center">
                <p><strong className="link"><a href="/#">Tamam L.L.C</a></strong> @ 2021. All Rights Reserved</p>
                <p><strong className="link"><a href="/#">Terms of Use</a></strong> and <strong className="link"><a href="/#">Privacy Policy</a></strong></p>
            </div>
        </footer>
    );
};

export default Footer;