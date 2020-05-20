import React from "react";
import {Link} from "react-router-dom";

function Confirmation() {

    return (
        <div className="content-container col flex-grow-1">
            <h1>Velkommen til Bekreftelses siden</h1>
            <Link to={"./"}>
                <button className="cta-button">Neste</button>
            </Link>
        </div>
    )
}

export default Confirmation;