import React from 'react';
import Homepage from './Components/Home/Homepage';
import AboutUs from './Components/About Us/AboutUs';
import OurAim from './Components/Our Aim/OurAim';
import Driver from './Components/Driver/Driver';
import Partner from './Components/Partner/Partner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/our-aim">
          <OurAim />
        </Route>

        <Route path="/become-a-driver">
          <Driver />
        </Route>

        <Route path="/become-a-partner">
          <Partner />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
