import React from "react";
import {Link} from "react-router-dom";

function Delivery() {

    return (
        <div className="content-container col flex-grow-1">
            <h1>Velkommen til Leveranse siden</h1>
            <Link to={"./confirmation"}>
                <button className="cta-button">Neste</button>
            </Link>
        </div>
    )
}

export default Delivery;