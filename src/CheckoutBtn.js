import React, { Component } from 'react';
import './CheckoutBtn.css'

export default class CheckoutBtn extends Component {
    render() {
        return(
            <div className="CheckoutBtn">
                <button className="pull-right btn btn-danger">I'm ready to checkout</button>
            </div>
        )
    }
}