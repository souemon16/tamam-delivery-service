import React from 'react';
import './SendAsGift.css';
import girlWithFlower from '../../../Images/girls with flower.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SendAsGift = () => {
    AOS.init();

    return (
        <section className="sendAsGift d-flex justify-content-center align-items-center">
            <div className="row container d-flex justify-content-center align-items-center">
                <div data-aos="fade-right" data-aos-delay="150" className="col-md-6">
                    <p className="sendAsGift-title-before">Your Personal</p>
                    <h2>Surprise Delivery Driver</h2>
                    <p className="sendAsGift-title-after">Whether you want to deliver birthday gifts, documents, electronics, valuables or product delivery for your small business in Dubai and send product to other emirates in the UAE, we can help you! </p>
                    <ul>
                        <li>Send your gift for you beloved ones</li>
                        <li>You have no time, no problem. Here we are for you </li>
                    </ul>
                    <div className="contact">
                        <a href=""><button className="btn mail"> <FontAwesomeIcon icon={faPaperPlane} /> Mail Us</button></a>
                        <a href=""><button className="btn whatsapp"> <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp Us</button></a>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="150" className="col-md-6">
                    <img src={girlWithFlower} alt="Tamam Home Delivery" className="img-fluid"/>
                </div>
            </div>
        </section>
    );
};

export default SendAsGift;