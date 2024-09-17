import { useContext, useState } from 'react'
import './Login.scss'
import { AuthContext } from '../../Context/authContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Loggin = () => {

  const {login} = useContext(AuthContext);
  // const [showLogin, setShowLogin] = useState(true);
  const [error, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  
  const handleInput = (e) => {
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  // console.log(inputs);


  const handleLogin = async(e) => {
    e.preventDefault();

    try {
      await login(inputs)
    } catch (error) {
      console.error(error)
      setErr(error.response);
    }
  }

  console.log(error)



  return (
    <div className='login'>
      <div className='card'>
          <div className='leftDiv'>
            <h1>Hello World</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <span>Do you have an account ?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
            
          </div>

          <div className="rightDiv">
                <h1>Welcome Back</h1>
                <form action="">
                    <p></p>
                    <input onChange={handleInput} type="text" placeholder="Username" name='username'/>

                    {/* <input type="text"  placeholder="Full Name" name='name'/>
                    <input type="email" placeholder="example@gmail.com" name='email' onChange={handleInput} /> */}

                    <input type="password" placeholder='Password' name='password' onChange={handleInput} />

                    {/* <input type="password" placeholder='Confirm password'/>  */}
                    {error && error}
                    <button onClick={handleLogin}>Login</button>
                </form>
          </div>
      </div>
    </div>
  )
}
