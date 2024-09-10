import React from 'react'
import './Stories.scss'
import assets from '../../assets/assets'

export const Stories = () => {

    const stories = [
        {id: 1, name: "John Doe", img: `${assets.image1}` },
        {id: 2, name: "Amandla Sternberg", img: `${assets.image6}` },
        {id: 3, name: "David Adeleke", img: `${assets.image4}` },
        {id: 4, name: "John Doe", img: `${assets.images1}` },
        {id: 5, name: "Stephanie Mathias", img: `${assets.img1}` },
    ];


  return (
    <div>
        <div className="stories">
            {stories.map((item, index)=>{
                return(
                    <div className='myStory' key={index}>
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
