import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import woman from '../Assets/woman.jpg'

function ImageGenerator() {

    const [imgUrl, setImageUrl] = useState("/");
    let inputRef = useRef(null);

    

  return (
    <div className="ai-image-generator">
        <div className='header'>
            Ai Image <span>Generator</span>
            <div className="img-loading">
                <div className="image">
                    <img src={imgUrl === "/"? woman : imgUrl} alt="" />
                </div>
            </div>
        </div>
        <div className="search-box">
            <input type="text" ref={inputRef} className='search-input' placeholder='Describe Image you want'/>
            <div className="generate-btn">Generate</div>
        </div>
    </div>
  );
}

export default ImageGenerator;
