import { useState } from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
      <SideBar sidebar={sidebar}/>
      <div className={`container ${sidebar? "" : "largeContainer"}`}>
          <Feed />
      </div>
      
    </>
  )
}

export default Home;
