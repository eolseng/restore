import React, { useState, useEffect } from "react";
import {withRouter} from 'react-router-dom';
import { ProductFilterContainer } from "./productFilterContainer";
import { ProductList } from "./productList";

const client = require("../../../../client"); // <3>

const follow = require("../../../../api/follow"); // function to hop multiple links by "rel"
const root = "/api";

export function ProductFinder() {
  const [searchState, setSearchState] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [{ data, isLoading, isError }, setParams] = useFetch("products");

  const addSearchParam = (searchVal, val) => {
    //Copy values of previous search state
    let tmpSearchState = { ...searchState };
    tmpSearchState[searchVal] = val;

    //Todo: Merge setSearchState and setParams.
    //Update search state
    setSearchState(tmpSearchState);

    //Invoke a new fetch to API
    setParams([tmpSearchState]);
  };


  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <ProductFilterContainer searchState={searchState} addSearchParam={addSearchParam}/>
          <ProductList products={data} />
        </div>
      </div>
    </div>
  );
}

export default function useFetch(subPath) {
  const [data, setData] = useState({});
  const [params, setParams] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  let schema = {};

  // TODO: Fiks disabled eslint rot
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadFromServer = () => {
    follow(
      client, //Object used to make REST calls
      root, //Root API url
      [
        //Array of API relations to navigate through
        //(In this case, looks in _links for relation (rel) 'products, finds it HREF and navigates too it.
        { rel: subPath, params: params[0] },
      ]
    )
      .then((productCollection) => {
        //Found the API path of Products. Send request to get all products.
        return client({
          method: "GET",
          path: productCollection.entity._links.profile.href,
          headers: { Accept: "application/schema+json" },
        }).then((pageSchema) => {
          //Collect meta-data about the response products like e.g if the product properties is string, readonly etc.
          schema = pageSchema.entity;
          return productCollection;
        });
      })
      .done((productCollection) => {
        //Push the collected products into the REACT state.
        setData({
          //products: productCollection.entity._embedded.products,
          attributes: Object.keys(schema),
          embedded: productCollection.entity._embedded,
          links: productCollection.entity._links,
        });
      });
  };

  useEffect(
      () => {
        //Todo: add page param.
        loadFromServer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [params] // Re-fetches when url is changed is changed.
  );

  return [{ data, isLoading, isError }, setParams];
}
