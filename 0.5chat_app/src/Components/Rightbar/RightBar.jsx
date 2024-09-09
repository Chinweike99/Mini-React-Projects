import React from 'react'
import './RightBar.css'
import { rightTop } from '../../images'

export const RightBar = ({backColor}) => {
  return (
    <div className='rightBar' style={{background: backColor? "#ece6f1": "rgb(141, 112, 186)"}}>
      <div className='topDiv'>
        {rightTop.map((item, index) => {
          return(
            <div className="content" key={index}>
              <div className=''>
                <img src={item.src} alt="" />
                <label htmlFor="">{item.label}</label>
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
  )
}
