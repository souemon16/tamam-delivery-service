import React from 'react';
import './Description.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import deliveryMan from '../../../Images/deliveryman.png';

const Description = () => {
    return (
        <section className="description d-flex align-items-center justify-content-center">
            <div className="row container">
                
                <div className="col-sm-6 d-flex flex-column justify-content-center">
                    <h1 className="description-title">We Pick Up & Deliver</h1>
                    <p className="description-detail">Send or receive anything from point
                    A to B by simply booking the Shyft Go pick up and drop off service.
                    Whether you require on-demand, same day or next day delivery, we have
                    you covered. We can deliver anywhere in Dubai, Abudhabi, Sharjah and
                    Ajman 7 days a week with bikes or vans depending on your needs.
                    Our trusted drivers look forward to helping you run your errands
                    smoothly.</p>
                    <div className="description-button d-flex">
                        <a href="#"><button className="btn mail-us">Mail Us</button></a>
                        <a href="#"><button className="btn whatsapp"><FontAwesomeIcon icon={faWhatsapp} />Whatsapp Us</button></a>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={deliveryMan} alt="Tamam Delivery Man" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default Description;