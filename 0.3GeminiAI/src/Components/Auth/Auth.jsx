import React, { useState } from "react";
import './Auth.css'
// import '../../index.css'
import { useCookies } from 'react-cookie'

const Auth = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null);
    const [isLogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);
    const [error, setError] = useState(null)

    console.log(username, email, password);
    console.log(cookies)

    // FUNCTION TO VIEW LOGIN
    const viewLogin = (status) => {
        setIsLogin(status)
    }

    const handleSubmit = async (e, endpoint) => {
        const {username, email, password} = req.body
        e.preventDefault()
        if(!isLogin && password !== confirmPass){
            setError("Passwords do not match")
            return
        }
        const response = await fetch(`${process.env.LOCAL_PORT}/${endpoint}`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: req.body
        });
        const data = await response.json();
        if (data.detail){
            setError(data.detail);
        }else{
            setCookie("Email", data.email)
            setCookie("AuthToken", data.token)

            window.location.reload();
        }
    }

    const createAccount = async()=> {
            const body = {username, email, password}

        try {
            const response = await fetch(`${process.env.LOCAL_PORT}`,{
                method: "POST",
                headers: {"Content-Type": "Application/json"},
                body: JSON.stringify(body)
            });
            const data = await response();
            console.log(data);
        } catch (error) {
            console.error(error.message)
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
                    <input className="formSubmit" type="submit" onClick={(e) =>handleSubmit(e, isLogin? "login" : "signup")}/>
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