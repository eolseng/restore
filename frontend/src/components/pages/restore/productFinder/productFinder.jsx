import React, {useEffect, useState} from 'react'
import {ProductFilterContainer} from './productFilterContainer'
import {ProductList} from './productList'

const client = require('../../../../client') // <3>

const follow = require('../../../../api/follow') // function to hop multiple links by "rel"
const root = '/api'

/**
 * Parent component of the product finder.
 * @returns {*}
 * @constructor
 */
export function ProductFinder() {
    const [searchState, setSearchState] = useState({})
    const [{data}, setParams] = useFetch('products')
    const [navLinks, setNavLinks] = useState([])

    useEffect(() => {
        updateNavLinks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.embedded]) //Update nav links every time data changes.

    /**
     * Adds search param which is sent to API.
     * @param searchVal
     * @param val
     */
    const addSearchParam = (searchVal, val) => {
        //Copy values of previous search state
        let tmpSearchState = {...searchState}
        tmpSearchState[searchVal] = val

        //GOTO page 0 as there's an change in filtering.
        if (searchVal !== 'page') {
            tmpSearchState['page'] = 0
        }

        //Update search state
        setSearchState(tmpSearchState)

        //Invoke a new fetch to API
        setParams([tmpSearchState])
    }


    const handleNavPage = pageNum => {
        addSearchParam('page', pageNum)
    }

    /**
     * Updates links for navigating through pages of products.
     */
    const updateNavLinks = () => {
        let links = []
        //Is undefined before first API fetch is completed.
        if (typeof data.page !== 'undefined') {
            let i
            for (i = data.page.number - 2; i < data.page.totalPages + 2; i++) {
                if (i < 0) {
                    continue
                }
                if (i >= data.page.totalPages) {
                    continue
                }
                if (links.length > 7) {
                    break
                }
                //Can't use onClick 'i' as 'i' is dynamic and causes wrong onClick argument.
                const onClickId = i
                links.push(
                    <button
                        className='page-nav-button'
                        key={'navPage' + onClickId}
                        onClick={() => handleNavPage(onClickId)}
                    >
                        {i === data.page.number ? 'x' : i}
                    </button>
                )
            }
        }
        setNavLinks(links)
    }

    return (
        <div className='container-fluid'>
            <div className='container product-container'>
                <div className='row'>
                    <ProductFilterContainer searchState={searchState} addSearchParam={addSearchParam}/>
                    <ProductList products={data} addSearchParam={addSearchParam}/>
                </div>
                <div className='row page-nav-button-wrapper'>
                    <div className='page-nav-button-container offset-sm-3'>{navLinks}</div>
                </div>
            </div>
        </div>
    )
}

/**
 * Fetches products from the API.
 * @param subPath
 * @returns {*[]}
 */
export default function useFetch(subPath) {
    const [data, setData] = useState({})
    const [params, setParams] = useState([{size: 15}]) //Note: redundant with size:15, but shows how to change N products per page.
    // eslint-disable-next-line no-unused-vars
    const [isError, setIsError] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false)
    let schema = {}

    // TODO: Fiks disabled eslint rot
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadFromServer = () => {
        follow(
            client, //Object used to make REST calls
            root, //Root API url
            [
                //Array of API relations to navigate through
                //(In this case, looks in _links for relation (rel) 'products, finds it HREF and navigates too it.
                {rel: subPath, params: params[0]},
            ]
        )
            .then(productCollection => {
                //Found the API path of Products. Send request to get all products.
                return client({
                    method: 'GET',
                    path: productCollection.entity._links.profile.href,
                    headers: {Accept: 'application/schema+json'},
                }).then(pageSchema => {
                    //Collect meta-data about the response products like e.g if the product properties is string, readonly etc.
                    schema = pageSchema.entity
                    return productCollection
                })
            })
            .done(productCollection => {
                //Push the collected products into the REACT state.
                setData({
                    //products: productCollection.entity._embedded.products,
                    attributes: Object.keys(schema),
                    embedded: productCollection.entity._embedded,
                    links: productCollection.entity._links,
                    page: productCollection.entity.page,
                })
            })
    }

    useEffect(
        () => {
            //Todo: add page param.
            loadFromServer()
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [params] // Re-fetches when url is changed is changed.
    )

    return [{data, isLoading, isError}, setParams]
}
