import React from 'react'
import { CategoryFilter } from './categoryFilter'

import '../css/pages/product-finder/product-filter.css'

export function ProductFilter(props) {
    return (
        <div className='product-filter-wrapper col-sm-3'>
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'categories'}
                filterName={'category'}
            ></CategoryFilter>
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'brands'}
                filterName={'brand'}
            ></CategoryFilter>
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'genders'}
                filterName={'genders'}
            ></CategoryFilter>
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'sizes'}
                filterName={'sizes'}
            ></CategoryFilter>
        </div>
    )
}
