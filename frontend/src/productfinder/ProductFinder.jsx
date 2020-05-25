'use strict';

import React, {useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import {ProductFilter} from "./productFilter";
import {ProductList} from "./productlist";

const client = require('../client'); // <3>

const follow = require('../api/follow'); // function to hop multiple links by "rel"
const root = '/api';


export function ProductFinder(){
    const [searchState, setSearchState] = useState({})
    const [{data, isLoading, isError}, setParams] = useFetch("products", searchState)

    /*
    const mockProductList = [
        {
            "id": 0,
            "brand": "Helly Hansen",
            "category": "Jacket",
            "subCategory": "Sailing Jacket",
            "name": "Skagen Offshore Jacket",
            "description": "The best jacket ever.",
            "imgUrl": "https://www.hellyhansen.com/media/catalog/product/3/3/33907_222-2-main.jpg",
            "_links": {}
        },
        {
            "id": 1,
            "brand": "Helly Hansen",
            "category": "Jacket",
            "subCategory": "Sailing Jacket",
            "name": "Salt Flag Jacket",
            "description": "Almost the best jacket ever.",
            "imgUrl": "https://www.hellyhansen.com/media/catalog/product/3/3/33909_603-2-main.jpg",
            "_links": {}
        }
    ]
    */

    const addSearchParam = (searchVal, val) => {
        //Todo: Only allowing one param atm

        //Copy values of previous search state
        let tmpSearchState = searchState;
        tmpSearchState[searchVal] = val;

        //Todo: Merge the 2 follow set's?
        setSearchState(tmpSearchState)

        //Invoke a new fetch to API
        setParams(tmpSearchState)
    }

    return (
        <div>
            <ProductFilter searchState={searchState} addSearchParam={addSearchParam} ></ProductFilter>
            <ProductList products={data}/>
        </div>
    )
}



export default function useFetch(subPath){
    const [data, setData] = useState({})
    const [params, setParams] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    let schema = {}






    useEffect(() =>{
        //TOdo: Adding size


        loadFromServer()
        },[params]  //Re-fetches when url is changed is changed.
    )

    const loadFromServer = () =>  {
        follow(client //Object used to make REST calls
            , root //Root API url
            , [
                //Array of API relations to navigate through
                //(In this case, looks in _links for relation (rel) 'products, finds it HREF and navigates too it.
                {rel: subPath, params: params}
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
                //products: productCollection.entity._embedded.products,
                attributes: Object.keys(schema),
                embedded: productCollection.entity._embedded,
                links: productCollection.entity._links
            })
        });
    }

    return [{data, isLoading, isError}, setParams];
}



