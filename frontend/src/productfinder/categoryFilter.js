import {useState} from "react";
import React from "react";
import useFetch from "./ProductFinder";

export function CategoryFilter(props){
    const {addSearchParam, subPath, filterName} = props;
    const [{data, isLoading, isError}, doFetch] = useFetch(subPath)


    const selectFilter = (value) => {
        addSearchParam(filterName + ".name", value)
    }


    const allFilters =
        data.embedded ?
            data.embedded[subPath].map(function (types, index){
                return <div key={index} onClick={() => (selectFilter(types.name))}>{types.name}</div>
            })
            :
            <div>{filterName} is loading...</div>
    return (
        <div>
            {allFilters}
        </div>
    )
}