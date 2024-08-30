import React, { useEffect, useState } from "react"
import './Playvideo.css'
import assets from "../../assets/assets";
import { valueConverter } from "../../data";
import moment from "moment";

const PlayVideo = ({videoId}) =>{

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null)
    const [channelComment, setChannelComment] = useState([]); 

    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    // FETCH VIDEO DATA
    const fetchVideoData = async ()=>{
        const videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

        await fetch(videoDetails).then(res=>res.json()).then(data=>setApiData(data.items[0]))
    }

    // FETCH CHANNEL DATA
    const fetchChannelData = async() => {
        const channelDetails =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelDetails).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

        // FETCHING REAL TIME COMMENT
        const commenturl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commenturl).then(res=>res.json()).then(data=>setChannelComment(data.items))
    }



    useEffect(() => {
        fetchVideoData();
    }, [])

    useEffect(() => {
        fetchChannelData();
    }, [apiData])

    return (
        <div className="playVideo">
            {/* <video src={assets.video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Write a title"}</h3>
            <div className="playVideoInfo">
                <p>{valueConverter(apiData?apiData.statistics.viewCount: "0")}views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow(): ""}</p>
                <div>
                    <span><img src={assets.thumbsUp} alt="" />{valueConverter(apiData?apiData.statistics.likeCount: 0)}</span>
                    <span><img src={assets.thumbsDown} alt="" />1</span>
                    <span><img src={assets.shareSolid} alt="" />Share</span>
                    <span><img src={assets.downloadSolid} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle : ""}</p>
                    <span>{valueConverter(channelData?channelData.statistics.subscriberCount : "")} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="videoDiscription">
            <p >{apiData?apiData.snippet.description.slice(0,250):"Write a description"}</p>
                {/* <p>Learn to code with ease.</p>
                <p>Subscribe to get notified on uplaod of latest videos.</p> */}
                <hr />
                <h4>{valueConverter(apiData?apiData.statistics.commentCount: "0")} Comments</h4>
                {channelComment.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                                <div className="commentAction">
                                    <img src={assets.thumbsUp} alt="" />
                                    <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={assets.thumbsDown} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                {/* <div className="comment">
                    <img src={assets.userRegular} alt="" />
                    <div>
                        <h3>James Abrigodo <span>4 days ago</span></h3>
                        <p>These technologies cover both the backend (Node.js, Express.js, PostgreSQL) and the frontend (React.js, JavaScript).</p>
                        <div className="commentAction">
                            <img src={assets.thumbsUp} alt="" />
                            <span>110</span>
                            <img src={assets.thumbsDown} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={assets.userRegular} alt="" />
                    <div>
                        <h3>James Abrigodo <span>4 days ago</span></h3>
                        <p>These technologies cover both the backend (Node.js, Express.js, PostgreSQL) and the frontend (React.js, JavaScript).</p>
                        <div className="commentAction">
                            <img src={assets.thumbsUp} alt="" />
                            <span>110</span>
                            <img src={assets.thumbsDown} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={assets.userRegular} alt="" />
                    <div>
                        <h3>James Abrigodo <span>4 days ago</span></h3>
                        <p>These technologies cover both the backend (Node.js, Express.js, PostgreSQL) and the frontend (React.js, JavaScript).</p>
                        <div className="commentAction">
                            <img src={assets.thumbsUp} alt="" />
                            <span>110</span>
                            <img src={assets.thumbsDown} alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PlayVideo;