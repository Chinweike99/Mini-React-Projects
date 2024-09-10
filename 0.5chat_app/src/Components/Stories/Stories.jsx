import React, { useContext } from 'react'
import './Stories.scss'
import assets from '../../assets/assets'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { AuthContext } from '../../Context/authContext';

export const Stories = () => {
    const {currentUser} = useContext(AuthContext);

    const stories = [
        {id: 1, name: "John Doe", img: `${assets.image1}` },
        {id: 2, name: "Amandla Sternberg", img: `${assets.image4}` },
        {id: 3, name: "David Adeleke", img: `${assets.image6}` },
        {id: 4, name: "John Doe", img: `${assets.images1}` },
        {id: 5, name: "Stephanie Mathias", img: `${assets.img1}` },
    ];


  return (
    <div>
        <div className="stories">

            <div className='myStory'>
                <img src={currentUser.profilePic} alt="" />
                <p>{currentUser.name}</p>
            </div>

            <div className="cross">
                <AddOutlinedIcon />
            </div>
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
