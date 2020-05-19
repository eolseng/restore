'use strict';

import React from "react";
import { Link, withRouter } from "react-router-dom";
const client = require('./client'); // <3>

const follow = require('./api/follow'); // function to hop multiple links by "rel"
const root = '/api';

export class ProductPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {products: [], attributes: [], pageSize: 2, links: {}};

    }

    componentDidMount() { // <2>
        this.loadFromServer(this.state.pageSize);
        console.log("Did mount!")
    }


    loadFromServer(pageSize) {
        follow(client //Object used to make REST calls
            , root //Root API url
            , [
                //Array of API relations to navigate through
                //(In this case, looks in _links for relation (rel) 'products, finds it HREF and navigates too it.
                {rel: 'products', params: {size: pageSize}}
            ]
        ).then(productCollection => {
            //Found the API path of Products. Send request to get all products.
            return client({
                method: 'GET',
                path: productCollection.entity._links.profile.href,
                headers: {'Accept': 'application/schema+json'}
            }).then(schema => {
                //Collect meta-data about the response products like e.g if the product properties is string, readonly etc.
                this.schema = schema.entity;
                return productCollection;
            });
        }).done(productCollection => {
            //Push the collected products into the REACT state.
            this.setState({
                products: productCollection.entity._embedded.products,
                attributes: Object.keys(this.schema.properties),
                pageSize: pageSize,
                links: productCollection.entity._links});
        });
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


