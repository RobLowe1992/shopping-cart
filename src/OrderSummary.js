import React, { Component } from 'react';

export default class OrderSummary extends Component {
    constructor(){
        super();
        this.state = {
            quantity: 0,
            subtotal: 0,
            tax: 0.05,
            deliveryFee: 0,
            total: this.subtotal + (this.subtotal*this.tax) + this.deliveryFee
        }
    }
    render() {
        return(
            <div className="OrderSummary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>order summary</h3>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-8 list-inline">
                                <h4>subtotal<span>({} items)</span></h4>
                            </div>
                            <div className="col-lg-4">
                                <span>${this.state.subtotal}</span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-8">
                                <h4>delivery</h4>
                            </div>
                            <div className="col-lg-4">
                                <h4>{this.state.deliveryFee}</h4>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-8">
                                <h4>estimated tax</h4>
                            </div>
                            <div className="col-lg-4">
                                <h4>${this.state.tax}</h4>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <h3>total ${this.state.total}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}