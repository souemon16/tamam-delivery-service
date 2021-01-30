import React from 'react';
import Description from './Components/Home/Description/Description';
import Header from './Components/Home/Header/Header';
import Services from './Components/Home/Services/Services';
import DetailedService from './Components/Home/Detailed Service/DetailedService';
import OurBenefit from './Components/Home/Our Benefit/OurBenefit';
import Testimonial from './Components/Home/Testimonial/Testimonial';
import ChooseService from './Components/Home/Choose Service/ChooseService';
import Footer from './Components/Footer/Footer';
import SendAsGift from './Components/Home/SendAsGift/SendAsGift';
import ECommerce from './Components/Home/ECommerce/ECommerce';
import JoinUs from './Components/Home/Join Us/JoinUs';
import FooterBanner from './Components/Home/FooterBanner/FooterBanner';




function App() {
  return (
    <>
      <Header/>
      <Services />
      <DetailedService />
      <ChooseService />
      <SendAsGift />
      <ECommerce />
      <FooterBanner />
      <JoinUs /> 
      {/* <OurBenefit/>
      <Description /> */}
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
