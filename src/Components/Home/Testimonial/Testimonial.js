import React from 'react';
import './Testimonial.css';
import client1 from '../../../Images/client/client1.jpg';
import client2 from '../../../Images/client/client2.jpg';
import client3 from '../../../Images/client/client3.jpg';


const Testimonial = () => {

    return (
        <section className="testimonial d-flex justify-content-center align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <p className="testimonial-title-before">Our Clients</p>
                <h2 className="testimonial-title">Hear from Customers</h2>
                <div className="testimonial-body d-flex justify-content-center align-items-center">
                    <div className="speech d-flex flex-column justify-content-center align-items-center">
                        <p>"Shyft helps me with my product deliveries to customers every month.
                    They are always reliable and my business has been running more smoothly since got them as partner"</p>
                        <div className="person">
                            <img src={client1} alt="Tamam Testimonial from Yagasina Puilam" className="img-fluid" />
                            <h5 className="name">Yagasina Puilam</h5>
                        </div>
                    </div>
                    <div className="speech d-flex flex-column justify-content-center align-items-center">
                        <p>"Forgot my charger, used Shyft Go to swiftly get it delivered to my office! Saved on productive time.
                     Got product very safely and fully okay. Not a single problem in it"</p>
                        <div className="person">
                            <img src={client2} alt="Tamam Testimonial" className="img-fluid" />
                            <h5 className="name">Angelina Russy</h5>
                        </div>
                    </div>
                    <div className="speech d-flex flex-column justify-content-center align-items-center">
                        <p>"I have been using the ‘Pickup & Drop’ service routinely to send to my friend books and other
                     goodies often! This has been a life saver during the COVID period"</p>
                        <div className="person">
                            <img src={client3} alt="Tamam Testimonial" className="img-fluid" />
                            <h5 className="name">Md. Ali Ashraf</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;