import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PostReact.scss'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Comments } from '../Comments/Comments';



export const PostReact = ({item, backColor}) => {

    const [liked, setLiked] = useState(false);
    const handleliked = () => {
        setLiked(!liked)
    }

    const [showComments, setShowComments] = useState(false);
    const handleShowComments =() => {
        setShowComments(!showComments)
    }

  return (
    <div className='post' >
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

        <div className="reaction">
            <div className='reactonSecond'>
                <button className="item"  onClick={handleliked}>
                    {liked?  <FavoriteOutlinedIcon style={{color: "red"}} className='uiIcon'/> :
                    <FavoriteBorderOutlinedIcon className='uiIcon'/>}
                </button>
            </div>
            <div  className="item" onClick={handleShowComments}>
                <ForumOutlinedIcon className='uiIcon'/>
                <span>Comments</span>
            </div>
            <div className="item">
                <ShareOutlinedIcon className='uiIcon'/>
                <span>shares</span>
            </div>
        </div>
        {showComments ? <Comments /> : null}
        

        </div> 
    </div>
  )
}
