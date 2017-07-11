import React, { Component } from 'react';

export default class CartTotal extends Component {
    constructor(){
        super();
        this.state = {
            total: 0
        }
    }
    render() {
        return(
            <div className="CartTotal">
                <h2>cart total: <span>${this.state.total}</span></h2>
            </div>
        )
    }
}