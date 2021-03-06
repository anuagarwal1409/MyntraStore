import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import HomeComponent from './components/HomeComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Store from './components/Store';
import Home from './components/pages/Home';
import ReturnOtions from './components/OrderPage/ReturnOptions';
import LandingPage from './components/OrderPage/LandingPage';
library.add(fas)





class App extends Component {
  render() {
    return (
      <Router>
          <div className="App container-fluid">
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomeComponent/>
          </Route>
          <Route exact path="/store">
            <Store/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/bag">
            <LandingPage/>
          </Route>
        </Switch>
        
        
        
      
        </div>
      </Router>
      
    );
  }
}

export default App;
