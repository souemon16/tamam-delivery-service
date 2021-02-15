import React from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <section className="aboutUs">
            <Navbar />
            <div className="aboutUs-banner d-flex justify-content-center align-items-center">
                <h1>About Us</h1>
            </div>

            <div className="aboutUs-body container">
                <div className="row">
                <div className="col-sm-6 aboutUs-long">
                    <h3>Tamam is on a Mission to Transform the Way Customers Things</h3>
                    <p className="text-secondary">The world is growing fast and the people's demands are very high.
                    Now the time has come to introduce with the trusted and reliable Receiving & Delivery
                    systems. 
                    <br/>
                    According to your commercial and None Commercial demands, we are the Unique efficient Team, "TAMAM DELIVERY SERVICES" to co-operate with your targeted &
                    expected products delivering to your customer's doors. And we feel proud to become your strong committed Delivery Partner.
                    <br/>
                    <br/>
                    Digital Solution for your business. We are commited to provide our customer exceptional service while offering our employee the best training.
                    <br/>
                    We change the way you access the world from the palm of your hand. For all your needs from here to there, big and small, to pick or drop, we'll drop it for you.
                    </p>
                </div>
                <div className="col-sm-5 aboutUs-short">
                    <div>
                        <h3>Ouality Service</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam culpa eaque suscipit, eveniet nobis ab porro quas possimus deleniti numquam.</p>
                    </div>
                    <hr className="aboutUs-hr" />
                    <div>
                        <h3>Fast Delivery</h3>
                        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eligendi a dolore maiores. Molestiae aliquam, aspernatur voluptatibus facilis ut quis!</p>
                    </div>
                    <hr className="aboutUs-hr" />
                    <div>
                        <h3>Affordable Prices</h3>
                        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eligendi a dolore maiores. Molestiae aliquam, aspernatur voluptatibus facilis ut quis!</p>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default AboutUs;