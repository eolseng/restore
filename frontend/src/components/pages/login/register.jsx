import React from "react";

/* css imports */
import "../../../css/pages/login/login.css"

/* page imports */
import {RegisterForm} from "./registerForm";

export function Register() {
    return (
        <div className="container-fluid login-container-fluid">
            <div className="login-wrapper">
                <RegisterForm/>
            </div>
        </div>
    )
}