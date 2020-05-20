'use strict';

import React, {useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
const client = require('./client'); // <3>

const follow = require('./api/follow'); // function to hop multiple links by "rel"
const root = '/api';


function ProductsListHook(props){
    //Current state value, and an update for updating current state value.
    const [count,setCount] = useState(0); //0 is initial state (used for first render)
    const [products, setProducts] = useState(null)
    const [attributes, setAttributes] = useState(null)
    const [pageSize, setPageSize] = useState(2)
    const [links, setLinks] = useState(2)


    const productsLi = props.products.map(product =>
        <ProductHook key={product._links.self.href} product={product}/>
    );

    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
            </tr>
            {productsLi}
            </tbody>
        </table>
    )

}

function ProductHook(props){
    return (
        <tr>
            <td>{props.product.name}</td>
        </tr>
    )
}

export function ProductPage(){
    const [products, setProducts] = useState([])
    const [attributes, setAttributes] = useState([])
    const [pageSize, setPageSize] = useState(2)
    const [links, setLinks] = useState({})
    let schema = {}




    useEffect(() => {
        loadFromServer(2)
    }, [])

    const loadFromServer = (pageSize) =>  {
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
            }).then(pageSchema => {
                //Collect meta-data about the response products like e.g if the product properties is string, readonly etc.
                schema = pageSchema.entity
                return productCollection;
            });
        }).done(productCollection => {
            //Push the collected products into the REACT state.
            setProducts(productCollection.entity._embedded.products)
            setAttributes(Object.keys(schema))
            setPageSize(pageSize)
            setLinks(productCollection.entity._links)
        });
    }



    return (
        <div>
            <ProductsListHook products = {products}/>
        </div>
    )
}




