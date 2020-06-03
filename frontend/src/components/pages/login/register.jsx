import React from "react";

/* css imports */
import "../../../css/pages/login/register.css"
import "../../../css/style.css"

/* page imports */
import {RegisterForm} from "./registerForm";

export function Register() {
    return (
        <div className="container-fluid login">
            <div className="register-margin">
                <RegisterForm/>
            </div>
        </div>
    )
}