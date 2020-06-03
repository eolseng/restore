import React, {useState} from "react";
import {Link} from "react-router-dom";

/* css imports */
import "../../../css/pages/login/login.css"
import "../../../css/style.css"

export function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState((''))


    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }



    const handleError = (field, errmsg) => {
        if(!field) return

        if(errmsg) {
            setErrorMsg('')
        } else {
            setErrorMsg(errorMsg)
        }
    }

    const renderError = () => {
        if(errorMsg !== "") {
            return <div className="error">{errorMsg}</div>
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target);

        data.set('username', username)
        data.set('password', password)

        fetch('/loginapi', {
                method: 'POST',
                body:data
            })
                .then(v => {
                    if(v.redirected) window.location = v.url
                })
                .catch(e => console.warn(e))
    }



    return(
        <div className="login-container">
            <h3>Logg Inn</h3>
            <p>Fyll inn brukernavn og passord</p>
            <form onSubmit={handleSubmit} >
                <label className="login-label">
                    <div className="login-password">
                        Brukernavn (e-post)
                    </div>
                    <input id="username" type="text" className="input-field" placeholder="Brukernavn" value={username}
                           onChange={handleUsernameChange}/>
                    <div className="login-password">
                        <div>Passord</div>
                        <Link to="">Glemt passord</Link>
                    </div>
                    <input id="password" type="text" className="input-field" placeholder="Passord" value={password}
                    onChange={handlePasswordChange} />
                    {/*onChange={handlePasswordChange}*/}
                </label>
                <input type="submit" value="LOGG INN" className="submit p"/>
            </form>
        </div>
    )
}