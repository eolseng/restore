'use strict';

import React, {useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
const client = require('./client'); // <3>

const follow = require('./api/follow'); // function to hop multiple links by "rel"
const root = '/api';


function ProductsListHook(props){
    //Current state value, and an update for updating current state value.


    const productsLi = props.products.products.map(product =>
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
    const dto = useFetch(root);



    return (
        <div>
            <ProductsListHook products = {dto}/>
        </div>
    )
}


export default function useFetch(url){
    const [data, setData] = useState({products:[]})
    let schema = {}


    useEffect(() =>{
        loadFromServer(2)
        },[]
    )

    const loadFromServer = (pageSize) =>  {
        follow(client //Object used to make REST calls
            , url //Root API url
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
            setData({
                products: productCollection.entity._embedded.products,
                attributes: Object.keys(schema),
                pageSize: pageSize,
                links: productCollection.entity._links
            })
        });
    }

    return data;
}



