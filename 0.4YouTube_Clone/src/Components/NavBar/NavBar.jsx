import { useState } from 'react'
import './NavBar.css'
import assets from '../../assets/assets';

const NavBar = () => {
  return (
      <nav className='flexDiv'>
        <div className='navLeft flexDiv'>
            <img className='menuIcon' src={assets.menuBar} alt="" />
            <img className='logo' src={assets.youTube} alt="" />
        </div>

        <div className="navMiddle flexDiv">
          <div className="searchBox flexDiv">
            <input type="text" placeholder='Search'/>
            <img src={assets.glassSolid} alt="" />
          </div>
            
        </div>

        <div className="navRight flexDiv">
          <img src={assets.uploadSolid} alt="" />
          <img src={assets.puzzleSolid} alt="" />
          <img src={assets.bellSolid} alt="" />
          <img src={assets.userRegular} className='userIcon' alt="" />
        </div>
      </nav>
  )
}

export default NavBar;