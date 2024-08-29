import React from "react"
import './Playvideo.css'
import assets from "../../assets/assets";

const PlayVideo = ({videoId}) =>{
    return (
        <div className="playVideo">
            {/* <video src={assets.video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>Learning web development</h3>
            <div className="playVideoInfo">
                <p>2918 views &bull; 3 days ago</p>
                <div>
                    <span><img src={assets.thumbsUp} alt="" /> 190</span>
                    <span><img src={assets.thumbsDown} alt="" />1</span>
                    <span><img src={assets.shareSolid} alt="" />Share</span>
                    <span><img src={assets.downloadSolid} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={assets.amandla} alt="" />
                <div>
                    <p>Chinweike</p>
                    <span>2M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="videoDiscription">
                <p>Learn to code with ease.</p>
                <p>Subscribe to get notified on uplaod of latest videos.</p>
                <hr />
                <h4>350 Comments</h4>
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
                </div>
            </div>
        </div>
    )
}

export default PlayVideo;