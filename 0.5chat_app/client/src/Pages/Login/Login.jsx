import { useContext, useState } from 'react'
import './Login.scss'
import { AuthContext } from '../../Context/authContext';

export const Loggin = () => {

  const {login} = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    login();
  }

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
                    <input type="text" placeholder="Username" />
                    {!showLogin? <input type="text"  placeholder="Full Name"/> : null}
                    
                    
                    {!showLogin?  <input type="email" placeholder="example@gmail.com"/> : null}
                    <input type="password" placeholder='Password'/>
                    {!showLogin? <input type="password" placeholder='Confirm password'/> : null}
                    <button onClick={handleLogin}>{showLogin? "Login" : "Register"}</button>
                </form>
          </div>
      </div>
    </div>
  )
}
