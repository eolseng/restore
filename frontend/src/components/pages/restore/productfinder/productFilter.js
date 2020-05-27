import React from 'react'
import { CategoryFilter } from './categoryFilter'
import { SearchFilter } from './searchFilter'

import '../../../../css/pages/product-finder/product-filter.css'

export function ProductFilter(props) {
    return (
        <div className='product-filter-wrapper col-sm-3'>

            <SearchFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
            />
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'brands'}
                filterName={'brand'}
            />
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'genders'}
                filterName={'genders'}
            />
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'categories'}
                filterName={'category'}
            />
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'subCategories'}
                filterName={'subCategory'}
            />
            <CategoryFilter
                className='product-filter-type'
                addSearchParam={props.addSearchParam}
                subPath={'sizes'}
                filterName={'sizes'}
            />
        </div>
    )
}
