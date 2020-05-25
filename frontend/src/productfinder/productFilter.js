import React from "react";
import {CategoryFilter} from "./categoryFilter";

export function ProductFilter(props){
    return <div>
        <div>
            <CategoryFilter addSearchParam={props.addSearchParam} subPath={"categories"} filterName={"category"} ></CategoryFilter>
        </div>
        <div>
            <CategoryFilter addSearchParam={props.addSearchParam} subPath={"brands"} filterName={"brand"} ></CategoryFilter>
        </div>
    </div>
}