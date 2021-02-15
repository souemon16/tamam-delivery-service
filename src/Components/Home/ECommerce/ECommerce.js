import React from 'react';
import './ECommerce.css';
import unusedThings from '../../../Images/unused things.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ECommerce = () => {

    AOS.init();

    return (
        <section className="e-commerce d-flex align-items-center justify-content-center">
        <div className="row container">
            
        <div data-aos="fade-right" className="col-md-6">
                <img  src={unusedThings} alt="Tamam Delivery Man" className="img-fluid" />
            </div>

            <div data-aos="fade-left" data-aos-offset="300" className="col-md-6 d-flex flex-column justify-content-center">
                <p className="title-before">Spread your business with us</p>
                <h1 className="e-commerce-title">Are you have a small business? <br/> Are you SME? <br/> E-Commerce seller? Social SELLER?</h1>
                <p className="e-commerce-detail">Let us help you increase your Business efficiency by providing best service with our well experiences driver.</p>
                <div className="e-commerce-button d-flex">
                    <a href="#"><button className="btn mail-us"> <FontAwesomeIcon icon={faPaperPlane} /> Get In Touch With Us </button></a>
                    {/* <a href="#"><button className="btn whatsapp"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp Us</button></a> */}
                </div>
            </div>
            
        </div>
    </section>
    );
};

export default ECommerce;