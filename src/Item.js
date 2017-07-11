import React, { Component } from 'react';
import './Item.css'

export default class Item extends Component {
    constructor(){
        super();
        this.state = {
            quantity: 0,
            price: 9.38,
            wrapFee: 5.99
        }
    }
    minusOne(){
        if (this.state.quantity >= 1 ){
            this.setState({
                quantity: this.state.quantity - 1
            })
        } else {
            this.setState({
                quantity: 0
            })
        }
    }
    plusOne(){
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    render() {
        return(
            <div className="Item">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-1">
                            <img src="http://placecage.com/50/96" alt="itemImage" />
                        </div>
                        <div className="col-lg-11">
                            <div className="top-row row">
                                <div className="description col-lg-5"></div>
                                <div className="quantity col-lg-5">
                                    <ul className="list-inline">
                                        <li className="minus increments" onClick={ __=> this.minusOne()}>&nbsp;-&nbsp;</li>
                                        <li>{this.state.quantity}</li>
                                        <li className="plus increments" onClick={ __=> this.plusOne()}>&nbsp;+&nbsp;</li>
                                    </ul>
                                </div>
                                <div className="item-price col-lg-2 text-right">${this.state.price}</div>
                            </div>
                            <div className="col-lg-12">
                                <button className="remove btn btn-default">remove</button>
                            </div>
                            <div className="col-lg-12">
                                <input id="checkBox" type="checkbox"></input>
                                <span className="pad-left-10">wrap it for ${this.state.wrapFee}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}