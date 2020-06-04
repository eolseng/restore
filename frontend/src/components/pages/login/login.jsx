import React from "react";
import {Link} from "react-router-dom";

/* css imports */
import "../../../css/pages/login/login.css"

/* page imports */
import {LoginForm} from "./loginForm";

export function Login() {

    return(
        <div className="container-fluid login-container-fluid">
            <div className="login-wrapper">
                <LoginForm/>
                <div className="register-link-container">
                    <p className="register-text">Ny bruker hos Restore?</p>
                    <Link className="register-link" to="./register">Registrer bruker her</Link>
                </div>
            </div>
        </div>
    )
}