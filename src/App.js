import React, { Component } from 'react';
import BuyerPageContainer from './components/BuyerPageContainer'
import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SellerPageContainer from './components/SellerPageContainer';
import ShoppingCartContainer from './components/ShoppingCartContainer';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={LandingPage} />
        <Route exact path='/shop' component={BuyerPageContainer} />
        <Route exact path='/sell' component={SellerPageContainer} />
        <Route exact path='/cart' component={ShoppingCartContainer}/>
      </div>
    );
  }
}

export default App;
