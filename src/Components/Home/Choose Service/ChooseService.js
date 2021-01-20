import React from 'react';
import './ChooseService.css';
import service1 from '../../../Images/service/service1.png';
import service2 from '../../../Images/service/service2.png';
import service3 from '../../../Images/service/service3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseService = () => {

    AOS.init();

    return (
        <section className="chooseSerivce d-flex justify-content-center align-items-center">
            <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <h2 data-aos="zoom-in-up" className="chooseService-title">Choose Delivery Service</h2>
                <div className="chooseService-body d-flex justify-content-around">
                    <div data-aos="fade-right" data-aos-delay="200" class="card">
                        <img src={service1} class="card-img-top" alt="Tamam Next Day Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Next day</h5>
                            <p class="card-text">Flat Free</p>
                            <p className="card-small">Pickup on a given date <br/> Deliver on the Next Day</p>
                            <a href="#" class="btn btn-primary">Order Now</a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="4500" class="card">
                        <img src={service2} class="card-img-top" alt="Tamam Same Day Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Next day</h5>
                            <p class="card-text">Flat Free</p>
                            <p className="card-small">Pickup and Delivery <br/> Within the same day</p>
                            <a href="#" class="btn btn-primary">Order Now</a>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="200" class="card">
                        <img src={service3} class="card-img-top" alt="Tamam On Demand Delivery Service" />
                        <div class="card-body text-center">
                            <h5 class="card-title">On Demand</h5>
                            <p class="card-text">Urgent Deliveries</p>
                            <p className="card-small"> Pickup and Delivery <br/> Within 4 hours</p>
                            <a href="#" class="btn btn-primary">Order Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ChooseService;