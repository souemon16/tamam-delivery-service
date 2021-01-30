import React from 'react';
import './ChooseService.css';
import service1 from '../../../Images/service/service1.png';
import service2 from '../../../Images/service/service2.png';
import service3 from '../../../Images/service/service3.png';
import service4 from '../../../Images/service/service4.png';
import service5 from '../../../Images/service/service5.png';
import service6 from '../../../Images/service/service6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseService = () => {

    AOS.init();

    return (
        <section className="chooseSerivce d-flex justify-content-center align-items-center">
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <p data-aos="zoom-in-up" className="chooseService-title-before">Our Services</p>
                <h2 data-aos="zoom-in-up" className="chooseService-title">Choose Delivery Service</h2>
                <div className="chooseService-body d-flex justify-content-center">

                    <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="4500" class="card">
                        <img src={service2} class="card-img-top" alt="Tamam Same Day Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Same day</h5>
                            <p class="card-text"><FontAwesomeIcon icon={faCheck} /> Cost Effective</p>
                            <p className="card-small">Pickup and Delivery <br/> Within the same day</p>
                            <a data-hover="order now!" href="#" class="btn"><div>Want It?</div></a>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="200" class="card">
                        <img src={service1} class="card-img-top" alt="Tamam Next Day Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Next day</h5>
                            <p class="card-text"><FontAwesomeIcon icon={faCheck} /> Flat Free</p>
                            <p className="card-small">Pickup on a given date <br/> Deliver on the Next Day</p>
                            <a data-hover="order now!" href="#" class="btn"><div>Want It?</div></a>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="200" class="card">
                        <img src={service3} class="card-img-top" alt="Tamam On Demand Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Urgent Deliveries</h5>
                            <p class="card-text"><FontAwesomeIcon icon={faCheck} />  Fast and Effective</p>
                            <p className="card-small"> Pickup and Delivery <br/> Within 4 hours</p>
                            <a data-hover="order now!" href="#" class="btn"><div>Want It?</div></a>
                        </div>
                    </div>


                    <div data-aos="fade-right" data-aos-delay="200" class="card">
                        <img src={service4} class="card-img-top" alt="Tamam Next Day Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Cash On Delivery</h5>
                            <p class="card-text"><FontAwesomeIcon icon={faCheck} /> We Believe You</p>
                            <p className="card-small">Pickup and Delivery <br/> Within Your Schedule</p>
                            <a data-hover="order now!" href="#" class="btn"><div>Want It?</div></a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="4500" class="card">
                        <img src={service5} class="card-img-top" alt="Tamam Same Day Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Cost Effective</h5>
                            <p class="card-text"><FontAwesomeIcon icon={faCheck} /> Save the best with us</p>
                            <p className="card-small">Pickup and Delivery <br/> Within Your Schedule</p>
                            <a data-hover="order now!" href="#" class="btn"><div>Want It?</div></a>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="200" class="card">
                        <img src={service6} class="card-img-top" alt="Tamam On Demand Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Safe & Secure</h5>
                            <p class="card-text"><FontAwesomeIcon icon={faCheck} />  Reliable Service</p>
                            <p className="card-small"> Pickup and Delivery <br/> Within Your Schedule</p>
                            <a data-hover="order now!" href="#" class="btn"><div>Want It?</div></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseService;