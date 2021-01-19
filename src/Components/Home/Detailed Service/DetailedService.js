import React from 'react';
import './DetailedService.css';
import icon1 from '../../../Images/icons/about-01.png';
import icon2 from '../../../Images/icons/about-02.png';
import courierMan from '../../../Images/about-men.png';

const DetailedService = () => {
    return (
        <section className="detailed-service">
            <div className="row container-fluid">
                <div className="col-sm-6">
                    <img src={courierMan} alt="Tamam Courier Man" className="img-fluid" />
                </div>
                <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="detailed-service-title">25+ Experiences in Delivery Service</h1>
                    <p className="detailed-service-des">There anyone who loves or pursues nor desires to obtain pain of itself, bet it is pain, but because occasionally can packages as their default.</p>
                    <div className='detailed'>
                        <div className="service-1 d-flex justify-content-start">
                            <div className="icon"><img src={icon1} alt="" className="img-fluid" /></div>
                            <div className="service-detail">
                                <h3>Fast Delivery</h3>
                                <p>We believe in time so save time with fast deliveries in Dubai, Abudhabi, Sharjah and Ajman</p>
                            </div>
                        </div>
                        <div className="service-2 d-flex justify-content-start">
                            <div className="icon"><img src={icon2} alt="" className="img-fluid" /></div>
                            <div className="service-detail">
                                <h3>Secured Services</h3>
                                <p>We allows more than two step verification and we have reliable and efficient deliveries with trusted friendly drivers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedService;