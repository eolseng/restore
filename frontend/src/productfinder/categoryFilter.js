import { useState } from 'react'
import React from 'react'
import useFetch from './ProductFinder'

export function CategoryFilter(props) {
    const { addSearchParam, subPath, filterName } = props
    const [{ data, isLoading, isError }, doFetch] = useFetch(subPath)
    const [selected, setSelected] = useState()

    const selectFilter = (value) => {
        addSearchParam(filterName + '.name', value)
        setSelected(value)
    }

    const renderFilters = () => {
        let filters = data.embedded ? (
            data.embedded[subPath].map(function (filerAlt, index) {
                return (
                    <div className='product-filter-content'>
                        <label className='product-filter-label'>
                            <input
                                className='product-filter-input'
                                type={'radio'}
                                value={filerAlt.name}
                                checked={filerAlt.name === selected}
                                key={index}
                                onClick={() => selectFilter(filerAlt.name)}
                            />
                            {filerAlt.name}
                        </label>
                    </div>
                )
            })
        ) : (
            <div>{filterName} is loading...</div>
        )
        return filters
    }

    return (
        <div className='product-filter-type'>
            <h5 className='product-filter-title'>{filterName}</h5>
            {renderFilters()}
        </div>
    )
}
