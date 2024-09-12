import React from 'react'
import './RightBar.css'
import { rightTop, rightMid, rightBottom } from '../../images'

export const RightBar = ({backColor}) => {
  return (
    <div className='rightBar' style={{background: backColor? "#ece6f1": "rgb(141, 112, 186)"}}>
      <div className='mainContainer'>
      <div className='topDiv'>
        <div className='rightMain'>
          <h4>Suggestions</h4>
          {rightTop.map((item, index) => {
            return(
              <div className="content" key={index}>
                <div className=''>
                  <img src={item.src} alt="" />
                  <label>{item.label}</label>
                </div>
                <div>
                  <button style={{color: backColor? "#fff" : "#fff", background: backColor? "rgb(8, 71, 190)": "rgb(141, 112, 186)"}}>Follow</button>
                  <button style={{color: backColor? "#fff" : "#fff", background: backColor? "rgb(230, 5, 91)": "red"}}>delete</button>
                </div>
              </div>
            )
          })}
          </div>
        </div>
        

      {/* MIDDLE SECTION */}
      <div className='topDiv'>
        <div className='rightMain'>
          <h4>Latest Activities</h4>
          {rightMid.map((item, index) => {
            return(
              <div className="content" key={index}>
                <div className=''>
                  <img src={item.src} alt="" />
                  <label>{item.label}</label>
                </div>
                <div className='time'>
                  <p>{item.time}</p>
                </div>
              </div>
            )
          })}
          </div>
        </div>

          {/* BOTTOM */}
      <div className='bottomDiv'>
        <div className='rightMain'>
          <h4>Online friends</h4>
          {rightBottom.map((item, index) => {
            return(
              <div className="content" key={index}>
                <div className=''>
                  <img src={item.src} alt="" />
                  <label>{item.label}</label>
                </div>
                <div className='online'>
                  
                </div>
              </div>
            )
          })}
          </div>
        </div>
      
        </div>
    </div>
  )
}
