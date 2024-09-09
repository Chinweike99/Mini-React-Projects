import './App.css';
import { LeftBar } from './Components/LeftBar/LeftBar';
import { NavBar } from './Components/NavBar/NavBar';
import { RightBar } from './Components/Rightbar/RightBar';
import { Loggin } from './Pages/Login/Login';
import { Home } from './Pages/Home/Home';
import {Profile} from './Pages/Profile/Profile'
import { createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom'
import { useContext, useState } from 'react';
import './style.scss';
import { AuthContext } from './Context/authContext';

function App() {

  const {currentUser} = useContext(AuthContext);
  const [backColor, setBackColor] = useState(true);


  const Layout = () => {
    return (
      <div id='theme-dark' className={backColor? 'layout': 'layDark'}>
        <NavBar className="navBar" backColor={backColor} setBackColor={setBackColor}/>
        <div style={{ display: "flex", marginTop: "70px", padding: "1px"}}>
          <LeftBar backColor={backColor} setBackColor={setBackColor}/>
          <Outlet />
          <RightBar backColor={backColor} setBackColor={setBackColor}/>
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
