import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Footer from './components/Footer';
import Bookings from './components/Bookings';
import Trip from './components/Trip';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/bookings" component={Bookings}/>
          <Route path="/trip/:tripId" component={Trip}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route component={Main}/>
        </Switch>
    </Router>    
    <Footer/>
    </>
  );
}

export default App;
