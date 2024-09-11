import React from 'react'
import { Link } from 'react-router-dom'
import './PostReact.scss'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';



export const PostReact = ({item}) => {
  return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={item.profilePic} alt="" />
                <div className='details'>
                    <Link to={`/profile/${item.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                        <span className='name'>{item.name}</span>
                    </Link>
                    <span className="date"> 1 Minute ago</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon />
        </div>

        <div className="content">
            <p>{item.desc}</p>
            <img src={item.img} alt="" />
        </div>

        <div className="rection"></div>
        </div> 
    </div>
  )
}
