import React from 'react';
import './OurBenefit.css';
import homeDelivery from '../../../Images/home/delivery-illustator.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const OurBenefit = () => {
    AOS.init();

    return (
        <section className="ourBenefit d-flex justify-content-center align-items-center">
            <div className="row container">
                <div data-aos="fade-right" data-aos-delay="150" className="col-md-6">
                    <p className="ourBenefit-title-before">Your Personal</p>
                    <h2>Cost-Effective Delivery Driver</h2>
                    <p className="ourBenefit-title-after">Whether you want to deliver birthday gifts, important documents, electronics, valuables or product delivery for your small business in Dubai and other emirates in the UAE, we can help you! </p>
                    <ul>
                        <li>Save time with fast deliveries in Dubai, Sharjah and Ajman</li>
                        <li>Less hassle with easy booking process and helpful consultants</li>
                        <li>Reliable and efficient deliveries with trusted friendly drivers</li>
                        <li>Bikes and air-conditioned vans for small to large deliveries</li>
                        <li>Subscriptions and special rates for routine deliveries</li>
                        <li>7 days a week delivery between 8:00am – 10:00pm</li>
                        <li>Efficient and valuable deliveries with transparent price structure</li>
                    </ul>
                    <div className="contact">
                        <a href=""><button className="btn mail"> <FontAwesomeIcon icon={faPaperPlane} /> Mail Us</button></a>
                        <a href=""><button className="btn whatsapp"> <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp Us</button></a>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="150" className="col-md-6">
                    <img src={homeDelivery} alt="Tamam Home Delivery" className="img-fluid"/>
                </div>
            </div>
        </section>
    );
};

export default OurBenefit;