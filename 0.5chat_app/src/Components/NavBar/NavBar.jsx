import React, { useState } from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';


export const NavBar = ({backColor, setBackColor}) => {

   const handleColor = () => {
    setBackColor(!backColor);
   }

  return (
    <nav>
        <div className='navBar' style={{background: backColor? "rgb(141, 112, 186)" : "rgb(141, 112, 186)"}}>
            <div className="left" style={{color: backColor? "black" : "#fff"}}>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>
                    <span style={{color: backColor? "black" : "#fff"}}>CMedia</span>
                </Link>
                <HomeOutlinedIcon className='home' />
                <NightlightOutlinedIcon onClick={handleColor}/>
                <WidgetsOutlinedIcon />
            </div>
            <div className="search">
                <input type="text" placeholder='Search'/>
                <SearchOutlinedIcon />
            </div>

            <div className="right" style={{color: backColor? "black" : "#fff"}}>
                <FileUploadOutlinedIcon />
                <MailOutlinedIcon />
                <NotificationsActiveOutlinedIcon />
                <Person3OutlinedIcon />
                <span>Daniel Doe</span>
            </div>
    </div>
    </nav>
  )
}
