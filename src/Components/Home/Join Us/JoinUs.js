import React from 'react';
import './JoinUs.css';
import driver from '../../../Images/joinUs/driver.png';
import partner from '../../../Images/joinUs/partner.png';

const JoinUs = () => {
    return (
        <section className="joinUs d-flex justify-content-center align-items-center">
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <p data-aos="zoom-in-up" className="joinUs-title-before">Join Us</p>
                <h2 data-aos="zoom-in-up" className="joinUs-title">Join Our Community</h2>

                <div className="joinUs-body container d-flex justify-content-around ">

                <div data-aos="fade-right" data-aos-delay="150" className="col-md-5 driver d-flex justify-content-around align-items-center">
                    <a className="partner-box" href="">
                        <div className="d-flex flex-column justify-content-around align-items-center">
                            <img src={driver} alt=""/>
                            <h3>Become a Driver</h3>
                        </div>
                    </a>
                </div>

                <div data-aos="fade-right" data-aos-delay="150" className="col-md-5 partner d-flex justify-content-around align-items-center">
                    <a className="partner-box" href="">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={partner} alt=""/>
                            <h3>Become a Partner</h3>
                        </div>
                    </a>
                </div>

                </div>
            </div>
        </section>
    );
};

export default JoinUs;