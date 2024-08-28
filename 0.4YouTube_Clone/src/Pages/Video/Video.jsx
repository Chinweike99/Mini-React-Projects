import { useState } from 'react'
import './Video.css'
import PlayVideo from '../../Components/Playvideo/Playvideo';
import Recommended from '../../Components/Recommended/Recommended';

const Video = () => {
  return (
    <div className='playContainer'>
      <PlayVideo />
      <Recommended />
    </div>
  )
}

export default Video;
