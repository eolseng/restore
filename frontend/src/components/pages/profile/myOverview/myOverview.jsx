import React, {useState} from "react";
import {Link} from "react-router-dom";

/* Css imports */
import "../../../../css/pages/profile/profile.css";

/* component imports */
import {OverviewCard} from "./cards/overviewCard";
import {DiscountsCard} from "./cards/discountsCard";
import {OrdersCard} from "./cards/ordersCard";

const mockDiscounts = [
    {
        id: 0,
        brand: "Swix",
        discount: "100,-",
        count: 1,
        issued: "25/05-2020",
        duration: "one year from issued date"
    },
    {
        id: 1,
        brand: "Helly Hansen",
        discount: "150,-",
        count: 2,
        issued: "28/05-2020",
        duration: "one year from issued date"
    }
    ];

const mockOrders = [
    {
        id: 0,
        brand: "Swix",
        description: "Jakke",
        color: "Blå",
        size: "M",
        estimate: "80,-",
        registered: "20/05-2020",
        count: 1
    },
    {
        id: 1,
        brand: "Helly Hansen",
        description: "Bukse",
        color: "Rød",
        size: "XXL",
        estimate: "50,-",
        registered: "20/05-2020",
        count: 2
    }
];

function MyOverview() {

    const [discounts] = useState(mockDiscounts);
    const [orders] = useState(mockOrders);
    const [rendered, setRendered] = useState();
    const [isRenderOverview, setIsRenderOverview] = useState(true);

    function renderOverview() {
        setIsRenderOverview(false);

        setRendered(
            <div className="my-overview-cards-container">
                <OverviewCard discounts={discounts}/>
            </div>
        )
    }

    function renderDiscounts() {
        setIsRenderOverview(false);
        setRendered(
            <div className="my-overview-cards-container">
                {discounts.map((discountData, index) => (
                    <DiscountsCard key={discountData.id} index={index} discountData={discountData}/>))}
            </div>
        )
    }

    function renderOrders() {
        setIsRenderOverview(false);
        setRendered(
            <div className="my-overview-cards-container">
                {orders.map((orderData, index) => (
                    <OrdersCard key={orderData.id} index={index} orderData={orderData}/>))}
            </div>
        )
    }

    return(
        <div className="my-overview-container col-9">
            <div className="my-overview ">
                <div className="overview justify-content col-3 border-right" id={1} onClick={renderOverview}>Oversikt</div>
                <div className="discounts col-3 justify-content border-right" id={2} onClick={renderDiscounts}>Rabatter</div>
                <div className="orders col-3 justify-content border-right" id={3} onClick={renderOrders}>Ordre</div>
                <div className="register col-3 justify-content">
                    <Link to="./filter">
                        <button className="profile-button">Registrer plagg</button>
                    </Link>
                </div>
            </div>
            {isRenderOverview ? <div className="my-overview-cards-container">
                <OverviewCard discounts={discounts}/></div> : null
            }
            {rendered}
        </div>
    )
}

export default MyOverview;

