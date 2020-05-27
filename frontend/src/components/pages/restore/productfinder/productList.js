import React from 'react'
import { ProductCard } from './productCard'

import '../../../../css/pages/product-finder/product-list.css'

export function ProductList(props) {
    /*
        Gets passed a LIST of Products as a prop and renders these as individual ProductCards in a container.
     */

    const productList = props.products
    const productCards = productList.embedded ? (
        productList.embedded.products.map(product => <ProductCard key={product.id} product={product} />)
    ) : (
        <div className={'product-list-no-product'}>Could not find any products.</div>
    )

    return (
        <div className='product-list-wrapper col-sm-9'>
            <div className='product-list'>{productCards}</div>
        </div>
    )
}
