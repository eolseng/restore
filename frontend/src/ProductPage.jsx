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
    }


    render(){
        return <div>ProductDiv
            <ProductsList products={this.state.products}/>
        </div>

    }
}

// tag::employee-list[]
class ProductsList extends React.Component{
    render() {
        const heroes = this.props.products.map(product =>
            <ProductPage key={product._links.self.href} product={product}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
                {heroes}
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
                <td>{this.props.product.firstName}</td>
                <td>{this.props.product.lastName}</td>
                <td>{this.props.product.description}</td>
            </tr>
        )
    }
}

//Retrieving the props from the react-router.
export default withRouter(Product);
