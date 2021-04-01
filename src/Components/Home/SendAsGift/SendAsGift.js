import React from 'react';
import './SendAsGift.css';
import girlWithFlower from '../../../Images/girls with flower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SendAsGift = () => {
    AOS.init();
    return (
        <section className="sendAsGift d-flex justify-content-center align-items-center">
            <div className="row container d-flex justify-content-center align-items-center">
                <div data-aos="fade-right" data-aos-delay="150" className="col-md-6">
                    <p className="sendAsGift-title-before">Your Personal</p>
                    <h2>Surprise Delivery Driver</h2>
                    <p className="sendAsGift-title-after">Whether you want to deliver birthday gifts, parcels, electronics, valuables or product delivery for your small business in Dubai and send product to other emirates in the UAE, we can help you! </p>
                    <ul>
                        <li>Send your gift for your beloved ones</li>
                        <li>You have no time, no problem. Here we are for you </li>
                    </ul>
                    <div className="contact">
                        <a rel="noreferrer" href="/#"><button className="btn mail"> <FontAwesomeIcon icon={faPaperPlane} /> Mail Us</button></a>
                        <a target="_blank" rel="noreferrer" href="https://wa.me/+971563667816"><button className="btn whatsapp"> <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us</button></a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="150" className="col-md-6">
                    <img src={girlWithFlower} alt="Tamam Home Delivery" className="img-fluid girlWithFlower" />
                </div>
            </div>
        </section>
    );
};

export default SendAsGift;