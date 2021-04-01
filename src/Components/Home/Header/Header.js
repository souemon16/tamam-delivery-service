import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Header.css';
import bottomScrew from '../../../Images/header-screw.png';

const Header = () => {
    return (
        <>
        <div className="header">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <Navbar />
                    <div title="Image Credit - piqsels.com" className="carousel-item active carousel-1">
                    <div className="row">
                        <div className="col-12 d-flex flex-column align-items-start justify-content-center">
                            <h4 className="display-5 bolder carousel-title carousel-title-1">Tamam Delivery Services L.L.C</h4>
                            <p className="display-5 carousel-detail">Pick Up & Delivery Service</p>
                            <p className="carousel-detail-2"> Pickup anything from Dubai & <br/> Deliver anywhere in UAE within 4 hours 7 days a week</p>
                        </div>

                    </div>
                    </div>
                    <div title="Image Credit- hippopx.com" className="carousel-item carousel-2">
                    <div className="row">
                        <div className="col-12 d-flex flex-column align-items-start justify-content-center">
                          <h4 className="display-5 bolder carousel-title carousel-title-2">Tamam Delivery Services L.L.C</h4>
                            <p className="display-5 carousel-detail">Your Trusted Delivery Partner</p>
                            <p className="carousel-detail-2">Tamam your best delivery partner to develop your business, <br/> let us help you to grow your business</p>
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
                <div className="bottom-img">
                <img src={bottomScrew} alt="Tamam's Carousel Screw" className="img-fluid"/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;