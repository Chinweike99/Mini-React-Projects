import '../App.css';
import React, { useState } from 'react';
import { ChangeName } from './ChangeName';

function App() {
    const [username, setUsername] = useState("");
    const handleInput = e => {
        setUsername(e.target.value);
    }
    
  return (
    <div className="App">
      <h1>State and Props</h1>
      <label htmlFor='username'>
        Enter your name
      </label> <br/>
      <input 
      id='username'
      type='text' placeholder='Your Username'
      onChange={handleInput}/>
      <p>Hi {username}</p>
      <ChangeName username={username} setUsername={setUsername}/>
    </div>
  );
}

export default App;
