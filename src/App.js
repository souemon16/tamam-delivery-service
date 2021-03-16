import React from 'react';
import Homepage from './Components/Home/Homepage';
import AboutUs from './Components/About Us/AboutUs';
import OurAim from './Components/Our Aim/OurAim';
import Driver from './Components/Driver/Driver';
import Partner from './Components/Partner/Partner';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ContactUs from './Components/Contact Us/ContactUs';



function App() {
  return (
    <Router>
      <ScrollToTop >
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/about-us">
          <AboutUs />
        </Route>

        <Route exact path="/our-aim">
          <OurAim />
        </Route>

        <Route exact path="/contact-us">
          <ContactUs />
        </Route>

        <Route exact path="/become-a-driver">
          <Driver />
        </Route>

        <Route exact path="/become-a-partner">
          <Partner />
        </Route>

        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
