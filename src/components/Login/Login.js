import { Button } from '@material-ui/core';
import React from 'react'
import logo from "../../images/facebook.png";
function Login(props) {
    const signIn = () => {
        
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo}/>
                <Button type="submit" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}
export default Login

