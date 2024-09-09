import React from 'react'
import './LeftBar.css'
import assets from '../../assets/assets';
import { topSec, midSec,  bottomSec } from '../../images';


export const LeftBar = () => {
  return (
    <div>
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
        
        <div className='midSec'>
          <h4>Events upcoming</h4>
            {midSec.map((item, index) => {
              return (
                  <div className="topSec" key={index}>
                    <img src={item.src} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
              )   
            })}
        </div>

        <div className='midSec'>
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
    </div>
  )
}
