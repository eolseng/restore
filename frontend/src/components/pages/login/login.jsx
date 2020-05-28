import React, {useState} from "react";
import {Link} from "react-router-dom";

/* css imports */
import "../../../css/pages/login/login.css"
import "../../../css/style.css"

export function Login() {

    const [loginValue, setLoginValue] = useState([
        {
            userName: "",
            password: ""
        }
    ]);

    function handleUserNameChange(e) {
        setLoginValue({userName: e.target.value});
    }

    /*
    function handlePasswordChange(e) {
        setLoginValue({password: e.target.value})
    } */

    function handleSubmit(e) {
        alert("Velkommen " + loginValue.userName + " til Restore, og takk for at du tenker på miljøet.");
        e.preventDefault();
        setLoginValue({userName: "", password: ""})
    }

    return(
        <div className="container-fluid login">
            <div className="login-margin">
                <div className="login-container">
                    <h3>Logg Inn</h3>
                    <p>Fyll inn brukernavn og passord</p>
                    <form onSubmit={handleSubmit}>
                        <label className="login-label">
                            <div className="login-password">
                                Brukernavn (e-post)
                            </div>
                            <input type="text" className="input-field" placeholder="Brukernavn" value={loginValue.userName}
                                   onChange={handleUserNameChange}/>
                            <div className="login-password">
                                <div>Passord</div>
                                <Link to="">Glemt passord</Link>
                            </div>
                            <input type="text" className="input-field" placeholder="Passord" value={loginValue.password}
                            />
                                {/*onChange={handlePasswordChange}*/}
                        </label>
                        <div>
                            <input type="submit" value="LOGG INN" className="submit p"/>
                        </div>
                    </form>
                </div>
                <div className="login-register">
                    <Link to="">Registrer bruker</Link>
                </div>
            </div>
        </div>
    )
}