import React from 'react';
import './DetailedService.css';
import icon1 from '../../../Images/icons/about-01.png';
import icon2 from '../../../Images/icons/about-02.png';
import tamamMan from '../../../Images/man with box.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DetailedService = () => {
    AOS.init();

    return (
        <section className="detailed-service">
            <div className="row container">
                <div data-aos="fade-down" data-aos-delay="200" className="col-lg-6 detailedService-body d-flex flex-column justify-content-center align-items-start">
                    <p className="detailedService-title-before">Our Experiences</p>
                    <h1 className="detailed-service-title">Well Experienced <br/> Driver </h1>
                    <p className="detailed-service-des">We have well experienced driver expert about Dubai as well as UAE.</p>
                    <div className='detailed'>
                        <div className="service-1 d-flex justify-content-start">
                            <div className="icon"><img src={icon1} alt="Tamam's Fast Delivery" className="img-fluid" /></div>
                            <div className="service-detail">
                                <h3>Fast Delivery</h3>
                                <p>We believe in time so save time with our fast delivery services, we collect from Dubai and deliver all around the UAE</p>
                            </div>
                        </div>
                        <div className="service-2 d-flex justify-content-start">
                            <div className="icon"><img src={icon2} alt="Tamam's secured service" className="img-fluid" /></div>
                            <div className="service-detail">
                                <h3>Secured Services</h3>
                                <p>We allows more than two step verification and we have reliable and efficient deliveries with trusted friendly drivers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={tamamMan} alt="Tamam Courier Man" className="img-fluid detailedService-img" />
                </div>
            </div>
        </section>
    );
};

export default DetailedService;