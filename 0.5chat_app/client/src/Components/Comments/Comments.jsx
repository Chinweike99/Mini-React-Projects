import React from 'react'
import assets from '../../assets/assets'
import './Comments.scss'

export const Comments = () => {
  return (
    <div className='mainComments'>
        <div className='postComment'>
            <img src={assets.img1} alt="image" />
            <input type="text" placeholder='Comment'/>
            <button>Send</button>
        </div>
        <div className="comments">
            <div className='mainReply'>
                <img src={assets.image6} alt="" />
                <div className='reply'>
                    <span>John Doe</span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <span className='commentTime'>2 hours ago</span>
                </div>
            </div>
            <div className='mainReply'>
                <img src={assets.images1} alt="" />
                <div className='reply'>
                    <span >Christabel Abel</span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <span className='commentTime'>15 minutes ago</span>
                </div>
            </div>
        </div>
    </div>
  )
}
