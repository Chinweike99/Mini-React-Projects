import React from 'react'
import './LeftBar.css'
import { topSec, midSec,  bottomSec } from '../../images';


export const LeftBar = ({backColor}) => {
  return (
    <div className='leftMainBar' style={{color: backColor? "black" : "#fff", background: backColor? "#ece6f1": "rgb(141, 112, 186)"}}>
      <div className='content'>
        <div>
            {topSec.map((item, index) => {
              return (
                  <div className="topSec" key={index}>
                    <img src={item.src} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
              )   
            })}
        </div>
        <hr />
        <div className='midSec'>
          <h4>Shortcuts</h4>
            {midSec.map((item, index) => {
              return (
                  <div className="topSec" key={index}>
                    <img src={item.src} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
              )   
            })}
        </div>
            <hr />
        <div className='bottomSec'>
          <h4>Others</h4>
            {bottomSec.map((item, index) => {
              return (
                  <div className="topSec" key={index}>
                    <img src={item.src} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
              )   
            })}
        </div>
        <div>
          <p>Hello World</p>
        </div>
        </div>
    </div>
  )
}
