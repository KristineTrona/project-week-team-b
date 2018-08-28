import React, { Component } from 'react';
import BuyerPageContainer from './components/BuyerPageContainer'
import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SellerPageContainer from './components/SellerPageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path='/shop' component={BuyerPageContainer} />
        <Route exact path='/sell' component={SellerPageContainer} />
      </div>
    );
  }
}

export default App;
