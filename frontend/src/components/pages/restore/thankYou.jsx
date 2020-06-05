import React from "react";
import {Link} from "react-router-dom";

function ThankYou() {

    return (
        <div className={'container-fluid'}>
            <div className={'container'}>
                <h1>Tusen takk!</h1>
                <p>Tusen takk for at du har benyttet deg av Restore by Repairable</p>
                <p>Du vil innen kort tid motta en epost med informasjon.</p>
                <p>Skulle du ha noen spørsmål tilknyttet din ordre? Send oss en epost på hei@repairable.no!</p>
                <p>Dette er slutten</p>
                <Link to={"/"}>
                    Gå tilbake til hovedsiden
                </Link>
            </div>
        </div>
    )

}

export default ThankYou;