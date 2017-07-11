import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartTotal from './CartTotal.js'
import CheckoutBtn from './CheckoutBtn.js'
import Item from './Item.js'
import OrderSummary from './OrderSummary.js'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <CartTotal />
            <CheckoutBtn />
            <Item />
          </div>
          <div className="col-lg-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
