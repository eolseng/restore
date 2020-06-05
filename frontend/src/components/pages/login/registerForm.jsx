import React, { useState } from 'react'

/* css imports */
import '../../../css/pages/login/login.css'

/**
 * Form for registering new user.
 * @returns {*}
 * @constructor
 */
export function RegisterForm() {
    const [registerValue, setRegisterValue] = useState([
        {
            firstName: '',
            surName: '',
            address: '',
            phoneNr: '',
            email: '',
            userName: '',
            password: '',
            validatePassword: false,
        },
    ])
    /*
    function handleUserNameChange(e) {
        setRegisterValue({userName: e.target.value});
    }*/

    /*
    function handlePasswordChange(e) {
        setRegisterValue({password: e.target.value})
    } */

    /**
     * Submits new user details to API.
     * @param e
     */
    function handleSubmit(e) {
        e.preventDefault()
        setRegisterValue({
            firstName: '',
            surName: '',
            address: '',
            phoneNr: '',
            email: '',
            userName: '',
            password: '',
            validatePassword: false,
        })
    }

    // Css
    return (
        <div className='login-container'>
            <h4 className='login-title'>Registrer deg</h4>
            <p className='login-text'>Fyll inn den nødvendige informasjonen</p>
            <form onSubmit={handleSubmit}>
                <label className='login-label' for='register-first-name'>
                    Fornavn
                </label>
                <input
                    type='text'
                    id='register-first-name'
                    className='login-input'
                    placeholder='Ditt fornavn'
                    autoComplete='given-name'
                    value={registerValue.firstName}
                    onChange={''}
                />
                <label className='login-label' for='register-last-name'>
                    Etternavn
                </label>
                <input
                    type='text'
                    id='register-last-name'
                    className='login-input'
                    placeholder='Ditt etternavn'
                    autoComplete='family-name'
                    value={registerValue.surName}
                    onChange={''}
                />
                <label className='login-label' for='register-email'>
                    E-post
                </label>
                <input
                    type='text'
                    id='register-email'
                    className='login-input'
                    placeholder='Din e-post'
                    autoComplete='email'
                    value={registerValue.email}
                    onChange={''}
                />
                <label className='login-label' for='register-password'>
                    Passord
                </label>
                <input
                    type='text'
                    id='register-password'
                    className='login-input'
                    placeholder='Ditt passord'
                    autoComplete='new-password'
                    value={registerValue.password}
                />
                <label className='login-label' for='register-confirm-password'>
                    Bekreft passord
                </label>
                <input
                    type='text'
                    id='register-confirm-password'
                    className='login-input'
                    placeholder='Bekreft ditt passord'
                    autoComplete='new-password'
                    value={registerValue.password}
                />
                <input type='submit' value='Registrer' className='login-submit' />
            </form>
        </div>
    )
}
