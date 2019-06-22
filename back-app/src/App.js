import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import EventList from './components/EventList'
import Event from './components/Event'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'



function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={EventList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
