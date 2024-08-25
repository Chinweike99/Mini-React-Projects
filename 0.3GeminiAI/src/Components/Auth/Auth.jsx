import React, { useState } from "react";
import './Auth.css'
// import '../../index.css'
import { useCookies } from 'react-cookie'
import * as Yup from 'yup';

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

    // Define the Yup validation schema for the email
    const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must contain a valid domain like '.com'")
      .required("Email is required"),
  });

    const handleSubmit = async (e, endpoint) => {
        // const {username, email, password} = req.body
        e.preventDefault()

        try {
            await validationSchema.validate({ email });
          } catch (err) {
            setError(err.message);
            return;
          }

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
                    <h1 style={{color: !isLogin ? "#fff" : "#333"}}>{isLogin ? "Login" : "Sign Up.."}</h1>
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
                        <button onClick={() => viewLogin(false)} style={{backgroundColor : !isLogin ? "white" : "#2e5798", color: !isLogin ? "#333" : "white"}}>Sign up</button>
                        <button onClick={() => viewLogin(true)} style={{backgroundColor : isLogin ? "white" : "#2e5798", color: !isLogin ? "#fff" : "black"}}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Auth;