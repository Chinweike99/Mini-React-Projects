import { useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets';


const SideBar = () => {

  return (
    <div className='sideBar'>
        <div className="top">
            <img className='menu' src={assets.barsSolid} alt="" />
            <div className="newChat">
                <img src={assets.plusSolid} alt="" />
                <p>New chat</p>
            </div>
            <div className="recent">
                <p className="recentTitle">Recent</p>
                <div className="recentEntry">
                    <img src={assets.message} alt="" />
                    <p>What is Nodejs ..</p>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="bottomItem recentEntry">
                <img src={assets.circleQuestion} alt="" />
                <p>Help</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar;