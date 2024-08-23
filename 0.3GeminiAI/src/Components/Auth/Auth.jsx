import React, { useState } from "react";
import './Auth.css'
import '../../index.css'

const Auth = () => {

    const [isLogin, setIsLogin] = useState(false)

    // FUNCTION TO VIEW LOGIN

    const viewLogin = (status) => {
        setIsLogin(status)
    }

    return (
        <div className="mainformDiv">
            <div className="formDiv">
                
                <form action="">
                    <h1 style={{color: !isLogin ? "green" : "#333"}}>{isLogin ? "Login" : "Sign Up.."}</h1>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="@example.com" required/>
                    <input type="password" placeholder="Password" required/>
                    {!isLogin ? <input type="password" placeholder="Confirm Password" required/>
                    : null}
                    <input className="formSubmit" type="submit"/>
                </form>
                <div className="submitBtn">
                        <button onClick={() => viewLogin(false)}>Sign up</button>
                        <button onClick={() => viewLogin(true)}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Auth;