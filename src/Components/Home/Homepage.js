import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';
import DetailedService from './Detailed Service/DetailedService';
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
            <Footer />
        </>
    );
};
export default Homepage;