import { useState } from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'

const Home = ({sidebar}) => {
  return (
    <>
      <SideBar sidebar={sidebar}/>
    </>
  )
}

export default Home;
