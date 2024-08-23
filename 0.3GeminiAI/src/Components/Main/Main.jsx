import React, { useContext, useState } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const MainSection = () => {

    const {prevPrompt, setPrevPrompt, onSent, setRecentPrompt, recentPrompt, showResult, loading, resultData, input, setInput, saveRecent} = useContext(Context)

    const [hideLog, setHideLog] = useState(false);


    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.images} alt="" onClick={() => setHideLog(!hideLog)}/>
                {hideLog ? 
                <div className="logOut">
                    <p>owner of Account</p>
                    <p>About</p>
                    <button>Log Out</button>
                </div>
                : null }
            </div>
            <div className="mainContainer">

                {!showResult ? 
                <>
                    <div className="salute">
                    <p><span>Hello, Dev .</span></p>
                    <p>How can i assist you today ?.</p>
                </div>
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
                </>
                : <div className="result" >
                        <div className="resultTitle">
                            <img src={assets.images} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                                
                        <div className="resultData">
                        <img src={assets.geminiIcon} alt="" />
                        {/* ADDING LOADING STATE IF THE RESULT IS NOT YET AVAILABLE */}
                        {loading? 
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                        }
                        
                    </div>
                            {/* </>
                        ) 
                    })} */}

                    {/* <div className="resultTitle">
                        <img src={assets.images} alt="" />
                        <p>{recentPrompt}</p>
                    </div> */}
                    
                    {/* <div className="resultData">
                        <img src={assets.geminiIcon} alt="" /> */}
                        {/* ADDING LOADING STATE IF THE RESULT IS NOT YET AVAILABLE */}
                        {/* {loading? 
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                        }
                        
                    </div> */}
                </div>
                    
                }

                <div className="mainBottom">
                    <div className="searchBox">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text"  placeholder="Enter prompt" autoFocus/>
                        <div className="bottomImages">
                            <img src={assets.imagesSolid}alt="" />
                            <img src={assets.microphoneSolid}alt="" />
                            {input? <img onClick={() => onSent()} src={assets.paperPlane} alt="" /> : null}
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