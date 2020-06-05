import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* css imports */
import '../../../css/pages/login/login.css'

export function LoginForm() {
    const [loginValue, setLoginValue] = useState([
        {
            userName: '',
            password: '',
        },
    ])

    function handleUserNameChange(e) {
        setLoginValue({ userName: e.target.value })
    }

    /*
    function handlePasswordChange(e) {
        setLoginValue({password: e.target.value})
    } */

    function handleSubmit(e) {
        alert('Velkommen ' + loginValue.userName + ', takk for at du tenker på miljøet og vil være en del av Restore.')
        e.preventDefault()
        setLoginValue({ userName: '', password: '' })
    }

    return (
        <div className='login-container'>
            <h4 className='login-title'>Logg Inn</h4>
            <p className='login-text'>Fyll inn brukernavn og passord</p>
            <form onSubmit={handleSubmit}>
                <label className='login-label' for='login-name'>
                    Brukernavn
                </label>
                <input
                    type='text'
                    id='login-name'
                    className='login-input'
                    placeholder='Ditt navn'
                    autoComplete="name"
                    value={loginValue.userName}
                    onChange={handleUserNameChange}
                />
                <div className='login-link-container'>
                    <label className='login-label' for='login-name'>
                        Passord
                    </label>
                    <Link className="login-link" to=''>Glemt passord?</Link>
                </div>
                <input
                    type='password'
                    id='login-password'
                    className='login-input'
                    placeholder='Ditt passord'
                    autoComplete="current-password"
                    value={loginValue.password}
                />
                <input type='submit' value='Logg inn' className='login-submit' />
            </form>
        </div>
    )
}
