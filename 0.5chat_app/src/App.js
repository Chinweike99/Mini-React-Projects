import './App.css';
import { LeftBar } from './Components/LeftBar/LeftBar';
import { NavBar } from './Components/NavBar/NavBar';
import { RightBar } from './Components/Rightbar/RightBar';
import { Loggin } from './Pages/Login/Login';
import { Home } from './Pages/Home/Home';
import {Profile} from './Pages/Profile/Profile'
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate} from 'react-router-dom'
import { useState } from 'react';


function App() {

  const currentUser = (true);
  const [backColor, setBackColor] = useState(false);


  const Layout = () => {
    return (
      <div className={backColor? 'layout': 'layDark'}>
        <NavBar className="navBar" backColor={backColor} setBackColor={setBackColor}/>
        <div style={{ display: "flex", marginTop: "70px", padding: "15px", height: "100vh"}}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if(!currentUser){
      return <Navigate to="/register" />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/", element: (<ProtectedRoute><Layout /></ProtectedRoute> ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id",  element: <Profile /> }
      ]
    },
    { path: "/register", element: <Loggin/> }
  ])

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
