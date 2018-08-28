import React, { Component } from 'react';
import BuyerPageContainer from './components/BuyerPageContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/shop' component={BuyerPageContainer} />
        <BuyerPageContainer/>
        <Route exact path='/sell' component={SellerPageContainer} />
      </div>
    );
  }
}

export default App;
