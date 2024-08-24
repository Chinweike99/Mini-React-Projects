import { useEffect, useState } from 'react'
import SideBar from './Components/SideBar/SideBar'
import MainSection from './Components/Main/Main';
import Auth from './Components/Auth/Auth';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [access, setAccess] = useState(null);

  const userEmail = "wike@gmail.com"
  const authToken = cookies.authToken

  const [hideAuth, setHideAuth ] = useState(true)
  
  const getData = async() => {
    try {
      const response = await fetch(`http://localhost:4400/signup/${userEmail}`)
      const jsonReply = await response.json();
      console.log(jsonReply);
      setAccess(jsonReply)
    } catch (error) {
      console.error(error.message)
    }
  }


  useEffect(() => {
    getData();
  }, [])
  console.log(access);



  return (
    <>
      {hideAuth && <Auth />}
      {!hideAuth && 
      <>
      <SideBar />
      <MainSection />
      </>
    }
    </>
  )
}

export default App;
