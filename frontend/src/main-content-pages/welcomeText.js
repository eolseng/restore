import React from "react";
import{Link} from "react-router-dom";

function WelcomeText() {

    return (
        <div className="welcome-text-container">
            <div className="row">
                <div className="col-6">
                    <h2 className="title">Litt for mye klær liggende i skapet?</h2>
                    <p className="text">Registrer dine plagg og motta gavekort hos våre samarbeidspartnere.
                        Spar tiden du ellers ville brukt på å undersøke priser, beskrive dine plagg og avtale møtested
                        med kjøper. Vi gjør jobben for deg!</p>
                    <Link to=""> {/* link til filter siden*/}
                        <button className="cta-button">Kom igang nå</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomeText;