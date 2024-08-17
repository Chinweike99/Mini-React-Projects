import React from "react";
import './Main.css'
import { assets } from "../../assets/assets";

const MainSection = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.images} alt="" />
            </div>
        </div>
      )
    }
    
    export default MainSection;