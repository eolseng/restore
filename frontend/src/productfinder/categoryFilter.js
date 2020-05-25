import {useState} from "react";
import React from "react";
import useFetch from "./ProductFinder";

export function CategoryFilter(props){
    const {addSearchParam, subPath, filterName} = props;
    const [{data, isLoading, isError}, doFetch] = useFetch(subPath)
    const [selected, setSelected] = useState()

    const selectFilter = (value) => {
        addSearchParam(filterName + ".name", value)
        setSelected(value)
    }


    const renderFilters = () => {
        let filters =
                data.embedded ?
                     data.embedded[subPath].map(function (filerAlt, index){
                         return (<div>
                                    <label>{filerAlt.name}</label>
                                     <input type={"radio"} value={filerAlt.name} checked={filerAlt.name === selected} className="product-filter-alt" key={index} onClick={() => (selectFilter(filerAlt.name))}/>
                                 </div>)
                     })
                    :
                     <div>{filterName} is loading...</div>
        return filters
    }

    return (
        <div>
            <form>
                <label>{filterName}
                    {renderFilters()}
                </label>
            </form>
        </div>
    )
}