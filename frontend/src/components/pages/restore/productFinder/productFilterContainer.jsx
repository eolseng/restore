import React from 'react'
import { ProductFilter } from './productFilter'
import { SearchFilter } from './searchFilter'

import '../../../../css/pages/restore/product-finder/product-filter.css'

export function ProductFilterContainer(props) {
    return (
        <div className='product-filter-wrapper col-sm-3'>

            <SearchFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
            />
            <ProductFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'brands'}
                filterName={'brand'}
            />
            <ProductFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'genders'}
                filterName={'genders'}
            />
            <ProductFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'categories'}
                filterName={'category'}
            />
            <ProductFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'subCategories'}
                filterName={'subCategory'}
            />
            <ProductFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'sizes'}
                filterName={'sizes'}
            />
        </div>
    )
}
