import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css'
import logo from "../../images/facebook.png";
import {auth,provider} from '../../firebase'
function Login(props) {
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo}/>
                <button type="submit" onClick={signIn}>Sign In</button>
            </div>
        </div>
    )
}
export default Login

