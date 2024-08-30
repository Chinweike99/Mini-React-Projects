import React, { useEffect, useState } from "react";
import './Recommended.css'
import assets from "../../assets/assets";

const Recommended = ({categoryId}) => {

    const [recommendedVideo, setRecommended] = useState([]);
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

    const fetchRecommended = async()=> {
        const getVideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(getVideos).then(res=>res.json()).then(data=>setRecommended(data.items))
    }

    useEffect(()=>{
        fetchRecommended();
    }, [])

    
    return(
        <div className="recommended">
            {recommendedVideo.map((item, index) => {
                return(
                    <div key={index} className="sideVideos">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="videoInfo">
                            <h4>{item.snippet.title}</h4>
                            <p>AiTutor</p>
                            <p>400k views</p>
                        </div>
                    </div>
                )
            })}
            
            {/* <div className="sideVideos">
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
            </div> */}
        </div>
    )
}

export default Recommended;