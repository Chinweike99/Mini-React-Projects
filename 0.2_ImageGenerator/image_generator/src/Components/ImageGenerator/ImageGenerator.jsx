import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import woman from '../Assets/woman.jpg'

function ImageGenerator() {

    const [imgUrl, setImageUrl] = useState("/");
    let inputRef = useRef(null);

    const generateImage = async() => {
        if(inputRef.current.value === "") {
            return 0;
        }
        const response = await fetch("https://api.openai.com/v1/images/generations",{
            method: "POST",
            headers: {"Content-Type": "application/json",
                Authorization: `Bearer ${process.env.API_IMAGEKEY}`,
                "User-Agent": "Chrome",
            },
            body: JSON.stringify({
                prompt: `${inputRef.current.value}`,
                n:1,
                size:"512x512"
            }),
        });
        let data = await response.json();
        console.log(data);
    }

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
            <div className="generate-btn" onClick={() => generateImage()}>Generate</div>
        </div>
    </div>
  );
}

export default ImageGenerator;
