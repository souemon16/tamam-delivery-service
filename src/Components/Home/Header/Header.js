import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Header.css';
import carousel1 from '../../../Images/car1.png';
import carousel2 from '../../../Images/car2.png';
import Services from '../Services/Services';

const Header = () => {
    return (
        <>
        <div className="header">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <Navbar />
                    <div className="carousel-item active carousel-1">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="display-5 bolder carousel-title carousel-title-1">Tamam Delivery Service</h4>
                            <p className="display-5 carousel-detail">Pick Up & Delivery Service</p>
                            <p className="carousel-detail-2"> Pickup anything from Dubai & <br/> Deliver anything in UAE within 4 hours 7 days a week</p>
                            {/* <a className="btn btn-outline-dark" role="button" href="#">Buy Now</a> */}
                        </div>

                        <div className="col-md-5">
                            <img src={carousel1} className="d-block w-100 img" alt="Tamam Delivery Serivces" />
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item carousel-2">
                    <div className="row align-items-center">
                    <div className="col-md-5">
                            <img src={carousel2} className="d-block w-100 img" alt="Tamam Delivery Serivces" />
                        </div>
                        <div className="col-md-7">
                          <h4 className="display-5 bolder carousel-title carousel-title-2">Tamam Delivery Service</h4>
                            <p className="display-5 carousel-detail">Take orders from other company</p>
                            <p className="carousel-detail-2">Take anything as a order from other company & <br/> Deliver it within 4 hours 7 days a week</p>
                        </div> 
                    </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
        </>
    );
};

export default Header;