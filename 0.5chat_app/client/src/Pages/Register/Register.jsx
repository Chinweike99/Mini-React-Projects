import "./Register.scss"
import "../Login/Login.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


export const Register = () => {
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
      console.error(error)
      setErr(error.response.data);
    }
  }


  return (
    <div className='login'>
      <div className='card'>
          <div className='leftDiv'>
            <h1>Hello World</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <span>Do you have an account ?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>

          </div>

          <div className="rightDiv">
                <h1>Register</h1>
                <form action="">
                    <input  type="text" placeholder="Username" name='username' onChange={handleInput}/>

                    <input type="text"  placeholder="Full Name" name='name' onChange={handleInput}/>
                    <input type="email" placeholder="example@gmail.com" name='email' onChange={handleInput}/>
                    <input type="password" placeholder='Password' name='password' onChange={handleInput} />
                    <input type="password" placeholder='Confirm password' onChange={handleInput}/>
                    {error && error}
                    <button onClick={handleLogin}>Register</button>
                </form>
          </div>
      </div>
    </div>
  )
}