import React from 'react';
import './FooterBanner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FooterBanner = () => {

    AOS.init();
    return (
        <section title="Image Credit - Patryk Kosmider - Fotolia" className="footerBanner d-flex flex-column justify-content-center align-items-start">
           <div data-aos="zoom-in-down" className="col-lg-6 col-md-8">
           <p className="footerBanner-title-before">What We Are</p>
           
            <h2 className="footerBanner-title">We’re Tamam Delivery, your preferred delivery provider in Dubai, United Arab Emirates</h2>
            <p className="footerBanner-para">In today’s fast-paced working environment, let us take care of all your pickup 
            and delivery needs so that you can focus on what you do best. To learn more about what we have to offer, please whatsapp us.</p>
           </div>
        </section>
    );
};

export default FooterBanner;