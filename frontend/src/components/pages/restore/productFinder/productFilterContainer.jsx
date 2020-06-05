import React from 'react'
import { ProductFilter } from './productFilter'
import { SearchFilter } from './searchFilter'

import '../../../../css/pages/restore/product-finder/product-filter.css'

export function ProductFilterContainer(props) {
    return (
        <div className='product-filter-wrapper col-sm-3'>
            <div className='product-filter-container'>
                <SearchFilter 
                    key={'SearchFilter'} 
                    addSearchParam={props.addSearchParam} 
                />
                <ProductFilter
                    key={'ProductFilterBrands'}
                    addSearchParam={props.addSearchParam}
                    subPath={'brands'}
                    filterName={'brand'}
                />
                <ProductFilter
                    key={'ProductFilterGenders'}
                    addSearchParam={props.addSearchParam}
                    subPath={'genders'}
                    filterName={'gender'}
                />
                <ProductFilter
                    key={'ProductFilterCategories'}
                    addSearchParam={props.addSearchParam}
                    subPath={'categories'}
                    filterName={'category'}
                />
                <ProductFilter
                    key={'ProductFilterSubCategories'}
                    addSearchParam={props.addSearchParam}
                    subPath={'subCategories'}
                    filterName={'subCategory'}
                />
                <ProductFilter
                    key={'ProductFilterBaseColors'}
                    addSearchParam={props.addSearchParam}
                    subPath={'baseColors'}
                    filterName={'Colors'}
                />
            </div>
        </div>
    )
}
