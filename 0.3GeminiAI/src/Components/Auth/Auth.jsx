import React, { useState } from "react";
import './Auth.css'
// import '../../index.css'
import { useCookies } from 'react-cookie'

const Auth = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null);
    const [isLogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);
    const [error, setError] = useState(null)

    // FUNCTION TO VIEW LOGIN
    const viewLogin = (status) => {
        setIsLogin(status)
    }

    const handleSubmit = async (e, endpoint) => {
        // const {username, email, password} = req.body
        e.preventDefault()
        if(!isLogin && password !== confirmPass){
            setError("Passwords do not match")
            return
        }
        const response = await fetch(`http://localhost:4400/${endpoint}`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password})
        });
        const data = await response.json();
        if (data.detail){
            setError(data.detail);
        }else{
            setCookie("Email", data.email)
            setCookie("Username", data.username);
            setCookie("AuthToken", data.token)
            window.location.reload();
        }
    }

    return (
        <div className="mainformDiv">
            <div className="formDiv">
                
                <form action="">
                    <h1 style={{color: !isLogin ? "green" : "#333"}}>{isLogin ? "Login" : "Sign Up.."}</h1>
                    {!isLogin ? <input type="text" placeholder="Username"
                    onChange={(e)=>setUsername(e.target.value)}
                    required/>
                    :null}
                    <input type="email" placeholder="@example.com"
                    onChange={(e)=> setEmail(e.target.value)}
                    required/>
                    <input type="password" placeholder="Password" 
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>
                    {!isLogin ? <input type="password" placeholder="Confirm Password"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required/>
                    : null}
                    <input className="formSubmit" type="submit" onClick={(e) =>handleSubmit(e, isLogin ? "login" : "signup")}/>
                    <p style={{color: "red"}}>{error}</p>
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