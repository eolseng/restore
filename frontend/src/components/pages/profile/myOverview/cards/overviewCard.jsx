import React from "react";

/* css imports */
import "../../../../../css/pages/profile/overwiewCards/overviewCard.css"

export function OverviewCard(props) {

    const discount = props.discounts;

    return (
        <div className="overview-card-container col-12">
            <button className="overview-card-discounts overview-card-button col-12 card">
                <div>Logo</div>
                <div>Rabatter</div>
                <div>Antall rabattkort: {discount.count}</div>
            </button>
            <button className="overview-card-orders overview-card-button col-12 card">
                <div>Logo</div>
                <div>Ordre</div>
                <div>
                    <div>Antall ordre: {discount.count}</div>
                </div>
            </button>
        </div>
    )
}