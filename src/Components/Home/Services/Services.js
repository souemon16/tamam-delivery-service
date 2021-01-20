import React from 'react';
import './Services.css';
import service1 from '../../../Images/header service/service1.png';
import service2 from '../../../Images/header service/service2.png';
import service3 from '../../../Images/header service/service3.png';
import service4 from '../../../Images/header service/service4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTruckLoading, faLuggageCart, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

    AOS.init();

    return (
        <div className="service-section container d-flex justify-content-around align-items-center">
            <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="5000" className="services d-flex flex-column justify-content-center align-items-center">
                <div className="icon"> <img className="service-icon" src={service1} alt="Tamam's A-Z Delivery" className="img-fluid"/></div>
                <div>
                <h5 className="service-title">Tamam <br/> A-Z Delivery</h5>
                <p className="hide">Deliver Anything from <br/> A-Z point in UAE.</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="5000" className="services d-flex flex-column justify-content-center align-items-center">
            <div className="icon"> <img className="service-icon" src={service2} alt="Tamam's Great Timing" className="img-fluid"/> </div>
                <div>
                <h5 className="service-title">Tamam <br/> Great Timing</h5>
                <p className="hide">We always follow time and tidy in delivery.</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="5000" className="services d-flex flex-column justify-content-center align-items-center">
            <div className="icon"> <img className="service-icon" src={service3} alt="Tamam's Take Orders" className="img-fluid"/> </div>
                <h5 className="service-title">Tamam <br/> Take Orders</h5>
                <p className="hide">We take delivery orders from other company.</p>
            </div>
            <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="5000" className="services d-flex flex-column justify-content-center align-items-center">
            <div className="icon"> <img className="service-icon" src={service4} alt="Tamam's 24hours Support" className="img-fluid"/> </div>
                <h5 className="service-title">Tamam <br/> Own Transport</h5>
                <p className="hide">We have our own Transport to deliver things.</p>
            </div>
        </div>
    );
};

export default Services;