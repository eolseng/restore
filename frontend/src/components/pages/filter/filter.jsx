import React from "react";
import { Link } from "react-router-dom";


function Filter() {

    return (
        <div className="content-container col flex-grow-1">
            <h1>Velkommen til filter siden</h1>
            <Link to={"./condition"}>
                <button className="cta-button">Neste</button>
            </Link>
        </div>
    )
}

export default Filter;