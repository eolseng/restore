import React from "react";
import {Link} from "react-router-dom";

function Flow() {

    return (
        <div className="flow-container">
            <div className="flow-content">
                <div className="row">
                    <div className="col-12 icon-title">
                        <h2>Slik fungerer det</h2>
                    </div>
                </div>
                <div className="row icon-wrapper">
                    <div className="col-4 icon-container"><img src={ require("../img/icon/register.png") } alt="icon"/>
                        <h3>1. Registrer ditt plagg</h3>
                        <p>Registrer plagget ved å klikke deg frem til det plagget du skal levere inn.</p>
                    </div>
                    <div className="col-4 icon-container"><img src={ require("../img/icon/value.png") } alt="icon"/>
                        <h3>2. Få estimert verdi</h3>
                        <p>Motta et estimat på et gavekort hos gjeldende merke.</p>
                    </div>
                    <div className="col-4 icon-container"><img src={ require("../img/icon/wait.png") } alt="icon"/>
                        <h3>3. Send / Lever</h3>
                        <p>Motta pose og send plagget til oss.<br/> Eller lever plagget i en butikk</p>
                    </div>
                </div>
                <div className="row icon-wrapper">
                    <div className="col-2"></div>
                    <div className="col icon-container"><img src={ require("../img/icon/offer.png") } alt="icon"/>
                        <h3>4. Vent på vurdering</h3>
                        <p>Vent på verdivurderingen fra våre eksperter (ca. 3 dager).</p>
                    </div>
                    <div className="col-4 icon-container"><img src={ require("../img/icon/ship.png") } alt="icon"/>
                        <h3>5. Motta tilbud</h3>
                        <p>Aksepter tilbudet for å motta gavekort som du kan bruke i gjeldende butikk.</p>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-12 button-container">
                        <Link to="./filter">
                            <button className="cta-button">Kom igang nå</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Flow;