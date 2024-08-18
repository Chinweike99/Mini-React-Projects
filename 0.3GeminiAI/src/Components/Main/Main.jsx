import React, { useState } from "react";
import './Main.css'
import { assets } from "../../assets/assets";

const MainSection = () => {

    const [displayInput, setDisplayInput] = useState("");
    const [pasteSearch, setPasteSearch] = useState("");
    const [hiContents, setHideContents] = useState(true)

    const hideContent = () =>{
        setHideContents(false);
    }
    const handleSearch = () =>{
        setPasteSearch(displayInput);
        hideContent();
    }



    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.images} alt="" />
            </div>
            <div className="mainContainer">
            {hiContents ?
                <div className="salute">
                    <p><span>Hello, Dev .</span></p> 
                    <p>How can i assist you today ?.</p>
                </div>
                : null}
                {hiContents ?
                <div className="cards">
                    <div className="card">
                        <p>Gemini Ai, the world most advanced GPT</p>
                        <img src={assets.compassRegular} alt="" />
                    </div>
                    <div className="card">
                        <p>What Programming Language are you learning</p>
                        <img src={assets.lightbulb} alt="" />
                    </div>
                    <div className="card">
                        <p>What country is your fav</p>
                        <img src={assets.messageSolid} alt="" />
                    </div>
                    <div className="card">
                        <p>Paris is one of the most beautiful places in the world</p>
                        <img src={assets.codeSolid} alt="" />
                    </div>
                </div>
                : null}

                <div className="searchBox">
                <div className="searchResult">
                    <p>{pasteSearch}</p>
                </div>
                </div>

                <div className="mainBottom">
                    <div className="searchBox">
                        <input type="text"  
                        placeholder="Enter prompt"
                        onChange={(e) => setDisplayInput(e.target.value)}
                        />
                        <div className="bottomImages">
                            <img src={assets.imagesSolid}alt="" />
                            <img src={assets.microphoneSolid}alt="" />
                            <img src={assets.paperPlane} alt="" 
                            onClick={handleSearch}
                            />
                        </div>
                    </div>
                    <p className="bottomInfo">
                        Sometimes Informations can be inaccurate. Hence, endeavor to verify...
                    </p>
                </div>
            </div>
        </div>
      )
    }
    
    export default MainSection;