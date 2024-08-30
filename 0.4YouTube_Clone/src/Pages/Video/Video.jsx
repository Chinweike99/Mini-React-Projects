import { useState } from 'react'
import './Video.css'
import PlayVideo from '../../Components/Playvideo/Playvideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {

  // GET the categoryId and videoId of each video
  const {videoId, categoryId} = useParams()

  return (
    <div className='playContainer'>
      <PlayVideo videoId={videoId} categoryId={categoryId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video;
