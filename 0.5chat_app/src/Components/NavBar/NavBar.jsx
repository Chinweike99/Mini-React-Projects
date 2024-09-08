import React from 'react'
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


export const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="left">
            <Link to="/">
            <span>CMedia</span>
            </Link>
            <HomeOutlinedIcon />
            <NightlightOutlinedIcon />
            <WidgetsOutlinedIcon />
            <div className="search">
                <input type="text" placeholder='Search'/>
                <SearchOutlinedIcon />
            </div>
        </div>

        <div className="right">
            <FileUploadOutlinedIcon />
            <MailOutlinedIcon />
            <NotificationsActiveOutlinedIcon />
            <Person3OutlinedIcon />
            <span>Daniel Doe</span>
        </div>
    </div>
  )
}
