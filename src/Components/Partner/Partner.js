import React from 'react';
import './Partner.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Partner = () => {
    return (
        <section className="be-partner">
            <Navbar />
            <div className="partner-banner d-flex justify-content-center align-items-center">
                <h1>Become A Parnter</h1>
            </div>
            <div className="partner-body container">
                <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                    <h3>Become A Partner</h3>
                </div>
                <div className="col-md-6">
                    <p> We have launched our Delivery Brand Services to gear up at your higher supplies
                    of demands together as well as feel proud to become a delivery partner. All of our
                    Delivery driver are well trained and experienced on customer services. Moreover,
                    well-known location across the UAE. Our dedicated strong delivery en are to respect your business
                    reputation and complaints free services with excellent works handling specially pick & drop to your
                    dear customers which is success of Brand TAMAM DELIVERY SERVICES L.L.C. We always care your business
                    is our on time dealings.
                    </p>
                </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Partner;