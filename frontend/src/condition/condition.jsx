import React from "react";
import {Link} from "react-router-dom";

function Condition() {

    return (
        <div className="content-container col flex-grow-1">
            <h1>Velkommen til Vurder tilstand siden</h1>
            <Link to={"./delivery"}>
                <button className="cta-button">Neste</button>
            </Link>
        </div>
    )
}

export default Condition;