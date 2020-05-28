import React from "react";


export function OrdersCard(props) {

    const order = props.orderData;

    return (
        <button className="card-discounts card-button card-discount">
            <div className="card-brand-display">
                <div className="row">{order.brand}</div>
                <div className="col-6">{order.description} Farge: {order.color} Str: {order.size}</div>
            </div>
            <div >
                <div className="discount-text">Estimert verdig på gavekort: {order.estimate}</div>
                <div className="discount-text">Utstedt: {order.issued}. Varighet: {order.duration}</div>
            </div>
        </button>
    )
}