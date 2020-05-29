import React, {useState} from "react";
import {Link} from "react-router-dom";

/* css imports */
import "../../../css/pages/login/login.css"
import "../../../css/style.css"

export function LoginForm() {
    const [loginValue, setLoginValue] = useState([
        {
            userName: "",
            password: ""
        }
    ]);
    const [errorMsg, setErrorMsg] = useState((''))

    function handleUserNameChange(e) {
        setLoginValue({userName: e.target.value});
    }

    /*
    function handlePasswordChange(e) {
        setLoginValue({password: e.target.value})
    } */


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
            const data = new FormData(event.currentTarget)
            fetch('/perform_login', {
                method: 'POST',
                body: new URLSearchParams(event.currentTarget)
            })
                .then(v => {
                    if(v.redirected) window.location = v.url
                })
                .catch(e => console.warn(e))
    }

    const doLogIn = async () => {

        const url = "/api/perform_login";

        const payload = { username: loginValue["userName"], password: loginValue["password"] };

        let response;

        let foo =  JSON.stringify(payload)

        try {
            response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            this.setState({ errorMsg: "Failed to connect to server: " + err });
            return;
        }

        if (response.status === 401) {
            this.setState({ errorMsg: "Invalid userId/password" });
            return;
        }

        if (response.status !== 204) {
            this.setState({
                errorMsg:
                    "Error when connecting to server: status code " + response.status
            });
            return;
        }

        this.setState({ errorMsg: null });
        //this.props.updateLoggedInUserId(userId);
        this.props.history.push("/");
    };

    return(
        <div className="login-container">
            <h3>Logg Inn</h3>
            <p>Fyll inn brukernavn og passord</p>
            <form onSubmit={handleSubmit}>
                <label className="login-label">
                    <div className="login-password">
                        Brukernavn (e-post)
                    </div>
                    <input id="username" type="text" className="input-field" placeholder="Brukernavn" value={loginValue.userName}
                           onChange={handleUserNameChange}/>
                    <div className="login-password">
                        <div>Passord</div>
                        <Link to="">Glemt passord</Link>
                    </div>
                    <input id="password" type="text" className="input-field" placeholder="Passord" value={loginValue.password}
                    />
                    {/*onChange={handlePasswordChange}*/}
                </label>
                <input type="submit" value="LOGG INN" className="submit p"/>
            </form>
        </div>
    )
}