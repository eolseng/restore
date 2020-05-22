import React from "react";

function ProductCard(props){
    return (
        <tr>
            <td>{props.product.name}</td>
        </tr>
    )
}