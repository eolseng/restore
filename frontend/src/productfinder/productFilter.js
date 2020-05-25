import React from "react";
import {CategoryFilter} from "./categoryFilter";

export function ProductFilter(props){
    return <div>
        <div>
            <CategoryFilter className="product-filter-type" addSearchParam={props.addSearchParam} subPath={"categories"} filterName={"category"} ></CategoryFilter>
        </div>
        <br/>
        <div>
            <CategoryFilter className="product-filter-type" addSearchParam={props.addSearchParam} subPath={"brands"} filterName={"brand"} ></CategoryFilter>
        </div>
    </div>
}