'use strict';

import React from "react";
import { Link, withRouter } from "react-router-dom";
const client = require('./client'); // <3>

export class ProductPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {products: []};

    }

    componentDidMount() { // <2>
        client({method: 'GET', path: '/api/products'}).done(response => {
            this.setState({products: response.entity._embedded.products});
        });
        console.log("Did mount!")
    }


    render() { // <3>
        return (
            <ProductsList products={this.state.products}/>
        )
    }
}

// tag::employee-list[]
class ProductsList extends React.Component{
    render() {
        const products = this.props.products.map(product =>
            <Product key={product._links.self.href} product={product}/>
        );
        return (
            <table>
                 <tbody>
                  <tr>
                    <th>Name</th>
                  </tr>
                 {products}
                </tbody>
            </table>
        )
    }
}
// end::employee-list[]

// tag::employee[]
class Product extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
            </tr>
        )
    }
}


