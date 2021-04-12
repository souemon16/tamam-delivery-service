import React, { Suspense, lazy } from 'react';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Homepage = lazy(() => import('./Components/Home/Homepage'));
const AboutUs = lazy(() => import('./Components/About Us/AboutUs'));
const OurAim = lazy(() => import('./Components/Our Aim/OurAim'));
const Driver = lazy(() => import('./Components/Driver/Driver'));
const Partner = lazy(() => import('./Components/Partner/Partner'));
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));
const ContactUs = lazy(() => import('./Components/Contact Us/ContactUs'));

function App() {
  return (
    <Router>
      <ScrollToTop >
        <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
          <div className="spinner-grow text-secondary" style={{width: '3rem', height: '3rem' }} role="status"> </div> </div>}>
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
        </Suspense>
      </ScrollToTop>
    </Router >
  );
}

export default App;
