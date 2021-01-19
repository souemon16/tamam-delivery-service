import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTruckLoading, faLuggageCart, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

    return (
        <div className="service-section container d-flex justify-content-around align-items-center">
            <div className="services d-flex flex-column justify-content-center align-items-center">
                <div className="icon"> <FontAwesomeIcon className="service-icon" icon={faTruck} /></div>
                <h5 className="service-title">Tamam <br/> A-Z Delivery</h5>
                <strong className="hide">Deliver Anything from A-Z point in UAE.</strong>
            </div>
            <div className="services d-flex flex-column justify-content-center align-items-center">
            <div className="icon"> <FontAwesomeIcon className="service-icon" icon={faBusinessTime} /> </div>
                <h5 className="service-title">Tamam <br/> Great Timing</h5>
                <strong className="hide">We always follow time and tidy in delivery.</strong>
            </div>
            <div className="services d-flex flex-column justify-content-center align-items-center">
            <div className="icon"> <FontAwesomeIcon className="service-icon" icon={faLuggageCart} /> </div>
                <h5 className="service-title">Tamam <br/> Take Orders</h5>
                <strong className="hide">We take delivery orders from other company.</strong>
            </div>
            <div className="services d-flex flex-column justify-content-center align-items-center">
            <div className="icon"> <FontAwesomeIcon className="service-icon" icon={faTruckLoading} /> </div>
                <h5 className="service-title">Tamam <br/> Own Transport</h5>
                <strong className="hide">We have our own Transport to deliver things.</strong>
            </div>
        </div>
    );
};

export default Services;