import { useState } from 'react'
import './SideBar.css'
import assets from '../../assets/assets';

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="shortLink">
        <div className="sideLinks">
          <img src={assets.houseSolid} alt="" /><p>Home</p>
        </div>
        <div className="sideLinks">
          <img src={assets.gamepadSolid} alt="" /><p>Gaming</p>
        </div>
        <div className="sideLinks">
          <img src={assets.carSolid} alt="" /><p>Automobiles</p>
        </div>
        <div className="sideLinks">
          <img src={assets.sport} alt="" /><p>Sport</p>
        </div>
        <div className="sideLinks">
          <img src={assets.playstationSolid} alt="" /><p>Entertainment</p>
        </div>
        <div className="sideLinks">
          <img src={assets.microchipSolid} alt="" /><p>Technology</p>
        </div>
        <div className="sideLinks">
          <img src={assets.musicSolid} alt="" /><p>Music</p>
        </div>
        <div className="sideLinks">
          <img src={assets.blogSolid} alt="" /><p>Blogs</p>
        </div>
        <div className="sideLinks">
          <img src={assets.newsSolid} alt="" /><p>News</p>
        </div>
        <hr />
      </div>

      <div className='subScribed'>
        <h3>Subscribed</h3>
        <div className="sideLink">
          <img src={assets.image2} alt="" /><p>PewDiePie</p>
        </div>
        <div className="sideLink">
          <img src={assets.amandla} alt="" /><p>Amandla Sterberg</p>
        </div>
        <div className="sideLink">
          <img src={assets.images3} alt="" /><p>Jason Mamoa</p>
        </div>
        <div className="sideLink">
          <img src={assets.image4} alt="" /><p>Priyanka C. Jonas</p>
        </div>
        <div className="sideLink">
          <img src={assets.image6} alt="" /><p>David Adeleke</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;