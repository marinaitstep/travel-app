import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Bookings from './components/Bookings';
import Trip from './components/Trip';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <Header/>
    <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/bookings" component={Bookings}/>
          <Route exact path="/trip" component={Trip}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route component={Main}/>
        </Switch>
    </Router>    
    <Footer/>
    </>
  );
}

export default App;
