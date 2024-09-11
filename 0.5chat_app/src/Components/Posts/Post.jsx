import React from 'react'
import './Post.scss'
import assets from '../../assets/assets';
import { PostReact } from '../PostReact/PostReact';

export const Post = () => {

  const posts = [
    {id: 1, name: "Christabel Abel", userId: 1, img: `${assets.image1}`, desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", profilePic: `${assets.image4}`},
    {id: 2, name: "Amandla Sternberg", userId: 2, img: `${assets.img1}`, desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",  profilePic: `${assets.image4}`},
    
    {id: 3, name: "David Adeleke", userId: 3, desc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages", img: `${assets.image6}`, profilePic: `${assets.image4}`},

    {id: 4, name: "John Doe", userId: 4, img: `${assets.images1}`, desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old", profilePic: `${assets.image4}`},
   
];


  return (
    <div className="post">
      {posts.map((item, index) => {
        return (
          <PostReact item={item} key={index}/>
        )
      })}
    </div>
  )
}
