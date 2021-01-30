import React from 'react';
import './FooterBanner.css';

const FooterBanner = () => {
    return (
        <section className="footerBanner d-flex flex-column justify-content-center align-items-start">
           <div>
           <p className="footerBanner-title-before">What We Are</p>
           
            <h2 className="footerBanner-title">We’re Tamam Delivery, your preferred delivery provider in United Arab Emirates</h2>
            <p className="footerBanner-para">In today’s fast-paced working environment, let us take care of all your pickup 
            and delivery needs so that you can focus on what you do best. To learn more about what we have to offer, click on services.</p>
           </div>
        </section>
    );
};

export default FooterBanner;