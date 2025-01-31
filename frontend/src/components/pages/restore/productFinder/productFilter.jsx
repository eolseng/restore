import React, {useState} from 'react'
import useFetch from './productFinder'

/**
 * Fetches and renders all available filters.
 * @param props Properties about the search & filter state.
 * @returns {*}
 * @constructor
 */
export function ProductFilter(props) {
    const {addSearchParam, subPath, filterName} = props
    // eslint-disable-next-line no-unused-vars
    const [{data, isLoading, isError}, doFetch] = useFetch(subPath)
    const [selected, setSelected] = useState()

    const selectFilter = (value) => {
        addSearchParam(filterName + '.name', value)
        setSelected(value)
    }

    //Returns the text of an filter alternative
    const getAltText = (alt) => {
        return alt.name
    }

    /**
     * If a filter is selected.
     * @param altText
     * @returns {string}
     */
    function isSelected(altText) {
        if (altText === selected) {
            return " product-filter-selected"
        } else {
            return ""
        }
    }

    const renderFilters = () => {
        return data.embedded ? (
            data.embedded[subPath].map(function (filerAlt, index) {
                const altText = getAltText(filerAlt)
                return (
                    <div key={"container-" + index}
                         className={'product-filter-content ' + isSelected(altText)}>
                        <div className='product-filter-input'
                             key={index}
                             onClick={() => selectFilter(altText)}>
                            {altText.charAt(0).toUpperCase() + altText.slice(1)}
                        </div>
                    </div>
                )
            })
        ) : (
            <div>{filterName} is loading...</div>
        )
    }

    return (
        <div className='product-filter-type'>
            <h5 className='product-filter-title'>{filterName.toUpperCase()}</h5>
            {renderFilters()}
            <div className={'product-filter-clear'} onClick={() => selectFilter('')}>Fjern</div>
        </div>
    )
}
