import React from 'react';
import Description from './Description/Description';
import Header from './Header/Header';
import Services from './Services/Services';
import DetailedService from './Detailed Service/DetailedService';
import OurBenefit from './Our Benefit/OurBenefit';
import Testimonial from './Testimonial/Testimonial';
import ChooseService from './Choose Service/ChooseService';
import Footer from '../Footer/Footer';
import SendAsGift from './SendAsGift/SendAsGift';
import ECommerce from './ECommerce/ECommerce';
import JoinUs from './Join Us/JoinUs';
import FooterBanner from './FooterBanner/FooterBanner';

const Homepage = () => {
    return (
        <>
            <Header />
            <Services />
            <DetailedService />
            <ChooseService />
            <SendAsGift />
            <ECommerce />
            <FooterBanner />
            <JoinUs />
            {/* <OurBenefit/>
            <Description /> 
            <Testimonial />*/}
            <Footer />
        </>
    );
};

export default Homepage;