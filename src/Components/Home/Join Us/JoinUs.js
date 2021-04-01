import React from 'react';
import './JoinUs.css';
import driver from '../../../Images/joinUs/driver.png';
import partner from '../../../Images/joinUs/partner.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JoinUs = () => {
    AOS.init();
    return (
        <section className="joinUs d-flex justify-content-center align-items-center">
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <p data-aos="zoom-in-up" className="joinUs-title-before">Join Us</p>
                <h2 data-aos="zoom-in-up" className="joinUs-title">Join Our Community</h2>
                <div className="joinUs-body container d-flex justify-content-around">
                    <Link data-aos="fade-right" data-aos-delay="150" title="Image Credit- quoteinspector.com" className="col-md-5 box driver d-flex justify-content-around align-items-center partner-box" to="/become-a-driver">
                            <div className="d-flex flex-column justify-content-around align-items-center">
                                <img src={driver} alt="Tamam become a driver" />
                                <h3>Become a Driver</h3>
                            </div>
                    </Link>
                    <Link data-aos="flip-left" data-aos-delay="150" title="Image Credit- pixabay.com" className="col-md-5 box partner d-flex justify-content-around align-items-center partner-box" to="/become-a-partner">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <img src={partner} alt="Tamam become a partner" />
                                <h3>Become a Partner</h3>
                            </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;