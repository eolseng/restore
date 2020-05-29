import React, {useState} from "react";

/* css imports */
import "../../../css/pages/login/register.css"
import "../../../css/pages/login/login.css"
import "../../../css/style.css"

export function RegisterForm() {

    const [registerValue, setRegisterValue] = useState([
        {
            firstName: "",
            surName: "",
            address: "",
            phoneNr: "",
            email: "",
            userName: "",
            password: "",
            validatePassword: false
        }
    ]);

    function handleUserNameChange(e) {
        setRegisterValue({userName: e.target.value});
    }

    /*
    function handlePasswordChange(e) {
        setRegisterValue({password: e.target.value})
    } */

    function handleSubmit(e) {

        e.preventDefault();
        setRegisterValue(
            {
                firstName: "",
                surName: "",
                address: "",
                phoneNr: "",
                email: "",
                userName: "",
                password: "",
                validatePassword: false
            }
        )
    }

    // Css
    return(
        <div className="register-container">
            <h4>Registrer deg</h4>
            <form onSubmit={handleSubmit}>
                <label className="login-label">
                    <div className="register-firstname">
                        Fornavn
                    </div>
                    <input type="text" className="register-input-field" placeholder="Fornavn"
                           value={registerValue.firstName} onChange={""}/>
                    <div className="login-password">
                        Etternavn
                    </div>
                    <input type="text" className="register-input-field" placeholder="Etternavn"
                           value={registerValue.surName} onChange={""}/>
                    <div className="login-password">
                        E-post - Blir brukernavn
                    </div>
                    <input type="text" className="register-input-field" placeholder="E-post"
                           value={registerValue.email} onChange={handleUserNameChange}/>
                    <div className="login-password">
                        <div>Passord</div>
                    </div>
                    <input type="text" className="register-input-field" placeholder="Passord"
                           value={registerValue.password}/> {/*onChange={handlePasswordChange}*/}
                    <div className="login-password">
                        <div>Bekreft Passord</div>
                    </div>
                    <input type="text" className="register-input-field" placeholder="Bekreft Passord"
                           value={registerValue.password}/>
                </label>
                <input type="submit" value="REGISTRER" className="submit p"/>
            </form>
        </div>
    )

}