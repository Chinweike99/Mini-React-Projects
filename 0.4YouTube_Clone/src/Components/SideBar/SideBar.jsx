import { useState } from 'react'
import './SideBar.css'
import assets from '../../assets/assets';

const SideBar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sideBar ${sidebar?"" : "smallSideBar"}`}>
      <div className="shortLink">
        <div className={`sideLinks ${category===0?"active" : ""}`} onClick={() => setCategory(0)}>
          <img src={assets.houseSolid} alt="" /><p>Home</p>
        </div>
        <div className={`sideLinks ${category===20?"active" : ""}`} onClick={() => setCategory(20)}>
          <img src={assets.gamepadSolid} alt="" /><p>Gaming</p>
        </div>
        <div className={`sideLinks ${category===2?"active" : ""}`} onClick={() => setCategory(2)}>
          <img src={assets.carSolid} alt="" /><p>Automobiles</p>
        </div>
        <div className={`sideLinks ${category===17?"active" : ""}`} onClick={() => setCategory(17)}>
          <img src={assets.sport} alt="" /><p>Sport</p>
        </div>
        <div className={`sideLinks ${category===24?"active" : ""}`} onClick={() => setCategory(24)}>
          <img src={assets.playstationSolid} alt="" /><p>Entertainment</p>
        </div>
        <div className={`sideLinks ${category===28?"active" : ""}`} onClick={() => setCategory(28)}>
          <img src={assets.microchipSolid} alt="" /><p>Technology</p>
        </div>
        <div className={`sideLinks ${category===10?"active" : ""}`} onClick={() => setCategory(10)}>
          <img src={assets.musicSolid} alt="" /><p>Music</p>
        </div>
        <div className={`sideLinks ${category===22?"active" : ""}`} onClick={() => setCategory(22)}>
          <img src={assets.blogSolid} alt="" /><p>Blogs</p>
        </div>
        <div className={`sideLinks ${category===25?"active" : ""}`} onClick={() => setCategory(25)}>
          <img src={assets.newsSolid} alt="" /><p>News</p>
        </div>
        <hr />
      </div>

      <div className='subScribedList'>
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