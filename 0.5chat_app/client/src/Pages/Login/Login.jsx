import { useContext, useState } from 'react'
import './Login.scss'
import { AuthContext } from '../../Context/authContext';
import axios from 'axios';

export const Loggin = () => {

  const {login} = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(true);
  const [error, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  });
  
  const handleInput = (e) => {
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  console.log(inputs);


  const handleLogin = async(e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3200/api/auth/register", inputs)
    } catch (error) {
      setErr(error.response);
    }
  }

  console.log(error)

  const hanldeShowLogin = () =>{
    setShowLogin(!showLogin)
  }


  return (
    <div className='login'>
      <div className='card'>
          <div className='leftDiv'>
            <h1>Hello World</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <span>Do you have an account ?</span>
            <button onClick={hanldeShowLogin}>{showLogin? "Register" : "Login"}</button>
          </div>

          <div className="rightDiv">
                <h1>{showLogin? "Welcome back.." : "Register"}</h1>
                <form action="">
                    <input onChange={handleInput} type="text" placeholder="Username" name='username'required/>
                    {!showLogin? <input type="text"  placeholder="Full Name" name='name'/> : null}
                    
                    
                    {!showLogin?  <input type="email" placeholder="example@gmail.com" name='email' onChange={handleInput} required/> : null}
                    <input type="password" placeholder='Password' name='password' onChange={handleInput} />
                    {!showLogin? <input type="password" placeholder='Confirm password'/> : null}
                    {error && error}

                    {/* <p style={{color: "red"}}>{error}</p> */}

                    <button onClick={handleLogin}>{showLogin? "Login" : "Register"}</button>
                    {/* <button onClick={handleLogin}>Submit</button> */}
                </form>
          </div>
      </div>
    </div>
  )
}
