import React, { useRef, useState } from 'react';
import './Login.css'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://cdn.discordapp.com/attachments/869604147291357278/882379338484441118/163044595391699064.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                
                <form >
                    <h5>E-mail</h5>
                    <input type="email" />

                    <h5>Password</h5>
                    <input type='password' />

                    <button type='submit'
                    className='login__signInButton'>Sign In</button>
                </form>
                 
                 </div>
                <p>
                By Signing-in you agree to Nicks Conditions of Use & Sale. Please see our privacy notice (its totally there), our cookies notice (only 396 pages long) and our Interest-Based Ads.
                </p>

            </div>
    )
    }

export default Login
