import { useState } from 'react'
import SideBar from './Components/SideBar/SideBar'
import MainSection from './Components/Main/Main';
import Auth from './Components/Auth/Auth';

function App() {

  const [hideAuth, setHideAuth ] = useState(true)
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
