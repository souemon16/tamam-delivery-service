import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './OurAim.css';
import tamamMan from '../../Images/our-aim/courier-man.png';

const OurAim = () => {
    return (
        <section className="ourAim">
            <Navbar />
            <div title="Image Credit - pxhere.com" className="ourAim-banner d-flex justify-content-center align-items-center">
                <h1>OUR AIM</h1>
            </div>
            <div className="ourAim-body container">
                <div className="row">
                    <div className="col-lg-6 ourAim-text">
                        <h3>Our Aim</h3>
                        <p className="text-secondary">
                            Our Aim is our Mission of Honesty and Transference based services platform.
                            Since, an Well-Organized Start-up Co. has named "TAMAM DELIVERY SERVICES L.L.C" 
                            promises to serve Flexible, Smart, Safety & Secure. Our eyes on the Global 
                            economic times, there of courses we'll have our extreme efforts, ideas & technologies to
                            overcome a stage of performance i.e. customer's happiness is our Awards. So, 
                            'WE HAVE OUR UNIQUE POWER TRUSTED WORTH TOGETHER'.
                            <br/>
                            <br/>
                            The primary objective of our company is customer satisfaction. Reliability, speed of service,
                            coverage area and value for money are some of the criteria on which the service provided by a delivery
                            company is evaluated. Our Company are also guided by labour rights and employee principles.
                        </p>
                    </div>
                    <div className="col-lg-5 ourAim-img">
                        <img src={tamamMan} alt="Tamam Delivery Man" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default OurAim;