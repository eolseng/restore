import React from "react";
import {Link} from "react-router-dom";

/* css imports */
import "../../../css/pages/login/login.css"
import "../../../css/style.css"

/* page imports */
import {LoginForm} from "./loginForm";

export function Login() {

    return(
        <div className="container-fluid login">
            <div className="login-margin">
                <LoginForm/>
                <div className="login-register">
                    <Link to="./register">Registrer bruker</Link>
                </div>
            </div>
        </div>
    )
}