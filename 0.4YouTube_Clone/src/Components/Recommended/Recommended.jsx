import React from "react";
import './Recommended.css'
import assets from "../../assets/assets";

const Recommended = () => {
    return(
        <div className="recommended">
            <div className="sideVideos">
                <img src={assets.Ai} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
            <div className="sideVideos">
                <img src={assets.dataAnalysis2} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
            <div className="sideVideos">
                <img src={assets.comedy} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
            <div className="sideVideos">
                <img src={assets.dataAnalysis} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
            <div className="sideVideos">
                <img src={assets.Ai2} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
            <div className="sideVideos">
                <img src={assets.health} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
            <div className="sideVideos">
                <img src={assets.amandla} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
            <div className="sideVideos">
                <img src={assets.health2} alt="" />
                <div className="videoInfo">
                    <h4>Best Channel to learn about Artificial Intelligence</h4>
                    <p>AiTutor</p>
                    <p>400k views</p>
                </div>
            </div>
        </div>
    )
}

export default Recommended;